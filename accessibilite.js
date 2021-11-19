var zoomIn = 1;
var NB = false;

const zooms = [
  {"prop":[
    "headerPres",
    "pageName",
    "p",
    "a",
    "strong",
    "em",
    "code",
    "li",
    "h1",
    "h2",
    "h3",
    "h4"]
  },
  {"prop":[
    "36px",
    "32px",
    "18px",
    "18px",
    "18px",
    "18px",
    "18px",
    "18px",
    "25px",
    "23px",
    "21px",
    "20px"]
  },
  {"prop":[
    "54px",
    "48px",
    "27px",
    "27px",
    "27px",
    "27px",
    "27px",
    "27px",
    "38px",
    "35px",
    "32px",
    "30px"]
  },
  {"prop":[
    "72px",
    "64px",
    "36px",
    "36px",
    "36px",
    "36px",
    "36px",
    "36px",
    "50px",
    "46px",
    "42px",
    "40px"]
  }
];

const NBText = [
  {"prop":[
    "headerPres",
    "pageName",
    "buttonZoom",
    "p",
    "a",
    "strong",
    "em",
    "code",
    "li",
    "h1",
    "h2",
    "h3",
    "h4",
    "buttonZoomSpan"]
  },
  {"prop":[
    "#FF8A00",
    "#FF8A00",
    "#EBE0EB",
    "#EBE0EB",
    "#EBE0EB",
    "#EBE0EB",
    "#EBE0EB",
    "#EBE0EB",
    "#EBE0EB",
    "#FF8A00",
    "#FF8A00",
    "#FF8A00",
    "#FF8A00",
    "#EBE0EB"]
  },
  {"prop":[
    "#000000",
    "#000000",
    "#000000",
    "#000000",
    "#000000",
    "#000000",
    "#000000",
    "#FFFFFF",
    "#000000",
    "#000000",
    "#000000",
    "#000000",
    "#000000",
    "#000000"]
  }
];

const body = document.getElementsByTagName("body");
const divLiens = document.getElementById("divLiens");
const p = document.getElementsByTagName("p");
const a = document.getElementsByTagName("a");
const strong = document.getElementsByTagName("strong");
const em = document.getElementsByTagName("em");
const code = document.getElementsByTagName("code");
const li = document.getElementsByTagName("li");
const buttonZoom = document.getElementById("buttonZoom");
const buttonZoomSpan = buttonZoom.getElementsByTagName("span");
const buttonNB = document.getElementById("buttonNB");
const headerPres = document.getElementById("headerPres");
const pageName = document.getElementById("pageName");
const h1 = document.getElementsByTagName("h1");
const h2 = document.getElementsByTagName("h2");
const h3 = document.getElementsByTagName("h3");
const h4 = document.getElementsByTagName("h4");

const zoomArray = [headerPres, pageName, p, a, strong, em, code, li, h1, h2, h3, h4];
const NBTextArray = [headerPres, pageName, buttonZoom, p, a, strong, em, code, li, h1, h2, h3, h4, buttonZoomSpan];

document.getElementById("buttonZoom").onclick = function(){
  zoomIn++;
  if (zoomIn > 3){
    zoomIn = 1;
  }
  for (let ii=0;ii<12;ii++){
    if (ii <= 1){
      zoomArray[ii].style.fontSize = zooms[zoomIn].prop[ii];
    }else{
      for (let jj=0;jj<zoomArray[ii].length;jj++){
        zoomArray[ii][jj].style.fontSize = zooms[zoomIn].prop[ii];
      }
    }
  }
}

document.getElementById("buttonNB").onclick = function(){
  if (NB == false){
    for (let ii=0;ii<14;ii++){

      if (ii <= 2){
        NBTextArray[ii].style.color = NBText[2].prop[ii];
      }else{
        for (let jj=0;jj<NBTextArray[ii].length;jj++){
          NBTextArray[ii][jj].style.color = NBText[2].prop[ii];
        }
      }
    };
    document.body.style.background = "#FFFFFF";
    buttonZoom.style.backgroundColor = "#FFFFFF";
    divLiens.style.backgroundColor = "#FFFFFF";
    divLiens.style.border = "solid 1px #000000";
    for (let jj=0;jj<code.length;jj++){
      code[jj].style.backgroundColor = "#000000";
    }
    buttonNB.style.display = "none";
    NB = true;
  }
}
