import { Layout } from 'antd'
import Menu from '../components/Menu'
import Styles from './index.module.scss'

const { Header, Content } = Layout

const MyLayout = ({ children }) => (
  <Layout className={Styles.layout}>
    <Header className={Styles['layout-header']}>
      <Menu />
    </Header>
    <Content className={Styles['site-layout']}>{children}</Content>
    {/* <Footer style={{ textAlign: 'center' }}>website ©2018 Created by ZacFengY</Footer> */}
  </Layout>
)

export default MyLayout
