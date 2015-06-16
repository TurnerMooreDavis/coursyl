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
  console.log(containers);
  console.log(lastContainer);
}
window.onload = hideLast;

function hideMe(element){
  alert("Ive Been Clicked!");
  // console.log(element);
  var row = element.parentElement.parentElement.parentElement;
  row.style.display = "none";
  var span = element.parentElement;
  console.log(span);

  var destroy = span.lastElementChild;
  console.log(destroy);
  destroy.checked = true;



}

function disableButton(){
  button = document.getElementById("update_button");
  console.log(button);
  button.submit();
  button.disabled = true;

}

function revealLast(){
  var containers = document.getElementsByClassName("association container");
  var lastContainer = containers[containers.length-1];
  lastContainer.style.display = "block";
  console.log(containers);
  console.log(lastContainer);
}
