function Joke() { 
    $.ajax({
        type: "GET",
        url: "https://v2.jokeapi.dev/joke/Any?type=twopart", 
        async: false,
        success: function(data){
        $('#error').html(data["error"]);
        $('#setup').html(data["setup"]);
        $('#delivery').html(data["delivery"]);
        },
        error: function(data) {
            console.log("Some problem here mate");
        }
    });
};

$(document).ready(function(){
    Joke();
    $("#like").click(function(){
      $("#like").animate({height: "40px"},180);
      $("#like").animate({height: "30px"},180);
    });
    $("#dislike").click(function(){
        $("#dislike").animate({height: "40px"},180);
        $("#dislike").animate({height: "30px"},180);
    });
      $("#new").click(function(){
        Joke();
        $("#new").animate({height: "40px"},180);
        $("#new").animate({height: "30px"},180);
    });
    $("#likedlist").click(function(){
        $("#likedlist").animate({height: "40px"},180);
        $("#likedlist").animate({height: "30px"},180);
    });
    $("#dislikedlist").click(function(){
        $("#dislikedlist").animate({height: "40px"},180);
        $("#dislikedlist").animate({height: "30px"},180);
    });
  });

  let setuptd = document.getElementById("setup").innerHTML;
  let deliverytd = document.getElementById("delivery").innerHTML;
  

  $("#like").click(function(){
    setuptd = document.getElementById("setup").innerHTML;
    deliverytd = document.getElementById("delivery").innerHTML;
    console.log(setuptd);
    console.log(deliverytd);
  });

class JokeSet {
    setup;
    delivery;

    constructor (setup,delivery) {
        this.setup = setup;
        this.delivery = delivery;
    }

}


    likedJokes = [];
    function AddJoke() {
        this.likedJokes.push(new JokeSet(setuptd, deliverytd));
    }; 



    dislikedJokes = [];
    function AddJoke() {
        this.dislikedJokes.push(new JokeSet(setuptd, deliverytd));
    };




  $("#likedlist").click(function(){
    this.likedJokes.forEach(x => {
        console.log(x.setup);
        console.log(x.delivery);
        document.getElementById("setupliked").innerHTML = x.setup;
        document.getElementById("deliveryliked").innerHTML = x.delivery;
    });
  });
  $("#dislikedlist").click(function(){
    this.dislikedJokes.forEach(x => {
        console.log(x.setup);
        console.log(x.delivery);
        document.getElementById("setupdisliked").innerHTML = x.setup;
        document.getElementById("deliverydisliked").innerHTML = x.delivery;
    });
  });



 

