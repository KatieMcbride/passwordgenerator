var pw = '';
var letter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperLetter = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var characters = ['!','@','#','$','%','&','*','~','_'];
var digits = ['1','2','3','4','5','6','7','8','9'];
var pwLen = 12
var pwCharacter = document.getElementById("char");
var pwNumber = document.getElementById("num");
var pwUpperCase = document.getElementById("upper");
var pwCharacterLocation = Math.floor(Math.random() * characters.length) ;
var pwNumberLocation = Math.floor(Math.random() * digits.length);
var pwUpperLetterLocation = Math.floor(Math.random() * upperLetter.length);
var pwNumberCheckboxValue = true;
var pwUpperCaseCheckboxValue = true;
var pwCharacterCheckboxValue = true;


function showNewPassword(){
    console.log(pwNumber.value);
    for (var i=0; i < pwLen; i++){
        var letNumber = Math.floor(Math.random() * letter.length);
        var cNumber = Math.floor(Math.random() * characters.length);
        var passNumber = Math.floor(Math.random() * digits.length);
        var upperLetterNumber = Math.floor(Math.random() * upperLetter.length);
        if (i === pwCharacterLocation && pwCharacterCheckboxValue){
            pw = pw + characters[cNumber];
        } if (i === pwNumberLocation && pwNumberCheckboxValue){
            pw = pw + digits[passNumber];
        } else if (i === pwUpperLetterLocation && pwUpperCaseCheckboxValue){
            pw = pw + upperLetter[upperLetterNumber];
        } else if (
            pw = pw + letter[letNumber]
        );


    }
    pwBox.innerHTML = pw;
};

pwNumber.addEventListener("click", function(event) {
    pwNumberCheckboxValue = !!event.target.checked;
    console.log(pwNumberCheckboxValue)
})

pwUpperCase.addEventListener("click", function(event) {
    pwUpperCaseCheckboxValue = !!event.target.checked;
    console.log(pwUpperCaseCheckboxValue)
})

pwCharacter.addEventListener("click", function(event) {
    pwCharacterCheckboxValue = !!event.target.checked;
    console.log(pwCharacterCheckboxValue)
})


genBtn.addEventListener('click', showNewPassword);

// COPY FUNCTION 

function copy() {
    var range = document.createRange();
        range.selectNode(document.getElementById("pwBox"));
        window.getSelection().removeAllRanges(); // clear current selection
        window.getSelection().addRange(range); // to select text
        document.execCommand("copy");
        window.getSelection().removeAllRanges();// to deselect
  }

  document.querySelector("#copy").addEventListener("click", copy);



// REFRESH PAGE FUNCTION

function refreshPage(){
    window.location.reload();
};

//   SLIDER FUNCTION

  var slider = document.getElementById("myRange");
  var output = document.getElementById("numOutput");
//   var pwLen = console.log(slider.oninput);
  
    output.innerHTML = slider.value; // Display the default slider value
    

    // Update the current slider value (each time you drag the slider handle)
    slider.oninput = function passLength() {
    output.innerHTML = this.value;
    pwLen = this.value;
    
    };


 



// Use for loop and 
//how to make a word from letter array (+)

//how to fire function? click first button. if person "clicks" button then do something. Figure out how to do an on-click.

// Use function startGame()

//add special characters and numbers to the password generator and use if/else statement



