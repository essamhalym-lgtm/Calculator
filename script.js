window.onload = function(){
    document.getElementById("age-prompt").classList.add("visible");
};

function checkAge(){
    let age = parseInt(document.getElementById("age-input").value);

    if(isNaN(age) || age < 0){
        alert("Please enter a valid age");
        return;
    }

    document.getElementById("age-prompt").classList.remove("visible");

    if(age >= 18){
        document.getElementById("Calculator").classList.add("visible");
    }else{
        document.getElementById("apology").classList.add("visible");
    }
}

let display = document.getElementById("display");

function appendToDisplay(value){
    if(display.value === 'Error'){
        display.value = '';
    }
    display.value += value;
}

function clearDisplay(){
    display.value = '';
}

function deleteLast(){
    if(display.value === 'Error'){
        display.value = '';
        return;
    }
    display.value = display.value.slice(0, -1);
}

function calculate(){
    if(display.value === '' || display.value === 'Error') return;

    try{
        // remove leading zeros so "010" isn't treated as octal
        let expression = display.value.replace(/(^|[+\-*/])0+(?=\d)/g, '$1');
        let result = eval(expression);

        if(!isFinite(result)){
            display.value = 'Error';
            return;
        }
        display.value = parseFloat(result.toFixed(10));
    }catch(e){
        display.value = 'Error';
    }
}