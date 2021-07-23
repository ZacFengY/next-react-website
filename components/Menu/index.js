import React from 'react'
import isPhone from '../../utils/isPhone'
import MobileMenu from '../MobileMenu'
import PCMenu from '../PCMenu'

/** 本来想按需加载的 */
// const Menu = isPhone ? import('./MobileMenu') : import('./PcMenu')
// const Menu = React.lazy(isMobileMenu ? () => import('../MobileMenu') : () => import('../PCMenu'))

const Menu = ({ isMobileMenu }) => (isMobileMenu ? <MobileMenu /> : <PCMenu />)

Menu.getStaticProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] : navigator?.userAgent
  const isMobileMenu = isPhone(userAgent || '')
  return { isMobileMenu }
}

export default Menu
