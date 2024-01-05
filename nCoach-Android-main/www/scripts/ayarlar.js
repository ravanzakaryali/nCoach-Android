const controller = "users/";
let settings = null;
function updateSetting(object,message = true){
  window.loader();
  // let user = window.getUser();
  
  cordova.plugin.http.setDataSerializer("json");
  cordova.plugin.http.post(window.api+controller+"setsetting/", object, { Authorization: 'Bearer '+window.getToken() }, function(response) {
    window.loader(false);
    try {
      response.data = JSON.parse(response.data);

      window.saveUser(response.data);
      
      // document.getElementById("settingFormPrivate").checked = response.data.profile_private;

      document.getElementById("settingFormName").value = response.data.name;
      document.getElementById("settingFormPhone").value = response.data.phone;
      document.getElementById("settingFormAbout").innerText = response.data.about;

      document.getElementById("settingFormFacebook").value = response.data.facebook;
      document.getElementById("settingFormInstagram").value = response.data.instagram;
      document.getElementById("settingFormTwitter").value = response.data.twitter;
      document.getElementById("settingFormLinkedin").value = response.data.linkedin;
      document.getElementById("settingFormPinterest").value = response.data.pinterest;

      document.getElementById("settingFormCountry").value = response.data.country_id;      
      document.getElementById("settingFormCompany").value = response.data.company_id;      
      document.getElementById("settingFormCarrier").value = response.data.career_id;
      window.menuClose();
      if(message) window.notify(true,"Başarıyla Güncellendi");

    } catch(e) {
      window.notify(false,e);
    }
  }, function(response) {
    let res = JSON.parse(response.error);
    window.notify(false,res.message);
    window.loader(false);
  });
}

