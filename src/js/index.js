// let backgroundPositionX = 1;

document.addEventListener('DOMContentLoaded', () => {
  
  var left = 0;
  var top = 0;
  document.getElementById('pacman').style.top = top;
  document.getElementById('pacman').style.left = left;


  document.addEventListener ('keydown', (event) => {
    // initialLeft.style.left = 0;
    // initialLeft.style.top = 0;


    
         if (event.key === 'Tab') {
          let initialLeft = document.querySelector('.entity');
        initialLeft.style.left = 0;
        initialLeft.style.top = 0;
      }
      


    
  

    if(event.key ==='ArrowRight'){
      const pacman = document.querySelector ('#pacman');
      pacman.style.backgroundPositionY = '0px';
      if (pacman.style.backgroundPositionX === '85px') {
        pacman.style.backgroundPositionX = '0px';
      } else {
        pacman.style.backgroundPositionX = '85px';
      }  
      left += 85
      pacman.style.left = left + 'px';
      
    //  pacman.style.position.top = '0px';
    //  pacman.style.position.left = '0px';
    
    }

    
    
    if (event.key === 'ArrowLeft') {   
      const pacman = document.querySelector ('#pacman');
      pacman.style.backgroundPositionY = '-85px';
      if (pacman.style.backgroundPositionX === '85px') {
            pacman.style.backgroundPositionX = '0px';
          } else {
            pacman.style.backgroundPositionX = '85px';
          }
          left -= 85
          pacman.style.left = left + 'px';

  }

    if (event.key === 'ArrowDown') {   
      const pacman = document.querySelector ('#pacman');
            pacman.style.backgroundPositionY = '-255px';
            if (pacman.style.backgroundPositionX === '85px') {
                  pacman.style.backgroundPositionX = '0px';
                } else {
                  pacman.style.backgroundPositionX = '85px';
                }
                top -= 85
          pacman.style.top =  top + 'px';
              }
    
    if (event.key === 'ArrowUp') {   
      const pacman = document.querySelector ('#pacman');
            pacman.style.backgroundPositionY = '-170px';
            if (pacman.style.backgroundPositionX === '85px') {
                  pacman.style.backgroundPositionX = '0px';
                } else {
                  pacman.style.backgroundPositionX = '85px';
                }
                top += 85
                pacman.style.top =  top + 'px';
              console.log(top);
      


  
 }

  });  


  
});
