import Matter from 'matter-js'
import { useEffect, useRef } from 'react'
import isPhone from '../../utils/isPhone'

const { Engine, Render, Runner, Bodies, Composite, Composites, MouseConstraint, Mouse } = Matter
// 表情图片
const emojis = [
  '/images/anger.png',
  '/images/dis.png',
  '/images/happy.png',
  '/images/sad.png',
  '/images/zzz.png',
]

const AboutMe = ({ isMobile }) => {
  const myref = useRef(null)
  const initMatter = () => {
    // 球体配置
    const density = isMobile ? 0.6 : 0.9
    const restitution = isMobile ? 0.6 : 0.4
    const ballopts = size => ({
      density, // 密度
      restitution, // 弹性
      render: {
        fillStyle: 'none',
        sprite: {
          // eslint-disable-next-line no-bitwise
          texture: emojis[~~(Math.random() * 5)],
          xScale: (size / 40).toFixed(2),
          yScale: (size / 40).toFixed(2),
        },
      },
      friction: 1,
    })

    // create engine
    const engine = Engine.create()
    const { world } = engine
    const element = myref.current
    const Ew = myref.current?.offsetWidth
    const Eh = myref.current?.offsetHeight
    console.log('eeeeeeeeeeeee', Ew, Eh)
    // create renderer
    const render = Render.create({
      element,
      engine,
      options: {
        width: myref.current?.offsetWidth,
        height: myref.current?.offsetHeight,
        wireframes: false,
        showAngleIndicator: true,
        showMousePosition: false, // 鼠标约束线
        showVelocity: false, // 移动刚体时速度
        background: 'none',
        // pixelRatio: window.devicePixelRatio
      },
    })

    Render.run(render)

    // create runner
    const runner = Runner.create()
    Runner.run(runner, engine)

    const sprite = isMobile
      ? { texture: '/images/citybg.png', xScale: 0.6, yScale: 0.6 }
      : { texture: '/images/citybg.png' }
    // const bgw = isMobile ? 528 : 880
    // const bgh = isMobile ? 120 : 200
    // const bgy = isMobile ? 61 : 101
    const bgw = isPhone ? 616 : 880
    const bgh = isPhone ? 140 : 200
    const bgy = isPhone ? 62 : 101
    const opts = {
      isStatic: true,
      render: {
        opacity: 0,
      },
    }

    Composite.add(world, [
      Bodies.rectangle(Ew / 2, 0, Ew, 10, opts),
      Bodies.rectangle(Ew, Eh / 2, 10, Eh, opts),
      Bodies.rectangle(Ew / 2, Eh, Ew, 10, opts),
      Bodies.rectangle(0, Eh / 2, 10, Eh, opts),
      Bodies.rectangle(Ew / 2, Eh - bgy, bgw, bgh, {
        isStatic: true,
        render: {
          fillStyle: 'none',
          sprite,
        },
        isSensor: true,
      }),
    ])

    const stack = Composites.stack(0, 120, 6, 3, 0, 0, (x, y) => {
      const r = isMobile ? 20 : 30
      return Bodies.circle(x, y, r, ballopts(r))
    })

    Composite.add(world, [stack])

    // add bodies
    // Composite.add(world, [
    //   Bodies.rectangle(400, 600, 1200, 50.5, { isStatic: true, render: { fillStyle: '#060a19' } }),
    // ])

    // const stack = Composites.stack(100, 0, 10, 8, 10, 10, (x, y) => {
    //   return Bodies.circle(x, y, Common.random(15, 30), { restitution: 0.6, friction: 0.1 })
    // })

    // Composite.add(world, [
    //   stack,
    //   Bodies.polygon(200, 460, 3, 60),
    //   Bodies.polygon(400, 460, 5, 60),
    //   Bodies.rectangle(600, 460, 80, 80),
    // ])

    // add mouse control
    const mouse = Mouse.create(render.canvas)
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    })

    Composite.add(world, mouseConstraint)

    // keep the mouse in sync with rendering
    render.mouse = mouse

    // fit the render viewport to the scene
    // Render.lookAt(render, {
    //   min: { x: 0, y: 0 },
    //   max: { x: 800, y: 600 },
    // })

    // wrapping using matter-wrap plugin
    // const allBodies = Composite.allBodies(world)

    // for (let i = 0; i < allBodies.length; i += 1) {
    //   allBodies[i].plugin.wrap = {
    //     min: { x: render.bounds.min.x - 100, y: render.bounds.min.y },
    //     max: { x: render.bounds.max.x + 100, y: render.bounds.max.y },
    //   }
    // }
  }

  useEffect(() => {
    initMatter()
  }, [])

  return (
    <div ref={myref} style={{ width: '100%', height: '100%', position: 'absolute', zIndex: 100 }} />
  )
}

AboutMe.getStaticProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] : navigator?.userAgent
  const isMobile = isPhone(userAgent || '')
  return { isMobile }
}

export default AboutMe
