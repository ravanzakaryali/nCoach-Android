const controller = "usernotes/";
const dataListId = "userNoteList";
let dataCount = 0;
function beforeStart(){
  return document.getElementById(dataListId).innerHTML = window.loadingData;
}
function start(){
  
  cordova.plugin.http.get(window.api+controller, {}, { Authorization: 'Bearer '+window.getToken() }, function(response) {
    // prints 200
      // alert(1);
    try {
      response.data = JSON.parse(response.data);
      if(response.data.length){
        dataCount = response.data.length;
        let str = response.data.reduce(function(str, data) {
          // let formName = element;
          // formName = formName.replace(/[^A-Za-z0-9]/g, '_').toLowerCase();
          // console.log(element);
          return str.concat(`<div class="row mb-0" data-id="${data.id}" onclick="javascript:getDetailData('${data.id}');">
          <div class="d-flex">
              <div class="align-self-top">
                  <div class="bg-white rounded-sm color-theme shadow-xl text-center me-4 overflow-hidden">
                      <a data-menu="menu-event-sample">
                          <span class="bg-red-dark font-10 d-block mb-2 px-3 line-height-xs py-1">
                          ${window.getValue(data.created_at,"getMonth")}</span>
                          <span class="font-23 font-600 d-block mb-n3 line-height-s ">${window.getValue(data.created_at,"getDate")}</span><br>
                      </a>
                  </div>
              </div>
              <div class="align-self-center">
                  <a data-menu="menu-event-sample">
                      <h5 class="mb-0 pt-1">${data.title}</h5>
                      <p class="mb-1">
                      ${data.note || "&nbsp;"}
                      </p>
                  </a>
              </div>
          </div></div>`);
          // return str.concat(`<div>
          //           <input type="checkbox" id="${formName}" name="cpg_services" value="${formName}" />
          //           <label for="${formName}">${element}</label>
          //         </div>`)
        }, '');
        document.getElementById(dataListId).innerHTML = str;
      }else{
        document.getElementById(dataListId).innerHTML = window.notFoundData("Henüz not kaydetmediniz.");
      }
      
    } catch(e) {
      window.notify(false,window.langs.birsorunolustu);
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
      const userNoteDetailTitle = document.getElementById("userNoteDetailTitle");
      const userNoteDetailNote = document.getElementById("userNoteDetailNote");
      const userNoteId = document.getElementById("userNoteId");
      userNoteDetailTitle.value = response.data.title;
      userNoteDetailNote.value = response.data.note;
      userNoteId.value = response.data.id;
      window.modalOpen("menu-modal-note-detail");
    } catch(e) {
      window.notify(false,window.langs.birsorunolustu);
    }
  }, function(response) {
    window.loader(false);
    let res = JSON.parse(response.error);
    window.notify(false,res.message);
  });
  
}
// const observer = new MutationObserver( list => {
//   const evt = new CustomEvent('dom-changed', {detail: list});
//   document.body.dispatchEvent(evt)
// });
// observer.observe(document.body, {attributes: true, childList: true, subtree: true});

