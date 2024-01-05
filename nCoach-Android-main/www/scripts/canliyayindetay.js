const controller = "userlivebroadcasts/";
const dataListId = "broadcastEmbed";
let notificationDetail = null;
let broadcastDetail = null;

function addUserInTeam(){
  const userTeamAddImage = document.getElementById("userTeamAddImage");
  const userTeamAddName = document.getElementById("userTeamAddName");
  
  let link = window.server+"avatars/";
  userTeamAddImage.src = window.getImage(broadcastDetail.image,link);
  userTeamAddName.innerText = broadcastDetail.name;
  
}

function beforeStart(){
  return document.getElementById(dataListId).innerHTML = window.loadingData;
}

function start(){
  
  let notificationId = location.search.replace("?id=","");
  let url = window.api+controller+notificationId;

  cordova.plugin.http.get(url, {}, { Authorization: 'Bearer '+window.getToken() }, function(response) {
  
    try {
      
      notificationDetail = JSON.parse(response.data);
      console.log(notificationDetail);
      broadcastDetail = notificationDetail;
      document.getElementById("broadcastTitle").innerText = broadcastDetail.title;

      let html = `<iframe width="100%" height="350" src="${broadcastDetail.embed}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
    
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

      setTimeout(() => {
        let userTeamAddButton = document.querySelector("#userTeamAddButton");
        if (userTeamAddButton) {
          userTeamAddButton.addEventListener("click", armondo => {
            window.loader();
            const userTeamAddGroup = document.getElementById("userTeamAddGroup");
            
            if(userTeamAddGroup==''){
              window.loader(false);
              window.notify(false,window.langs.eksikalanbirakmayin);
              return;
            }
            cordova.plugin.http.post(window.api+"userteams/", {
              sub_id: broadcastDetail.id,
              user_group: userTeamAddGroup.value
            }, { Authorization: 'Bearer '+window.getToken() }, function(response) {
            // prints 200
              // alert(1);
              window.loader(false);
              try {
                response.data = JSON.parse(response.data);
                
                window.notify(true,"İstek gönderildi.");
                window.menuClose();
                userTeamAddGroup.value="";

                cordova.plugin.http.post(window.api+"usernotifications/send", {
                  user_id: broadcastDetail.id,
                  lang: "tr",
                  type: "addUserToTeam"
                }, { Authorization: 'Bearer '+window.getToken() }, function(response) {
                  try {
                    response.data = JSON.parse(response.data);
                  } catch(e) {
                    // window.notify(false,e);
                  }
                }, function(response) {
                  // document.getElementById("export").innerHTML = JSON.stringify(response);
                  // let res = JSON.parse(response.error);
                  // window.notify(false,res.message);
                });
      
              } catch(e) {
                window.notify(false,e);
              }
            }, function(response) {
              window.loader(false);
              // document.getElementById("export").innerHTML = JSON.stringify(response);
              let res = JSON.parse(response.error);
              window.notify(false,res.message);
            });
            
          });
        }
        ;
        
      }, 500);
    }
    
  }

  init();
});