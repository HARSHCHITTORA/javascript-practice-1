// ACE =11,KING,JACK,KING=10,2-10 NUMBERS


// let firstcard=10
// let secondcard=9
let firstcard=getrandom()
let secondcard=getrandom()
// let cards=[firstcard,secondcard] // initially it should be cards[] because it alvises already so assign number in start function
let cards=[]
//let sum=firstcard+secondcard // keep sum 0 here
 let sum=0;
hasblackjack=false;
let isalive=false
let message=""
let messageEL=document.getElementById("message-al")
// let sumEl=document.getElementById("sum-EL")
let sumEl=document.querySelector("#sum-EL")//css selctor acess id and classes both ID with "#"" and classes with "."
let cardEL=document.getElementById("cards-EL")
console.log(cards)  // my cards already got choosen i don't want that
let player={
    name:"per",
    chips:145
}
let playerEl=document.getElementById("player-el")
playerEl.textContent=player.name+": $"+player.chips
function getrandom()
{
   let x=Math.ceil(Math.random()*13);
   if(x===1)
   {
       return 11 
   }
   else if(x>10)
   {
       return 10
   }
   else
   return x

}

function start()
{   isalive=true
    let firstcard=getrandom()
    let secondcard=getrandom()
    cards=[firstcard,secondcard]
    sum=firstcard+secondcard
    render()
}
function render()
{  // cardEL.textContent="cards: "+firstcard+" "+secondcard
    // cardEL.textContent="cards: "+cards[0]+" "+cards[1]
    cardEL.textContent="cards: "  
    for(let i=0;i<cards.length;i++)
      {
          cardEL.textContent+=cards[i]+" "
      }
    sumEl.textContent="sum:"+sum
    if(sum<=20)
    {
        message="Do you want to draw a new card"
       
    }
    else if(sum===21)
    {
        message="wohoo!you have won"
        hasblackjack=true
    }
    else
    {
        message="lose"
        isalive=false;
    }
    //cashout
console.log(message)
messageEL.textContent=message

}
function retake()
{
    
    // let thirdcard=2;
   if(isalive==true && hasblackjack==false)
   {
    let thirdcard=getrandom()
    sum=sum+thirdcard;
    cards.push(thirdcard)
    render();
   }
}

