$(document).ready(function() {

	var myScroll;
	function loaded() {
	    myScroll = new IScroll('#wrapper');
	};


	$.fn.editable.defaults.ajaxOptions = {type: "PUT"};

	$.fn.editable.defaults.mode = 'inline';

    $('.drawer').drawer();
    $('#username').editable();
    $('#ddn').editable();

    $.fn.datepicker.dates['fr'] = {
    days: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
    daysShort: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
    daysMin: ["Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa" ],
    months: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"],
    monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    today: "Today",
    clear: "Clear",
    format: "mm/dd/yyyy",
    titleFormat: "MM yyyy", /* Leverages same syntax as 'format' */
    weekStart: 0
};


$('.datepicker').datepicker({
    language: 'fr'
});



    $(function(){
        $('#status').editable({
            value: 2,    
            source: [
                  {value: 1, text: 'Autres'},
                  {value: 2, text: 'Femme'},
                  {value: 3, text: 'Homme'}
               ]
        });
    });
});