let bubbleOne = document.getElementById("bubbleOne");
let bubbleOneImg = document.getElementById("bubbleOneImg");
let bubbleTwo = document.getElementById("bubbleTwo");
let bubbleThree = document.getElementById("bubbleThree");
let counter = document.getElementById("counter");
let debug = document.getElementById("debug");

let points = 0;

/* startet das update alle sekunde */
var interval = setInterval(function() {
  shrinkOne();
  shrinkTwo();
  shrinkThree();
  checkGameover();
}, 1000);

let checkGameover = function() {
  if (statusBubbleOne === 0 && statusBubbleTwo === 0 && statusBubbleThree === 0) {
    clearInterval(interval); /* stopt das update alle sekunde*/


    /* hier dein code */
    alert("hier bitte ein handling für gameover. zum beispiel ein overlay über das spiel.")
  }
}


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

    bubbleOneImg.src= "bubbleburst.png";
    statusBubbleOne = -1;

    // reset bubble after 2sec
    setTimeout(function() {

        bubbleOne.classList.add("bubble-reset");
        bubbleOne.classList.remove("bubble-1");
        bubbleOneImg.src= "bubblewhite.png";
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
    bubbleTwo.style.transform = "scale(" + statusBubbleTwo / 10 + ")";
  }
};

let clickerTwo = function(e) {
  addPoints()
  statusBubbleTwo = statusBubbleTwo + 1;
  bubbleTwo.style.transform = "scale(" + statusBubbleTwo / 10 + ")";

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
  addPoints()
  statusBubbleThree = statusBubbleThree + 1;
  bubbleThree.style.transform = "scale(" + statusBubbleThree / 10 + ")";

  counter.innerHTML = points;
};

bubbleOne.addEventListener("click", clickerOne);
bubbleTwo.addEventListener("click", clickerTwo);
bubbleThree.addEventListener("click", clickerThree);

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
