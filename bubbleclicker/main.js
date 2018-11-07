let bubbleOne = document.getElementById("bubbleOne");
let bubbleOneImg = document.getElementById("bubbleOneImg");
let bubbleTwo = document.getElementById("bubbleTwo");
let bubbleTwoImg = document.getElementById("bubbleTwoImg");
let bubbleThreeImg = document.getElementById("bubbleThreeImg");
let bubbleFour = document.getElementById("bubbleFour");
let bubbleFourImg = document.getElementById("bubbleFourImg");
let bubbleFive = document.getElementById("bubbleFive");
let bubbleFiveImg = document.getElementById("bubbleFiveImg");
let bubbleSix = document.getElementById("bubbleSix");
let bubbleSixImg = document.getElementById("bubbleSixImg");
let counter = document.getElementById("counter");
let debug = document.getElementById("debug");

/* startet das update alle sekunde */
var interval = setInterval(function() {
  shrinkOne();
  shrinkTwo();
  shrinkThree();
  shrinkFour();
  shrinkFive();
  shrinkSix();
}, 1000);

let points = 0;

let addPoints = function() {
    points = points + 1;
}


//PROGRESSBAR------------------------
/*
 *  Creates a progressbar.
 *  @param id the id of the div we want to transform in a progressbar
 *  @param duration the duration of the timer example: '10s'
 *  @param callback, optional function which is called when the progressbar reaches 0.
 */
function createProgressbar(id, duration, callback) {
  // We select the div that we want to turn into a progressbar
  var progressbar = document.getElementById(id);
  progressbar.className = 'progressbar';

  // We create the div that changes width to show progress
  var progressbarinner = document.createElement('div');
  progressbarinner.className = 'inner';

  // Now we set the animation parameters
  progressbarinner.style.animationDuration = duration;

  // Eventually couple a callback
  if (typeof(callback) === 'function') {
    progressbarinner.addEventListener('animationend', callback);
  }

  // Append the progressbar to the main progressbardiv
  progressbar.appendChild(progressbarinner);

  // When everything is set up we start the animation
  progressbarinner.style.animationPlayState = 'running';
}

addEventListener('load', function() {
  createProgressbar('progressbar1', '40s', function() {
    alert('Time out. Your Score is ');
  });
});
//-----------------------------





//GameOver--------------------------
let checkGameover = function() {
  if (statusBubbleOne === 0 && statusBubbleTwo === 0 && statusBubbleThree === 0 && statusBubbleFour === 0 && statusBubbleFive === 0 && statusBubbleSix === 0) {
    clearInterval(interval); /* stopt das update alle sekunde*/


    /* hier dein code */
    alert("hier bitte ein handling für gameover. zum beispiel ein overlay über das spiel.")
  }
}






//random animation ------------
$(document).ready(function(){
    animateDiv('.bubble-1');
    animateDiv('.bubble-2');
    animateDiv('.bubble-3');
    animateDiv('.bubble-4');
    animateDiv('.bubble-5');
    animateDiv('.bubble-6');
});

function makeNewPosition(){

    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 70;
    var w = $(window).width() - 70;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh,nw];

}

function animateDiv(myclass){
    var newq = makeNewPosition();
    $(myclass).animate({ top: newq[0], left: newq[1] }, 4000,   function(){
      animateDiv(myclass);
    });

};






/*--------bubbleOne-----------*/
let statusBubbleOne = 10;

let shrinkOne = function(e) {
  if (statusBubbleOne > 0) {

    statusBubbleOne = statusBubbleOne - 1;
    debug.innerHTML = statusBubbleOne;
    bubbleOne.style.transform = "scale(" + statusBubbleOne / 10 + ")";

} else {
  bubbleOne.classList.add("bubble-reset");
  bubbleOne.classList.remove("bubble-1");
  bubbleOneImg.src= "bubble-1.png";
  void bubbleOne.offsetWidth;     // magic...
  bubbleOne.classList.remove("bubble-reset");
  bubbleOne.classList.add("bubble-1");
  statusBubbleOne = 10
}

};


let clickerOne = function(e) {
  if(statusBubbleOne > 0) {
    addPoints()
    statusBubbleOne = statusBubbleOne + 1;

    debug.innerHTML = statusBubbleOne;
    bubbleOne.style.transform = "scale(" + statusBubbleOne / 10 + ")";
  }

  // after 15 clicks
    if (statusBubbleOne > 15) {
    console.log("bubble is now burst")
    points = points + 50;
    bubbleOneImg.src= "bubble-burst.png";

    statusBubbleOne = -1;



    // reset bubble after 2sec
    setTimeout(function() {

        bubbleOne.classList.add("bubble-reset");
        bubbleOne.classList.remove("bubble-1");
        bubbleOneImg.src= "bubble-1.png";
        void bubbleOne.offsetWidth;     // magic...
        bubbleOne.classList.remove("bubble-reset");
        bubbleOne.classList.add("bubble-1");

        statusBubbleOne = 10
    }, 2000);
  }



  counter.innerHTML = points;
};




