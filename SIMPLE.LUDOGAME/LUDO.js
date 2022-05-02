const firsRandomNum = Math.floor(Math.random()* 6) + 1

const firstDiceImage = 'assets/dice' + firsRandomNum + '.png';

document.querySelectorAll('img')[0].setAttribute('src', firstDiceImage);


const secondRandomNum = Math.floor(Math.random()* 6) + 1

const secondDiceImage = 'assets/dice' + secondRandomNum + '.png';

document.querySelectorAll('img')[1].setAttribute('src', secondDiceImage);     

if ( firsRandomNum > secondRandomNum) {
       document.querySelector('h1').innerHTML = 'The Winer is Player 1';

} else if (firsRandomNum  < secondRandomNum) {
       document.querySelector('h1').innerHTML = 'The Winer is Player 2';
} else { 
       document.querySelector('h1').innerHTML = 'Its a Draw' ;
}







 