// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require d3
//= require_tree .

function hideLast(){
  var containers = document.getElementsByClassName("association container");
  var lastContainer = containers[containers.length-1];
  lastContainer.style.display = "none";
}

window.onload = hideLast;

function hideMe(element){
  var row = element.parentElement.parentElement.parentElement;
  row.style.display = "none";
  var span = element.parentElement;
  var destroyMe = span.lastElementChild;
  destroyMe.checked = true;
  console.log(row);
  console.log(span);
  console.log(destroy);
}

function disableButton(element){
  console.log(button);
  element.submit();
  element.disabled = true;
}

function revealLast(fruit) {
  var containers = document.getElementsByClassName("association container");
  var lastContainer = containers[containers.length-1];
  console.log(fruit);
  lastContainer.style.display = "block";
  console.log("containers: "+ containers);
  console.log("lastContainer: "+lastContainer);
}

function currentYPosition() {
  console.log(self.pageYOffset);
  return self.pageYOffset;
}

function elmYPosition(eID) {
    var elm = document.getElementById(eID);
    var y = elm.offsetTop;
    var node = elm;
    while (node.offsetParent && node.offsetParent != document.body) {
        node = node.offsetParent;
        y += node.offsetTop;
    } return y;
}

function smoothScroll(eID) {
    var startY = currentYPosition();
    var stopY = elmYPosition(eID);
    var distance = stopY > startY ? stopY - startY : startY - stopY;
    if (distance < 100) {
        scrollTo(0, stopY); return;
    }
    var speed = Math.round(distance / 100);
    if (speed >= 20) speed = 20;
    var step = Math.round(distance / 25);
    var leapY = stopY > startY ? startY + step : startY - step;
    var timer = 0;
    if (stopY > startY) {
        for ( var i=startY; i<stopY; i+=step ) {
            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
            leapY += step; if (leapY > stopY) leapY = stopY; timer++;
        } return;
    }
    for ( var i=startY; i>stopY; i-=step ) {
        setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
        leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
    }
}
