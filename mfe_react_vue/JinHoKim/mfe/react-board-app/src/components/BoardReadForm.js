import React from 'react'
import { Link } from 'react-router-dom'

const BoardReadForm = ({ boardId, board, isLoading, onRemove }) => {
  return (
    <div>
      <h2>게시물 조회</h2>
      { isLoading && "로딩중 .........." }
      { !isLoading && board && (
        <>
            <table border="1">
                <tbody>
                    <tr>
                        <td>번호</td>
                        <td>
                            <input type="text" value={board.boardId} readonly/>
                        </td>
                    </tr>
                    <tr>
                        <td>제목</td>
                        <td>
                            <input type="text" value={board.title} readonly/>
                        </td>
                    </tr>
                    <tr>
                        <td>작성자</td>
                        <td>
                            <input type="text" value={board.writer} readonly/>
                        </td>
                    </tr>
                    <tr>
                        <td>내용</td>
                        <td>
                            <textarea value={board.content} readonly/>
                        </td>
                    </tr>
                </tbody>
            </table>

            <Link to={`/modify/${boardId}`}>수정</Link>
            <button onClick={onRemove}>삭제</button>
            <Link to="/">돌아가기</Link>
        </>
      )}
    </div>
  )
}

export default BoardReadForm