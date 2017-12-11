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
        let azText = document.createTextNode(az);
        output.appendChild(azText);
    
        };
    
    function palindrome() {
        palin = textValue.split("").reverse().join("");
        if (palin === textValue){
            console.log("it's a palindrom!");
        };
        
        } ;  
    
    var testString = textValue;
    console.log(testString);
    reversal(testString);
    alphabits(testString);
    palindrome(testString);
};