// document.body.addEventListener('dom-changed', e => console.log(e));

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


      // const noteTitle = document.getElementById("note-title").value;
      // const noteDetail = document.getElementById("note-detail").value;
      // const saveNoteBtn = document.getElementById("save-note");
      // const deleteNoteBtn = document.getElementById("delete-note");
              
      // saveNoteBtn.addEventListener("click",function(){
      
      // });

      // deleteNoteBtn.addEventListener("click",function(){

      // });
        
      setTimeout(() => {
        let userNoteAddButton = document.querySelector("#userNoteAddButton");
        if (userNoteAddButton) {
          console.log(userNoteAddButton);
          userNoteAddButton.addEventListener("click", armondo => {
            console.log(userNoteAddButton);
            window.loader();
            const userNoteAddTitle = document.getElementById("userNoteAddTitle");
            const userNoteAddNote = document.getElementById("userNoteAddNote");
            
            if(userNoteAddTitle.value==''){
              window.loader(false);
              window.notify(false,window.langs.eksikalanbirakmayin);
              return;
            }
            cordova.plugin.http.post(window.api+controller, {
              title: userNoteAddTitle.value,
              note: userNoteAddNote.value
            }, { Authorization: 'Bearer '+window.getToken() }, function(response) {
            // prints 200
              // alert(1);
              window.loader(false);
              try {
                response.data = JSON.parse(response.data);
                
                            
                let str = [response.data].reduce(function(str, data) {
                  return str.concat(`<div class="row mb-0" data-id="${data.id}" onclick="javascript:getDetailData('${data.id}');">
                  <div class="d-flex">
                      <div class="align-self-top">
                          <div class="bg-white rounded-sm color-theme shadow-xl text-center me-4 overflow-hidden">
                              <a data-menu="menu-event-sample">
                                  <span class="bg-red-dark font-10 d-block mb-2 px-3 line-height-xs py-1">
                                  ${window.getValue(data.created_at,"getMonth")}</span>
                                  <span class="font-23 font-600 d-block mb-n3 line-height-s ">${window.getValue(data.created_at,"getDate")}</span><br>
                              </a>
                          </div>
                      </div>
                      <div class="align-self-center">
                          <a data-menu="menu-event-sample">
                              <h5 class="mb-0 pt-1">${data.title}</h5>
                              <p class="mb-1">
                              ${data.note || "&nbsp;"}
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
                window.menuClose();
                userNoteAddTitle.value="";
                userNoteAddNote.value="";
      
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
        let userNoteSearchButton = document.querySelector("#userNoteSearchButton");
        if (userNoteSearchButton) {
          userNoteSearchButton.addEventListener("click", armondo => {
            window.loader();
            const userNoteSearchText = document.getElementById("userNoteSearchText");
            
            if(userNoteSearchText.value==''){
              window.loader(false);
              window.notify(false,window.langs.eksikalanbirakmayin);
              return;
            }
            cordova.plugin.http.get(window.api+controller+"search", {
              text: userNoteSearchText.value,
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
                    return str.concat(`<div class="row mb-0" data-id="${data.id}" onclick="javascript:getDetailData('${data.id}');">
                    <div class="d-flex">
                        <div class="align-self-top">
                            <div class="bg-white rounded-sm color-theme shadow-xl text-center me-4 overflow-hidden">
                                <a data-menu="menu-event-sample">
                                    <span class="bg-red-dark font-10 d-block mb-2 px-3 line-height-xs py-1">
                                    ${window.getValue(data.created_at,"getMonth")}</span>
                                    <span class="font-23 font-600 d-block mb-n3 line-height-s ">${window.getValue(data.created_at,"getDate")}</span><br>
                                </a>
                            </div>
                        </div>
                        <div class="align-self-center">
                            <a data-menu="menu-event-sample">
                                <h5 class="mb-0 pt-1">${data.title}</h5>
                                <p class="mb-1">
                                ${data.note || "&nbsp;"}
                                </p>
                            </a>
                        </div>
                    </div></div>`);
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
                userNoteSearchText.value="";
      
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
        
        let userNoteSaveButton = document.querySelector("#userNoteSaveButton");
        if (userNoteSaveButton) {
          userNoteSaveButton.addEventListener("click", armondo => {
            window.loader();
            const userNoteDetailTitle = document.getElementById("userNoteDetailTitle");
            const userNoteDetailNote = document.getElementById("userNoteDetailNote");
            const userNoteId = document.getElementById("userNoteId");
            
            if(!userNoteId.value){
              window.loader(false);
              window.notify(false,window.langs.birsorunolustu);
              return;
            }
            if(userNoteDetailTitle.value==''){
              window.loader(false);
              window.notify(false,window.langs.eksikalanbirakmayin);
              return;
            }
            cordova.plugin.http.put(window.api+controller+userNoteId.value, {
              title: userNoteDetailTitle.value,
              note: userNoteDetailNote.value
            }, { Authorization: 'Bearer '+window.getToken() }, function(response) {
            // prints 200
              // alert(1);
              window.loader(false);
              try {
                response.data = JSON.parse(response.data);

                let str = [response.data].reduce(function(str, data) {
                  return str.concat(`<div class="row mb-0" data-id="${data.id}" onclick="javascript:getDetailData('${data.id}');">
                  <div class="d-flex">
                      <div class="align-self-top">
                          <div class="bg-white rounded-sm color-theme shadow-xl text-center me-4 overflow-hidden">
                              <a data-menu="menu-event-sample">
                                  <span class="bg-red-dark font-10 d-block mb-2 px-3 line-height-xs py-1">
                                  ${window.getValue(data.created_at,"getMonth")}</span>
                                  <span class="font-23 font-600 d-block mb-n3 line-height-s ">${window.getValue(data.created_at,"getDate")}</span><br>
                              </a>
                          </div>
                      </div>
                      <div class="align-self-center">
                          <a data-menu="menu-event-sample">
                              <h5 class="mb-0 pt-1">${data.title}</h5>
                              <p class="mb-1">
                              ${data.note}
                              </p>
                          </a>
                      </div>
                  </div></div>`);
                }, '');
                document.querySelector("[data-id='"+response.data.id+"']").outerHTML = str;
                window.menuClose();
                userNoteDetailNote.value="";
                userNoteDetailNote.value="";
                userNoteId.value="";
      
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
        
        let userNoteRemoveButton = document.querySelector("#userNoteRemoveButton");
        if (userNoteRemoveButton) {
          userNoteRemoveButton.addEventListener("click", armondo => {
            window.loader();
            const userNoteId = document.getElementById("userNoteId");
            
            if(!userNoteId.value){
              window.loader(false);
              window.notify(false,window.langs.birsorunolustu);
              return;
            }
            cordova.plugin.http.delete(window.api+controller+userNoteId.value, {}, { Authorization: 'Bearer '+window.getToken() }, function(response) {
              window.loader(false);
              try {
                response.data = JSON.parse(response.data);
                dataCount = dataCount-1;
                
                if(dataCount>0){
                  document.querySelector("[data-id='"+response.data.id+"']").outerHTML = "";
                }else{
                  document.getElementById(dataListId).innerHTML = window.notFoundData("Henüz not kaydetmediniz.");
                }
                
                window.menuClose();
                userNoteDetailNote.value="";
                userNoteDetailNote.value="";
                userNoteId.value="";
      
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

  }
  
  init();
});


