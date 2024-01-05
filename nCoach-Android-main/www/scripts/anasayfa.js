const controller = "usernotifications/";
const livebroadcastListId = "userLiveBroadcastList";
const notificationListId = "userNotificationList";
let livebroadcastDetail = null;
let livebroadcastDataList = null;
let notificationDetail = null;
let notificationDataList = null;

function beforeStart(){
  document.getElementById(livebroadcastListId).innerHTML = window.loadingData;
  return document.getElementById(notificationListId).innerHTML = window.loadingData;
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
//         let date = new Date("2022-07-01T13:51:52.186Z")

// date.toLocaleString()
        let str = livebroadcastDataList.reduce(function(str, data, index) {
          return str.concat(`<div class="row mb-0" onclick="javascript:getDetailData('newLiveBroadcast','${data.id}');" data-id="${data.id}">
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
      
      if(notificationDataList.length){

        let link = window.server+"avatars/";
        let str = notificationDataList.reduce(function(str, data, index) {

          let month = window.getValue(data.created_at,"getMonth");
          let image = "";
          let name = "";
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
                  <h5 class="mb-0 ${data.read ? "opacity-70":""}">${name}</h5>
                  <p class="font-10 opacity-70 mt-n1 mb-0">${window.getValue(data.created_at,"getDayMonthYear") + " " + window.getValue(data.created_at,"getTime")}</p>
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
      let loginButton = document.querySelector("#loginButton");
      if (loginButton) {
        loginButton.addEventListener("click", armondo => {
          window.loader();
          const loginMail = document.getElementById("loginMail").value;
          const loginPassword = document.getElementById("loginPassword").value;
          
          let mailRegex = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
          // let mailRegex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
          // console.log(mailRegex.test(loginMail));
          if(loginMail=='' || loginPassword==''){
            window.loader(false);
            window.notify(false,window.langs.eksikalanbirakmayin);
            return;
          }
          if(!mailRegex.test(loginMail)){
            window.loader(false);
            window.notify(false,window.langs.gecersizemail);
            return;
          }
          // cordova.plugin.http.setCookie(url, cookie, options);
          // cordova.plugin.http.clearCookies();
          cordova.plugin.http.post(window.api+"auth/login", {
            email: loginMail,
            password: loginPassword
          }, { Authorization: 'Bearer ' }, function(response) {
          // prints 200
            // alert(1);
            window.loader(false);
            try {
              response.data = JSON.parse(response.data);
              window.saveUser(response.data.user);
              window.saveToken(response.data.access_token.token);
              window.setStorage("tutorial", true);
              window.location.href='anasayfa.html';
              // window.notify(true,"Hoşgeldiniz, "+response.data.user.name,"Giriş Başarılı");

            } catch(e) {
              // document.getElementById("message").innerHTML = JSON.stringify(e);
              // alert(2);
              window.notify(false,window.langs.birsorunolustu);
            }
          }, function(response) {
            window.loader(false);
            // alert(3);
            // document.getElementById("message").innerHTML = JSON.stringify(response);
          // prints 403
            // JSON.stringify
            // console.log(JSON.parse(response.error).message)
            let res = JSON.parse(response.error);
            window.notify(false,res.message);
          });
          //  navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
          //     quality: 25,
          //     destinationType: Camera.DestinationType.FILE_URI,
          //     sourceType: Camera.PictureSourceType.CAMERA,
          //     allowEdit: true,
          //     encodingType: Camera.EncodingType.JPEG,
          //     popoverOptions: CameraPopoverOptions,
          //     saveToPhotoAlbum: true
          // });
        });
      }
      ;

      let registerFormVerifyPageLink = document.querySelector("#registerFormVerifyPageLink");
      if (registerFormVerifyPageLink) {
        registerFormVerifyPageLink.addEventListener("click", row => {
          window.preloader();
          window.location.href='giris-dogrulama.html';
        });
      }
      ;

      let registerCloseMenu = document.querySelector("#registerCloseMenu");
      if (registerCloseMenu) {
        registerCloseMenu.addEventListener("click", row => {
          window.menuClose();
        });
      }
      ;

      let forgotCloseMenu = document.querySelector("#forgotCloseMenu");
      if (forgotCloseMenu) {
        forgotCloseMenu.addEventListener("click", row => {
          window.menuClose();
        });
      }
      ;
      
      let registerFormVerify = document.querySelector("#registerFormVerify");
      if (registerFormVerify) {
        registerFormVerify.addEventListener("click", row => {

          registerFormVerify.setAttribute("disabled","disabled");
          window.loader();

          let codes = document.querySelectorAll("#registerFormVerifyCodes input");
          let codestring = "";
          codes.forEach(code => {
            code = code.value.replace("●","");
            codestring += code
          });

          if(codestring.length!==4){
            window.loader(false);
            window.notify(false,"Doğrulama kodu hatalı !");
            return;
          }

          let user = window.getUser();
          cordova.plugin.http.post(window.api+"auth/verify", {
            email: user.email,
            phone: user.phone,
            input_code: codestring
          }, {}, function(response) {
            window.loader(false);
            registerFormVerifyRepeatButton.removeAttribute("disabled");
            try {
              response.data = JSON.parse(response.data);
              user.verify = true;
              window.saveUser(user);
              window.setStorage("newContact",true);
              document.getElementById("registerFormVerifyCheck").click();
            } catch(e) {
              window.notify(false,window.langs.birsorunolustu);
            }
          }, function(response) {
            window.loader(false);
            registerFormVerifyRepeatButton.removeAttribute("disabled");
            let res = JSON.parse(response.error);
            window.notify(false,res.message);
          });

        });
      }
      ;

      let registerFormVerifyRepeatButton = document.querySelector("#registerFormVerifyRepeatButton");
      if (registerFormVerifyRepeatButton) {
        registerFormVerifyRepeatButton.addEventListener("click", row => {

          registerFormVerifyRepeatButton.setAttribute("disabled","disabled");
          window.loader();
          var verify_code = Math.floor(1000 + Math.random() * 9000);

          let user = window.getUser();
          cordova.plugin.http.post(window.api+"auth/sendverifycode", {
            email: user.email,
            phone: user.phone,
            name: user.name,
            verify_code: verify_code
          }, {}, function(response) {
            window.loader(false);
            registerFormVerifyRepeatButton.removeAttribute("disabled");
            try {
              window.notify(true,"Doğrulama kodu email adresinize gönderildi");
            } catch(e) {
              window.notify(false,window.langs.birsorunolustu);
            }
          }, function(response) {
            window.loader(false);
            registerFormVerifyRepeatButton.removeAttribute("disabled");
            let res = JSON.parse(response.error);
            window.notify(false,res.message);
          });
        });
      }
      ;

      let passwordForgot = document.querySelector("#passwordForgot");
      if (passwordForgot) {
        passwordForgot.addEventListener("click", row => {

          passwordForgot.setAttribute("disabled","disabled");
          window.loader();
          const forgotEmail = document.getElementById("forgotEmail").value;
          
          
          if(forgotEmail==''){
            window.loader(false);
            window.notify(false,window.langs.eksikalanbirakmayin);
            return;
          }

          cordova.plugin.http.post(window.api+"auth/reset", {
            email: forgotEmail
          }, {}, function(response) {
            window.loader(false);
            passwordForgot.removeAttribute("disabled");
            try {
              window.notify(true,"Şifreniz email adresinize gönderildi");
              window.location.href='giris-yap.html';
            } catch(e) {
              window.notify(false,window.langs.birsorunolustu);
            }
          }, function(response) {
            window.loader(false);
            passwordForgot.removeAttribute("disabled");
            let res = JSON.parse(response.error);
            window.notify(false,res.message);
          });
        });
      }
      ;

      var registerFormCarrier = document.querySelector("#registerFormCarrier");
      if (registerFormCarrier) {
        registerFormCarrier.addEventListener("change", syndney => {
          if (registerFormCarrier.value == "unlistcarrier") {
            document.getElementById("registerFormCarrierTextBlock").style.display = 'block';
          }else{
            document.getElementById("registerFormCarrierTextBlock").style.display = 'none';
          }
          ;
        });
      }

      var registerFormCompany = document.querySelector("#registerFormCompany");
      if (registerFormCompany) {
        registerFormCompany.addEventListener("change", syndney => {
          if (registerFormCompany.value == "unlistcompany") {
            document.getElementById("registerFormCompanyTextBlock").style.display = 'block';
          }else{
            document.getElementById("registerFormCompanyTextBlock").style.display = 'none';
          }
          ;
        });
      }
    }
  }
  
  init();
});
