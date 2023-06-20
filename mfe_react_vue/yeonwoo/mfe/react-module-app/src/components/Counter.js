import React, { useState } from 'react'

// rafce
const Counter = () => {
  // count는 vue의 state
  // setCount는 vue의 action
  // useState를 통해 count를 초기값 0으로 설정
  const [count, setCount] = useState(0)

  const onIncrement = () => setCount(count + 1)
  const onDecrement = () => setCount(count - 1)

  return (
    <div>
      <h1>나는 React Counter!</h1>
      <p>현재 count: <strong>{ count }</strong></p>
      {/* Scroll이 생성되지 않으면 + 와 - 버튼이 눌리지 않는 현상이 생김
       아래와 같이 Counter 컴포넌트의 position 설정 자체를 ‘relative’로 설정 해준 
       이후 정상적으로 버튼이 눌리는 것을 확인할 수 있음 */}
      <button style={{ height: '50px', width: '50px', fontSize: '30px', position: 'relative' }} onClick={onIncrement}>+</button>
      <button style={{ height: '50px', width: '50px', fontSize: '30px', position: 'relative' }} onClick={onDecrement}>-</button>
    </div>
  )
}

export default Counter