$(document).ready(function(){
    
    var toucanAudio = document.getElementById("tAudio");
    var leopardAudio = document.getElementById("lAudio");
    var monkeyAudio = document.getElementById("mAudio");
    var eelAudio = document.getElementById("eAudio");
    var slothAudio = document.getElementById("sAudio");

    function playAudio() { 
        $('#myAudio').play(); 
    }
    
    $('#toucanMouth').click(function(){
        
        $('#toucanMouth').css({'transform':'rotate(0deg)'});
        toucanAudio.pause();
        toucanAudio.load();
        toucanAudio.play();
        
        setTimeout(function(){
            $('#toucanMouth').css({'transform':'rotate(-25deg)'});
        }, 1500);
        //the 1500 refers to 1.5 seconds (1500/1000 = 1.5), JS always uses milliseconds as default time unit
    });
    
   $('#leopard').click(function(){
        
        $('#leopardMouth').css({'transform':'scaleY(1)'});
        leopardAudio.pause();
        leopardAudio.load();
        leopardAudio.play();
       setTimeout(function(){
            $('#leopardMouth').css({'transform':'scaleY(0)'});
        }, 2000);
   });
    
    $('#monkey').click(function(){
        $('#monkeyMouth').css({'transform':'scaleY(1)'});
        monkeyAudio.pause();
        monkeyAudio.load();
        monkeyAudio.play();
         setTimeout(function(){
            $('#monkeyMouth').css({'transform':'scaleY(0)'});
        }, 250);
   });
     
   $('#eel').click(function(){
        $('#eelMouth').css({'transform':'scaleY(1)'});
        eelAudio.pause();
        eelAudio.load();
        eelAudio.play();
       setTimeout(function(){
            $('#eelMouth').css({'transform':'scaleY(0)'});
        }, 500);
   });
    
    $('#sloth').click(function(){
        
        $('#slothMouth').css({'transform':'scaleY(1)'});
        slothAudio.pause();
        slothAudio.load();
        slothAudio.play();
        setTimeout(function(){
            $('#slothMouth').css({'transform':'scaleY(0)'});
        }, 650);
   });
    
    
    
});