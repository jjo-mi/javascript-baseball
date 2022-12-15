const { Console, Random } = require("@woowacourse/mission-utils");
const { GUIDE_MESSAGE, RESULT_KEY, ERROR_MEASSAGE } = require("./Constant");


class App {
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
      this.vaildInput(userArr);
      //유효성 검토
    });
  } 
  
  /** 4. 입력값 유효성 검토 */
  vaildInput(userArr) {
    let x = new Set(userArr);
    if(userArr < 1 || userArr > 9 || userArr.length !== x.size) {
      throw new Error(ERROR_MEASSAGE.NUMBER);
    }
  }

}


  





const app = new App;
app.play();

module.exports = App;
