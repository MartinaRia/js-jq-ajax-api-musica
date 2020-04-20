/*DESCRIZIONE:
Attraverso una chiamata ajax all’Api di boolean avremo a disposizione una decina di dischi musicali.
Servendoci di handlebars stampiamo tutto a schermo. In questo momento non è importante la parte grafica.
quindi qua o rifacciamo da capo o finiamo il layout come da screeshot (che vi metto sotto).
BONUS: (ma solo se il resto è fatto)
 Creare una select con i seguenti generi: pop, rock, metal e jazz. In base a cosa scegliamo nella select vedremo i corrispondenti cd.*/

$(document).ready(function() {
	console.log('ready,steady go!');

	/* ----DISPLAY COMPILATION ---*/
  $.ajax({
          url: 'https://flynn.boolean.careers/exercises/api/array/music',
          success: function(data,stato){
	            /* -- variabili -- */
	            var array = data.response;
	            var obectInArray = data.response;
	            /* -- ciclo per estratte gli album -- */
	            for (var i = 0; i < array.length; i++) {
			            obectInArray[i];

			            /* -- handlebars -- */
			            var source = $("#template-handlebars").html();
			            var template = Handlebars.compile(source);

			            var context = {
			              'img': obectInArray[i].poster,
			              'title': obectInArray[i].title,
			              'author': obectInArray[i].author,
			              'year' : obectInArray[i].year,
										'genere': obectInArray[i].genre
			            };
			            var html = template(context);

			            $('.cds-container').append(html);
			            /* -- / handlebars -- */

	            } // fine for loop


          }, //fine success
          error: function(richiesta,stato,error){
            $('.cds-container').append("Ops! C'è stato un errore");

          },
        }); // fine ajax


	/* ---- FILTRA PER GENERE ---*/

		$('#selection').on('click',
			function(){
				var selectedOption = $(this).children("option:selected").val();


				$('.genere').each(
					function(){
						var genere = $(this).text();
						var confronto = genere.includes(selectedOption);

						if  (selectedOption == 'all'){
						 $(this).parents('.cd').slideDown();
					 	} else if(confronto){
							$(this).parents('.cd').slideDown();
						} else {
							$(this).parents('.cd').slideUp();
						}
					}
				)

		}); // fine click







});
