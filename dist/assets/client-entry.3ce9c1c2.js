const t=()=>{if(growiFacade==null||growiFacade.markdownRenderer==null)return;const{optionsGenerators:n}=growiFacade.markdownRenderer;n.customGenerateViewOptions=(...e)=>{const o=n.generateViewOptions(...e);return console.log("options"),console.log(o),console.log("options.components"),console.log(o.components),o}},i=()=>{};window.pluginActivators==null&&(window.pluginActivators={});window.pluginActivators["growi-plugin-test"]={activate:t,deactivate:i};
