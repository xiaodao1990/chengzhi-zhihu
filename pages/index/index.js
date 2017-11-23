//index.js
//获取应用实例
const app = getApp()
var util = require('../../utils/util.js');

Page({
    data: {
        feed: [],
        feed_length: 0,
        globalData: {
            sysinfo: null,
            px2rpx: 0,
            rpx2px: 0
        }
    },
    onLoad: function () {
        console.log("onLoad")
        var that = this
        this.getData();
        this.getSystemInfo();
    },
    // 下拉刷新,怎么实现下拉刷新
    upper: function () {
        wx.showNavigationBarLoading();
        this.refresh();
        console.log("upper");
        setTimeout(function () {
            wx.hideNavigationBarLoading();
            wx.stopPullDownRefresh();
        }, 2000);
    },
    // 上拉加载
    lower: function () {
        wx.showNavigationBarLoading();
        var that = this;
        setTimeout(function () {
            wx.hideNavigationBarLoading();
            that.nextLoad();
        }, 1000);
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
    refresh: function () {
        console.log("refresh");
        wx.showLoading({
            title: '加载中',
        });
        var feed = util.getData2();
        var feed_data = feed.data;
        this.setData({
            feed: feed_data,
            feed_length: feed_data.length
        });
        setTimeout(function () {
            wx.hideLoading()
        }, 2000);
    },
    // 使用本地假数据进行分页加载的效果
    nextLoad: function() {
        console.log("nextLoad");
        wx.showLoading({
            title: '加载中',
        });
        var next = util.getNext();
        var next_data = next.data;
        this.setData({
            feed: this.data.feed.concat(next_data),
            feed_length: this.data.feed_length + next_data.length
        });
        setTimeout(function () {
            wx.hideLoading()
        }, 1000);
    },
    // 自定义的点击事件
    bindQueTap: function() {// 跳转到问题
        wx.navigateTo({
          url: '../question/question'
        });
    },
    bindItemTap: function() {// 跳转到回答
        wx.navigateTo({
          url: '../answer/answer'
        });
    },
    // 屏幕适配
    getSystemInfo: function() {
        var systemInfo = wx.getSystemInfo();
        console.log("systemInfo: "+systemInfo);
        if (systemInfo) {
            this.globalData.sysinfo = systemInfo;
            var width = systemInfo.windowWidth;
            this.globalData.px2rpx = 750 / width;
            this.globalData.rpx2px = width / 750;
        }
    }
})
