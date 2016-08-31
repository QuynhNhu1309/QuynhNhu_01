 $(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});

 $('#option1').on('click', function () {
    $(this).button('complete') // button text will be "finished!"
  })
 
 /* carouselButtons */
 $(document).ready(function(){
     $('#mycarousel').carousel({interval:1000});
     
     $('#btn-play').click(function(){
         $('#mycarousel').carousel('cycle');
     });
     
     $('#btn-pause').click(function(){
         $('#mycarousel').carousel('pause');
     });
     
 });

/* login href & reserve buttons Modals */
$(document).ready(function(){
    $('#btn-reserve').click(function(){
        $('#reserve_table').modal();
    });
    
    
});

function load_modal()
{
    $("#loginModal").modal();
}
 