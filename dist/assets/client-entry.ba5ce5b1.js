const l=()=>{if(growiFacade==null||growiFacade.markdownRenderer==null)return;const{optionsGenerators:e}=growiFacade.markdownRenderer;e.customGenerateViewOptions=(...o)=>{const n=e.generateViewOptions(...o),r=e.generatePreviewOptions(...o);console.log("optionPrev"),console.log(r),console.log("options"),console.log(n),console.log("options.components"),console.log(n.components),document.getElementById("grw-navbar");const t=document.getElementsByClassName("grw-app-title")[0],i=document.createDocumentFragment(),c=i.appendChild(document.createElement("div")).appendChild(document.createElement("ul"));return c.textContent="\u3000\uFF1C\u3053\u3053\u306BAI\u691C\u7D22\u3092\u914D\u7F6E\uFF1E\u3000",t.insertBefore(i,t.nextSibling),n}},s=()=>{};window.pluginActivators==null&&(window.pluginActivators={});window.pluginActivators["growi-plugin-test"]={activate:l,deactivate:s};