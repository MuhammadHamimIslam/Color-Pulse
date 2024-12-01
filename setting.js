const zoomElem = document.querySelector('#zoom');
  const staticColor = document.querySelector('#bg-color-static');
 const gradientColorInput = document.querySelector('#bg-color-gradient')
  const addColorBtn = document.querySelector('.add-more');
 const FontSizeValue = document.querySelector('#font-size');
 const textColor = document.querySelector('#text-color');
 const Linear = document.querySelector('#linear');
 const Radial = document.querySelector('#radial')
 const angle = document.querySelector('#angle');
 const circle = document.querySelector('#circle');
 const ellipse = document.querySelector('#ellipse');
 const colorValue = [];

  function Zoom (){
    document.body.style.zoom = zoomElem.value;
    document.querySelector('.zoom-label').textContent = `Zoom: ${(zoomElem.value * 100)}%`
  }
  
 function StaticColorSelect(){
   document.body.style.background = staticColor.value
 }


function AddNewElement() {
 const selectedColor = gradientColorInput.value;
 const newElm = document.createElement('div');
 newElm.style.background = gradientColorInput.value;
 newElm.classList.add('preview');
 
const crossBtn = document.createElement('button');
crossBtn.textContent = '×';
 crossBtn.classList.add('cross');
 
 colorValue.push(selectedColor);
 newElm.appendChild(crossBtn);
 document.querySelector('.color-added').appendChild(newElm);
 
 updateGradient();
crossBtn.addEventListener('click',() => {
   const index = colorValue.indexOf(selectedColor);
   if (index > -1) {
 colorValue.splice(index, 1)    
   }
   newElm.remove();
   updateGradient();
   });
 }

function updateGradient() {
  const angleDiv = document.querySelector('.angle-div');
  const radialType = document.querySelector('.radial-type');
  const errorMsg = document.querySelector('.error-msg');
  let radialGradientType = circle.checked ? 'circle' : 'ellipse'; 
  
 let gradientType = Linear.checked ? `linear-gradient(${angle.value}deg,` : `radial-gradient(${radialGradientType},`;
 
 if (gradientType.includes('linear-gradient')) {
  angleDiv.style.display = 'block';
  radialType.style.display = 'none'
 } 
 else if(gradientType.includes('radial-gradient')){
   angleDiv.style.display = 'none';
   radialType.style.display = 'flex';
 }
 
 document.body.style.background = `${gradientType}${colorValue.join(',')})`;
 
 if (colorValue.length < 2) {
  errorMsg.textContent = 'Please add at least two colors for gradient!';
  document.body.style.background = '';
 }else{
   errorMsg.textContent = '';
 }
}


 function adjustFontSize (){
   document.body.style.fontSize = `${FontSizeValue.value}px`;
   
 document.querySelector('label[for="font-size"]').textContent = `Font Size:${FontSizeValue.value}px`
 }
 
 function adjustTextColor(){
 document.querySelectorAll('*').forEach((item) => item.style.color = textColor.value
)
 }

// setting tab toggling functionality 
const tabBtn = document.querySelectorAll('.nav-btn');

const tabContent = document.querySelectorAll('.tabContent');

tabBtn.forEach(button => {
button.addEventListener('click',() => {
 tabBtn.forEach(btn => btn.classList.remove('active')); 
tabContent.forEach(content => content.classList.remove('active'));  
  
button.classList.add('active'); 
document.getElementById(button.dataset.tab).classList.add('active');
  })
});
// set home tab as active 
tabBtn[0].classList.add('active');
tabContent[0].classList.add('active');
 // event listeners 
zoomElem.addEventListener('input',Zoom);
  staticColor.addEventListener('change',StaticColorSelect);
  FontSizeValue.addEventListener('input',adjustFontSize);
  textColor.addEventListener('change',adjustTextColor);
  angle.addEventListener('input',updateGradient);
 document.querySelector('.add-more').addEventListener('click',AddNewElement); 
  Zoom();
  adjustFontSize();
[Linear, Radial, circle, ellipse, document.querySelector('#gradient')].forEach(elm => elm.addEventListener('change',updateGradient))
// reset btn functionality 
document.querySelector('.reset').addEventListener('click',() => {
  document.body.style.background = '';
})