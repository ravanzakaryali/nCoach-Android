const controller = "userearnings/";
const dataListId = "earningList";
const receiptListId = "userReceiptList";
let userDetail = null;
let dataEarnings = null;
let filterType = "global";
let listType = "most";
let filterTitle = "Global"
let listTitle = "En Çok Kazanan"
let earningTitle = ""
document.getElementById("earningTitle").innerText = "Yükleniyor.."
let year = null;
let month = null;
let lastyear = null;
let lastmonth = null;

function setFilterType(val){
  if(filterType!=val){
    filterType = val;
    
    let attributes = document.querySelectorAll("#setFilterType a");
    attributes.forEach(a => {
      a.classList.remove("active");
    });
    let index = null;
    if(filterType=="global"){
      filterTitle = "Global";
      index = 0;
    }else if(filterType=="incountry"){
      filterTitle = "Ülke";
      index = 1;
    }else if(filterType=="inteam"){
      filterTitle = "Takım";
      index = 3;
    }else if(filterType=="incompany"){
      filterTitle = "Şirket";
      index = 2;
    }
    attributes[index].classList.add("active");
    setTitle(listTitle,filterTitle)
    return filterList();
  }
}
function setListType(val){
  if(listType!=val){
    listType = val;
    let attributes = document.querySelectorAll("#setListType a");
    attributes.forEach(a => {
      a.classList.remove("active");
    });
    if(listType=="most"){
      listTitle = "En Çok Kazanan";
      index = 0;
    }else if(listType=="percentile"){
      listTitle = "Oransal Olarak En Çok Büyüyen";
      index = 1;
    }else if(listType=="numeral"){
      listTitle = "Sayısal Olarak En Çok Büyüyen";
      index = 2;
    }
    attributes[index].classList.add("active");
    setTitle(listTitle,filterTitle)
    return filterList();
  }
}

function setTitle(listTitle,filterTitle){
  
  if(listType=="most"){
    filterTitle = filterTitle+formatDate("last");
  }else if(listType=="percentile"){
    filterTitle = filterTitle+formatDate("this");
  }else if(listType=="numeral"){
    filterTitle = filterTitle+formatDate("this");
  }
  earningTitle = listTitle + " <br><small><span class='font-500 opacity-50'>("+filterTitle+")</span></small>";
  return document.getElementById("earningTitle").innerHTML = earningTitle;
}
function formatDate(val = "this"){
  var monthNames = [
    "Ocak", "Şubat", "Mart",
    "Nisan", "Mayıs", "Haziran", "Temmuz",
    "Ağustos", "Eylül", "Ekim",
    "Kasım", "Aralık"
  ];
  // var date = new Date();
  // var day = date.getDate();
  var monthIndex = null;
  var result = null;
  if(val=="last"){
    monthIndex = lastmonth;
    result = lastyear;
  }
  if(val=="this"){
    monthIndex = month;
    result = year;
  }
  return ` - ${monthNames[monthIndex-1]} ${result}`;
}

