// 변수 설정
var randomNumber = Math.floor(Math.random() * 100) + 1;

var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');

var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');

var guessCount = 1;
var resetButton;

// checking guess number and helps the users getting closer to correct answer
function checkGuess()
{
    var userGuess = Number(guessField.value);
    if (guessCount === 1 )
    {
        guesses.textContent = 'Previous guesses : ';
        
    }
    guesses.textContent += userGuess + ' ';

    if (userGuess === randomNumber)
    {
        lastResult.textContent = 'Congratulations! You got it right!';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
    }
    else if (guessCount === 10)
    {
        lastResult.textContent = '!!!Game Over!!!';
        setGameOver();
    }
    else
    {
        lastResult.textContent = 'Wrong!';
        lastResult.style.backgroundColor = 'red';
        if(userGuess < randomNumber)
        {
            lowOrHi.textContent = 'Last guess was too low!';
        }
        else if (userGuess > randomNumber)
        {
            lowOrHi.textContent = 'Last guess was too high!';
        }

    }
    guessCount++;
    guessField.value = '';
    guessField.focus(); //자동으로 커서를 페이지가 뜨자마자 <input> 텍스트 필드에 위치시킴.
}

//guessSubmit 버튼의 이벤트를 추가하는 과정
//addEventListner 메소드 안에서는 함수의 괄호가 필요하지 않음.
if (guessSubmit)
{
    guessSubmit.addEventListener('click', checkGuess);
}

function setGameOver()
{
    guessField.disabled = true;
    guessSUbmit.disabled = true;
    
    resetButton = document.createElement('button'); 
    //html의 아래쪽에 새로운 버튼 element를 생성하고, 
    //start new game 으로 표시되게 함
    resetButton.textContent = 'Start new game';
    document.body.appendChild(resetButton);

    resetButton.addEventListener('click', resetGame);
}

function resetGame()
{
    guessCount = 1;

    var resetParas = document.querySelectorAll('.resultParas p');
    for (var i = 0; i < resetParas.length; i++)
    {
        resetParas[i].textContent = '';
    }
    
    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    lastResult.style.backgroundColor = 'white';

    randomNumber = Math.floor(Math.random() * 100) + 1;
}