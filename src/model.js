import image from './assets/image.png'
import {TextBlock, TitleBlock, ImageBlock, TextColumnsBlock} from './classes/blocks'
import {css } from './utils'

const text = `
  Привет! Попробуй создать свой первый сайт за 10 мин. с помощью конструктора на чистом JavaScript! Первое поле - текст который ты хочешь разместить на странице, второе поле, это твои стили CSS. Кстати, если вам нужен полноценный сайт, то я готов взяться за вашу работу! Тут можно найти меня: <a href="https://alexdyatlov.ru/" target="_blank">Александр Дятлов</a>.
`

export const model = [
  new TitleBlock('Конструктор сайтов на чистом JavaScript!', {
    tag: 'h2',
    styles: css({
      background: 'linear-gradient(to right, #ff0099, #493240)',
      color: '#fff',
      padding: '1.5rem',
      'text-align': 'center',
    })
  }),
  new ImageBlock(image, {
    styles: css({
      padding: '2rem 0',
      display: 'flex',
      'justify-content': 'center',
    }),
    alt: 'my image',
    imageStyles: 'max-width: 100%; display: block; height: auto;'
  }),
  new TextColumnsBlock([
    'Приложение на чистом JavaScript, без использования библиотек',
    'С применением ООП и принципов SOLID',
    'JavaScript - это просто, интересно. Научись создавать любые UI своими руками'
  ], {
    styles: css({
      padding: '2rem 0rem',
      color: '#fff',
      background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
      'font-weight': 'bold',
    }),
  }),
  new TextBlock(text, {
    styles: css({
      padding: '1rem',
      background: 'linear-gradient(to left, #f2994a, #f2c94c)',
      'font-weight': 'bold',
    }),
  })
]