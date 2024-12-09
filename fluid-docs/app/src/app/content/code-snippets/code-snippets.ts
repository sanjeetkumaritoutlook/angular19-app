import { toParamList } from './code-snippet.utils';
import { convertToCamel } from '@lmig/fluid-core';

export interface FluidCodeParam {
  type: string;
  name?: string;
  value: any;
}

export const exposedMethod = (
  tag: string,
  methodName: string,
  params: FluidCodeParam[]
) => ({
  angular: `this.${convertToCamel(
    tag
  )}Ref.nativeElement.${methodName}(${toParamList(params)})`,
  react: `${convertToCamel(tag)}Ref.${methodName}(${toParamList(params)})`,
});
