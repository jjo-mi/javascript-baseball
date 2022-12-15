const { Console, Random } = require("@woowacourse/mission-utils");
const { GUIDE_MESSAGE, RESULT_KEY, ERROR_MEASSAGE } = require("./Constant");


class App {
  play() {
    Console.print("숫자 야구 게임을 시작합니다.")
    this.creatComputerNumbers();

  }
  /** 2. 컴퓨터 숫자 생성 */
  creatComputerNumbers() {
    const computerArr = Random.pickUniqueNumbersInRange(1, 9, 3);
    console.log("###", computerArr);
  }
}


  





const app = new App;
app.play();

module.exports = App;
