$(document).ready(function(){
  $('#servicecall').click(function(){
    console.log("hi");
    $.get("/localhost:80/service1/call/service2",function(data,status){
      $('#showcontent').text(data);
      $('#showcontent').text(status);
    });
  });

});
