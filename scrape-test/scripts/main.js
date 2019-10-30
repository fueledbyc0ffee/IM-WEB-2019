// Christine code for generating new divs

//     $(document).ready(function() {
//     for (var i = 0; i < 100; i++) {
//       var newLine = $('<div></div>');

//       $('.column-wrapper').append(newLine);
//     }
// })


//////////////////////////////////////////////////////////////
// the following code is ripped and \'frankensteined' (modified) from 
// https://book-coffee-print-work.shop/
//////////////////////////////////////////////////////////////    
    
//GLOBAL VARIABLES
    var wheel = 0
    var endScroll = 0

    var x = 0
        y = 0
        z = 0
        

//EVENT LISTENER FOR THE MOUSEWHEEL
//using the onScroll function, it defines the offset amount (by 1 div line)

    window.addEventListener('wheel', function(event) {

      if(Math.abs(x) > 0.2) onScroll()
        wheel += event.y
      
      var startScroll = Math.floor(wheel / y) * y 

      if(endScroll !== startScroll) onScroll(event.y > 0)

         endScroll = startScroll

       console.log(onScroll)
      
    })

// this function creates an array from the html, splits it at the end of each line, and then offsets each line
    
    function onScroll(up) {  
      

      Array.from(document.querySelectorAll('.col')).forEach(function(HTMLElement, i) {
        var lines = HTMLElement.innerHTML.split('\n') // \n means the end of the line

        if(i % 2 === (up ? 0 : 1)) {
          lines.push(lines.shift())
        } else {
          lines.unshift(lines.pop())
        }           
        
        HTMLElement.innerHTML = lines.join('\n')   
      })
    }

  function text() {
    scrape();
  }

  console.log(text())
