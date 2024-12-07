const NON_ALPHANUMERIC_REGEXP = /[\W_]+/g;
export const PRETTY_DATE = 'cccc LLLL dd, yyyy';

export const camelCaseToPascalCase = (str: string): string => {
  return (
    str?.substring(0, 1).toUpperCase() +
    str.substring(1, str.length).replace(NON_ALPHANUMERIC_REGEXP, '')
  );
};

export const spaceCaseToCamelCase = (str: string): string => {
  return str
    ?.split(' ')
    .map((s: string, idx: number) =>
      idx === 0 ? s.toLowerCase() : camelCaseToPascalCase(s)
    )
    .join('')
    .replace(NON_ALPHANUMERIC_REGEXP, '');
};

export const pascalCaseToKebabCase = (str: string) => {
  return str
    .split('')
    .map((letter, idx) => {
      return letter.toUpperCase() === letter
        ? `${idx !== 0 ? '-' : ''}${letter.toLowerCase()}`
        : letter;
    })
    .join('');
};

export const spaceCaseToOptions = (
  options: string[]
): { label: string; value: string }[] => {
  return options?.map((option) => ({
    label: option,
    value: spaceCaseToCamelCase(option),
  }));
};

export const playgroundConfigUrl = (type: string, fileName: string) => {
  return `https://git.forge.lmig.com/projects/IUNDERWRITE/repos/fluid/browse/apps/angular/src/app/pages/advanced-usage/playgrounds/${type}/config/${fileName}`;
};

export const repositoryGitUrl = () =>
  'https://github.com/lmigtech/fluid-components.git';
export const docsiteDirectory = () => '/app';
