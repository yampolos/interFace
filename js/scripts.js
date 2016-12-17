$(document).ready(function() {

	var myScroll;
	function loaded() {
	    myScroll = new IScroll('#wrapper');
	};

    $('.drawer').drawer();

    $('#action').click(function() {
        $.fn.editable.defaults.mode = 'inline';
        $(this).editable({
                value: 2,    
                source: [
                      {value: 1, text: 'Flux'},
                      {value: 2, text: 'Numérique'},
                      {value: 3, text: 'Annonceur Sentinnelle'}
                   ]
            });
    });

    $('.edit').click(function(event) {
        $.fn.editable.defaults.mode = 'inline';
        $(this).editable();



 
        event.stopPropagation();
    });

/* le drawer    $(".btn-tiroire").click(function() {
        $(this).animate({
            left: '90%',});

    });
    
    $(".fa-close").click(function(event) {
        var par = $(event.target).parent();
        $(par).animate({
            left: '0',
        });
        event.stopPropagation();
    });  */


});