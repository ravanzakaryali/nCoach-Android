const controller = "userteams/genealogy/";
const genealogyListId = "genealogy-list";
let genealogyDataList = null;
let selectedParentId = null;
let selectedUserId = null;
let newUserList = null;

function beforeSearch(){
  document.getElementById("userList").innerHTML = window.loadingData;
}
function beforeStart(){
  document.getElementById(genealogyListId).innerHTML = window.loadingData;
}
function newUserBlock(id){
    let html = `
    <li class="newUserBlock">
        <a href="javascript:newUser('${id}');">
            <div class="member-view-box add-user">
                
                <div class="icon-ncoach icon-s">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <rect x="0" y="0" width="24" height="24"></rect>
                            <circle fill="#000000" opacity="0.3" cx="12" cy="12" r="10"></circle>
                            <path d="M11,11 L11,7 C11,6.44771525 11.4477153,6 12,6 C12.5522847,6 13,6.44771525 13,7 L13,11 L17,11 C17.5522847,11 18,11.4477153 18,12 C18,12.5522847 17.5522847,13 17,13 L13,13 L13,17 C13,17.5522847 12.5522847,18 12,18 C11.4477153,18 11,17.5522847 11,17 L11,13 L7,13 C6.44771525,13 6,12.5522847 6,12 C6,11.4477153 6.44771525,11 7,11 L11,11 Z" fill="#000000"></path>
                        </g>
                    </svg>
                </div>
                <div class="member-details">
                    <h3>Yeni Kişi Ekle</h3>
                </div>

            </div>
        </a>
    </li>`;
    return html;
}
function userBlock(data){
    let link = window.server+"avatars/";
    let image = window.getImage(data.image,link);
    let html = `<li data-id="${data.id}">
        <a href="javascript:void(0);">
            <div class="member-view-box">
                <div class="member-image">
                    <img src="${image}" class="mx-auto shadow-xl rounded-circle over-card" alt="">
                    <div class="member-details">
                        <h3>${data.name}</h3>
                        
                        <div>
                          <span class="font-12 opacity-80 mb-0">${data.career ? data.career:""}</span>
                          <h2 class="mt-0 font-14 color-red-dark">${window.money(data.total_amount)}</h2>
                      </div>
                    </div>
                </div>
            </div>
        </a>
        <ul style="display:none;">${newUserBlock("'"+data.id+"'")}</ul>
    </li>`;
    
    return html;
}
function start(){
  let user = window.getUser();
  // return getList(user.id)
  document.querySelector(".genealogy-tree ul > li").dataset.id = user.id;
  document.querySelector(".genealogy-tree ul > li .member-details h2").innerText = window.money(user.total_amount);
  document.querySelector(".genealogy-tree ul > li .member-details span").innerText = user.career;
  
  window.loader();
  cordova.plugin.http.get(window.api+controller+user.id, {}, { Authorization: 'Bearer '+window.getToken() }, function(response) {
    // prints 200
    // alert(1);
    
    window.loader(false);
    try {
      response.data = JSON.parse(response.data);
      genealogyDataList = response.data;
      // console.log(genealogyDataList);
      document.getElementById(genealogyListId).classList.remove("empty");

      if(genealogyDataList.length){
        let str = genealogyDataList.reduce(function(str, data) {
          return str.concat(userBlock(data));
        }, '');
        
        str += newUserBlock(user.id);
        
        document.getElementById(genealogyListId).innerHTML = str;
        new LazyLoad();
        
      }else{
        let str = newUserBlock(user.id);
        document.getElementById(genealogyListId).innerHTML = str;
      }
      
      $(function () {
        $('.genealogy-tree ul').hide();
        $('.genealogy-tree>ul').show();
        $('.genealogy-tree ul.active').show();
        $( document ).on( "click", ".genealogy-tree li", function(e) {
        // $('.genealogy-tree li').live( "click", function() {
          var children = $(this).find('> ul');
          if (children.is(":visible")) {
            children.hide('fast').removeClass('active');
            setTimeout(() => {
              // children.html("");
            }, 250);
            // console.log($(this).data("id"));
          }else{
            // newUserBlock
            // console.log();
            if(!$(this).hasClass("newUserBlock")) getList($(this).data("id"));
            children.show('fast').addClass('active');
          }
          e.stopPropagation();
        });
        // $('.genealogy-tree li').on('click', function (e) {
        // });
      });

    } catch(e) {
      window.notify(false,e);
    }
  }, function(response) {
    let res = JSON.parse(response.error);
    window.notify(false,res.message);
  });
}
function getList(id){
  // let data = `
  //         ${userBlock()}
  //         ${newUserBlock('616161')}`;
  // document.getElementById(genealogyListId).innerHTML = data;
 
  let parent = document.querySelector("[data-id='"+id+"'] ul");
  parent.innerHTML = "";
  window.loader();
  cordova.plugin.http.get(window.api+controller+id, {}, { Authorization: 'Bearer '+window.getToken() }, function(response) {
    // prints 200
    // alert(1);
    try {
      response.data = JSON.parse(response.data);
      genealogyDataList = response.data;
      // console.log(genealogyDataList);

      let str = genealogyDataList.reduce(function(str, data) {
        return str.concat(userBlock(data));
      }, '');
      // var e = document.createElement('div');
      // e.innerHTML = str;
      
      // console.log(str);
      str += newUserBlock(id);
      parent.insertAdjacentHTML('beforeend', str);
      // parent.appendChild(str);
      
      new LazyLoad();
      window.loader(false);
      document.querySelector("[data-id='"+id+"'").scrollIntoView({ block: 'center', inline: 'center',  behavior: 'smooth' });
      
      
      // $(function () {
      //   $('.genealogy-tree ul').hide();
      //   $('.genealogy-tree>ul').show();
      //   $('.genealogy-tree ul.active').show();
      //   $('.genealogy-tree li').on('click', function (e) {
      //       var children = $(this).find('> ul');
      //       if (children.is(":visible")) children.hide('fast').removeClass('active');
      //       else children.show('fast').addClass('active');
      //       e.stopPropagation();
      //   });
      // });

    } catch(e) {
      window.notify(false,e);
    }
  }, function(response) {
    let res = JSON.parse(response.error);
    window.notify(false,res.message);
  });

  
}
function saveNewUser(id){
  window.loader();
  if(selectedParentId==null){
    console.log("boş");
    return false;
  }
  cordova.plugin.http.post(window.api+"userteams/setparent", {
    parent_id: selectedParentId,
    user_id: id
  }, { Authorization: 'Bearer '+window.getToken() }, function(response) {
    window.loader(false);
    try {
      response.data = JSON.parse(response.data);
      
      let parent = document.querySelector("[data-id='"+selectedParentId+"'] ul");
      // parent.innerHTML = "";
      
      let str = userBlock(response.data);

      // str += newUserBlock(response.data.id);
      document.querySelector("[data-id='"+selectedParentId+"'] > ul > li.newUserBlock").remove();
      parent.insertAdjacentHTML('beforeend', str);
      parent.insertAdjacentHTML('beforeend', newUserBlock(selectedParentId));
      //afterbegin

      window.menuClose();
      
      window.notify(true,"Başarıyla Eklendi");

      selectedParentId = null;
    } catch(e) {
      window.notify(false,e);
    }
  }, function(response) {
    let res = JSON.parse(response.error);
    window.notify(false,res.message);
    window.loader(false);
  });  
}

