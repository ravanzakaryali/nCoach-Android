document.addEventListener("DOMContentLoaded", () => {
  setTimeout(function () {
    var kayser = document.getElementById("preloader");
    if (kayser) {
      kayser.classList.add("preloader-hide");
    }
  }, 500);
  document.addEventListener("deviceready", onDeviceReady, false);
  function onDeviceReady() {
    // SpinnerDialog.show();
  }
});
// #region Functions
function valueKeyPress(t) {

  var charCode = (evt.which) ? evt.which : event.keyCode
  if (charCode > 31 && (charCode < 48 || charCode > 57))
    return false;

  return true;


  var edValue = document.getElementById("edValue");
  var s = edValue.value;

  var lblValue = document.getElementById("lblValue");

  if (s >= 48 && s <= 57)

    // to check whether pressed key is number or not 
    return true;


  else return false;



}
function toUpperCaseConvert(e) {
  let input = document.getElementById(e.getAttribute("id"));
  if (e.value.length < 1) { input.value = ""; }
  // this.form.name = e.replace(/^./, e[0].toUpperCase());
  input.value = e.value.replace(/(?:^|\s)\S/g, function (a) { return a.toUpperCase(); });
}
function toEmailRegex(email) {
  const [name, domain] = email.split("@");
  return `${name[0]}${new Array(name.length).join("*")}@${domain}`;
}
function toPhoneRegex(phone) {
  if(phone.length<7){
    return phone;
  }
  let prefixLength = 4;
  let suffixLength = 3;

  let prefix  = phone.substring(0, prefixLength);
  let suffix  = phone.slice(-suffixLength);
  let nbStars = phone.length - (prefixLength + suffixLength);

  return prefix + "*".repeat(nbStars) + suffix;

  // var m = phone.match(/(\+\d{3})(\d+)(\d{3})/);
  // var res = m[1] + '*'.repeat(m[2].length) + m[3];
  // console.log(res);
}
function toLowerCaseConvert(e) {
  let input = document.getElementById(e.getAttribute("id"));
  if (e.value.length < 1) { input.value = ""; }
  // this.form.name = e.replace(/^./, e[0].toUpperCase());
  input.value = e.value.toLowerCase();
}
function removeTrim(e) {
  let char = String.fromCharCode(e.keyCode); // Get the character
  if (!/\s/g.test(char)) return true; // Match with regex 
  else e.preventDefault();
}
function onlyNumberInput(e) {
  let char = String.fromCharCode(e.keyCode); // Get the character
  if ((e.keyCode >= 48 && e.keyCode <= 57) && (!/\s/g.test(char))) return true; // Match with regex 
  else e.preventDefault(); // If not match, don't add to input text
}
function onlyTextInput(e) {

  var key = e.keyCode;
  if (key !== 32) {
    let char = String.fromCharCode(e.keyCode); // Get the character
    if (/^[a-zA-ZwığüşöçĞÜŞÖÇİ]+$/.test(char)) return true; // Match with regex 
    else e.preventDefault(); // If not match, don't add to input text
  }
  return

  // return e.charCode >= 48 && e.charCode <= 57;
  // console.log(e.value);

  // console.log(e);
  // return e.value;
  // if(e.length < 1) {return '';}
  // // this.form.name = e.replace(/^./, e[0].toUpperCase());
  // return e.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });

}
function validateEmail(mail) {
  let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
  return regex.test(mail)
}
// #endregion

