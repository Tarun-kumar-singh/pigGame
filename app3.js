//Making the variable 
 var scores, roundscore, activeplayer;

//Now calling the init finction
init();


// Making the init function that will work when the page will load first time

function init(){
scores = [0, 0];
roundscore = 0;
activeplayer = 0;
 // Initiallly dice be hidden
    document.querySelector('.dice').style.display = 'none';

    // Score of each player will be 0 current and roundscore too
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    // Name of each player 
    
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    //Removing the winner class from both the player
    document.querySelector('.player-0-panel').classList.remove ('winner');
    document.querySelector('.player-1-panel').classList.remove ('winner');

    // Removing active class from both player and then adding to the first player
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

    //Make the button roll and hold disable property to false 
    document.querySelector('.btn-hold').disabled = false;
    document.querySelector('.btn-roll').disabled = false;
     
        
}




//Now using the concept of Eventlinstner on roll button
document.querySelector('.btn-roll').addEventListener('click', function() {
   
        // Generate random no
        var dice = Math.floor(Math.random() * 6) + 1;

        // Display the picture as the no is generated on the dice
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';


        // Add the no to the round score if no is not 1
    if (dice !== 1) {
            //Add score
            roundscore += dice;
            document.querySelector('#current-' + activeplayer).textContent = roundscore;
        } 
    // if the no is 1 then turn will go to the next player
    else {
            //Next player
           nextplayer();
        }
       
    
});



document.querySelector('.btn-hold').addEventListener('click', function() {
   
       // Add CURRENT score to GLOBAL score
        scores[activeplayer] += roundscore;

        // Update the UI
        document.querySelector('#score-' + activeplayer).textContent = scores[activeplayer];

        // Check if player won the game
        if (scores[activeplayer] >= 100) 
        {
        // If the score goes beyond mentiond for winner the change the name the of the active player to winner and dice will be disappear
            document.querySelector('#name-' + activeplayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
        
            //This will add a class of style which is for winner and remove the active style
            document.querySelector('.player-' + activeplayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activeplayer + '-panel').classList.remove('active');
            
            // as the player has won roll and hold button will be disabled
            document.querySelector('.btn-roll').disabled = true;
             document.querySelector('.btn-hold').disabled = true;
        } 
    
    // If none of the player has won then the control will go to the next player 
    else {
            // calling Next player function 
            nextplayer();
        }
    
    
});



   //Next player function
function nextplayer() {
 
    activeplayer === 0 ? activeplayer = 1 : activeplayer = 0;
    roundscore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');

    document.querySelector('.dice').style.display = 'none';
}

// On clicking the new game button use event listener concept and pass the one of the parameter as init which is used also when  the page is loaded for the first time 
document.querySelector('.btn-new').addEventListener('click', init);




