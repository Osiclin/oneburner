var productLink = document.getElementById('product');
var page = document.getElementsByTagName('main');

function productDisplay(){
    document.getElementById('product-wrapper').style.display = 'block';
};

productLink.addEventListener('mouseover', productDisplay, false);


function productHide(){
    document.getElementById('product-wrapper').style.display ='none';
}

productLink.addEventListener('mouseout', productHide, false);




var ng = document.getElementById('NG');
var gh = document.getElementById('GH');
var ma = document.getElementById('ML');
var tun = document.getElementById('TN');
var eg = document.getElementById('EG');
var ken = document.getElementById('KE');
var sa = document.getElementById('ZA');
var tan = document.getElementById('TZ');

function displayCountryNote() {
    ng.addEventListener('mouseover',() => {document.getElementById('ng-note').style.display = "block"}, false);
    gh.addEventListener('mouseover',() => {document.getElementById('gh-note').style.display = "block"}, false);
    ma.addEventListener('mouseover',() => {document.getElementById('ma-note').style.display = "block"}, false);
    tun.addEventListener('mouseover',() => {document.getElementById('tun-note').style.display = "block"}, false);
    eg.addEventListener('mouseover',() => {document.getElementById('eg-note').style.display = "block"}, false);
    ken.addEventListener('mouseover',() => {document.getElementById('ken-note').style.display = "block"}, false);
    sa.addEventListener('mouseover',() => {document.getElementById('sa-note').style.display = "block"}, false);
    tan.addEventListener('mouseover',() => {document.getElementById('tan-note').style.display = "block"}, false);
}

displayCountryNote();

function closeCountryNote() {
    ng.addEventListener('mouseout',() => {document.getElementById('ng-note').style.display = "none"}, false);
    gh.addEventListener('mouseout',() => {document.getElementById('gh-note').style.display = "none"}, false);
    ma.addEventListener('mouseout',() => {document.getElementById('ma-note').style.display = "none"}, false);
    tun.addEventListener('mouseout',() => {document.getElementById('tun-note').style.display = "none"}, false);
    eg.addEventListener('mouseout',() => {document.getElementById('eg-note').style.display = "none"}, false);
    ken.addEventListener('mouseout',() => {document.getElementById('ken-note').style.display = "none"}, false);
    sa.addEventListener('mouseout',() => {document.getElementById('sa-note').style.display = "none"}, false);
    tan.addEventListener('mouseout',() => {document.getElementById('tan-note').style.display = "none"}, false);
}

closeCountryNote();