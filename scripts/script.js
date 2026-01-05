import { questions } from "./quiz316.3.js";
console.log(questions)
var menuLinks = [
  {
    text: 'Create New Study Guide', href: '/#', subLinks: [
      {}
    ]
  },
  { text: 'List of Guides', href: '/guides' },
  { text: 'Recent Scores', href: '/scores' },

];
//Getting Started
const mainEl = document.querySelector('main');
mainEl.style.backgroundColor = 'var(--main-bg)';
mainEl.innerHTML = '<h1>DOM Manipulation</h1>';
mainEl.classList.add('flex-ctr');

//Creating Menubar
const topMenuEl = document.querySelector('#top-menu');
topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.classList.add('flex-around')

//Adding MenuButtons
menuLinks.forEach(link => {
  const a = document.createElement('a')
  a.href = link.href
  a.textContent = link.text
  topMenuEl.appendChild(a)
});

const questionElement = document.getElementById('questions');
questionElement.innerText = questions[0]['question']
let choices = questions[0]['choices']
for (const choice of choices) {
  console.log(choice)
  // Create a radio button
  const radio = document.createElement('input');
  radio.type = 'radio';
  radio.name = 'options'; // Same name groups radio buttons together
  radio.value = choice;
  radio.id = choice ;

  // Create a label for the radio button
  const label = document.createElement('label');
  label.htmlFor = choice;
  label.textContent = choice;

  // Append to the page
  questionElement.appendChild(radio);
  questionElement.appendChild(label);


}

