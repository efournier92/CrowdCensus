//= require jquery
//= require jquery_ujs
//= require foundation
//= require highcharts
//= require_tree .

$(function () {
  $(document).foundation();
});

$(function() {
  $.scrollify({
    section : "section",
    sectionName: "section-name"
  });
});

$(function() {
  $(".ajax_paginate").on("click", ".pagination a", function(){
    $.getScript(this.href);
    return false;
  });
});

$(function() {
  $(".ajax_paginate_ended").on("click", ".pagination a", function(){
    $.getScript(this.href);
    return false;
  });
});
