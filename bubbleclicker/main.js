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

let points = 0;

/* startet das update alle sekunde */
var interval = setInterval(function() {
  shrinkOne();
  shrinkTwo();
  shrinkThree();
  shrinkFour();
  shrinkFive();
  shrinkSix();
}, 1000);




let addPoints = function() {
  if (points >= 10) {
    points = points + 10;
  } else {
    points = points + 1;
  }
}



/*--------bubbleOne-----------*/
let statusBubbleOne = 10;

let shrinkOne = function(e) {
  if (statusBubbleOne > 0) {

    statusBubbleOne = statusBubbleOne - 1;
    debug.innerHTML = statusBubbleOne;
    bubbleOne.style.transform = "scale(" + statusBubbleOne / 10 + ")";
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

    bubbleOneImg.src= "bubble-burst.png";
    statusBubbleOne = -1;

    let addPoints = function() {
      if (points >= 15) {
        points = points + 50;
      }
    }

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
