const controller = "users/";
const dataListIdCover = "profileDetailCover";
const dataListId = "profileDetail";
let userDetail = null;


function beforeStart(){
  return document.getElementById(dataListId).innerHTML = window.loadingData;
}

function start(){

  userDetail = window.getUser();
  
  let link = window.server+"customers/";

  let htmlCover = `<div class="card card-style position-fixed w-100 mx-0 rounded-0 mt-n4" data-card-height="340" style="background-image: url(${link+userDetail.image});">
    <div class="card-bottom no-click mb-3">
      <div class="content no-click">
        <span class="bg-success px-2 py-1 font-10 rounded-xs text-uppercase font-600 color-white">${money(userDetail.total_amount)}</span>
        <h1 class="color-white mt-1">${userDetail.name}</h1>
        <h2 class="color-white opacity-50 font-13 mt-n2 font-400">${userDetail.career}</h2>
      </div>
    </div>`;
    
  htmlCover += `<div class="card-top">
    <a href="ayarlar.html" class="btn btn-m rounded-sm bg-fade-blue-dark float-end mx-3 my-4 font-700">
    
    <i class="fa font-12 fa-cog gradient-ncoach2 rounded-sm color-white"></i>
    Hesap Ayarları</a>
    </div>`;
    

  htmlCover += `<div class="card-overlay bg-gradient rounded-0"></div></div><div class="card card-style mx-0 shadow-0 bg-transparent no-click" data-card-height="280"></div>`;
  
  // document.getElementById(dataListIdCover).innerHTML = htmlCover;
  // console.log(htmlCover);
  let html = htmlCover;

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
        <h3>Sosyal Medya Hesapları</h3>
        <div class="list-group list-custom-large">
          <a class="external-link" href="tel:${userDetail.phone}">
            <i class="fa fa-phone bg-phone rounded-sm"></i> <span>${userDetail.phone}</span><strong>Telefon</strong> <i class="fa fa-link"></i>
          </a> 
          <a class="external-link" href="mailto:${userDetail.email}">
            <i class="fa fa-envelope bg-mail rounded-sm"></i> <span>${userDetail.email}</span> <strong>E-Mail</strong> <i class="fa fa-link"></i>
          </a> 
          <a class="${userDetail.facebook ? "":"d-none" }" href="https://facebook.com/${userDetail.facebook}">
            <i class="fab fa-facebook-f bg-facebook rounded-sm"></i> <span>@${userDetail.facebook}</span> <strong>Facebook</strong> <i class="fa fa-link"></i>
          </a> 
          <a class="${userDetail.twitter ? "":"d-none" }" href="https://twitter.com/${userDetail.twitter}">
            <i class="fab fa-twitter bg-twitter rounded-sm"></i> <span>@${userDetail.twitter}</span> <strong>Twitter</strong> <i class="fa fa-link"></i>
          </a> 
          <a class="border-0 ${userDetail.instagram ? "":"d-none" }" href="https://instagram.com/${userDetail.instagram}">
            <i class="fab fa-instagram bg-instagram rounded-sm"></i> <span>@${userDetail.instagram}</span> <strong>Instagram</strong> <i class="fa fa-link"></i>
          </a>
        </div>
      </div>
    </div>`;
    // html += `<div class="card card-style">
    //     <div class="content">
    //         <h2>Durumum</h2>
    //         <p>
    //             Ajandanıza ait istatistiklerin özetleri aşağıda gösterilmektedir.
    //         </p>
    //         <div class="row text-center mb-0">
    //             <div class="col-6">
    //                 <i class="fa fa-trophy color-yellow-dark fa-4x mb-3"></i>
    //                 <h6 class="text-uppercase font-700">57 <br> Hedef LİSTEM</h6>
    //             </div>
    //             <div class="col-6">
    //                 <i class="fa fa-certificate fa-4x color-blue-dark mb-3"></i>
    //                 <h6 class="text-uppercase font-700">102<br>KİŞİ LİSTEM</h6>
    //             </div>
    //             <div class="col-12 pb-5"></div>
    //             <div class="col-6">
    //                 <i class="fa fa-award color-red-dark fa-4x mb-3"></i>
    //                 <h6 class="text-uppercase font-700">3000$<br>Kazanç</h6>
    //             </div>
    //             <div class="col-6">
    //                 <i class="fa fa-medal fa-4x color-brown-dark mb-3"></i>
    //                 <h6 class="text-uppercase font-700">12<br>Ulaşılmış Hedef</h6>
    //             </div>
    //         </div>
    //     </div>
    // </div>`;

  document.getElementById(dataListId).innerHTML = html;
      
  window.cardResize();

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

      setTimeout(() => {
        
      }, 500);
    }




  }

  init();
});