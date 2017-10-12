// const button = document.querySelector('.like-btn')
// const buttonText = button.querySelector('.like-text')
// let isLiked = false
// button.addEventListener('click', () => {
//   isLiked = !isLiked
//   if (isLiked) {
//     buttonText.innerHTML = '取消'
//   } else {
//     buttonText.innerHTML = '点赞'
//   }
// }, false)

class LikeButton {
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
  wrapper.innerHTML += likeButton2.render()