document.addEventListener("DOMContentLoaded", () => {
    ("use strict");
    function init(){

      document.addEventListener("deviceready", onDeviceReady, false);
      function onDeviceReady() {
        (async() => {
          window.loader();
          
          let user = window.getUser();
          
          if(user){
            if(document.getElementById("usercareersetting")){
              if(user.career!=""){
                document.getElementById("usercareersetting").innerHTML = "("+user.career+")";
              }
            }
          }
          $(function() {
            $(".select2").select2();
          });

          await cordova.plugin.http.post(window.api+controller+"getsetting/", {}, { Authorization: 'Bearer '+window.getToken() }, function(response) {
            window.loader(false);
            try {
              settings = JSON.parse(response.data);
              let user = settings.user;
              var countries = settings.countries;
              var careers = settings.careers;
              var companies = settings.companies;
              var message = settings.message;
              
              document.getElementById("settingFormPrivate").checked = user.profile_private;
              document.getElementById("settingFormName").value = user.name;
              document.getElementById("settingFormPhone").value = user.phone;
              document.getElementById("settingFormAbout").innerText = user.about;

              // document.getElementById("settingFormCountry") = user.about;
              // document.getElementById("settingFormCompany") = user.about;
              // document.getElementById("settingFormCarrier") = user.about;

              document.getElementById("settingFormFacebook").value = user.facebook;
              document.getElementById("settingFormInstagram").value = user.instagram;
              document.getElementById("settingFormTwitter").value = user.twitter;
              document.getElementById("settingFormLinkedin").value = user.linkedin;
              document.getElementById("settingFormPinterest").value = user.pinterest;

              var settingFormCountry = document.getElementById('settingFormCountry');
              for(var i = 0; i < countries.length; i++) {
                var opt = document.createElement('option');
                opt.innerHTML = countries[i]['name'];
                opt.value = countries[i]['id'];
                settingFormCountry.appendChild(opt);
              }
              settingFormCountry.value = user.country_id;
              
              var settingFormCompany = document.getElementById('settingFormCompany');
              for(var i = 0; i < companies.length; i++) {
                var opt = document.createElement('option');
                opt.innerHTML = companies[i]['name'];
                opt.value = companies[i]['id'];
                settingFormCompany.appendChild(opt);
              }
              settingFormCompany.value = user.company_id;
              var settingFormOldCompany = document.getElementById('settingFormOldCompany');
              settingFormOldCompany.value = user.company_id;
              
              var settingFormCarrier = document.getElementById('settingFormCarrier');
              for(var i = 0; i < careers.length; i++) {
                var opt = document.createElement('option');
                opt.innerHTML = careers[i]['name'];
                opt.value = careers[i]['id'];
                settingFormCarrier.appendChild(opt);
              }
              
              settingFormCarrier.value = user.career_id;
              

            } catch(e) {
              window.notify(false,e);
            }
          }, function(response) {
            let res = JSON.parse(response.error);
            window.notify(false,res.message);
            window.loader(false);
          });
        
          // document.querySelectorAll("[data-toggle-theme]");
          var settingFormPrivate = document.querySelector("[data-trigger-switch='settingFormPrivate']");
          if (settingFormPrivate) {
            settingFormPrivate.addEventListener("click", mirinda => {
              let private = document.getElementById("settingFormPrivate").checked;
              updateSetting({profile_private:private},false);
            });
          }
          ;
          let settingPersonButton = document.querySelector("#settingPersonButton");
          settingPersonButton.addEventListener("click", row => {

            const settingFormName = document.getElementById("settingFormName").value;
            const settingFormPhone = document.getElementById("settingFormPhone").value;
            const settingFormAbout = document.getElementById("settingFormAbout").value;

            if(settingFormName=='' || settingFormPhone==''){
              window.notify(false,window.langs.eksikalanbirakmayin);
              return;
            }
            updateSetting({
              about: settingFormAbout,
              phone: settingFormPhone,
              name: settingFormName
            });
            document.querySelector('[get-data="user.name"]').innerText = settingFormName;            

          });

          
          let settingPasswordButton = document.querySelector("#settingPasswordButton");
          settingPasswordButton.addEventListener("click", row => {

            const settingFormOldPassword = document.getElementById("settingFormOldPassword").value;
            const settingFormPassword = document.getElementById("settingFormPassword").value;
            const settingFormPassword2 = document.getElementById("settingFormPassword2").value;
            let user = window.getUser();
            if(settingFormOldPassword=='' || settingFormPassword=='' || settingFormPassword2==''){
              window.notify(false,window.langs.eksikalanbirakmayin);
              return;
            }
            if(settingFormOldPassword!=user.password_decyrpt){
              window.notify(false,"Eski şifre doğru değil");
              return;
            }
            if(settingFormPassword!=settingFormPassword2){
              window.notify(false,"Şifre tekrarı doğru değil");
              return;
            }
            updateSetting({
              password: settingFormPassword,
              password_decyrpt : settingFormPassword
            });

          });
          
          let settingCareerButton = document.querySelector("#settingCareerButton");
          settingCareerButton.addEventListener("click", row => {

            const settingFormCountry = document.getElementById("settingFormCountry").value;
            const settingFormCompany = document.getElementById("settingFormCompany").value;
            const settingFormCarrier = document.getElementById("settingFormCarrier").value;
            const settingFormOldCompany = document.getElementById("settingFormOldCompany").value;

            let sfcarrier = document.getElementById("settingFormCarrier");
            let career = null;
            if(settingFormCarrier!=""){
              career = sfcarrier.options[sfcarrier.selectedIndex].text;
            }
            
            if(settingFormCountry=='' || settingFormCompany==''){
              window.notify(false,window.langs.eksikalanbirakmayin);
              return;
            }
            
            let sfcompany = document.getElementById("settingFormCompany");
            let company = sfcompany.options[sfcompany.selectedIndex].text;

            if(settingFormCompany==settingFormOldCompany){
              updateSetting({
                country_id: settingFormCountry,
                company_id : settingFormCompany || null,
                career_id : settingFormCarrier || null,
                career : career,
                company : company,
                companychange: false
              });
              document.querySelector('[get-data="user.company"]').innerText = company;
              if(sfcarrier.selectedIndex>0){
                document.getElementById('usercareersetting').innerHTML = "("+career+")";
              }else{
                document.getElementById('usercareersetting').innerHTML = "";
              }
            }else{
              let nblock = document.getElementById("menu-user-career-change-block");
              nblock.classList.add("active");
              window.modalOpen("menu-user-career-change", false);
            }

          });
          let userCompanyTrue = document.querySelector("#usercompany-true");
          if (userCompanyTrue) {
            userCompanyTrue.addEventListener("click", armondo => {
              const settingFormCountry = document.getElementById("settingFormCountry").value;
              const settingFormCompany = document.getElementById("settingFormCompany").value;
              const settingFormCarrier = document.getElementById("settingFormCarrier").value;

              let sfcarrier = document.getElementById("settingFormCarrier");
              let career = null;
              if(settingFormCarrier!=""){
                career = sfcarrier.options[sfcarrier.selectedIndex].text;
              }

              if(settingFormCountry=='' || settingFormCompany==''){
                window.notify(false,window.langs.eksikalanbirakmayin);
                return;
              }

              let sfcompany = document.getElementById("settingFormCompany");
              let company = sfcompany.options[sfcompany.selectedIndex].text;

              updateSetting({
                country_id: settingFormCountry,
                company_id : settingFormCompany || null,
                career_id : settingFormCarrier || null,
                career : career,
                company : company,
                companychange: true
              });
              
              var settingFormOldCompany = document.getElementById('settingFormOldCompany');
              settingFormOldCompany.value = settingFormCompany;

              let nblock = document.getElementById("menu-user-career-change-block");
              nblock.classList.remove("active");
              
              document.querySelector('[get-data="user.company"]').innerText = company;
              if(sfcarrier.selectedIndex>0){
                document.getElementById('usercareersetting').innerHTML = "("+career+")";
              }else{
                document.getElementById('usercareersetting').innerHTML = "";
              }
              // document.querySelector('[get-data="user.company"]').innerText = settingFormCompany;
            })
          };

              
          let userCompanyFalse = document.querySelector("#usercompany-false");
          if (userCompanyFalse) {
            userCompanyFalse.addEventListener("click", armondo => {
              let nblock = document.getElementById("menu-user-career-change-block");
              nblock.classList.remove("active");
              window.menuClose("menu-user-career-change");
            })
          }
          ;
          
          
          let settingSocialButton = document.querySelector("#settingSocialButton");
          settingSocialButton.addEventListener("click", row => {

            const settingFormFacebook = document.getElementById("settingFormFacebook").value;
            const settingFormInstagram = document.getElementById("settingFormInstagram").value;
            const settingFormTwitter = document.getElementById("settingFormTwitter").value;
            const settingFormLinkedin = document.getElementById("settingFormLinkedin").value;
            const settingFormPinterest = document.getElementById("settingFormPinterest").value;

            updateSetting({
              facebook: settingFormFacebook,
              instagram : settingFormInstagram,
              twitter : settingFormTwitter,
              linkedin : settingFormLinkedin,
              pinterest : settingFormPinterest
            });

          });

          // let uploadbutton = document.querySelector("#upload-file-setting");
          // if (uploadbutton) {
          //   uploadbutton.addEventListener("click", row => {
          //     uploadbutton.src = "images/profile.png";
          //     uploadbutton.value = "";
          // });

          let settingImageButton = document.querySelector("#settingImageButton");
          if (settingImageButton) {
            settingImageButton.addEventListener("click", row => {

              let image;
              var uploadfileregister = document.getElementById("upload-file-setting");
              if(uploadfileregister.value!=''){
                window.loader();
                var formData = new FormData();
                formData.append('image', uploadfileregister.files[0]);
                
                cordova.plugin.http.setDataSerializer("multipart");
                cordova.plugin.http.post(window.api+"auth/registerOne", formData, {}, function(response) {
                  try {
                    response.data = JSON.parse(response.data);
                    console.log(response.data);
                    image = response.data.image;
                    updateSetting({
                      image: image
                    });
                    document.querySelector('[data-load="userImage"]').src = window.server+"avatars/"+image;

                  } catch(e) {
                    window.notify(false,e);
                    return;
                  }
                }, function(response) {
                  let res = JSON.parse(response.error);
                  console.log(res);
                  res.errors.forEach(error => {
                    window.notify(false,error.message);
                  });
                });
              }else{
                window.notify(false,"Lütfen Fotoğraf Seçiniz");
              }

            });
          }
          ;
        })();
      }
    }
    
  setTimeout(() => {
    init();
  }, 1000);
});

