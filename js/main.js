let elSearchInp = document.getElementById("h-form__input")
let keyWordCloseBtn = document.querySelector(".h-form__x-btn")
let form = document.querySelector('.h-form');

elSearchInp.addEventListener("click",searchFormBorder)
elSearchInp.addEventListener("blur",searchFormBorderRemove)


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





// function searchFormKeyWordClose(e) {

//   if(e.target) {
      
//       if(inputBox.value.length >= 0) {
//           keyWordCloseBtn.style.display = 'block';
//       }
//   }

//   if(e.target) {
//       if(inputBox.value.length <= 0) {
//           keyWordCloseBtn.style.display = 'none';
//       }
//   }
// }







// elSearchInp.addEventListener("keyup" , (e)=>{
  
// })

// if(elSearchInp.value == " "){
//   elXBtn.classList.add("d-block")
//   console.log("salom");
// }
// if(elSearchInp.value == ""){
//   elXBtn.classList.remove("d-block")
// }