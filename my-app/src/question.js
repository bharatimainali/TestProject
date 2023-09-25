/*This file contains an array of question objects. Each question object has a title, 
an array of answer objects, and a helper object with additional information. 
This file seems unrelated to the component and test files and might be used in
 a different part of your project.*/
const questions = [
    {
        title: 'What is the capital of France?',
        answers: [{ answer: 'Berlin' }, { answer: 'Madrid' }, { answer: 'Paris', correct: true }, { answer: 'London' }],
        helper: {
            text: 'Hint: The city is known for the Eiffel Tower.',
        },
    },
    {
        title: 'Which is the largest planet?',
        answers: [{ answer: 'Earth' }, { answer: 'Mars' }, { answer: 'Jupiter', correct: true }, { answer: 'Venus' }],
        helper: {
            text: 'Hint: It has the Great Red Spot.',
        },
    },
    {
        title: 'What is the square root of 16?',
        answers: [{ answer: '2' }, { answer: '4', correct: true }, { answer: '6' }, { answer: '8' }],
        helper: {
            text: "Hint: It's an even number.",
        },
    },
    {
        title: "Who wrote 'Romeo and Juliet'?",
        answers: [
            { answer: 'Mark Twain' },
            { answer: 'William Shakespeare', correct: true },
            { answer: 'J.K. Rowling' },
            { answer: 'George Orwell' },
        ],
        helper: {
            text: 'Hint: The author is known for plays.',
        },
    },
];

export default questions;
