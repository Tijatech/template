const newLocal = 0;
window.onload = function() {
      
        
        
        function slider1() {
               setInterval(() => { slide()}, 3000);
         
        var x = 0;
     function slide() {
        var slider = document.querySelector('#slider');
        var slides = slider.children;
        var l = slides.length;
       if (x < l) {
        
               slides[l-1].style.display = 'none';
               slides[x].style.display = 'grid';

                if (x > 0) {
                        slides[x-1].style.display = 'none';
                }
                x+=1;

       }      
       if (x == l) {
               x = 0;
       }

}  
        }

        slider1();
                        
         
                       
        function slider2() {
                setInterval(() => { slide()}, 3000);
          
         var x = 0;
      function slide() {
         var testi_slider = document.querySelector('#testi-slider');
        var slides = testi_slider.children;
         var l = slides.length;
        if (x < l) {
         
                slides[l-1].style.display = 'none';
                slides[x].style.display = 'grid';
 
                 if (x > 0) {
                         slides[x-1].style.display = 'none';
                 }
                 x+=1;
 
        }      
        if (x == l) {
                x = 0;
        }
 
 }  
         }
 
         slider2();
              




}


