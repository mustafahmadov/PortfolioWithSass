//  $(document).ready(function(){
  
//         var mousePos = {};
      
//        function getRandomInt(min, max) {
//          return Math.round(Math.random() * (max - min + 1)) + min;
//        }
        
//         $(window).mousemove(function(e) {
//           mousePos.x = e.pageX;
//           mousePos.y = e.pageY;
//         });
        
//         $(window).mouseleave(function(e) {
//           mousePos.x = -1;
//           mousePos.y = -1;
//         });
        
//         var draw = setInterval(function(){
//           if(mousePos.x > 0 && mousePos.y > 0){
            
//             var range = 1;
            
//             var color = "background: rgb("+getRandomInt(0,255)+","+getRandomInt(0,255)+","+getRandomInt(0,255)+");";
            
//             var sizeInt = getRandomInt(5, 10);
//             size = "height: " + sizeInt + "px; width: " + sizeInt + "px;";
            
//             var left = "left: " + getRandomInt(mousePos.x-range-sizeInt, mousePos.x+range) + "px;";
            
//             var top = "top: " + getRandomInt(mousePos.y-range-sizeInt, mousePos.y+range) + "px;"; 
      
//             var style = left+top+color+size;
//             $("<div class='ball' style='" + style + "'></div>").appendTo('#wrapper').one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(){$(this).remove();}); 
//           }
//         }, 1);
//       });
const myTags = [
    'JavaScript', 'CSS3', 'HTML5',
    'Angular', 'JSON', 'React',
    'Ajax', 'Asp.Net', 'Asp.Net Core',
    'Razor Pages', 'Web Services', 'Sql Server','Ms Sql','T-Sql','Web Api','C#','TypeScript',
    'Entity Framework','Entity Framework Core','Sass','Bootstrap'
     ];
var tagCloud = TagCloud('.content', myTags,{

    // radius in px
    radius: 320,

    // animation speed
    // slow, normal, fast
    maxSpeed: 'fast',
    initSpeed: 'fast',

    // 0 = top
    // 90 = left
    // 135 = right-bottom
    direction: 135,
    
    // interact with cursor move on mouse out
    keep: true
    
  });

  let glowInTexts = document.querySelectorAll(".glowIn");

// split all text content into letters
// for each letter, wrap it with a span
// then let each span executes animation in sequence.
glowInTexts.forEach(glowInText => {
  let letters = glowInText.textContent.split("");
  glowInText.textContent = "";
  letters.forEach((letter, i) => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.style.animationDelay = `${i * 0.02}s`;
    glowInText.append(span);
  });
});
        