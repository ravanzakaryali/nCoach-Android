const controller = "usernotifications/";
const livebroadcastListId = "userLiveBroadcastList";
let livebroadcastDetail = null;
let livebroadcastDataList = null;
let notificationDetail = null;
let notificationDataList = null;

function beforeStart(){
  document.getElementById(livebroadcastListId).innerHTML = window.loadingData;
}
function start(){
  cordova.plugin.http.get(window.api+"userHome", {}, { Authorization: 'Bearer '+window.getToken() }, function(response) {
  // prints 200
    // alert(1);
    try {
      response.data = JSON.parse(response.data);
      livebroadcastDataList = response.data.livebroadcasts;
      notificationDataList = response.data.notifications;
      console.log(livebroadcastDataList);
      if(livebroadcastDataList.length){

        let str = livebroadcastDataList.reduce(function(str, data, index) {
          return str.concat(`<div class="row mb-0" onclick="javascript:getDetailData('${data.id}');" data-id="${data.id}">
          <a class="d-flex mt-0">
              <div class="align-self-center ps-3">
                  <h5 class="mb-n1">${data.title}</h5>
                  <p class="font-600 opacity-40 mb-0">${window.getValue(data.created_at,"getDayMonthYear") + " " + window.getValue(data.created_at,"getTime")}</p>
              </div>
              <div class="align-self-center ms-auto">
                  <i class="fa fa-play-circle font-24 color-highlight"></i>
              </div>
          </a></div>`);
        }, '');
        document.getElementById(livebroadcastListId).innerHTML = str;
      }else{
        document.getElementById(livebroadcastListId).innerHTML = window.notFoundData("Canlı yayın mevcut değil.");
      }
      
      // window.reloadSlider();

    } catch(e) {
      window.notify(false,e);
    }
  }, function(response) {
    let res = JSON.parse(response.error);
    window.notify(false,res.message);
  });
}
function getDetailData(id){
  window.location.href='canli-yayin-detay.html?id=' + id;
}

document.addEventListener("DOMContentLoaded", () => {
  ("use strict");
  function init(){
    beforeStart();

    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
      
      setTimeout(() => {
        const ptr = PullToRefresh.init({
          mainElement: '.page-content',
          instructionsPullToRefresh: window.langs.yenilemekicinkaydir,
          instructionsReleaseToRefresh: window.langs.yenidenyukle,
          instructionsRefreshing: window.langs.yukleniyor,
          onRefresh() {
            beforeStart();
            start();
          },
        });
      }, 300);
      start();
    }
  }
  
  init();
});
