import React, { FC } from 'react'
import styles from './QuestionCard.module.scss'

type propsType = {
  _id: string
  title: string
  isPublished: boolean
  isStart: boolean
  answerCount: number
  createdAt: string
}

const QuestionCard: FC<propsType> = props => {
  const { _id, title, answerCount, createdAt, isPublished } = props
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.right}>
          <a href="#">{title}</a>
        </div>
        <div className={styles.left}>
          {isPublished ? <span style={{ color: 'green' }}>已发布</span> : <span>未发布</span>}
          <span>答卷：{answerCount}</span>
          <span>{createdAt}</span>
        </div>
      </div>
      <div className={styles['button-container']}>
        <div className={styles.left}>
          <button>编辑问卷</button>
          <button>数据统计</button>
        </div>
        <div className={styles.right}>
          <button>标星</button>
          <button>复制</button>
          <button>删除</button>
        </div>
      </div>
    </div>
  )
}
export default QuestionCard
