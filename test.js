 jQuery("#menu-primary li a").on('click',function(event){
   	    event.preventDefault();
        var idSection = jQuery(this).attr("href");
        console.log(idSection);
        scrollTo(idSection,1800);
});
