const { Console, Random } = require("@woowacourse/mission-utils");
const {GUIDE_MESSAGE, RESULT, ERROR_MESSAGE } = require("./Constant");

class App {
  play() {
    /** 1. 게임 시작 안내문구 */
    Console.print(GUIDE_MESSAGE.START);

    /**2. 랜덤 숫자 3개 생성 */
    const computerArr = [];
    while (computerArr.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computerArr.includes(number)) {
        computerArr.push(number);
      }
    }

    /**3. 사용자에게 숫자 입력 받기*/
    Console.readLine(GUIDE_MESSAGE.INPUTNUMBER, (input) => {
      // 비교한 결과값 출력);
    });

  





  }
}

const app = new App();
app.play();

module.exports = App;
