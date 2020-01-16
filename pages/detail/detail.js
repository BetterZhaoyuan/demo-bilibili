// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //视频详情
    videoInfo:null,
    //推荐视频列表
    othersList:[],
    //评论列表
    commentsList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    let videoId = options.id;
    this.getCurrentVideo(videoId);
    this.getOthersList(videoId);
    this.getCommentsList(videoId);
  },

  /**
   * 获取视频详情
   */
  getCurrentVideo(videoId){
    let that = this;
    that.setData({
      videoInfo:{"author":"牧草君","date":"12-15","id":0,"videoTitle":"世界上广告最多的网站判定！真的有10000条广告！【黑暗物质#2】","playCount":"24.9万","commentCount":"1345","videoSrc":"https://v-cdn.zjol.com.cn/276990.mp4"},
    })
  },

   /**
   * 获取推荐视频列表
   */
  getOthersList(videoId){
    let that = this;
    that.setData({
      othersList:[
      {"imgSrc":"../../images/other_1.jpg","duration":"00:06:28","title":"世界上最小的网站！小到只有0.4kb，你信吗？【黑暗物质#1】","playMsg":"20.6","commentCount":"445"},
      {"imgSrc":"../../images/other_2.jpg","duration":"00:02:11","title":"改革春风吹满地","playMsg":"52.1","commentCount":"564"},
      {"imgSrc":"../../images/other_3.jpg","duration":"00:01:39","title":"呲哩呲哩？是不是我大破站太火了！！！","playMsg":"27.0","commentCount":"1179"},
      {"imgSrc":"../../images/other_4.jpg","duration":"00:01:03","title":"当B站被腾讯收购！会发生什么？","playMsg":"117.8","commentCount":"4348"}]
    })
  },

  /**
   * 获取评论列表
   */
  getCommentsList(videoId){
    let that = this;
    that.setData({
      commentsList:[
      {"userIconSrc":"../../images/header_1.jpg","username":"峰岛达峪","commentInfo":"什么？居然不是某些网站的澳门皇家赌场？","commentDate":"12-15"},
      {"userIconSrc":"../../images/header_2.jpg","username":"黑笙白鸾","commentInfo":"鲁迅说过，如果你有一个苹果，我有一个苹果，我们交换，一人还是一个苹果，如果你有一个网站，我有一个网站，我们交换那我们双方就有两个网站","commentDate":"12-15"},
      {"userIconSrc":"../../images/header_3.jpg","username":"NAN某","commentInfo":"我经常逛的那些网站也有很多广告(｀・ω・´)","commentDate":"12-15"},
      {"userIconSrc":"../../images/header_4.jpg","username":"牧草君","commentInfo":"你们赶快去这个王网站了里面找找好玩的，我已经找到好几个(✪▽✪)好康的网站了！","commentDate":"12-15"}]
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})