var myP = document.getElementById('parghrap'),
    Toggle = document.getElementById('toggle'),
    bodyO = document.getElementById('obdyp')


$('html').niceScroll({
    cursorcolor : '#223d6a' ,
    cursorwidth : '7px',
    cursorborder : '1px solid #20262E'
    
});

// Load //
window.addEventListener('load', function load() {
    const loader = document.getElementById('loader');
    setTimeout(function() {
      loader.classList.add('fadeOut');
    }, 3000);
  });

  // Load // 
  



$('.list').click(function () { 
    $(this).toggleClass('active'); 
    $('.toggle').fadeToggle(500);
})

setTimeout(() => {
     $('.list').removeClass('active');
}, 3000);



$('.toggle').click(function () { 
    $('.map').fadeToggle(1000);
    $('chat').fadeToggle(1000);
    $('.headchat').fadeToggle(1000);
    $(this).fadeToggle(1000);
    if(myP.textContent === 'Map'){
        $(myP).text('Chat')
    }else{
        $(myP).text('Map')
    }
 })


