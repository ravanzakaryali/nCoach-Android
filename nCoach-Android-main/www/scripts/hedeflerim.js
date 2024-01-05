const controller = "userpurposes/";
const dataListId = "userPurposeList";
let dataCount = 0;
let dataPurpose = null;
function beforeStart(){

  return document.getElementById(dataListId).innerHTML = window.loadingData;
}
function start(){
  cordova.plugin.http.get(window.api+controller, {}, { Authorization: 'Bearer '+window.getToken() }, function(response) {
    // prints 200
    // alert(1);
    try {
      response.data = JSON.parse(response.data);
      dataCount = response.data.length;
      
      window.setStorage("totalPurposes",dataCount);
      if(response.data.length){
        
        let str = response.data.reduce(function(str, data, index) {
          // let formName = element;
          // formName = formName.replace(/[^A-Za-z0-9]/g, '_').toLowerCase();
          // console.log(element);
          return str.concat(`<div class="row mb-0" data-id="${data.id}" onclick="javascript:getDetailData('${data.id}');" style="position:relative;">
          <div class="d-flex">
              <div class="align-self-top">
                  <div class="bg-white rounded-sm color-theme shadow-xl text-center me-4 overflow-hidden">
                      <a data-menu="menu-event-sample">
                          <span class="${data.status ? "bg-success text-white":"bg-highlight"} font-10 d-block mb-2 px-3 line-height-xs py-1">
                          ${window.getValue(data.created_at,"getMonth")}</span>
                          <span class="font-23 font-600 d-block mb-n3 line-height-s ">${window.getValue(data.created_at,"getDate")}</span><br>
                      </a>
                  </div>
              </div>
              <div class="align-self-center">
                  <a data-menu="menu-event-sample">
                      <h5 class="mb-0 pt-1">${data.title}</h5>
                      <p class="mb-1">
                      ${window.getValue(data.duration,"getDuration")}
                      ${data.purpose || "&nbsp;"}
                      </p>
                  </a>
              </div>
              ${data.status ? `<span class="purposeSuccess"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <rect x="0" y="0" width="24" height="24"/>
                  <circle fill="#198754" opacity="0.3" cx="12" cy="12" r="10"/>
                  <path d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z" fill="#198754" fill-rule="nonzero"/>
              </g></svg></span>`:``}
          </div></div>`);
          // return str.concat(`<div>
          //           <input type="checkbox" id="${formName}" name="cpg_services" value="${formName}" />
          //           <label for="${formName}">${element}</label>
          //         </div>`)
        }, '');
        // response.data.forEach(newhtml => {
        //   html.push(`<div>wafawf' + newhtml + '</div>`);
        //   // html.push(newhtml);
        // });
        document.getElementById(dataListId).innerHTML = str;//html.join('');
      }else{
        document.getElementById(dataListId).innerHTML = window.notFoundData("Henüz hedef girmediniz.");
      }
      window.userPurposesCount();

    } catch(e) {
      window.notify(false,e);
    }
  }, function(response) {
    let res = JSON.parse(response.error);
    window.notify(false,res.message);
  });
}
function getDetailData(data){
  window.loader();
  cordova.plugin.http.get(window.api+controller+data, {}, { Authorization: 'Bearer '+window.getToken() }, function(response) {
    window.loader(false);
    try {
      response.data = JSON.parse(response.data);
      dataPurpose = response.data;
      const userPurposeDetailTitle = document.getElementById("userPurposeDetailTitle");
      const userPurposeDetailPurpose = document.getElementById("userPurposeDetailPurpose");
      const userPurposeDetailMonth = document.getElementById("userPurposeDetailMonth");
      const userPurposeDetailDay = document.getElementById("userPurposeDetailDay");
      const userPurposeDetailDate = document.getElementById("userPurposeDetailDate");
      const userPurposeDetailDuration = document.getElementById("userPurposeDetailDuration");
      const userPurposeDetailStatus = document.getElementById("userPurposeDetailStatus");
      
      const userPurposeStatusButton = document.getElementById("userPurposeStatusButton");
              
      let statusText = ``;
      if(response.data.status){
        statusText = `<a href="#" onclick="javascript:statusDataById('${response.data.id}',false);" class="btn btn-full btn-m font-600 font-14 rounded-sm text-uppercase bg-fade-red-light mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <rect x="0" y="0" width="24" height="24"></rect>
                <circle fill="#000000" opacity="0.3" cx="12" cy="12" r="10"></circle>
                <rect fill="#000000" x="6" y="11" width="12" height="2" rx="1"></rect>
            </g>
        </svg>
        İPTAL ET
    </a>`;
      }else{
        statusText = `<a href="#" onclick="javascript:statusDataById('${response.data.id}',true);" class="btn btn-full btn-m font-600 font-14 rounded-sm text-uppercase bg-fade-green-light mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <rect x="0" y="0" width="24" height="24"/>
                <circle fill="#fff" opacity="0.3" cx="12" cy="12" r="10"/>
                <path d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z" fill="#fff" fill-rule="nonzero"/>
            </g>
        </svg>
        TAMAMLA
    </a>`;
      }
      userPurposeStatusButton.innerHTML = statusText;
      

      userPurposeDetailTitle.innerText = response.data.title;
      userPurposeDetailPurpose.innerText = response.data.purpose;
      let month = window.getValue(response.data.created_at,"getMonth");
      let day = window.getValue(response.data.created_at,"getDate");
      let year = window.getValue(response.data.created_at,"getYear");
      userPurposeDetailMonth.innerText = month;
      userPurposeDetailDay.innerText = day;
      userPurposeDetailDate.innerText = day + " " + month + " " + year;
      userPurposeDetailDuration.innerText = window.getValue(response.data.duration,"getDuration");
      userPurposeDetailStatus.innerHTML = response.data.status ? '<h4 class="font-14 text-end mt-1 color-green-dark">Tamamlandı</h4>' : '<h4 class="font-14 text-end mt-1 color-red-dark">Tamamlanmadı</h4>';
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
function statusDataById(data,val){
  window.loader();
  // cordova.plugin.http.post(window.api+controller+"auth/login", {
  cordova.plugin.http.put(window.api+controller+data, {status:val}, { Authorization: 'Bearer '+window.getToken() }, function(response) {
    window.loader(false);
    try {
      response.data = JSON.parse(response.data);
      if(val){
        window.menuClose();
        window.modalOpen("menu-purpose-success");
        setTimeout(() => {
          beforeStart();
          start();
        }, 1000);
      }else{
        window.menuClose();
        beforeStart();
        start();
      }
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
          
          dataCount = dataCount-1;
          
          window.setStorage("totalPurposes",dataCount);
          window.userPurposesCount();
              
          if(dataCount>0){
            document.querySelector("[data-id='"+response.data.id+"']").outerHTML = "";
          }else{
            document.getElementById(dataListId).innerHTML = window.notFoundData("Henüz hedef girmediniz.");
          }
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

document.addEventListener("DOMContentLoaded", () => {
  ("use strict");
  
  function init(){
    beforeStart();

    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
      setTimeout(() => {
        const ptr = PullToRefresh.init({
          mainElement: '.page-content',
          triggerElement: '.page-content',
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
        let userPurposeAddButton = document.querySelector("#userPurposeAddButton");
        if (userPurposeAddButton) {
          userPurposeAddButton.addEventListener("click", armondo => {
            window.loader();
            const userPurposeAddTitle = document.getElementById("userPurposeAddTitle");
            const userPurposeAddPurpose = document.getElementById("userPurposeAddPurpose");
            const userPurposeAddDuration = document.getElementById("userPurposeAddDuration");
            
            if(userPurposeAddTitle.value=='' || userPurposeAddDuration.value==''){
              window.loader(false);
              window.notify(false,window.langs.eksikalanbirakmayin);
              return;
            }
            cordova.plugin.http.post(window.api+controller, {
              title: userPurposeAddTitle.value,
              purpose: userPurposeAddPurpose.value,
              duration: userPurposeAddDuration.value
            }, { Authorization: 'Bearer '+window.getToken() }, function(response) {
            // prints 200
              // alert(1);
              window.loader(false);
              try {
                response.data = JSON.parse(response.data);
                            
                let str = [response.data].reduce(function(str, data, index) {
                  return str.concat(`<div class="row mb-0" data-id="${data.id}" onclick="javascript:getDetailData('${data.id}');">
                  <div class="d-flex">
                      <div class="align-self-top">
                          <div class="bg-white rounded-sm color-theme shadow-xl text-center me-4 overflow-hidden">
                              <a data-menu="menu-event-sample">
                                  <span class="${data.status ? "bg-success text-white":"bg-highlight"} font-10 d-block mb-2 px-3 line-height-xs py-1">
                                  ${window.getValue(data.created_at,"getMonth")}</span>
                                  <span class="font-23 font-600 d-block mb-n3 line-height-s ">${window.getValue(data.created_at,"getDate")}</span><br>
                              </a>
                          </div>
                      </div>
                      <div class="align-self-center">
                          <a data-menu="menu-event-sample">
                              <h5 class="mb-0 pt-1">${data.title}</h5>
                              <p class="mb-1">
                              ${window.getValue(data.duration,"getDuration")}
                              ${data.purpose || "&nbsp;"}
                              </p>
                          </a>
                      </div>
                  </div></div>`);
                }, '');
                
                if(dataCount>0){
                  document.getElementById(dataListId).innerHTML = str + document.getElementById(dataListId).innerHTML;
                }else{
                  document.getElementById(dataListId).innerHTML = str;
                }

                dataCount = dataCount+1;
                
                window.setStorage("totalPurposes",dataCount);
                window.userPurposesCount();
                window.menuClose();
                userPurposeAddTitle.value="";
                userPurposeAddPurpose.value="";
                userPurposeAddDuration.value="";
      
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
          
        let userPurposeUpdateButton = document.querySelector("#userPurposeUpdateButton");
        if (userPurposeUpdateButton) {
          userPurposeUpdateButton.addEventListener("click", armondo => {
            
            if(!dataPurpose){
              window.notify(false,"Bir sorun var gibi.");
              return;
            }
            window.loader();
            const userPurposeEditTitle = document.getElementById("userPurposeEditTitle");
            const userPurposeEditPurpose = document.getElementById("userPurposeEditPurpose");
            const userPurposeEditDuration = document.getElementById("userPurposeEditDuration");
            
            if(userPurposeEditTitle.value=='' || userPurposeEditDuration.value==''){
              window.loader(false);
              window.notify(false,window.langs.eksikalanbirakmayin);
              return;
            }
            cordova.plugin.http.put(window.api+controller+dataPurpose.id, {
              title: userPurposeEditTitle.value,
              purpose: userPurposeEditPurpose.value,
              duration: userPurposeEditDuration.value
            }, { Authorization: 'Bearer '+window.getToken() }, function(response) {
              window.loader(false);
              try {
                response.data = JSON.parse(response.data);
                
                let str = [response.data].reduce(function(str, data, index) {
                  // let formName = element;
                  // formName = formName.replace(/[^A-Za-z0-9]/g, '_').toLowerCase();
                  // console.log(element);
                  return str.concat(`<div class="row mb-0" data-id="${data.id}" onclick="javascript:getDetailData('${data.id}');" style="position:relative;">
                  <div class="d-flex">
                      <div class="align-self-top">
                          <div class="bg-white rounded-sm color-theme shadow-xl text-center me-4 overflow-hidden">
                              <a data-menu="menu-event-sample">
                                  <span class="${data.status ? "bg-success text-white":"bg-highlight"} font-10 d-block mb-2 px-3 line-height-xs py-1">
                                  ${window.getValue(data.created_at,"getMonth")}</span>
                                  <span class="font-23 font-600 d-block mb-n3 line-height-s ">${window.getValue(data.created_at,"getDate")}</span><br>
                              </a>
                          </div>
                      </div>
                      <div class="align-self-center">
                          <a data-menu="menu-event-sample">
                              <h5 class="mb-0 pt-1">${data.title}</h5>
                              <p class="mb-1">
                              ${window.getValue(data.duration,"getDuration")}
                              ${data.purpose || "&nbsp;"}
                              </p>
                          </a>
                      </div>
                      ${data.status ? `<span class="purposeSuccess"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <rect x="0" y="0" width="24" height="24"/>
                          <circle fill="#198754" opacity="0.3" cx="12" cy="12" r="10"/>
                          <path d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z" fill="#198754" fill-rule="nonzero"/>
                      </g></svg></span>`:``}
                  </div></div>`);
                  }, '');
                document.querySelector("[data-id='"+response.data.id+"']").outerHTML = str;
                
                window.menuClose();
                userPurposeEditTitle.value="";
                userPurposeEditPurpose.value="";
                userPurposeEditDuration.value="";
                dataPurpose=null;
      
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

        let userPurposeEditButton = document.querySelector("#userPurposeEditButton");
        if (userPurposeEditButton) {
          userPurposeEditButton.addEventListener("click", armondo => {
            
            if(!dataPurpose){
              window.notify(false,"Bir sorun var gibi.");
              return;
            }
            const userPurposeEditTitle = document.getElementById("userPurposeEditTitle");
            const userPurposeEditPurpose = document.getElementById("userPurposeEditPurpose");
            const userPurposeEditDuration = document.getElementById("userPurposeEditDuration");

            userPurposeEditTitle.value = dataPurpose.title;
            userPurposeEditPurpose.value = dataPurpose.purpose;
            userPurposeEditDuration.value = dataPurpose.duration;

            // $('#mySelect2').val('1'); // Select the option with a value of '1'
            $('#userPurposeEditDuration').trigger('change'); // Notify any JS components that the value changed
            window.modalOpen("menu-modal-purpose-edit");


            // window.loader(); 
            // cordova.plugin.http.get(window.api+controller+dataPurpose.id, {}, { Authorization: 'Bearer '+window.getToken() }, function(response) {
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
        
        let userPurposeFilterButton = document.querySelector("#userPurposeFilterButton");
        if (userPurposeFilterButton) {
          userPurposeFilterButton.addEventListener("click", armondo => {
            window.loader();
            const userPurposeFilterType = document.getElementById("userPurposeFilterType");
            
            if(userPurposeFilterType.value==''){
              window.loader(false);
              window.notify(false,"Lütfen Kriter Seçin");
              return;
            }
            cordova.plugin.http.get(window.api+controller+"filter", { 
              type: userPurposeFilterType.value
            }, { Authorization: 'Bearer '+window.getToken() }, function(response) {
            // prints 200
              // alert(1);
              window.loader(false);
              try {
                response.data = JSON.parse(response.data);
                
                if(response.data.length){
                  dataCount = response.data.length;
                let str = response.data.reduce(function(str, data) {
                  return str.concat(`<div class="row mb-0" data-id="${data.id}" onclick="javascript:getDetailData('${data.id}');" style="position:relative;">
                  <div class="d-flex">
                      <div class="align-self-top">
                          <div class="bg-white rounded-sm color-theme shadow-xl text-center me-4 overflow-hidden">
                              <a data-menu="menu-event-sample">
                                  <span class="${data.status ? "bg-success text-white":"bg-highlight"} font-10 d-block mb-2 px-3 line-height-xs py-1">
                                  ${window.getValue(data.created_at,"getMonth")}</span>
                                  <span class="font-23 font-600 d-block mb-n3 line-height-s ">${window.getValue(data.created_at,"getDate")}</span><br>
                              </a>
                          </div>
                      </div>
                      <div class="align-self-center">
                          <a data-menu="menu-event-sample">
                              <h5 class="mb-0 pt-1">${data.title}</h5>
                              <p class="mb-1">
                              ${window.getValue(data.duration,"getDuration")}
                              ${data.purpose || "&nbsp;"}
                              </p>
                          </a>
                      </div>
                      ${data.status ? `<span class="purposeSuccess"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <rect x="0" y="0" width="24" height="24"/>
                          <circle fill="#198754" opacity="0.3" cx="12" cy="12" r="10"/>
                          <path d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z" fill="#198754" fill-rule="nonzero"/>
                      </g></svg></span>`:``}
                  </div></div>`);
                }, '');
                document.getElementById(dataListId).innerHTML = str;
                window.menuClose();
                userPurposeFilterType.value="";
              }else{
                document.getElementById(dataListId).innerHTML = window.notFoundData("Filtreye uygun sonuç bulunamadı.");
              }              
      
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
        
        let userPurposeRemoveButton = document.querySelector("#userPurposeRemoveButton");
        if (userPurposeRemoveButton) {
          userPurposeRemoveButton.addEventListener("click", armondo => {
            if(!dataPurpose){
              window.notify(false,"Bir sorun var gibi.");
              return;
            }
            function onConfirm(val) {
              if(val==1){
                window.loader();
                cordova.plugin.http.delete(window.api+controller+dataPurpose.id, {}, { Authorization: 'Bearer '+window.getToken() }, function(response) {
                  window.loader(false);
                  try {
                    response.data = JSON.parse(response.data);
                    window.menuClose();
                              
                    dataCount = dataCount-1;
                    
                    window.setStorage("totalPurposes",dataCount);
                    window.userPurposesCount();
                        
                    if(dataCount>0){
                      document.querySelector("[data-id='"+response.data.id+"']").outerHTML = "";
                    }else{
                      document.getElementById(dataListId).innerHTML = window.notFoundData("Henüz hedef girmediniz.");
                    }
          
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
              'Notu Sil', // message
              onConfirm,            // callback to invoke with index of button pressed
              'Emin misiniz?',           // title
              ['Sil','Vazgeç']     // buttonLabels
            );
            
            
          });
        }
        ;
      }, 500);
    }

  }
  
  init();
});


