const testDB = [
    {
        question: "Q1:The price of commodity X increases by 40 paise every year, while the price of commodity Y increases by 15 paise every year. If in 2001, the price of commodity X was Rs. 4.20 and that of Y was Rs. 6.30, in which year commodity X will cost 40 paise more than the commodity Y ?",
        a: "2010",
        b: "2011",
        c: "2012",
        d: "2013",
        ans: "ans2",
    },
    {
        question: "Q2:There are two examinations rooms A and B. If 10 students are sent from A to B, then the number of students in each room is the same. If 20 candidates are sent from B to A, then the number of students in A is double the number of students in B. The number of students in room A is:",
        a: "20",
        b: "80",
        c: "100",
        d: "200",
        ans: "ans3",
    },
    {
        question: "Q3:If a - b = 3 and a2 + b2 = 29, find the value of ab.",
        a: "10",
        b: "12",
        c: "15",
        d: "18",
        ans: "ans1",
    },
    {
        question: "Q4:The product of two numbers is 120 and the sum of their squares is 289. The sum of the number is:",
        a: "20",
        b: "23",
        c: "169",
        d: "None of these",
        ans: "ans2",
    },
    {
        question: "Q5:The salaries A, B, C are in the ratio 2 : 3 : 5. If the increments of 15%, 10% and 20% are allowed respectively in their salaries, then what will be new ratio of their salaries?",
        a: "3 : 3 : 10",
        b: "10:11:20",
        c: "23:33:60",
        d: "Cannot be determined",
        ans: "ans3",
    },
    {
        question: "Q6:A and B entered into partnership with capitals in the ratio 4 : 5. After 3 months, A withdrew  of his capital and B withdrew  of his capital. The gain at the end of 10 months was Rs. 760. A's share in this profit is:",
        a: "Rs 330",
        b: "Rs 360",
        c: "Rs 380",
        d: "Rs 430",
        ans: "ans1",
    },
    {
        question: "Q7:What is R's share of profit in a joit venture?" +

            "I.Q started business investing Rs. 80,000." +

            "II.R joined him after 3 months." +

            "III.P joined after 4 months with a capital of Rs. 1,20,000 and got Rs. 6000 as his share profit.",


        a: "AII",
        b: "I and III only",
        c: "II and III only",
        d: "Even with all I, II and III, the answer cannot be arrived at",
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