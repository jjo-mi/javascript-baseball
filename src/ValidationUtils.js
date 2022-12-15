const { ERROR_MEASSAGE } = require("./Constant");

/** 4. 입력값 유효성 검토 */
const validInput = (userArr) => {
 let x = new Set(userArr);
 if(userArr < 1 || userArr > 9 || userArr.length !== x.size) {
   throw new Error(ERROR_MEASSAGE.NUMBER);
 }
}

module.exports = { validInput };