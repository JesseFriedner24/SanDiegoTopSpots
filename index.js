$(document).ready(function(){
//gets jSon file
$.getJSON("spots.json", function(result){
    $(result.topspots).each(function( key, ispot ) {
    $("#info").append("<tr><td>" + ispot.name + "</td><td>" + ispot.description + "</td><td>" + "<a href=https://www.google.com/maps?q=" 
    + ispot.location[0] + "," + ispot.location[1] +
    //append the link to button 
    "><button type='button' class= 'btn btn-primary'>Open in Google Maps!</button></a>" + "</td></tr>");
});
});
});



