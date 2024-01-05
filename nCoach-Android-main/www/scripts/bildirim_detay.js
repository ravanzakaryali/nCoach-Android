const controller = "usernotifications/";
const dataListId = "notificationDetail";
let notificationDetail = null;

function beforeStart(){
  return document.getElementById(dataListId).innerHTML = window.loadingData;
}

function start(){
  
  let notificationId = location.search.replace("?id=","");
  let url = window.api+controller+notificationId;

  cordova.plugin.http.get(url, {}, { Authorization: 'Bearer '+window.getToken() }, function(response) {
  
    try {
      notificationDetail = JSON.parse(response.data);

      let html = `<div class="d-flex">
            <div class="align-self-center">
                <h4 class="mb-n1" id="notificationTitle">${notificationDetail.title}</h4>
                <p class="font-10 opacity-50" id="notificationSenderName">${window.getValue(notificationDetail.created_at,"getDayMonthYear")}</p>
            </div>
        </div>
        <p id="notificationDescription">${notificationDetail.description}</p>`;
    
      document.getElementById(dataListId).innerHTML = html;
      
    } catch(e) {
      window.notify(false,e);
    }
  }, function(response) {
    window.loader(false);
    let res = JSON.parse(response.error);
    window.notify(false,res.message);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  ("use strict");
  function init(){
    if(!location.search.length > 0){
      window.location.href="anasayfa.html";
      return;
    }
    beforeStart();

    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
      
      // setTimeout(() => {
      //   const ptr = PullToRefresh.init({
      //     mainElement: '.page-content',
      //     instructionsPullToRefresh: window.langs.yenilemekicinkaydir,
      //     instructionsReleaseToRefresh: window.langs.yenidenyukle,
      //     instructionsRefreshing: window.langs.yukleniyor,
      //     onRefresh() {
      //       beforeStart();
      //       start();
      //     },
      //   });
      // }, 300);
      start();

    }
    
  }

  init();
});