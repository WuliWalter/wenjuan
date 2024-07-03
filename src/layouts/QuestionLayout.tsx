import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'

const QuestionLayout: FC = () => {
  return (
    <>
      <div>Question layout</div>
      <div>
        <Outlet></Outlet>
      </div>
    </>
  )
}

export default QuestionLayout
