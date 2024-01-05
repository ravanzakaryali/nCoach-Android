
// import { post } from 'axios';
// import { get} from 'axios';
// alert();

// const axios = require('axios').default;
// ! Sign In Validation and Sending Form Data

document.addEventListener("DOMContentLoaded", () => {
    ("use strict");
    function init(){

      document.addEventListener("deviceready", onDeviceReady, false);
      function onDeviceReady() {
        let loginButton = document.querySelector("#loginButton");
        if (loginButton) {
          loginButton.addEventListener("click", armondo => {
            window.loader();
            const loginMail = document.getElementById("loginMail").value;
            const loginPassword = document.getElementById("loginPassword").value;
            console.log(loginMail);
            let mailRegex = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
            // let mailRegex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
            // console.log(mailRegex.test(loginMail));
            if(loginMail=='' || loginPassword==''){
              window.loader(false);
              window.notify(false,window.langs.eksikalanbirakmayin);
              return;
            }
            if(!mailRegex.test(loginMail)){
              window.loader(false);
              window.notify(false,window.langs.gecersizemail);
              return;
            }
            // cordova.plugin.http.setCookie(url, cookie, options);
            // cordova.plugin.http.clearCookies();
            cordova.plugin.http.post(window.api+"auth/login", {
              email: loginMail,
              password: loginPassword
            }, { Authorization: 'Bearer ' }, function(response) {
            // prints 200
              // alert(1);
              window.loader(false);
              try {
                response.data = JSON.parse(response.data);
                window.saveUser(response.data.user);
                window.saveToken(response.data.access_token.token);
                window.setStorage("tutorial", true);
                window.location.href='anasayfa.html';
                // window.notify(true,"Hoşgeldiniz, "+response.data.user.name,"Giriş Başarılı");

              } catch(e) {
                // document.getElementById("message").innerHTML = JSON.stringify(e);
                // alert(2);
                window.notify(false,window.langs.birsorunolustu);
              }
            }, function(response) {
              window.loader(false);
              // alert(3);
              // document.getElementById("message").innerHTML = JSON.stringify(response);
            // prints 403
              // JSON.stringify
              // console.log(JSON.parse(response.error).message)
              let res = JSON.parse(response.error);
              window.notify(false,res.message);
            });
            //  navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
            //     quality: 25,
            //     destinationType: Camera.DestinationType.FILE_URI,
            //     sourceType: Camera.PictureSourceType.CAMERA,
            //     allowEdit: true,
            //     encodingType: Camera.EncodingType.JPEG,
            //     popoverOptions: CameraPopoverOptions,
            //     saveToPhotoAlbum: true
            // });
          });
        }
        ;
        let registerForm1Control = document.querySelector("#registerForm1Control");
        if (registerForm1Control) {
          registerForm1Control.addEventListener("click", row => {

            registerForm1Control.setAttribute("disabled","disabled");
            window.loader();
            const registerFormName = document.getElementById("registerFormName").value;
            const registerFormPhone = document.getElementById("registerFormPhone").value;
            const registerFormMail = document.getElementById("registerFormMail").value;
            const registerFormPassword = document.getElementById("registerFormPassword").value;
            const registerFormPassword2 = document.getElementById("registerFormPassword2").value;

            let mailRegex = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;

            if(registerFormName=='' || registerFormPhone=='' || registerFormMail=='' || registerFormPassword=='' || registerFormPassword2==''){
              window.loader(false);
              window.notify(false,window.langs.eksikalanbirakmayin);
              return;
            }
            if(!mailRegex.test(registerFormMail)){
              window.loader(false);
              window.notify(false,window.langs.gecersizemail);
              return;
            }
            if(registerFormPassword!=registerFormPassword2){
              window.loader(false);
              window.notify(false,"Şifre tekrarı doğru değil");
              return;
            }
            cordova.plugin.http.post(window.api+"auth/control", {
              email: registerFormMail,
              phone: registerFormPhone,
              name: registerFormName,
              password: registerFormPassword
            }, {}, function(response) {
              window.loader(false);
              registerForm1Control.removeAttribute("disabled");
              try {
                response.data = JSON.parse(response.data);
                var countries = response.data.countries;
                var careers = response.data.careers;
                var companies = response.data.companies;
                var message = response.data.message;

                var registerFormCountry = document.getElementById('registerFormCountry');
                for(var i = 0; i < countries.length; i++) {
                  var opt = document.createElement('option');
                  opt.innerHTML = countries[i]['name'];
                  opt.value = countries[i]['id'];
                  registerFormCountry.appendChild(opt);
                }
                registerFormCountry.value = 218;
                
                var registerFormCompany = document.getElementById('registerFormCompany');
                for(var i = 0; i < companies.length; i++) {
                  var opt = document.createElement('option');
                  opt.innerHTML = companies[i]['name'];
                  opt.value = companies[i]['id'];
                  registerFormCompany.appendChild(opt);
                }
                // var opt1 = document.createElement('option');
                // opt1.innerHTML = "Şirketim Listede Yok";
                // opt1.value = "unlistcompany";
                // registerFormCompany.appendChild(opt1);
                // registerFormCompany.value = 218;
                
                var registerFormCarrier = document.getElementById('registerFormCarrier');
                for(var i = 0; i < careers.length; i++) {
                  var opt = document.createElement('option');
                  opt.innerHTML = careers[i]['name'];
                  opt.value = careers[i]['id'];
                  registerFormCarrier.appendChild(opt);
                }
                // var opt2 = document.createElement('option');
                // opt2.innerHTML = "Kariyerim Listede Yok";
                // opt2.value = "unlistcarrier";
                // registerFormCarrier.appendChild(opt2);
                
                // registerFormCarrier.value = 218;

                document.getElementById("registerForm1Check").click();
              } catch(e) {
                window.notify(false,e);
              }
            }, function(response) {
              window.loader(false);
              registerForm1Control.removeAttribute("disabled");
              let res = JSON.parse(response.error);
              window.notify(false,res.message);
            });

          });
        }
        ;

        let registerForm2Control = document.querySelector("#registerForm2Control");
        if (registerForm2Control) {
          registerForm2Control.addEventListener("click", row => {

            registerForm2Control.setAttribute("disabled","disabled");
            window.loader();
            const registerFormCountry = document.getElementById("registerFormCountry").value;
            const registerFormCompany = document.getElementById("registerFormCompany").value;
            const registerFormCompanyText = document.getElementById("registerFormCompanyText").value;
            const registerFormCarrier = document.getElementById("registerFormCarrier").value;
            const registerFormCarrierText = document.getElementById("registerFormCarrierText").value;

            if(registerFormCountry==''){
              window.loader(false);
              window.notify(false,"Lütfen ülke seçin");
              return;
            }
            if(document.querySelector("#registerFormCompanyCheck").checked){
              if(registerFormCompanyText==''){
                window.loader(false);
                window.notify(false,"Lütfen şirket bilgisini girin.");
                return;
              }
            }else{
              if(registerFormCompany==''){
                window.loader(false);
                window.notify(false,"Lütfen şirket seçin");
                return;
              }
            }
            if(document.querySelector("#registerFormCarrierCheck").checked){
              if(registerFormCarrierText==''){
                window.loader(false);
                window.notify(false,"Lütfen kariyer bilgisini girin.");
                return;
              }
            }else{
              // if(registerFormCarrier==''){
              //   window.loader(false);
              //   window.notify(false,"Lütfen kariyer seçin");
              //   return;
              // }
            }

            window.loader(false);
            registerForm2Control.removeAttribute("disabled");
            document.getElementById("registerForm2Check").click();

          });
        }
        ;

        let registerForm4Control = document.querySelector("#registerForm4Control");
        if (registerForm4Control) {
          registerForm4Control.addEventListener("click", row => {

            registerForm4Control.setAttribute("disabled","disabled");
            window.loader();
            const registerFormAbout = document.getElementById("registerFormAbout").value;

            // if(registerFormAbout==''){
            //   window.loader(false);
            //   window.notify(false,"Hakkında bilgisi girin");
            //   return;
            // }

            // parent_id

            function registerTwo(image = null){
              const registerFormName = document.getElementById("registerFormName").value;
              const registerFormPhone = document.getElementById("registerFormPhone").value;
              const registerFormMail = document.getElementById("registerFormMail").value;
              const registerFormPassword = document.getElementById("registerFormPassword").value;
              const registerFormCountry = document.getElementById("registerFormCountry").value;
              const registerFormCompany = document.getElementById("registerFormCompany").value;
              const registerFormCompanyText = document.getElementById("registerFormCompanyText").value;
              const registerFormCarrier = document.getElementById("registerFormCarrier").value;
              const registerFormCarrierText = document.getElementById("registerFormCarrierText").value;
              const registerFormFacebook = document.getElementById("registerFormFacebook").value;
              const registerFormInstagram = document.getElementById("registerFormInstagram").value;
              const registerFormTwitter = document.getElementById("registerFormTwitter").value;
              const registerFormLinkedin = document.getElementById("registerFormLinkedin").value;
              const registerFormPinterest = document.getElementById("registerFormPinterest").value;

              let company;
              let career;
              
              // if(document.querySelector("#registerFormCarrierCheck").checked){
              // if(document.querySelector("#registerFormCompanyCheck").checked){

              if (document.querySelector("#registerFormCompanyCheck").checked) {
                company = registerFormCompanyText;
              }
              if (document.querySelector("#registerFormCarrierCheck").checked) {
                career = registerFormCarrierText;
              }
              
              var verify_code = Math.floor(1000 + Math.random() * 9000);

              let datas = {}
              datas.email = registerFormMail;
              datas.phone = registerFormPhone;
              datas.name = registerFormName;
              datas.password = registerFormPassword;
              datas.facebook = registerFormFacebook;
              datas.instagram = registerFormInstagram;
              datas.twitter = registerFormTwitter;
              datas.linkedin = registerFormLinkedin;
              datas.pinterest = registerFormPinterest;
              datas.about = registerFormAbout;
              datas.verify_code = verify_code.toString();
              datas.country_id = registerFormCountry;
              datas.company = company;
              datas.career = career;
              datas.company_id = company ? null : registerFormCompany;
              datas.career_id = career ? null : registerFormCarrier;
              if(image){
                datas.image = image;
              }
              // console.log(datas);
              // return
              cordova.plugin.http.setDataSerializer("json");
              cordova.plugin.http.post(window.api+"auth/registerTwo", datas, {}, function(response) {
                window.loader(false);
                registerForm4Control.removeAttribute("disabled");
                try {
                  response.data = JSON.parse(response.data);
                  console.log(response.data);
                  window.saveUser(response.data.user);
                  window.saveToken(response.data.access_token.token);
                  window.setStorage("tutorial", true);
                  document.getElementById("registerForm4Check").click();
                } catch(e) {
                  window.notify(false,e);
                }
              }, function(response) {
                window.loader(false);
                registerForm4Control.removeAttribute("disabled");
                console.log(response)
                let res = JSON.parse(response.error);
                console.log(res);
                window.notify(false,res.message);
                // res.errors.forEach(error => {
                //   window.notify(false,error.message);
                // });
              });
            }


            // const registerFormImage = document.getElementById("registerFormImage");

            // var brittanny = document.getElementById("registerFormImage");
            // console.log(brittanny.src);
            let image;
            var uploadfileregister = document.getElementById("upload-file-register");
            if(uploadfileregister.value!=''){
              var formData = new FormData();
              formData.append('image', uploadfileregister.files[0]);
              
              cordova.plugin.http.setDataSerializer("multipart");
              cordova.plugin.http.post(window.api+"auth/registerOne", formData, {}, function(response) {
                try {
                  response.data = JSON.parse(response.data);
                  console.log(response.data);
                  image = response.data.image;
                  console.log(1);
                  return registerTwo(image);
                } catch(e) {
                  console.log(e);
                  window.notify(false,window.langs.birsorunolustu);
                  return;
                }
              }, function(response) {
                console.log(3);
                console.log(response)
                let res = JSON.parse(response.error);
                console.log(res);
                res.errors.forEach(error => {
                  window.notify(false,error.message);
                });
              });
            }else{
              return registerTwo();
            }
            // console.log("son satır");

            return;

            // cordova.plugin.http.setDataSerializer("utf8");
            // cordova.plugin.http.setHeader('charset', 'UTF-8;');
            // cordova.plugin.http.setHeader('Content-Type', 'multipart/form-data; charset=utf-8');
            // cordova.plugin.http.setHeader('*', 'Accept-Charset', 'utf-8');
            // cordova.plugin.http.setHeader('Content-Type: multipart/form-data;charset=UTF-8;');
            // let image = new File(registerFormImage.src, "image");
            
            
            
            

          });
        }
        ;

        let registerFormVerifyPageLink = document.querySelector("#registerFormVerifyPageLink");
        if (registerFormVerifyPageLink) {
          registerFormVerifyPageLink.addEventListener("click", row => {
            window.preloader();
            window.location.href='giris-dogrulama.html';
          });
        }
        ;

        let registerCloseMenu = document.querySelector("#registerCloseMenu");
        if (registerCloseMenu) {
          registerCloseMenu.addEventListener("click", row => {
            window.menuClose();
          });
        }
        ;

        let forgotCloseMenu = document.querySelector("#forgotCloseMenu");
        if (forgotCloseMenu) {
          forgotCloseMenu.addEventListener("click", row => {
            window.menuClose();
          });
        }
        ;
        
        let registerFormVerify = document.querySelector("#registerFormVerify");
        if (registerFormVerify) {
          registerFormVerify.addEventListener("click", row => {

            registerFormVerify.setAttribute("disabled","disabled");
            window.loader();

            let codes = document.querySelectorAll("#registerFormVerifyCodes input");
            let codestring = "";
            codes.forEach(code => {
              code = code.value.replace("●","");
              codestring += code
            });

            if(codestring.length!==4){
              window.loader(false);
              window.notify(false,"Doğrulama kodu hatalı !");
              return;
            }

            let user = window.getUser();
            cordova.plugin.http.post(window.api+"auth/verify", {
              email: user.email,
              phone: user.phone,
              input_code: codestring
            }, {}, function(response) {
              window.loader(false);
              registerFormVerifyRepeatButton.removeAttribute("disabled");
              try {
                response.data = JSON.parse(response.data);
                user.verify = true;
                window.saveUser(user);
                window.setStorage("newContact",true);
                document.getElementById("registerFormVerifyCheck").click();
              } catch(e) {
                window.notify(false,window.langs.birsorunolustu);
              }
            }, function(response) {
              window.loader(false);
              registerFormVerifyRepeatButton.removeAttribute("disabled");
              let res = JSON.parse(response.error);
              window.notify(false,res.message);
            });

          });
        }
        ;

        let registerFormVerifyRepeatButton = document.querySelector("#registerFormVerifyRepeatButton");
        if (registerFormVerifyRepeatButton) {
          registerFormVerifyRepeatButton.addEventListener("click", row => {

            registerFormVerifyRepeatButton.setAttribute("disabled","disabled");
            window.loader();
            var verify_code = Math.floor(1000 + Math.random() * 9000);

            let user = window.getUser();
            cordova.plugin.http.post(window.api+"auth/sendverifycode", {
              email: user.email,
              phone: user.phone,
              name: user.name,
              verify_code: verify_code
            }, {}, function(response) {
              window.loader(false);
              registerFormVerifyRepeatButton.removeAttribute("disabled");
              try {
                window.notify(true,"Doğrulama kodu email adresinize gönderildi");
              } catch(e) {
                window.notify(false,window.langs.birsorunolustu);
              }
            }, function(response) {
              window.loader(false);
              registerFormVerifyRepeatButton.removeAttribute("disabled");
              let res = JSON.parse(response.error);
              window.notify(false,res.message);
            });
          });
        }
        ;

        let passwordForgot = document.querySelector("#passwordForgot");
        if (passwordForgot) {
          passwordForgot.addEventListener("click", row => {

            passwordForgot.setAttribute("disabled","disabled");
            window.loader();
            const forgotEmail = document.getElementById("forgotEmail").value;
            
            
            if(forgotEmail==''){
              window.loader(false);
              window.notify(false,window.langs.eksikalanbirakmayin);
              return;
            }

            cordova.plugin.http.post(window.api+"auth/reset", {
              email: forgotEmail
            }, {}, function(response) {
              window.loader(false);
              passwordForgot.removeAttribute("disabled");
              try {
                window.notify(true,"Şifreniz email adresinize gönderildi");
                window.location.href='giris-yap.html';
              } catch(e) {
                window.notify(false,window.langs.birsorunolustu);
              }
            }, function(response) {
              window.loader(false);
              passwordForgot.removeAttribute("disabled");
              let res = JSON.parse(response.error);
              window.notify(false,res.message);
            });
          });
        }
        ;

        // var registerFormCarrier = document.querySelector("#registerFormCarrier");
        // if (registerFormCarrier) {
        //   registerFormCarrier.addEventListener("change", syndney => {
        //     if (registerFormCarrier.value == "unlistcarrier") {
        //       document.getElementById("registerFormCarrierTextBlock").style.display = 'block';
        //     }else{
        //       document.getElementById("registerFormCarrierTextBlock").style.display = 'none';
        //     }
        //     ;
        //   });
        // }

        // var registerFormCompany = document.querySelector("#registerFormCompany");
        // if (registerFormCompany) {
        //   registerFormCompany.addEventListener("change", syndney => {
        //     if (registerFormCompany.value == "unlistcompany") {
        //       document.getElementById("registerFormCompanyTextBlock").style.display = 'block';
        //     }else{
        //       document.getElementById("registerFormCompanyTextBlock").style.display = 'none';
        //     }
        //     ;
        //   });
        // }

        var registerFormCompanyCheck = document.querySelector("#registerFormCompanyCheck");
        if (registerFormCompanyCheck) {
          registerFormCompanyCheck.addEventListener("change", function() {
            if (this.checked) {
              document.getElementById("registerFormCompanySelectBlock").style.display = 'none';
              document.getElementById("registerFormCompanyTextBlock").style.display = 'block';
            }else{
              document.getElementById("registerFormCompanySelectBlock").style.display = 'block';
              document.getElementById("registerFormCompanyTextBlock").style.display = 'none';
            }
            ;
          });
        }

        var registerFormCarrierCheck = document.querySelector("#registerFormCarrierCheck");
        if (registerFormCarrierCheck) {
          registerFormCarrierCheck.addEventListener("change", function() {
            if (this.checked) {
              document.getElementById("registerFormCarrierSelectBlock").style.display = 'none';
              document.getElementById("registerFormCarrierTextBlock").style.display = 'block';
            }else{
              document.getElementById("registerFormCarrierSelectBlock").style.display = 'block';
              document.getElementById("registerFormCarrierTextBlock").style.display = 'none';
            }
            ;
          });
        }
      }
    }
    
  setTimeout(() => {
    init();
  }, 500);
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


