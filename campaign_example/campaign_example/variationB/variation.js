//This code when component from first load ,when document is ready will be go as for each to get data to all product
$(document).ready(function(){  
    //This each for all product this loop on all product
  $('div.quick-shop-btn.nathan_bot > a').each(function(count){
    //Get id of product to get all data by this id
    var product_id= $(this).attr('data-pid');
    //Get link of this product to get data for this product
    var href= $(this).attr('href');
    //Process link to get title of file that have all data for this product
    var split=href.split("/");
    //Get last split from this link   
    var link =split[split.length-1];
    //Get selector for this product to get data by this selector
    var product =$(this);
    /*
    * @Append this popup for this product to get data from url for all these product 
    * @This is file have all data for this product to get all details by id
    */
    $.getJSON('https://www.oflara.com/products/'+link+'.js', function(jd) {
        $('body').first().after(`<div style="display:none" class="mfp-with-anim product-quickview popup-quick-view cart__popup pr content_descripe link_${product_id}">
        <div class="close_cont"><button data-pid="${product_id}" title="Close (Esc)" type="button" class="mfp-close close_btn_des" onclick='return ${product_id} ')>×</button></div>
        ${jd.description}
        </div>`);
        //add this class for all button Quick View to get style for this button 
        var classname =`quick_view`;
        //Before this product will be add this button to be up of 'ADD TO CART' button
        product.before(`<button  class="${classname}" data-pid="${product_id}" >QUICK VIEW</button>`);
    });     
  });//end of get json data by getJSON function
  //Add this overlay for poup when we show th description of this product
  $('body').first().before('<div style="display:none;"class="backoff_design"></div>');
});//end ready of document
//This is function when content is loaded on page will be run this function
$(window).load(function() {   
   //This is function will be run on click 'quick view' button 
   $('button.quick_view').click( function(){
      //get id byt attr from attribute data-pid
      var id= $(this).attr('data-pid'); 
      //show poup up overlay
      $('.backoff_design').show();
      //by ID that give it from above line
      $('.link_'+id).show('slide'); 
      //stop over flow of page
      $('html').css('overflow-y','hidden');
   });//end of click on quick view button
   //this is onclick on over lay of poup
   $('.backoff_design').click( function(){
      //on click over lay of popup will be replay scroll of page
      $('html').css('overflow-y','scroll');
      //hide poup of product
      $('.content_descripe').hide();  
      //hide this overlay
      $(this).hide();      
   });//end click on overlay
   //or we can click on close button to close this poup
   $('.close_btn_des').click( function(){
     //get id of product from close button to close this popup
      var id= $(this).attr('data-pid'); 
      //replay this scroll for this function
      $('html').css('overflow-y','scroll');
      //hide this poup of this product
      $('.link_'+id).hide('slide');
      //and hide overlay of this poup
      $('.backoff_design').hide();      
   });//end click on close button   
 }); //end of load of windows