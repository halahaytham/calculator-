

const display= document.getElementById("display");

function appendToDisplay(input){
    display.value += input;

}


function cleardisplay(){
    display.value ="  ";
}

function Calculate(){
    display.value= eval(display.value);

    
}