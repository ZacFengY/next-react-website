// 判断是否为移动端 服务端渲染无navigator 注掉
// export default /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)

export default userAgent => /Android|webOS|iPhone|iPod|BlackBerry/i.test(userAgent)
