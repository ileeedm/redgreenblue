

    var randomNumber= Math.floor(Math.random() * 4)
    
    
    let i = 0;
    let p = 2
    var userClickedPattern = []
    var gamePattern = []
    var randomChosenColour = ["red", "blue", "green", "yellow"]
    var chosenColor = randomChosenColour[randomNumber]
   
    var a = true
    

   
    
function onKeydown(){
      
    if(a === true){
        i = 0
        $('#' + chosenColor).addClass('pressed')
        var audio = new Audio ('sounds/' + chosenColor + '.mp3');
        audio.play()
        setTimeout(function(){
            $('#' + chosenColor).removeClass('pressed')
        },100)
        var audio = new Audio ('sounds/' + chosenColor + '.mp3');
        audio.play()
        $('#level-title').text('Level 1' )
        a = !true
        gamePattern.push(chosenColor)
        }
       
        else{console.log('')}
}   

function clicking(){
    
    
   
    if(a === false){
    i++
    
    var userChosenColor = $(this).attr('id')
    $('#' + userChosenColor).addClass('pressed')
    var audio = new Audio ('sounds/' + userChosenColor + '.mp3');
    audio.play()
    setTimeout(function(){
        $('#' + userChosenColor).removeClass('pressed')
    },100)
    var audio = new Audio ('sounds/' + userChosenColor + '.mp3');
    audio.play()
    
  
    userClickedPattern.push(userChosenColor)
    
   
    

            if(userClickedPattern[i - 1] === gamePattern[i - 1] && userClickedPattern.length === gamePattern.length && a === false) {
              
                setTimeout(
                    function() 
                    {
                     nextSequence() 
                    
                    }, 1000);
                
            } else if(userClickedPattern[i - 1] != gamePattern[i - 1] )
               
                {
                    a = true
                    userClickedPattern = []
                        gamePattern = []
                        p = 2
                     
                        $('body').addClass("game-over")
                        setTimeout(
                            function (){
                                $('body').removeClass("game-over")
                               
                          },400)
                          $('#level-title').text('Game Over Press Any Key To Restart')
                          var audio = new Audio ('sounds/wrong.mp3');
                          audio.play()
                              
                }
               
            
function nextSequence(){
  if (a===false){  var randomNumberTwo = Math.floor(Math.random() * 4)
    var chosenColorTwo = randomChosenColour[randomNumberTwo]
    $('#' + chosenColorTwo).addClass('pressed')
    var audio = new Audio ('sounds/' + chosenColorTwo + '.mp3');
    audio.play()
    setTimeout(function(){
        $('#' + chosenColorTwo).removeClass('pressed')
    },100)
    i = 0
    var result = p++
    gamePattern.push(chosenColorTwo)
    userClickedPattern = []
   
    console.log(result)
    $('#level-title').text('Level' + " " +  result)}

}



    /*     if(userClickedPattern[i-1] === gamePattern[i-1]){
        setTimeout(
            function() 
            {
                var randomNumberTwo= Math.floor(Math.random() * 4)
                var chosenColorTwo = randomChosenColour[randomNumberTwo]
                gamePattern.push(chosenColorTwo)
                
                $('#' + chosenColorTwo).fadeTo('fast',0.01).fadeTo('fast',1 )
                console.log('true')
             
            }, 1000);
       
        
    } else{
        console.log('asdasd')
    }
     */


}
    
}


$(document).on('keydown', onKeydown)

$('.btn').on('click', clicking)
   

    
    

            


           
            
          
     
            
   
          
          
            
            
     




