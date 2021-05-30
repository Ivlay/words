import { IRange } from "@components/UI/InputRange";

export const inputConstants: IInputConstants[] = [
  { name: 'countWord', max: 10, step: 1, header: 'Сколько слов' },
  { name: 'initialSpace', max: 40, step: 5, header: 'Стартовое расстояние' },
  { name: 'maxLengthWord', max: 12, step: 1, header: 'Сколько букв в словах' },
  { name: 'scaleSpace', max: 40, step: 5, header: 'Увеличение расстояния' }
]

export interface IInputConstants extends IRange {
  header: string
}
