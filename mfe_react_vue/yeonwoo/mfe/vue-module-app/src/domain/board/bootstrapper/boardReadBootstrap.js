import { mount } from "../../../bootstrap"
import router from '../../../router'

// read 는 게시물 지정할때 번호를 받아줘야한다. - boardId
const readBootstrapMount = (el, boardId) => {
  const vueBoardApp = mount(el)

  const newRoute = {
    name: 'BoardReadPage',
    // 파라메터지정해줘야함
    params: {
      boardId: boardId,
    }
  }

  router.push(newRoute)
}

export { readBootstrapMount }