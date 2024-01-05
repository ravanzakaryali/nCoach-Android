const controller = "userlivebroadcasts/";

document.addEventListener("DOMContentLoaded", () => {
  ("use strict");
    
  function init(){

    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {

      setTimeout(() => {

        let userNotificationButton = document.querySelector("#userNotificationButton");
        if (userNotificationButton) {
          userNotificationButton.addEventListener("click", armondo => {
            const userNotificationTitle = document.getElementById("userNotificationTitle");
            const userNotificationDesc = document.getElementById("userNotificationDesc");
            
            if(userNotificationTitle.value=='' || userNotificationDesc.value=='' ){
              window.loader(false);
              window.notify(false,window.langs.eksikalanbirakmayin);
              return;
            }
            window.loader();
            cordova.plugin.http.post(window.api+"usernotifications/send", {
              user_id: "-",
              lang: "tr",
              type: "teamPush",
              title: userNotificationTitle.value,
              description: userNotificationDesc.value
            }, { Authorization: 'Bearer '+window.getToken() }, function(response) {
              window.loader(false);
              try {
                
                // response.data = JSON.parse(response.data);
                userNotificationTitle.value="";
                userNotificationDesc.value="";
                let data = response.data.length;
                if(data>0){
                  window.notify(true,"Bildirim Gönderildi");
                }else{
                  window.notify(false,"Takımınızda Bildirim Gönderilecek Kimse Yok");
                }
                // console.log(response.data);
              } catch(e) {
                window.notify(false,e);
              }
            }, function(response) {
              window.loader(false);
              let res = JSON.parse(response.error);
              window.notify(false,res.message);
              // console.log(response);
            });
            // cordova.plugin.http.post(window.api+controller, {
            //   title: userNotificationTitle.value,
            //   embed: userNotificationDesc.value,
            // }, { Authorization: 'Bearer '+window.getToken() }, function(response) {
            //   window.loader(false);
            //   try {
            //     response.data = JSON.parse(response.data);


                
                  
      
            //   } catch(e) {
            //     window.notify(false,e);
            //   }
            // }, function(response) {
            //   window.loader(false);
            //   let res = JSON.parse(response.error);
            //   window.notify(false,res.message);
            // });
            
          });
        }
        ;
    
      }, 500);
    }

  }
  
  init();
});