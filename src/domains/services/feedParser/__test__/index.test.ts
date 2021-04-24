// importを使う場合
import { addCalcFun } from './index'

describe('functionを読み込んで使う', () => {
  it('1たす8は9になる関数で実行します', () => {
    expect(addCalcFun(1, 8)).toBe(9)
  })
})

// requireを使う場合
const standardPractice = require('./index')
describe('classを読み込んで使う', () => {
  it('9たす23は32になるようなClac Classで実行します', () => {
    const calc = new standardPractice.Calc(9)
    expect(calc.add(23)).toBe(32)
  })
})
