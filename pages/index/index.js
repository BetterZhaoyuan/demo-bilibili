Page({

  /**
   * 页面的初始数据
   */
  data: {
    //被点击的首页导航菜单的索引
    currentIndexNav:0,
    //首页导航数据
    navList:[],
    //轮播图数据
    swiperList:[],
    //视频列表数据
    videoList:[]
  },
  /**
   * 点击首页导航
   */
  activeNav(e){
    this.setData({
      currentIndexNav:e.target.dataset.index
    })
  },
  /**
   * 获取首页导航数据
   */
  getNavList(){
    let that = this;
    // //利用小程序内置发送请求的方法
    // wx.request({
    //   url:"https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/navList",
    //   success(res){
    //     //console.log(res);
    //     if(res.data.code===0){
    //       that.setData({
    //         navList:res.data.data.navList
    //       })
    //     }
    //   }
    // })
    that.setData({
      navList:["首页","动画","番剧","国创","音乐","舞蹈","科技","游戏","娱乐","鬼畜","电影","电视剧","纪录片"]
    })
  },
   /**
   * 获取轮播图数据
   */
  getSwiperList(){
    let that = this;
    that.setData({
      swiperList:["../../images/lunbo1.jpg",
      "../../images/lunbo2.jpg",
      "../../images/lunbo3.jpg",
      "../../images/lunbo4.jpg"]
    })
  },
  /**
   * 获取视频列表数据
   */
  getVideoList(){
    let that = this;
    that.setData({
      videoList:[
      {"id":0,"imgSrc":"../../images/img_1.jpg","desc":"世界上广告最多的网站判定！真的有10000条广告！【黑暗物质#2】","playCount":"24.9万","commentCount":"1345","videoSrc":"http://files.ak48.xyz/2018120195458.mp4"},
      {"id":1,"imgSrc":"../../images/img_2.jpg","desc":"【圣地亚哥金曲】藏，超好听的中国风电音鬼畜！","playCount":"63.8万","commentCount":"7825","videoSrc":"http://files.ak48.xyz/20181219211856.mp4"},
      {"id":2,"imgSrc":"../../images/img_3.jpg","desc":"迈克尔杰克逊封神的12秒，无人能做到！","playCount":"63.8万","commentCount":"7825","videoSrc":"http://files.ak48.xyz/20181219211920.mp4"},
      {"id":3,"imgSrc":"../../images/img_4.jpg","desc":"【2018】年度影视混剪 Ready Story 2018【混剪】","playCount":"40.0万","commentCount":"1066","videoSrc":"http://files.ak48.xyz/20181219211910.mp4"}]
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //1.获取首页导航数据
    this.getNavList();
    //2.获取轮播图数据
    this.getSwiperList();
    //3.获取视频列表数据
    this.getVideoList();
  },

  /**
   * 跳转视频详情页面
   */
  goVideoDetail:function (event) {
    var id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/detail/detail?id='+id
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