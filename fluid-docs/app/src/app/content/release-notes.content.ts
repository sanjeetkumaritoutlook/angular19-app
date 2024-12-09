import {
  FluidPageContent,
  FluidPageSectionStyle,
} from '../model/fluid-docs-content.interface';
import { releaseNotes16122021 } from './release-notes/2021/16-12-2021.content';
import { releaseNotes9122021 } from './release-notes/2021/09-12-2021.content';
import { inlineLink, text } from './content.utils';
import { releaseNotes02122021 } from './release-notes/2021/02-12-2021.content';
import { releaseNotes03012022 } from './release-notes/2022/03-02-2022.content';
import { releaseNotes17022022 } from './release-notes/2022/17-02-2022.content';
import { releaseNotes11032022 } from './release-notes/2022/11-03-2022.content';
import { releaseNotes01042022 } from './release-notes/2022/01-04-2022.content';
import { releaseNotes15042022 } from './release-notes/2022/15-04-2022.content';
import { releaseNotes10052022 } from './release-notes/2022/10-05-2022.content';
import { releaseNotes31052022 } from './release-notes/2022/31-05-2022.content';
import { releaseNotes10062022 } from './release-notes/2022/10-06-2022.content';
import { releaseNotes07072022 } from './release-notes/2022/07-07-2022.content';
import { releaseNotes11082022 } from './release-notes/2022/11-08-2022.content';
import { releaseNotes31082022 } from './release-notes/2022/31-08-2022.content';
import { releaseNotes27092022 } from './release-notes/2022/19-09-2022.content';
import { releaseNotes13102022 } from './release-notes/2022/12-10-2022.content';
import { releaseNotes26102022 } from './release-notes/2022/26-10-2022.content';
import { releaseNotes15112022 } from './release-notes/2022/15-11-2022.content';
import { releaseNotes12122022 } from './release-notes/2022/8-12-2022.content';
import { releaseNotes19012023 } from './release-notes/2023/19-01-2023.content';
import { releaseNotes20230209 } from './release-notes/2023/09-02-2023.content';
import { releaseNotes21022023 } from './release-notes/2023/21-02-2023.content';
import { releaseNotes28032023 } from './release-notes/2023/28-03-2023.content';
import { releaseNotes11042023 } from './release-notes/2023/11-04-2023.content';
import { releaseNotes26042023 } from './release-notes/2023/26-04-2023.content';
import { releaseNotes03052023 } from './release-notes/2023/03-05-2023.content';
import { releaseNotes05062023 } from './release-notes/2023/05-06-2023.content';
import { releaseNotes18052023 } from './release-notes/2023/18-05-2023.content';
import { releaseNotes03072023 } from './release-notes/2023/03-07-2023.content';
import { releaseNotes03082023 } from './release-notes/2023/03-08-2023.content';
import { releaseNotes29082023 } from './release-notes/2023/29-08-2023.content';
import { releaseNotes21092023 } from './release-notes/2023/21-09-2023.content';
import { releaseNotes05102023 } from './release-notes/2023/05-10-2023.content';
import { releaseNotes19102023 } from './release-notes/2023/19-10-2023.content';
import { releaseNotes02112023 } from './release-notes/2023/02-11-2023.content';
import { releaseNotes17112023 } from './release-notes/2023/17-11-2023.content';
import { releaseNotes07122023 } from './release-notes/2023/07-12-2023.content';
import { releaseNotes17012024 } from './release-notes/2024/17-01-2024.content';
import { releaseNotes08022024 } from './release-notes/2024/08-02-2024.content';
import { releaseNotes27022024 } from './release-notes/2024/27-02-2024.content';
import { releaseNotes21032024 } from './release-notes/2024/21-03-2024.content';
import { releaseNotes12042024 } from './release-notes/2024/12-04-2024.content';
import { releaseNotes25042024 } from './release-notes/2024/25-04-2024.content';
import { releaseNotes01062023 } from './release-notes/2023/01-06-2023.content';
import { releaseNotes09052024 } from './release-notes/2024/09-05-2024.content';
import { releaseNotes23052024 } from './release-notes/2024/23-05-2024.content';
import { releaseNotes06062024 } from './release-notes/2024/06-06-2024.content';
import { releaseNotes11072024 } from './release-notes/2024/11-07-2024.content';
import { releaseNotes25072024 } from './release-notes/2024/25-07-2024.content';
import { releaseNotes05092024 } from './release-notes/2024/05-09-2024.content';
import { releaseNotes26092024 } from './release-notes/2024/26-09-2024.content';
import { releaseNotes08102024 } from './release-notes/2024/08-10-2024.content';
import { releaseNotes24102024 } from './release-notes/2024/24-10-2024.content';
import { releaseNotes07112024 } from './release-notes/2024/07-11-2024.content';
import { releaseNotes21112024 } from './release-notes/2024/21-11-2024.content';

