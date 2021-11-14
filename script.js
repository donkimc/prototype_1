// $( "#content_a" ).load( "https://insightdon.github.io/prototype_1/content_a.html", function( response, status, xhr ) {
//   if ( status == "error" ) {
//     var msg = "Sorry but there was an error: ";
//     $( "#error" ).html( msg + xhr.status + " " + xhr.statusText );
//   }
// });

// $( "#target" ).click(function() {
//   // alert( "Handler for .click() called." );
//   // $( "#content_a" ).load( "https://insightdon.github.io/prototype_1/content_b.html");
//     // $('#content_a').html('<p>hello world</p>');
//     $( "#content_a" ).load( "https://insightdon.github.io/prototype_1/content_b.html", function( response, status, xhr ) {
//       if ( status == "error" ) {
//         var msg = "Sorry but there was an error: ";
//         $( "#error" ).html( msg + xhr.status + " " + xhr.statusText );
//       }
//     });
// });


    $(document).ready(function () {

      $( "#content_a" ).load( "https://insightdon.github.io/prototype_1/content_a.html" );
        $('#quest').submit(function(e){
          e.preventDefault();
          var answ = $('#txt_answer').val();

            console.log(answ);
            if (answ == '8') {
              alert( "your answer is correct " + answ );
              $('#content_a').load( 'https://insightdon.github.io/prototype_1/content_b.html' );
            }
            else {
              alert( "your answer is wrong " + answ );
              $('#content_a').load( 'https://insightdon.github.io/prototype_1/content_c.html' );
            }
        });

    });
