const { Console, Random } = require("@woowacourse/mission-utils");
const { GUIDE_MESSAGE, RESULT_KEY, ERROR_MEASSAGE } = require("./Constant");
const { validInput } = require("./ValidationUtils")

class App {
  strike;
  ball;
  constructor() {
    this.strike = 0;
    this.ball = 0;

  }
  play() {
    Console.print("숫자 야구 게임을 시작합니다.")
    this.creatComputerNumbers();
    this.inputNumber();

  }
  /** 2. 컴퓨터 숫자 생성 */
  creatComputerNumbers() {
    const computerArr = Random.pickUniqueNumbersInRange(1, 9, 3);
    console.log("###", computerArr);
  }
  /** 3. 사용자 입력값 받기 */
  inputNumber() {
    Console.readLine(GUIDE_MESSAGE.INPUT_NUMBER, (numbers) => {
      const userArr = numbers.split("").map(arg => Number(arg));
      validInput(userArr);
    });
  } 
  
  /** 5. 컴퓨터와 입력값 비교  */
  compareNumber(computerArr, userArr) {
    for(let i = 0; i < computerArr.length; i++) {
      if(computerArr[i] == userArr[i]) {
        this.strike++;
      } else if(computerArr.indexOf(userArr[i])) {
        this.ball++;
      }
    }
  }

}


  





const app = new App;
app.play();

module.exports = App;
