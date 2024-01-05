const controller = "users/";
const dataListIdCover = "profileDetailCover";
const dataListId = "profileDetail";
let userDetail = null;

function getDetailData(data){
  window.loader();
  cordova.plugin.http.get(window.api+controller+data, {}, { Authorization: 'Bearer '+window.getToken() }, function(response) {
    window.loader(false);
    try {
      response.data = JSON.parse(response.data);
      const userContactDetailTitle = document.getElementById("userContactDetailTitle");
      const userContactDetailNote = document.getElementById("userContactDetailNote");
      const userContactId = document.getElementById("userContactId");
      userContactDetailTitle.value = response.data.title;
      userContactDetailNote.value = response.data.note;
      userContactId.value = response.data.id;
      window.modalOpen("menu-modal-contact-detail");
    } catch(e) {
      window.notify(false,window.langs.birsorunolustu);
    }
  }, function(response) {
    window.loader(false);
    let res = JSON.parse(response.error);
    window.notify(false,res.message);
  });
  
}

function addUserInTeam(){
  const userTeamAddImage = document.getElementById("userTeamAddImage");
  const userTeamAddName = document.getElementById("userTeamAddName");
  
  let link = window.server+"avatars/";
  userTeamAddImage.src = window.getImage(userDetail.image,link);
  userTeamAddName.innerText = userDetail.name;
  window.modalOpen("menu-modal-add-user-team");
}

function beforeStart(){
  return document.getElementById(dataListId).innerHTML = window.loadingData;
}

