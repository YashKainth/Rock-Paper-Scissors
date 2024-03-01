let result = "";
let computer_turn = "";
const computerChoiceElement = document.getElementById("computerChoice");
let win = parseInt(localStorage.getItem("win")) || 0,
  lose = parseInt(localStorage.getItem("lose")) || 0,
  tie = parseInt(localStorage.getItem("tie")) || 0;
const winElement = document.getElementById("win");
const loseElement = document.getElementById("lose");
const tieElement = document.getElementById("tie");
const rockp = document.querySelector(".rock-p");
const paperp = document.querySelector(".paper-p");
const scissorsp = document.querySelector(".scissor-p");
const rockc = document.querySelector(".rock-c");
const paperc = document.querySelector(".paper-c");
const scissorsc = document.querySelector(".scissor-c");

function saveScores() {
  localStorage.setItem("win", win);
  localStorage.setItem("lose", lose);
  localStorage.setItem("tie", tie);
}

function value() {
  const computer_value = Math.floor(Math.random() * 30) + 1;
  console.log(computer_value);

  if (computer_value >= 1 && computer_value < 10) {
    computer_turn = "rock";
  }
  if (computer_value >= 10 && computer_value < 20) {
    computer_turn = "paper";
  }
  if (computer_value >= 20 && computer_value < 30) {
    computer_turn = "scissors";
  }
} // Delay of 1 second (1000 milliseconds)

function finalresult() {
  if (result == "win") {
    win++;
    winner();
  } else if (result == "lose") {
    lose++;
    loser();
  } else if (result == "tie") {
    tie++;
    draw();
  }
  winElement.textContent = win;
  loseElement.textContent = lose;
  tieElement.textContent = tie;
  saveScores();
}

function rock() {
  value();
  if (computer_turn == "rock") result = "tie";
  else if (computer_turn == "paper") result = "lose";
  else result = "win";
  finalresult();
}

function paper() {
  value();
  if (computer_turn == "rock") result = "win";
  else if (computer_turn == "paper") result = "tie";
  else result = "lose";
  finalresult();
}

function scissors() {
  value();
  if (computer_turn == "rock") result = "lose";
  else if (computer_turn == "paper") result = "win";
  else result = "tie";
  finalresult();
}

function reset() {
  win = 0;
  lose = 0;
  tie = 0;
  winElement.textContent = win;
  loseElement.textContent = lose;
  tieElement.textContent = tie;
  saveScores();
}

const computerbutton = document.querySelector(".computer");

computerbutton.addEventListener("mouseover", function () {
  computerbutton.classList.add(
    "opacity-50",
    "duration-300",
    "ease",
    "transition-all",
    "cursor-not-allowed"
  );
});
computerbutton.addEventListener("mouseout", function () {
  computerbutton.classList.remove(
    "opacity-50",
    "duration-300",
    "ease",
    "transition-all",
    "cursor-not-allowed"
  );
});
computerbutton.addEventListener("click", function () {
  alert("Computer's Move");
});
/* 
function winner() {
  if (computer_turn == "rock") {
    rockc.classList.add("border-red-500", "text-red-500");
    rockc.classList.remove("border-sky-500", "text-sky-500");
    paperp.classList.add("border-green-500", "text-green-500");
    paperp.classList.remove("border-sky-500", "text-sky-500");
    setTimeout(normal, 1000);
  } else if (computer_turn == "paper") {
    paperc.classList.add("border-red-500", "text-red-500");
    paperc.classList.remove("border-sky-500", "text-sky-500");
    scissorsp.classList.add("border-green-500", "text-green-500");
    scissorsp.classList.remove("border-sky-500", "text-sky-500");
    setTimeout(normal, 1000);
  } else if (computer_turn == "scissors") {
    scissorsc.classList.add("border-red-500", "text-red-500");
    scissorsc.classList.remove("border-sky-500", "text-sky-500");
    rockp.classList.add("border-green-500", "text-green-500");
    rockp.classList.remove("border-sky-500", "text-sky-500");
    setTimeout(normal, 1000);
  }
}

function loser() {
  if (computer_turn == "rock") {
    rockc.classList.add("border-green-500", "text-green-500");
    rockc.classList.remove("border-sky-500", "text-sky-500");
    scissorsp.classList.add("border-red-500", "text-red-500");
    scissorsp.classList.remove("border-sky-500", "text-sky-500");
    setTimeout(normal, 1000);
  } else if (computer_turn == "paper") {
    rockp.classList.add("border-red-500", "text-red-500");
    rockp.classList.remove("border-sky-500", "text-sky-500");
    paperc.classList.add("border-green-500", "text-green-500");
    paperc.classList.remove("border-sky-500", "text-sky-500");
    setTimeout(normal, 1000);
  } else if (computer_turn == "scissors") {
    paperp.classList.add("border-red-500", "text-red-500");
    paperp.classList.remove("border-sky-500", "text-sky-500");
    scissorsc.classList.add("border-green-500", "text-green-500");
    scissorsc.classList.remove("border-sky-500", "text-sky-500");
    setTimeout(normal, 1000);
  }
}

function draw() {
  if (computer_turn == "rock") {
    rockc.classList.add("border-yellow-500", "text-yellow-500");
    rockc.classList.remove("border-sky-500", "text-sky-500");
    rockp.classList.add("border-yellow-500", "text-yellow-500");
    rockp.classList.remove("border-sky-500", "text-sky-500");
    setTimeout(normal, 1000);
  } else if (computer_turn == "paper") {
    paperc.classList.add("border-yellow-500", "text-yellow-500");
    paperc.classList.remove("border-sky-500", "text-sky-500");
    paperp.classList.add("border-yellow-500", "text-yellow-500");
    paperp.classList.remove("border-sky-500", "text-sky-500");
    setTimeout(normal, 1000);
  } else if (computer_turn == "scissors") {
    scissorsc.classList.add("border-yellow-500", "text-yellow-500");
    scissorsc.classList.remove("border-sky-500", "text-sky-500");
    scissorsp.classList.add("border-yellow-500", "text-yellow-500");
    scissorsp.classList.remove("border-sky-500", "text-sky-500");
    setTimeout(normal, 1000);
  }
}
*/
function normal() {
  rockc.classList.remove(
    "border-red-500",
    "border-yellow-500",
    "text-red-500",
    "text-yellow-500",
    "border-green-500",
    "text-green-500"
  );
  rockc.classList.add("border-sky-500", "text-sky-500");
  paperc.classList.remove(
    "border-red-500",
    "border-yellow-500",
    "text-red-500",
    "text-yellow-500",
    "border-green-500",
    "text-green-500"
  );
  paperc.classList.add("border-sky-500", "text-sky-500");
  scissorsc.classList.remove(
    "border-red-500",
    "border-yellow-500",
    "text-red-500",
    "text-yellow-500",
    "border-green-500",
    "text-green-500"
  );
  scissorsc.classList.add("border-sky-500", "text-sky-500");
  rockp.classList.remove(
    "border-red-500",
    "border-yellow-500",
    "text-red-500",
    "text-yellow-500",
    "border-green-500",
    "text-green-500"
  );
  rockp.classList.add("border-sky-500", "text-sky-500");
  paperp.classList.remove(
    "border-red-500",
    "border-yellow-500",
    "text-red-500",
    "text-yellow-500",
    "border-green-500",
    "text-green-500"
  );
  paperp.classList.add("border-sky-500", "text-sky-500");
  scissorsp.classList.remove(
    "border-red-500",
    "border-yellow-500",
    "text-red-500",
    "text-yellow-500",
    "border-green-500",
    "text-green-500"
  );
  scissorsp.classList.add("border-sky-500", "text-sky-500");
}

