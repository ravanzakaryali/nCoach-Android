const controller = "usercontacts/";
const dataListId = "userContactList";
let dataCount = 0;
let dataContact = null;
function beforeStart(){
  console.log(window.loadingData);
  return document.getElementById(dataListId).innerHTML = window.loadingData;
}
function start(){
  
  document.getElementById("pageDataReload").classList.add("d-none");
  document.querySelector("[data-menu='menu-modal-search']").classList.remove("d-none");
  cordova.plugin.http.get(window.api+controller, {}, { Authorization: 'Bearer '+window.getToken() }, function(response) {
  // prints 200
    // alert(1);
    try {
      response.data = JSON.parse(response.data);
      dataCount = response.data.length;

      window.setStorage("totalContacts",dataCount);
      if(response.data.length){

        let str = response.data.reduce(function(str, data, index) {
        // let formName = element;
        // formName = formName.replace(/[^A-Za-z0-9]/g, '_').toLowerCase();

          let month = window.getValue(data.created_at,"getMonth");
          let day = window.getValue(data.created_at,"getDate");
          let year = window.getValue(data.created_at,"getYear");
          let color = window.getValue(data.color,"getColor");
          let nameFirstChar = window.getValue(data.name,"getNameFirstChar");
          let rating = window.getValue(data.rating,"getRating");
          // str = str + ``;
          if(index!=0){
            str = str + ``;
          }
          return str.concat(`<div class="row mb-0" onclick="javascript:getDetailData('${data.id}');" data-id="${data.id}">
            <div class="col-2">
              <span class="icon icon-contact rounded-xl ${color}"><i>${nameFirstChar}</i></span>
            </div>
            <div class="col-10 ps-0">
              <div class="d-flex">
                <div>
                  <p class="font-700 color-theme ps-2"><i class="fa fa-user opacity-50 me-1"></i> ${data.name}</p>
                </div>
                <div class="ms-auto">
                    <p class="font-400 font-11">${day + " " + month + " " + year}</p>
                </div>
              </div>
              <div class="d-flex">
                <div>
                  <p class="font-400 font-11 color-theme ps-2"><i class="fa fa-phone opacity-50 me-1"></i> ${data.phone}</p>
                </div>
                <div class="ms-auto">${rating}</div>
              </div>
            </div>
          </div>`);
        }, '');
        document.getElementById(dataListId).innerHTML = str;
      }else{
        document.getElementById(dataListId).innerHTML = window.notFoundData("Henüz kişi eklemediniz.");
      }
      window.userContactsCount();
      
      // window.reloadSlider();

    } catch(e) {
      window.notify(false,e);
    }
  }, function(response) {
    let res = JSON.parse(response.error);
    window.notify(false,res.message);
  });
}
function getDetailData(data){
  // return;
  window.loader();
  
  cordova.plugin.http.get(window.api+controller+data, {}, { Authorization: 'Bearer '+window.getToken() }, function(response) {
    window.loader(false);
    try {
      response.data = JSON.parse(response.data);
      dataContact = response.data;
      const userContactDetailIcon = document.getElementById("userContactDetailIcon");
      const userContactDetailDate = document.getElementById("userContactDetailDate");
      const userContactDetailRating = document.getElementById("userContactDetailRating");
      const userContactDetailName = document.getElementById("userContactDetailName");
      const userContactDetailEmail = document.getElementById("userContactDetailEmail");
      const userContactDetailPhone = document.getElementById("userContactDetailPhone");
      const userContactDetailDescription = document.getElementById("userContactDetailDescription");
      let month = window.getValue(response.data.created_at,"getMonth");
      let day = window.getValue(response.data.created_at,"getDate");
      let year = window.getValue(response.data.created_at,"getYear");
      let color = window.getValue(response.data.color,"getColor");
      let nameFirstChar = window.getValue(response.data.name,"getNameFirstChar");
      userContactDetailIcon.classList.remove('bg-orange-dark', 'bg-green-dark', 'bg-mint-dark', 'bg-yellow-dark' ,'bg-red-dark');

      userContactDetailName.innerText = response.data.name;
      userContactDetailEmail.innerText = response.data.email;
      userContactDetailPhone.innerText = response.data.phone;
      userContactDetailDescription.innerText = response.data.description || "";
      userContactDetailDate.innerText = day + " " + month + " " + year;
      userContactDetailRating.innerHTML = window.getValue(response.data.rating,"getRating");
      userContactDetailIcon.classList.add(color);
      userContactDetailIcon.innerHTML = `<i>${nameFirstChar}</i>`;
      
      window.modalOpen("menu-modal-detail");
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
      // console.log(device);
      start();

      setTimeout(() => {

        let pageDataReload = document.querySelector("#pageDataReload");
        if (pageDataReload) {
          pageDataReload.addEventListener("click", armondo => {
            beforeStart();
            start();
          })
        }
        let newContact = window.getStorage("newContact");
        if (newContact) {
            window.modalOpen("menu-new-contact-modal");
            window.destroyStorage("newContact");
        }
        
        let userContactAddButton1 = document.querySelector("#userContactAddButton1");
        if (userContactAddButton1) {
          
          userContactAddButton1.addEventListener("click", armondo => {
            
            const userContactAddName = document.getElementById("userContactAddName");
            const userContactAddEmail = document.getElementById("userContactAddEmail");
            const userContactAddPhone = document.getElementById("userContactAddPhone");
            
            if(userContactAddName.value=='' || userContactAddPhone.value==''){
              window.loader(false);
              window.notify(false,window.langs.eksikalanbirakmayin);
              return;
            }
            if(userContactAddEmail.value!=''){
              if(!validateEmail(userContactAddEmail.value)){
                window.loader(false);
                window.notify(false,"Email adresi uygun formatta değil");
                return;
              }
            }

            let contactAddRating = document.getElementsByName("contactAddRating");
            contactAddRating.forEach(function (element) {
                element.checked = false
            });
            window.modalOpen("menu-modal-add-2");
          })
        }
          
        let userContactAddButton2 = document.querySelector("#userContactAddButton2");
        if (userContactAddButton2) {
          userContactAddButton2.addEventListener("click", armondo => {
            const userContactAddRating = document.querySelector('input[name="contactAddRating"]:checked');

            if(!userContactAddRating){
              window.notify(false,"Lütfen yakınlık derecesi seçin");
              return;
            }
            let contactAddColor = document.getElementsByName("contactAddColor");
            contactAddColor.forEach(function (element) {
                element.checked = false
            });
            document.getElementById("previewAddContact").innerHTML = "";
            window.modalOpen("menu-modal-add-3");
          })
        }
        
        let userContactAddButton3 = document.querySelector("#userContactAddButton3");
        if (userContactAddButton3) {
            userContactAddButton3.addEventListener("click", armondo => {
            const userContactAddName = document.getElementById("userContactAddName");
            const userContactAddEmail = document.getElementById("userContactAddEmail");
            const userContactAddPhone = document.getElementById("userContactAddPhone");
            const userContactAddDescription = document.getElementById("userContactAddDescription");
            
            const userContactAddRating = document.querySelector('input[name="contactAddRating"]:checked');
            const userContactAddColor = document.querySelector('input[name="contactAddColor"]:checked');

            if(!userContactAddColor){
              window.notify(false,"Lütfen müşteri potansiyelini seçin");
              return;
            }
            
            beforeStart();
            
            window.loader();
            cordova.plugin.http.post(window.api+controller, {
              name: userContactAddName.value,
              email: userContactAddEmail.value,
              phone: userContactAddPhone.value,
              description: userContactAddDescription.value,
              rating: userContactAddRating.value,
              color: userContactAddColor.value
            }, { Authorization: 'Bearer '+window.getToken() }, function(response) {
            // prints 200
              // alert(1);
              window.loader(false);
              try {
                response.data = JSON.parse(response.data);
                
                if(response.data.length){

                  let str = response.data.reduce(function(str, data, index) {
                  // let formName = element;
                  // formName = formName.replace(/[^A-Za-z0-9]/g, '_').toLowerCase();
                  // console.log(element);
                    // if(index!=0){
                    //   str = str + `<div class="divider mt-3 mb-3"></div>`;
                    // }

                    let month = window.getValue(data.created_at,"getMonth");
                    let day = window.getValue(data.created_at,"getDate");
                    let year = window.getValue(data.created_at,"getYear");
                    let color = window.getValue(data.color,"getColor");
                    let nameFirstChar = window.getValue(data.name,"getNameFirstChar");
                    let rating = window.getValue(data.rating,"getRating");

                    return str.concat(`<div class="row mb-0" onclick="javascript:getDetailData('${data.id}');" data-id="${data.id}">
                      <div class="col-2">
                        <span class="icon icon-contact rounded-xl ${color}"><i>${nameFirstChar}</i></span>
                      </div>
                      <div class="col-10 ps-0">
                        <div class="d-flex">
                          <div>
                            <p class="font-700 color-theme ps-2"><i class="fa fa-user opacity-50 me-1"></i> ${data.name}</p>
                          </div>
                          <div class="ms-auto">
                              <p class="font-400 font-11">${day + " " + month + " " + year}</p>
                          </div>
                        </div>
                        <div class="d-flex">
                          <div>
                            <p class="font-400 font-11 color-theme ps-2"><i class="fa fa-phone opacity-50 me-1"></i> ${data.phone}</p>
                          </div>
                          <div class="ms-auto">${rating}</div>
                        </div>
                      </div>
                    </div>`);
                  }, '');
                  document.getElementById(dataListId).innerHTML = str;
                }else{
                  document.getElementById(dataListId).innerHTML = window.notFoundData("Henüz kişi eklemediniz.");
                }
                
                // if(dataCount>0){
                
                //   document.getElementById(dataListId).innerHTML = str + document.getElementById(dataListId).innerHTML;
                // }else{
                // }
                
                // document.getElementById(dataListId).innerHTML = "";
                // window.reloadSlider();

                dataCount = dataCount+1;
                
                window.setStorage("totalContacts",dataCount);
                window.userContactsCount();

                window.menuClose();
                userContactAddName.value="";
                userContactAddEmail.value="";
                userContactAddPhone.value="";
                userContactAddDescription.value="";
                
                let contactAddColor = document.getElementsByName("contactAddColor");
                contactAddColor.forEach(function (element) {
                    element.checked = false
                });
                let contactAddRating = document.getElementsByName("contactAddRating");
                contactAddRating.forEach(function (element) {
                    element.checked = false
                });
                
                window.notify(true,"Kişi listenize başarıyla eklediniz");
                // window.modalOpen("menu-modal-add-4");
      
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

        const colorToAction = document.querySelectorAll('input[name="contactAddColor"]');
        if (colorToAction) {
          colorToAction.forEach(radio => {
            radio.addEventListener('click', function () {
              
              document.getElementById("previewAddContact").classList.remove("active");
              const userContactAddName = document.getElementById("userContactAddName");
              const userContactAddRating = document.querySelector('input[name="contactAddRating"]:checked');
              const userContactAddPhone = document.getElementById("userContactAddPhone");

              let color = window.getValue(radio.value,"getColor");
              // userContactDetailIcon.classList.remove('bg-orange-dark', 'bg-green-dark', 'bg-mint-dark', 'bg-yellow-dark' ,'bg-red-dark');

              let nameFirstChar = window.getValue(userContactAddName.value,"getNameFirstChar");
              let rating = window.getValue(userContactAddRating.value,"getRating");

              let preview = `<div class="card card-style p-0 m-0"><div class="content mt-3"><h6>Kişi Önizlemesi</h6><div class="divider mb-2 mt-1"></div><div class="row mb-3">
                <div class="col-2"><span id="previewColor" class="icon icon-contact rounded-xl ${color}"><i>${nameFirstChar}</i></span></div>
                <div class="col-10 ps-3">
                  <div class="d-flex">
                    <div>
                      <p class="font-700 color-theme ps-2"><i class="fa fa-user opacity-50 me-1"></i> ${userContactAddName.value}</p>
                    </div>
                  </div>
                  <div class="d-flex">
                    <div>
                      <p class="font-400 font-11 color-theme ps-2"><i class="fa fa-phone opacity-50 me-1"></i> ${userContactAddPhone.value}</p>
                    </div>
                    <div class="ms-auto">${rating}</div>
                  </div>
                </div>
              </div></div></div>`;
              setTimeout(() => {
                  
                document.getElementById("previewAddContact").innerHTML = preview;
                document.getElementById("previewAddContact").classList.add("active");
              }, 250);
            });
          });
        };
        
        let userContactSearchButton = document.querySelector("#userContactSearchButton");
        if (userContactSearchButton) {
          userContactSearchButton.addEventListener("click", armondo => {
            window.loader();
            const userContactSearchText = document.getElementById("userContactSearchText");
            
            if(userContactSearchText.value==''){
              window.loader(false);
              window.notify(false,"Lütfen arama kelimesi girin");
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
                
                document.getElementById("pageDataReload").classList.remove("d-none");
                document.querySelector("[data-menu='menu-modal-search']").classList.add("d-none");
                if(response.data.length){

                  let str = response.data.reduce(function(str, data, index) {
                  // let formName = element;
                  // formName = formName.replace(/[^A-Za-z0-9]/g, '_').toLowerCase();
                  // console.log(element);
                    // if(index!=0){
                    //   str = str + `<div class="divider mt-3 mb-3"></div>`;
                    // }

                    let month = window.getValue(data.created_at,"getMonth");
                    let day = window.getValue(data.created_at,"getDate");
                    let year = window.getValue(data.created_at,"getYear");
                    let color = window.getValue(data.color,"getColor");
                    let nameFirstChar = window.getValue(data.name,"getNameFirstChar");
                    let rating = window.getValue(data.rating,"getRating");

                    return str.concat(`<div class="row mb-0" onclick="javascript:getDetailData('${data.id}');" data-id="${data.id}">
                      <div class="col-2">
                        <span class="icon icon-contact rounded-xl ${color}"><i>${nameFirstChar}</i></span>
                      </div>
                      <div class="col-10 ps-0">
                        <div class="d-flex">
                          <div>
                            <p class="font-700 color-theme ps-2"><i class="fa fa-user opacity-50 me-1"></i> ${data.name}</p>
                          </div>
                          <div class="ms-auto">
                              <p class="font-400 font-11">${day + " " + month + " " + year}</p>
                          </div>
                        </div>
                        <div class="d-flex">
                          <div>
                            <p class="font-400 font-11 color-theme ps-2"><i class="fa fa-phone opacity-50 me-1"></i> ${data.phone}</p>
                          </div>
                          <div class="ms-auto">${rating}</div>
                        </div>
                      </div>
                    </div>`);
                  }, '');
                  document.getElementById(dataListId).innerHTML = str;
                }else{
                  document.getElementById(dataListId).innerHTML = window.notFoundData("Sonuç bulunamadı.");
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
        
        let userContactUpdateButton1 = document.querySelector("#userContactUpdateButton1");
        if (userContactUpdateButton1) {
          userContactUpdateButton1.addEventListener("click", armondo => {
            
            if(!dataContact){
              window.notify(false,"Bir sorun var gibi.");
              return;
            }
            const userContactEditName = document.getElementById("userContactEditName");
            const userContactEditEmail = document.getElementById("userContactEditEmail");
            const userContactEditPhone = document.getElementById("userContactEditPhone");
            
            if(userContactEditName.value=='' || userContactEditPhone.value==''){
              window.loader(false);
              window.notify(false,window.langs.eksikalanbirakmayin);
              return;
            }
            
            if(userContactEditEmail.value!=''){
              if(!validateEmail(userContactEditEmail.value)){
                window.loader(false);
                window.notify(false,"Email adresi uygun formatta değil");
                return;
              }
            }

            window.modalOpen("menu-modal-edit-2");
          });
        }
        ;
        
        let userContactUpdateButton2 = document.querySelector("#userContactUpdateButton2");
        if (userContactUpdateButton2) {
          userContactUpdateButton2.addEventListener("click", armondo => {
            
            if(!dataContact){
              window.notify(false,"Bir sorun var gibi.");
              return;
            }
            const userContactEditRating = document.querySelector('input[name="contactEditRating"]:checked');

            if(!userContactEditRating){
              window.notify(false,"Lütfen yakınlık derecesi seçin");
              return;
            }
            // document.getElementById("previewAddContact").innerHTML = "";
            window.modalOpen("menu-modal-edit-3");
          });
        }
        ;
        
        let userContactUpdateButton3 = document.querySelector("#userContactUpdateButton3");
        if (userContactUpdateButton3) {
          userContactUpdateButton3.addEventListener("click", armondo => {
            window.loader();
            const userContactEditName = document.getElementById("userContactEditName");
            const userContactEditEmail = document.getElementById("userContactEditEmail");
            const userContactEditPhone = document.getElementById("userContactEditPhone");
            const userContactEditDescription = document.getElementById("userContactEditDescription");
            const userContactEditRating = document.querySelector('input[name="contactEditRating"]:checked');          
            const userContactEditColor = document.querySelector('input[name="contactEditColor"]:checked');

            if(!userContactEditColor){
              window.notify(false,"Lütfen müşteri potansiyelini seçin");
              return;
            }
            
            cordova.plugin.http.put(window.api+controller+dataContact.id, {
              name: userContactEditName.value,
              email: userContactEditEmail.value,
              phone: userContactEditPhone.value,
              description: userContactEditDescription.value,
              rating: userContactEditRating.value,
              color: userContactEditColor.value
            }, { Authorization: 'Bearer '+window.getToken() }, function(response) {
            // prints 200
              // alert(1);
              window.loader(false);
              try {
                response.data = JSON.parse(response.data);
                          
                let str = [response.data].reduce(function(str, data) {
                  let month = window.getValue(data.created_at,"getMonth");
                  let day = window.getValue(data.created_at,"getDate");
                  let year = window.getValue(data.created_at,"getYear");
                  let color = window.getValue(data.color,"getColor");
                  let nameFirstChar = window.getValue(data.name,"getNameFirstChar");
                  let rating = window.getValue(data.rating,"getRating");

                  return str.concat(`<div class="row mb-0" onclick="javascript:getDetailData('${data.id}');" data-id="${data.id}">
                    <div class="col-2">
                      <span class="icon icon-contact rounded-xl ${color}"><i>${nameFirstChar}</i></span>
                    </div>
                    <div class="col-10 ps-0">
                      <div class="d-flex">
                        <div>
                          <p class="font-700 color-theme ps-2"><i class="fa fa-user opacity-50 me-1"></i> ${data.name}</p>
                        </div>
                        <div class="ms-auto">
                            <p class="font-400 font-11">${day + " " + month + " " + year}</p>
                        </div>
                      </div>
                      <div class="d-flex">
                        <div>
                          <p class="font-400 font-11 color-theme ps-2"><i class="fa fa-phone opacity-50 me-1"></i> ${data.phone}</p>
                        </div>
                        <div class="ms-auto">${rating}</div>
                      </div>
                    </div>
                  </div>`);
                }, '');
                document.querySelector("[data-id='"+response.data.id+"']").outerHTML = str;
                window.menuClose();
                userContactEditName.value="";
                userContactEditEmail.value="";
                userContactEditPhone.value="";
                userContactEditDescription.value="";
                
                let contactEditColor = document.getElementsByName("contactEditColor");
                contactEditColor.forEach(function (element) {
                    element.checked = false
                });
                let contactEditRating = document.getElementsByName("contactEditRating");
                contactEditRating.forEach(function (element) {
                    element.checked = false
                });
                window.notify(true,"Kişi Başarıyla Düzenlendi.");
      
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

        let userContactEditButton = document.querySelector("#userContactEditButton");
        if (userContactEditButton) {
          
          
          userContactEditButton.addEventListener("click", armondo => {
            
            if(!dataContact){
              window.notify(false,"Bir sorun var gibi.");
              return;
            }

            let userContactEditName = document.getElementById("userContactEditName");
            let userContactEditEmail = document.getElementById("userContactEditEmail");
            let userContactEditPhone = document.getElementById("userContactEditPhone");
            let userContactEditDescription = document.getElementById("userContactEditDescription");
            let contactEditRating = document.getElementsByName("contactEditRating");
            let contactEditColor = document.getElementsByName("contactEditColor");
            
            userContactEditName.value = dataContact.name;
            userContactEditEmail.value = dataContact.email;
            userContactEditPhone.value = dataContact.phone;
            userContactEditDescription.value = dataContact.description;
            
            contactEditRating.forEach(function (element) {
              if(element.value==dataContact.rating){ element.checked = true; }
            });
            contactEditColor.forEach(function (element) {
              if(element.value==dataContact.color){ element.checked = true; }
            });

            window.modalOpen("menu-modal-edit-1");
            
          });
        }
        ;
        
        let userContactRemoveButton = document.querySelector("#userContactRemoveButton");
        if (userContactRemoveButton) {
          userContactRemoveButton.addEventListener("click", armondo => {
            
            if(!dataContact){
              window.notify(false,window.langs.birsorunolustu);
              return;
            }
                    
            function onConfirm(val) {
              if(val==1){
                
                window.loader();
                cordova.plugin.http.delete(window.api+controller+dataContact.id, {}, { Authorization: 'Bearer '+window.getToken() }, function(response) {
                  window.loader(false);
                  try {
                    response.data = JSON.parse(response.data);
      
                    dataCount = dataCount-1;
                    
                    if(dataCount>0){
                      document.querySelector("[data-id='"+response.data.id+"']").outerHTML = "";
                    }else{
                      document.getElementById(dataListId).innerHTML = window.notFoundData("Henüz not kaydetmediniz.");
                    }
                                  
                    window.setStorage("totalContacts",dataCount);
                    window.userContactsCount();
                    window.menuClose();
          
                  } catch(e) {
                    window.notify(false,window.langs.birsorunolustu);
                  }
                }, function(response) {
                  window.loader(false);
                  let res = JSON.parse(response.error);
                  window.notify(false,res.message);
                });
              }
            }
            navigator.notification.confirm(
              'Kişiyi Sil', // message
              onConfirm,            // callback to invoke with index of button pressed
              'Emin misiniz?',           // title
              ['Sil','Vazgeç']     // buttonLabels
            );
            
            
          });
        }
        ;

        let userContactCallButton = document.querySelector("#userContactCallButton");
        if (userContactCallButton) {
          userContactCallButton.addEventListener("click", armondo => {

            window.loader();
            const userContactDetailPhone = document.getElementById("userContactDetailPhone");
            
            if(!userContactDetailPhone.innerText){
              window.loader(false);
              window.notify(false,window.langs.birsorunolustu);
              return;
            }
            window.loader(false);
            window.menuClose();
            cordova.plugins.phonedialer.call(  
              userContactDetailPhone.innerText, 
              function(success) {  }, 
              function(err) {
                // if (err == "empty")

                // else 
                // alert("Dialer Error:" + err);    
              }
            );
            // window.location.href = 'tel:'+userContactDetailPhone.innerText;
            
          });
        }
        ;

        let userContactFilterButton = document.querySelector("#userContactFilterButton");
        if (userContactFilterButton) {
          userContactFilterButton.addEventListener("click", armondo => {
            window.loader();
            const userContactFilterType = document.getElementById("userContactFilterType");
            
            if(userContactFilterType.value==''){
              window.loader(false);
              window.notify(false,"Lütfen Kriter Seçin");
              return;
            }
            cordova.plugin.http.get(window.api+controller+"filter", { 
              type: userContactFilterType.value
            }, { Authorization: 'Bearer '+window.getToken() }, function(response) {
            // prints 200
              // alert(1);
              window.loader(false);
              try {
                response.data = JSON.parse(response.data);
                if(response.data.length){
                  dataCount = response.data.length;

                  let str = response.data.reduce(function(str, data) {
                    
                    let month = window.getValue(data.created_at,"getMonth");
                    let day = window.getValue(data.created_at,"getDate");
                    let year = window.getValue(data.created_at,"getYear");
                    let color = window.getValue(data.color,"getColor");
                    let nameFirstChar = window.getValue(data.name,"getNameFirstChar");
                    let rating = window.getValue(data.rating,"getRating");
                    // str = str + ``;
                    return str.concat(`<div class="row mb-0" onclick="javascript:getDetailData('${data.id}');" data-id="${data.id}">
                      <div class="col-2">
                        <span class="icon icon-contact rounded-xl ${color}"><i>${nameFirstChar}</i></span>
                      </div>
                      <div class="col-10 ps-0">
                        <div class="d-flex">
                          <div>
                            <p class="font-700 color-theme ps-2"><i class="fa fa-user opacity-50 me-1"></i> ${data.name}</p>
                          </div>
                          <div class="ms-auto">
                              <p class="font-400 font-11">${day + " " + month + " " + year}</p>
                          </div>
                        </div>
                        <div class="d-flex">
                          <div>
                            <p class="font-400 font-11 color-theme ps-2"><i class="fa fa-phone opacity-50 me-1"></i> ${data.phone}</p>
                          </div>
                          <div class="ms-auto">${rating}</div>
                        </div>
                      </div>
                    </div>`);
                  }, '');
                  document.getElementById(dataListId).innerHTML = str;
                  window.menuClose();
                  userContactFilterType.value="";
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
      }, 500);
    }

  }
  
  init();
  
});