function filterList(){
  window.loader();
  document.getElementById(dataListId).innerHTML = window.loadingData;
  cordova.plugin.http.get(window.api+controller+"filter", {
    filter_type : filterType,
    list_type : listType
  }, { Authorization: 'Bearer '+window.getToken() }, function(response) {
    // prints 200
    // alert(1);
    try {
      response.data = JSON.parse(response.data);
      dataEarnings = response.data;

      if(dataEarnings.length){
        dataCount = dataEarnings.length;
        let str = createStr(dataEarnings);
        document.getElementById(dataListId).innerHTML = str;
        new LazyLoad();
            
      }else{
        document.getElementById(dataListId).innerHTML = window.notFoundData("");
      }

    } catch(e) {
      window.notify(false,e);
    }
    window.loader(false);
  }, function(response) {
    window.loader(false);
    let res = JSON.parse(response.error);
    window.notify(false,res.message);
  });
}
function beforeStart(){
  document.getElementById(receiptListId).innerHTML = window.loadingData;
  return document.getElementById(dataListId).innerHTML = window.loadingData;
}
function createStr(list){
  let link = window.server+"avatars/";
  let val = "";
  return list.reduce(function(str, data, index) {
    // let formName = element;
    // formName = formName.replace(/[^A-Za-z0-9]/g, '_').toLowerCase();
    // console.log(element);
    if(listType=="most"){
      val = window.money(data.amount)
    }else if(listType=="percentile"){
      val = "%"+data.percent;
    }else if(listType=="numeral"){
      val = data.count;
    }
    return str.concat(`<div class="row mb-0" onclick="javascript:getDetailData('${data.id}');" data-id="${data.id}">
    <a class="d-flex">
      <div class="align-self-center">
          <h2 class="font-14 font-700 color-theme me-2 ms-2">${parseInt(index+1)}</h2>
      </div>
      <div class="align-self-center">
          <img data-src="${window.getImage(data.image,link)}" src="images/empty.png" width="40" height="40" class="rounded-xl me-3 lazy">
      </div>
      <div class="align-self-center">
          <h1 class="mb-n2 font-14">${data.name}</h1>
          <p class="font-11 opacity-60">${data.company ? data.company:""}</p>
      </div>
      <div class="align-self-center ms-auto text-end">
          <h2 class="mb-n1 font-14 color-ncoach">${val}</h2>
      </div>
    </a></div>`);
    
    // <p class="font-11 opacity-50">${window.getValue(data.created_at,"getDayMonthYear")}</p>
    // return str.concat(`<div>
    //           <input type="checkbox" id="${formName}" name="cpg_services" value="${formName}" />
    //           <label for="${formName}">${element}</label>
    //         </div>`)
  }, '');
}
function start(){
  cordova.plugin.http.get(window.api+controller, {
      filter_type : filterType,
      list_type : listType
    }, { Authorization: 'Bearer '+window.getToken() }, function(response) {
    // prints 200
    // alert(1);
    try {
      response.data = JSON.parse(response.data);
      let receipts = response.data.receipts;
      let list = response.data.list;
      year = response.data.year;
      month = response.data.month;
      lastyear = response.data.lastyear;
      lastmonth = response.data.lastmonth;
      // console.log(response.data);
      dataEarnings = list;

      if(receipts.length){
        let str = receipts.reduce(function(str, data, index) {
          // let formName = element;
          // formName = formName.replace(/[^A-Za-z0-9]/g, '_').toLowerCase();
          // console.log(element);
          let color;
          let calc = index % 4;
          if(calc == 0){
            color = "blue";
          }else if(calc == 1){
            color = "green";
          }else if(calc == 2){
            color = "red";
          }else if(calc == 3){
            color = "yellow";
          }
          return str.concat(`<div class="splide__slide" data-id="${data.id}">
          <div data-card-height="160" class="card card-style shadow-xl mb-2">
              <div class="card-top p-3">
                  <h5 class="font-monospace opacity-70 font-10 mb-0 color-white">Aylık Kazanç</h5>
                  <h1 class="color-white font-36">$${data.amount}</h1>
              </div>
              <div class="card-bottom p-3">
                  <h5 class="font-monospace opacity-70 font-10 mb-n1 color-white">Onay Durumu</h5>
                  <h5 class="font-monospace font-14 color-white">${data.status ? "Doğrulandı":"Doğrulanmadı"}</h5>
              </div>
              <div class="card-top p-3">
                  <h5 class="text-end font-monospace opacity-70 font-10 mb-n1 color-white">Tarih
                  </h5>
                  <h5 class="text-end font-monospace font-14 color-white">${data.date_month}/${data.date_year}</h5>
              </div>
              <div class="card-overlay gradient-${color}"></div>
          </div>
      </div>`);
          // return str.concat(`<div>
          //           <input type="checkbox" id="${formName}" name="cpg_services" value="${formName}" />
          //           <label for="${formName}">${element}</label>
          //         </div>`)
        }, '');
        document.getElementById(receiptListId).innerHTML = `<div class="splide single-slider slider-no-arrows slider-no-dots visible-slider" id="single-slider-1">
        <div class="splide__track">
            <div class="splide__list">`+str+`</div></div></div>`;
        window.reloadSlider(true);
        window.cardResize();
      }else{
        document.getElementById(receiptListId).innerHTML = window.notFoundData("Daha önce kazanç eklenmemiş.");
      }
      if(list.length){
        dataCount = list.length;
        let str = createStr(list);
        document.getElementById(dataListId).innerHTML = str;
        new LazyLoad();
            
      }else{
        document.getElementById(dataListId).innerHTML = window.notFoundData("");
      }

    } catch(e) {
      window.notify(false,e);
    }
    window.loader(false);
  }, function(response) {
    window.loader(false);
    let res = JSON.parse(response.error);
    window.notify(false,res.message);
  });
}
function getDetailData(data){
  // window.loader();
  userDetail = dataEarnings.filter(item => item.id === data)[0];
  // console.log(userDetail);
  let link = window.server+"avatars/";
  let str = `<div class="row mb-0" test-id="${userDetail.id}">      
      <div class="col-4"><img src="${window.getImage(userDetail.image,link)}" width="100%" class="rounded-xl"></div>
      <div class="col-8 ps-2 mt-2">
          <div class="d-flex"><div><p>İsim</p></div><div class="ms-auto"><p class="font-700 color-theme">${userDetail.name}</p></div></div>
          <div class="d-flex"><div><p>Şirket</p></div><div class="ms-auto"><p class="font-700 color-theme">${userDetail.company}</p></div></div>
          <div class="d-flex"><div><p >Kariyer</p></div><div class="ms-auto"><p class="font-700 color-theme">${userDetail.career}</p></div></div>
      </div>
    </div>
    <div class="divider mt-3 mb-3"></div>
    <div class="row mb-0">
      <div class="col-6"><h4 class="font-13 mt-1 opacity-70">${formatDate("last").replace("-","")} Kazancı</h4></div>
      <div class="col-6"><h4 class="font-13 text-end mt-1 color-ncoach">${window.money(userDetail.amount)}</h4></div>
      <div class="divider w-100 mt-2 mb-2"></div>
      <div class="col-6"><h4 class="font-13 mt-1 opacity-70">Toplam Kazanç</h4></div>
      <div class="col-6"><h4 class="font-15 text-end mt-1 color-ncoach">${window.money(userDetail.total_amount)}</h4></div>
      <div class="divider w-100 mt-2 mb-2"></div>
      <div class="col-3"><h4 class="font-13 mt-1 opacity-70">Email</h4></div>
      <div class="col-9"><h4 class="font-13 text-end mt-1">${window.toEmailRegex(userDetail.email)}</h4></div>
      <div class="divider w-100 mt-2 mb-2"></div>
      <div class="col-12">
        <a onclick="window.menuClose();" class="close-menu btn btn-full btn-m bg-fade-blue-light rounded-sm text-uppercase font-700 mb-3">Kapat</a>
      </div>
    </div>`;
    // <div class="col-3"><h4 class="font-13 mt-1 opacity-70">Statü</h4></div>
    //   <div class="col-9"><h4 class="font-13 text-end mt-1 color-${userDetail.verify ? "green-dark":"red-dark"}">${userDetail.verify ? "Onaylanmış":"Onay Bekliyor"}</h4></div>
      // <div class="divider w-100 mt-2 mb-3"></div>
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

document.addEventListener("DOMContentLoaded", () => {
  ("use strict");
  
  document.addEventListener("loadend", loadend, false);
  function loadend() {
    console.log("yükleem bitti");
  }
  
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
        setTitle(listTitle,filterTitle);
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
        $(function() {
          $(".select2").select2();
        });
        
        var userEarningAddTime = document.getElementById('userEarningAddTime');
        let years = [];
        let months = [
          {ad:"Ocak",sayi:"01"},
          {ad:"Şubat",sayi:"02"},
          {ad:"Mart",sayi:"03"},
          {ad:"Nisan",sayi:"04"},
          {ad:"Mayıs",sayi:"05"},
          {ad:"Haziran",sayi:"06"},
          {ad:"Temmuz",sayi:"07"},
          {ad:"Ağustos",sayi:"08"},
          {ad:"Eylül",sayi:"09"},
          {ad:"Ekim",sayi:"10"},
          {ad:"Kasım",sayi:"11"},
          {ad:"Aralık",sayi:"12"}
        ];
        let ayyil = [];
        for(var i = 2020; i <= year; i++) {
          // years.push(i);
          for (let index = 0; index < months.length; index++) {
            const element = months[index];
            if(year != i){
              // console.log(element,i)
              var opt = document.createElement('option');
              opt.innerHTML = element.ad+" "+i;
              opt.value = i+"-"+element.sayi;
              userEarningAddTime.appendChild(opt);
            }
            if(((index+1) <= month) && year == i){
              // console.log(element,i)
              var opt = document.createElement('option');
              opt.innerHTML = element.ad+" "+i;
              opt.value = i+"-"+element.sayi;
              userEarningAddTime.appendChild(opt);
            }
            
          }
        }
        $('#userEarningAddTime').val(year+"-"+month).trigger('change');
        // for (let index = 0; index < years.length; index++) {
        //   const element = years[index];
        //   console.log(element)
        //   // ayyil.push()
        // }
        // for(var i = 0; i < countries.length; i++) {
        //   var opt = document.createElement('option');
        //   opt.innerHTML = countries[i]['name'];
        //   opt.value = countries[i]['id'];
        //   userEarningAdd.appendChild(opt);
        // }


        // userEarningAddTime.setAttribute("min", new Date().toISOString().split("T")[0]);
        // let year = new Date().toLocaleString().split(" ")[0].split(".")[2];
        // let month = new Date().toLocaleString().split(" ")[0].split(".")[1];
        // userEarningAddTime.setAttribute("max", new Date().toISOString().split("T")[0]);
        // userEarningAddTime.setAttribute("value", new Date().toISOString().split("T")[0]);
        

        // var userEarningAddTime = document.getElementById('userEarningAddTime');
        // userEarningAddTime.setAttribute("min", "2020-01");
        // userEarningAddTime.setAttribute("max", `${year}-${month}`);
        // userEarningAddTime.setAttribute("value", `${year}-${month}`);
        // alert(year);
        // alert(month);
        
        let userEarningAddButton = document.querySelector("#userEarningAddButton");
        if (userEarningAddButton) {
          userEarningAddButton.addEventListener("click", armondo => {
            if(!document.getElementById("userEarningCheck").checked){
              window.notify(false,"Lütfen bilgilerin doğruluğunu onaylayın");
              return;
            }
            const userEarningAddDesc = document.getElementById('userEarningAddDesc');
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

            // var receipt = document.getElementById("upload-file-receipt");
            // if(userEarningAddAmount.value >= 5000){
            //   if(receipt.value!=''){
            //     formData.append('receipt', receipt.files[0]);
            //   }else{
            //     window.notify(false,"Lütfen dekont seçiniz.");
            //     return;
            //   }
            // }
            var virtual_office = document.getElementById("upload-file-virtual-office");
            if(userEarningAddAmount.value >= 5000){
              if(virtual_office.value!=''){
                formData.append('virtual_office', virtual_office.files[0]);
              }else{
                window.notify(false,"Lütfen Sanal Ofis seçiniz.");
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
                console.log(response.data);
                let id = response.data.data.id;
                let message = response.data.message;
                // console.log(window.api+controller+id);
                cordova.plugin.http.setDataSerializer("json");
                cordova.plugin.http.put(window.api+controller+id, {
                  description: userEarningAddDesc.value
                }, { Authorization: 'Bearer '+window.getToken() }, function(response) {
                // prints 200
                  // alert(1);
                  window.loader(false);
                  try {
                    response.data = JSON.parse(response.data);
                    window.notify(true,message);
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

                beforeStart();
                start();
                // image = response.data.image;
                
                userEarningAddAmount.value = "";
                userEarningAddTime.value = "";
                let userEarningAddReceipt = document.getElementById("userEarningAddReceipt");
                userEarningAddReceipt.classList.remove("active");
                document.getElementById("userEarningCheck").checked = false;
                // receipt.value = null;
                virtual_office.value = null;
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
            // cordova.plugin.http.setDataSerializer("json");

            
          });
        }
        ;
        
      }, 500);
    }

  }
  
  init();
});


