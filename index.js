let question;
let answer;
let para1; let para2; let para3;

fetch("https://official-joke-api.appspot.com/random_joke")
.then(function (Data){
    return Data.json()
}).then(function(data1){

    question = data1.setup;
    answer = data1.punchline;
    
    para3 = document.createElement("p"); para3.innerText = "Here is a random joke for you! If you don't like it just refresh the page to see new one.";
    para3.setAttribute("class","head");
    para1 = document.createElement("p"); para1.innerText = question;
    para1.setAttribute("class","ques");

    button = document.createElement('button');
    button.innerText = "Click to reveal the JOKE";
    button.setAttribute("onclick","display()");
    button.setAttribute("class","button");
    
    document.body.append(para3,para1,button);
console.log(data1);
})
.catch(function(err){
    console.log(err);
});

function display(){
    para2 = document.createElement("p"); 
    para2.innerText = answer;
    para2.setAttribute("class","ans");
   document.body.append(para2);
}