function updateClasses(element, addClasses, removeClasses) {
  element.classList.remove(...removeClasses);
  element.classList.add(...addClasses);
  setTimeout(normal, 1000);
}

function winner() {
  if (computer_turn == "rock") {
    updateClasses(
      rockc,
      ["border-red-500", "text-red-500"],
      ["border-sky-500", "text-sky-500"]
    );
    updateClasses(
      paperp,
      ["border-green-500", "text-green-500"],
      ["border-sky-500", "text-sky-500"]
    );
  } else if (computer_turn == "paper") {
    updateClasses(
      paperc,
      ["border-red-500", "text-red-500"],
      ["border-sky-500", "text-sky-500"]
    );
    updateClasses(
      scissorsp,
      ["border-green-500", "text-green-500"],
      ["border-sky-500", "text-sky-500"]
    );
  } else if (computer_turn == "scissors") {
    updateClasses(
      scissorsc,
      ["border-red-500", "text-red-500"],
      ["border-sky-500", "text-sky-500"]
    );
    updateClasses(
      rockp,
      ["border-green-500", "text-green-500"],
      ["border-sky-500", "text-sky-500"]
    );
  }
}

function loser() {
  if (computer_turn == "rock") {
    updateClasses(
      rockc,
      ["border-green-500", "text-green-500"],
      ["border-sky-500", "text-sky-500"]
    );
    updateClasses(
      scissorsp,
      ["border-red-500", "text-red-500"],
      ["border-sky-500", "text-sky-500"]
    );
  } else if (computer_turn == "paper") {
    updateClasses(
      rockp,
      ["border-red-500", "text-red-500"],
      ["border-sky-500", "text-sky-500"]
    );
    updateClasses(
      paperc,
      ["border-green-500", "text-green-500"],
      ["border-sky-500", "text-sky-500"]
    );
  } else if (computer_turn == "scissors") {
    updateClasses(
      paperp,
      ["border-red-500", "text-red-500"],
      ["border-sky-500", "text-sky-500"]
    );
    updateClasses(
      scissorsc,
      ["border-green-500", "text-green-500"],
      ["border-sky-500", "text-sky-500"]
    );
  }
}

function draw() {
  if (computer_turn == "rock") {
    updateClasses(
      rockc,
      ["border-yellow-500", "text-yellow-500"],
      ["border-sky-500", "text-sky-500"]
    );
    updateClasses(
      rockp,
      ["border-yellow-500", "text-yellow-500"],
      ["border-sky-500", "text-sky-500"]
    );
  } else if (computer_turn == "paper") {
    updateClasses(
      paperc,
      ["border-yellow-500", "text-yellow-500"],
      ["border-sky-500", "text-sky-500"]
    );
    updateClasses(
      paperp,
      ["border-yellow-500", "text-yellow-500"],
      ["border-sky-500", "text-sky-500"]
    );
  } else if (computer_turn == "scissors") {
    updateClasses(
      scissorsc,
      ["border-yellow-500", "text-yellow-500"],
      ["border-sky-500", "text-sky-500"]
    );
    updateClasses(
      scissorsp,
      ["border-yellow-500", "text-yellow-500"],
      ["border-sky-500", "text-sky-500"]
    );
  }
}

finalresult();
