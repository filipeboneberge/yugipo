let result = document.querySelector(".result");
let scorePlayer = document.querySelector(".score-player");
let scoreMachine = document.querySelector(".score-machine");
let playerResult = document.querySelector("#player-result");
let machineResult = document.querySelector("#machine-result");
let scoreHuman = 0;
let scoreComputer = 0;

//PLAYER JOGA
function player(human, machine) {
  // console.log(human);
  machine = computer(machine);
  // console.log(machine);

  //EMPATE
  if (human === machine) {
    if (human === "rock" && machine === "rock") {
      playerResult.src = "./images/rock.png";
      machineResult.src = "./images/rock.png";
    }
    if (human === "paper" && machine === "paper") {
      playerResult.src = "./images/paper.png";
      machineResult.src = "./images/paper.png";
    }
    if (human === "scissors" && machine === "scissors") {
      playerResult.src = "./images/scissors.png";
      machineResult.src = "./images/scissors.png";
    }
    console.log("Deu Empate!");
    result.innerHTML = "👐 Deu Empate!";
  }

  //PLAYER GANHA
  else if (human === "rock" && machine === "scissors") {
    playerResult.src = "./images/rock.png";
    machineResult.src = "./images/scissors.png";
    result.innerHTML = "👍 Você Venceu!";
    scoreHuman++;
    scorePlayer.innerHTML = scoreHuman;
  } else if (human === "paper" && machine === "rock") {
    playerResult.src = "./images/paper.png";
    machineResult.src = "./images/rock.png";
    result.innerHTML = "👍 Você Venceu!";
    scoreHuman++;
    scorePlayer.innerHTML = scoreHuman;
  } else if (human === "scissors" && machine === "paper") {
    playerResult.src = "./images/scissors.png";
    machineResult.src = "./images/paper.png";
    result.innerHTML = "👍 Você Venceu!";
    scoreHuman++;
    scorePlayer.innerHTML = scoreHuman;
  }

  //COMPUTER GANHA
  else if (human === "scissors" && machine === "rock") {
    playerResult.src = "./images/scissors.png";
    machineResult.src = "./images/rock.png";
    result.innerHTML = "👎 Você Perdeu!";
    scoreComputer++;
    scoreMachine.innerHTML = scoreComputer;
  } else if (human === "rock" && machine === "paper") {
    playerResult.src = "./images/rock.png";
    machineResult.src = "./images/paper.png";
    result.innerHTML = "👎 Você Perdeu!";
    scoreComputer++;
    scoreMachine.innerHTML = scoreComputer;
  } else if (human === "paper" && machine === "scissors") {
    playerResult.src = "./images/paper.png";
    machineResult.src = "./images/scissors.png";
    result.innerHTML = "👎 Você Perdeu!";
    scoreComputer++;
    scoreMachine.innerHTML = scoreComputer;
  }

  // DESVIRA IMAGENS
  setTimeout(() => {
    playerResult.src = "./images/question.png";
    machineResult.src = "./images/question.png";
  }, 3000);
}

// COMPUTER JOGA
function computer(machine) {
  const jokenpo = ["rock", "paper", "scissors"];
  machine = Math.floor(Math.random() * 3);
  return jokenpo[machine];
}
