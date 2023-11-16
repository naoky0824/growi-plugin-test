import { withCopyButton } from './src/CodeWithCopyButton';
import { withAISearch } from './src/NavWithAISearch';


declare const growiFacade: any;

const activate = (): void => {
  if (growiFacade == null || growiFacade.markdownRenderer == null) {
    return;
  }

  const { optionsGenerators } = growiFacade.markdownRenderer;

  optionsGenerators.customGenerateViewOptions = (...args: any[]) => {
    const options = optionsGenerators.generateViewOptions(...args);
    // const Code = options.components.code;
    console.log(options.components);
    const Nav = options.components.nav;

    // replace
    // options.components.code = withCopyButton(Code);
    options.components.code = withAISearch(Nav);

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
