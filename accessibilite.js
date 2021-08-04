var zoomIn = 1;
var NB = false;

const zooms = [
  {"prop":[
    "p",
    "a",
    "li",
    "headerPres",
    "headerDoc",
    "h1",
    "h2",
    "h3",
    "h4"]
  },
  {"prop":[
    "14px",
    "14px",
    "14px",
    "28px",
    "15px",
    "20px",
    "18px",
    "17px",
    "16px"]
  },
  {"prop":[
    "21px",
    "21px",
    "21px",
    "42px",
    "23px",
    "30px",
    "27px",
    "26px",
    "14px"]
  },
  {"prop":[
    "28px",
    "28px",
    "28px",
    "56px",
    "30px",
    "40px",
    "36px",
    "34px",
    "32px"]
  }
];

const NBText = [
  {"prop":[
    "p",
    "a",
    "li",
    "menu",
    "headerPres",
    "headerDoc",
    "h1",
    "h2",
    "h3",
    "h4",
    "buttonZoom",
    "buttonZoomSpan"]
  },
  {"prop":[
    "#EBE0EB",
    "#EBE0EB",
    "#EBE0EB",
    "#EBE0EB",
    "#FF8A00",
    "#EBE0EB",
    "#FF8A00",
    "#FF8A00",
    "#FF8A00",
    "#FF8A00",
    "#EBE0EB",
    "#EBE0EB"]
  },
  {"prop":[
    "#000000",
    "#000000",
    "#000000",
    "#FFFFFF",
    "#000000",
    "#000000",
    "#000000",
    "#000000",
    "#000000",
    "#000000",
    "#000000",
    "#000000"]
  }
];

const body = document.getElementsByTagName("body");
const menu = document.getElementsByClassName("horiz_menu");
const p = document.getElementsByTagName("p");
const a = document.getElementsByTagName("a");
const li = document.getElementsByTagName("li");
const buttonZoom = document.getElementById("buttonZoom");
const buttonZoomSpan = buttonZoom.getElementsByTagName("span");
const buttonNB = document.getElementById("buttonNB");
const headerPres = document.getElementById("headerPres");
const headerDoc = document.getElementById("headerDoc");
const h1 = document.getElementsByTagName("h1");
const h2 = document.getElementsByTagName("h2");
const h3 = document.getElementsByTagName("h3");
const h4 = document.getElementsByTagName("h4");

const zoomArray = [p, a, li, headerPres, headerDoc, h1, h2, h3, h4];
const NBTextArray = [p, a, li, menu, headerPres, headerDoc, h1, h2, h3, h4, buttonZoom, buttonZoomSpan];

document.getElementById("buttonZoom").onclick = function(){
  zoomIn++;
  if (zoomIn > 3){
    zoomIn = 1;
  }
  for (let ii=0;ii<8;ii++){
    if (zoomArray[ii].length > 1){
      for (let jj=0;jj<zoomArray[ii].length;jj++){
        zoomArray[ii][jj].style.fontSize = zooms[zoomIn].prop[ii];
      }
    }else if (zoomArray[ii].length != 0){
      zoomArray[ii].style.fontSize = zooms[zoomIn].prop[ii];
    }
  }
}

document.getElementById("buttonNB").onclick = function(){
  if (NB == false){
    for (let ii=0;ii<12;ii++){
      if (NBTextArray[ii].length > 1){
        for (let jj=0;jj<NBTextArray[ii].length;jj++){
          NBTextArray[ii][jj].style.color = NBText[2].prop[ii];
        }
      }else if (NBTextArray[ii].length != 0){
        NBTextArray[ii].style.color = NBText[2].prop[ii];
      }
    };
    document.body.style.background = "#FFFFFF";
    for (let jj=0;jj<menu.length;jj++){
      menu[jj].style.backgroundColor = "#000000";
    };
    buttonZoom.style.backgroundColor = "#FFFFFF";
    buttonNB.style.display = "none";
    NB = true;
  }
}