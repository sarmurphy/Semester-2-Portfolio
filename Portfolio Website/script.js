const gameContainer = document.querySelector(".container"),
  userResult = document.querySelector(".user_result img"),
  cpuResult = document.querySelector(".cpu_result img"),
  result = document.querySelector(".result"),
  optionImages = document.querySelectorAll(".option_image");

optionImages.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    image.classList.add("active");
    userResult.src = cpuResult.src = "images/fist.png";
    result.textContent = "Rock, Paper, Scissors";

    optionImages.forEach((image2, index2) => {

      index !== index2 && image2.classList.remove("active");
    });
    gameContainer.classList.add("start");

    let time = setTimeout(() => {
      gameContainer.classList.remove("start");

      let imageSrc = e.target.querySelector("img").src;

      userResult.src = imageSrc;

      let randomNumber = Math.floor(Math.random() * 3);

      let cpuImages = ["Images/rock.png", "Images/paper.png", "Images/scissors.png"];

      cpuResult.src = cpuImages[randomNumber];

      let cpuValue = ["R", "P", "S"][randomNumber];

      let userValue = ["R", "P", "S"][index];
 
      let outcomes = {
        RR: "Draw",
        RP: "CPU",
        RS: "User",
        PP: "Draw",
        PR: "User",
        PS: "CPU",
        SS: "Draw",
        SR: "CPU",
        SP: "User",
      };
      
      let outComeValue = outcomes[userValue + cpuValue];

      result.textContent = userValue === cpuValue ? "It's a tie!" : `${outComeValue} Won!`;
    }, 2500);
  });
});