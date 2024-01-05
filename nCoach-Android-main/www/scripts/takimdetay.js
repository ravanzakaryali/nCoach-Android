const controller = "usernotifications/";
const dataListIdCover = "profileDetailCover";
const dataListId = "teamDetail";
let userDetail = null;
let teamDetail = null;
let broadcastDetail = null;
let notificationDetail = null;

function addUserInTeam(value){
  if(!teamDetail){
    window.notify(false,"Hata Kodu: 1001");
    return false;
  }
  window.loader();  
  cordova.plugin.http.post(window.api+"userteams/userteamdetail", {
    value: value,
    team_id: teamDetail.id,
    notification_id: notificationDetail.id
  }, { Authorization: 'Bearer '+window.getToken() }, function(response) {
    
    window.loader(false);
    try {
      response.data = JSON.parse(response.data);
      
      window.notify(true,"Yanıtınız Başarıyla Gönderildi");
      let user = window.getUser();
      cordova.plugin.http.post(window.api+"usernotifications/send", {
        user_id: userDetail.id,
        lang: "tr",
        title: "Takım Daveti",
        description: user.name +", "+ (value ? "artık takımınızda !" : "takım davetinizi onaylamadı"),
        type: "userPush"
      }, { Authorization: 'Bearer '+window.getToken() }, function(response) {
        setTimeout(() => {
          window.location.href = "anasayfa.html";
        }, 1000);
        try {
          response.data = JSON.parse(response.data);
        } catch(e) {
          // window.notify(false,e);
        }
      }, function(response) {
        setTimeout(() => {
          window.location.href = "anasayfa.html";
        }, 1000);
        // document.getElementById("export").innerHTML = JSON.stringify(response);
        // let res = JSON.parse(response.error);
        // window.notify(false,res.message);
      });
      
    } catch(e) {
      window.notify(false,e);
    }
  }, function(response) {
    window.loader(false);
    let res = JSON.parse(response.error);
    window.notify(false,res.message);
  });
  
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
      // console.log(notificationDetail);
      userDetail = notificationDetail.sender;
      teamDetail = notificationDetail.team;
      // broadcastDetail = notificationDetail.broadcast;
      let link = window.server+"customers/";

      let htmlCover = `<div class="card card-style position-fixed w-100 mx-0 rounded-0 mt-n4" data-card-height="350" style="background-image: url(${link+userDetail.image});">
        <div class="card-bottom no-click mb-3">
          <div class="content no-click">
            <span class="bg-success px-2 py-1 font-10 rounded-xs text-uppercase font-600 color-white">${money(userDetail.total_amount)}</span>
            <h1 class="color-white mt-1">${userDetail.name}</h1>
            <h2 class="color-white opacity-50 font-13 mt-n2 font-400">${userDetail.career}</h2>
          </div>
        </div>`;
      if(teamDetail){
        htmlCover += `<div class="card-top">
        <a href="#" onclick="javascript:addUserInTeam(false);" class="btn btn-m rounded-sm bg-fade-gray-dark float-start mx-2 my-4 font-700">
        
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <rect x="0" y="0" width="24" height="24"></rect>
              <circle fill="#000000" opacity="0.3" cx="12" cy="12" r="10"></circle>
              <path d="M12.0355339,10.6213203 L14.863961,7.79289322 C15.2544853,7.40236893 15.8876503,7.40236893 16.2781746,7.79289322 C16.6686989,8.18341751 16.6686989,8.81658249 16.2781746,9.20710678 L13.4497475,12.0355339 L16.2781746,14.863961 C16.6686989,15.2544853 16.6686989,15.8876503 16.2781746,16.2781746 C15.8876503,16.6686989 15.2544853,16.6686989 14.863961,16.2781746 L12.0355339,13.4497475 L9.20710678,16.2781746 C8.81658249,16.6686989 8.18341751,16.6686989 7.79289322,16.2781746 C7.40236893,15.8876503 7.40236893,15.2544853 7.79289322,14.863961 L10.6213203,12.0355339 L7.79289322,9.20710678 C7.40236893,8.81658249 7.40236893,8.18341751 7.79289322,7.79289322 C8.18341751,7.40236893 8.81658249,7.40236893 9.20710678,7.79289322 L12.0355339,10.6213203 Z" fill="#000000"></path>
            </g>
          </svg>
          İptal Et
        </a>
          <a href="#" onclick="javascript:addUserInTeam(true);" class="btn btn-m rounded-sm bg-blue-dark float-end mx-2 my-4 font-700">
          
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <rect x="0" y="0" width="24" height="24"/>
                    <circle fill="#fff" opacity="0.3" cx="12" cy="12" r="10"/>
                    <path d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z" fill="#fff" fill-rule="nonzero"/>
                </g>
            </svg>
            Onayla
          </a>
        </div>`;
      }

      htmlCover += `<div class="card-overlay bg-gradient rounded-0"></div></div><div class="card card-style mx-0 shadow-0 bg-transparent no-click" data-card-height="280"></div>`;
      
      // document.getElementById(dataListIdCover).innerHTML = htmlCover;

      let html = htmlCover;
//  href="tel:${userDetail.phone}"
//   href="mailto:${userDetail.email}"
      if(userDetail.profile_private === false){
        html += `<div class="card card-style bg-theme mx-0 mb-5 pb-4">
          <div class="divider mx-auto mt-3 bg-gray-dark opacity-30 rounded-s mb-n1" style="height:5px; width:50px;"></div>
          <div class="content mt-3">
            <div>
              <strong class="color-theme font-22 d-block mt-n2 mb-n2 pt-3">${userDetail.name}</strong> 
              <span class="font-11 color-theme opacity-30 d-block pb-2 pt-2">${userDetail.career}</span>
            </div>
            <p class="${userDetail.about ? "":"d-none" }">${userDetail.about}</p>
            <div class="divider"></div>
            <h3>Kariyer</h3>
            <div class="list-group list-custom-large">
              <a href="#">
                <i class="fa fa-university bg-blue-dark rounded-sm"></i> <span>${userDetail.company}</span> <strong>${userDetail.career}</strong> <i class="fa fa-link"></i>
              </a>
            </div>
            <div class="divider"></div>
            <h3>Kişisel Bilgiler</h3>
            <div class="list-group list-custom-large">
              <a class="external-link">
                <i class="fa fa-phone bg-phone rounded-sm"></i> <span>${window.toPhoneRegex(userDetail.phone)}</span><strong>Telefon</strong> 
              </a> 
              <a class="external-link">
                <i class="fa fa-envelope bg-mail rounded-sm"></i> <span>${window.toEmailRegex(userDetail.email)}</span> <strong>E-Mail</strong> 
              </a> 
              <a class="${userDetail.facebook ? "":"d-none" }" href="https://facebook.com/${userDetail.facebook}">
                <i class="fab fa-facebook-f bg-facebook rounded-sm"></i> <span>@${userDetail.facebook}</span> <strong>Facebook</strong> 
              </a> 
              <a class="${userDetail.twitter ? "":"d-none" }" href="https://twitter.com/${userDetail.twitter}">
                <i class="fab fa-twitter bg-twitter rounded-sm"></i> <span>@${userDetail.twitter}</span> <strong>Twitter</strong> 
              </a> 
              <a class="border-0 ${userDetail.instagram ? "":"d-none" }" href="https://instagram.com/${userDetail.instagram}">
                <i class="fab fa-instagram bg-instagram rounded-sm"></i> <span>@${userDetail.instagram}</span> <strong>Instagram</strong> 
              </a>
            </div>
          </div>
        </div>`;
      }else{
        html += `<div class="card card-style bg-theme mx-0 mb-5">
        <div class="d-flex px-3 py-3">
          <div class="align-self-center me-2">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="48px" height="48px" viewBox="0 0 24 24" version="1.1">
          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <rect x="0" y="0" width="24" height="24"/>
              <circle fill="#0cb6ea" opacity="0.3" cx="12" cy="12" r="10"/>
              <path d="M14.5,11 C15.0522847,11 15.5,11.4477153 15.5,12 L15.5,15 C15.5,15.5522847 15.0522847,16 14.5,16 L9.5,16 C8.94771525,16 8.5,15.5522847 8.5,15 L8.5,12 C8.5,11.4477153 8.94771525,11 9.5,11 L9.5,10.5 C9.5,9.11928813 10.6192881,8 12,8 C13.3807119,8 14.5,9.11928813 14.5,10.5 L14.5,11 Z M12,9 C11.1715729,9 10.5,9.67157288 10.5,10.5 L10.5,11 L13.5,11 L13.5,10.5 C13.5,9.67157288 12.8284271,9 12,9 Z" fill="#004b81"/>
          </g>
      </svg>
          </div>
          <div class="align-self-center">
            <h5>Bu Hesap Gizli</h5>
            <p class="mb-0 mt-n2 opacity-50 font-11">Kişi, hesap bilgilerini gizlenmiş durumda.</p>
          </div>
        </div>
      </div>`;
      }
    
      document.getElementById(dataListId).innerHTML = html;
      
      window.cardResize();

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
              sub_id: userDetail.id,
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
                  user_id: userDetail.id,
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