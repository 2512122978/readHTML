
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"myface{width:88px; height:88px; border:5px solid #F1F2F3; border-radius:100%; margin:15px auto;}\n.",[1],"myface wx-image{width:100%; border-radius:100%;}\n.",[1],"myart-list{width:100%; margin:8px 0; overflow:hidden; border-bottom:1px dashed #D7D8D9;}\n.",[1],"myart-list .",[1],"title{line-height:2em; width:100%;}\n.",[1],"myart-list .",[1],"btns{line-height:2em; width:100%;}\n.",[1],"myart-list .",[1],"btns wx-view{float:right; padding:0 6px; margin:0 5px; color:#00B26A;}\n.",[1],"myart-list .",[1],"btns wx-view:last-child{color:#F76260;}\n.",[1],"loadMore{width:100%; padding:8px 0; text-align:center; color:#CCCCCC;}\n",],undefined,{path:"./pages/my/my.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/my/my.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      