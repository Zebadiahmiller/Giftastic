// initial variable to hold the array of video games to get the giphs from

const videoGames = ["Borderlands","Halo","Ratchet and Clank","Knights of the Old republic", "Mario", "Zelda", "God of War", "Sonic", "Final Fantasy"]





//giphy api calling

function videoGameInfo(){
    const games =$(this).attr("data-name");
    const queryURL = "http://api.giphy.com/v1/gifs/search?q=" + games + "&api_key=5yEKIW6ooVIKYuOOaKgjSpYJGlXOSg6V&limit=10";
    console.log(games);
    
    //performing the ajax request
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    //using .then to wait for the infor to come from the api
    .then(function(response){
        console.log(queryURL);
        //logging the respons
        console.log(response);
        //
        // $("#gifs-appear-here").text(JSON.stringify(response));

        //making a div to hold the class of video-games
        const videoGameDiv = $("<div class = 'video-games'>");

        // storing the rating data for the games gif
        
    })
    
}





//function to make the new buttons
function makeButtons(){
//clearing the buttons to not make repeat buttons
    $("#buttons-view").empty();
//for loop to generate buttons from our array
    for (let i = 0; i < videoGames.length; i++){
        //using jquery to make a new button in the html
        const gameButtons =$("<button>");

        //adding a new class
        gameButtons.addClass("video-game-btn");

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
$(document).on("click", ".video-game-btn", videoGameInfo);
makeButtons();





