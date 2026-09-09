const challenges = [

{
name:"Uppercase",
difficulty:"easy",
question:"Convert string to uppercase.",
example:"Input: code | Output: CODE",
answer:`let str="code";
console.log(str.toUpperCase());`
},

{
name:"String Length",
difficulty:"easy",
question:"Find string length.",
example:"Input: hello | Output: 5",
answer:`let str="hello";
console.log(str.length);`
},

{
name:"Positive or Negative",
difficulty:"easy",
question:"Check positive or negative.",
example:"Input: -5 | Output: Negative",
answer:`let num=-5;
console.log(num>=0?"Positive":"Negative");`
},

{
name:"Reverse Array",
difficulty:"easy",
question:"Reverse array.",
example:"Input: [1,2,3] | Output: [3,2,1]",
answer:`let arr=[1,2,3];
console.log(arr.reverse());`
}

];

showChallenges();

function showChallenges(){

const container = document.getElementById("challengeContainer");

challenges.forEach(c => {

container.innerHTML += `
<div class="card">
<div class="badge easy">EASY</div>

<h2>${c.name}</h2>

<p>${c.question}</p>

<h3>Example</h3>

<pre>${c.example}</pre>

<h3>Answer</h3>

<pre><code>${c.answer}</code></pre>

<button>Solve Challenge</button>

</div>
`;

});
}