function newUser(id){
  selectedParentId = id;
  console.log(selectedParentId);
  window.loader();
  cordova.plugin.http.get(window.api+"userteams/notparent", {}, { Authorization: 'Bearer '+window.getToken() }, function(response) {
    
    try {
      response.data = JSON.parse(response.data);
      newUserList = response.data;

      window.modalOpen("new-user-list");
      if(newUserList.length){
        
        dataLoad(newUserList);
            
      }else{
        document.getElementById("userList").innerHTML = window.notFoundData("Takımınızda uygun kişi bulunamadı.");
      }
      window.loader(false);

    } catch(e) {
      window.notify(false,e);
    }
  }, function(response) {
    let res = JSON.parse(response.error);
    window.notify(false,res.message);
    window.loader(false);
  });  
}
function dataLoad(userList){
  let link = window.server+"avatars/";
  let str = userList.reduce(function(str, data) {
                
    return str.concat(`<div class="row mb-0" onclick="javascript:saveNewUser('${data.id}');" data-id="${data.id}">
    <a class="d-flex mb-0">
      <div class="align-self-center">
          <img data-src="${window.getImage(data.image,link)}" src="images/empty.png" width="40" height="40" class="rounded-xl me-3 lazy">
      </div>
      <div class="align-self-center">
          <h1 class="mb-n2 font-14">${data.name}</h1>
          <p class="font-11 opacity-60">${data.company ? data.company:""}</p>
      </div>
      <div class="align-self-center ms-auto text-end">
          <h2 class="mb-n1 font-14 color-red-dark">${window.money(data.total_amount)}</h2>
      </div>
    </a></div>`);
    
  }, '');
  document.getElementById("userList").innerHTML = str;
  
  new LazyLoad();
}

document.addEventListener("DOMContentLoaded", () => {
  ("use strict");
  function init(){
    beforeStart();

    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
      
      setTimeout(() => {
        // const ptr = PullToRefresh.init({
        //   mainElement: '.page-content',
        //   instructionsPullToRefresh: window.langs.yenilemekicinkaydir,
        //   instructionsReleaseToRefresh: window.langs.yenidenyukle,
        //   instructionsRefreshing: window.langs.yukleniyor,
        //   onRefresh() {
        //     beforeStart();
        //     start();
        //   },
        // });
        
        var searchInput = document.querySelectorAll("[data-team-search]");
        if (searchInput.length) {
          
          var clearSearch = document.querySelectorAll(".clear-search")[0];
          clearSearch.addEventListener("click", function () {
            searchInput[0].value = "";
            clearSearch.classList.add("disabled");
            dataLoad(newUserList);
          });
          
          searchInput[0].addEventListener("keyup", function (e) {
            // console.log(e.target.value == "");
            // console.log(e.target);
            // if(e.which == 8) return false;
            if(e.target.value == ""){
              clearSearch.classList.add("disabled");
              dataLoad(newUserList);
              return false;
            }
            // if(!e.target.value.length>0){
            //   console.log("veri yok2");
            //   return false;
            // }
            
            var searchValue = searchInput[0].value;
            searchValue = searchValue.toLowerCase();

            if (searchValue != "") {
              // if(searchValue.length <= 3){
              //   clearSearch.classList.add("disabled");
              //   return false;
              // }
              clearSearch.classList.remove("disabled");
              //beforeSearch();
              let newlist = newUserList.filter(function(row){
                console.log(row.user.name.includes(searchValue));
                let name = row.user.name.toLowerCase();
                return name.indexOf(searchValue) !== -1
              });
              // $("#myTable tr").filter(function() {
              //   $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
              // });

              if(newlist.length>0){
                
                dataLoad(newlist);

              }else{
                document.getElementById("userList").innerHTML = window.notFoundData("Filtrelemeye uygun sonuç bulunamadı.");
              }

            }
            ;
            if (searchValue === "") {
              clearSearch.classList.add("disabled");
            }
          });
        }
        ;
      }, 300);
      start();

      
      
    }
  }
  
  init();
});
