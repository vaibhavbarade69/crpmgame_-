function play(playerChoice) {
      const choices = ['rock', 'paper', 'scissors'];
      const computerChoice = choices[Math.floor(Math.random() * choices.length)];

      document.querySelectorAll('.choice').forEach(element => {
        element.classList.remove('fadeIn');
        setTimeout(() => {
          element.classList.add('fadeIn');
        }, 100);
      });

      let result;

      if (playerChoice === computerChoice) {
        result = "It's a tie!";
      } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
      ) {
        result = "You win!";
      } else {
        result = "You lose!";
      }

      document.getElementById('result').innerText = `You chose ${playerChoice}. Computer chose ${computerChoice}. ${result}`;
    }