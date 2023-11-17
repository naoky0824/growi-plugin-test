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
    // console.log("optionPrev");
    // console.log(optionPrev)
    // const Code = options.components.code;
    // console.log("options");
    // console.log(options);
    // console.log("options.components");
    // console.log(options.components);

    // replace
    // options.components.code = withCopyButton(Code);
    // options.components.code = withAISearch(Nav);

    // ------ 画面上部ナビバーへの差し込み
    const navbar = document.getElementById('grw-navbar');

    const kizonAiSearch = document.getElementById('grw-ai-search');
    console.log(kizonAiSearch);

    if (kizonAiSearch===null || kizonAiSearch===undefined) {
      const grwAppTitle = navbar?.getElementsByClassName('grw-app-title')[0];
      const fragment = document.createDocumentFragment();
  
      const aisearchDivEle = document.createElement("div");
      const aisearchInputEle = document.createElement("input");
      aisearchDivEle.id = 'grw-ai-search';
      aisearchDivEle.className = 'grw-ai-search-container';
      aisearchInputEle.className = 'form-control';
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
    }

    // -------- 画面左メニューに独自メニューを追加
    const kizonSidebarAiSearch = document.getElementById('customSideBarAISearchButton');
    console.log(kizonSidebarAiSearch);

    if (kizonSidebarAiSearch===null || kizonSidebarAiSearch===undefined) {
      const sidebarNav = document.getElementsByClassName('grw-sidebar-nav-primary-container')[0];
      console.log(sidebarNav);
  
      const searchBtnFragment = document.createDocumentFragment();
      const aisearchBtnEle = document.createElement("button");
      const aisearchIEle = document.createElement("i");
  
      aisearchBtnEle.id = 'customSideBarAISearchButton'
      aisearchBtnEle.className = 'd-block btn btn-primary ';
      aisearchBtnEle.type = 'button';
      aisearchIEle.className = 'material-icons';
      aisearchIEle.textContent = 'search'
      const searchBtn = searchBtnFragment
        .appendChild(aisearchBtnEle)
        .appendChild(aisearchIEle)
      sidebarNav.appendChild(searchBtn)
    }

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
