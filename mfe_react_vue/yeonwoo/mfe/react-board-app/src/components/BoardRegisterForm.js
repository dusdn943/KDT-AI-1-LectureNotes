import React, { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'

const BoardRegisterForm = ({ onRegister }) => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [writer, setWriter] = useState("")

  // React는 v-model이 없습니다.
  // 다 이렇게 만드세요.
  const handleChangeTitle = useCallback((e) => {
    setTitle(e.target.value)
  }, [])

  const handleChangeContent = useCallback((e) => {
    setContent(e.target.value)
  }, [])

  const handleChangeWriter = useCallback((e) => {
    setWriter(e.target.value)
  }, [])

  const handleSubmit = useCallback(
    (e) => {
        // e (event)
        // a 태그나 submit 태그는 누르게 되면 href 를 통해 이동하거나 , 창이 새로고침하여 실행이 되는데
        // preventDefault 를 통해 이러한 동작을 막아줄 수 있습니다.
        // submit은 작동 되는데 form 안에 submit 역할을 하는 버튼을 눌렀어도 새로 실행하지 않게 하고싶을 경우 사용
        // (action 속성값으로 파라미터 전달하면서 페이지 이동하는데 이러한 동작을 
        // 막기 위해 각 태그별로 preventDefault를 이벤트 리스너에 등록하면 막을 수 있다.)
        e.preventDefault();

        onRegister(title, content, writer)
    },
    [title, content, writer, onRegister]
  )

  return (
    <div align="center">
      <h2>게시물 등록</h2>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>제목</td>
              <td>
                {/* React는 v-model이 없어서 onChange랑 위의 useCallback을 묶어서 사용 */}
                <input type="text" value={title} onChange={handleChangeTitle}/>
              </td>
            </tr>
            <tr>
              <td>작성자</td>
              <td>
                <input type="text" value={writer} onChange={handleChangeWriter}/>
              </td>
            </tr>
            <tr>
              <td>내용</td>
              <td>
                <textarea rows="5" value={content} onChange={handleChangeContent}/>
              </td>
            </tr>
          </tbody>
        </table>

        <div>
          <button type="submit">등록</button>
          <Link to="/">취소</Link>
        </div>
      </form>
    </div>
  )
}

export default BoardRegisterForm