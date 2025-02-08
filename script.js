const messages = [
  "Are you sure?😶‍🌫️",
  "Ekii??🙁",
  "Pakka toh??😟",
  "Pookie please...🥺",
  "Etai ache toh mone mone!!!😭",
  "Mone rakhbo kintu...😤",
  "I will be very sad...😢",
  "I will be very very very sad...😨",
  "Ok fine, I will stop asking...🙃",
  "Just kidding, say yes please!🫢",
];

let messageIndex = 0;

function handleNoClick() {
  const noButton = document.querySelector(".no-button");
  const yesButton = document.querySelector(".yes-button");
  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;
  const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
  yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
  window.location.href = "yes_page.html";
}

function redirectToNextPage() {
  window.location.href = "next_page.html";
}

function redirectToNoPage() {
  window.location.href = "no_page.html";
}

function redirectToStartPage() {
  window.location.href = " index.html";
}
