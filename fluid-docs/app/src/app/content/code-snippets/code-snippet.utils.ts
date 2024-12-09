import { FluidCodeParam } from './code.snippets';
import { kebabCaseToCamelCase, convertToCamel } from '@lmig/fluid-core';

export const toParamList = (params: FluidCodeParam[]) => {
  return params
    ?.map((param: FluidCodeParam, idx: number) => {
      const paramValue =
        param.type === 'string' ? `'${param.value}'` : param.value;
      return idx === params.length - 1 ? paramValue : `${paramValue}, `;
    })
    .join('');
};

export const toAngularMethod = (
  tag: string,
  event: string,
  params: FluidCodeParam[] = []
) => {
  const element = `${kebabCaseToCamelCase(tag)}Element`;
  return [
    {
      label: 'Use @ViewChild to reference element',
      code: `@ViewChild(${element}, { static: false }) ${element}: ElementRef;`,
    },
    {
      label: 'Apply reference marker in template',
      code: `<${tag} #${element} ...props ...event listeners/>`,
    },
    {
      label: 'Call method on the nativeElement',
      code: `this.${element}.nativeElement.${event}(${toParamList(params)})
    .then((returnValue?) => {
        // do something with return value, if applicable
    });`,
    },
  ];
};

export const toReactMethod = (tag: string, event: string, params: string[]) => {
  return `<${tag} ref=\{useCustomElementRef({
    ${event}: (event: CustomEvent) => handle${convertToCamel(
    event
  )}(event.detail)}(,
}, { ...props })}/>`;
};

export const toVueMethod = (tag: string, event: string, params: string[]) => {
  return `Coming Soon!`;
};

export const toJavascriptMethod = (
  tag: string,
  event: string,
  params: string[]
) => {
  const element = `${convertToCamel(tag)}Element`;
  return `${element}.addEventListener('${event}', function(event) {
       handle${convertToCamel(event)}(event.detail);
  })`;
};
