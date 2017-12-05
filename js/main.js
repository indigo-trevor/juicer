$(document).ready(function() {
  $.get( "https://www.juicer.io/api/feeds/alpha-universe", function( data ) {
    console.log(data);
  });
});
