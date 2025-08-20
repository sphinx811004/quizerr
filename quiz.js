const questions = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "Paris", correct: true },
      { text: "London", correct: false },
      { text: "Rome", correct: false },
      { text: "Berlin", correct: false }
    ]
  },{
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Mars", correct: true },
      { text: "Venus", correct: false },
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: false }
    ]
  },
  {
    question: "Who developed the theory of relativity?",
    answers: [
      { text: "Albert Einstein", correct: true },
      { text: "Isaac Newton", correct: false },
      { text: "Nikola Tesla", correct: false },
      { text: "Galileo Galilei", correct: false }
    ]
  },
  {
    question: "What is the largest mammal in the world?",
    answers: [
      { text: "Blue Whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
      { text: "Hippopotamus", correct: false }
    ]
  },
  {
    question: "Which programming language is known as the backbone of web development?",
    answers: [
      { text: "JavaScript", correct: true },
      { text: "Python", correct: false },
      { text: "C++", correct: false },
      { text: "Java", correct: false }
    ]
  }]


let iterator = 0; // track current question
let score=0;

function showQuestion(index) {
  if (index >= questions.length) {
    document.querySelector(".container").innerHTML = `<h2>Quiz Finished 🎉<br> score: ${score}</h2>`;
    return;
  }

  const q = questions[index];
  let htmll = `
    <div class="question">${q.question}</div>
    <div class="options">
      ${q.answers
        .map(
          (ans, i) =>
            `<button class="option" data-index="${i}">${ans.text}</button>`
        )
        .join("")}
    </div>
  `;

  document.querySelector(".container").innerHTML = htmll;

  // add event listeners again for the new buttons
  document.querySelectorAll(".option").forEach((btn, i) => {
    btn.addEventListener("click", () => {
      console.log("Clicked:", q.answers[i].text, "Correct:", q.answers[i].correct);
      iterator++;
      if(q.answers[i].correct) {
        score++;
        console.log("Correct Answer! Current Score:", score);
      }
      showQuestion(iterator);
    });
  });
}

// start quiz
showQuestion(iterator);