// document.addEventListener("deviceready", onDeviceReady, false);
// function onDeviceReady() {
// //     console.log(navigator.camera);
// alert();
//     document.getElementById('girisyap').addEventListener('click', cameraApp);
//     function cameraApp() {
//         alert();
        // navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
        //     quality: 25,
        //     destinationType: Camera.DestinationType.FILE_URI,
        //     sourceType: Camera.PictureSourceType.CAMERA,
        //     allowEdit: true,
        //     encodingType: Camera.EncodingType.JPEG,
        //     popoverOptions: CameraPopoverOptions,
        //     saveToPhotoAlbum: true
        // });
    // }
    // navigator.notification.alert(
    //     'You are the winner!',  // message
    //     null,         // callback
    //     'Game Over',            // title
    //     'Done'                  // buttonName
    // );
    // navigator.notification.beep(5);

    // const userNameIn = document.querySelector("#userNameIn");
    // const passwordIn = document.querySelector("#passwordIn");

// }

// var header = cordova.plugin.http.getBasicAuthHeader('user', 'password');
// console.log(header);
// axios.post(API_URL,{
//     userName : userNameIn,
//     password:passwordIn
// })
// .then(
//     function (response){
//         if(response.status){
//             let toastID = document.getElementById('toast-7');
//             toastID = new bootstrap.Toast(toastID);
//             toastID.show();

