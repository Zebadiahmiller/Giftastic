// initial variable to hold the array of video games to get the giphs from

const videoGames = ["Borderlands", "Halo", "Ratchet and Clank", "Knights of the Old republic", "Mario", "Zelda", "God of War", "Sonic", "Final Fantasy"]





//giphy api calling

function videoGameInfo() {
    const games = $(this).attr("data-name");
    const queryURL = "https://api.giphy.com/v1/gifs/search?q=" + games + "&api_key=5yEKIW6ooVIKYuOOaKgjSpYJGlXOSg6V&limit=10&offset=0&rating=r&lang=en";
    console.log(games);

    //performing the ajax request
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        //using .then to wait for the infor to come from the api
        .then(function (response) {
            console.log(queryURL);
            //logging the respons
            console.log(response);
            //
            // $("#gifs-appear-here").text(JSON.stringify(response));
            const results = response.data

            for (let r = 0; r < results.length; r++) {


                //making a div to hold the class of video-games
                const videoGameDiv = $("<div class = 'video-games'>");

                // storing the rating data for the games gif


                // element to store the rating of the giph
                const paragraphOne = $("<p>").text("Rating:" + results[r].rating);
                //displaying rating

                // showing the gif
                const gameImage = $("<img class = 'gif-image'>");

                //creating the image tag
                gameImage.attr("src", results[r].images.fixed_height_still.url);


                //appending the gifs
                videoGameDiv.append(paragraphOne);
                videoGameDiv.append(gameImage);
                // putting the gifs before the other gifs
                $("#gifs-appear-here").prepend(videoGameDiv);





            }


        });


}





//function to make the new buttons
function makeButtons() {
    //clearing the buttons to not make repeat buttons
    $("#buttons-view").empty();
    //for loop to generate buttons from our array
    for (let i = 0; i < videoGames.length; i++) {
        //using jquery to make a new button in the html
        const gameButtons = $("<button>");

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
$("#add-game").on("click", function (event) {
    //prventing game from adding the initial loadup trying to submit the button itself before someone clicks
    event.preventDefault();
    //taking the input from the form
    const games = $("#game-input").val().trim();
    //adding the new text into the array

    videoGames.push(games);
    //callling  our mkae buttons function

    makeButtons();

});

function startStop() {

    $(document).on("click", ".video-game-btn", videoGameInfo);
    $('body').on('click', '.gif-image', function () {
        var src = $(this).attr("src");
        if ($(this).hasClass('playing')) {
            //stop
            $(this).attr('src', src.replace(/\.gif/i, "_s.gif"))
            $(this).removeClass('playing');
        } else {
            //play
            $(this).addClass('playing');
            $(this).attr('src', src.replace(/\_s.gif/i, ".gif"))
        }
    });
};
startStop();


makeButtons();





