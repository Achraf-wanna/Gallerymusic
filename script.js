class Stack{
    constructor(){
        this.stack = [];
        this.top = null;
        this.size = 0;
    }

    // Push Method
    Push(){
        // Get Data From Input
        var pushInput = document.getElementById("push-input");

        // Get Result
        var result = document.getElementById("result");

        // Top Button
        var topButton = document.getElementById("top-button");

        // Pop Button
        var popButton = document.getElementById("pop-button");

        if (pushInput.value.length > 0){

            this.top++;
            this.size++;

            this.stack[this.top] = pushInput.value;

            // Set result
            // result.innerHTML = this.stack[this.top];
            result.innerHTML = '<img src="'+this.stack[this.top]+'" >';
            // topButton.disabled = true;
            popButton.disabled = false;

            // console.log("Top (Push) : " + this.top);
            // console.log("Size (Push) : " + this.size);

        }

        // If stack contains two elements enable bottom button
        if (this.size >= 2){
            bottomButton.disabled = false;
        }
    }

    // Pop Method
    Pop(){
        // Get Data From Input
        var pushInput = document.getElementById("push-input");

        // Get Result
        var result = document.getElementById("result");

        // Pop Button
        var popButton = document.getElementById("pop-button");

        if (this.size == 1){
            popButton.disabled = true;
            result.innerHTML = "Stack is empty";
        }else{
            // delete this.stack[this.size];
            this.stack.splice(this.top);
            this.top--;
            this.size--;
            // result.innerHTML = this.stack[this.top];
            result.innerHTML = '<img src="'+this.stack[this.top]+'" >';
            bottomButton.disabled = false;
            console.log("Size (else pop) : " + this.size);
        }

        console.log("Top (Pop) : " + this.top);
        console.log("Size (Pop) : " + this.size);

        for (var i = 0; i < this.stack.length; i++){
            console.log("Stack: " + this.stack[i]);
        }

        // If stack contains one element disable bottom button
        if (this.size == 1){
            bottomButton.disabled = true;
        }
    }

    // Top Method
    getPeak(){
        // Get Result
        var result = document.getElementById("result");

        // pop button
        var topButton = document.getElementById("top-button");

        console.log("Top (getPeak) : " + this.top);
        console.log("Size (getPeak) : " + this.size);
        console.log("Length (getPeak) : " + Number(this.stack.length - 1));

        // check if we are not arrive to top one 
        if (this.size == Number(this.stack.length-1)){
            topButton.disabled = true;
            // this.top++;
            this.size++;
            // result.innerHTML = this.stack[this.size];
            result.innerHTML = '<img src="'+this.stack[this.size]+'" >';
            bottomButton.disabled = false;
        }else{
            this.size++;
            // result.innerHTML = this.stack[this.size];
            result.innerHTML = '<img src="'+this.stack[this.size]+'" >';
            bottomButton.disabled = false;     
        }

        if(this.size == Number(this.stack.length-1)){
            topButton.disabled = true;
        }
    }

    // Low Mothod
    getLow(){
        // Get Result
        var result = document.getElementById("result");

        // top button
        var topButton = document.getElementById("top-button");

        // bottom button
        var bottomButton = document.getElementById("bottom-button");

        // check if we are in firt value at bottom
        if(this.size == 0){
            // topButton.disabled = true;
            
            // result.innerHTML = this.stack[this.size];
            result.innerHTML = '<img src="'+this.stack[this.size]+'" >';
        }else{            
            this.size--;
            // result.innerHTML = this.stack[this.size];
            result.innerHTML = '<img src="'+this.stack[this.size]+'" >';   
            // topButton.disabled = false;
            // bottomButton.disabled = true;
        }

        // If we get to last one at the bottom
        // if(this.top == 1 || this.size == 1){
        //     bottomButton.disabled = false;
        // }

        if(this.size == 1){
            bottomButton.disabled = true;
        }

        console.log("Size (getLow) : " + this.size);
        console.log("Top (getLow) : " + this.top);

        // Enable top button when clicks on bottom button
        topButton.disabled = false;
        // bottomButton.disabled = false;
    }
}

var st = new Stack();

// Disable top and bottom buttons and pop button
var topButton = document.getElementById("top-button");
var bottomButton = document.getElementById("bottom-button");
var popButton = document.getElementById("pop-button");

topButton.disabled = true;
bottomButton.disabled = true;
popButton.disabled = true;

// Push Function
function Push(){
    st.Push();
}

// Pop Function
function Pop(){
    st.Pop();
}

// Peak function
function Peak(){
    st.getPeak();
}

// Low Function
function Low(){
    st.getLow();
}

function test(){
    alert("ok");
}