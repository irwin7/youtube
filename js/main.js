let elAccOpenBtn = document.querySelector(".site-header__btn-acc");
let elThemeExitBtn = document.querySelector(".theme-change__exit");
let elVideoAdd = document.querySelector(".site-header__btn-plus");
let elBellBtn = document.querySelector(".site-header__btn-bell");
let elCheckItem = document.querySelector(".theme-change__item");
let elVoiceOpen = document.querySelector(".h-form__microphone");
let keyWordCloseBtn = document.querySelector(".h-form__x-btn");
let elVoiceClose = document.querySelector(".voice-box__close");
let elCheckItemLight = document.querySelector(".light-theme");
let elSiteSettings = document.getElementById('site-settings');
let elThemeSetting = document.getElementById("theme-change");
let elCheckItemDark = document.querySelector(".dark-theme");
let elSearchInp = document.getElementById("h-form__input");
let elVideoAddOpen = document.getElementById("video-add");
let elNotfCenter = document.getElementById("notf-center");
let elThemeOpenBtn = document.querySelector(".theme-opt");
let elOpenApps = document.getElementById("open-apps");
let elGridSpan = document.getElementById("grid-span");
let elBellIcn = document.querySelector(".bell-notf");
let elIcnAdd = document.querySelector(".video-add");
let elGridBtn = document.getElementById("grid-btn");
let elVoice = document.getElementById("voice-box");
let elCheckIcn = document.getElementById(".check");
let form = document.querySelector('.h-form');
let elLogo = document.getElementById('logo');

elSearchInp.addEventListener("keyup",searchFormKeyWordClose);
elThemeExitBtn.addEventListener("click" , closeThemeSetting);
elSearchInp.addEventListener("blur",searchFormBorderRemove);
elThemeOpenBtn.addEventListener("click" , openThemeSetting);
elCheckItemLight.addEventListener("click" , chooseLight);
elCheckItemDark.addEventListener("click" , chooseDark);
elSearchInp.addEventListener("click",searchFormBorder);
elAccOpenBtn.addEventListener("click",settingsOpen);
elAccOpenBtn.addEventListener("blur",settingsClose);
keyWordCloseBtn.addEventListener("click",removeX);
elVoiceClose.addEventListener("click",voiceClose);
elVoiceOpen.addEventListener("click",voiceOpen);
elVideoAdd.addEventListener("blur",videoRemove);
elVideoAdd.addEventListener("click",videoAdd);
elGridBtn.addEventListener("click",openApps);
elGridBtn.addEventListener("blur",closeApps);
elBellBtn.addEventListener("click",openNotf);
elBellBtn.addEventListener("blur",closeNotf);

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
function videoRemove(){
  document.body.addEventListener("click",(e)=>{
    if(e.target.parentNode.parentNode.className == "video-addd__list" || e.target.parentNode.className == "video-addd__list" || e.target.parentNode.className == "video-addd" || e.target.parentNode.parentNode.className == "video-addd"){
    }
    else{
      elIcnAdd.className = "fal fa-video-plus video-add"
      elVideoAddOpen.style.display = "none"
    }
  });
}
function videoAdd(){
  if(elVideoAddOpen.style.display == "none"){
    elIcnAdd.className = "fad fa-video-plus video-add"
    elVideoAddOpen.style.display = "block"
  }
  else{
    elIcnAdd.className = "fal fa-video-plus video-add"
    elVideoAddOpen.style.display = "none"
  }
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
function settingsOpen(){
  if(elSiteSettings.style.display == "none"){
    elSiteSettings.style.display = "block"
  }
  else{
    elSiteSettings.style.display = "none"
  }
}
function settingsClose(e){
  document.body.addEventListener("click",(e)=>{
    if(e.target.parentNode.parentNode.parentNode.className == "site-settings__hero" || e.target.parentNode.className == "site-settings__hero" || e.target.parentNode.parentNode.className == "site-settings__header" || e.target.parentNode.className == "site-settings__header"){
    }
    else{
      elSiteSettings.style.display = "none"
    }
  })
}
function openThemeSetting(){
  elSiteSettings.style.display = "none"
  elThemeSetting.style.display = "block"
}
function closeThemeSetting(){
  elThemeSetting.style.display = "none"
}
function chooseDark(){
  elCheckItemLight.classList.remove("theme-changed")
  elCheckItemDark.classList.add("theme-changed")
  document.body.classList.remove("light")
}
function chooseLight(){
  elCheckItemDark.classList.remove("theme-changed")
  elCheckItemLight.classList.add("theme-changed")
  document.body.classList.add("light")
}