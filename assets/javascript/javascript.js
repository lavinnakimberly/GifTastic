var gifArray = ["Cinderella","Little Mermaid","Snow White","Sleeping Beauty","Aladdin"]

for (var i = 0; i < gifArray.length; i++){
	var buttons = $("<button>");
	buttons.text(gifArray[i]);
	buttons.attr("data-disney", gifArray[i]);
	$("#buttons").append(buttons);
}

$("#addSubmit").on("click", function(){
	var textSubmit = $("#addText").val();
	var buttons = $("<button>");
	buttons.text(textSubmit);
	buttons.attr("data-disney", textSubmit);
	$("#buttons").append(buttons);
	buttons.attr("data-pause", imageURL);
    buttons.attr("data-animate", giphyURL);
    buttons.attr("data-state", "pause")
});

$("#buttons").on("click", "button", function(){
	var disneyType = $(this).attr("data-disney");

	var queryURL = "http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&limit=10&q=" + disneyType;

	$("#giphys").empty();

     $.ajax({
       url: queryURL,
       method: "GET"
	})

    .done(function(response){
    	console.log(response)
    
    var results = response.data

    for (var i = 0; i < results.length; i++){

    	var imageURL = response.data[i].images.original_still.url;

    	var giphyURL = response.data[i].images.downsized.url;

    	var selectedImage = $("<img>");

    	selectedImage.attr("src", imageURL);
    	selectedImage.attr("data-pause", imageURL);
    	selectedImage.attr("data-animate", giphyURL);
    	selectedImage.attr("data-state", "pause");
    	selectedImage.attr("alt", "selected image");

    	$("#giphys").append(selectedImage);
    }
  })
});

$("#giphys").on("click", "img", function() {
    
    var state = $(this).attr("data-state");

    if (state === "pause"){
    	var newURL = $(this).attr("data-animate");
    	$(this).attr("src", newURL);
    	$(this).attr("data-state", "animate");

       }
       else{
       	var newURL = $(this).attr("data-pause");
       	$(this).attr("src", newURL);
       	$(this).attr("data-state", "pause"); 

 		}

 	})


























