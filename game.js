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
const heroNameInput = document.getElementById("hero-name-input");
const heroNamePreview = document.getElementById("hero-name-preview");
heroNameInput.addEventListener("input", function() {
  const name = heroNameInput.value.trim();
  heroNamePreview.textContent = name
  ? `Hero Name: ${name}` 
  : "Hero Name: [unnamed]";
});
const firstChracter = characters[0];
const secondCharacter = characters[1];
firstChracter.addEventListener('click', selectRoger);
secondCharacter.addEventListener('click', selectStacy);
console.log(firstChracter);
console.log(secondCharacter);
const lostItems = document.querySelectorAll('.quest-step');
console.log(lostItems[0]);
title.textContent = "Lost and Found: Monster Echoes";

const introParagraph = document.querySelector('.main-panel p');
introParagraph.textContent = "You wake up in a school where every sound attracts hungry monster...";
firstChracter.textContent = 'Roger: [CLASSIFIED] -All data corrupted...';

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
  firstChracter.classList.add('selected');
  secondCharacter.classList.remove('selected');
  introParagraph.textContent = "Roger steps forward. Heavy footsteps echo down the hallway...";
}

function selectStacy() {
  secondCharacter.classList.add('selected');
  firstChracter.classList.remove('selected');
  introParagraph.textContent = "Stacy scans the darkness, her ears twitching for the faintest echo of lost items...";
}  

const rogerCard = characters[0];

rogerCard.addEventListener('click', function() {
  introParagraph.textContent = "Roger steps forward. Heavy footsteps echo down the hallway...";
});

// TODO: add sound-based monster detection logic