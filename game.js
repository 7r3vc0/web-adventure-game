const voidOverlay = document.querySelector('.void-overlay');
const voidLine1 = document.querySelector('.void-line-1');
const voidLine2 = document.querySelector('.void-line-2');
const voidLine3 = document.querySelector('.void-line-3');
const pageContent = document.querySelector('.page-content');
const title = document.getElementById('game-title');
const mainPanel = document.querySelector('.main-panel');
const startButton = document.querySelector('.start-button');
const characters = document.querySelectorAll('.character-card');
const questNameInput = document.getElementById("quest-name-input");
const questNamePreview = document.getElementById("quest-name-preview");
const questSelect = document.querySelector("#quest-select");
const setActiveQuestButton = document.querySelector("#set-active-quest");
const activeQuestDisplay = document.querySelector("#active-quest-display");
const firstCharacter = characters[0];
const secondCharacter = characters[1];
const lostItems = document.querySelectorAll('.quest-step');
const introText = document.querySelector('.intro-text');
const introSubtext = document.querySelector('.intro-subtext');
const characterRow = document.querySelector('.character-row');
const storyImage = document.querySelector('.story-image');
const narratorText = document.querySelector('.fade-text');
title.textContent = "Lost and Found: Monster Echoes";
questNameInput.addEventListener("input", function() {
  const name = questNameInput.value.trim();
  questNamePreview.textContent = name
  ? `Quest Name: ${name}` 
  : "Quest Name: [unnamed]";
});

const introParagraph = document.querySelector('.main-panel p');
introParagraph.textContent = "You wake up in a school where every sound attracts hungry monster...";

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

window.addEventListener('load', () => {
  setTimeout(() => {
    voidLine1.classList.add('show');
  }, 600);
  
  setTimeout(() => {
    voidLine2.classList.add('show');
  }, 4200);
  
  setTimeout(() => {
    voidLine3.classList.add('show');
  }, 6500);
  
  setTimeout(() => {
    voidOverlay.classList.add('hidden');
    pageContent.classList.remove('faded');
  }, 10000);
});

function startGame() {
  // fade out intro text + button
  introText.classList.add('fade-out');
  introSubtext.classList.add('fade-out');
  startButton.classList.add('fade-out');
  
  setTimeout(() => {
    // hide them completely
    introText.classList.add('hidden');
    introSubtext.classList.add('hidden');
    startButton.classList.add('hidden');
    
    // show character row
    characterRow.classList.remove('hidden');
    characterRow.classList.remove('fade-out'); // just in case
  }, 700);
}

function typeText(element, text, speed = 40) {
  element.textContent = '';
  let index = 0;
  
  const intervalId = setInterval(() => {
    element.textContent += text[index];
    index++;
    
    if (index >= text.length) {
      clearInterval(intervalId);
    }
  }, speed);
}

firstCharacter.addEventListener('click', selectRoger);
secondCharacter.addEventListener('click', selectStacy);

function selectRoger() {
  firstCharacter.classList.add('selected');
  secondCharacter.classList.remove('selected');

  characterRow.classList.add('hidden');
  storyImage.classList.remove('hidden');

  narratorText.classList.remove('hidden');
  narratorText.classList.remove('fade-out');
  const text = "Roger steps forward. Heavy footsteps echo down the hallway...";
  typeText(narratorText, text, 40);
}

function selectStacy() {
  secondCharacter.classList.add('selected');
  firstCharacter.classList.remove('selected');

  characterRow.classList.add('hidden');
  storyImage.classList.remove('hidden');

  narratorText.classList.remove('hidden');
  narratorText.classList.remove('fade-out');
  const text = "Stacy scans the darkness, her ears twitching for the faintest echo of lost items...";
  typeText(narratorText, text, 40);
}  

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

function d20() {
  const roll = Math.floor(Math.random() * 20) + 1;
  console.log(roll);
  return roll;
}

d20();
d20();
d20();
d20();
d20();
d20();
// TODO: add sound-based monster detection logic