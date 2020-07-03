/**
 * @description base_image入口
 * @author AodaZhang
 */
import '../less/reset.less'
import './main/index.less'

document.addEventListener('click', (e) => {
  e.preventDefault()
  if (e.target?.id === 'replay') {
    window.location.reload()
  } else if (e.target?.id === 'gitHub') {
    window.open('https://github.com/AodaZhang/mad-css')
  }
})

module.hot && module.hot.accept('./main/index.less', () => {})
