const sept = document.getElementById("sept");
const oct = document.getElementById("oct");
const nov = document.getElementById("nov");
const dec = document.getElementById("dec");
const jan = document.getElementById("jan");
const feb = document.getElementById("feb");
const mar = document.getElementById("mar");
const apr = document.getElementById("apr");
const may = document.getElementById("may");
const jun = document.getElementById("jun");
const jul = document.getElementById("jul");
const aug = document.getElementById("aug");
const btn = document.getElementById("btn");
const para = document.getElementById("para");
const date =document.getElementById("date");

btn.onclick = function (){
if (sept.checked) {
    var number = 10;

switch (date.value) {
  case "1":
    para.textContent="Virgo (August 23 - September 22): Virgos are meticulous and analytical individuals with a strong attention to detail. They are practical, reliable, and highly organized."
    break;
  case "2":
    para.textContent="Virgos are highly detail-oriented and known for their analytical thinking."
    break;
  case "3":
    para.textContent="They possess a strong sense of responsibility and are often perfectionists."
    break;
  case "4":
    para.textContent=""
    break;
  case "5":
    para.textContent=""
    break;
  case "6":
    para.textContent=""
    break;
  case "7":
    para.textContent=""
    break;
  case "8":
    para.textContent=""
    break;
  case "9":
    para.textContent=""
    break;
  case "10":
    // Code for case 10
    break;
  case "11":
    // Code for case 11
    break;
  case "12":
    // Code for case 12
    break;
  case "13":
    // Code for case 13
    break;
  case "14":
    // Code for case 14
    break;
  case "15":
    // Code for case 15
    break;
  case "16":
    // Code for case 16
    break;
  case "17":
    // Code for case 17
    break;
  case "18":
    // Code for case 18
    break;
  case "19":
    // Code for case 19
    break;
  case "20":
    // Code for case 20
    break;
  case "21":
    // Code for case 21
    break;
  case "22":
    // Code for case 22
    break;
  case "23":
    // Code for case 23
    break;
  case "24":
    // Code for case 24
    break;
  case "25":
    // Code for case 25
    break;
  case "26":
    // Code for case 26
    break;
  case "27":
    // Code for case 27
    break;
  case "28":
    // Code for case 28
    break;
  case "29":
    // Code for case 29
    break;
  case "30":
    // Code for case 30
    break;
  default:
    // Code for default case
    break;
}
} else if (oct.checked){
    para.textContent = "october";
}
else if (nov.checked){
    para.textContent = "november";
}
else if (dec.checked){
    para.textContent = "december";
}
else if (jan.checked){
    para.textContent = "january";
}
else if (feb.checked){
    para.textContent = "february";
}
else if (mar.checked){
    para.textContent = "march";
}
else if (apr.checked){
    para.textContent = "april";
}
else if (may.checked){
    para.textContent = "may";
}
else if (jun.checked){
    para.textContent = "june";
}
else if (jul.checked){
    para.textContent = "july";
}
else if (aug.checked){
    para.textContent = "augest";
}

}