const { Console, Random } = require("@woowacourse/mission-utils");
const { GUIDE_MESSAGE, RESULT_KEY, ERROR_MEASSAGE } = require("./Constant");


class App {
  play() {
    Console.print("숫자 야구 게임을 시작합니다.")
    
  }
}

const app = new App;
app.play();

module.exports = App;
