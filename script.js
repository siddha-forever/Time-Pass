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

  // Change the text of the "No" button
  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;

  // Increase the size of the "Yes" button
  const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
  yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
  console.log("Yes button clicked");

  // Send a notification to Slack
  sendSlackNotification()
    .then(() => {
      console.log("Redirecting to yes_page.html");
      window.location.href = "yes_page.html";
    })
    .catch((error) => {
      console.error("Error sending notification:", error);
      window.location.href = "yes_page.html";
    });
}

function sendSlackNotification() {
  const zapierWebhookUrl =
    "https://hooks.zapier.com/hooks/catch/21634251/2aa16jf/";

  const message = {
    text: "A user clicked the Yes button!",
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "*User Action Notification*",
        },
      },
      {
        type: "section",
        fields: [
          {
            type: "mrkdwn",
            text: `*Action:*\nYes button clicked`,
          },
          {
            type: "mrkdwn",
            text: `*Timestamp:*\n${new Date().toLocaleString()}`,
          },
          {
            type: "mrkdwn",
            text: `*Page URL:*\n${window.location.href}`,
          },
        ],
      },
    ],
  };

  console.log("Sending notification to Zapier:", message);

  return fetch(zapierWebhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  })
    .then((response) => {
      console.log("Zapier response status:", response.status);
      if (!response.ok) {
        throw new Error("Failed to send notification");
      }
      console.log("Notification sent successfully");
    })
    .catch((error) => {
      console.error("Error sending notification:", error);
    });
}

function redirectToNextPage() {
  window.location.href = "next_page.html";
}

function redirectToNoPage() {
  window.location.href = "no_page.html";
}

function redirectToStartPage() {
  window.location.href = "index.html";
}