function start(){
  
  let userId = location.search.replace("?id=","");
  let url = window.api+controller+userId;
  // alert(url);
  cordova.plugin.http.get(url, {}, { Authorization: 'Bearer '+window.getToken() }, function(response) {
    try {
      userDetail = JSON.parse(response.data);
      let link = window.server+"customers/";

    //   let html = `<div class="card card-style" data-card-height="350" style="background-image: url(${link+userDetail.image});">
    //   <div class="card-bottom p-3">
    //     <h1 class="color-white font-32">${userDetail.name}</h1>
    //     <p class="color-white opacity-70 mb-2">${userDetail.about}</p>
    //   </div>
    //   <div class="card-overlay bg-gradient"></div>
    // </div>`;
    //   if(userDetail.profile_private === false){
    //     html += `<div class="card card-style">
    //     <div class="content mb-0">
    //       <h1>Kariyer</h1>
    //       <div class="list-group list-custom-large">
    //         <a href="#">
    //           <i class="fa fa-university bg-blue-dark rounded-sm"></i> <span>${userDetail.company}</span> <strong>${userDetail.career}</strong> <i class="fa fa-link"></i>
    //         </a>
    //         <a href="#">
    //           <i class="fa fa-school bg-blue-dark rounded-sm"></i> <span>Udemy</span> <strong>Eğitmen</strong> <i class="fa fa-link"></i>
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    //   <div class="card card-style">
    //     <div class="content mb-0">
    //       <h1>Sosyal Medya Hesapları</h1>
    //       <div class="list-group list-custom-large">
    //         <a class="external-link" href="tel:${userDetail.phone}">
    //           <i class="fa fa-phone bg-phone rounded-sm"></i> <span>+${userDetail.phone}</span> <strong>Tap to Call Us</strong> <i class="fa fa-link"></i>
    //         </a> 
    //         <a class="external-link" href="mailto:${userDetail.email}">
    //           <i class="fa fa-envelope bg-mail rounded-sm"></i> <span>${userDetail.email}</span> <strong>Tap to Email us</strong> <i class="fa fa-link"></i>
    //         </a> 
    //         <a href="${userDetail.facebook}">
    //           <i class="fab fa-facebook-f bg-facebook rounded-sm"></i> <span>@${userDetail.facebook}</span> <strong>Join our Facebook</strong> <i class="fa fa-link"></i>
    //         </a> 
    //         <a href="${userDetail.twitter}">
    //           <i class="fab fa-twitter bg-twitter rounded-sm"></i> <span>@${userDetail.twitter}</span> <strong>Follow on Twitter</strong> <i class="fa fa-link"></i>
    //         </a> 
    //         <a class="border-0" href="${userDetail.instagram}">
    //           <i class="fab fa-instagram bg-instagram rounded-sm"></i> <span>@${userDetail.instagram}</span> <strong>Join our Instagram</strong> <i class="fa fa-link"></i>
    //         </a>
    //       </div>
    //     </div>
    //   </div>`;
    //   }else{
    //     html += `<div class="card card-style">
    //     <div class="d-flex px-3 py-3">
    //       <div class="align-self-center me-2">
    //       <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="48px" height="48px" viewBox="0 0 24 24" version="1.1">
    //       <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    //           <rect x="0" y="0" width="24" height="24"/>
    //           <circle fill="#0cb6ea" opacity="0.3" cx="12" cy="12" r="10"/>
    //           <path d="M14.5,11 C15.0522847,11 15.5,11.4477153 15.5,12 L15.5,15 C15.5,15.5522847 15.0522847,16 14.5,16 L9.5,16 C8.94771525,16 8.5,15.5522847 8.5,15 L8.5,12 C8.5,11.4477153 8.94771525,11 9.5,11 L9.5,10.5 C9.5,9.11928813 10.6192881,8 12,8 C13.3807119,8 14.5,9.11928813 14.5,10.5 L14.5,11 Z M12,9 C11.1715729,9 10.5,9.67157288 10.5,10.5 L10.5,11 L13.5,11 L13.5,10.5 C13.5,9.67157288 12.8284271,9 12,9 Z" fill="#004b81"/>
    //       </g>
    //   </svg>
    //       </div>
    //       <div class="align-self-center">
    //         <h5>Bu Hesap Gizli</h5>
    //         <p class="mb-0 mt-n2 opacity-50 font-11">Kişi, hesap bilgilerini gizlenmiş durumda.</p>
    //       </div>
    //     </div>
    //   </div>`;
    //   }
      // console.log();
      let htmlCover = `<div class="card card-style position-fixed w-100 mx-0 rounded-0 mt-n4" data-card-height="340" style="background-image: url(${link+userDetail.image});">
        <div class="card-bottom no-click mb-3">
          <div class="content no-click">
            <span class="bg-success px-2 py-1 font-10 rounded-xs text-uppercase font-600 color-white">${money(userDetail.total_amount)}</span>
            <h1 class="color-white mt-1">${userDetail.name}</h1>
            <h2 class="color-white opacity-50 font-13 mt-n2 font-400">${userDetail.career}</h2>
          </div>
        </div>`;
        
        if(userDetail.requestteam){
          htmlCover += `<div class="card-top">
            <a class="btn btn-m rounded-sm bg-fade-blue-dark float-end mx-3 my-4 font-700">
            
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <rect x="0" y="0" width="24" height="24"/>
                    <circle fill="#fff" opacity="0.3" cx="12" cy="12" r="10"/>
                    <path d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z" fill="#fff" fill-rule="nonzero"/>
                </g>
            </svg>
            İstek Gönderildi</a>
            </div>`;
        }
      if(userDetail.team){
        if(userDetail.inteam){
          htmlCover += `<div class="card-top">
            <a class="btn btn-m rounded-sm bg-fade-blue-dark float-end mx-3 my-4 font-700">
            
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <rect x="0" y="0" width="24" height="24"/>
                    <circle fill="#fff" opacity="0.3" cx="12" cy="12" r="10"/>
                    <path d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z" fill="#fff" fill-rule="nonzero"/>
                </g>
            </svg>
            Takımınızda</a>
            </div>`;
        }
        if(userDetail.onteam){
          htmlCover += `<div class="card-top">
            <a class="btn btn-m rounded-sm bg-fade-blue-dark float-end mx-3 my-4 font-700">
            
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <rect x="0" y="0" width="24" height="24"/>
                    <circle fill="#fff" opacity="0.3" cx="12" cy="12" r="10"/>
                    <path d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z" fill="#fff" fill-rule="nonzero"/>
                </g>
            </svg>
            Takımdasınız</a>
            </div>`;
        }
      }else if(!userDetail.requestteam){
        htmlCover += `<div class="card-top">
          <a href="#" onclick="javascript:addUserInTeam('${userDetail.id}');" class="btn btn-m rounded-sm bg-fade-blue-dark float-end mx-3 my-4 font-700">
          
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <rect x="0" y="0" width="24" height="24"/>
                  <circle fill="#fff" opacity="0.3" cx="12" cy="12" r="10"/>
                  <path d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z" fill="#fff" fill-rule="nonzero"/>
              </g>
          </svg>
          Takımına Ekle</a>
          </div>`;
      }

      htmlCover += `<div class="card-overlay bg-gradient rounded-0"></div></div><div class="card card-style mx-0 shadow-0 bg-transparent no-click" data-card-height="280"></div>`;
      
      // document.getElementById(dataListIdCover).innerHTML = htmlCover;

      let html = htmlCover;
      // href="tel:${userDetail.phone}"
      // href="mailto:${userDetail.email}"
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
                <i class="fa fa-university bg-blue-dark rounded-sm mb-3"></i> <span>${userDetail.company}</span> <strong>${userDetail.career}</strong> 
              </a>
            </div>
            <div class="divider"></div>
            <h3>Kişisel Bilgiler</h3>
            <div class="list-group list-custom-large">
              <a class="external-link">
                <i class="fa fa-phone bg-phone rounded-sm mb-3"></i> <span>${window.toPhoneRegex(userDetail.phone)}</span><strong>Telefon</strong> 
              </a> 
              <a class="external-link">
                <i class="fa fa-envelope bg-mail rounded-sm mb-3"></i> <span>${window.toEmailRegex(userDetail.email)}</span> <strong>E-Mail</strong> 
              </a> 
              <a class="${userDetail.facebook ? "":"d-none" }" href="https://facebook.com/${userDetail.facebook}">
                <i class="fab fa-facebook-f bg-facebook rounded-sm mb-3"></i> <span>@${userDetail.facebook}</span> <strong>Facebook</strong> 
              </a> 
              <a class="${userDetail.twitter ? "":"d-none" }" href="https://twitter.com/${userDetail.twitter}">
                <i class="fab fa-twitter bg-twitter rounded-sm mb-3"></i> <span>@${userDetail.twitter}</span> <strong>Twitter</strong> 
              </a> 
              <a class="border-0 ${userDetail.instagram ? "":"d-none" }" href="https://instagram.com/${userDetail.instagram}">
                <i class="fab fa-instagram bg-instagram rounded-sm mb-3"></i> <span>@${userDetail.instagram}</span> <strong>Instagram</strong> 
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
            cordova.plugin.http.post(window.api+"userteams/", {
              sub_id: userDetail.id
            }, { Authorization: 'Bearer '+window.getToken() }, function(response) {
            // prints 200
              // alert(1);
              window.loader(false);
              try {
                response.data = JSON.parse(response.data);
                
                window.notify(true,"İstek gönderildi.");
                window.menuClose();

                cordova.plugin.http.post(window.api+"usernotifications/send", {
                  user_id: userDetail.id,
                  lang: "tr",
                  type: "addUserToTeam",
                  team_id: response.data.id
                }, { Authorization: 'Bearer '+window.getToken() }, function(response) {
                    
                  beforeStart();
                  start();
                  try {
                    response.data = JSON.parse(response.data);
                  } catch(e) {
                    // window.notify(false,e);
                  }
                }, function(response) {
                  
                  beforeStart();
                  start();
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
              res.errors.forEach(error => {
                window.notify(false,error.message);
              });
            });
            
          });
        }
        ;
        
        let userContactSearchButton = document.querySelector("#userContactSearchButton");
        if (userContactSearchButton) {
          userContactSearchButton.addEventListener("click", armondo => {
            window.loader();
            const userContactSearchText = document.getElementById("userContactSearchText");
            
            if(userContactSearchText.value==''){
              window.loader(false);
              window.notify(false,window.langs.eksikalanbirakmayin);
              return;
            }
            cordova.plugin.http.get(window.api+controller+"search", {
              text: userContactSearchText.value,
            }, { Authorization: 'Bearer '+window.getToken() }, function(response) {
            // prints 200
              // alert(1);
              window.loader(false);
              try {
                response.data = JSON.parse(response.data);
                
                if(response.data.length){
                  dataCount = response.data.length;
                  let str = response.data.reduce(function(str, data) {
                    // let formName = element;
                    // formName = formName.replace(/[^A-Za-z0-9]/g, '_').toLowerCase();
                    // console.log(element);
                    return str.concat(`<div class="d-flex my-2" data-id="${data.id}" onclick="javascript:getDetailData('${data.id}');">
                        <div class="align-self-top">
                            <div class="bg-white rounded-sm color-theme shadow-xl text-center me-4 overflow-hidden">
                                <a>
                                    <span class="bg-red-dark font-10 d-block mb-2 px-3 line-height-xs py-1">
                                    ${window.getValue(data.created_at,"getMonth")}</span>
                                    <span class="font-23 font-600 d-block mb-n3 line-height-s ">${window.getValue(data.created_at,"getDate")}</span><br>
                                </a>
                            </div>
                        </div>
                        <div class="align-self-center">
                            <a>
                                <h5 class="mb-0 pt-1">${data.title}</h5>
                                <p class="mb-3">
                                ${data.note || "&nbsp;"}
                                </p>
                            </a>
                        </div>
                    </div>`);
                    // return str.concat(`<div>
                    //           <input type="checkbox" id="${formName}" name="cpg_services" value="${formName}" />
                    //           <label for="${formName}">${element}</label>
                    //         </div>`)
                  }, '');
                  document.getElementById(dataListId).innerHTML = str;
                }else{
                  document.getElementById(dataListId).innerHTML = window.notFoundData("Aramaya göre sonuç bulunamadı.");
                }

                window.menuClose();
                userContactSearchText.value="";
      
              } catch(e) {
                window.notify(false,window.langs.birsorunolustu);
              }
            }, function(response) {
              window.loader(false);
              let res = JSON.parse(response.error);
              window.notify(false,res.message);
            });
            
          });
        }
        ;
        
        let userContactSaveButton = document.querySelector("#userContactSaveButton");
        if (userContactSaveButton) {
          userContactSaveButton.addEventListener("click", armondo => {
            window.loader();
            const userContactDetailTitle = document.getElementById("userContactDetailTitle");
            const userContactDetailNote = document.getElementById("userContactDetailNote");
            const userContactId = document.getElementById("userContactId");
            
            if(!userContactId.value){
              window.loader(false);
              window.notify(false,window.langs.birsorunolustu);
              return;
            }
            if(userContactDetailTitle==''){
              window.loader(false);
              window.notify(false,window.langs.eksikalanbirakmayin);
              return;
            }
            cordova.plugin.http.put(window.api+controller+userContactId.value, {
              title: userContactDetailTitle.value,
              note: userContactDetailNote.value
            }, { Authorization: 'Bearer '+window.getToken() }, function(response) {
            // prints 200
              // alert(1);
              window.loader(false);
              try {
                response.data = JSON.parse(response.data);
                            
                let str = [response.data].reduce(function(str, data) {
                  return str.concat(`<div class="d-flex my-2" data-id="${data.id}" onclick="javascript:getDetailData('${data.id}');">
                      <div class="align-self-top">
                          <div class="bg-white rounded-sm color-theme shadow-xl text-center me-4 overflow-hidden">
                              <a>
                                  <span class="bg-red-dark font-10 d-block mb-2 px-3 line-height-xs py-1">
                                  ${window.getValue(data.created_at,"getMonth")}</span>
                                  <span class="font-23 font-600 d-block mb-n3 line-height-s ">${window.getValue(data.created_at,"getDate")}</span><br>
                              </a>
                          </div>
                      </div>
                      <div class="align-self-center">
                          <a>
                              <h5 class="mb-0 pt-1">${data.title}</h5>
                              <p class="mb-3">
                              ${data.note}
                              </p>
                          </a>
                      </div>
                  </div>`);
                }, '');
                document.querySelector("[data-id='"+response.data.id+"']").outerHTML = str;
                window.menuClose();
                userContactDetailNote.value="";
                userContactDetailNote.value="";
                userContactId.value="";
      
              } catch(e) {
                window.notify(false,window.langs.birsorunolustu);
              }
            }, function(response) {
              window.loader(false);
              let res = JSON.parse(response.error);
              window.notify(false,res.message);
            });
            
          });
        }
        ;
        
        let userContactRemoveButton = document.querySelector("#userContactRemoveButton");
        if (userContactRemoveButton) {
          userContactRemoveButton.addEventListener("click", armondo => {
            window.loader();
            const userContactId = document.getElementById("userContactId");
            
            if(!userContactId.value){
              window.loader(false);
              window.notify(false,window.langs.birsorunolustu);
              return;
            }
            cordova.plugin.http.delete(window.api+controller+userContactId.value, {}, { Authorization: 'Bearer '+window.getToken() }, function(response) {
              window.loader(false);
              try {
                response.data = JSON.parse(response.data);
                document.querySelector("[data-id='"+response.data.id+"']").outerHTML = "";
                window.menuClose();
                userContactDetailNote.value="";
                userContactDetailNote.value="";
                userContactId.value="";
      
              } catch(e) {
                window.notify(false,window.langs.birsorunolustu);
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




    // var myContact = navigator.contacts.create({"displayName": "Test User"});
    // console.log(myContact,"2");
    // console.log(navigator.contacts,"3");
    // navigator.contactsPhoneNumbers.list(function(contacts) {
    //   console.log(contacts.length + ' contacts found');
    //   for(var i = 0; i < contacts.length; i++) {
    //     console.log(contacts[i].id + " - " + contacts[i].displayName);
    //     for(var j = 0; j < contacts[i].phoneNumbers.length; j++) {
    //         var phone = contacts[i].phoneNumbers[j];
    //         console.log("===> " + phone.type + "  " + phone.number + " (" + phone.normalizedNumber+ ")");
    //     }
    //   }
    // }, function(error) {
    //   console.error(error);
    // });

  }

  init();
});