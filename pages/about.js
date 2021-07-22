import { Row, Col, Card } from 'antd'

export default function Home() {
  return (
    <main className='about'>
      <Row gutter={[16, 16]}>
        <Col sm={24} xs={24} md={18}>
          <Row gutter={[16, 16]}>
            <Col sm={24} xs={24} md={8}>
              <Row gutter={[16, 16]}>
                <Col sm={12} xs={12} md={24}>
                  <Card title='Photo' className='about-card about-photo' />
                </Col>
                <Col sm={12} xs={12} md={24}>
                  <Card title='Email' className='about-card about-email' />
                </Col>
              </Row>
            </Col>
            <Col sm={24} xs={24} md={16}>
              <Row gutter={[16, 16]}>
                <Col sm={24} xs={24} md={24}>
                  <Card title='About Me' className='about-card about-about-me' />
                </Col>
                <Col sm={24} xs={24} md={24}>
                  <Row gutter={[16, 16]}>
                    <Col sm={12} xs={12} md={12}>
                      <Card title='Github' className='about-card about-github' />
                    </Col>
                    <Col sm={12} xs={12} md={12}>
                      <Card title='Wechat' className='about-card about-wechat' />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col sm={24} xs={24} md={6}>
          <Row gutter={[16, 16]}>
            <Col sm={24} xs={24} md={24}>
              <Card title='Where' className='about-card about-where' />
            </Col>
            <Col sm={24} xs={24} md={24}>
              <Card title='Friends' className='about-card about-friends' />
            </Col>
          </Row>
        </Col>
      </Row>
    </main>
  )
}
