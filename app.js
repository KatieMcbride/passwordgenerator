var pw = '';
var letter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var characters = ['!','@','#','$','%','&','*','~','_'];
var pwLen = prompt('How long do you want your password?');
var pwCharacter = confirm('Do you want special characters?');
//var pwNumber = confirm('Do you want numbers in your password?');
var pwCharacterLocation = Math.floor(Math.random() * characters.length) ;



function showNewPassword(){
    for (var i=0; i < pwLen; i++){
        var number = Math.floor(Math.random() * letter.length);
        var cNumber = Math.floor(Math.random() * characters.length);
        console.log(pwCharacterLocation);
        if (i === pwCharacterLocation && pwCharacter){
            pw = pw + characters[cNumber];
        } else {
            pw = pw + letter[number];
        }


    }
    pwBox.innerHTML = pw;
};


genBtn.addEventListener('click', showNewPassword);




// Use for loop and 
//how to make a word from letter array (+)

//how to fire function? click first button. if person "clicks" button then do something. Figure out how to do an on-click.

// Use function startGame()

//add special characters and numbers to the password generator and use if/else statement



