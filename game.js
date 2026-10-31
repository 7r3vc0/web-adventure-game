alert("You enter the Lost and Found. Something is watching you...");
alert("A whisper: 'Some things are better left lost...'");
const title = document.getElementById('game-title');
console.log(title);
const mainPanel = document.querySelector('.main-panel');
console.log(mainPanel);
const startButton = document.querySelector('.start-button');
console.log(startButton);
const characters = document.querySelectorAll('.character-card');
console.log(characters);
const questNameInput = document.getElementById("quest-name-input");
const questNamePreview = document.getElementById("quest-name-preview");
questNameInput.addEventListener("input", function() {
  const name = questNameInput.value.trim();
  questNamePreview.textContent = name
  ? `Quest Name: ${name}` 
  : "Quest Name: [unnamed]";
});
const questSelect = document.querySelector("#quest-select");
const setActiveQuestButton = document.querySelector("#set-active-quest");
const activeQuestDisplay = document.querySelector("#active-quest-display");
const firstCharacter = characters[0];
const secondCharacter = characters[1];
firstCharacter.addEventListener('click', selectRoger);
secondCharacter.addEventListener('click', selectStacy);
console.log(firstCharacter);
console.log(secondCharacter);
const lostItems = document.querySelectorAll('.quest-step');
console.log(lostItems[0]);
title.textContent = "Lost and Found: Monster Echoes";

const introParagraph = document.querySelector('.main-panel p');
introParagraph.textContent = "You wake up in a school where every sound attracts hungry monster...";
firstCharacter.textContent = 'Roger: [CLASSIFIED] -All data corrupted...';

secondCharacter.innerHTML = `
  <h2>Stacy</h2>
  <p><strong>Role:</strong> Echo Tracker</p>
  <p><em>Ability:</em> Marks nearby lost items when you stay silent.</p>
`;
const moonImage = document.querySelector('.main-panel img');
moonImage.src = './images/Dark school.png';
moonImage.alt = 'dark school hallway with flickering lights';
mainPanel.style.backgroundColor = 'black';
mainPanel.style.color = 'red';
mainPanel.style.border = '3px solid darkred';
mainPanel.style.padding = '20px';
mainPanel.style.borderRadius = '10px 45px';

startButton.style.backgroundColor = 'black';
startButton.style.color = 'white';
startButton.style.fontSize = '24px';
startButton.style.borderRadius = '12px';

startButton.addEventListener('click', startGame);

function startGame() {
  introParagraph.classList.add('fade-out');
  setTimeout(() => {
    introParagraph.textContent = "You take a deep breath and step into the echoing halls....";
    introParagraph.classList.remove('fade-out');
  }, 700);
}

function selectRoger() {
  firstCharacter.classList.add('selected');
  secondCharacter.classList.remove('selected');
  introParagraph.textContent = "Roger steps forward. Heavy footsteps echo down the hallway...";
}

function selectStacy() {
  secondCharacter.classList.add('selected');
  firstCharacter.classList.remove('selected');
  introParagraph.textContent = "Stacy scans the darkness, her ears twitching for the faintest echo of lost items...";
}  

const rogerCard = characters[0];

rogerCard.addEventListener('click', function() {
  introParagraph.textContent = "Roger steps forward. Heavy footsteps echo down the hallway...";
});

const questForm = document.querySelector('#quest-form');
const questList = document.querySelector('#quest-list');

questForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const dateInput = document.querySelector('#todays-date-input');
  const questInput = document.querySelector('#quest-name-input');
  const dateValue = dateInput.value;
  const questValue = questInput.value;
  console.log("Quest form submitted");
  console.log("Date:", dateValue);
  console.log("Quest Name:", questValue);
  const newQuestItem = document.createElement('li');
  const questText = document.createElement('span');
  questText.textContent = `${dateValue} -  Quest: ${questValue}`;
  const option = document.createElement('option');
  option.value = questValue;
  option.textContent = questText.textContent;
  questSelect.appendChild(option);
  newQuestItem.appendChild(questText);

  newQuestItem.addEventListener('click', function() {
    questText.classList.toggle('done');
  });
  questList.appendChild(newQuestItem);
  const abandonButton = document.createElement('button');
  abandonButton.textContent = 'Abandon Quest';
  abandonButton.addEventListener('click', function(event) {
    event.stopPropagation();
    newQuestItem.remove();
    option.remove();
  });
  newQuestItem.appendChild(abandonButton);
});

setActiveQuestButton.addEventListener('click', function() {
  const selectedOption = questSelect.value;
  if (!selectedOption) {
    activeQuestDisplay.textContent = "Active Quest: [none selected]";
    return;
  }
  activeQuestDisplay.textContent = `Active Quest: ${selectedOption}`;
});

const monsterForm = document.querySelector('#monster-form');
const monsterList = document.querySelector('#monster-list');

monsterForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const monsterInput = document.querySelector('#monster-name-input');
  const monsterValue = monsterInput.value;
  console.log("Monster form submitted");
  console.log("Monster Name:", monsterValue);
  const newMonsterItem = document.createElement('li');
  newMonsterItem.textContent = monsterValue;
  monsterList.appendChild(newMonsterItem);
});

// TODO: add sound-based monster detection logic