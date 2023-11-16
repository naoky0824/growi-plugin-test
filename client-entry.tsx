import { withCopyButton } from './src/CodeWithCopyButton';
import loggerFactory from './src/loggerFactory';

const logger = loggerFactory('growi:plugin:growi-plugin-test');

declare const growiFacade: any;

const activate = (): void => {
  if (growiFacade == null || growiFacade.markdownRenderer == null) {
    return;
  }

  const { optionsGenerators } = growiFacade.markdownRenderer;

  optionsGenerators.customGenerateViewOptions = (...args: any[]) => {
    const options = optionsGenerators.generateViewOptions(...args);
    const Code = options.components.code;
    logger.debug(Code);

    // replace
    options.components.code = withCopyButton(Code);

    return options;
  };
};

const deactivate = (): void => {
};

// register activate
if ((window as any).pluginActivators == null) {
  (window as any).pluginActivators = {};
}
(window as any).pluginActivators['growi-plugin-test'] = {
  activate,
  deactivate,
};
