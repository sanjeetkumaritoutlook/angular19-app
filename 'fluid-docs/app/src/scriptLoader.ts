const nonProdFluidScripts = {
  fluidScriptESM: 'https://fluid-dev.lmig.com/fluid/build/fluid.esm.js',
  fluidScriptLegacy: 'https://fluid-dev.lmig.com/fluid/build/fluid.js',
  fluidStyleSheet: 'https://fluid-dev.lmig.com/fluid/build/fluid.css',
};

const prodFluidScripts = {
  fluidScriptESM: 'https://fluid.lmig.com/fluid/build/fluid.esm.js',
  fluidScriptLegacy: 'https://fluid.lmig.com/fluid/build/fluid.js',
  fluidStyleSheet: 'https://fluid.lmig.com/fluid/build/fluid.css',
};

export function differentialScriptLoader(
  esmScriptPath,
  legacyScriptPath,
  script
) {
  script = document.createElement('script');
  if ('noModule' in script) {
    script.type = 'module';
    script.src = esmScriptPath;
  } else {
    script.type = 'text/javascript';
    script.src = legacyScriptPath;
  }
  document.head.appendChild(script);
}

export function scriptLoader(scriptPath, script) {
  script.type = 'text/javascript';
  script.src = scriptPath;
  document.head.appendChild(script);
}

export function stylesheetLoader(stylesheet) {
  const element = document.createElement('link');
  element.setAttribute('rel', 'stylesheet');
  element.setAttribute('href', stylesheet);
  document.head.appendChild(element);
}

export function loadFluidBasedOnHost(hostName = window.location.hostname) {
  return isNonProd() ? nonProdFluidScripts : prodFluidScripts;
}

function isNonProd(hostName = window.location.hostname): boolean {
  return (
    hostName.indexOf('stage') > -1 ||
    hostName.indexOf('perf') > -1 ||
    hostName.indexOf('dev3') > -1 ||
    hostName.indexOf('test') > -1 ||
    hostName.indexOf('localhost') > -1
  );
}
