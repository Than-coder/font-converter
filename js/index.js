const z_to_u = require('./font-convert/Zawgyi_To_Unicode');
const u_to_z = require('./font-convert/Unicode_To_Zawgyi');

//dom
function _(data){
  return document.querySelector(data);
};

// textarea
const unicodeText = _('#unicode');
const zawgyiText = _('#zawgyi');

// change unicode
unicodeText.addEventListener('input',(e)=> {

  let zawgyi = convertSwitch('unicode',e.target.value);

  // show zawgyi text
  zawgyiText.value = zawgyi;
  
});

// zawgyi unicode
zawgyiText.addEventListener('input',(e)=>{
  let unicode = convertSwitch('zawgyi',e.target.value);

  // show unicode text
  unicodeText.value = unicode;
})


// font switch
function convertSwitch(fontName,value){
  if(fontName === 'unicode'){
    //unicode
    return fontConvert(u_to_z,value);

  }else{
    //zawgyi
    return fontConvert(z_to_u,value);
  }
}

//font convert
function fontConvert(convert,value){
  convert.forEach(c =>{
    let from = c.from;
    let to = c.to;
    let reg = new RegExp(from,'g');
    value = value.replace(reg,to);
  })
  return value;
}

// button
const clearBtn = _('.clear');
const unicodeCopyBtn = _('.unicode-copy');
const unicodePasteBtn = _('.unicode-paste');
const zawgyiCopyBtn = _('.zawgyi-copy');
const zawgyiPasteBtn = _('.zawgyi-paste');

// clear button
clearBtn.addEventListener('click',()=>{
  unicodeText.value = '';
  zawgyiText.value = '';
})

// unicode textarea
// copy
unicodeCopyBtn.addEventListener('click',()=>{
  //textarea select
  unicodeText.select();
  // exec
  window.document.execCommand('copy');
  //alert
  window.alert('text copied');
})
// paste
unicodePasteBtn.addEventListener('click',()=>{
  //textarea paste
  unicodeText.focus();
  // exec
  window.document.execCommand('paste');
});

// zawgyi textarea
// copy
zawgyiCopyBtn.addEventListener('click',()=>{
  //textarea select
  zawgyiText.select();
  // exec
  window.document.execCommand('copy');
  //alert
  window.alert('text copied');
})
// paste
zawgyiPasteBtn.addEventListener('click',()=>{
  //textarea paste
  zawgyiText.focus();
  // exec
  window.document.execCommand('paste');
});