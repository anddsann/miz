$(window).scroll(function(){
    
    let pixel = $(window).scrollTop();
    
    console.log({pixel});
   
    miz.currentTime = pixel / 750;
});