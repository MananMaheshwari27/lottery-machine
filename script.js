let tickets = [];
for (let i = 1; i <= 350; i++) tickets.push(i);
tickets.sort(() => Math.random() - 0.5);

let prizes = [
  "🏆 GRAND PRIZE",
  "🥈 SECOND PRIZE",
  "🥈 SECOND PRIZE",
  "🥉 THIRD PRIZE",
  "🥉 THIRD PRIZE",
  "🥉 THIRD PRIZE",
  "⭐ PRIZE",
  "⭐ PRIZE",
  "⭐ PRIZE",
  "⭐ PRIZE",
  ...Array(20).fill("🎁 CONSOLATION")
];

let count = 0;

function draw() {
  if (count >= 30) {
    document.getElementById("result").innerText = "DRAW COMPLETED";
    return;
  }

  const ball = document.getElementById("ball");
  ball.classList.remove("pop");
  ball.style.opacity = 0;

  document.getElementById("result").innerText = "Shuffling balls...";

  setTimeout(() => {
    let ticket = tickets[count];
    let prize = prizes[count];

    ball.innerText = ticket;
    ball.classList.add("pop");

    document.getElementById("result").innerText =
      `Ticket #${ticket} wins ${prize}`;

    confetti();

    count++;
  }, 2000);
}

function confetti() {
  for (let i = 0; i < 40; i++) {
    let c = document.createElement("div");
    c.className = "confetti";
    c.style.left = Math.random() * 100 + "vw";
    c.style.background =
      ["gold", "red", "white"][Math.floor(Math.random() * 3)];
    document.body.appendChild(c);

    setTimeout(() => c.remove(), 3000);
  }
}
