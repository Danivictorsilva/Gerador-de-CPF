export default class CPFGenerator {
    constructor() {
        this.generateBtn = document.querySelector('.generate-btn')
        this.resultBox = document.querySelector('.result-box')
    }

    init() {
        this.activeGenerateBtn()
    }

    activeGenerateBtn() {
        this.generateBtn.addEventListener('click', () => {
            this.resultBox.innerText = this.createValidCPF()
        })
    }

    createValidCPF() {
        const digits = []
        for (let i = 0; i < 9; i++)
            digits.push(Math.floor(Math.random() * 10))
        let v1 = 0, v2 = 0
        for (let i = 0; i < 9; i++) {
            v1 += digits[i] * (10 - i)
            v2 += digits[i] * (11 - i)
        }
        v1 = (11 - v1 % 11) % 10
        v2 += v1 * 2
        v2 = (11 - v2 % 11) % 10
        const stringCPF = digits.join('')
        const formattedCPF = `${stringCPF.slice(0, 3)}.${stringCPF.slice(3, 6)}.${stringCPF.slice(6)}-${v1}${v2}`
        return formattedCPF
    }
}
