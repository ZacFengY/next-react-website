import React from 'react'
import Cloud from '../Cloud'
import style from './index.module.scss'

/**
 * @name AboutMe云朵集组件
 */

const labels = ['#天蝎座', '#90后', '#前端新秀', '#闷骚', '#吃鸡', '#伪文艺']

const Label = () => {
  return (
    <div className={style.mylabel}>
      {labels.map((t, i) => (
        <Cloud key={i} text={t} index={i} />
      ))}
    </div>
  )
}

export default Label
