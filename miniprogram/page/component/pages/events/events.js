Page({
  onShareAppMessage() {
    return {
      title: 'events',
      path: 'page/component/pages/events/events'
    }
  },

  data: {
    items: [
      
    ]
  },
  ontouchmove() {
    console.log('touchmove')
  }
  ,
  ontouchend() {
    console.log('ontouchend')
  }
  ,
  ontouchstart() {
    console.log('ontouchstart')
  }
})
