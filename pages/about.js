import { Row, Col, Card } from 'antd'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='about'>
      <Row gutter={[16, 16]}>
        <Col sm={24} xs={24} md={18}>
          <Row gutter={[16, 16]}>
            <Col sm={24} xs={24} md={8}>
              <Row wrap gutter={[16, 16]} className='column'>
                <Col sm={12} xs={12} md={24} className='photo'>
                  <Card title='Photo' className='about-card about-photo'>
                    <div className='img-wrap-60'>
                      <Image
                        layout='responsive'
                        src='/images/photo.png'
                        alt='myPhoto'
                        title='今晚吃啥'
                        width={400}
                        height={400}
                      />
                    </div>
                  </Card>
                </Col>
                <Col sm={12} xs={12} md={24} className='email'>
                  <Card title='Email' className='about-card about-email'>
                    <div className='img-wrap-30'>
                      <Image
                        layout='responsive'
                        src='/images/myemail.png'
                        alt='myEmail'
                        title='信箱为你打开'
                        width={400}
                        height={400}
                      />
                    </div>
                    <h3 className='img-detail'>fengyu19941105@163.com</h3>
                    <a href='mailto:fengyu19941105@163.com' className='icon-link' />
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col sm={24} xs={24} md={16}>
              <Row gutter={[16, 16]} className='column'>
                <Col sm={24} xs={24} md={24} className='about-me'>
                  <Card title='About Me' className='about-card about-about-me'></Card>
                </Col>
                <Col sm={24} xs={24} md={24} className='about-github-wechat'>
                  <Row gutter={[16, 16]}>
                    <Col sm={12} xs={12} md={12}>
                      <Card title='Github' className='about-card about-github'>
                        <div className='img-wrap-30'>
                          <Image
                            layout='responsive'
                            src='/images/mygit.png'
                            alt='myGithub'
                            title='同性交友地址'
                            width={400}
                            height={400}
                          />
                        </div>
                        <h3 className='img-detail'>https://github.com/ZacFengY</h3>
                        <a
                          className='icon-link'
                          href='https://github.com/ZacFengY'
                          rel='noreferrer'
                          target='_blank'
                        />
                      </Card>
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
          <Row gutter={[16, 16]} className='column'>
            <Col sm={24} xs={24} md={24} className='where'>
              <Card title='Where' className='about-card about-where' />
            </Col>
            <Col sm={24} xs={24} md={24} className='friends'>
              <Card title='Friends' className='about-card about-friends' />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
