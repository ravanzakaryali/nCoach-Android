const controller = "usernotifications/";
const notificationListId = "userNotificationList";
let livebroadcastDetail = null;
let livebroadcastDataList = null;
let notificationDetail = null;
let notificationDataList = null;

function beforeStart(){document.getElementById(notificationListId).innerHTML = window.loadingData;
}
function start(){
  cordova.plugin.http.get(window.api+controller, {}, { Authorization: 'Bearer '+window.getToken() }, function(response) {
  // prints 200
    // alert(1);
    try {
      response.data = JSON.parse(response.data);
      notificationDataList = response.data;
      
      if(notificationDataList.length){
        console.log(data)
        let link = window.server+"avatars/";
        let str = notificationDataList.reduce(function(str, data, index) {

          let month = window.getValue(data.created_at,"getMonth");
          let image = "";
          let name = "Pasif Hesap";
          if(data.sender){
            image = data.sender.image;
            name = data.sender.name;
          }

          return str.concat(`<div class="row mb-0" onclick="javascript:getDetailData('${data.type}','${data.id}');" data-id="${data.id}">
          <a class="d-flex">
              <div class="align-self-center">
                  <img src="${window.getImage(image,link)}" width="45" class="rounded-xl border ${data.read ? "":"border-s"} me-3">
              </div>
              <div class="align-self-center w-100">
                  <h5 class="${data.read ? "opacity-70":""}">${name}</h5>
                  <p class="font-500 opacity-70 mt-n2">${data.title}</p>
              </div>
          </a></div>`);
        }, '');
        document.getElementById(notificationListId).innerHTML = str;
      }else{
        document.getElementById(notificationListId).innerHTML = window.notFoundData("Henüz bildirim almadınız.");
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
function getDetailData(type,id){
  
  if(type=="addUserToTeam"){
    window.location.href='takim-detay.html?id=' + id;
  }
  if(type=="newLiveBroadcast"){
    window.location.href='canli-yayin-detay.html?id=' + id;
  }
  if(type=="userPush"){
    window.location.href='bildirim-detay.html?id=' + id;
  }
  if(type=="teamPush"){
    window.location.href='bildirim-detay.html?id=' + id;
  }
  
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
