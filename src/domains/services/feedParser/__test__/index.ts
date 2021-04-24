// functionをexportして使用する場合
export function addCalcFun(baseValue: number, addValue: number): number {
  return baseValue + addValue
}

// classをexportして使用する場合
export class Calc {
  private baseValue: number

  constructor(baseValue: number) {
    this.baseValue = baseValue
  }

  add(addValue): number {
    return this.baseValue + addValue
  }
}
