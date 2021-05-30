import { NextApiRequest, NextApiResponse } from 'next'

import { shuffle } from '@utils/shuffle'

const sortedDictionary = {
  3: ['год', 'раз', 'дом', 'мир', 'вид', 'час', 'бог', 'имя', 'суд', 'век'],
  4: [
    'дело',
    'день',
    'рука',
    'лицо',
    'друг',
    'глаз',
    'сила',
    'вода',
    'отец',
    'нога',
    'ночь',
    'стол',
    'жена',
    'свет',
    'пора',
    'путь',
    'душа',
    'мать',
    'язык',
    'мама',
    'цель'
  ],
  5: [
    'время',
    'жизнь',
    'слово',
    'место',
    'конец',
    'часть',
    'город',
    'земля',
    'право',
    'дверь',
    'образ',
    'закон',
    'война',
    'голос',
    'книга',
    'число',
    'народ',
    'форма',
    'связь',
    'улица',
    'вечер',
    'мысль',
    'месяц',
    'школа'
  ],
  6: [
    'работа',
    'вопрос',
    'страна',
    'случай',
    'голова',
    'деньги',
    'машина',
    'власть',
    'тысяча',
    'статья',
    'группа',
    'начало',
    'минута',
    'дорога',
    'любовь',
    'взгляд'
  ],
  7: [
    'человек',
    'сторона',
    'ребенок',
    'система',
    'женщина',
    'решение',
    'история',
    'область',
    'процесс',
    'условие',
    'уровень',
    'комната'
  ],
  8: [
    'проблема',
    'компания',
    'развитие',
    'средство',
    'качество',
    'действие',
    'общество'
  ],
  9: ['отношение', 'результат', 'президент'],
  11: ['деятельнось', 'организация', 'государство', 'возможность']
}

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { maxLengthWord = 9, maxWords = 9 } = req.query

  if (sortedDictionary[Number(maxLengthWord)]) {
    const dictionary = shuffle<string>(sortedDictionary[Number(maxLengthWord)])
      .slice(0, Number(maxWords))
      .map((el) => ({
        firstWord: el.substring(0, Math.floor(el.length / 2)),
        secondWord: el.substring(Math.floor(el.length / 2))
      }))

    res.status(200).json({ dictionary })
  } else {
    res.status(404).json({
      message: `К сожалению, в нашем словаре нет таких слова.\n
        Пожалуйста, выберите другой параметр`
    })
  }
}