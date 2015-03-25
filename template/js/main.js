$( document ).ready(function() {
    console.log( "ready!" );

    //CALCULATE WITH TO DISPLAY MOBILE NAV INSTEAD OD DT ONE
  var width = $(window).width();
  console.log(width) //NOT TOO SURE JQUERY GOT THIS RIGHT!!!!!!!
  if (width< 768){
      $( "nav" ).hide();
      $('#mobile-menu').click(function() {
          $( "nav" ).slideToggle( "slow" );  
        });
      }else{
         $( "nav" ).show();
      }
});



//WATCH RESIZE WINDOW FUNCTION
$( window ).resize(function() {
   var width = $(window).width();
   console.log(width)
   if (width< 768){
        $( "nav" ).hide();
        $('#mobile-menu').unbind('click').click(function(){
             $( "nav" ).slideToggle( "slow" );
          })
   }else{
         $( "nav" ).show();
      }
});