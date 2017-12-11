let button = document.getElementById("scramble");
console.log(button);


button.addEventListener("click", captureText);

function captureText(){
    let output = document.getElementById("output");
    let text = document.getElementById("text");
    let textValue = text.value;
    console.log(textValue);
    



    function reversal() {
       
        let reversed = textValue.split("").reverse().join("");
        let reversedText = document.createTextNode(reversed);
        output.appendChild(reversedText);
    
        };
    
    function alphabits() {
        let az = textValue.split("").sort().join("");
        let azDiv = document.createElement("div");
        output.appendChild(azDiv);
        let azText = document.createTextNode(az);
        azDiv.appendChild(azText);
    
        };
    
    function palindrome() {
        palin = textValue.split("").reverse().join("");
        if (palin === textValue){
            palindromeDiv = document.createElement("div");
            output.appendChild(palindromeDiv);
            palindromeDiv.innerHTML = "Your string is a palindrome";
        };
        
        } ;  
    
    var testString = textValue;
    console.log(testString);
    reversal(testString);
    alphabits(testString);
    palindrome(testString);
};