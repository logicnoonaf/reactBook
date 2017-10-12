
const createDOMFromString = (domString) => {
    const div = document.createElement('div')
    div.innerHTML = domString
    return div
}

class LikeButton {
    constructor () {
      this.state = { isLiked: false }
    }

    /* changeLikeText () {
      const likeText = this.el.querySelector('.like-text')
      this.state.isLiked = !this.state.isLiked
      likeText.innerHTML = this.state.isLiked ? '取消' : '点赞'
    } */

   /*  setState (state) {
        this.state = state
        this.el = this.render()
      } */

      setState (state) {
        const oldEl = this.el
        this.state = state
        this.el = this.render()
        if (this.onStateChange) this.onStateChange(oldEl, this.el)
      } 
  
    changeLikeText () {
        this.setState({
          isLiked: !this.state.isLiked
        })
     }

    render () {
      this.el = createDOMFromString(`
        <button class='like-button'>
        <span class='like-text'>${this.state.isLiked ? '取消' : '点赞'}</span>
        <span>👍</span>
        </button>
      `)
      this.el.addEventListener('click', this.changeLikeText.bind(this), false)
      return this.el
    }
  }

  const wrapper = document.querySelector('.wrapper')
  
    /* const likeButton1 = new LikeButton()
    wrapper.appendChild(likeButton1.render())
  
    const likeButton2 = new LikeButton()
    wrapper.appendChild(likeButton2.render()) */

    const likeButton = new LikeButton()
    wrapper.appendChild(likeButton.render()) // 第一次插入 DOM 元素
    likeButton.onStateChange = (oldEl, newEl) => {
      wrapper.insertBefore(newEl, oldEl) // 插入新的元素
      wrapper.removeChild(oldEl) // 删除旧的元素
    }