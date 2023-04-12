const testDB = [
    {
        question: "Q1:Tanya is older than Eric.\n" +
            "   Cliff is older than Tanya.\n" +
            "   Eric is older than Cliff.\n" +
            "   If the first two statements are true, the third statement is:",
        a: "True",
        b: "False",
        c: "Uncertain",
        ans: "ans2",
    },
    {
        question: "Q2:Blueberries cost more than strawberries.\n" +
            "   Blueberries cost less than raspberries.\n" +
            "   Raspberries cost more than strawberries and blueberries.\n" +
            "   If the first two statements are true, the third statement is:",
        a: "True",
        b: "False",
        c: "Uncertain",
        ans: "ans1",
    },
    {
        question: "Q3:All the trees in the park are flowering trees.\n" +
            "   Some of the trees in the park are dogwoods.\n" +
            "   All dogwoods in the park are flowering trees.\n" +
            "   If the first two statements are true, the third statement is:",
        a: "True",
        b: "False",
        c: "Uncertain",
        ans: "ans1",
    },
    {
        question: "Q4:Mara runs faster than Gail.\n" +
            "   Lily runs faster than Mara.\n" +
            "   Gail runs faster than Lily.\n" +
            "   If the first two statements are true, the third statement is:",
        a: "True",
        b: "False",
        c: "Uncertain",
        ans: "ans2",
    },
    {
        question: "Q5:Apartments in the Riverdale Manor cost less than apartments in The Gaslight Commons.\n" +
            "   Apartments in the Livingston Gate cost more than apartments in the The Gaslight Commons.\n" +
            "   Of the three apartment buildings, the Livingston Gate costs the most.\n" +
            "   If the first two statements are true, the third statement is:",
        a: "True",
        b: "False",
        c: "Uncertain",
        ans: "ans1",
    },
    {
        question: "Q6:The Kingston Mall has more stores than the Galleria.\n" +
            "   The Four Corners Mall has fewer stores than the Galleria.\n" +
            "   The Kingston Mall has more stores than the Four Corners Mall.\n" +
            "   If the first two statements are true, the third statement is:\n",
        a: "True",
        b: "False",
        c: "Uncertain",
        ans: "ans1",
    },
    {
        question: "Q7:All the tulips in Zoe's garden are white.\n" +
            "   All the pansies in Zoe's garden are yellow.\n" +
            "   All the flowers in Zoe's garden are either white or yellow.\n" +
            "   If the first two statements are true, the third statement is:",
        a: "True",
        b: "False",
        c: "Uncertain",
        ans: "ans3",
    },
    {
        question: "Q8:During the past year, Josh saw more movies than Stephen.\n" +
            "   Stephen saw fewer movies than Darren.\n" +
            "   Darren saw more movies than Josh.\n" +
            "   If the first two statements are true, the third statement is:",
        a: "True",
        b: "False",
        c: "Uncertain",
        ans: "ans3",
    },
    {
        question: "Q9:Rover weighs less than Fido.\n" +
            "   Rover weighs more than Boomer.\n" +
            "   Of the three dogs, Boomer weighs the least.\n" +
            "   If the first two statements are true, the third statement is:",
        a: "True",
        b: "False",
        c: "Uncertain",
        ans: "ans1",
    },
    {
        question: "Q10:All the offices on the 9th floor have wall-to-wall carpeting.\n" +
            "   No wall-to-wall carpeting is pink.\n" +
            "   None of the offices on the 9th floor has pink wall-to-wall carpeting.\n" +
            "   If the first two statements are true, the third statement is:",
        a: "True",
        b: "False",
        c: "Uncertain",
        ans: "ans1",
    },
    {
        question: "Q11:Class A has a higher enrollment than Class B.\n" +
            "Class C has a lower enrollment than Class B.\n" +
            "Class A has a lower enrollment than Class C.\n" +
            "   If the first two statements are true, the third statement is:",
        a: "True",
        b: "False",
        c: "Uncertain",
        ans: "ans2",
    },
]


const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
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