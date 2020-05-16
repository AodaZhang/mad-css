/*
 * @Description: 2020_May entry
 * @Author: AodaZhang
 * @Date: 2020-05-12 12:30:16
 * @LastEditTime: 2020-05-16 18:17:43
 */
import '../less/reset.less'
import './index.less'

document.addEventListener('click', e => {
  e.preventDefault();
  if (e.target?.id === 'button1') {
    window.location.reload()
  } else if (e.target?.id === 'button2') {
    window.open('https://github.com/AodaZhang/mad-css')
  }
})

module.hot && module.hot.accept('./index.less', () => {})
