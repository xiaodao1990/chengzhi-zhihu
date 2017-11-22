// pages/question/question.js

var app = getApp();
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    feed: [],
    feed_length: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("onLoad")
    var that = this

    this.getData();
  },
  // 使用本地假数据填充页面
  getData: function() {
    var feed = util.getData2();
    console.log("loaddata");
    var feed_data = feed.data;
    this.setData({
      feed: feed_data,
      feed_length: feed_data.length
    });
  },
  bindItemTap: function() {// 跳转到回答
    wx.navigateTo({
      url: '../answer/answer'
    });
  }
})