document.addEventListener("DOMContentLoaded", function () { 
    
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-placeholder').innerHTML = data;
        });
    
    // const container = document.querySelector('.container1');
    // const heightInpPx = window.innerHeight * 0.75;
    // container.style.height ='${heightInPixels}px';
        
    let scrollableDiv = document.querySelector('.scrollable-container');
    let planets = document.querySelectorAll('.planet');
    scrollableDiv.scrollLeft = planets[0].offsetWidth * 5; // Scroll to the fifth element
    let currentPosition = scrollableDiv.scrollLeft;
    let margin = parseInt(window.getComputedStyle(planets[0]).marginLeft) * 2;
    let scrollAmount = planets[0].offsetWidth + margin; // Set scrollAmount

    
    planets.forEach(planet => {
        // Adding zoom in and out feature to the planets 
        planet.style.transition = "all 0.3s";
        //Enabling tooltip when hovering over the planets
        planet.addEventListener("mouseover", function() {
            document.querySelector('.toolt').style.visibility = 'visible';
        });
        planet.addEventListener('mouseleave', function() {
            document.querySelector('.toolt').style.visibility = 'hidden';
          });
        //Adding planets link function
        planet.addEventListener("click", function(e) {
            let target = e.target;
            window.location.href =  target.classList[0] + '.html';
        });
    });
        
    let index = 4;  
    // Adding event listeners to the buttons
    const buttons = document.querySelectorAll('.prev,.next');        
    buttons.forEach(button => {
        button.addEventListener("click", function() {   
            if(button.classList.contains("prev")) {
                scrollableDiv.scrollLeft -= scrollAmount;
                index --;
            } else {
                scrollableDiv.scrollLeft += scrollAmount;
                index++;
            }
            currentPosition = scrollableDiv.scrollLeft;
            //To make buttons unclickable after a certain point 
            console.log(index);
            if(index <= 1)  buttons[0].style.pointerEvents = "none";
            else buttons[0].style.pointerEvents = "auto";
            if(index >= 9) buttons[1].style.pointerEvents = "none";
            else buttons[1].style.pointerEvents = "auto";    
        });
    });
});


