var suit = ['Spades','Diamond','Heart','Clubs'];
var cards =['Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Jack','Queen','King','Ace'];
var cardsValue= [2,3,4,5,6,7,8,9,10,15,20,30,50];
var deck = [];
var deckValues=[];

var player1Cards =[];
var player2Cards=[];
var Player1Score =0;
var Player2Score =0;

document.getElementById("NextTurn").addEventListener('click',GetCards)
    //GetCards();


function CreateDeck(){
    for(i=0 ;i<suit.length;i++){
        for(j=0;j<cards.length;j++){
            deck.push(cards[j] +" of "+ suit[i]);
            deckValues.push(cardsValue[j]);
           
        };
    };
   
};

function shuffleDeck(array, array1) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        var temp1 = array1[i];
        array[i] = array[j];
        array1[i] = array1[j];
        
        array[j] = temp;
        array1[j] = temp1;
    }
}

function CheckTurnLength(){
    if(player2Cards.length==26){    
        GetResult();
       document.getElementById("NextTurn").removeEventListener('click',GetCards)
       document.getElementById("NextTurn").innerText ="Game Complete for New game Press Refresh Button";
    }

    
};

    
    
   
    

function GetCards(){
    shuffleDeck(deck,deckValues)
    PlayerCards();
    shuffleDeck(deck,deckValues);
    PlayerCards();
    shuffleDeck(deck,deckValues)
    ComputerCards();
    shuffleDeck(deck,deckValues)
    ComputerCards();
    document.getElementById("P1Score").innerText ="Player 1 Score is "+ Player1Score
    document.getElementById("P2Score").innerText ="Computer Score is "+ Player2Score
    
    document.getElementById("p1Cards").innerText = player1Cards;
    document.getElementById("p2Cards").innerText = player2Cards;
    CheckTurnLength(); 
} 
function PlayerCards(){
    player1Cards.push(deck[0]);
    deck.pop();
    Player1Score += deckValues[0];
    deckValues.pop();
};
function ComputerCards(){
    player2Cards.push(deck[0]);
    deck.pop();
    Player2Score += deckValues[0];
    deckValues.pop();


};



function GetResult(Player1Score, Player2Score){
    if (Player1Score > Player2Score){
        document.getElementById("winner").innerText ="Player 1 is Winner";
       
    }
    else if(Player1Score=Player2Score){
        document.getElementById("winner").innerText ="Matched Tied";
       
    }
    else{
        document.getElementById("winner").innerText ="Computer  is Winner";
        
    }
    

  
};


CreateDeck();

