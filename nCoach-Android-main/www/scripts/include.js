// async function includeHTML() {
//   (async () => {
//     var z, i, elmnt, file, xhttp;
//     /*loop through a collection of all HTML elements:*/
//     z = document.getElementsByTagName("include");
//     for (i = 0; i < z.length; i++) {
//       elmnt = z[i];
//       /*search for elements with a certain atrribute:*/
//       file = elmnt.getAttribute("html");
//       if (file) {
//         /*make an HTTP request using the attribute value as the file name:*/
//         let response = await new Promise(resolve => {
//           xhttp = new XMLHttpRequest();
//           xhttp.onreadystatechange = function() {
//             // console.log(this.responseText);
//             if (this.readyState == 4) {
//             if (this.status == 200) {elmnt.innerHTML = this.responseText;}
//             if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
//             /*remove the attribute, and call this function once more:*/
//             elmnt.removeAttribute("html");
//             includeHTML();
//             console.log(file);
//             }
//           }      
//           xhttp.open("GET", file, true);
//           xhttp.send();
//           /*exit the function:*/
//           return;
//         }) 
//       }
//     }
//   })()
// }

// includeHTML();

// window.onload=function(){function a(a,b){var c=/^(?:file):/,d=new XMLHttpRequest,e=0;d.onreadystatechange=function(){4==d.readyState&&(e=d.status),c.test(location.href)&&d.responseText&&(e=200),4==d.readyState&&200==e&&(a.outerHTML=d.responseText)};try{d.open("GET",b,!0),d.send()}catch(f){}}var b,c=document.getElementsByTagName("*");for(b in c)c[b].hasAttribute&&c[b].hasAttribute("include-html")&&a(c[b],c[b].getAttribute("include-html"))};