import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { FluidFormatters } from '@lmig/fluid-core/lib/utils/formatting.utils';
import {
  convertToTitleCase,
  FluidAlignment,
  FluidColor,
  FluidComponentDefinition,
  FluidLocale,
  FluidTableHeader,
} from '@lmig/fluid-core';
import { differenceInDays, formatDistance } from 'date-fns';

type EnvironmentStatus = {
  environmentName: string;
  lastDeployment: string;
  isDrRegion: boolean;
};

@Component({
  selector: 'app-environment-status',
  templateUrl: './environment-status.component.html',
  styleUrls: ['./environment-status.component.less'],
})
export class EnvironmentStatusComponent implements OnInit {
  environments: EnvironmentStatus[];

  headers: FluidTableHeader[] = [
    {
      dataPath: 'environment',
      label: 'Environment Name',
      dataFormat: (data) => convertToTitleCase(data.replace(/-/g, ' ')),
      disableFilters: true,
    },
    {
      dataPath: 'deploymentDate',
      label: 'Last Deployment',
      dataFormat: (data) =>
        FluidFormatters.formatDate(
          data,
          FluidLocale.UNITED_STATES,
          FluidFormatters.dateFormats.SHORT_TIME
        ),
      disableFilters: true,
    },
    {
      label: 'Days Ago',
      renderComponent: ({ deploymentDate }) => ({
        component: 'fluid-text',
        props: {
          color: this.getDaysAgoColor(deploymentDate),
        },
        content: `${this.calculateDaysAgo(deploymentDate)} ago`,
      }),
      disableFilters: true,
    },
    {
      dataPath: 'drRegion',
      label: 'Primary Region Status',
      cellAlignment: FluidAlignment.CENTER,
      disableFilters: true,
      helpText:
        'FLUID environments are backed by a secondary DR region in case of disaster in the primary region. If the primary region were to ' +
        'go down for any reason, our DR strategy will automatically switch to the secondary region.',
      renderComponent: ({ drRegion }): FluidComponentDefinition => ({
        component: 'fluid-icon',
        props: {
          config: {
            key: drRegion === 'false' ? 'success' : 'error',
            color: drRegion === 'false' ? 'success' : 'error',
            size: 'sm',
          },
        },
      }),
    },
  ];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.makeAPICalls();
  }

  calculateDaysAgo(date) {
    const today = new Date();
    return formatDistance(new Date(date), today);
  }

  getDaysAgoColor(date) {
    const today = new Date();
    const distance = differenceInDays(today, new Date(date));
    switch (true) {
      case distance >= 0 && distance < 7:
        return FluidColor.SUCCESS;
      case distance >= 7 && distance < 14:
        return FluidColor.WARNING;
      case distance >= 14:
        return FluidColor.ERROR;
      default:
        return FluidColor.INFO;
    }
  }

  makeAPICalls() {
    const urls: string[] = [
      `https://fluid-development.lmig.com/fluid/deployment-info.json`,
      `https://fluid-test.lmig.com/fluid/deployment-info.json`,
      `https://fluid-staging.lmig.com/fluid/deployment-info.json`,
      `https://fluid-pre-production.lmig.com/fluid/deployment-info.json`,
      `https://fluid-backup.libertymutual.com/fluid/deployment-info.json`,
      `https://fluid.libertymutual.com/fluid/deployment-info.json`,
    ];

    const requests = urls.map((url) => this.http.get(url));

    forkJoin(requests).subscribe(
      (responses: EnvironmentStatus[]) => (this.environments = responses),
      (error: HttpErrorResponse) => {
        console.error(error);
      }
    );
  }
}
