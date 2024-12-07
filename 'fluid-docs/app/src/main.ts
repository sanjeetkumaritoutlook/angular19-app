import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { fluid } from '@lmig/fluid-core';
import { datadogRum } from '@datadog/browser-rum';

function setDataDogEnvironment() {
  let environment: string = 'development';
  if (window !== undefined) {
    const isProd = window.location.href.indexOf('fluid-design') !== -1;
    const isV2 = window.location.href.indexOf('non-production') !== -1;
    switch (true) {
      case isProd:
        environment = 'production';
        break;
      case isV2:
        environment = 'v2';
        break;
      default:
        environment = 'development';
    }
  }
  return environment;
}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

datadogRum.setGlobalContextProperty(
  'troux_uuid',
  '9B3BA81A-ADFF-4898-8EB5-9EDE3063C130'
);
datadogRum.init({
  applicationId: 'dc115686-4c5f-4499-bc0b-c9f1268c5ead',
  clientToken: 'pubc87d856fdb1ba27c4fb927c0119fae37',
  site: 'datadoghq.com',
  service: 'fluid-docs',
  env: setDataDogEnvironment(),
  version: setDataDogEnvironment() === 'v2' ? '2.0.0' : '1.0.0',
  sessionSampleRate: 100,
  sessionReplaySampleRate: 20,
  trackUserInteractions: true,
  trackResources: true,
  trackLongTasks: true,
  defaultPrivacyLevel: 'mask',
});

fluid.init(environment.fluid, { useLocal: false });
