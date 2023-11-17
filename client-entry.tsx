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
    const optionPrev = optionsGenerators.generatePreviewOptions(...args);
    console.log("optionPrev");
    console.log(optionPrev)
    // const Code = options.components.code;
    console.log("options");
    console.log(options);
    console.log("options.components");
    console.log(options.components);
    // const Nav = options.components.nav;

    // replace
    // options.components.code = withCopyButton(Code);
    // options.components.code = withAISearch(Nav);

    const navbar = document.getElementById('grw-navbar');
    const grwAppTitle = document.getElementsByClassName('grw-app-title')[0];
    const fragment = document.createDocumentFragment();
    const search = fragment
      .appendChild(document.createElement("div"))
      .appendChild(document.createElement("ul"))
    search.textContent = "　＜ここにAI検索を配置＞　";
    grwAppTitle.insertBefore(fragment, grwAppTitle.nextSibling);

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
