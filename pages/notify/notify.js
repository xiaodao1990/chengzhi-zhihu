// pages/notify/notify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navTab: ["通知", "赞与感谢", "关注"],
    currentNavtab: "0"
  },
  switchTab: function(event){
    this.setData({
      currentNavtab: event.currentTarget.dataset.idx
    });
  }
})