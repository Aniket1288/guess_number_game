let max;
    let random;

    function startGame() {
      max = parseInt(prompt("Enter the Max Number:"));
      random = Math.floor(Math.random() * max) + 1;
      document.getElementById("max-num").textContent = max;
      document.getElementById("message").textContent = "";
      document.getElementById("guessInput").value = "";
    }

    function checkGuess() {
      let guess = document.getElementById("guessInput").value;

      if (guess === "quit") {
        document.getElementById("message").textContent = "🚪 You quit the game!";
        setTimeout(startGame, 2000); // restart after 2 sec
        return;
      }

      guess = Number(guess);

      if (guess === random) {
        document.getElementById("message").textContent = `🎉 You are right! Congrats!! The number was ${random}`;
        setTimeout(startGame, 2000); // restart after 2 sec
      } else if (guess < random) {
        document.getElementById("message").textContent = "⬆️ Too small! Try again.";
      } else if (guess > random) {
        document.getElementById("message").textContent = "⬇️ Too large! Try again.";
      } else {
        document.getElementById("message").textContent = "⚠️ Please enter a valid number.";
      }
    }

    // Start game first time
    startGame();