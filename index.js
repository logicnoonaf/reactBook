// 一个简单的点赞功能
/* const button = document.querySelector('.like-btn')
const buttonText = button.querySelector('.like-text')
let isLiked = false
button.addEventListener('click', () => {
  isLiked = !isLiked
  if (isLiked) {
    buttonText.innerHTML = '取消'
  } else {
    buttonText.innerHTML = '点赞'
  }
}, false) */

// 结构复用
/* class LikeButton {
    render () {
      return `
        <button id='like-btn'>
          <span class='like-text'>赞</span>
          <span>👍</span>
        </button>
      `
    }
  }

  const wrapper = document.querySelector('.wrapper')
  const likeButton1 = new LikeButton()
  wrapper.innerHTML = likeButton1.render()
  
  const likeButton2 = new LikeButton()
  wrapper.innerHTML += likeButton2.render() */

//实现简单的组件化
const createDOMFromString = (domString) => {
    const div = document.createElement('div')
    div.innerHTML = domString
    return div
}

/* class LikeButton {
    render () {
      this.el = createDOMFromString(`
        <button class='like-button'>
          <span class='like-text'>点赞</span>
          <span>👍</span>
        </button>
      `)
      this.el.addEventListener('click', () => console.log('click'), false)
      return this.el
    }
  } */

class LikeButton {
    constructor () {
      this.state = { isLiked: false }
    }

    changeLikeText () {
      const likeText = this.el.querySelector('.like-text')
      this.state.isLiked = !this.state.isLiked
      likeText.innerHTML = this.state.isLiked ? '取消' : '点赞'
    }

    render () {
      this.el = createDOMFromString(`
        <button class='like-button'>
          <span class='like-text'>点赞</span>
          <span>👍</span>
        </button>
      `)
      this.el.addEventListener('click', this.changeLikeText.bind(this), false)
      return this.el
    }
  }

  const wrapper = document.querySelector('.wrapper')
  
    const likeButton1 = new LikeButton()
    wrapper.appendChild(likeButton1.render())
  
    const likeButton2 = new LikeButton()
    wrapper.appendChild(likeButton2.render())