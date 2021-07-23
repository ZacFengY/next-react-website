import Image from 'next/image'
import style from './index.module.scss'

/**
 * @name AboutMe云朵组件
 */
const Cloud = props => {
  const left = 4 + props.index * 14
  const top = 16 + (props.index % 2) * 14
  const selfStyle = {
    left: `${left}%`,
    top: `${top}%`,
  }
  return (
    <span className={style.cloud} style={selfStyle}>
      <img src='/images/cloud.png' width={126} height={84} alt='' />
      <strong>{props.text}</strong>
    </span>
  )
}

export default Cloud