//             let toastSuccess = document.getElementById('toast-1');
//             toastSuccess = new bootstrap.Toast(toastID);
//             toastSuccess.show();
//         }
//         else{
//             let toastError = document.getElementById('toast-2');
//             toastError = new bootstrap.Toast(toastID);
//             toastError.show();

//         }
// })
// .catch(function(error){
//     document.getElementById("errorMessage").innerHTML = error.message;
// })

// !---------------------------- -------------- ---------------



// ! Sign UP Validation and Sending Register-Form Data

// const email = document.querySelector("#email").value;
// const phone = document.querySelector("#phone").value;
// const nameSurname = document.querySelector("#nameSurname").value;


// const country = document.querySelector("#country").value;
// const companyName= document.querySelector("#companyName").value;
// const career = document.querySelector('#career').value;


// const facebook = document.querySelector("#facebook").value;
// const instagram = document.querySelector("#instagram").value;
// const twitter = document.querySelector("#twitter").value;
// const linkedin = document.querySelector("#linkedin").value;
// const pinterest = document.querySelector("#pinterest").value;

// const profilePicture = document.querySelector("#profilePicture");
// const bio = document.querySelector("#bio");


// form.addEventListener("submit", function (event) {
//     axios.post(API_URL,{
//         nameSurname:nameSurname,
//         email:email,
//         phone :phone,
//         country:country,
//         companyName:companyName,
//         career:career,
//         facebook:facebook,
//         twitter:twitter,
//         instagram:instagram,
//         linkedin:linkedin,
//         pinterest:pinterest,
//         profilePicture:profilePicture,
//         bio:bio,

//     })
//     .then(
//         function (response){
//             if(response.status){
//                 document.getElementById("register1").setAttribute("data-menu","register-success")
//             }
//             else{
//                 document.getElementById("register1").setAttribute("data-menu","register-error")
//             }
//     })
//     .catch(function(error){
//         document.getElementById("register-error-message").innerHTML = error.message;
//     })

//     event.preventDefault()
// })

// !---------------------------- -------------- ---------------


// ! OTP - Account Verification
// const value1 = document.getElementById("otp1").value;
// const value2 = document.getElementById("otp2").value;
// const value3 = document.getElementById("otp3").value;
// const value4 = document.getElementById("otp4").value;
// const otpButton = document.getElementById('code-verified');

// otpButton.addEventListener('click',function(event){
//     axios.post("URL",{
//         otp1:value1,
//         otp2:value2,
//         otp3:value3,
//         otp4:value4

//     })

//     .then(function(response){
//         if(response.ok){
//             otpButton.setAttribute('data-menu','verified-success')
//         }
//         else{
//             otpButton.setAttribute('data-menu','verified-error')
//         }
//     })
//     .catch(function(error){
//         document.getElementById('otp-error-desc').innerHTML = error.message
//     })
// });


