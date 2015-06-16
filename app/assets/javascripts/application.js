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
  var lastRow = lastContainer.lastElementChild;
  lastRow.style.display = "none";
  console.log(containers);
  console.log(lastContainer);
  console.log(lastRow);
}
window.onload = hideLast;


function disableButton(){
  document.getElementById("update_button").disabled = true;
}

function revealLast(){
  var containers = document.getElementsByClassName("association container");
  var lastContainer = containers[containers.length-1];
  var lastRow = lastContainer.lastElementChild;
  lastRow.style.display = "block";
}
