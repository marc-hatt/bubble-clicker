let bubbleOne = document.getElementById("bubbleOne")
let bubbleTwo = document.getElementById("bubbleTwo")
let bubbleThree = document.getElementById("bubbleThree")
let counter = document.getElementById("counter")
let debug = document.getElementById("debug")


let points = 0;
let statusBubbleOne = 10;


setInterval(function(){
  shrinkOne();
  shrinkTwo();
  shrinkThree();
}, 1000);

/*--------bubbleOne-----------*/
let shrinkOne = function(e) {
  if (statusBubbleOne > 0) {
    statusBubbleOne = statusBubbleOne - 1;
    debug.innerHTML = statusBubbleOne;
    bubbleOne.style.transform = 'scale('  + statusBubbleOne/10 + ')';
  }
}


let clickerOne = function(e) {
  if (points >= 10) {
    points = points + 10;
  }
  else {
    points = points + 1;
    statusBubbleOne = statusBubbleOne + 1;
    debug.innerHTML = statusBubbleOne;
    bubbleOne.style.transform = 'scale('  + statusBubbleOne/10 + ')';
  }

  counter.innerHTML = points;
}


/*--------bubbleTwo-----------*/

let statusBubbleTwo = 10;

let shrinkTwo = function(e) {
  if (statusBubbleTwo > 0) {
    statusBubbleTwo = statusBubbleTwo - 1;
    debug.innerHTML = statusBubbleTwo;
    bubbleTwo.style.transform = 'scale('  + statusBubbleTwo/10 + ')';
  }
}


let clickerTwo = function(e) {
  if (points >= 10) {
    points = points + 10;
  }
  else {
    points = points + 1;
    statusBubbleTwo = statusBubbleTwo + 1;
    debug.innerHTML = statusBubbleTwo;
    bubbleTwo.style.transform = 'scale('  + statusBubbleTwo/10 + ')';
  }

  counter.innerHTML = points;
}


/*--------bubbleThree-----------*/

let statusBubbleThree = 10;

let shrinkThree = function(e) {
  if (statusBubbleThree > 0) {
    statusBubbleThree = statusBubbleThree - 1;
    debug.innerHTML = statusBubbleThree;
    bubbleThree.style.transform = 'scale('  + statusBubbleThree/10 + ')';
  }
}


let clickerThree = function(e) {
  if (points >= 10) {
    points = points + 10;
  }
  else {
    points = points + 1;
    statusBubbleThree = statusBubbleThree + 1;
    debug.innerHTML = statusBubbleThree;
    bubbleThree.style.transform = 'scale('  + statusBubbleThree/10 + ')';
  }

  counter.innerHTML = points;
}




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
