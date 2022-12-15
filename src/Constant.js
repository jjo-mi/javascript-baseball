const GUIDE_MESSAGE = {
    START: " 숫자 야구 게임을 시작합니다.",
    INPUT_NUMBER: "숫자를 입력해주세요 : ",
    GAME_END: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
    INPUT_RETRY: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
}

const RESULT_KEY = {
    BALL: "볼",
    STRIKE: "스트라이크",
    NOT: "낫싱"
}

const ERROR_MEASSAGE = {
    NUMBER: "1부터 9까지 서로 다른 수로 이루어진 3자리의 수만 가능합니다.",
    RETRY: "게임 재시작은 1, 종료는 2입니다. 숫자로만 입력해주세요."
}

module.exports = { GUIDE_MESSAGE, RESULT_KEY, ERROR_MEASSAGE }

