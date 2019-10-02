var pw = '';
var letter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperLetter = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var characters = ['!','@','#','$','%','&','*','~','_'];
var digits = ['1','2','3','4','5','6','7','8','9'];
var pwLen = prompt('How long do you want your password?');
var pwCharacter = confirm('Do you want special characters?');
var pwNumber = confirm('Do you want numbers in your password?');
var pwUpperCase = confirm('Do you want upper case letters?');
var pwCharacterLocation = Math.floor(Math.random() * characters.length) ;
var pwNumberLocation = Math.floor(Math.random() * digits.length);
var pwUpperLetterLocation = Math.floor(Math.random() * upperLetter.length);



function showNewPassword(){
    for (var i=0; i < pwLen; i++){
        var letNumber = Math.floor(Math.random() * letter.length);
        var cNumber = Math.floor(Math.random() * characters.length);
        var passNumber = Math.floor(Math.random() * digits.length);
        var upperLetterNumber = Math.floor(Math.random() * upperLetter.length);
        if (i === pwCharacterLocation && pwCharacter){
            pw = pw + characters[cNumber];
        } if (i === pwNumberLocation && pwNumber){
            pw = pw + digits[passNumber];
        } if (i === pwUpperLetterLocation && pwUpperCase){
            pw = pw + upperLetter[upperLetterNumber];
        } else if (
            pw = pw + letter[letNumber]
        );


    }
    pwBox.innerHTML = pw;
};


genBtn.addEventListener('click', showNewPassword);




// Use for loop and 
//how to make a word from letter array (+)

//how to fire function? click first button. if person "clicks" button then do something. Figure out how to do an on-click.

// Use function startGame()

//add special characters and numbers to the password generator and use if/else statement



