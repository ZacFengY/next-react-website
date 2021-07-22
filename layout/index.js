import { Layout, Menu } from 'antd'
import Styles from './index.module.scss'

const { Header, Content } = Layout

export default function MyLayout({ children }) {
  return (
    <Layout>
      <Header className={Styles['layout-header']}>
        <div className={Styles.logo} />
        <Menu mode='horizontal' defaultSelectedKeys={['2']}>
          <Menu.Item key='1'>nav 1</Menu.Item>
          <Menu.Item key='2'>nav 2</Menu.Item>
          <Menu.Item key='3'>nav 3</Menu.Item>
        </Menu>
      </Header>
      <Content className={Styles['site-layout']}>{children}</Content>
      {/* <Footer style={{ textAlign: 'center' }}>website ©2018 Created by ZacFengY</Footer> */}
    </Layout>
  )
}
