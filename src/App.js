const { Console, Random } = require("@woowacourse/mission-utils");
const { GUIDE_MESSAGE, RESULT, ERROR_MESSAGE } = require("./Constant");

let ballCount = 0;
let strikeCount = 0;

class App {
  constructor() {
    this.ballCount = 0;
    this.strikeCount = 0;
  }

  play() {
    /** 1. 게임 시작 안내문구 */
    Console.print(GUIDE_MESSAGE.START);

    /** 2. 랜덤 숫자 3개 생성 */
    let computerArr = [];
    while (computerArr.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computerArr.includes(number)) {
        computerArr.push(number);
      }
    }
    console.log('###com: ', computerArr);

    /** 3. 사용자에게 숫자 입력 받기*/
    Console.readLine('숫자를 입력해주세요 : ', (input) => {
      let userArr = input.split("").map(Number);
      console.log(userArr);
      this.compareInput(computerArr, userArr);
      this.showResult(ballCount, strikeCount);
    });
  }

  /** 4. 컴퓨터 값과 사용자 입력값 비교 */
  compareInput(computerArr, userArr) {
    for(let i = 0; i < computerArr.length; i++) {
      if(computerArr[i] === userArr[i]) {
        this.strikeCount++;
      } else if(computerArr.includes(userArr[i])) {
        this.ballCount++;
      }
    }
    };

  /** 5. 비교결과 출력해주기 */
  showResult(ballCount, strikeCount) {
    let result = "";
    if(this.ballCount > 0) {
      result += (`${this.ballCount}볼 `);
    } 
    if(this.strikeCount > 0) {
      result += (`${this.strikeCount}스트라이크`);
    } 
    if(result === "") {
      result += '낫싱';
    }
    Console.print(result);
  }

}



const app = new App();
app.play();

module.exports = App;
