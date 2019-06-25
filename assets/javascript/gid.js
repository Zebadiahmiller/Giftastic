// initial variable to hold the array of video games to get the giphs from

const videoGames = ["Borderlands","Halo","Ratchet and Clank","Knights of the Old republic", "Mario", "Zelda", "God of War", "Sonic", "Final Fantasy"]


//function to make the new buttons
function makeButtons(){
//clearing the buttons to not make repeat buttons
    $("#buttons-view").empty();
//for loop to generate buttons from our array
    for (let i = 0; i < videoGames.length; i++){
        //using jquery to make a new button in the html
        const gameButtons =$("<button>");

        //adding a new class
        gameButtons.addClass("video-game");

        //adding a data atrribute
        gameButtons.attr("data-name", videoGames[i]);

        //providing text in the button
        gameButtons.text(videoGames[i]);
        //appending the buttons
        $("#buttons-view").append(gameButtons)


        
    }
};

//add on click to add new button when typed into form
$("#add-game").on("click", function(event){
    //prventing game from adding the initial loadup trying to submit the button itself before someone clicks
    event.preventDefault();
    //taking the input from the form
    const games =$("#game-input").val().trim();
    //adding the new text into the array

    videoGames.push(games);
    //callling  our mkae buttons function

    makeButtons();

});

makeButtons();





