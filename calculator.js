function display(i)
{
    x = document.getElementById("res");
    x.value += i;
}
function del()
{
    console.log("delete");
    let display = document.getElementById("res").value; 
    document.getElementById("res").value = display.slice(0,-1); 
}
function equal() {
    console.log("Equal button clicked!");  
    let input = document.getElementById("res").value;  
    try {
        let result = caculation(input);  
        document.getElementById("res").value = result;  
    } catch (err) {
        document.getElementById("res").value = "Error";  
    }
}
function clearDisplay()
{
    document.getElementById("res").value = "";
}

function caculation(input)
{
    let currentNumberStr = ""; 
        let lastNumber = 0;            
        let result = 0;                 
        let currentOperator = '+';     
        let lastOperator = '+';

        for (let i = 0; i < input.length; i++) {
            let ch = input.charAt(i);
            if (ch >= '0' && ch <= '9') 
            {
                currentNumberStr += ch; 
            }
            if (!(ch >= '0' && ch <= '9') || i == input.length - 1) 
            {
                let currentNumber = parseFloat(currentNumberStr);
                currentNumberStr = "";  
                if (currentOperator == '*' || currentOperator == '/') 
                {
                    if (currentOperator == '*') 
                    {
                        lastNumber *= currentNumber;  
                    } 
                    else 
                    {
                        lastNumber /= currentNumber;
                    }
                } 
                else 
                {
                    if (lastOperator == '+') 
                    {
                        result = result + lastNumber;
                    }
                    else if (lastOperator == '-') {
                        result = result - lastNumber;
                    }
                    lastNumber = currentNumber;
                    lastOperator = currentOperator;
                }
                currentOperator = ch;
            }
        }
        if (lastOperator == '+') 
        {
            result += lastNumber;
        } 
        else if (lastOperator == '-') 
        {
            result -= lastNumber;
        }

        console.log(result);
        return result;
}