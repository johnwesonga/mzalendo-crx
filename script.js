// (c) Nicholas Rubin 2014
// For Greenhouse (www.allaregreen.us)

function outerHTML(node){
 return node.outerHTML || new XMLSerializer().serializeToString(node);
}

jQuery(document).ready(function($) {

    $.each(bio, function(key, value) {
    	 $('body').highlight(key, {caseSensitive: false, className: 'highlight-67132', wordsOnly:true });
       	  //$("p").highlight(key, {caseSensitive: false, className: 'highlight-67132', wordsOnly:true });
  		  //$("<td>").highlight(key, {caseSensitive: false, className: 'highlight-67132', wordsOnly:true });
     	
    });

    
    $('.highlight-67132').each(function() {  	
		
    	var currentKey = $(this).text();
		var sKey = bio[currentKey]; 

		
		//var candExist = jQuery.inArray(currentKey, cand2014);
				
		//if (candExist == -1) {
    	
			Tipped.create(this, "https://mzalendo-907.appspot.com/person?", {
				ajax: { data: {id: bio[currentKey]}, type: 'get' },
				skin: "white",
				hook: 'rightmiddle',
				maxWidth: 205,
				spinner: { 
					radius: 7,
					height: 1,
					width: 2.5,
					dashes: 30,
					opacity: 1,
					padding: 10,
					rotation: 700,
					color: '#000000'
				}
			});
		
		
    });
    
      
});