// #region Window
const KEY = "userData";
const KEYTOKEN = "token";
window.lang = "tr";
window.langs = {
  basarili: "Başarılı",
  hatali: "Hatalı İşlem",
  birsorunolustu: "Bir sorun oluştu",
  uyari: "Bilgilendirme",
  kapat: "Kapat",
  tamam: "Tamam",
  gecersizemail: "Email adresi geçersiz",
  eksikalanbirakmayin: "Lütfen zorunlu alanları girin",
  yenilemekicinkaydir: "Yenilemek için kaydır",
  yenidenyukle: "Yeniden yükle",
  yukleniyor: "Yükleniyor.."
};
// window.server = 'http://127.0.0.1:3340/';
// window.server = 'https://ncoach.herokuapp.com/';
window.server = 'https://api.ncoach.org/';
// window.server = 'https://5b12-176-217-87-248.eu.ngrok.io/';
window.api = window.server + 'api/v1/';
window.loadingData = '<div class="loadingData"><div class="spinner-custom"></div><p class="text-center">Lütfen Bekleyin..</p></div>';
window.notFoundData = function (message = "Veri bulunamadı.") {
  return `<div class="notFoundData"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 63 63" style="enable-background:new 0 0 63 63;" xml:space="preserve"><g id="Layer_79"><path fill="#ccc" d="M55.6,62.1c-0.5,0-1-0.4-1-1V18.3L41.5,3.3h-27c-2.7,0-4.9,2.2-4.9,4.9v13.7c0,0.5-0.4,1-1,1s-1-0.4-1-1V8.2 c0-3.8,3.1-6.9,6.9-6.9h27.8l14.3,16.3v43.5C56.5,61.6,56.1,62.1,55.6,62.1z M51.7,18.9c0-0.5-0.4-1-1-1h-6.4 c-0.8,0-1.5-0.7-1.5-1.5c0,0,0,0,0,0V8.7c0-0.5-0.4-1-1-1s-1,0.4-1,1v7.6c0,1.9,1.6,3.5,3.5,3.5h6.3C51.2,19.8,51.7,19.4,51.7,18.9 C51.7,18.9,51.7,18.9,51.7,18.9z M20.7,43.9c0.2,0,0.5-0.1,0.7-0.2c0.2-0.1,0.3-0.3,0.3-0.6c0-0.2-0.1-0.4-0.3-0.6 c-0.2-0.2-0.4-0.2-0.7-0.2c-0.3,0-0.5,0.1-0.7,0.2c-0.2,0.1-0.3,0.3-0.3,0.6c0,0.2,0.1,0.4,0.3,0.6C20.2,43.8,20.4,43.9,20.7,43.9z M23.6,43.9c0.2,0,0.5-0.1,0.7-0.2c0.2-0.1,0.3-0.3,0.3-0.6c0-0.2-0.1-0.4-0.3-0.6c-0.2-0.2-0.4-0.2-0.7-0.2 c-0.3,0-0.5,0.1-0.7,0.2c-0.2,0.1-0.3,0.3-0.3,0.6c0,0.2,0.1,0.4,0.3,0.6C23.1,43.8,23.3,43.9,23.6,43.9z M26.5,43.9 c0.2,0,0.5-0.1,0.7-0.2c0.2-0.1,0.3-0.3,0.3-0.6c0-0.2-0.1-0.4-0.3-0.6c-0.2-0.2-0.4-0.2-0.7-0.2c-0.3,0-0.5,0.1-0.7,0.2 c-0.2,0.1-0.3,0.3-0.3,0.6c0,0.2,0.1,0.4,0.3,0.6C26,43.8,26.2,43.9,26.5,43.9z"/></g></svg><p>${message}</p></div>`;
}
window.getStorage = function (key) {
  return window.localStorage.getItem(key);
}
window.setStorage = function (key, data) {
  window.localStorage.setItem(key, data);
}
window.destroyStorage = function (key) {
  window.localStorage.removeItem(key);
}
window.getToken = function () {
  return window.localStorage.getItem(KEYTOKEN);
}
window.saveToken = function (token) {
  window.localStorage.setItem(KEYTOKEN, token);
}
window.destroyToken = function () {
  window.localStorage.removeItem(KEYTOKEN);
}
window.getUser = function () {
  return JSON.parse(window.localStorage.getItem(KEY));
}
window.saveUser = function (data) {
  window.localStorage.setItem(KEY, JSON.stringify(data));
}
window.destroyUser = function () {
  window.localStorage.removeItem(KEY);
}
window.notify = function (type, message, title = null, button = null) {
  let nsvg = document.getElementById("notify-svg");
  let ntitle = document.getElementById("notify-title");
  let nmessage = document.getElementById("notify-message");
  let nbutton = document.getElementById("notify-button");
  let nhtml = document.getElementById("notify-html");
  let svg = "";
  if (type) {
    svg = `<svg class="successSvg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <rect x="0" y="0" width="24" height="24"></rect>
      <circle fill="#000000" opacity="0.3" cx="12" cy="12" r="10"></circle>
      <path d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z" fill="#000000" fill-rule="nonzero"></path>
    </g>
  </svg>`;
  } else {
    svg = `<svg class="warningSvg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <rect x="0" y="0" width="24" height="24"/>
        <circle fill="#000000" opacity="0.3" cx="12" cy="12" r="10"/>
        <rect fill="#000000" x="11" y="7" width="2" height="8" rx="1"/>
        <rect fill="#000000" x="11" y="16" width="2" height="2" rx="1"/>
    </g>
</svg>`;
  }
  nsvg.innerHTML = svg;
  ntitle.innerText = title === null ? (type ? window.langs.basarili : window.langs.uyari) : title;
  nmessage.innerText = message;
  nbutton.innerText = button === null ? window.langs.tamam : button;

  let nblock = document.getElementById("menu-notify-block");
  nblock.classList.add("active");
  window.modalOpen("menu-notify", false);
  // navigator.notification.alert(
  //   message,
  //   null,
  //   title === null ? (type ? window.langs.basarili:window.langs.uyari) : title,
  //   title === null ? window.langs.kapat : button
  // );
}
window.menuClose = function (id = null) {
  if (id == null) {
    const adarryll = document.querySelectorAll(".menu-active");
    for (let fabiana = 0; fabiana < adarryll.length; fabiana++) {
      // console.log(adarryll[fabiana].id);
      adarryll[fabiana].classList.remove("menu-active");
    }
    ;
    // document.getElementsByClassName("menu-hider")[0].classList.remove("menu-active");
  } else {
    const adarryll = document.getElementById(id);
    adarryll.classList.remove("menu-active");
    if (id != "menu-notify" && id != "menu-logout") document.getElementsByClassName("menu-hider")[0].classList.remove("menu-active");
  }
}
window.reloadSlider = function (autoplay = false, interval = 4e3) {
  var shebria = document.querySelectorAll(".single-slider");
  if (shebria.length) {
    shebria.forEach(function (glenroy) {
      var zeidan = new Splide("#" + glenroy.id, { type: "loop", autoplay: autoplay, interval: interval, perPage: 1 }).mount();
    });
  }
  ;
}
window.modalOpen = function (id, close = true) {
  if (close) window.menuClose();
  setTimeout(() => {
    var charrisse = document.getElementById(id);
    charrisse.classList.add("menu-active");
    if (id != "menu-notify" && id != "menu-logout") document.getElementsByClassName("menu-hider")[0].classList.add("menu-active");
  }, 250);
}
window.cardResize = function () {
  const kaleil = document.getElementsByClassName("card");
  function tulon() {
    var janique, ancle, shakella;
    var shakella = document.querySelectorAll(".header:not(.header-transparent)")[0];
    var mattilynn = document.querySelectorAll("#footer-bar")[0];
    shakella ? janique = document.querySelectorAll(".header")[0].offsetHeight : janique = 0;
    mattilynn ? ancle = document.querySelectorAll("#footer-bar")[0].offsetHeight : ancle = 0;
    for (let zsophia = 0; zsophia < kaleil.length; zsophia++) {
      if (kaleil[zsophia].getAttribute("data-card-height") === "cover") {
        if (window.matchMedia("(display-mode: fullscreen)").matches) {
          var tobitha = window.outerHeight;
        }
        ;
        if (!window.matchMedia("(display-mode: fullscreen)").matches) {
          var tobitha = window.innerHeight;
        }
        ;
        var parisa = tobitha + "px";
      }
      ;
      if (kaleil[zsophia].hasAttribute("data-card-height")) {
        var shaunte = kaleil[zsophia].getAttribute("data-card-height");
        kaleil[zsophia].style.height = shaunte + "px";
        if (shaunte === "cover") {
          var tangina = shaunte;
          kaleil[zsophia].style.height = parisa;
        }
      }
    }
  }
  if (kaleil.length) {
    tulon();
    window.addEventListener("resize", tulon);
  }
  ;
}
window.getValue = function (data, type) {
  const lang = window.lang;
  if (type == "getMonth") {
    let month = new Date(data).getMonth();
    if (lang == "tr") {
      if (month == 0) return "Ocak";
      if (month == 1) return "Şubat";
      if (month == 2) return "Mart";
      if (month == 3) return "Nisan";
      if (month == 4) return "Mayıs";
      if (month == 5) return "Haziran";
      if (month == 6) return "Temmuz";
      if (month == 7) return "Ağustos";
      if (month == 8) return "Eylül";
      if (month == 9) return "Ekim";
      if (month == 10) return "Kasım";
      if (month == 11) return "Aralık";
    } else {
      if (month == 0) return "Ocak";
      if (month == 1) return "Şubat";
      if (month == 2) return "Mart";
      if (month == 3) return "Nisan";
      if (month == 4) return "Mayıs";
      if (month == 5) return "Haziran";
      if (month == 6) return "Temmuz";
      if (month == 7) return "Ağustos";
      if (month == 8) return "Eylül";
      if (month == 9) return "Ekim";
      if (month == 10) return "Kasım";
      if (month == 11) return "Aralık";
    }
  }
  if (type == "getDate") {
    return new Date(data).getDate();
  }
  if (type == "getYear") {
    return new Date(data).getFullYear();
  }
  if (type == "getDayMonthYear") {
    let month = window.getValue(data, "getMonth");
    return new Date(data).getDate() + " " + month + " " + new Date(data).getFullYear();
  }
  if (type == "getTime") {
    // let month = window.getValue(data, "getMonth");
    return new Date(data).getHours() + ":" + new Date(data).getMinutes();
  }
  if (type == "getDuration") {
    if (lang == "tr") {
      if (data == 0) return "6 Ay";
      if (data == 1) return "6-18 Ay";
      if (data == 2) return "18+ Ay";
    } else {
      if (data == 0) return "6 Month";
      if (data == 1) return "6-18 Month";
      if (data == 2) return "18+ Month";
    }
  }
  if (type == "getColor") {
    if (data === undefined || data === null) {
      data = 0;
    }
    if (data == 0) return "bg-red-dark";
    if (data == 1) return "bg-orange-dark";
    if (data == 2) return "bg-yellow-dark";
    if (data == 3) return "bg-green-dark";
    if (data == 4) return "bg-mint-dark";
  }
  if (type == "getNameFirstChar") {
    var names = data.split(' '),
      initials = names[0].substring(0, 1).toUpperCase();
    if (names.length > 1) {
      initials += names[names.length - 1].substring(0, 1).toUpperCase();
    }
    return initials;
  }
  if (type == "getRating") {
    let start = "";
    for (let index = 1; index <= data; index++) {
      start += `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <polygon points="0 0 24 0 24 24 0 24"/>
              <path d="M12,18 L7.91561963,20.1472858 C7.42677504,20.4042866 6.82214789,20.2163401 6.56514708,19.7274955 C6.46280801,19.5328351 6.42749334,19.309867 6.46467018,19.0931094 L7.24471742,14.545085 L3.94038429,11.3241562 C3.54490071,10.938655 3.5368084,10.3055417 3.92230962,9.91005817 C4.07581822,9.75257453 4.27696063,9.65008735 4.49459766,9.61846284 L9.06107374,8.95491503 L11.1032639,4.81698575 C11.3476862,4.32173209 11.9473121,4.11839309 12.4425657,4.36281539 C12.6397783,4.46014562 12.7994058,4.61977315 12.8967361,4.81698575 L14.9389263,8.95491503 L19.5054023,9.61846284 C20.0519472,9.69788046 20.4306287,10.2053233 20.351211,10.7518682 C20.3195865,10.9695052 20.2170993,11.1706476 20.0596157,11.3241562 L16.7552826,14.545085 L17.5353298,19.0931094 C17.6286908,19.6374458 17.263103,20.1544017 16.7187666,20.2477627 C16.5020089,20.2849396 16.2790408,20.2496249 16.0843804,20.1472858 L12,18 Z" fill="#f6bb42"/>
          </g>
      </svg>`;
    }
    return start;

  }
}
window.money = function (value = 0) {
  const money = new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'USD' });
  return money.format(value);
}
window.loginControl = function (status) {
  let tutorial = window.getStorage("tutorial");
  // console.log(tutorial);
  // console.log(window.location.pathname.includes("index.html"));
  if (tutorial && (window.location.pathname.includes("index.html") || window.location.pathname == '/')) {
    window.location.href = "giris-yap.html";
  }
  let token = window.getToken();
  if (token) {
    let userData = window.getUser();
    if (userData) {
      if (!userData.verify) {
        if (!window.location.pathname.includes("giris-dogrulama.html")) window.location.href = "giris-dogrulama.html";
        return;
        let verify = window.localStorage.getItem("verify_code");
        if (verify) {
        } else {
          window.destroyToken();
          window.destroyUser();
          window.location.href = "giris-yap.html";
        }
      }
    }
  }
  if (status) {
    if (!token) {
      window.location.href = "giris-yap.html";
    }
  } else {
    if (token) {
      window.location.href = "anasayfa.html";
    }
  }
}
window.preloader = function (status = true) {
  var preloader = document.getElementById("preloader");
  if (preloader) {
    if (status)
      preloader.classList.remove("preloader-hide");
    else
      preloader.classList.add("preloader-hide");
  }
}
window.loader = function (status = true, text = false) {
  var preloader = document.getElementById("customPreloader");
  // if(text)
  // document.querySelector("#customPreloader .text-center").style.display = "block";
  // else
  // document.querySelector("#customPreloader .text-center").style.display = "none";

  if (preloader) {
    if (status)
      preloader.classList.add("preloader-show");
    else
      preloader.classList.remove("preloader-show");
  }
}
window.getImage = function (image, link = "", res = null) {
  if(image==null || image == ""){
    return "images/profile.png";
  }
  return link+image;
}
window.getUserNotification = function () {
  let status = window.getStorage("notificationStatus");
  if(status=="true"){
    return true;
  }
  return false;
}
window.userPremium = function () {
  let userData = window.getUser();
  if (userData) {
    if (userData.premium) {
      return true;
    }
  }
  return false;
}
window.ifUrlExist = async function (url, callback) {
  let request = new XMLHttpRequest;
  request.open('GET', url, true);
  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  request.setRequestHeader('Accept', '*/*');
  request.onprogress = function (event) {
    let status = event.target.status;
    let statusFirstNumber = (status).toString()[0];
    switch (statusFirstNumber) {
      case '2':
        request.abort();
        return callback(true);
      default:
        request.abort();
        return callback(false);
    };
  };
  request.send('');
}
window.setData = function (data) {
  // data.forEach(row => {
  window.data = data;
  // });
  // console.log(window.data);

}
window.getData = function (key) {
  let data = window.data;
  // console.log(key);
  // // key = JSON.stringify(key);
  // console.log(data);
  // console.log(data[key]);
  function getValue(object, path) {
    var array = path.split('.');
    var current = object;
    for (var i = 0; i < array.length; i++) {
      current = current[array[i]];
    }
    return current;
  }
  let keys = key.split(',');
  let onlyKey = keys[0];
  let replace = null;
  let value = getValue(data, onlyKey);
  if (value)
    return value;
  if (keys[1]) {
    replace = keys[1];
    return replace;
  }
  return "{}";
}
window.userContactsCount = function () {
  var userContactsCount = document.getElementById("userContactsCount");
  if (userContactsCount) {
    userContactsCount.classList.remove('gradient-red', 'gradient-orange', 'gradient-yellow', 'gradient-green', 'gradient-mint', 'gradient-grass');
    let totalContacts = window.getStorage("totalContacts");
    if (totalContacts) {
      if (totalContacts > 99) {
        userContactsCount.firstElementChild.innerText = "99+";
      } else {
        userContactsCount.firstElementChild.innerText = totalContacts;
      }
      if (totalContacts < 50) {
        userContactsCount.classList.add("gradient-red");
      } else if (totalContacts >= 50 && totalContacts < 75) {
        userContactsCount.classList.add("gradient-orange");
      } else if (totalContacts >= 75 && totalContacts < 100) {
        userContactsCount.classList.add("gradient-yellow");
      } else if (totalContacts >= 100 && totalContacts < 125) {
        userContactsCount.classList.add("gradient-mint");
      } else if (totalContacts >= 125 && totalContacts < 150) {
        userContactsCount.classList.add("gradient-green");
      } else {
        userContactsCount.classList.add("gradient-grass");
      }
    } else {
      userContactsCount.firstElementChild.innerText = 0;
      userContactsCount.classList.add("gradient-red");
    }
  }
}
window.userPurposesCount = function () {
  var userPurposesCount = document.getElementById("userPurposesCount");
  if (userPurposesCount) {
    userPurposesCount.classList.remove('gradient-red', 'gradient-orange', 'gradient-yellow', 'gradient-green', 'gradient-mint', 'gradient-grass');
    let totalPurposes = window.getStorage("totalPurposes");
    if (totalPurposes) {
      if (totalPurposes > 99) {
        userPurposesCount.firstElementChild.innerText = "99+";
      } else {
        userPurposesCount.firstElementChild.innerText = totalPurposes;
      }
      if (totalPurposes < 10) {
        userPurposesCount.classList.add("gradient-red");
      } else if (totalPurposes >= 10 && totalPurposes < 20) {
        userPurposesCount.classList.add("gradient-orange");
      } else if (totalPurposes >= 20 && totalPurposes < 30) {
        userPurposesCount.classList.add("gradient-yellow");
      } else if (totalPurposes >= 30 && totalPurposes < 40) {
        userPurposesCount.classList.add("gradient-mint");
      } else if (totalPurposes >= 40 && totalPurposes < 50) {
        userPurposesCount.classList.add("gradient-green");
      } else {
        userPurposesCount.classList.add("gradient-grass");
      }
    } else {
      userPurposesCount.firstElementChild.innerText = 0;
      userPurposesCount.classList.add("gradient-red");
    }
  }
}
window.userGetCount = async function () {
  let totalContacts = window.getStorage("totalContacts");
  let totalPurposes = window.getStorage("totalPurposes");

  if (totalPurposes == null || totalContacts == null) {

    await cordova.plugin.http.get(window.api + "userGetCount", {}, { Authorization: 'Bearer ' + window.getToken() }, function (response) {
      try {
        response.data = JSON.parse(response.data);
        // console.log(response.data);

        window.setStorage("totalContacts", response.data.contacts);
        window.setStorage("totalPurposes", response.data.purposes);
        window.userContactsCount();
        window.userPurposesCount();

      } catch (e) {
        window.notify(false, e);
      }
    }, function (response) {
      let res = JSON.parse(response.error);
      window.notify(false, res.message);
    });

  } else {
    window.userContactsCount();
    window.userPurposesCount();
  }
}
// #endregion

