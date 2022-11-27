const { Console, Random } = require("@woowacourse/mission-utils");
const {GUIDE_MESSAGE, RESULT, ERROR_MESSAGE } = require("./Constant");

class App {
  play() {
    Console.print(GUIDE_MESSAGE.START);




  }
}

const app = new App();
app.play();

module.exports = App;
