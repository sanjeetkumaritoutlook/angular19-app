export const toAngularEvent = (elementName: string, eventName: string) => {
  return `<${elementName} (${eventName})="handleEvent($event.detail)"></${elementName}>`;
};

export const toJavascriptEvent = (elementName: string, eventName: string) => {
  return `<${elementName} (${eventName})="handleEvent($event.detail)""></${elementName}>`;
};

export const toVueEvent = (elementName: string, eventName: string) => {
  return `<${elementName} (${eventName})="handleEvent($event.detail)"></${elementName}>`;
};

export const toSvelteEvent = (elementName: string, eventName: string) => {
  return `<${elementName} (${eventName})="handleEvent($event.detail)"></${elementName}>`;
};

export const toReactEvent = (elementName: string, eventName: string) => {
  return `const elementRef = useCustomElementRef(
    {
      ${eventName}: (event: CustomEvent) => handleEvent(event.detail)
    },
    {
        ...props
    });
return <${elementName} ref={elementRef} />`;
};
