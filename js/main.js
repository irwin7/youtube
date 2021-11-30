let elVideoAdd = document.querySelector(".site-header__btn-plus")
let elBellBtn = document.querySelector(".site-header__btn-bell")
let elVoiceOpen = document.querySelector(".h-form__microphone")
let keyWordCloseBtn = document.querySelector(".h-form__x-btn")
let elVoiceClose = document.querySelector(".voice-box__close")
let elSearchInp = document.getElementById("h-form__input")
let elVideoAddOpen = document.getElementById("video-add")
let elNotfCenter = document.getElementById("notf-center")
let elOpenApps = document.getElementById("open-apps")
let elGridSpan = document.getElementById("grid-span")
let elBellIcn = document.querySelector(".bell-notf")
let elIcnAdd = document.querySelector(".video-add")
let elGridBtn = document.getElementById("grid-btn")
let elVoice = document.getElementById("voice-box")
let form = document.querySelector('.h-form');
let dark = document.getElementById('dark-l');
let elLogo = document.getElementById('logo');

elSearchInp.addEventListener("keyup",searchFormKeyWordClose)
elSearchInp.addEventListener("blur",searchFormBorderRemove)
elSearchInp.addEventListener("click",searchFormBorder)
keyWordCloseBtn.addEventListener("click",removeX)
elVoiceClose.addEventListener("click",voiceClose)
elVoiceOpen.addEventListener("click",voiceOpen)
elVideoAdd.addEventListener("blur",videoRemove)
elVideoAdd.addEventListener("click",videoAdd)
elGridBtn.addEventListener("click",openApps)
elGridBtn.addEventListener("blur",closeApps)
elBellBtn.addEventListener("click",openNotf)
elBellBtn.addEventListener("blur",closeNotf)
dark.addEventListener("click",darkLight)

function darkLight(){
  document.body.classList.toggle("light")
  if(document.body.className == "light"){
    elLogo.src = "img/logo.svg"
  }
  else{
    elLogo.src = "img/logo-dark.svg"
  }
}
function removeX(){
  keyWordCloseBtn.style.display = "none"
}
function searchFormBorder(e) {
  let inputGroup = document.querySelector('.h-form__inner-box');
  if(e.target.classList.contains('h-form__input')) {
    inputGroup.classList.add('inner-box--active');
  }
}
function searchFormBorderRemove(e) {
  let inputGroup = document.querySelector('.h-form__inner-box');
  if(e.target.classList.contains('h-form__input')) {
    inputGroup.classList.remove('inner-box--active');
  }
}
function searchFormKeyWordClose(e) {
  if(e.target) {
    if(elSearchInp.value.length >= 0) {
      keyWordCloseBtn.style.display = 'block';
    }
  }
  if(e.target) {
    if(elSearchInp.value.length <= 0) {
      keyWordCloseBtn.style.display = 'none';
    }
  }
}
function voiceOpen(){
  elVoice.style.display = "flex"
}
function voiceClose(){
  elVoice.style.display = "none"
}
function videoAdd(){
  if(elIcnAdd.className == "fal fa-video-plus video-add"){
    elIcnAdd.className = "fad fa-video-plus video-add"
    elVideoAddOpen.style.display = "block"
  }
  else{
    elIcnAdd.className = "fal fa-video-plus video-add"
    elVideoAddOpen.style.display = "none"
  }
}
function videoRemove(){
    elIcnAdd.className = "fal fa-video-plus video-add"
    elVideoAddOpen.style.display = "none"
}
function openApps(){
  elOpenApps.classList.toggle("simsim")
  elGridSpan.classList.toggle("grid-fulled")
}
function closeApps(){
    elOpenApps.classList.remove("simsim")
    elGridSpan.classList.remove("grid-fulled")
}
function openNotf(){
  if(elBellIcn.classList.contains("fal")){
    elBellIcn.className = "fas fa-bell bell-notf";
    elNotfCenter.style.display = "block"
  }
  else{
    elBellIcn.className = "fal fa-bell bell-notf";
    elNotfCenter.style.display = "none";
  }
}
function closeNotf(){
  elBellIcn.className = "fal fa-bell bell-notf";
  elNotfCenter.style.display = "none";
}