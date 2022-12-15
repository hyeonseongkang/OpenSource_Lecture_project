// 인사 패턴
const randomGreetings = ["Hello!!", "안녕하세요!!", "Bonjour@"];

// 0 ~ max 중 랜덤하게 리턴
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// 랜덤하게 생성된 값에 해당하는 인사말 리턴
function getMessage() {
  return randomGreetings[getRandomInt(3)];
}

// message 보내기
const greeting = function (rtm, channel) {
  const message = getMessage();
  rtm.sendMessage(message, channel);
};

module.exports = {
  greeting,
  getMessage,
  randomGreetings,
};
