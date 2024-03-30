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

btn.onclick = function (){
if (sept.checked) {
    para.textContent = "september";
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