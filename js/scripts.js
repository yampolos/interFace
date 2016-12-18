$(document).ready(function() {

	var myScroll;
	function loaded() {
	    myScroll = new IScroll('#wrapper');
	};

    $('.drawer').drawer();


    $('#tAge').click(function() {
        $.fn.editable.defaults.mode = 'inline';
        $(this).editable({
                value: 0,    
                source: [
                      {value: 1, text: 'Moins de 25 ans'},
                      {value: 2, text: 'Entre 25 et 49 ans'},
                      {value: 3, text: '50 ans et plus'}
                   ]
            });
    });


    $('#genre').click(function() {
        $.fn.editable.defaults.mode = 'inline';
        $(this).editable({
                value: 0,    
                source: [
                      {value: 1, text: 'Autre'},
                      {value: 2, text: 'Femme'},
                      {value: 3, text: 'Homme'}
                   ]
            });
    });


    $('#action').click(function() {
        $.fn.editable.defaults.mode = 'inline';
        $(this).editable({
                value: 0,    
                source: [
                      {value: 1, text: 'Flux'},
                      {value: 2, text: 'Numérique'},
                      {value: 3, text: 'Annonceur Sentinnelle'}
                   ]
            });
    });


$('#enfants').click(function() {
        $.fn.editable.defaults.mode = 'inline';
        $(this).editable({
                value: 0,    
                source: [
                      {value: 1, text: '0'},
                      {value: 2, text: '1'},
                      {value: 3, text: '2'},
                      {value: 4, text: '3'},
                      {value: 5, text: '4'},
                      {value: 6, text: '5'},
                      {value: 7, text: '6'},
                      {value: 8, text: '7'},
                      {value: 9, text: '8'},
                      {value: 10, text: '9'},
                      {value: 11, text: '10 et plus'}
                   ]
            });
    });


    $('#autorTrv').click(function() {
        $.fn.editable.defaults.mode = 'inline';
        $(this).editable({
                value: 0,    
                source: [
                      {value: 1, text: 'Non'},
                      {value: 2, text: 'Oui'}
                   ]
            });
    });


    $('#qpv').click(function() {
        $.fn.editable.defaults.mode = 'inline';
        $(this).editable({
                value: 0,    
                source: [
                      {value: 1, text: 'Aucun'},
                      {value: 2, text: 'Cleunay'},
                      {value: 3, text: 'Les Clôteaux/Champs Manceaux'},
                      {value: 4, text: 'Le Blosne'},
                      {value: 5, text: 'Maurepas'},
                      {value: 6, text: 'Villejean'}
                   ]
            });
    });


    $('#rqth').click(function() {
        $.fn.editable.defaults.mode = 'inline';
        $(this).editable({
                value: 0,    
                source: [
                      {value: 1, text: 'Non'},
                      {value: 2, text: 'Oui'}
                   ]
            });
    });


    $('#tSejour').click(function() {
        $.fn.editable.defaults.mode = 'inline';
        $(this).editable({
                value: 0,    
                source: [
                      {value: 1, text: 'Non'},
                      {value: 2, text: 'Oui'}
                   ]
            });
    });


    $('#alloc').click(function() {
        $.fn.editable.defaults.mode = 'inline';
        $(this).editable({
            value: 0,    
            source: [
                  {value: 1, text: 'ARE'},
                  {value: 2, text: 'ASS'},
                  {value: 3, text: 'Aucune'},
                  {value: 3, text: 'RSA Activité'},
                  {value: 4, text: 'RSA Socle'}
            ]
        });

    });




    $('#dureeExp').click(function() {
        $.fn.editable.defaults.mode = 'inline';
        $(this).editable({
            value: 0,    
            source: [
                  {value: 1, text: '0'},
                  {value: 2, text: '-1 ans'},
                  {value: 3, text: 'entre 2 et 4 ans'},
                  {value: 4, text: '5 ans et plus '}
            ]
        });

    });



      $('#locomotion').click(function() {
        $.fn.editable.defaults.mode = 'inline';
        $(this).editable({
            value: [0,0],   
            source: [
                  {value: 1, text: 'Aucun'},
                  {value: 2, text: 'Mobilette'},
                  {value: 3, text: 'Scooter'},
                  {value: 3, text: 'Transports en commun'},
                  {value: 4, text: 'Vélo'},
                  {value: 5, text: 'Voiture'}
            ]
        });

    });


     $('#permis').click(function() {
        $.fn.editable.defaults.mode = 'inline';
        $(this).editable({
            value: [0,0],    
            source: [
                  {value: 1, text: '0'},
                  {value: 2, text: '-1 ans'},
                  {value: 3, text: 'entre 2 et 4 ans'},
                  {value: 4, text: '5 ans et plus '}
            ]
        });

    });



    $('#socioPro').click(function() {
        $.fn.editable.defaults.mode = 'inline';
        $(this).editable({
            value: 0,    
            source: [
                  {value: 1, text: 'Artisant'},
                  {value: 2, text: 'Agent de maîtrise'},
                  {value: 3, text: 'Cadre'},
                  {value: 4, text: 'Cadre supérieur'},
                  {value: 5, text: 'Commerçant/Commerçante'},
                  {value: 6, text: 'Employé/Employée'},
                  {value: 7, text: 'Employé qualifié/Employée qualifiée'},
                  {value: 8, text: 'Ouvrier/Ouvrière'},
                  {value: 9, text: 'Ouvrier qualifié/Ouvrière qualifiée'}
            ]
        });

    });



    $('#etudes').click(function() {
        $.fn.editable.defaults.mode = 'inline';
        $(this).editable({
            value: 0,    
            source: [
                  {value: 1, text: 'Aucun'},
                  {value: 2, text: 'CAP/BEP'},
                  {value: 3, text: 'Bac/BP'},
                  {value: 4, text: 'Bac+2'},
                  {value: 5, text: 'Bac+3'},
                  {value: 6, text: 'Bac+4 et plus'}
            ]
        });

    });

    $('#metier').click(function() {
        $.fn.editable.defaults.mode = 'inline';
            //remote source (advanced)
        $(this).editable({
                    source: 'js/getCountries.json',
                    select2: {
                        placeholder: 'Choisir un metier',
                        minimumInputLength: 1
                    }
  
        });
    })


    $('#ville').click(function() {
        $.fn.editable.defaults.mode = 'inline';
            //remote source (advanced)
        $(this).editable({
                    source: 'js/getCountries.json',
                    select2: {
                        placeholder: 'Choisir une ville',
                        minimumInputLength: 1
                    }
  
        });
    })


    $('#country').click(function() {
        $.fn.editable.defaults.mode = 'inline';
            //remote source (advanced)
        $(this).editable({
                    source: 'js/getCountries.json',
                    select2: {
                        placeholder: 'Select Country',
                        minimumInputLength: 1
                    }
  
        });
    });

    $('.edit').click(function() {
        $.fn.editable.defaults.mode = 'inline';
        $(this).editable({
          url: '/post'
        });
    });

     $('#natio').click(function() {
        $.fn.editable.defaults.mode = 'inline';
            //remote source (advanced)
        $(this).editable({
                    source: 'js/getCountries.json',
                    select2: {
                        placeholder: 'Select Country',
                        minimumInputLength: 1
                    }
  
        });
    });

     $('#ddn').click(function() {
        $.fn.editable.defaults.mode = 'inline';
            //remote source (advanced)
        $(this).editable();
    });

     $('.resume').click(function() {
        $.fn.editable.defaults.mode = 'inline';
            //remote source (advanced)
        $(this).editable({
          rows: 10
        });
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

//////collapse résumé
  $('.blockresum').collapse({
  toggle: true
  });




});