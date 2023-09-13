
    // $('h1').css("color",'red');
    // $("button").css("color","blue");
    // $('h1').addClass('col col1');
    // $('button').text("Dont click Me!!")
    // $("button").html("<em>Hey</em>");
    // $('a').attr("href","https://www.yahoo.com");
    // $('h1').click(function(){
    //     $('h1').css('color','purple')
    // });

    // for(var i=0;i<5;i++){
    //     document.querySelectorAll("button")[i].addEventListener("click",
    //     function(){
    //         document.querySelector('h1').style.color="purple";
    //     }
    //     )
    // }


    // $('button').click(function(){
    //     $("h1").css('color','green')
    // })


    // $('input').keypress(function(e){
    //  console.log(e.key)
    // })


    // $('h1').on('click',function(){
    //     $('h1').css('color','green')
    // })



    ////Animations with jQuery
    // $('h1').click(function(){
    //     $('h1').hide();
    // })

// $('button').on("click",function(){
//     $('h1').hide();
// })

// $('button').on("click",function(){
//     $('h1').toggle();
// })


// $('button').on("click",function(){
//     $('h1').animate({opacity:0.5});
// })



$('button').on("click",function(){
    $('h1').slideUp().slideDown().animate({opacity:0.5});
})