document.addEventListener("DOMContentLoaded", () => {
  ("use strict");

  let isPwa = true;
  let ikal = true;
  var nCoach = "nCoach";
  var tren = 1;
  var stefany = false;
  var toddrick = "http://localhost:8000/";
  var armaan = "_service-worker.js";

  // window.getUrlCheck = function(val){
  //   let url = window.location;
  //   return url.pathname.contains(val);
  // }

  function init() {
    var josmarie, cesia, mekel;

    // setTimeout(() => {
      
    //   var allselect = document.querySelectorAll("select");
    //   allselect.forEach(element => {      
    //     element.addEventListener("click", armondo => {
    //       var customdata = armondo.target.children;
    //       console.log(armondo);
    //       console.log(customdata);
    //       let str = [...customdata].reduce(function(str, data, index) {
    //         return str.concat(`<div class="col-12"><h4 class="font-14 text-end">${data.text}</h4></div>
    //         <div class="divider divider-margins w-100 mt-2 mb-2"></div>`);
    //       }, '');
    //       var customrow = document.getElementById("customSelectData");
    //       customrow.innerHTML = str+str;
    //       console.log(armondo.target.children);
    //       console.log(armondo);
    //       window.modalOpen("customSelect",false);
    //     });
    //     // element.setAttribute("disabled","disabled")
    //   });
    // }, 1000);
    

    var dejahna = document.getElementsByClassName("menu-hider");
    if (!dejahna.length) {
      document.body.innerHTML += '<div class="menu-hider"></div>';
    }
    ;
    // let menuUser = document.getElementById("menu-user");
    // if(menuUser){
    //   let user = window.getUser();
    //   document.getElementById("menuUserName").innerHTML = user.name;
    //   document.getElementById("menuUserCompany").innerHTML = user.id;
    // }
    // ;
    // window.lazyLoadOptions = {
    //   // Your custom settings go here
    // };
    // // Listen to the initialization event
    // // and get the instance of LazyLoad
    // window.addEventListener(
    //   "LazyLoad::Initialized",
    //   function (event) {
    //     window.lazyLoadInstance = event.detail.instance;
    //   },
    //   false
    // );
    let footerBar = document.getElementById("footer-bar");
    if (footerBar) {
      let url = window.location.pathname;
      // let parh = url.pathname.contains(val);
      let className = "active-nav";
      let footerMenu1 = document.getElementById("footerMenu1");
      let footerMenu2 = document.getElementById("footerMenu2");
      let footerMenu3 = document.getElementById("footerMenu3");
      let footerMenu4 = document.getElementById("footerMenu4");

      if (url.includes("anasayfa")) {
        footerMenu1.classList.add(className);
      } else if (url.includes("kisi-listem") || url.includes("hedeflerim") || url.includes("vizyon-panosu") || url.includes("ajanda")) {
        footerMenu2.classList.add(className);
      } else if (url.includes("takim")) {
        footerMenu3.classList.add(className);
      } else if (url.includes("kazanclar")) {
        footerMenu4.classList.add(className);
      }
    }
    ;

    /*
      aegaee
    */

    document.addEventListener("deviceready", onDeviceReady2, false);
    function onDeviceReady2() {
      let appVersion = document.getElementById("appVersion");
      if (appVersion) {
        
        cordova.getAppVersion.getVersionNumber(function (version) {
          appVersion.innerHTML = version;
        });
      }
      ;
      let token = window.getToken();
      if (token) {
        if(window.userPremium()){
          var isPremium = document.querySelectorAll(".isPremium");
          isPremium.forEach(row => {
            row.style.display = "inline-block";
          });
          var isNormalUser = document.querySelectorAll(".isNormalUser");
          isNormalUser.forEach(row => {
            row.remove();
          });
        }else{
          var isNormalUser = document.querySelectorAll(".isNormalUser");
          isNormalUser.forEach(row => {
            row.style.display = "flex";
          });
        }
        window.userGetCount();

        // window.userContactsCount();
        // window.userPurposesCount();

        // document.getElementById("export").innerHTML = device.uuid;

        async function notificationTokenFunc(token) {
          window.setStorage("notificationToken", token);
          await cordova.plugin.http.post(window.api + "usernotifications/addDevice", {
            token: token,
            platform: device.platform,
            uuid: device.uuid,
            version: device.version,
          }, { Authorization: 'Bearer ' + window.getToken() }, function (response) {
            try {
              // response.data = JSON.parse(response.data);
            } catch (e) {
              window.notify(false, e);
            }
          }, function (response) {
            let res = JSON.parse(response.error);
            window.notify(false, res.message);
          });
        }

        async function notificationStatusFunc(status) {
          let notificationToken = window.getStorage("notificationToken");
            //window.notify(false, (Boolean(notificationStatus)==Boolean(status)) + " - "+ notificationStatus +" - "+  status);
            
          // alert(notificationStatus);
          // alert(status);
          // if((!notificationStatus && !status) || (notificationStatus && status)){
          //   return false;
          // }
          // if(notificationStatus != true && status != true){
          //   return false;
          // }
          //window.notify(false, "girmedi");
          if(notificationToken){
            await cordova.plugin.http.put(window.api + "usernotifications/updateDevice", {
              token: notificationToken,
              status: status,
              platform: device.platform,
              uuid: device.uuid,
              version: device.version,
            }, { Authorization: 'Bearer ' + window.getToken() }, function (response) {
              try {
                response.data = JSON.parse(response.data);
                window.setStorage("notificationStatus", status.toString());
              } catch (e) {
                window.notify(false, e);
              }
            }, function (response) {
              let res = JSON.parse(response.error);
              window.notify(false, res.message);
            });
          }
        }

        let notificationToken = window.getStorage("notificationToken");
        if(!notificationToken){
          (async() => {
            cordova.plugins.firebase.messaging.getToken().then(function(token) {
              notificationTokenFunc(token);
            });
          })();
        }
        
        (async() => {
          let notificationStatus = window.getStorage("notificationStatus");
          // alert(notificationStatus);
          // alert(!!notificationStatus);
          cordova.plugins.firebase.messaging.requestPermission({forceShow: true}).then(function() {
            
            if(notificationStatus=="false"){
              notificationStatusFunc("true");
            }
          }).catch(function() {
            
            // window.setStorage("notificationStatus", false);
            if(notificationStatus=="true"){
              notificationStatusFunc("false");
            }
          });
        })();

        function firebaseMessage(payload) {
          // document.getElementById("export").innerHTML = JSON.stringify(payload);
          if(payload.type=="addUserToTeam"){
            window.location.href='takim-detay.html?id=' + payload.notification_id;
          }
          if(payload.type=="newLiveBroadcast"){
            window.location.href='canli-yayin-detay.html?id=' + payload.notification_id;
          }
        }
        
        cordova.plugins.firebase.messaging.onMessage(function(payload) {
          firebaseMessage(payload);
          // firebaseMessage(payload);
          // document.getElementById("export").innerHTML = "onMessage === "+JSON.stringify(payload);
          // alert("New foreground FCM message: ", payload);
        });
        cordova.plugins.firebase.messaging.onBackgroundMessage(function(payload) {
          firebaseMessage(payload);
          // document.getElementById("export").innerHTML = "onBackgroundMessage === "+JSON.stringify(payload);
          // alert("New background FCM message: ", payload);
        });
      }
      // // cordova.plugins.firebase.messaging.requestPermission({forceShow: true}).then(function() {
      // //     alert("You'll get foreground notifications when a push message arrives");
      // // });
      
      
      // cordova.plugins.firebase.messaging.requestPermission().then(function() {
      //   alert("ok");
      //   // await cordova.plugin.http.get(window.api + "usernotifications/addDevice", {}, { Authorization: 'Bearer ' + window.getToken() }, function (response) {
      //   //   try {
      //   //     response.data = JSON.parse(response.data);
      //   //     window.setStorage("notificationStatus", true);

      //   //   } catch (e) {
      //   //     window.notify(false, e);
      //   //   }
      //   // }, function (response) {
      //   //   let res = JSON.parse(response.error);
      //   //   window.notify(false, res.message);
      //   // });
        
      // }).catch(function() {
        
      //   alert("error");
      // });

      
    }
    // let menuUserImage = document.getElementById("menuUserImage");
    // if(menuUserImage){
    //   let user = window.getUser();
    //   if(user.image){
    //     menuUserImage.src = window.server+"customers/"+user.image;
    //   }
    // }
    // ;
    let user = window.getUser();
    if(user){
      if(document.getElementById("usercareermenu")){
        if(user.career!=""){
          document.getElementById("usercareermenu").innerHTML = "("+user.career+")";
        }
      }
    }
    var getDatas = document.querySelectorAll("[data-load]");
    getDatas.forEach(row => {

      let key = row.getAttribute("data-load");

      if (key == "userImage") {
        if (user.image) {
          window.ifUrlExist(window.server + "avatars/" + user.image, function (exists) {
            if (exists) row.src = window.server + "avatars/" + user.image;
          });
          // if(ifimage){
          // }
        }
      }

    });

    var getDatas = document.querySelectorAll("[get-data]");
    getDatas.forEach(row => {
      // console.log(row.parentElement);
      let key = row.getAttribute("get-data");
      let type = row.getAttribute("data-type");
      let data = window.getData(key);
      // console.log(type);
      if (type == "src") {
        row.src = data;
      } else if (type == "text") {
        row.text = data;
      } else if (type == "value") {
        row.value = data;
      } else {
        row.innerHTML = data;
      }
    });

    let notifyButton = document.getElementById("notify-button");
    if (notifyButton) {
      notifyButton.addEventListener("click", armondo => {
        let nblock = document.getElementById("menu-notify-block");
        nblock.classList.remove("active");
        window.menuClose("menu-notify");
      });
    }

    let logoutTrue = document.querySelector("#logout-true");
    if (logoutTrue) {
      logoutTrue.addEventListener("click", armondo => {
        window.destroyToken();
        window.destroyUser();
        window.destroyStorage("totalContacts");
        window.destroyStorage("totalPurposes");
        window.destroyStorage("notificationStatus");
        window.destroyStorage("notificationToken");
        window.location.href = "giris-yap.html";
      })
    }
    ;
    let logoutFalse = document.querySelector("#logout-false");
    if (logoutFalse) {
      logoutFalse.addEventListener("click", armondo => {
        let nblock = document.getElementById("menu-logout-block");
        nblock.classList.remove("active");
        window.menuClose("menu-logout");
      })
    }
    ;

    let logoutButton = document.querySelector("#logoutButton");
    if (logoutButton) {
      logoutButton.addEventListener("click", armondo => {
        let nblock = document.getElementById("menu-logout-block");
        nblock.classList.add("active");
        window.modalOpen("menu-logout", false);
      })
    }
    ;
    
    let userDeleteTrue = document.querySelector("#userdelete-true");
    if (userDeleteTrue) {
      let user = window.getUser();
      userDeleteTrue.addEventListener("click", armondo => {
        cordova.plugin.http.post(window.api + "users/delete", {}, { Authorization: 'Bearer ' + window.getToken() }, function (response) {
          try {
            response.data = JSON.parse(response.data);
                
            window.destroyToken();
            window.destroyUser();
            window.destroyStorage("totalContacts");
            window.destroyStorage("totalPurposes");
            window.destroyStorage("notificationStatus");
            window.destroyStorage("notificationToken");
            window.location.href = "giris-yap.html";
            
          } catch (e) {
            window.notify(false, e);
          }
        }, function (response) {
          let res = JSON.parse(response.error);
          window.notify(false, res.message);
        });
      })
    }
    ;

    let userDeleteFalse = document.querySelector("#userdelete-false");
    if (userDeleteFalse) {
      userDeleteFalse.addEventListener("click", armondo => {
        let nblock = document.getElementById("menu-user-delete-block");
        nblock.classList.remove("active");
        window.menuClose("menu-user-delete");
      })
    }
    ;

    let userDeleteButton = document.querySelector("#userDeleteButton");
    if (userDeleteButton) {
      userDeleteButton.addEventListener("click", armondo => {
        let nblock = document.getElementById("menu-user-delete-block");
        nblock.classList.add("active");
        window.modalOpen("menu-user-delete", false);
      })
    }
    ;
    document.querySelectorAll(".menu").forEach(ayja => {
      ayja.style.display = "block";
    });
    var vickii = document.querySelectorAll("input");
    if (vickii.length) {
      var tura = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
      var rogan = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
      var bomer = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
      var leam = /[A-Za-z]{2}[A-Za-z]*[ ]?[A-Za-z]*/;
      var kiali = /^(0|[1-9]\d*)$/;
      var gerette = /^(http|https)?:\/\/[a-zA-Z0-9-\.]+\.[a-z]{2,4}/;
      var reighlyn = /[A-Za-z]{2}[A-Za-z]*[ ]?[A-Za-z]*/;
      function coleen(shanei) {
        shanei.parentElement.querySelectorAll(".valid")[0].classList.remove("disabled");
        shanei.parentElement.querySelectorAll(".invalid")[0].classList.add("disabled");
      }
      function constant(gwyned) {
        gwyned.parentElement.querySelectorAll(".valid")[0].classList.add("disabled");
        gwyned.parentElement.querySelectorAll(".invalid")[0].classList.remove("disabled");
      }
      function maycee(sheriyah) {
        sheriyah.parentElement.querySelectorAll("em")[0].classList.remove("disabled");
        sheriyah.parentElement.querySelectorAll(".valid")[0].classList.add("disabled");
        sheriyah.parentElement.querySelectorAll(".invalid")[0].classList.add("disabled");
      }
      var alyxandrea = document.querySelectorAll('.input-style input:not([type="date"])');
      alyxandrea.forEach(aeva => {
        return aeva.addEventListener("keyup", ralphie => {
          if (!aeva.value == "") {
            aeva.parentElement.classList.add("input-style-active");
            // aeva.parentElement.querySelector("em").classList.add("disabled");
          } else {
            // aeva.parentElement.querySelectorAll(".valid")[0].classList.add("disabled");
            // aeva.parentElement.querySelectorAll(".invalid")[0].classList.add("disabled");
            aeva.parentElement.classList.remove("input-style-active");
            // aeva.parentElement.querySelector("em").classList.remove("disabled");
          }
        });
      });
      var tayshia = document.querySelectorAll(".input-style textarea");
      tayshia.forEach(sahim => {
        return sahim.addEventListener("keyup", kimore => {
          if (!sahim.value == "") {
            sahim.parentElement.classList.add("input-style-active");
            sahim.parentElement.querySelector("em").classList.add("disabled");
          } else {
            sahim.parentElement.classList.remove("input-style-active");
            sahim.parentElement.querySelector("em").classList.remove("disabled");
          }
        });
      });
      // var cherilyn = document.querySelectorAll(".input-style select");
      // cherilyn.forEach(isayiah => {
      //   return isayiah.addEventListener("change", syndney => {
      //     if (isayiah.value !== "default") {
      //       isayiah.parentElement.classList.add("input-style-active");
      //       isayiah.parentElement.querySelectorAll(".valid")[0].classList.remove("disabled");
      //       isayiah.parentElement.querySelectorAll(".invalid, em, span")[0].classList.add("disabled");
      //     }
      //     ;
      //     if (isayiah.value == "default") {
      //       isayiah.parentElement.querySelectorAll("span, .valid, em")[0].classList.add("disabled");
      //       isayiah.parentElement.querySelectorAll(".invalid")[0].classList.remove("disabled");
      //       isayiah.parentElement.classList.add("input-style-active");
      //     }
      //   });
      // });
      var cheralyn = document.querySelectorAll('.input-style input[type="date"]');
      cheralyn.forEach(kathrina => {
        return kathrina.addEventListener("change", shanza => {
          kathrina.parentElement.classList.add("input-style-active");
          kathrina.parentElement.querySelectorAll(".valid")[0].classList.remove("disabled");
          kathrina.parentElement.querySelectorAll(".invalid")[0].classList.add("disabled");
        });
      });
      var amajae = document.querySelectorAll(".validate-field input, .validator-field textarea");
      if (amajae.length) {
        amajae.forEach(emylee => {
          return emylee.addEventListener("keyup", juleidy => {
            var joji = emylee.getAttribute("type");
            switch (joji) {
              case "name":
                bomer.test(emylee.value) ? coleen(emylee) : constant(emylee);
                break;
              case "number":
                kiali.test(emylee.value) ? coleen(emylee) : constant(emylee);
                break;
              case "email":
                tura.test(emylee.value) ? coleen(emylee) : constant(emylee);
                break;
              case "text":
                reighlyn.test(emylee.value) ? coleen(emylee) : constant(emylee);
                break;
              case "url":
                gerette.test(emylee.value) ? coleen(emylee) : constant(emylee);
                break;
              case "tel":
                rogan.test(emylee.value) ? coleen(emylee) : constant(emylee);
                break;
              case "password":
                reighlyn.test(emylee.value) ? coleen(emylee) : constant(emylee);
                // leam.test(emylee.value) ? coleen(emylee) : constant(emylee);
                break;
            }
            ;
            if (emylee.value === "") {
              maycee(emylee);
            }
          });
        });
      }
    }
    ;
    var lynnet = document.getElementsByClassName("splide");
    if (lynnet.length) {
      var shebria = document.querySelectorAll(".single-slider");
      if (shebria.length) {
        shebria.forEach(function (glenroy) {
          var zeidan = new Splide("#" + glenroy.id, { type: "loop", autoplay: true, interval: 4e3, perPage: 1 }).mount();
          var jameis = document.querySelectorAll(".slider-next");
          var biancia = document.querySelectorAll(".slider-prev");
          jameis.forEach(suhayla => {
            return suhayla.addEventListener("click", kaneeshia => {
              zeidan.go(">");
            });
          });
          biancia.forEach(mo => {
            return mo.addEventListener("click", reylen => {
              zeidan.go("<");
            });
          });
        });
      }
      ;
      var janyah = document.querySelectorAll(".double-slider");
      if (janyah.length) {
        janyah.forEach(function (caniya) {
          var dowl = new Splide("#" + caniya.id, { type: "loop", autoplay: true, interval: 4e3, arrows: false, perPage: 2 }).mount();
        });
      }
      ;
      var ardes = document.querySelectorAll(".tripple-slider");
      if (ardes.length) {
        ardes.forEach(function (amirjon) {
          var annalisa = new Splide("#" + amirjon.id, { type: "loop", autoplay: true, padding: { left: "0px", right: "80px" }, interval: 4e3, arrows: false, perPage: 2, perMove: 1 }).mount();
        });
      }
    }
    ;
    const quintara = document.querySelectorAll('a[href="#"]');
    quintara.forEach(chesa => {
      return chesa.addEventListener("click", eldyn => {
        eldyn.preventDefault();
        return false;
      });
    });
    var record = document.querySelectorAll(".map-full");
    if (record.length) {
      var almeter = document.querySelectorAll(".show-map");
      var emarii = document.querySelectorAll(".hide-map");
      almeter[0].addEventListener("click", function (quadirah) {
        document.getElementsByClassName("card-overlay")[0].classList.add("disabled");
        document.getElementsByClassName("card-center")[0].classList.add("disabled");
        document.getElementsByClassName("hide-map")[0].classList.remove("disabled");
      });
      emarii[0].addEventListener("click", function (kong) {
        document.getElementsByClassName("card-overlay")[0].classList.remove("disabled");
        document.getElementsByClassName("card-center")[0].classList.remove("disabled");
        document.getElementsByClassName("hide-map")[0].classList.add("disabled");
      });
    }
    ;
    var kiersten = document.querySelectorAll(".todo-list a");
    kiersten.forEach(saiya => {
      return saiya.addEventListener("click", tiziana => {
        saiya.classList.toggle("opacity-50");
        saiya.querySelector("i:last-child").classList.toggle("far");
        saiya.querySelector("i:last-child").classList.toggle("fa");
        saiya.querySelector("i:last-child").classList.toggle("fa-check-square");
        saiya.querySelector("i:last-child").classList.toggle("fa-square");
        saiya.querySelector("i:last-child").classList.toggle("color-green-dark");
      });
    });
    var emmeline = document.querySelectorAll(".menu");
    // console.log(emmeline);
    if (emmeline.length) {
      var lasya = document.querySelectorAll(".menu-box-left, .menu-box-right");
      lasya.forEach(function (nkiya) {
        if (nkiya.getAttribute("data-menu-width") === "cover") {
          nkiya.style.width = "100%";
        } else {
          nkiya.style.width = nkiya.getAttribute("data-menu-width") + "px";
        }
      });
      var dmoni = document.querySelectorAll(".menu-box-bottom, .menu-box-top, .menu-box-modal");
      dmoni.forEach(function (zaeed) {
        if (zaeed.getAttribute("data-menu-width") === "cover") {
          zaeed.style.width = "100%";
          zaeed.style.height = "100%";
        } else {
          zaeed.style.width = zaeed.getAttribute("data-menu-width") + "px";
          zaeed.style.height = zaeed.getAttribute("data-menu-height") + "px";
        }
      });
      var everlener = document.querySelectorAll("[data-menu]");
      // console.log(everlener);
      var kacyn = document.querySelectorAll(".header, #footer-bar, .page-content");
      everlener.forEach(juliany => {
        return juliany.addEventListener("click", adalinda => {
          const adarryll = document.querySelectorAll(".menu-active");
          for (let fabiana = 0; fabiana < adarryll.length; fabiana++) {
            adarryll[fabiana].classList.remove("menu-active");
          }
          ;
          var charrisse = juliany.getAttribute("data-menu");
          document.getElementById(charrisse).classList.add("menu-active");
          document.getElementsByClassName("menu-hider")[0].classList.add("menu-active");
          var kasea = document.getElementById(charrisse);
          var taiyari = kasea.getAttribute("data-menu-effect");
          var alisa = kasea.classList.contains("menu-box-left");
          var dahmir = kasea.classList.contains("menu-box-right");
          var leini = kasea.classList.contains("menu-box-top");
          var lawrance = kasea.classList.contains("menu-box-bottom");
          var nickcole = kasea.offsetWidth;
          var muskan = kasea.offsetHeight;
          if (taiyari === "menu-push") {
            var nickcole = document.getElementById(charrisse).getAttribute("data-menu-width");
            if (alisa) {
              for (let janciel = 0; janciel < kacyn.length; janciel++) {
                kacyn[janciel].style.transform = "translateX(" + nickcole + "px)";
              }
            }
            ;
            if (dahmir) {
              for (let kerrie = 0; kerrie < kacyn.length; kerrie++) {
                kacyn[kerrie].style.transform = "translateX(-" + nickcole + "px)";
              }
            }
            ;
            if (lawrance) {
              for (let akenzie = 0; akenzie < kacyn.length; akenzie++) {
                kacyn[akenzie].style.transform = "translateY(-" + muskan + "px)";
              }
            }
            ;
            if (leini) {
              for (let milik = 0; milik < kacyn.length; milik++) {
                kacyn[milik].style.transform = "translateY(" + muskan + "px)";
              }
            }
          }
          ;
          if (taiyari === "menu-parallax") {
            var nickcole = document.getElementById(charrisse).getAttribute("data-menu-width");
            if (alisa) {
              for (let trevarious = 0; trevarious < kacyn.length; trevarious++) {
                kacyn[trevarious].style.transform = "translateX(" + nickcole / 10 + "px)";
              }
            }
            ;
            if (dahmir) {
              for (let arkeith = 0; arkeith < kacyn.length; arkeith++) {
                kacyn[arkeith].style.transform = "translateX(-" + nickcole / 10 + "px)";
              }
            }
            ;
            if (lawrance) {
              for (let linkyn = 0; linkyn < kacyn.length; linkyn++) {
                kacyn[linkyn].style.transform = "translateY(-" + muskan / 5 + "px)";
              }
            }
            ;
            if (leini) {
              for (let rjay = 0; rjay < kacyn.length; rjay++) {
                kacyn[rjay].style.transform = "translateY(" + muskan / 5 + "px)";
              }
            }
          }
        });
      });
      const breunna = document.querySelectorAll(".close-menu, .menu-hider");
      breunna.forEach(michelena => {
        return michelena.addEventListener("click", tareka => {
          const kanea = document.querySelectorAll(".menu-active");
          for (let kahlo = 0; kahlo < kanea.length; kahlo++) {
            kanea[kahlo].classList.remove("menu-active");
          }
          ;
          for (let dywan = 0; dywan < kacyn.length; dywan++) {
            kacyn[dywan].style.transform = "translateX(-0px)";
          }
        });
      });
    }
    ;
    const levane = document.querySelectorAll("[data-back-button]");
    if (levane.length) {
      levane.forEach(veida => {
        return veida.addEventListener("click", annettia => {
          annettia.stopPropagation;
          annettia.preventDefault;
          window.history.go(-1);
        });
      });
    }
    ;
    const dewy = document.querySelectorAll(".back-to-top-icon, .back-to-top-badge, .back-to-top");
    if (dewy.length) {
      dewy.forEach(raistlin => {
        return raistlin.addEventListener("click", sharice => {
          window.scrollTo({ top: 0, behavior: `${"smooth"}` });
        });
      });
    }
    ;
    function khahlil() {
      let culley, keevin;
      if (/iP(hone|od|ad)/.test(navigator.platform)) {
        keevin = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
        culley = { status: true, version: parseInt(keevin[1], 10), info: parseInt(keevin[1], 10) + "." + parseInt(keevin[2], 10) + "." + parseInt(keevin[3] || 0, 10) };
      } else {
        culley = { status: false, version: false, info: "" };
      }
      ;
      return culley;
    }
    let jaenelle = khahlil();
    if (jaenelle.version > 14) {
      document.querySelectorAll("#page")[0].classList.add("min-ios15");
    }
    ;
    window.cardResize();
    
    var princes = localStorage.getItem(nCoach + "-Gradient");
    if (princes) {
      document.body.setAttribute("data-gradient", "body-" + princes + "");
    }
    ;
    const dataToggleTheme = document.querySelectorAll("[data-toggle-theme]");
    function setThemeDark() {
      document.body.classList.add("theme-dark");
      document.body.classList.remove("theme-light");
      // document.body.classList.remove("theme-light", "detect-theme");
      for (let ceretha = 0; ceretha < dataToggleTheme.length; ceretha++) {
        dataToggleTheme[ceretha].checked = "checked";
      }
      ;
      localStorage.setItem(nCoach + "-theme", "dark-mode");
    }
    function setThemeLight() {
      document.body.classList.add("theme-light");
      document.body.classList.remove("theme-dark");
      // document.body.classList.remove("theme-dark", "detect-theme");
      for (let treslyn = 0; treslyn < dataToggleTheme.length; treslyn++) {
        dataToggleTheme[treslyn].checked = false;
      }
      ;
      localStorage.setItem(nCoach + "-theme", "light-mode");
    }
    function setThemeReset() {
      var gamaliel = document.querySelectorAll(".btn, .header, #footer-bar, .menu-box, .menu-active");
      for (let margarito = 0; margarito < gamaliel.length; margarito++) {
        gamaliel[margarito].style.transition = "all 0s ease";
      }
    }
    function setThemeAfter() {
      var everette = document.querySelectorAll(".btn, .header, #footer-bar, .menu-box, .menu-active");
      for (let mendi = 0; mendi < everette.length; mendi++) {
        everette[mendi].style.transition = "";
      }
    }
    function detectSetTheme() {
      const dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const light = window.matchMedia("(prefers-color-scheme: light)").matches;
      const traeven = window.matchMedia("(prefers-color-scheme: no-preference)").matches;
      // window.matchMedia("(prefers-color-scheme: dark)").addListener(e => {
      //   return e.matches && setThemeDark();
      // });
      // window.matchMedia("(prefers-color-scheme: light)").addListener(e => {
      //   return e.matches && setThemeLight();
      // });
      setThemeReset();
      if (dark) {
        setThemeDark();
      }
      ;
      if (light || traeven) {
        setThemeLight();
      }
      setTimeout(function () {
        setThemeAfter();
      }, 350);
    }
    // const dataToggleTheme = document.querySelectorAll("[data-toggle-theme]");
    // const boni = document.querySelectorAll("[data-toggle-theme]");
    dataToggleTheme.forEach(e => {
      return e.addEventListener("click", artemus => {
        if (document.body.className == "theme-light") {
          setThemeReset();
          setThemeDark();
        } else {
          if (document.body.className == "theme-dark") {
            setThemeReset();
            setThemeLight();
          }
        }
        ;
        setTimeout(function () {
          setThemeAfter();
        }, 350);
      });
    });
    // if (localStorage.getItem(nCoach + "-theme") == "dark-mode") {
    //   console.log("dark mode");
    //   for (let jesalynn = 0; jesalynn < dataToggleTheme.length; jesalynn++) {
    //     dataToggleTheme[jesalynn].checked = "checked";
    //   }
    //   ;
    //   document.body.className = "theme-dark";
    // }
    // ;
    // if (localStorage.getItem(nCoach + "-theme") == "light-mode") {
    //   console.log("light mode");
    //   document.body.className = "theme-light";
    // }
    // ;
    // if (!localStorage.getItem(nCoach + "-theme")) {
    //   detectSetTheme();
    // }
    // ;
    // if (document.body.className == "detect-theme") {
    //   detectSetTheme();
    // }
    // ;
    // const rashele = document.querySelectorAll(".detect-dark-mode");
    // rashele.forEach(tharen => {
    //   return tharen.addEventListener("click", zanisha => {
    //     document.body.classList.remove("theme-light", "theme-dark");
    //     document.body.classList.add("detect-theme");
    //     setTimeout(function () {
    //       detectSetTheme();
    //     }, 50);
    //   });
    // });
    const zalynn = document.querySelectorAll(".accordion-btn");
    if (zalynn.length) {
      zalynn.forEach(byntlee => {
        return byntlee.addEventListener("click", armondo => {
          byntlee.querySelector("i:last-child").classList.toggle("fa-rotate-180");
        });
      });
    }
    ;
    const shaquan = document.getElementsByClassName("upload-file-register");
    if (shaquan.length) {
      shaquan[0].addEventListener("change", qari, false);
      function qari(volker) {
        if (this.files && this.files[0]) {
          var brittanny = document.getElementById("registerFormImage");
          // var uploadfileregister = document.getElementById("upload-file-register");
          // uploadfileregister.value = volker.target.files[0];
          brittanny.src = URL.createObjectURL(this.files[0]);
        }
        ;
        // console.log(volker);
        const ramond = volker.target.files;
        const belisario = ramond[0].name;
        // document.getElementsByClassName("file-data")[0].classList.add("disabled");
        // document.getElementsByClassName("upload-file-data")[0].classList.remove("disabled");
        // document.getElementsByClassName("upload-file-name")[0].innerHTML = ramond[0].name;
        // document.getElementsByClassName("upload-file-modified")[0].innerHTML = ramond[0].lastModifiedDate;
        // document.getElementsByClassName("upload-file-size")[0].innerHTML = ramond[0].size / 1e3 + "kb";
        // document.getElementsByClassName("upload-file-type")[0].innerHTML = ramond[0].type;
      }
    }
    ;
    const shaquan2 = document.getElementsByClassName("upload-file-setting");
    if (shaquan2.length) {
      shaquan2[0].addEventListener("change", qari, false);
      function qari(volker) {
        if (this.files && this.files[0]) {
          var brittanny = document.getElementById("settingFormImage");
          // var uploadfileregister = document.getElementById("upload-file-register");
          // uploadfileregister.value = volker.target.files[0];
          brittanny.src = URL.createObjectURL(this.files[0]);
        }
        ;
        // console.log(volker);
        const ramond = volker.target.files;
        const belisario = ramond[0].name;
      }
    }
    ;
    const rhayne = document.querySelectorAll(".card-scale");
    if (rhayne.length) {
      rhayne.forEach(augie => {
        return augie.addEventListener("mouseenter", darhyl => {
          augie.querySelectorAll("img")[0].classList.add("card-scale-image");
        });
      });
      rhayne.forEach(timothyjames => {
        return timothyjames.addEventListener("mouseleave", daaiyah => {
          timothyjames.querySelectorAll("img")[0].classList.remove("card-scale-image");
        });
      });
    }
    ;
    const tumika = document.querySelectorAll(".card-hide");
    if (tumika.length) {
      tumika.forEach(ahkeem => {
        return ahkeem.addEventListener("mouseenter", nathifa => {
          ahkeem.querySelectorAll(".card-center, .card-bottom, .card-top, .card-overlay")[0].classList.add("card-hide-image");
        });
      });
      tumika.forEach(rufes => {
        return rufes.addEventListener("mouseleave", marene => {
          rufes.querySelectorAll(".card-center, .card-bottom, .card-top, .card-overlay")[0].classList.remove("card-hide-image");
        });
      });
    }
    ;
    const kyosha = document.querySelectorAll(".card-rotate");
    if (kyosha.length) {
      kyosha.forEach(suvali => {
        return suvali.addEventListener("mouseenter", stelle => {
          suvali.querySelectorAll("img")[0].classList.add("card-rotate-image");
        });
      });
      kyosha.forEach(anhuar => {
        return anhuar.addEventListener("mouseleave", nalisa => {
          anhuar.querySelectorAll("img")[0].classList.remove("card-rotate-image");
        });
      });
    }
    ;
    const dezmon = document.querySelectorAll(".card-grayscale");
    if (dezmon.length) {
      dezmon.forEach(etsuko => {
        return etsuko.addEventListener("mouseenter", masato => {
          etsuko.querySelectorAll("img")[0].classList.add("card-grayscale-image");
        });
      });
      dezmon.forEach(berneda => {
        return berneda.addEventListener("mouseleave", franciscojr => {
          berneda.querySelectorAll("img")[0].classList.remove("card-grayscale-image");
        });
      });
    }
    ;
    const chakela = document.querySelectorAll(".card-blur");
    if (chakela.length) {
      chakela.forEach(rayma => {
        return rayma.addEventListener("mouseenter", kalesia => {
          rayma.querySelectorAll("img")[0].classList.add("card-blur-image");
        });
      });
      chakela.forEach(moreno => {
        return moreno.addEventListener("mouseleave", xamora => {
          moreno.querySelectorAll("img")[0].classList.remove("card-blur-image");
        });
      });
    }
    ;
    var lenn = document.querySelectorAll(".check-visited");
    if (lenn.length) {
      function terelle() {
        var memori = JSON.parse(localStorage.getItem(nCoach + "_Visited_Links")) || [];
        var rami = document.querySelectorAll(".check-visited a");
        for (let jmaya = 0; jmaya < rami.length; jmaya++) {
          var earica = rami[jmaya];
          earica.addEventListener("click", function (abhirup) {
            var dhilan = this.href;
            if (memori.indexOf(dhilan) == -1) {
              memori.push(dhilan);
              localStorage.setItem(nCoach + "_Visited_Links", JSON.stringify(memori));
            }
          });
          if (memori.indexOf(earica.href) !== -1) {
            earica.className += " visited-link";
          }
        }
      }
      terelle();
    }
    ;
    var sumerlyn = document.querySelectorAll(".scroll-ad, .header-auto-show");
    if (sumerlyn.length) {
      var zacery = document.querySelectorAll(".scroll-ad");
      var kjirsten = document.querySelectorAll(".header-auto-show");
      window.addEventListener("scroll", function () {
        if (document.querySelectorAll(".scroll-ad, .header-auto-show").length) {
          function valisa() {
            zacery[0].classList.add("scroll-ad-visible");
          }
          function nicoli() {
            zacery[0].classList.remove("scroll-ad-visible");
          }
          function sidh() {
            kjirsten[0].classList.add("header-active");
          }
          function norvie() {
            kjirsten[0].classList.remove("header-active");
          }
          var zenora = window.outerWidth;
          var rejena = document.documentElement.scrollTop;
          let kenethia = rejena <= 150;
          var sharbel = rejena >= 150;
          let luvonia = zenora - rejena + 1e3 <= 150;
          if (zacery.length) {
            kenethia ? nicoli() : null;
            sharbel ? valisa() : null;
            luvonia ? nicoli() : null;
          }
          ;
          if (kjirsten.length) {
            kenethia ? norvie() : null;
            sharbel ? sidh() : null;
          }
        }
      });
    }
    ;
    var wattie = document.querySelectorAll(".stepper-add");
    var christola = document.querySelectorAll(".stepper-sub");
    if (wattie.length) {
      wattie.forEach(lavine => {
        return lavine.addEventListener("click", hennry => {
          var brayley = lavine.parentElement.querySelector("input").value;
          lavine.parentElement.querySelector("input").value = +brayley + 1;
        });
      });
      christola.forEach(taddeo => {
        return taddeo.addEventListener("click", jesika => {
          var maerose = taddeo.parentElement.querySelector("input").value;
          taddeo.parentElement.querySelector("input").value = +maerose - 1;
        });
      });
    }
    ;
    var lovel = document.querySelectorAll("[data-trigger-switch]:not([data-toggle-theme])");
    if (lovel.length) {
      lovel.forEach(nashyla => {
        return nashyla.addEventListener("click", mirinda => {
          var yesena = nashyla.getAttribute("data-trigger-switch");
          var caanan = document.getElementById(yesena);
          caanan.checked ? caanan.checked = false : caanan.checked = true;
        });
      });
    }
    ;
    var lafay = document.querySelectorAll(".classic-toggle");
    if (lafay.length) {
      lafay.forEach(amela => {
        return amela.addEventListener("click", celynn => {
          amela.querySelector("i:last-child").classList.toggle("fa-rotate-180");
          amela.querySelector("i:last-child").style.transition = "all 250ms ease";
        });
      });
    }
    ;
    var jossica = document.querySelectorAll("[data-toast]");
    if (jossica.length) {
      jossica.forEach(norietta => {
        return norietta.addEventListener("click", natae => {
          var chaeli = norietta.getAttribute("data-toast");
          var thetis = document.getElementById(chaeli);
          var thetis = new bootstrap.Toast(thetis);
          thetis.show();
        });
      });
    }
    ;
    var boban = [].slice.call(document.querySelectorAll('[data-bs-toggle="dropdown"]'));
    if (boban.length) {
      var gabby = boban.map(function (kalees) {
        return new bootstrap.Dropdown(kalees);
      });
    }
    ;
    var chadron = document.querySelectorAll(".show-business-opened, .show-business-closed, .working-hours");
    if (chadron.length) {
      var jahidi = new Date;
      var ladonte = jahidi.getDay();
      var garrad = jahidi.getHours() + "." + jahidi.getMinutes();
      var andranik = [["Sunday"], ["Monday", 9, 17], ["Tuesday", 9, 17], ["Wednesday", 9, 17], ["Thursday", 9, 17], ["Friday", 9, 17], ["Saturday", 9, 13]];
      var roene = andranik[ladonte];
      var usama = document.querySelectorAll(".show-business-opened");
      var clenton = document.querySelectorAll(".show-business-closed");
      if (garrad > roene[1] && garrad < roene[2] || garrad > roene[3] && garrad < roene[4]) {
        usama.forEach(function (lida) {
          lida.classList.remove("disabled");
        });
        clenton.forEach(function (aylahni) {
          aylahni.classList.add("disabled");
        });
      } else {
        usama.forEach(function (robann) {
          robann.classList.add("disabled");
        });
        clenton.forEach(function (obaida) {
          obaida.classList.remove("disabled");
        });
      }
      ;
      var chadron = document.querySelectorAll(".working-hours[data-day]");
      chadron.forEach(function (rosale) {
        var huldia = rosale.getAttribute("data-day");
        if (huldia === roene[0]) {
          var radric = '[data-day="' + roene[0] + '"]';
          if (garrad > roene[1] && garrad < roene[2] || garrad > roene[3] && garrad < roene[4]) {
            document.querySelectorAll(radric)[0].classList.add("bg-green-dark");
            document.querySelectorAll(radric + " p").forEach(function (bogar) {
              bogar.classList.add("color-white");
            });
          } else {
            document.querySelectorAll(radric)[0].classList.add("bg-red-dark");
            document.querySelectorAll(radric + " p").forEach(function (shalonna) {
              shalonna.classList.add("color-white");
            });
          }
        }
      });
    }
    ;
    var marlisha = document.querySelectorAll("[data-vibrate]");
    if (marlisha.length) {
      var alter = document.getElementsByClassName("start-vibrating")[0];
      var adysyn = document.getElementsByClassName("stop-vibrating")[0];
      alter.addEventListener("click", function () {
        var brice = document.getElementsByClassName("vibrate-demo")[0].value;
        window.navigator.vibrate(brice);
      });
      adysyn.addEventListener("click", function () {
        window.navigator.vibrate(0);
      });
      marlisha.forEach(foxy => {
        return foxy.addEventListener("click", oluwadurotimi => {
          var oel = foxy.getAttribute("data-vibrate");
          window.navigator.vibrate(oel);
        });
      });
    }
    ;
    var tonee = document.querySelectorAll("[data-timed-ad]");
    if (tonee.length) {
      tonee.forEach(daviaun => {
        return daviaun.addEventListener("click", daphney => {
          var rayva = daviaun.getAttribute("data-timed-ad");
          var ikeam = daviaun.getAttribute("data-menu");
          var damarieon = rayva;
          var martel = setInterval(function () {
            if (damarieon <= 1) {
              clearInterval(martel);
              document.getElementById(ikeam).querySelectorAll(".fa-times")[0].classList.remove("disabled");
              document.getElementById(ikeam).querySelectorAll(".close-menu")[0].classList.remove("no-click");
              document.getElementById(ikeam).querySelectorAll("span")[0].style.display = "none";
            } else { }
            ;
            document.getElementById(ikeam).querySelectorAll("span")[0].innerHTML = damarieon -= 1;
          }, 1e3);
        });
      });
    }
    ;
    var mairead = document.querySelectorAll("[data-auto-show-ad]");
    if (mairead.length) {
      var baillee = mairead[0].getAttribute("data-auto-show-ad");
      var deneshia = setInterval(function () {
        if (baillee <= 1) {
          clearInterval(deneshia);
          var letarsha = mairead[0].getAttribute("data-menu");
          document.getElementById(letarsha).classList.add("menu-active");
          var berj = mairead[0].getAttribute("data-timed-ad");
          var nyirah = setInterval(function () {
            if (berj <= 0) {
              clearInterval(nyirah);
              document.getElementById(letarsha).querySelectorAll(".fa-times")[0].classList.remove("disabled");
              document.getElementById(letarsha).querySelectorAll(".close-menu")[0].classList.remove("no-click");
              document.getElementById(letarsha).querySelectorAll("span")[0].style.display = "none";
            }
            ;
            document.getElementById(letarsha).querySelectorAll("span")[0].innerHTML = berj -= 1;
          }, 1e3);
        }
        ;
        baillee -= 1;
      }, 1e3);
    }
    ;
    var jadelyn = document.querySelectorAll(".reading-progress-text");
    if (jadelyn.length) {
      var wahid = jadelyn[0].innerHTML.split(" ").length;
      var ellieanna = Math.floor(wahid / 250);
      var antigone = wahid % 60;
      document.getElementsByClassName("reading-progress-words")[0].innerHTML = wahid;
      document.getElementsByClassName("reading-progress-time")[0].innerHTML = ellieanna + ":" + antigone;
    }
    ;
    var luv = document.querySelectorAll(".text-size-changer");
    if (luv.length) {
      var lilliemae = document.querySelectorAll(".text-size-increase");
      var reyniel = document.querySelectorAll(".text-size-decrease");
      var porsia = document.querySelectorAll(".text-size-default");
      lilliemae[0].addEventListener("click", function () {
        luv[0].querySelectorAll("*").forEach(function (everard) {
          const saraswati = window.getComputedStyle(everard).fontSize.split("px", 2)[0];
          everard.style.fontSize = +saraswati + 1 + "px";
        });
      });
      reyniel[0].addEventListener("click", function () {
        luv[0].querySelectorAll("*").forEach(function (nataleigh) {
          const mavery = window.getComputedStyle(nataleigh).fontSize.split("px", 2)[0];
          nataleigh.style.fontSize = +mavery - 1 + "px";
        });
      });
      porsia[0].addEventListener("click", function () {
        luv[0].querySelectorAll("*").forEach(function (alexios) {
          const janeice = window.getComputedStyle(alexios).fontSize.split("px", 2)[0];
          alexios.style.fontSize = "";
        });
      });
    }
    ;
    var keilynn = document.querySelectorAll(".qr-image");
    if (keilynn.length) {
      var jeanina = window.location.href;
      var shavy = document.getElementsByClassName("generate-qr-auto")[0];
      var anaka = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=";
      if (shavy) {
        shavy.setAttribute("src", anaka + jeanina);
      }
      ;
      var francenia = document.getElementsByClassName("generate-qr-button")[0];
      if (francenia) {
        francenia.addEventListener("click", function () {
          var miyari = document.getElementsByClassName("qr-url")[0].value;
          var lyndale = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=";
          var garvit = '<img class="mx-auto polaroid-effect shadow-l mt-4 delete-qr" width="200" src="' + lyndale + miyari + '" alt="img"><p class="font-11 text-center mb-0">' + miyari + "</p>";
          document.getElementsByClassName("generate-qr-result")[0].innerHTML = garvit;
          francenia.innerHTML = "Generate New Button";
        });
      }
    }
    ;
    if (window.location.protocol === "file:") {
      var fatuma = document.querySelectorAll("a");
      fatuma.forEach(shanetra => {
        return shanetra.addEventListener("mouseover", roxanne => { });
      });
    }
    ;
    var sylvian = document.querySelectorAll("[data-search]");
    if (sylvian.length) {
      var achary = document.querySelectorAll(".search-results");
      var jahwan = document.querySelectorAll(".search-no-results");
      var chole = document.querySelectorAll(".search-results div")[0].childElementCount;
      var yasmin = document.querySelectorAll(".search-trending");
      var shaquara = document.querySelectorAll(".clear-search")[0];
      shaquara.addEventListener("click", function () {
        sylvian[0].value = "";
        shaquara.classList.add("disabled");
        jahwan[0].classList.add("disabled");
        achary[0].classList.add("disabled-search-list");
        if (yasmin[0]) {
          yasmin[0].classList.remove("disabled");
        }
        ;
        var kadynn = document.querySelectorAll("[data-filter-item]");
        for (let jamyleth = 0; jamyleth < kadynn.length; jamyleth++) {
          kadynn[jamyleth].classList.add("disabled");
        }
      });
      function emagine() {
        var panzy = sylvian[0].value;
        var eleane = panzy.toLowerCase();
        if (eleane != "") {
          shaquara.classList.remove("disabled");
          achary[0].classList.remove("disabled-search-list");
          var shantwana = document.querySelectorAll("[data-filter-item]");
          for (let leda = 0; leda < shantwana.length; leda++) {
            var lasonja = shantwana[leda].getAttribute("data-filter-name");
            if (lasonja.includes(eleane)) {
              shantwana[leda].classList.remove("disabled");
              if (yasmin.length) {
                yasmin[0].classList.add("disabled");
              }
            } else {
              shantwana[leda].classList.add("disabled");
              if (yasmin.length) {
                yasmin[0].classList.remove("disabled");
              }
            }
            ;
            var ibby = document.querySelectorAll(".search-results div")[0].getElementsByClassName("disabled").length;
            if (ibby === chole) {
              jahwan[0].classList.remove("disabled");
              if (yasmin.length) {
                yasmin[0].classList.add("disabled");
              }
            } else {
              jahwan[0].classList.add("disabled");
              if (yasmin.length) {
                yasmin[0].classList.add("disabled");
              }
            }
          }
        }
        ;
        if (eleane === "") {
          shaquara.classList.add("disabled");
          achary[0].classList.add("disabled-search-list");
          jahwan[0].classList.add("disabled");
          if (yasmin.length) {
            yasmin[0].classList.remove("disabled");
          }
        }
      }
      sylvian[0].addEventListener("keyup", function () {
        emagine();
      });
      sylvian[0].addEventListener("click", function () {
        emagine();
      });
      var tiferet = document.querySelectorAll(".search-trending a");
      tiferet.forEach(lacarla => {
        return lacarla.addEventListener("click", shloma => {
          var aeriana = lacarla.querySelectorAll("span")[0].textContent.toLowerCase();
          sylvian[0].value = aeriana;
          sylvian[0].click();
        });
      });
    }
    ;
    var karis = document.querySelectorAll("[data-toggle-search]");
    if (karis) {
      karis.forEach(anaceli => {
        return anaceli.addEventListener("click", junaid => {
          window.scrollTo({ top: 0, behavior: `${"smooth"}` });
          document.querySelectorAll(".header")[0].classList.toggle("header-search-active");
        });
      });
    }
    ;
    // var titan = document.title;
    // var vickee = document.title;
    // var kanaiyah = window.location.href;
    // if (document.querySelectorAll(".shareToFacebook, .shareToTwitter, .shareToLinkedIn")[0]) {
    //   document.querySelectorAll(".shareToFacebook, .shareToTwitter, .shareToLinkedIn, .shareToWhatsApp, .shareToMail").forEach(priyanshu => {
    //     priyanshu.setAttribute("target", "_blank");
    //   });
    //   document.querySelectorAll(".shareToFacebook").forEach(alayzhia => {
    //     return alayzhia.setAttribute("href", "https://www.facebook.com/sharer/sharer.php?u=" + kanaiyah);
    //   });
    //   document.querySelectorAll(".shareToTwitter").forEach(johnta => {
    //     return johnta.setAttribute("href", "http://twitter.com/share?text=" + titan + "%20" + kanaiyah);
    //   });
    //   document.querySelectorAll(".shareToPinterest").forEach(hermie => {
    //     return hermie.setAttribute("href", "https://pinterest.com/pin/create/button/?url=" + kanaiyah);
    //   });
    //   document.querySelectorAll(".shareToWhatsApp").forEach(adriano => {
    //     return adriano.setAttribute("href", "whatsapp://send?text=" + kanaiyah);
    //   });
    //   document.querySelectorAll(".shareToMail").forEach(haskell => {
    //     return haskell.setAttribute("href", "mailto:?body=" + kanaiyah);
    //   });
    //   document.querySelectorAll(".shareToLinkedIn").forEach(mikilah => {
    //     return mikilah.setAttribute("href", "https://www.linkedin.com/shareArticle?mini=true&url=" + kanaiyah + "&title=" + titan + "&summary=&source=");
    //   });
    // }
    // ;
    // if (navigator.canShare) {
    //   const harbin = { title: titan, text: vickee, url: kanaiyah };
    //   var lyanno = document.querySelectorAll('[data-menu="menu-share"], [data-show-share]');
    //   if (lyanno) {
    //     lyanno.forEach(aruthur => {
    //       aruthur.addEventListener("click", async () => {
    //         akasha("menu-share", "hide", 0);
    //         try {
    //           await navigator.share(harbin);
    //         } catch (err) { }
    //       });
    //     });
    //   }
    // }
    // ;
    var kayshla = document.querySelectorAll('[data-bs-toggle="collapse"]:not(.no-effect)');
    if (kayshla.length) {
      kayshla.forEach(elisio => {
        return elisio.addEventListener("click", zoraya => {
          if (elisio.querySelectorAll("i").length) {
            elisio.querySelector("i").classList.toggle("fa-rotate-180");
          }
        });
      });
    }
    ;
    var tamarria = document.querySelectorAll(".tab-controls a");
    if (tamarria.length) {
      tamarria.forEach(function (dareese) {
        if (dareese.hasAttribute("data-active")) {
          var saajid = dareese.parentNode.getAttribute("data-highlight");
          dareese.classList.add(saajid);
          dareese.classList.add("no-click");
        }
      });
      tamarria.forEach(nicol => {
        return nicol.addEventListener("click", zaydien => {
          var analeia = nicol.parentNode.getAttribute("data-highlight");
          var yisenia = nicol.parentNode.querySelectorAll("a");
          yisenia.forEach(function (emillee) {
            emillee.classList.remove(analeia);
            emillee.classList.remove("no-click");
          });
          nicol.classList.add(analeia);
          nicol.classList.add("no-click");
        });
      });
    }
    ;
    // function akasha(ladaysia, senora, zoila) {
    //   setTimeout(function () {
    //     if (senora === "show") {
    //       return document.getElementById(ladaysia).classList.add("menu-active"), document.querySelectorAll(".menu-hider")[0].classList.add("menu-active");
    //     } else {
    //       return document.getElementById(ladaysia).classList.remove("menu-active"), document.querySelectorAll(".menu-hider")[0].classList.remove("menu-active");
    //     }
    //   }, zoila);
    // }
    var marrico = document.querySelectorAll("[data-auto-activate]");
    if (marrico.length) {
      setTimeout(function () {
        marrico[0].classList.add("menu-active");
        dejahna[0].classList.add("menu-active");
      }, 0);
    }
    ;
    var allyssah = document.getElementById("copyright-year");
    if (allyssah) {
      var parmanand = new Date;
      const elpidio = parmanand.getFullYear();
      allyssah.textContent = elpidio;
    }
    ;
    var jamessa = document.querySelectorAll(".check-age");
    if (jamessa.length) {
      jamessa[0].addEventListener("click", function () {
        var siddhan = document.querySelectorAll("#date-birth-day")[0].value;
        var arther = document.querySelectorAll("#date-birth-month")[0].value;
        var lonisha = document.querySelectorAll("#date-birth-year")[0].value;
        var melanii = 18;
        var gavan = new Date;
        gavan.setFullYear(lonisha, arther - 1, siddhan);
        var naire = new Date;
        var necola = new Date;
        necola.setFullYear(gavan.getFullYear() + melanii, arther - 1, siddhan);
        var marymae = document.querySelectorAll("#menu-age");
        var emmelynn = document.querySelectorAll("#menu-age-fail");
        var avonne = document.querySelectorAll("#menu-age-okay");
        console.log(naire);
        console.log(necola);
        console.log(arther);
        if (naire - necola > 0) {
          console.log("above 18");
          marymae[0].classList.remove("menu-active");
          avonne[0].classList.add("menu-active");
        } else {
          marymae[0].classList.remove("menu-active");
          emmelynn[0].classList.add("menu-active");
        }
        ;
        return true;
      });
    }
    ;

    // checkConnection();
    // var terrick = document.querySelectorAll(".offline-message");
    // if (!terrick.length) {
    //   const breasya = document.createElement("p");
    //   const felinda = document.createElement("p");
    //   breasya.className = "offline-message bg-red-dark color-white";
    //   breasya.textContent = "No internet connection detected";
    //   felinda.className = "online-message bg-green-dark color-white";
    //   felinda.textContent = "You are back online";
    //   document.getElementsByTagName("body")[0].appendChild(breasya);
    //   document.getElementsByTagName("body")[0].appendChild(felinda);
    // }
    // ;
    function statusOffline() {
      var karmah = document.querySelectorAll("a");
      karmah.forEach(function (amerissa) {
        var meosha = amerissa.getAttribute("href");
        if (meosha.match(/.html/)) {
          amerissa.classList.add("show-offline");
          amerissa.setAttribute("data-link", meosha);
          amerissa.setAttribute("href", "#");
        }
      });
      var johnitta = document.querySelectorAll(".show-offline");
      johnitta.forEach(garet => {
        return garet.addEventListener("click", vayden => {
          document.getElementsByClassName("offline-message")[0].classList.add("offline-message-active");
          setTimeout(function () {
            document.getElementsByClassName("offline-message")[0].classList.remove("offline-message-active");
          }, 1500);
        });
      });
    }
    function statusOnline() {
      var elizia = document.querySelectorAll("[data-link]");
      elizia.forEach(function (taimane) {
        var fariah = taimane.getAttribute("data-link");
        if (fariah.match(/.html/)) {
          taimane.setAttribute("href", fariah);
          taimane.removeAttribute("data-link", "");
        }
      });
    }

    document.addEventListener("offline", onOffline, false);
    document.addEventListener("online", onOnline, false);
    window.addEventListener("online", onOnline);
    window.addEventListener("offline", onOffline);
    function onOffline(val) {
      // console.log("online");
      window.modalOpen("menu-offline");
      document.getElementsByClassName("menu-hider")[0].classList.add("menu-hider-passive");
      statusOffline();
    }
    function onOnline(val) {
      window.menuClose("menu-offline");
      document.getElementsByClassName("menu-hider")[0].classList.remove("menu-hider-passive");
      statusOnline();
    }
    /*
    tam koruma
    
    // function onOffline(val) {
    //   var kayser = document.getElementById("preloader");
    //   if (kayser) {
    //     kayser.classList.remove("preloader-hide");
    //   }
    //   window.modalOpen("menu-offline");
    //   document.getElementsByClassName("menu-hider")[0].classList.add("menu-hider-passive");
    //   statusOffline();
    // }
    // function onOnline(val) {
    //   var kayser = document.getElementById("preloader");
    //   if (kayser) {
    //     kayser.classList.add("preloader-hide");
    //   }
    //   document.getElementsByClassName("menu-hider")[0].classList.remove("menu-hider-passive");
    //   window.menuClose("menu-offline");
    //   statusOnline();
    // }
    // document.addEventListener("offline", onOffline, false);
    // document.addEventListener("online", onOnline, false);
    // window.addEventListener("online", onOnline);
    // window.addEventListener("offline", onOffline);

    tam koruma */


    let cyniah = {
      Android: function () {
        return navigator.userAgent.match(/Android/i);
      }, iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      }, any: function () {
        return cyniah.Android() || cyniah.iOS();
      }
    };
    const tarynn = document.getElementsByClassName("show-android");
    const calix = document.getElementsByClassName("show-ios");
    const ashonti = document.getElementsByClassName("show-no-device");
    if (!cyniah.any()) {
      for (let kavanaugh = 0; kavanaugh < calix.length; kavanaugh++) {
        calix[kavanaugh].classList.add("disabled");
      }
      ;
      for (let lamart = 0; lamart < tarynn.length; lamart++) {
        tarynn[lamart].classList.add("disabled");
      }
    }
    ;
    if (cyniah.iOS()) {
      document.querySelectorAll("#page")[0].classList.add("device-is-ios");
      for (let taira = 0; taira < ashonti.length; taira++) {
        ashonti[taira].classList.add("disabled");
      }
      ;
      for (let queneisha = 0; queneisha < tarynn.length; queneisha++) {
        tarynn[queneisha].classList.add("disabled");
      }
    }
    ;
    if (cyniah.Android()) {
      document.querySelectorAll("#page")[0].classList.add("device-is-android");
      for (let monzerrat = 0; monzerrat < calix.length; monzerrat++) {
        calix[monzerrat].classList.add("disabled");
      }
      ;
      for (let tygan = 0; tygan < ashonti.length; tygan++) {
        ashonti[tygan].classList.add("disabled");
      }
    }
    ;
    var teandre = document.querySelectorAll(".otp");
    if (teandre[0]) {
      teandre.forEach(lakiah => {
        lakiah.addEventListener("focus", braylnn => {
          lakiah.value = "";
        });
        lakiah.addEventListener("input", yanelis => {
          lakiah.nextElementSibling ? lakiah.nextElementSibling.focus() : lakiah.blur();
        });
      });
    }
    ;
    // if (isPwa === true) {
    //   var htmlAtt = document.getElementsByTagName("html")[0];
    //   if (!htmlAtt.classList.contains("isPWA")) {
    //     if ("serviceWorker" in navigator) {
    //       window.addEventListener("load", function () {
    //         navigator.serviceWorker.register(armaan, { scope: toddrick });
    //       });
    //     }
    //     ;
    //     var ehlani = tren * 24;
    //     var garrad = Date.now();
    //     var majenta = localStorage.getItem(nCoach + "-PWA-Timeout-Value");
    //     if (majenta == null) {
    //       localStorage.setItem(nCoach + "-PWA-Timeout-Value", garrad);
    //     } else {
    //       if (garrad - majenta > ehlani * 60 * 60 * 1e3) {
    //         localStorage.removeItem(nCoach + "-PWA-Prompt");
    //         localStorage.setItem(nCoach + "-PWA-Timeout-Value", garrad);
    //       }
    //     }
    //     ;
        
    //   }
    //   ;
    //   htmlAtt.setAttribute("class", "isPWA");
    // }
    // ;
    // if (stefany === true) {
    //   caches.delete("workbox-runtime").then(function () { });
    //   sessionStorage.clear();
    //   caches.keys().then(clidie => {
    //     clidie.forEach(joury => {
    //       caches.delete(joury);
    //     });
    //   });
    // }
    // ;
    // var aaris = new LazyLoad;
    // var lyannie, ethereal, siyah, shelbyjean;
    // var redrick = "plugins/";
    // let nanayaa = [{ id: "uniqueID", plug: "pluginName/plugin.js", call: "pluginName/pluginName-call.js", style: "pluginName/pluginName-style.css", trigger: ".pluginTriggerClass" }, { id: "charts-js-plugin", plug: "charts/charts.js", call: "charts/charts-call-graphs.js", trigger: ".graph" }, { id: "count", plug: "countdown/countdown.js", trigger: ".countdown" }, { id: "gallery", plug: "glightbox/glightbox.js", call: "glightbox/glightbox-call.js", style: "glightbox/glightbox.css", trigger: "[data-gallery]" }, { id: "gallery-views", call: "galleryViews/gallery-views.js", trigger: ".gallery-view-controls" }, { id: "filter", plug: "filterizr/filterizr.js", call: "filterizr/filterizr-call.js", style: "filterizr/filterizr.css", trigger: ".gallery-filter" }, { id: "ba-slider", call: "before-after/before-after.js", style: "before-after/before-after.css", trigger: "#before-after-slider" }];
    // for (let kaele = 0; kaele < nanayaa.length; kaele++) {
    //   if (document.querySelectorAll("." + nanayaa[kaele].id + "-c").length) {
    //     document.querySelectorAll("." + nanayaa[kaele].id + "-c")[0].remove();
    //   }
    //   ;
    //   var kawliga = document.querySelectorAll(nanayaa[kaele].trigger);
    //   if (kawliga.length) {
    //     var itianna = document.getElementsByTagName("script")[1], samare = document.createElement("script");
    //     samare.type = "text/javascript";
    //     samare.className = nanayaa[kaele].id + "-p";
    //     samare.src = redrick + nanayaa[kaele].plug;
    //     samare.addEventListener("load", function () {
    //       if (nanayaa[kaele].call !== undefined) {
    //         var altonio = document.getElementsByTagName("script")[2], lynkin = document.createElement("script");
    //         lynkin.type = "text/javascript";
    //         lynkin.className = nanayaa[kaele].id + "-c";
    //         lynkin.src = redrick + nanayaa[kaele].call;
    //         altonio.parentNode.insertBefore(lynkin, altonio);
    //       }
    //     });
    //     if (!document.querySelectorAll("." + nanayaa[kaele].id + "-p").length && nanayaa[kaele].plug !== undefined) {
    //       itianna.parentNode.insertBefore(samare, itianna);
    //     } else {
    //       setTimeout(function () {
    //         var jaethan = document.getElementsByTagName("script")[1], gomer = document.createElement("script");
    //         gomer.type = "text/javascript";
    //         gomer.className = nanayaa[kaele].id + "-c";
    //         gomer.src = redrick + nanayaa[kaele].call;
    //         jaethan.parentNode.insertBefore(gomer, jaethan);
    //       }, 50);
    //     }
    //     ;
    //     if (nanayaa[kaele].style !== undefined) {
    //       if (!document.querySelectorAll("." + nanayaa[kaele].id + "-s").length) {
    //         var astin = document.createElement("link");
    //         astin.className = nanayaa[kaele].id + "-s";
    //         astin.rel = "stylesheet";
    //         astin.type = "text/css";
    //         astin.href = redrick + nanayaa[kaele].style;
    //         document.getElementsByTagName("head")[0].appendChild(astin);
    //       }
    //     }
    //   }
    // }


  }
  // if ("scrollRestoration" in window.history) {
  //   window.history.scrollRestoration = "manual";
  // }
  // ;
  // if (ikal === true) {
  //   if (window.location.protocol !== "file:") {
  //     const talyia = { containers: ["#page"], cache: false, animateHistoryBrowsing: false, plugins: [new SwupPreloadPlugin], linkSelector: 'a:not(.external-link):not(.default-link):not([href^="https"]):not([href^="http"]):not([data-gallery])' };
  //     const yarisleidy = new Swup(talyia);
  //     document.addEventListener("swup:pageView", kilie => {
  //       includeHTML();
  //     });
  //   }
  // }
  // ;

  async function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementsByTagName("include");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("file");
      if (file) {
        /*make an HTTP request using the attribute value as the file name:*/
        let response = await new Promise(resolve => {
          xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function () {
            if (this.readyState == 4) {
              if (this.status == 200) { elmnt.outerHTML = this.responseText; }
              if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
              /*remove the attribute, and call this function once more:*/
              elmnt.removeAttribute("file");
              includeHTML();
            }
          }
          xhttp.open("GET", file, true);
          xhttp.send();
        })
        /*exit the function:*/
        return;
      }
    }

    init();

  }
  includeHTML();
});

