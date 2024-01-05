const controller = "userteams/";
const dataListId = "teamList";
const dataSearchId = "searchList";
let teamDetail = null;
let dataTeams = null;
let searchDetail = null;
let dataSearchs = null;

function beforeStart(){
  document.getElementById(dataListId).innerHTML = window.loadingData;
}
function beforeSearch(){
  document.getElementById(dataSearchId).innerHTML = window.loadingData;
}
function start(){
  cordova.plugin.http.get(window.api+controller, {}, { Authorization: 'Bearer '+window.getToken() }, function(response) {
    // prints 200
    // alert(1);
    try {
      response.data = JSON.parse(response.data);
      dataTeams = response.data;
      console.log(dataTeams);

      if(dataTeams.length){
        let link = window.server+"avatars/";
        let str = dataTeams.reduce(function(str, data) {
          // let formName = element;
          // formName = formName.replace(/[^A-Za-z0-9]/g, '_').toLowerCase();
          // console.log(element);
          // ${window.getValue(data.user.created_at,"getDayMonthYear")}
          return str.concat(`<div class="row mb-0" onclick="javascript:getDetailData('${data.user.id}','team');" data-id="${data.user.id}">
          <a class="d-flex mb-0">
            <div class="align-self-center">
                <img data-src="${window.getImage(data.user.image,link)}" src="images/empty.png" width="40" height="40" class="rounded-xl me-3 lazy">
            </div>
            <div class="align-self-center">
                <h1 class="mb-n2 font-14">${data.user.name}</h1>
                <p class="font-11 opacity-60">${data.user.company ? data.user.company:""}</p>
            </div>
            <div class="align-self-center ms-auto text-end">
                <h2 class="mb-n1 font-14 color-red-dark">${window.money(data.user.total_amount)}</h2>
                <p class="font-11 opacity-80">${data.status ? "" : "İstek Gönderildi"}</p>
                
            </div>
          </a></div>`);
          // data.user_group+".Grupta"
          // return str.concat(`<div>
          //           <input type="checkbox" id="${formName}" name="cpg_services" value="${formName}" />
          //           <label for="${formName}">${element}</label>
          //         </div>`)
        }, '');
        document.getElementById(dataListId).innerHTML = str;
        new LazyLoad();
            
      }else{
        document.getElementById(dataListId).innerHTML = window.notFoundData("Takımınıza henüz kimseyi eklemediniz.");
      }

    } catch(e) {
      window.notify(false,e);
    }
  }, function(response) {
    let res = JSON.parse(response.error);
    window.notify(false,res.message);
  });
}
function search(value){
  cordova.plugin.http.get(window.api+"users/search", {
    text: value,
  }, { Authorization: 'Bearer '+window.getToken() }, function(response) {
    // prints 200
    // alert(1);
    try {
      response.data = JSON.parse(response.data);
      dataSearchs = response.data;

      if(dataSearchs.length){
        let link = window.server+"avatars/";
        let str = dataSearchs.reduce(function(str, data) {
          // let formName = element;
          // formName = formName.replace(/[^A-Za-z0-9]/g, '_').toLowerCase();
          // console.log(element);
          return str.concat(`<div class="row mb-0" onclick="javascript:getDetailData('${data.id}','search');" data-id="${data.id}">
          <a class="d-flex mb-0">
            <div class="align-self-center">
                <img data-src="${window.getImage(data.image,link)}" src="images/empty.png" width="40" height="40" class="rounded-xl me-3 lazy">
            </div>
            <div class="align-self-center">
                <h1 class="mb-n2 font-16">${data.name}</h1>
                <p class="font-11 opacity-60">${data.company ? data.company:""}</p>
            </div>
            <div class="align-self-center ms-auto text-end">
                <h2 class="mb-n1 font-18 color-red-dark">${window.money(data.total_amount)}</h2>
                <p class="font-12 opacity-50">${window.getValue(data.created_at,"getDayMonthYear")}</p>
            </div>
          </a></div>`);
          // return str.concat(`<div>
          //           <input type="checkbox" id="${formName}" name="cpg_services" value="${formName}" />
          //           <label for="${formName}">${element}</label>
          //         </div>`)
        }, '');
        document.getElementById(dataSearchId).innerHTML = str;
        new LazyLoad();
            
      }else{
        let notfounddesign = `<p><b>Sonuç Bulunamadı</b></p>
        <p class="mb-2">1- Aradığınız Kullanıcı İle Aynı Şirketi Seçmemiş Olabilirsiniz.</p>
        <p class="mb-2">2- Aradığınız kişi başka bir takımda olabilir.</p>
        <p>3- Böyle Bir kullanıcı nCoach Uygulamasını Kullanmıyor Olabilir. Takım Arkadaşınızı nCoach Uygulamasına Davet Edebilirsiniz.</p>
        `;
        //window.notFoundData("Aramanıza uygun kişi bulunamadı.")
        document.getElementById(dataSearchId).innerHTML = notfounddesign;
      }

    } catch(e) {
      window.notify(false,e);
    }
  }, function(response) {
    let res = JSON.parse(response.error);
    window.notify(false,res.message);
  });
}
function getDetailData(data,type){
  // window.loader();
  let link = window.server+"avatars/";
  let str;
  if(type == "search"){
    searchDetail = dataSearchs.filter(item => item.id === data)[0];
     str = `<div class="row mb-0">
      <div class="col-4"><img src="${window.getImage(searchDetail.image,link)}" width="100%" class="rounded-xl"></div>
      <div class="col-8 ps-2 mt-2">
          <div class="d-flex"><div><p>İsim</p></div><div class="ms-auto"><p class="font-700 color-theme">${searchDetail.name}</p></div></div>
          <div class="d-flex"><div><p>Şirket</p></div><div class="ms-auto"><p class="font-700 color-theme">${searchDetail.company}</p></div></div>
          <div class="d-flex"><div><p >Kariyer</p></div><div class="ms-auto"><p class="font-700 color-theme">${searchDetail.career}</p></div></div>
      </div>
    </div>
    <div class="divider mt-3 mb-3"></div>
    <div class="row mb-0">
      <div class="col-3"><h4 class="font-13 mt-1 opacity-70">Kazanç</h4></div>
      <div class="col-9"><h4 class="font-13 text-end mt-1 color-red-dark">$${searchDetail.total_amount}</h4></div>
      <div class="divider w-100 mt-2 mb-2"></div>
      <div class="col-3"><h4 class="font-13 mt-1 opacity-70">Email</h4></div>
      <div class="col-9"><h4 class="font-13 text-end mt-1">${window.toEmailRegex(searchDetail.email)}</h4></div>
      <div class="divider w-100 mt-2 mb-2"></div>
      <div class="col-3"><h4 class="font-13 mt-1 opacity-70">Statü</h4></div>
      <div class="col-9"><h4 class="font-13 text-end mt-1 color-green-dark">${searchDetail.verify ? "Doğrulanmış":"Doğrulanmamış"}</h4></div>
      <div class="divider w-100 mt-2 mb-3"></div>
      <div class="col-12">
        <a href="profil-detay.html?id=${searchDetail.id}" class="close-menu btn btn-full btn-m bg-fade-blue-light rounded-sm text-uppercase font-600 mb-3">PROFİLİ İNCELE</a>
      </div>
    </div>`;
  }
  if(type == "team"){
    teamDetail = dataTeams.filter(item => item.user.id === data)[0];
    // console.log(window.money(teamDetail.total_amount));
    str = `<div class="row mb-0">
      <div class="col-4"><img src="${window.getImage(teamDetail.user.image,link)}" width="100%" class="rounded-xl"></div>
      <div class="col-8 ps-2 mt-2">
          <div class="d-flex"><div><p>İsim</p></div><div class="ms-auto"><p class="font-700 color-theme">${teamDetail.user.name}</p></div></div>
          <div class="d-flex"><div><p>Şirket</p></div><div class="ms-auto"><p class="font-700 color-theme">${teamDetail.user.company}</p></div></div>
          <div class="d-flex"><div><p >Kariyer</p></div><div class="ms-auto"><p class="font-700 color-theme">${teamDetail.user.career}</p></div></div>
      </div>
    </div>
    <div class="divider mt-3 mb-3"></div>
    <div class="row mb-0">
      <div class="col-3"><h4 class="font-14 mt-1 opacity-70">Kazanç</h4></div>
      <div class="col-9"><h4 class="font-13 text-end mt-1 color-red-dark">${window.money(teamDetail.user.total_amount)}</h4></div>
      <div class="divider w-100 mt-2 mb-2"></div>
      <div class="col-3"><h4 class="font-13 mt-1 opacity-70">Email</h4></div>
      <div class="col-9"><h4 class="font-13 text-end mt-1">${window.toEmailRegex(teamDetail.user.email)}</h4></div>
      <div class="divider w-100 mt-2 mb-2"></div>
      <div class="col-3"><h4 class="font-13 mt-1 opacity-70">Statü</h4></div>
      <div class="col-9"><h4 class="font-13 text-end mt-1 color-green-dark">${teamDetail.user.verify ? "Doğrulanmış":"Doğrulanmamış"}</h4></div>
      <div class="divider w-100 mt-2 mb-3"></div>
      <div class="col-12">
        <a href="profil-detay.html?id=${teamDetail.user.id}" class="close-menu btn btn-full btn-m bg-fade-blue-light rounded-sm text-uppercase font-600 mb-3">PROFİLİ İNCELE</a>
      </div>
    </div>`;
  }
  
    // return str.concat(`<div>
    //           <input type="checkbox" id="${formName}" name="cpg_services" value="${formName}" />
    //           <label for="${formName}">${element}</label>
    //         </div>`)
  document.querySelector("#menu-popup-profil .content").innerHTML = str;
  window.modalOpen("menu-popup-profil");
  // cordova.plugin.http.get(window.api+controller+data, {}, { Authorization: 'Bearer '+window.getToken() }, function(response) {
  //   window.loader(false);
  //   try {
  //     response.data = JSON.parse(response.data);
  //     const userPurposeDetailTitle = document.getElementById("userPurposeDetailTitle");
  //     const userPurposeDetailPurpose = document.getElementById("userPurposeDetailPurpose");
  //     // const UserPurposeId = document.getElementById("UserPurposeId");
  //     userPurposeDetailTitle.innerText = response.data.title;
  //     userPurposeDetailPurpose.innerText = response.data.purpose;
  //     // UserPurposeId.value = response.data.id;
  //     window.modalOpen("menu-modal-purpose-detail");
  //   } catch(e) {
  //     window.notify(false,e);
  //   }
  // }, function(response) {
  //   window.loader(false);
  //   let res = JSON.parse(response.error);
  //   window.notify(false,res.message);
  // });
}
function statusDataById(data){
  window.loader();
  // cordova.plugin.http.post(window.api+controller+"auth/login", {
  cordova.plugin.http.put(window.api+controller+data, {status:true}, { Authorization: 'Bearer '+window.getToken() }, function(response) {
    window.loader(false);
    try {
      response.data = JSON.parse(response.data);
      window.modalOpen("menu-purpose-success");
      let data = document.querySelectorAll("[data-id='"+response.data.id+"'] .purposeStatus");
      data.forEach(d => {
        d.remove();
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
function deleteDataById(data){
  
  function onConfirm(val) {
    if(val==1){
      window.loader();
      cordova.plugin.http.delete(window.api+controller+data, {}, { Authorization: 'Bearer '+window.getToken() }, function(response) {
        window.loader(false);
        try {
          response.data = JSON.parse(response.data);
          document.querySelector("[data-id='"+response.data.id+"']").outerHTML = "";
        } catch(e) {
          window.notify(false,e);
        }
      }, function(response) {
        window.loader(false);
        let res = JSON.parse(response.error);
        window.notify(false,res.message);
      });
    }
  }
  navigator.notification.confirm(
    'Hedefi Sil', // message
    onConfirm,            // callback to invoke with index of button pressed
    'Emin misiniz?',           // title
    ['Sil','Vazgeç']     // buttonLabels
  );
 
}

function earningAmountCheck(e){
  let userEarningAddReceipt = document.getElementById("userEarningAddReceipt");
  if(e.value >= 5000) {
    userEarningAddReceipt.classList.add("active");
  }else{
    userEarningAddReceipt.classList.remove("active");
  }
}
console.log(1);
document.addEventListener("DOMContentLoaded", () => {
  ("use strict");
  
  console.log(2);
  document.addEventListener("loadend", loadend, false);
  function loadend() {
    console.log("yükleem bitti");
  }
  
  function init(){
    beforeStart();

    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
      
      console.log(3);
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

        var searchInput = document.querySelectorAll("[data-team-search]");
        if (searchInput.length) {
          
          var searchResults = document.querySelectorAll(".search-results");
          var clearSearch = document.querySelectorAll(".clear-search")[0];
          clearSearch.addEventListener("click", function () {
            searchInput[0].value = "";
            clearSearch.classList.add("disabled");
            searchResults[0].classList.add("disabled-search-list");
          });
          
          let timer;
          const waitTime = 500;
          function searchEngine() {
            var searchValue = searchInput[0].value;
            searchValue = searchValue.toLowerCase();

            if (searchValue != "") {
              if(searchValue.length <= 3){
                clearSearch.classList.add("disabled");
                searchResults[0].classList.add("disabled-search-list");
                return false;
              }
              clearSearch.classList.remove("disabled");
              searchResults[0].classList.remove("disabled-search-list");
              beforeSearch();
              search(searchValue);

            }
            ;
            if (searchValue === "") {
              clearSearch.classList.add("disabled");
              searchResults[0].classList.add("disabled-search-list");
            }
          }
          searchInput[0].addEventListener("keyup", function (e) {
            // console.log(e.target.value == "");
            // console.log(e.target);
            // if(e.which == 8) return false;
            if(e.target.value == ""){
              console.log("veri yok");
              return false;
            }
            // if(!e.target.value.length>0){
            //   console.log("veri yok2");
            //   return false;
            // }
            
            clearTimeout(timer);
            timer = setTimeout(() => {
              searchEngine();
            }, waitTime);
          });
        }
        ;

        
        // var toggle = document.querySelectorAll("[toggle-earning-check]");
        // if (toggle.length) {
        //   toggle.forEach(nashyla => {
        //     return nashyla.addEventListener("click", mirinda => {
        //       alert(2);
        //       var userEarningAddButton = document.getElementById("userEarningCheck");
        //       console.log(toggle.checked);
        //       if(toggle.checked){
        //         userEarningAddButton.setAttribute("disabled",false);
        //         // userEarningAddButton.classList.remove("d-none");
        //       }else{
        //         userEarningAddButton.setAttribute("disabled",true);
        //         // userEarningAddButton.classList.add("d-none");
        //       }
        //     });
        //   });
        // }
        // if (toggle) {
        //   alert(1);
        //   toggle.addEventListener("click", mirinda => {
        //   });
        // }
        // ;
        // var years = [2020,2021,2022,2023,2024,2025,2026,2027,2028,2029,2030];
        // var months = [01,02,03,04,05,06,07,08,09,10,11,12];

        // var userEarningAddMonth = document.getElementById('userEarningAddMonth');
        // for(var i = 0; i < months.length; i++) {
        //   var opt = document.createElement('option');
        //   opt.innerHTML = months[i];
        //   opt.value = months[i];
        //   userEarningAddMonth.appendChild(opt);
        // }
        
        // var userEarningAddYear = document.getElementById('userEarningAddYear');
        // for(var i = 0; i < years.length; i++) {
        //   var opt = document.createElement('option');
        //   opt.innerHTML = years[i];
        //   opt.value = years[i];
        //   userEarningAddYear.appendChild(opt);
        // }
        // document.getElementById('userEarningAddYear').value = 2020;
        // document.getElementById('userEarningAddMonth').value = 01;
        // var userEarningAddTime = document.getElementById('userEarningAddTime');
        // // userEarningAddTime.setAttribute("min", new Date().toISOString().split("T")[0]);
        // let year = new Date().toLocaleString().split(" ")[0].split(".")[2];
        // let month = new Date().toLocaleString().split(" ")[0].split(".")[1];
        // // userEarningAddTime.setAttribute("max", new Date().toISOString().split("T")[0]);
        // // userEarningAddTime.setAttribute("value", new Date().toISOString().split("T")[0]);
        // userEarningAddTime.setAttribute("min", "2020-01");
        // userEarningAddTime.setAttribute("max", `${year}-${month}`);
        // userEarningAddTime.setAttribute("value", `${year}-${month}`);
        
        let userEarningAddButton = document.querySelector("#userEarningAddButton");
        if (userEarningAddButton) {
          userEarningAddButton.addEventListener("click", armondo => {
            if(!document.getElementById("userEarningCheck").checked){
              window.notify(false,"Lütfen hedefinizi işaretleyiniz.");
              return;
            }
            const userEarningAddTime = document.getElementById('userEarningAddTime');
            if(userEarningAddTime.value == ""){
              window.notify(false,"Lütfen Ay Seçiniz.");
              return;
            }
            // const userVisionAddTitle = document.getElementById("userVisionAddTitle");
            // const userVisionAddImage = document.getElementById("userVisionAddImage");
            var formData = new FormData();

            const userEarningAddAmount = document.getElementById("userEarningAddAmount");
            
            if(userEarningAddAmount.value == ""){
              window.notify(false,"Lütfen Tutar Giriniz.");
              return;
            }

            var receipt = document.getElementById("upload-file-receipt");
            if(userEarningAddAmount.value >= 5000){
              if(receipt.value!=''){
                formData.append('receipt', receipt.files[0]);
              }else{
                window.notify(false,"Lütfen dekont seçiniz.");
                return;
              }
            }
            
            formData.append('amount', userEarningAddAmount.value);
            formData.append('date_year', userEarningAddTime.value.split("-")[0]);
            formData.append('date_month', userEarningAddTime.value.split("-")[1]);

            window.loader();
            cordova.plugin.http.setDataSerializer("multipart");
            cordova.plugin.http.post(window.api+controller, formData, { Authorization: 'Bearer '+window.getToken() }, function(response) {
              
              window.loader(false);
              try {
                response.data = JSON.parse(response.data);
                // console.log(response.data);
                
                beforeStart();
                // start();
                
                userEarningAddAmount.value = "";
                userEarningAddTime.value = "";
                let userEarningAddReceipt = document.getElementById("userEarningAddReceipt");
                userEarningAddReceipt.classList.remove("active");
                document.getElementById("userEarningCheck").checked = false;
                receipt.value = null;
                window.menuClose();
              } catch(e) {
                window.notify(false,e);
                return;
              }
            }, function(response) {
              
              window.loader(false);
              console.log(response)
              let res = JSON.parse(response.error);
              window.notify(false,res.message);
              // res.errors.forEach(error => {
              //   
              // });
            });
            cordova.plugin.http.setDataSerializer("json");

            
          });
        }
        ;
        
        // let userPurposeFilterButton = document.querySelector("#userPurposeFilterButton");
      // if (userPurposeFilterButton) {
      //   userPurposeFilterButton.addEventListener("click", armondo => {
      //     window.loader();
      //     const userPurposeFilterType = document.getElementById("userPurposeFilterType");
          
      //     if(userPurposeFilterType.value==''){
      //       window.loader(false);
      //       window.notify(false,"Lütfen Kriter Seçin");
      //       return;
      //     }
      //     cordova.plugin.http.get(window.api+controller+"filter", { 
      //       type: userPurposeFilterType.value
      //     }, { Authorization: 'Bearer '+window.getToken() }, function(response) {
      //     // prints 200
      //       // alert(1);
      //       window.loader(false);
      //       try {
      //         response.data = JSON.parse(response.data);
              
      //         let str = response.data.reduce(function(str, data) {
      //           return str.concat(`<div class="splide single-slider slider-no-arrows slider-no-dots mt-2" data-id="${data.id}" id="user-purpose-${data.id}">
      //             <div class="divider mt-0 mb-3"></div>
      //                 <div class="splide__track">
      //                     <div class="splide__list">
      //                         <div class="splide__slide mx-3" onclick="javascript:getDetailData('${data.id}');">
      //                             <div class="d-flex">
      //                                 <div class="align-self-top">
      //                                     <div class="bg-white rounded-sm color-theme shadow-xl text-center me-4 overflow-hidden">
                                          
      //                                         <span class="bg-red-dark font-10 d-block mb-2 px-3 line-height-xs py-1">${window.getValue(data.created_at,"getMonth")}</span>
      //                                         <span class="font-23 font-600 d-block mb-n3 line-height-s">${window.getValue(data.created_at,"getDate")}</span><br>
                                              
      //                                     </div>
      //                                 </div>
      //                                 <div class="align-self-center">
      //                                     <h5 class="mb-0 pt-1">${data.title}</h5>
      //                                     <p class="mb-3">${data.purpose || "&nbsp;"}</p>
                                      
      //                                 </div>
      //                             </div>
      //                         </div>
      //                         <div class="splide__slide mx-3">
      //                             <div class="d-flex">
      //                                 <div class="align-self-center">
      //                                     <h2 class="mb-0 pt-1 ms-4">Süre: ${window.getValue(data.duration,"getDuration")}</h2>
      //                                 </div>
      //                                 <div class="align-self-center ms-auto my-3">
      //                                     <a href="javascript:statusDataById('${data.id}');" class="${data.status ? "d-none":""} icon icon-m bg-green-dark purposeStatus rounded-m me-2"><i class="fa fa-check"></i></a>
      //                                     <a href="javascript:deleteDataById('${data.id}');" class="icon icon-m bg-red-light rounded-m"><i class="fa fa-trash"></i></a>
      //                                 </div>
      //                             </div>
      //                         </div>
      //                     </div>
      //                 </div>
      //             </div>`);
      //         }, '');
      //         document.getElementById(dataListId).innerHTML = str;//html.join('');
      //         window.reloadSlider();
      //         window.menuClose();
      //         userPurposeFilterType.value="";
    
      //       } catch(e) {
      //         window.notify(false,e);
      //       }
      //     }, function(response) {
      //       window.loader(false);
      //       let res = JSON.parse(response.error);
      //       window.notify(false,res.message);
      //     });
          
      //   });
      // }
      // ;
      
      // let userPurposeemoveButton = document.querySelector("#userPurposeemoveButton");
      // if (userPurposeemoveButton) {
      //   userPurposeemoveButton.addEventListener("click", armondo => {
      //     window.loader();
      //     const UserPurposeId = document.getElementById("UserPurposeId");
          
      //     if(!UserPurposeId.value){
      //       window.loader(false);
      //       window.notify(false,"Hedef Bulunamadı.");
      //       return;
      //     }
      //     cordova.plugin.http.delete(window.api+controller+UserPurposeId.value, {}, { Authorization: 'Bearer '+window.getToken() }, function(response) {
      //       window.loader(false);
      //       try {
      //         response.data = JSON.parse(response.data);
      //         document.querySelector("[data-id='"+response.data.id+"']").outerHTML = "";
      //         window.menuClose();
      //         UserPurposeDetailNote.value="";
      //         UserPurposeDetailNote.value="";
      //         UserPurposeId.value="";
    
      //       } catch(e) {
      //         window.notify(false,e);
      //       }
      //     }, function(response) {
      //       window.loader(false);
      //       let res = JSON.parse(response.error);
      //       window.notify(false,res.message);
      //     });
          
      //   });
      // }
      // ;
    
      }, 500);
    }

  }
  
  init();
});


