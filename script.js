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
    document.getElementById("result").innerText = "❌ DRAW COMPLETED";
    return;
  }

  let ticket = tickets[count];
  let prize = prizes[count];

  document.getElementById("machine").innerText = ticket;
  document.getElementById("result").innerText =
    `Ticket #${ticket} wins ${prize}`;

  count++;
}
