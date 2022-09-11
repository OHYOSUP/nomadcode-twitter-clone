const items = document.querySelectorAll('.fade');



export default function onloadFadeIn(){
  let i = -1 ;
  let ani = setInterval(function(){
      i++
        items[i].classList.add('fadeIn');
        items[i].style.transition = '0.5s'
        // console.log(i);  
        if(i >= items.length-1){
          
          clearInterval(ani);
        }
      },300);

      
    }
    
    
