import Link from 'next/link'
import { useRouter } from 'next/router'
import { routerList } from '../../routes'
import Style from './index.module.scss'

const PCMenu = () => {
  const nextRouter = useRouter()

  return (
    <header className={Style.pcmenu}>
      <div className={Style.logo}>ICON</div>
      {routerList.map(router => (
        <Link href={router.path} key={router.name}>
          <a className={nextRouter.asPath === router.path ? Style.selected : ''}>{router.name}</a>
        </Link>
      ))}
    </header>
  )
}

export default PCMenu
