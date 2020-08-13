var openGnb = document.querySelector('.open-gnb')
var elHeader = document.querySelector('#header')

 function openNav() {
     elHeader.classList.toggle('on')
 }

openGnb.addEventListener('click', openNav)

window.addEventListener('resize', winResize)
function winResize() {
  var winWidth = this.innerWidth
  if (winWidth > 800){
      elHeader.classList.remove('on')
  }
}
