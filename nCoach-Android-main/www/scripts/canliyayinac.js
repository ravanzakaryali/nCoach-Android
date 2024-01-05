const controller = "userlivebroadcasts/";

document.addEventListener("DOMContentLoaded", () => {
  ("use strict");
    
  function init(){

    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {

      setTimeout(() => {

        let userAddLiveBroadcast = document.querySelector("#userAddLiveBroadcast");
        if (userAddLiveBroadcast) {
          userAddLiveBroadcast.addEventListener("click", armondo => {
            const userAddLiveBroadcastTitle = document.getElementById("userAddLiveBroadcastTitle");
            const userAddLiveBroadcastEmbed = document.getElementById("userAddLiveBroadcastEmbed");
            const userAddLiveBroadcastOnlyTeam = document.getElementById("userAddLiveBroadcastOnlyTeam");
            
            if(userAddLiveBroadcastTitle.value=='' || userAddLiveBroadcastEmbed.value=='' ){
              window.loader(false);
              window.notify(false,window.langs.eksikalanbirakmayin);
              return;
            }
            window.loader();
            cordova.plugin.http.post(window.api+controller, {
              title: userAddLiveBroadcastTitle.value,
              embed: userAddLiveBroadcastEmbed.value,
              onlyteam: userAddLiveBroadcastOnlyTeam.checked,
            }, { Authorization: 'Bearer '+window.getToken() }, function(response) {
              window.loader(false);
              try {
                response.data = JSON.parse(response.data);

                userAddLiveBroadcastTitle.value="";
                userAddLiveBroadcastEmbed.value="";
                window.notify(true,"Canlı yayın başarıyla oluşturuldu");

                // console.log(response.data);
                cordova.plugin.http.post(window.api+"usernotifications/send", {
                  user_id: "-",
                  lang: "tr",
                  livebroadcast_id: response.data.id,
                  type: "newLiveBroadcast"
                }, { Authorization: 'Bearer '+window.getToken() }, function(response) {
                  try {
                    response.data = JSON.parse(response.data);
                    // console.log(response.data);
                  } catch(e) {
                    // window.notify(false,e);
                  }
                }, function(response) {
                  // console.log(response);
                });
                  
      
              } catch(e) {
                window.notify(false,e);
              }
            }, function(response) {
              window.loader(false);
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