const naviBtnContainer = document.getElementById('mainsection-navi-button');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');
const mainContainer = document.getElementById('programs-container');
const programs = document.getElementById('programs');
const contents = document.querySelectorAll('#programs-container>div');




let contentsWidth = contents[0].clientWidth


export const rightNavBtn =  function rightNaviBtn(){

  mainContainer.style.left = `-${contentsWidth}px`
  mainContainer.style.transition = '0.3s'

  // console.log(mainContainer.style.left);
}

export const leftNavBtn = function leftNaviBtn(){
  // console.log(naviBtnContainer);
  mainContainer.style.left = `${contentsWidth+110}px`
  mainContainer.style.transition = '0.3s'

  // console.log(mainContainer.style.left);

}