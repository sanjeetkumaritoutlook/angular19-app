import {
  FluidPageContent,
  FluidPageSectionStyle,
} from '../model/fluid-docs-content.interface';
import { architectureFaqs } from './faqs/architecture.faqs';
import { roadmapFaqs } from './faqs/roadmap.faqs';
import { processFaqs } from './faqs/process.faqs';
import { faq, Joe, section } from './content.utils';

export const faqSections = [
  { category: 'Architecture', questions: architectureFaqs() },
  { category: 'Roadmap', questions: roadmapFaqs() },
  { category: 'Process', questions: processFaqs() },
];

export const faqPageContent = (): FluidPageContent => ({
  pageTitle: 'Frequently Asked Questions',
  pageIntroduction: [],
  author: Joe,
  lastUpdated: new Date('2022-01-07'),
  sectionStyle: FluidPageSectionStyle.TABS,
  sections: faqSections.map((faqSection) =>
    section(
      faqSection.category,
      faqSection.questions.map((faqItem) =>
        faq({
          question: faqItem.question,
          answer: faqItem.answer,
          collapsed: false,
        })
      )
    )
  ),
});
