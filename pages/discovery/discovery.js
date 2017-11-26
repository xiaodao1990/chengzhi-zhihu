// pages/discovery/discovery.js

var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navTab: ["推荐", "圆桌", "热门", "收藏"],
    currentNavtab: "0",
    imgUrls: [
        '../../images/24213.jpg',
        '../../images/24280.jpg',
        '../../images/1444983318907-_DSC1826.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    indicatorColor: '#8CCEFD',
    indicatorActiveColor: '#298DE5',
    feed: [],
    feed_length: 0
  },
  switchTab: function(event) {
    console.log("switchTab");
    this.setData({
      currentNavtab: event.currentTarget.dataset.idx
    });
  },
  onLoad: function() {
    console.log('onLoad');
    var that = this;
    //调用应用实例的方法获取全局数据
    this.getData();
  },
  getData: function() {
    var feed = util.getDiscovery();
    console.log("loaddata");
    var feed_data = feed.data;
    this.setData({
      feed: feed_data,
      feed_length: feed_data.length
    });
  },
  upper: function() {
    wx.showNavigationBarLoading();
    this.refresh();
    console.log("upper");
    setTimeout(function () {
      wx.hideNavigationBarLoading();
      wx.stopPullDownRefresh();
    }, 2000);
  },
  lower: function() {
    wx.showNavigationBarLoading();
    var that = this;
    that.nextload();
    setTimeout(function () {
      wx.hideNavigationBarLoading();
    }, 2000);
  },
  refresh: function() {
    console.log("refresh");
    wx.showLoading({
      title: '加载中',
    });
    var feed = util.getDiscovery();
    var feed_data = feed.data;
    this.setData({
      feed: feed_data,
      feed_length: feed_data.length
    });
    setTimeout(function () {
      wx.hideLoading();
    }, 2000);
  },
  nextload: function() {
    console.log("nextLoad");
    wx.showLoading({
      title: '加载中',
    });
    var feed = util.discoveryNext();
    var feed_data = feed.data;
    this.setData({
      feed: this.data.feed.concat(feed_data),
      feed_length: this.data.feed_length + feed_data.length
    });
    setTimeout(function () {
      wx.hideLoading();
    }, 2000);
  }
})