/*--------bubbleTwo-----------*/
let statusBubbleTwo = 10;

let shrinkTwo = function(e) {
  if (statusBubbleTwo > 0) {
    statusBubbleTwo = statusBubbleTwo - 1;
    debug.innerHTML = statusBubbleTwo;
    bubbleTwo.style.transform = "scale(" + statusBubbleTwo / 10 + ")";
  } else {
      bubbleTwo.classList.add("bubble-reset");
      bubbleTwo.classList.remove("bubble-2");
      bubbleTwoImg.src= "bubble-2.png";
      void bubbleTwo.offsetWidth;     // magic...
      bubbleTwo.classList.remove("bubble-reset");
      bubbleTwo.classList.add("bubble-2");
      statusBubbleTwo = 10
  }
};

let clickerTwo = function(e) {
  if(statusBubbleTwo > 0) {
    addPoints()
    statusBubbleTwo = statusBubbleTwo + 1;

    debug.innerHTML = statusBubbleTwo;
    bubbleTwo.style.transform = "scale(" + statusBubbleTwo / 10 + ")";


  }

  // after 15 clicks
  if (statusBubbleTwo > 15) {
    console.log("bubble is now burst")
    points = points + 50;
    bubbleTwoImg.src= "bubble-burst.png";
    statusBubbleTwo = -1;


    // reset bubble after 2sec
    setTimeout(function() {

        bubbleTwo.classList.add("bubble-reset");
        bubbleTwo.classList.remove("bubble-2");
        bubbleTwoImg.src= "bubble-2.png";
        void bubbleTwo.offsetWidth;     // magic...
        bubbleTwo.classList.remove("bubble-reset");
        bubbleTwo.classList.add("bubble-2");

        statusBubbleTwo = 10
    }, 2000);
  }

  counter.innerHTML = points;
};




/*--------bubbleThree-----------*/

let statusBubbleThree = 10;

let shrinkThree = function(e) {
  if (statusBubbleThree > 0) {
    statusBubbleThree = statusBubbleThree - 1;
    debug.innerHTML = statusBubbleThree;
    bubbleThree.style.transform = "scale(" + statusBubbleThree / 10 + ")";

  } else {
      bubbleThree.classList.add("bubble-reset");
      bubbleThree.classList.remove("bubble-3");
      bubbleThreeImg.src= "bubble-3.png";
      void bubbleThree.offsetWidth;     // magic...
      bubbleThree.classList.remove("bubble-reset");
      bubbleThree.classList.add("bubble-3");
      statusBubbleThree = 10
  }
};

let clickerThree = function(e) {
  if(statusBubbleThree > 0) {
    addPoints()
    statusBubbleThree = statusBubbleThree + 1;

    debug.innerHTML = statusBubbleThree;
    bubbleThree.style.transform = "scale(" + statusBubbleThree / 10 + ")";
  }

  // after 15 clicks
  if (statusBubbleThree > 15) {
    console.log("bubble is now burst")
    points = points + 50;
    bubbleThreeImg.src= "bubble-burst.png";
    statusBubbleThree = -1;

    // reset bubble after 2sec
    setTimeout(function() {

        bubbleThree.classList.add("bubble-reset");
        bubbleThree.classList.remove("bubble-3");
        bubbleThreeImg.src= "bubble-3.png";
        void bubbleThree.offsetWidth;     // magic...
        bubbleThree.classList.remove("bubble-reset");
        bubbleThree.classList.add("bubble-3");

        statusBubbleThree = 10
    }, 2000);
  }

  counter.innerHTML = points;
};


/*--------bubbleFour-----------*/

let statusBubbleFour = 10;

let shrinkFour = function(e) {
  if (statusBubbleFour > 0) {
    statusBubbleFour = statusBubbleFour - 1;
    debug.innerHTML = statusBubbleFour;
    bubbleFour.style.transform = "scale(" + statusBubbleFour / 10 + ")";

  } else {
      bubbleFour.classList.add("bubble-reset");
      bubbleFour.classList.remove("bubble-4");
      bubbleFourImg.src= "bubble-4.png";
      void bubbleFour.offsetWidth;     // magic...
      bubbleFour.classList.remove("bubble-reset");
      bubbleFour.classList.add("bubble-4");
      statusBubbleFour = 10
  }
};

