const quizdata=[
    {
        question:"1.What does the abbreviation HTML stand for?",
        options:["HyperText Markup Language","HighText Markup Language","HyperText Markdown Language","None of the above"],
        correct:0,
    },
    {
        question:"How many sizes of headers are available in HTML by default?",
        options:["5","1","3","6"],
        correct:3,
    },
    {
        question:"What is the smallest header in HTML by default?",
        options:["h1","h2","h6","h4"],
        correct:2,
    },
    {
        question:"How to create an ordered list in HTML?",
        options:["<ul>","<ol>","<href>","<b>"],
        correct:1,
    },
    {
        question:"We enclose HTML tags within?",
        options:["{}","<>","!!","None of the above"],
        correct:1,
    },
];



const quiz=document.querySelector(".container2");
const answerelmt=document.querySelectorAll(".answer");
const[questionelmt,option_1,option_2,option_3,option_4]=document.querySelectorAll("#question, #option_1, #option_2, #option_3, #option_4");
const submitbtn=document.querySelector(".subbtn");

let currentquiz=0;
let score=0;

const loadquiz=()=>{
        const{question,options}=quizdata[currentquiz];
        console.log(question);
        questionelmt.innerText=question;
        for (let index = 0; index < options.length; index++) {
            window[`option_${index + 1}`].innerText = options[index];
          }
          
};
loadquiz();

const getselectedoption=()=>{
    let answerindex;
    answerelmt.forEach((curroption,index)=>{
        if(curroption.checked){
            answerindex=index;
        }
    });
    return answerindex;
};

const deselectedanswer=()=>{
    return answerelmt.forEach((currelem)=> currelem.checked=false);
     };


submitbtn.addEventListener("click",()=>{
    const selectedoptionindex=getselectedoption();
    console.log(selectedoptionindex);

    if(selectedoptionindex === quizdata[currentquiz].correct){
        score=score+1;
    }

    currentquiz++;

    if(currentquiz<quizdata.length){
        deselectedanswer();
        loadquiz();
    }
    else{
        quiz.innerHTML=`
        <div class="result">
        <h1> YOUR SCORE:${score}/${quizdata.length} CORRECT ANSWERS</h2>
        <p> 🏆🏆CONGRATULATIONS ON COMPLETING THE QUIZ!🎉🎉</p>
        <button class="reloadbutton" onclick="location.reload()">PLAT AGAIN</button>
        </div>
        `;
    }
});







