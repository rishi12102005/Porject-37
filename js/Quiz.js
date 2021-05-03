class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
    question = new Question();
    question.display();
      
    }
    
  }

  play(){
    //write code here to hide question elements
    question.hide();

    //write code to change the background color here
    background("yellow");

    //write code to show a heading for showing the result of Quiz
    quizResult = createElement("h1");
    quizResult.html("the Quiz Result!!!!");
    quizResult.position(350,0);

    //call getContestantInfo( ) here
    Contestant.getContestantInfo();


    //write condition to check if contestantInfor is not undefined
    if(allContestants!==undefined){
      fill("blue");
      textSize(30);
      text("*NOTE- the contestant who get the answer correct will be highlighted in green")
    }

    //write code to add a note here
    for(var plr in allContestants){
      var correctAns = "2";

      if(correctAns===allContestants[plr].answer){
        fill("green")
      }
      else{
        fill("red");
      }
    }
    //write code to highlight contest who answered correctly
    
  }

}
