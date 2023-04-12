const testDB = [
    {
        question: "Q1:When he\n" +
            "P : did not know\n" +
            "Q :	he was nervous and\n" +
            " R :	heard the hue and cry at midnight\n" +
            "S :	what to do\n" +
            "The Proper sequence should be:",
        a: "RQPS",
        b: "QSPR",
        c: "SQPR",
        d: "PQRS",
        ans: "ans1",
    },
    {
        question: "Q2:It has been established that\n" +
            "P :	Einstein was\n" +
            "Q :	although a great scientist\n" +
            "R :	weak in arithmetic\n" +
            "S :	right from his school days\n" +
            "The Proper sequence should be:",
        a: "SRPQ",
        b: "QPRS",
        c: "QPSR",
        d: "RQPS",
        ans: "ans2",
    },
    {
        question: "Q3:Then\n" +
            "P :	it struck me\n" +
            "Q :	of course\n" +
            "R :	suitable it was\n" +
            "S :	how eminently\n" +
            "The Proper sequence should be:\n",
        a: "SPQR",
        b: "QSRP",
        c: "PSRQ",
        d: "QPSR",
        ans: "ans3",
    },
    {
        question: "Q4:I read an advertisement that said\n" +
            "P :	posh,air-conditioned\n" +
            "Q :	gentleman of taste\n" +
            "R :	are available for\n" +
            "S :	fully furnished rooms\n" +
            "The Proper sequence should be:\n",
        a: "PQRS",
        b: "PSRQ",
        c: "PSQR",
        d: "SRPQ",
        ans: "ans2",
    },
    {
        question: "Q5:Since the beginning of history\n" +
            "P :	have managed to catch\n" +
            "Q :	the Eskimos and Red Indians\n" +
            "R :	by a very difficulty method\n" +
            "S :	a few specimens of this aquatic animal\n" +
            "The Proper sequence should be:\n",
        a: "QRPS",
        b: "SQPR",
        c: "SQRP",
        d: "QPSR",
        ans: "ans4",
    },
    {
        question: "Q6:A French woman\n" +
            "P :	committed suicide\n" +
            "Q :	where she had put up\n" +
            "R :	who had come to Calcutta\n" +
            "S :	by jumping from the first floor balcony of the hotel\n" +
            "The Proper sequence should be:\n",
        a: "PRQS",
        b: "QSRP",
        c: "RPSQ",
        d: "SRQP",
        ans: "ans3",
    },
    {
        question: "Q7:The national unity of a free people\n" +
            "P :	to make it impracticable\n" +
            "Q :	for there to be an arbitrary administration\n" +
            "R :	depends upon a sufficiently even balance of political power\n" +
            "S :	against a revolutionary opposition that is irreconcilably opposed to it\n" +
            "The Proper sequence should be:",
        a: "QRPS",
        b: "QRSP",
        c: "RPQS",
        d: "RSPQ",
        ans: "ans4",
    },
    {
        question: "Q8:The grocer\n" +
            "P :	did not listen to the protests of customer\n" +
            "Q :	who was in the habit of weighing less\n" +
            "R :	whom he had cheated\n" +
            "S :	with great audacity\n" +
            "The Proper sequence should be:",
        a: "PRSQ",
        b: "QSPR",
        c: "QPRS",
        d: "PQSR",
        ans: "ans3",
    },
    {
        question: "Q9:They felt safer\n" +
            "P :	to watch the mountain\n" +
            "Q :	of more than five miles\n" +
            "R :	as they settled down\n" +
            "S :	from a distance\n" +
            "The Proper sequence should be:\n",
        a: "RPSQ",
        b: "RSQP",
        c: "PQSR",
        d: "PRSQ3",
        ans: "ans1",
    },
    {
        question: "Q10:	People\n" +
            "P :	at his dispensary\n" +
            "Q :	went to him\n" +
            "R :	of all professions\n" +
            "S :	for medicine and treatment\n" +
            "The Proper sequence should be:\n",
        a: "QPRS",
        b: "RPQS",
        c: "RQSP",
        d: "QRPS",
        ans: "ans3",
    },
]


const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer')

const showScore = document.querySelector('#showScore')

let questionCount = 0
let score = 0

const loadQuestion = () => {
    const questionList1 = testDB[questionCount]
    question.innerText = questionList1.question

    option1.innerText = questionList1.a
    option2.innerText = questionList1.b
    option3.innerText = questionList1.c
    option4.innerText = questionList1.d


}

loadQuestion()



const getCheckAnswer = () => {

    let answer;

    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked) {
            answer = curAnsElem.id
        }
    });
    return answer
};

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false)
}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer()
    console.log(checkedAnswer);

    if (checkedAnswer === testDB[questionCount].ans) {
        score++
    };
    questionCount++;

    deselectAll()

    if (questionCount < testDB.length) {
        loadQuestion()
    } else {

        showScore.innerHTML = `
        <h3>You Scored ${score}/${testDB.length} </h3>
        <button class="btn" onclick="location.reload()">ReTest</button>
        `;

        showScore.classList.remove('scoreArea')
    }

});