export const releaseNotes = [
  releaseNotes9122021(),
  releaseNotes02122021(),
  releaseNotes16122021(),
  releaseNotes03012022(),
  releaseNotes17022022(),
  releaseNotes11032022(),
  releaseNotes01042022(),
  releaseNotes15042022(),
  releaseNotes10052022(),
  releaseNotes31052022(),
  releaseNotes10062022(),
  releaseNotes07072022(),
  releaseNotes11082022(),
  releaseNotes31082022(),
  releaseNotes27092022(),
  releaseNotes13102022(),
  releaseNotes26102022(),
  releaseNotes15112022(),
  releaseNotes12122022(),
  releaseNotes19012023(),
  releaseNotes20230209(),
  releaseNotes21022023(),
  releaseNotes28032023(),
  releaseNotes11042023(),
  releaseNotes26042023(),
  releaseNotes03052023(),
  releaseNotes18052023(),
  releaseNotes01062023(),
  releaseNotes05062023(),
  releaseNotes03072023(),
  releaseNotes03082023(),
  releaseNotes29082023(),
  releaseNotes21092023(),
  releaseNotes05102023(),
  releaseNotes19102023(),
  releaseNotes02112023(),
  releaseNotes17112023(),
  releaseNotes07122023(),
  releaseNotes17012024(),
  releaseNotes08022024(),
  releaseNotes27022024(),
  releaseNotes21032024(),
  releaseNotes12042024(),
  releaseNotes25042024(),
  releaseNotes09052024(),
  releaseNotes23052024(),
  releaseNotes06062024(),
  releaseNotes11072024(),
  releaseNotes25072024(),
  releaseNotes05092024(),
  releaseNotes26092024(),
  releaseNotes08102024(),
  releaseNotes24102024(),
  releaseNotes07112024(),
  releaseNotes21112024(),
].sort((a, b) => (a.lastUpdated > b.lastUpdated ? -1 : 0));

export const releaseNotesContent = (): FluidPageContent => ({
  pageTitle: 'Production Release Notes',
  sectionStyle: FluidPageSectionStyle.FLOW,
  pageIntroduction: [
    text(`Per our ${inlineLink(
      './pages/release/release-strategy',
      'release strategy'
    )}, we <strong>aim</strong> to release to production every week. This allows
    us to have any new features or updates released into our non-prod environments for between 7 and 10 days for crowdsourced release verification!`),
    text(
      'FLUID production releases are deployed in the early hours of the UK morning, typically around 4.00am (GMT). This affords our UK based developers ' +
        "the time to verify the release in production before the US wakes up, and if in the <em><strong>highly unlikely</strong></em> event our strategy hasn't caught " +
        'something, roll back the release before crucial business hours.'
    ),
  ],
  author: releaseNotes[0].author,
  lastUpdated: releaseNotes[0].lastUpdated,
  sections: releaseNotes.map((releaseNote) => ({
    title: releaseNote.title,
    content: releaseNote.content,
  })),
});
