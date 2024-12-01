//functionality for switching tab
const TabContent =   document.querySelectorAll('.tab-content');
const TabBtn = document.querySelectorAll('.tab-btn');
TabBtn.forEach((item,i) => {
  item.addEventListener('click',(e) => {
    TabContent.forEach((section) => {
   section.classList.remove('active');
   });
  TabBtn.forEach((btn) => {
   btn.classList.remove('active-btn')
  });
  
  TabContent[i].classList.add('active');
  e.target.classList.add('active-btn')
  })
})
// set rgb as default tab
document.querySelector('.RGB').click();
//functionality for rgb
const redRgb = document.querySelector('#red-rgb');
const greenRgb = document.querySelector('#green-rgb');
const blueRgb = document.querySelector('#blue-rgb');
const opacityRgb = document.querySelector('.alpha-rgb');
const RgbColorCode = document.querySelector('.color-rgb')
const Rgb = [redRgb,greenRgb,blueRgb,opacityRgb];
const UpdateRgb = () => {
const RgbCode = `rgba(${redRgb.value},${greenRgb.value},${blueRgb.value},${opacityRgb.value/100})`;
document.querySelector('.color_rgb').style.backgroundColor = RgbCode;
RgbColorCode.innerText = RgbCode;
}
Rgb.forEach((item) => {item.addEventListener('input',() => {
  UpdateRgb();
})})

document.querySelector('.copy-rgb').addEventListener('click',() => {
  navigator.clipboard.writeText(RgbColorCode.innerText)
})
//functionality for hexadecimal
const redHexa = document.querySelector('#red-hexa');
const greenHexa = document.querySelector('#green-hexa');
const blueHexa = document.querySelector('#blue-hexa');
const opacityHexa = document.querySelector('.alpha-hexa');
const HexaColorCode = document.querySelector('.color-hexa')
const Hexa = [redHexa,greenHexa,blueHexa,opacityHexa];
const UpdateHexa = () => {
  function ToHexa(c) {
    let hex = parseFloat(c).toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
const Red = ToHexa(redHexa.value);
const Blue = ToHexa(blueHexa.value);
const Green = ToHexa(greenHexa.value);
//const Opacity = (opacityHexa.value/100).toFixed(2);
const alpha = Math.round((opacityHexa.value/100) * 255).toString(16).padStart(2, '0');
const HexaCode =`#${Red}${Green}${Blue}${alpha}`
document.querySelector('.color_hexa').style.backgroundColor = HexaCode;
HexaColorCode.innerText = HexaCode;
}
Hexa.forEach((item) => {item.addEventListener('input',() => {
  UpdateHexa();
})})

document.querySelector('.copy-hexa').addEventListener('click',() => {
  navigator.clipboard.writeText(HexaColorCode.innerText)
})
// functionality for hsla
const Hue = document.querySelector('#hue');
const Saturation = document.querySelector('#saturation');
const Lightness = document.querySelector('#lightness');
const opacityHsla = document.querySelector('.alpha-hsla');
const HslaColorCode = document.querySelector('.color-hsla')
const Hsla = [Hue,Saturation,Lightness,opacityHsla];
const UpdateHsla = () => {
const hslaCode = `hsla(${Hue.value},${Saturation.value}%,${Lightness.value}%,${opacityHsla.value/100})`;
document.querySelector('.color_hsla').style.backgroundColor = hslaCode;
HslaColorCode.innerText = hslaCode;
}
Hsla.forEach((item) => {item.addEventListener('input',() => {
  UpdateHsla();
})})

document.querySelector('.copy-hsla').addEventListener('click',() => {
  navigator.clipboard.writeText(HslaColorCode.innerText)
})
// functionality for decrement 
document.querySelectorAll('.decrement').forEach((item) => {
  item.addEventListener('click',(e) => {
const Element = e.target.nextElementSibling;
const CurrentVlaue = parseInt(Element.value);
Element.value = CurrentVlaue - 5;
UpdateRgb();
UpdateHexa();
UpdateHsla();
  })
})
// functionality for increment
document.querySelectorAll('.increment').forEach((item) => {
  item.addEventListener('click',(e) => {
const Element = e.target.previousElementSibling;
const CurrentVlaue = parseInt(Element.value);
 Element.value = CurrentVlaue + 5;
UpdateRgb();
UpdateHexa();
UpdateHsla(); 
  })
});
//functionality for navbar toggle
document.querySelector('.hambergur-btn').addEventListener('click',() =>{
  document.querySelector('.menu').classList.toggle('open');
  document.querySelector('.navigation-item').classList.toggle('show')
} )

UpdateRgb();
UpdateHexa();
UpdateHsla();

// get the input tag of dark toggle 
const DarkToggle = document.querySelector('.dark-toggle');

// functionality for toggling dark mode 
DarkToggle.addEventListener('change',() => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('dark-mode','enabled')
  }
  else {
  localStorage.setItem('dark-mode','disabled')
  }
})
// save dark mode in local storage 
document.addEventListener('DOMContentLoaded',() => {
  const DarkModeEnabled = localStorage.getItem('dark-mode') === 'enabled' &&  document.body.classList.contains('dark-mode');
  if (DarkModeEnabled) {
  document.body.classList.add('dark-mode');
  localStorage.setItem('dark-mode','enabled');
  DarkToggle.checked = true;
  } else {
    document.body.classList.remove('dark-mode');
    DarkToggle.checked = false;
 localStorage.setItem('dark-mode', 'disabled')
  }
  
})