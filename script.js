$( "#content_a" ).load( "https://insightdon.github.io/prototype_1/content_a.html", function( response, status, xhr ) {
  if ( status == "error" ) {
    var msg = "Sorry but there was an error: ";
    $( "#error" ).html( msg + xhr.status + " " + xhr.statusText );
  }
});
