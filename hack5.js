document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let score = 0;
    const answers = {
        q1: 'A',
        q2: 'A',
        q3: 'C',
        q4: 'D',
        q5: 'C',
        q6:  'A',
        q7:  'B',
        q8:  'C',
        q9:  'D',
        q10:  'B',
        q11:   'A',
        q12:    'C',
        q13:  'B',
        q14:  'A',
        q15: 'B',
        q16:  'B',
        q17:  'B',
        q18: 'C',
        q19: 'B',
        q20: 'C',
        q21: 'B',
        q22: 'C',
        q23: 'C',
        q24: 'C',
        q25: 'B',
    };

    for (let question in answers) {
        const userAnswer = document.querySelector(`input[name="${question}"]:checked`);
        if (userAnswer && userAnswer.value === answers[question]) {
            score++;
        }
    }

    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `You scored ${score} out of ${Object.keys (answers).length}.`;
});