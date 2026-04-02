const quizForm = document.getElementById("lunchQuiz");
const hungerSlider = document.getElementById("hunger");
const hungerValue = document.getElementById("hungerValue");

const resultSection = document.getElementById("result");
const resultTitle = document.getElementById("resultTitle");
const resultImage = document.getElementById("resultImage");
const resultText = document.getElementById("resultText");
const restartBtn = document.getElementById("restartBtn");

// Update the visible hunger number when the slider moves
hungerSlider.addEventListener("input", () => {
  hungerValue.textContent = hungerSlider.value;
});

// Handle quiz submission
quizForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const hunger = parseInt(hungerSlider.value);
  const fit = document.querySelector('input[name="fit"]:checked')?.value;
  const vibe = document.querySelector('input[name="vibe"]:checked')?.value;

  const result = getLunchResult(hunger, fit, vibe);

  resultTitle.textContent = result.name;
  resultImage.src = result.image;
  resultImage.alt = result.name;
  resultText.textContent = result.description;

  resultSection.classList.remove("hidden");
  resultSection.scrollIntoView({ behavior: "smooth" });
});

// Reset the quiz
restartBtn.addEventListener("click", () => {
  quizForm.reset();
  hungerSlider.value = 5;
  hungerValue.textContent = 5;
  resultSection.classList.add("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Quiz logic
function getLunchResult(hunger, fit, vibe) {
  // Automatic horse if slider is all the way right
  if (hunger === 10) {
    return {
      name: "A Horse",
      image: "LunchOptions/horse.jpg",
      description: "You did say you could eat a horse, and this quiz believes in taking people literally."
    };
  }

  let latteScore = 0;
  let pokeScore = 0;
  let candyScore = 0;

  // Hunger scoring
  if (hunger <= 3) {
    latteScore += 3;
    candyScore += 1;
  } else if (hunger <= 7) {
    pokeScore += 3;
    latteScore += 1;
  } else {
    pokeScore += 2;
    candyScore += 2;
  }

  // Outfit scoring
  if (fit === "pajamas") {
    latteScore += 3;
  } else if (fit === "athleisure") {
    pokeScore += 3;
  } else if (fit === "dolledup") {
    pokeScore += 2;
    candyScore += 1;
  } else if (fit === "embarrassed") {
    candyScore += 3;
  }

  // Image vibe scoring
  if (vibe === "img1") {
    latteScore += 2;
  } else if (vibe === "img2") {
    pokeScore += 2;
  } else if (vibe === "img3") {
    candyScore += 2;
  } else if (vibe === "img4") {
    pokeScore += 1;
    candyScore += 2;
  }

  // Final result
  if (latteScore >= pokeScore && latteScore >= candyScore) {
    return {
      name: "A Latte",
      image: "LunchOptions/latte.jpg",
      description: "Your energy says lunch is optional, but caffeine is absolutely necessary."
    };
  }

  if (pokeScore >= latteScore && pokeScore >= candyScore) {
    return {
      name: "Poke Bowl",
      image: "LunchOptions/poke.jpg",
      description: "You are giving balanced, capable, semi-responsible lunch energy."
    };
  }

  return {
    name: "Sour Candy",
    image: "LunchOptions/candy.jpg",
    description: "Today’s lunch choice is pure chaos, and honestly, we support it."
  };
}
