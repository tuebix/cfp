var urlfields = 0;

$(document).ready(function() {
    var max_fields      = 5; //maximum input boxes allowed
   
    $("#addbtn").click(function(e){ //on add input button click
        e.preventDefault();
        if(urlfields< max_fields){ //max input box allowed
            urlfields++; //text box increment
            $('#urls').append('<div class="row weblink"><div class="input-field col s6"><i class="material-icons prefix">http</i>' + 
		'<input name="linkurl" type="url" class="validate"><label for="linkurl">URL</label></div>'+
		'<div class="input-field col s5"><i class="material-icons prefix">description</i>'+
		'<input name="linktxt" type="text" length="80"><label for="linktxt" >Titel</label></div>'+
		'<a href="#" class="remove_field material-icons">backspace</a></div>'); 
        }
    });
   
    $('#urls').on("click",".remove_field", function(e){ //user click on remove text
        e.preventDefault(); $(this).parent('div').remove(); urlfields--;
    })
});

