let button = document.getElementById("scramble");
console.log(button);


button.addEventListener("click", captureText);




function captureText(){
    let output = document.getElementById("output");
    let text = document.getElementById("text");
    const re = new RegExp(/\d/g);
    if (re.test(text.value)){
        console.log("error");
        output.innerHTML = "please enter only letters";
    }
    else {
        console.log(re.test(text.value));
        console.log(text.value);
        console.log("reg worked!");
    
    
                let textValue = text.value;
                let splitText = textValue.split("");
                
                    
                console.log(textValue);
                



                function reversal() {
                
                    let reversed = textValue.split("").reverse().join("");
                    let reversedText = document.createTextNode(reversed);
                    let reversedDiv = document.createElement("div");
                    output.appendChild(reversedDiv);
                    reversedDiv.appendChild(reversedText);
                
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
                };
                    
                    
                
                var testString = textValue;
                console.log(testString);
                reversal(testString);
                alphabits(testString);
                palindrome(testString);
                }
             
        
   
            }