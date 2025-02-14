document.addEventListener("DOMContentLoaded", function () {
  const compliments = [
    "I could study your features and never get bored",
    "You have the most beautiful smile in the world",
    "The moon is jealous of how bright you shine",
    "Your heart is worth more than its weight in gold",
    "Being yours is better than winning the lottery",
    "Your brown eyes hold entire galaxies within them",
    "Every time you smile, the whole world feels warmer.",
    "Your lil grabbers fit perfectly in mine, like they were made for me.",
    "When i see you smile, I forget about all my problems",
    "I could listen to your laugh on repeat and never get tired of it",
    "Your smile is so bright it could guide lost travelers home",
    "The way you laugh makes my whole world stop for a second",
    "I swear your eyes have a special glow when you’re happy",
    "If happiness had a sound, it would be your laugh",
    "Every time you smile, my heart does a little flip",
    "You are so gorgeous",
    "You are so beautiful they need a new word for beautiful",
    "It is literally unfair how hot you look rn",
    "You know you are the hottest woman in the room right now right?",
    "Your body is a wonderland",
    "I'm so attracted to you",
    "Youre my favourite",
    "I literally cant stop thinking about you",
    "My whole life changed the day I met you",
    "Youre my dream girl",
    "Im so in love with you",
    "Medusa couldn't make me as hard as you do (lmaooooo)",
    "You make my heart happy",
    "You are perfect",
    "You make my dreams come true",
    "You've got the prettiest face",
    "You're not just my girlfriend, you're my best friend",
    "I pick you. I choose you. I love you",
    "Is it hot in here? Or is it just you?",
    "It's getting hot in here. You should take off all your clothes.",
    "Are you a keyboard? Because you’re just my type",
    "The best things in life are free, but here's my credit card anyway",
    "They call it a love tap because I'd love to tap that",
    "I'd drop everything to spend eternity giggling with you",
    "I've never been so in love with the noises someone makes whilst they sleep",
    "Even when you're sleeping you give me butterflies",
    "When you wake up and whisper logie bear my heart stops",
    "I might fly away with all these butterflies you give me",
    "If this was gym class, I'd pick you to be on my team first",
    "I'm glad i have you. Your presence makes me happy",
  ];

  const loveMessages = ["I love you forever", "You are my best friend"];

  const reassuranceMessages = [
    "Loving you is the easiest thing I’ve ever done. You don’t have to try, change, or earn it—you just are lovable. Every little thing about you, even the parts you overthink or doubt, just make me love you more. You are not hard to love, not even a little bit.",
    "I know your mind runs in circles sometimes, but you don’t have to figure everything out alone. We’re a team, always. You don’t have to have all the answers or be perfect—I’d rather work through things with you than have everything be easy without you. No matter what’s on your mind, we’ll handle it together.",
    "There is nothing you could say that would make me love you less. Nothing you feel is ‘too much’ or ‘wrong’ with me. You never have to be scared that I’ll turn things against you or get mad at you for being honest. I want to know you, all of you. You’re safe with me, always",
    "No matter what life throws at us, I’m here. I don’t run when things get hard, and I don’t walk away just because things aren’t perfect. I’d rather struggle with you than have an easy life without you. There’s nothing we can’t get through together",
    "I don’t think words will ever be enough to explain how much I love you. It’s in everything I do, in every thought I have. I love you when you’re happy, when you’re sad, when you’re overthinking, when you’re a little bit of a mess—I love all of you, every single second. You are everything to me",
    "You aren’t just my first choice—you’re my only choice. There is no comparison, no competition, no hesitation. It’s you, always you. There’s no one else I even think about, no one who could ever be what you are to me. You are it for me",
    "I want you to know that everything about you, even the things you think might drive me crazy, are things I love. You’re not too much for me, you’re perfect",
    "You never have to apologize for being yourself, for your thoughts, or your feelings. I’m here for all of it, always",
    "You’re not a burden or an inconvenience to me. You are my choice, my love, my priority. Always",
    "We are a team, and I love that. We can face anything, because I know that we’ll work through it together, side by side",
    "You are perfect to me, exactly as you are. There’s no need for you to change anything about yourself. I love you for who you are, not who you think you need to be",
    "You don’t have to carry the weight of the world on your own. I’ve got your back, no matter what. I’m here for you, 100%",
    "You don’t have to be afraid of being vulnerable with me. You can show me every part of you, even the parts you’re unsure of, and I will always love you for it",
    "I love you more than I can express, and I’ll keep proving it every day, in every way. There’s no doubt in my mind about how I feel about you",
    "You don’t need to apologize for how you feel. You are allowed to have your emotions, and I’ll be here to listen and support you through them all",
    "If things ever get hard, just remember—together, we can face anything. You don’t have to go through anything alone, because I’m with you, every step of the way",
    "You are not complicated or difficult to love. You are the easiest person to love because you’re real, you’re kind, and you’re amazing just as you are",
    "I don’t care about perfection. I care about you. And that means I love everything about you, even the parts that make you nervous",
    "You are my favorite person in the world, and that’s not going to change. I don’t want anyone else but you",
    "No matter how much you overthink things, I’ll never be far away. We’ll figure it out together, because I’ll always be by your side",
    "I love you for who you are, and that will never change. There’s no one else I’d ever want, because you are exactly who I want in my life",
  ];

  const shownCompliments = [];
  const shownLoveMessages = [];
  const shownReassuranceMessages = [];

  function displayMessage(arr, shownArr) {
    if (arr.length === 0) {
      // Reset the array if all messages have been shown
      shownArr.length = 0;
      arr.forEach((message) => shownArr.push(message));
    }

    const randomIndex = Math.floor(Math.random() * arr.length);
    const message = arr[randomIndex];
    shownArr.push(message);
    arr.splice(randomIndex, 1);
    console.log(shownArr.length, arr.length);

    const messageBox = document.getElementById("message-box");
    messageBox.textContent = message;
  }

  document
    .getElementById("compliment-btn")
    .addEventListener("click", function () {
      console.log("Hello1");
      displayMessage(compliments, shownCompliments);
    });

  document
    .getElementById("love-message-btn")
    .addEventListener("click", function () {
      console.log("Hello2");
      displayMessage(loveMessages, shownLoveMessages);
    });

  document
    .getElementById("reassurance-btn")
    .addEventListener("click", function () {
      console.log("Hello3");
      displayMessage(reassuranceMessages, shownReassuranceMessages);
    });
});
