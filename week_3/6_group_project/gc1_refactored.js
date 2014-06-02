// My role in the group is: refacotring

var numArray=[1,2,3,4,5,6];
function add(){
    for (var i=0;i<numArray.length;i++){
        var result=+numArray[i];
        return result;
    }
    }
    
function addOdd(){
    if (numArray.length%2===0){
        console.log("not odd length");
    }else{
        add();
    }
}

function addEven(){
     if (numArray.length%2!==0){
        console.log("not even length");
    }else{
        add();
    }
}

function avg(){
    for (var i=0;i<numArray.length;i++){
    var result=+numArray[i];
    return result/numArray.length;
    }
}

function avgOdd(){
     if (numArray.length%2===0){
        console.log("not odd length");
    }else{
        avg();
    }
}

function avgEven(){
     if (numArray.length%2!==0){
        console.log("not even length");
    }else{
        avg();
    }
}
function med(){
    numArray.sort(function(a, b){return a-b});
    var half = Math.ceil(numArray.length/2);
 
    if(values.length%2!==0){
        return values[half];
    } else{
        return (values[half-1] + values[half]) / 2;
         }
 
}


// Here is my part of the challenge:

I could not come up with any other ways to refactor the code.


//Reflection

//I had trouble with this assignment. I need to practice javascript a little more. Was unable to refactor.
//Appears that the previous person had some experience with javascript. It was a  little difficule for em to
//undertand. 