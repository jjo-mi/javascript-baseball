const { Console, Random } = require("@woowacourse/mission-utils");
const { GUIDE_MESSAGE, RESULT, ERROR_MESSAGE } = require("./Constant");

let computerArr = [];

class App {
  constructor() {
    this.computerArr = [];

  }

  play() {
    /** 1. 게임 시작 안내문구 */
    Console.print(GUIDE_MESSAGE.START);

    /** 컴퓨터 숫자 생성 */
    this.creatNumber();

    /** 맞출때까지 사용자 입력값 받고 결과 보여주기  */
    this.inputUser();
  
  }


  /** 2. 랜덤 숫자 3개 생성 */
  creatNumber() {
    while (computerArr.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computerArr.includes(number)) {
        computerArr.push(number);
      }
    }
  }

  /** 3. 사용자에게 숫자 입력 받기*/
  inputUser() {
    Console.readLine(GUIDE_MESSAGE.INPUT_NUMBER, (input) => {
      let userArr = input.split("").map(Number);
      let x = new Set(userArr);
      if(userArr.length > 3 || userArr.length !== x.size) {
        throw new Error(ERROR_MESSAGE.INPUT_NUMBER);
      }
      console.log(userArr);
      this.compareInput(computerArr, userArr);
    });
    
  }

  /** 4. 컴퓨터 값과 사용자 입력값 비교 */
  compareInput(computerArr, userArr) {
    let ballCount = 0;
    let strikeCount = 0;
    for(let i = 0; i < computerArr.length; i++) {
      if(computerArr[i] === userArr[i]) {
        strikeCount++;
      } else if(computerArr.includes(userArr[i])) {
        ballCount++;
      }
    }
    this.showResult(ballCount, strikeCount);
    return ballCount, strikeCount;
    };

  /** 5. 비교결과 출력해주기 */
  showResult(ballCount, strikeCount) {
    let result = "";
    if(ballCount > 0) {
      result += (`${ballCount}볼 `);
    } 
    if(strikeCount > 0) {
      result += (`${strikeCount}스트라이크`);
    } 
    if(result === "") {
      result += '낫싱';
    }
    Console.print(result);
    this.replay(strikeCount);
  }

  /** 6. 게임 완료까지 입력 반복하는 기능 */
  replay(strikeCount) {
    if(strikeCount !== 3) {
      this.inputUser();
    } else if(strikeCount === 3) {
      this.completion(strikeCount);
    }
  }

  /** 7.게임완료 되면 재시작 기능 안내 */
  completion(strikeCount) {    
    if(strikeCount === 3) {
      Console.readLine(GUIDE_MESSAGE.GAME_END, (answer) => {
        if(answer === '2') {
          Console.close;
        } else if(answer === '1') {
          this.creatNumber();
          this.inputUser();
        }
      });
    }
  }
}



const app = new App();
app.play();

module.exports = App;
