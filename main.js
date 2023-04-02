const pantalla = document.querySelector('#pantalla');
const btn = document.querySelectorAll('.calculator__container--btn');

btn.forEach(button =>{
  button.addEventListener('click', ()=>{
    const btnTouch = button.textContent;

    if(button.id === "clr"){
      pantalla.textContent = "0";
      return;
    }

    if(button.id === "borrar"){
      if(pantalla.textContent.length === 1 || pantalla.textContent === "Error"){
        pantalla.textContent = "0"
      }else{
        pantalla.textContent = pantalla.textContent.slice(0,-1);
      }
      return;
    }

    if(button.id === "equal"){
      try{
        pantalla.textContent = eval(pantalla.textContent);
      } catch{
        pantalla.textContent = "Error";
      }
        return;
    }

    if(pantalla.textContent === "0" || pantalla.textContent === "Error"){
      pantalla.textContent = btnTouch;
    }else{
    pantalla.textContent+=btnTouch
    }
  })
})