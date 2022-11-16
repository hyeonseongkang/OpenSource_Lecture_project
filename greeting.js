const randomGreetings = ["Hello!!", "안녕하세요!!", "HI~~~~~!"];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const greeting = function (rtm, channel) {
  const greetingMessage = randomGreetings[getRandomInt(3)];
  rtm.sendMessage(greetingMessage, channel);
};

module.exports = greeting;
