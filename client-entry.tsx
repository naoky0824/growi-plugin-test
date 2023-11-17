import { withCopyButton } from './src/CodeWithCopyButton';
import { withAISearch } from './src/NavWithAISearch';

import './src/NavWithAISearch.css';

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
    const grwAppTitle = navbar?.getElementsByClassName('grw-app-title')[0];
    const fragment = document.createDocumentFragment();
    const aisearchDivEle = document.createElement("div");
    const aisearchInputEle = document.createElement("input");
    aisearchInputEle.id = 'grw-ai-search'
    aisearchInputEle.className = 'grw-ai-search-container form-control';
    aisearchInputEle.type = 'text';
    aisearchInputEle.placeholder = 'AI-Search ...';
    aisearchInputEle.autocomplete = 'off';
    aisearchInputEle.ariaAutoComplete = 'both';
    aisearchInputEle.ariaExpanded = 'true';
    aisearchInputEle.ariaHasPopup = 'listbox';
    // aisearchInputEle.role = 'combobox';
    const search = fragment
      .appendChild(aisearchDivEle)
      .appendChild(aisearchInputEle)
    grwAppTitle?.after(fragment);

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