let clickerFour = function(e) {
  if(statusBubbleFour > 0) {
    addPoints()
    statusBubbleFour = statusBubbleFour + 1;

    debug.innerHTML = statusBubbleFour;
    bubbleFour.style.transform = "scale(" + statusBubbleFour / 10 + ")";
  }

  // after 15 clicks
  if (statusBubbleFour > 15) {
    console.log("bubble is now burst")
    points = points + 50;
    bubbleFourImg.src= "bubble-burst.png";
    statusBubbleFour = -1;

    // reset bubble after 2sec
    setTimeout(function() {

        bubbleFour.classList.add("bubble-reset");
        bubbleFour.classList.remove("bubble-4");
        bubbleFourImg.src= "bubble-4.png";
        void bubbleFour.offsetWidth;     // magic...
        bubbleFour.classList.remove("bubble-reset");
        bubbleFour.classList.add("bubble-4");

        statusBubbleFour = 10
    }, 2000);
  }

  counter.innerHTML = points;
};




/*--------bubbleFive-----------*/

let statusBubbleFive = 10;

let shrinkFive = function(e) {
  if (statusBubbleFive > 0) {
    statusBubbleFive = statusBubbleFive - 1;
    debug.innerHTML = statusBubbleFive;
    bubbleFive.style.transform = "scale(" + statusBubbleFive / 10 + ")";

  } else {
      bubbleFive.classList.add("bubble-reset");
      bubbleFive.classList.remove("bubble-5");
      bubbleFiveImg.src= "bubble-5.png";
      void bubbleFive.offsetWidth;     // magic...
      bubbleFive.classList.remove("bubble-reset");
      bubbleFive.classList.add("bubble-5");
      statusBubbleFive = 10
  }
};

let clickerFive = function(e) {
  if(statusBubbleFive > 0) {
    addPoints()
    statusBubbleFive = statusBubbleFive + 1;

    debug.innerHTML = statusBubbleFive;
    bubbleFive.style.transform = "scale(" + statusBubbleFive / 10 + ")";
  }

  // after 15 clicks
  if (statusBubbleFive > 15) {
    console.log("bubble is now burst")
    points = points + 50;
    bubbleFiveImg.src= "bubble-burst.png";
    statusBubbleFive = -1;

    // reset bubble after 2sec
    setTimeout(function() {

        bubbleFive.classList.add("bubble-reset");
        bubbleFive.classList.remove("bubble-5");
        bubbleFiveImg.src= "bubble-5.png";
        void bubbleFive.offsetWidth;     // magic...
        bubbleFive.classList.remove("bubble-reset");
        bubbleFive.classList.add("bubble-5");

        statusBubbleFive = 10
    }, 2000);
  }

  counter.innerHTML = points;
};



/*--------bubbleSix-----------*/

let statusBubbleSix = 10;

let shrinkSix = function(e) {
  if (statusBubbleSix > 0) {
    statusBubbleSix = statusBubbleSix - 1;
    debug.innerHTML = statusBubbleSix;
    bubbleSix.style.transform = "scale(" + statusBubbleSix / 10 + ")";
  } else {
    bubbleSix.classList.add("bubble-reset");
    bubbleSix.classList.remove("bubble-6");
    bubbleSixImg.src= "bubble-6.png";
    void bubbleSix.offsetWidth;     // magic...
    bubbleSix.classList.remove("bubble-reset");
    bubbleSix.classList.add("bubble-6");
    statusBubbleSix = 10
  }
};

let clickerSix = function(e) {
  if(statusBubbleSix > 0) {
    addPoints()
    statusBubbleSix = statusBubbleSix + 1;

    debug.innerHTML = statusBubbleSix;
    bubbleSix.style.transform = "scale(" + statusBubbleSix / 10 + ")";
  }

  // after 15 clicks
  if (statusBubbleSix > 15) {
    console.log("bubble is now burst")
    points = points + 50;
    bubbleSixImg.src= "bubble-burst.png";
    statusBubbleSix = -1;

    // reset bubble after 2sec
    setTimeout(function() {

        bubbleSix.classList.add("bubble-reset");
        bubbleSix.classList.remove("bubble-6");
        bubbleSixImg.src= "bubble-6.png";
        void bubbleSix.offsetWidth;     // magic...
        bubbleSix.classList.remove("bubble-reset");
        bubbleSix.classList.add("bubble-6");

        statusBubbleSix = 10
    }, 2000);
  }

  counter.innerHTML = points;
};

bubbleOne.addEventListener("click", clickerOne);
bubbleTwo.addEventListener("click", clickerTwo);
bubbleThree.addEventListener("click", clickerThree);
bubbleFour.addEventListener("click", clickerFour);
bubbleFive.addEventListener("click", clickerFive);
bubbleSix.addEventListener("click", clickerSix);








/*------grow------*/
/*
let clicker = function(grow) {

    bubble.setAttribute("style", "width:"+(100+points)+"px;" );
    if (points > 10) {
        points = points + 4;
    }

    else {
        points = points + 2;
    }

    counter.innerHTML = points;

}

*/
