export const toJavascriptMethod = (
  refName: string,
  name: string,
  args: any[]
) => {
  return `this._${refName}.nativeElement.${name}(${args.join(
    args.length > 4 ? ', \n' : ', '
  )});`;
};

export const toReactMethod = (refName: string, name: string, args: any[]) => {
  return `this._${refName}.nativeElement.${name}(${args.join(
    args.length > 4 ? ', \n' : ', '
  )});`;
};

export const toAngularMethod = (refName: string, name: string, args: any[]) => {
  return `this._${refName}.nativeElement.${name}(${args.join(
    args.length > 4 ? ', \n' : ', '
  )});`;
};

export const toVueMethod = (refName: string, name: string, args: any[]) => {
  return `this._${refName}.nativeElement.${name}(${args.join(
    args.length > 4 ? ', \n' : ', '
  )});`;
};

export const toSvelteMethod = (refName: string, name: string, args: any[]) => {
  return `this._${refName}.nativeElement.${name}(${args.join(
    args.length > 4 ? ', \n' : ', '
  )});`;
};
