/**
 * @description mycolor入口
 * @author AodaZhang
 */
import '../less/reset.less'
import './index.less'

document.addEventListener('click', (e) => {
  e.preventDefault()
  if (e.target?.id === 'button1') {
    window.location.reload()
  } else if (e.target?.id === 'button2') {
    window.open('https://github.com/AodaZhang/mad-css')
  }
})

module.hot && module.hot.accept('./index.less', () => {})
