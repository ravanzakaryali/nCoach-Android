const controller = "uservisions/";
const dataListId = "userVisionList";
let dataCount = 0;
let dataVisions = 0;
function getDetailData(data){
  window.loader();
  cordova.plugin.http.get(window.api+controller+data, {}, { Authorization: 'Bearer '+window.getToken() }, function(response) {
    window.loader(false);
    try {
      response.data = JSON.parse(response.data);
      const userPurposeDetailTitle = document.getElementById("userPurposeDetailTitle");
      const userPurposeDetailPurpose = document.getElementById("userPurposeDetailPurpose");
      // const UserPurposeId = document.getElementById("UserPurposeId");
      userPurposeDetailTitle.innerText = response.data.title;
      userPurposeDetailPurpose.innerText = response.data.purpose;
      // UserPurposeId.value = response.data.id;
      window.modalOpen("menu-modal-purpose-detail");
    } catch(e) {
      window.notify(false,e);
    }
  }, function(response) {
    window.loader(false);
    let res = JSON.parse(response.error);
    window.notify(false,res.message);
  });
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
function getStyleList(img,i){
  let thumb = window.server+"visions/thumbs/"+img;
  let link = window.server+"visions/"+img;
  if(i==0){
    return `<div class="col-7">
      <a class="card mx-0 mb-3 card-style external-link lazy" data-card-height="270" data-gallery="gallery-b" href="${link}" data-bg="${thumb}" src="images/empty.png">
      <div class="card-overlay bg-gradient-custom"></div></a>
      </div>`;
  }
  if(i==1){
    return `<div class="col-5 ps-0">
      <a class="card mx-0 mb-2 card-style external-link lazy" data-card-height="130" data-gallery="gallery-b" href="${link}" data-bg="${thumb}" src="images/empty.png"><div class="card-overlay bg-gradient-custom"></div></a> 
      <a class="card mx-0 mb-2 card-style external-link lazy" data-card-height="130" data-gallery="gallery-b" href="${link}" data-bg="${thumb}" src="images/empty.png"><div class="card-overlay bg-gradient-custom"></div></a>
    </div>`;
  }
  return [
    ,
      ,
      `<div class="col-4">
      <a class="card mx-0 mb-3 card-style external-link lazy" data-card-height="95" data-gallery="gallery-b" href="${link}" data-bg="${thumb}" src="images/empty.png"><div class="card-overlay bg-gradient-custom"></div></a>
    </div>`,
      `<div class="col-4 px-0">
      <a class="card mx-0 mb-3 card-style external-link lazy" data-card-height="95" data-gallery="gallery-b" href="${link}" data-bg="${thumb}" src="images/empty.png"><div class="card-overlay bg-gradient-custom"></div></a>
    </div>`,
      `<div class="col-4">
      <a class="card mx-0 mb-3 card-style external-link lazy" data-card-height="95" data-gallery="gallery-b" href="${link}" data-bg="${thumb}" src="images/empty.png"><div class="card-overlay bg-gradient-custom"></div></a>
    </div>`,
      `<div class="col-6 pe-0">
      <a class="card mx-0 mb-3 card-style external-link lazy" data-card-height="300" data-gallery="gallery-b" href="${link}" data-bg="${thumb}" src="images/empty.png">
      <div class="card-overlay bg-gradient-custom"></div></a>
      </div>`,
      `<div class="col-6">
      <a class="card mx-0 mb-2 card-style external-link lazy" data-card-height="95" data-gallery="gallery-b" href="${link}" data-bg="${thumb}" src="images/empty.png"></a>
    </div>`,
      `<div class="col-6">
      <a class="card mx-0 mb-2 card-style external-link lazy" data-card-height="95" data-gallery="gallery-b" href="${link}" data-bg="${thumb}" src="images/empty.png"></a>
      <a class="card mx-0 mb-2 card-style external-link lazy" data-card-height="95" data-gallery="gallery-b" href="${link}" data-bg="${thumb}" src="images/empty.png"></a>
    </div>`,
      `<div class="col-6">
      <a class="card mx-0 mb-2 card-style external-link lazy" data-card-height="95" data-gallery="gallery-b" href="${link}" data-bg="${thumb}" src="images/empty.png"></a>
      <a class="card mx-0 mb-2 card-style external-link lazy" data-card-height="95" data-gallery="gallery-b" href="${link}" data-bg="${thumb}" src="images/empty.png"></a>
      <a class="card mx-0 mb-2 card-style external-link lazy" data-card-height="95" data-gallery="gallery-b" href="${link}" data-bg="${thumb}" src="images/empty.png"><div class="card-overlay bg-gradient-custom"></div></a>
    </div>`,
      `<div class="col-12">
      <a class="card mx-0 mb-0 card-style external-link lazy" data-card-height="150" data-gallery="gallery-b" href="${link}" data-bg="${thumb}" src="images/empty.png"><div class="card-overlay bg-gradient-custom"></div>
      <div class="card-overlay bg-gradient-custom"></div></a>
    </div>`
    ];
}

document.addEventListener("DOMContentLoaded", () => {
  ("use strict");
  
  document.addEventListener("loadend", loadend, false);
  function loadend() {
    console.log("yükleem bitti");
  }
  
  function beforeStart(){
    return document.getElementById(dataListId).innerHTML = window.loadingData;
  }
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
      function start(){
        cordova.plugin.http.get(window.api+controller, {}, { Authorization: 'Bearer '+window.getToken() }, function(response) {
          // prints 200
          // alert(1);
          try {
            response.data = JSON.parse(response.data);
            dataVisions = response.data;
            dataCount = dataVisions.length;
            if(dataCount){

              let style = "";
              dataVisions.forEach((e,index) => {
                            
                let thumb = window.server+"visions/thumbs/"+e.image;
                let link = window.server+"visions/"+e.image;
                let row = index % 11;
                if(row==0){
                  style += `<div class="col-7">
                    <a class="card mx-0 mb-3 card-style external-link lazy" data-card-height="270" data-gallery="gallery-b" href="${link}" data-bg="${thumb}">
                    <div class="card-overlay bg-gradient-custom"></div></a>
                  </div>`;
                }
                if(row==1){
                  style += `<div class="col-5 ps-0">
                    <a class="card mx-0 mb-2 card-style external-link lazy" data-card-height="130" data-gallery="gallery-b" href="${link}" data-bg="${thumb}"><div class="card-overlay bg-gradient-custom"></div></a></div>`;
                }
                if(row==2){
                  style = style.slice(0,-6);
                  style += `<a class="card mx-0 mb-2 card-style external-link lazy" data-card-height="130" data-gallery="gallery-b" href="${link}" data-bg="${thumb}"><div class="card-overlay bg-gradient-custom"></div></a></div>`;
                }
                // style += `</div>`;
                if(row==3){
                  style += `<div class="col-4"><a class="card mx-0 mb-3 card-style external-link lazy" data-card-height="95" data-gallery="gallery-b" href="${link}" data-bg="${thumb}"><div class="card-overlay bg-gradient-custom"></div></a></div>`;
                }
                if(row==4){
                  style += `<div class="col-4 px-0"><a class="card mx-0 mb-3 card-style external-link lazy" data-card-height="95" data-gallery="gallery-b" href="${link}" data-bg="${thumb}"><div class="card-overlay bg-gradient-custom"></div></a></div>`;
                }
                if(row==5){
                  style += `<div class="col-4"><a class="card mx-0 mb-3 card-style external-link lazy" data-card-height="95" data-gallery="gallery-b" href="${link}" data-bg="${thumb}"><div class="card-overlay bg-gradient-custom"></div></a></div>`;
                }
                if(row==6){
                  style += `<div class="col-6 pe-0"><a class="card mx-0 mb-3 card-style external-link lazy" data-card-height="300" data-gallery="gallery-b" href="${link}" data-bg="${thumb}">
                  <div class="card-overlay bg-gradient-custom"></div></a></div>`;
                }
                if(row==7){
                  style += `<div class="col-6"><a class="card mx-0 mb-2 card-style external-link lazy" data-card-height="95" data-gallery="gallery-b" href="${link}" data-bg="${thumb}"></a></div>`;
                }
                if(row==8){
                  style = style.slice(0,-6);
                  style += `<a class="card mx-0 mb-2 card-style external-link lazy" data-card-height="95" data-gallery="gallery-b" href="${link}" data-bg="${thumb}"><div class="card-overlay bg-gradient-custom"></div></a></div>`;
                }
                if(row==9){
                  style = style.slice(0,-6);
                  style += `<a class="card mx-0 mb-2 card-style external-link lazy" data-card-height="95" data-gallery="gallery-b" href="${link}" data-bg="${thumb}"><div class="card-overlay bg-gradient-custom"></div></a></div>`;
                }
                if(row==10){
                  style += `<div class="col-12 mb-2"><a class="card mx-0 mb-0 card-style external-link lazy" data-card-height="150" data-gallery="gallery-b" href="${link}" data-bg="${thumb}"><div class="card-overlay bg-gradient-custom"></div><div class="card-overlay bg-gradient-custom"></div></a></div>`;
                }
              });

              document.getElementById(dataListId).innerHTML = style;//html.join('');
            
              new LazyLoad();
              var lightbox = GLightbox({
                  closeOnOutsideClick: false,
                  zoomable:false,
                  descPosition:'bottom',
                  selector: '[data-gallery]',
                  openEffect: 'fade',
                  closeEffect: 'fade',
                  dragAutoSnap:true,
              });
              window.cardResize();
              dataCount = dataCount+1;
              window.loader(false);
              
            }else{
              document.getElementById(dataListId).innerHTML = window.notFoundData("Sonuç bulunamadı.");
            }
  
          } catch(e) {
            window.notify(false,e);
          }
        }, function(response) {
          let res = JSON.parse(response.error);
          window.notify(false,res.message);
        });
      }
      start();
        
      setTimeout(() => {
        // function blobToBase64(blob) {
        //   return new Promise((resolve, _) => {
        //     const reader = new FileReader();
        //     reader.onloadend = () => resolve(reader.result);
        //     reader.readAsDataURL(blob);
        //   });
        // }
        const uploadFileVision = document.getElementsByClassName("upload-file-vision");
        if (uploadFileVision.length) {
          uploadFileVision[0].addEventListener("change", engine, false);
          var visionImage = document.getElementById("visionImage");
          var visionImagePreview = document.getElementById("visionImagePreview");
          function engine() {
            if (this.files && this.files[0]) {
              visionImage.src = URL.createObjectURL(this.files[0]);
              // const reader = new FileReader();
              // visionImage.parentNode.href = blobToBase64(URL.createObjectURL(this.files[0]));
              visionImage.classList.remove("disabled");
              visionImagePreview.classList.add("disabled");
            }
            ;
          }
        }
        ;
        let userVisionModalButton = document.querySelector("#menu-add-vision-button");
        if (userVisionModalButton) {
          userVisionModalButton.addEventListener("click", armondo => {
            var uploadfilevision = document.getElementById("upload-file-vision");
            uploadfilevision.value = null;
            var visionImage = document.getElementById("visionImage");
            var visionImagePreview = document.getElementById("visionImagePreview");
            visionImage.classList.add("disabled");
            visionImagePreview.classList.remove("disabled");
            window.modalOpen("menu-add-vision");
          })
        }
        ;
        let userVisionAddButton = document.querySelector("#userVisionAddButton");
        if (userVisionAddButton) {
          userVisionAddButton.addEventListener("click", armondo => {
            // window.loader();
            // const userVisionAddTitle = document.getElementById("userVisionAddTitle");
            // const userVisionAddImage = document.getElementById("userVisionAddImage");

            let image;
            var uploadfilevision = document.getElementById("upload-file-vision");
            if(uploadfilevision.value!=''){
              window.loader();
              var formData = new FormData();
              formData.append('image', uploadfilevision.files[0]);
              
              const thumbDef = window.server+"visions/thumbs/";
              const linkDef = window.server+"visions/";
              cordova.plugin.http.setDataSerializer("multipart");
              cordova.plugin.http.post(window.api+controller, formData, { Authorization: 'Bearer '+window.getToken() }, function(response) {
                
                window.loader(false);
                try {
                  response.data = JSON.parse(response.data);
                  dataVisions.unshift(response.data);
                  if(dataVisions.length){
      
                    let style = "";
                    dataVisions.forEach((e,index) => {
                                  
                      let thumb = thumbDef+e.image;
                      let link = linkDef+e.image;
                      let row = index % 11;
                      if(row==0){
                        style += `<div class="col-7">
                          <a class="card mx-0 mb-3 card-style external-link lazy" data-card-height="270" data-gallery="gallery-b" href="${link}" data-bg="${thumb}">
                          <div class="card-overlay bg-gradient-custom"></div></a>
                        </div>`;
                      }
                      if(row==1){
                        style += `<div class="col-5 ps-0">
                          <a class="card mx-0 mb-2 card-style external-link lazy" data-card-height="130" data-gallery="gallery-b" href="${link}" data-bg="${thumb}"><div class="card-overlay bg-gradient-custom"></div></a></div>`;
                      }
                      if(row==2){
                        style = style.slice(0,-6);
                        style += `<a class="card mx-0 mb-2 card-style external-link lazy" data-card-height="130" data-gallery="gallery-b" href="${link}" data-bg="${thumb}"><div class="card-overlay bg-gradient-custom"></div></a></div>`;
                      }
                      // style += `</div>`;
                      if(row==3){
                        style += `<div class="col-4"><a class="card mx-0 mb-3 card-style external-link lazy" data-card-height="95" data-gallery="gallery-b" href="${link}" data-bg="${thumb}"><div class="card-overlay bg-gradient-custom"></div></a></div>`;
                      }
                      if(row==4){
                        style += `<div class="col-4 px-0"><a class="card mx-0 mb-3 card-style external-link lazy" data-card-height="95" data-gallery="gallery-b" href="${link}" data-bg="${thumb}"><div class="card-overlay bg-gradient-custom"></div></a></div>`;
                      }
                      if(row==5){
                        style += `<div class="col-4"><a class="card mx-0 mb-3 card-style external-link lazy" data-card-height="95" data-gallery="gallery-b" href="${link}" data-bg="${thumb}"><div class="card-overlay bg-gradient-custom"></div></a></div>`;
                      }
                      if(row==6){
                        style += `<div class="col-6 pe-0"><a class="card mx-0 mb-3 card-style external-link lazy" data-card-height="300" data-gallery="gallery-b" href="${link}" data-bg="${thumb}">
                        <div class="card-overlay bg-gradient-custom"></div></a></div>`;
                      }
                      if(row==7){
                        style += `<div class="col-6"><a class="card mx-0 mb-2 card-style external-link lazy" data-card-height="95" data-gallery="gallery-b" href="${link}" data-bg="${thumb}"></a></div>`;
                      }
                      if(row==8){
                        style = style.slice(0,-6);
                        style += `<a class="card mx-0 mb-2 card-style external-link lazy" data-card-height="95" data-gallery="gallery-b" href="${link}" data-bg="${thumb}"><div class="card-overlay bg-gradient-custom"></div></a></div>`;
                      }
                      if(row==9){
                        style = style.slice(0,-6);
                        style += `<a class="card mx-0 mb-2 card-style external-link lazy" data-card-height="95" data-gallery="gallery-b" href="${link}" data-bg="${thumb}"><div class="card-overlay bg-gradient-custom"></div></a></div>`;
                      }
                      if(row==10){
                        style += `<div class="col-12 mb-2"><a class="card mx-0 mb-0 card-style external-link lazy" data-card-height="150" data-gallery="gallery-b" href="${link}" data-bg="${thumb}"><div class="card-overlay bg-gradient-custom"></div><div class="card-overlay bg-gradient-custom"></div></a></div>`;
                      }
                    });
      
                    dataCount = dataCount+1;
                    document.getElementById(dataListId).innerHTML = style;//html.join('');                  
                    
                  }else{
                    document.getElementById(dataListId).innerHTML = "str";
                  }
                  new LazyLoad();
                  var lightbox = GLightbox({
                      closeOnOutsideClick: false,
                      zoomable:false,
                      descPosition:'bottom',
                      selector: '[data-gallery]',
                      openEffect: 'fade',
                      closeEffect: 'fade',
                      dragAutoSnap:true,
                  });
                  window.cardResize();
                  window.loader(false);
                  window.menuClose();
                  
                } catch(e) {
                  window.notify(false,e);
                  return;
                }
              }, function(response) {
                
                window.loader(false);
                let res = JSON.parse(response.error);
                console.log(res);
                res.forEach(error => {
                  window.notify(false,error.message);
                });
              });
              cordova.plugin.http.setDataSerializer("json");
            }else{
              window.notify(false,"Lütfen resim seçiniz.");
            }

            
          });
        }
        ;
      }, 500);
      
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
    }

  }
  init();
});


