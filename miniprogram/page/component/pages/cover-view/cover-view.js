Page({
  data: {
    scale: 14,
    count: 0,
    longitude: 120.10675,
    latitude: 30.266786,
    includePoints: [{
      latitude: 30.266786,
      longitude: 120.10675,
    }],
  },
  onLoad() {
    // setInterval(() => {
    //   const includePoints = this.count % 2 === 0
    //    ? [{
    //   latitude: 30.266786,
    //   longitude: 120.10675,
    // }] : [{
    //   latitude: 30.266785,
    //   longitude: 120.10674,
    // }];
    // const longitude = this.count % 2 === 0
    // ? 120.10675 
    // : 120.10674;
    //   const latitude = this.count % 2 === 0
    // ? 30.266786
    // : 30.266785;
    //   this.setData({
    //     includePoints,
    //     longitude,
    //     latitude,
    //     count: this.count + 1
    //   })
    // }, 2000)

  },
  onCoverViewTap() {
    console.log('onCoverViewTap')
  },
  onViewTap() {
    console.log('onViewTap')
  },
  onMaskTap() {
    console.log('onMaskTap')
  },
  onbButtonTap() {
    console.log('onbButtonTap')
  }
});
