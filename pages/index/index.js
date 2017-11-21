//index.js
//获取应用实例
const app = getApp()
var util = require('../../utils/util.js');

Page({
    data: {
        feed: [],
        feed_length: 0
    },
    onLoad: function () {
        console.log("onLoad")
        var that = this

        this.getData();
    },
    // 下拉刷新,怎么实现下拉刷新
    upper: function () {
        wx.showNavigationBarLoading()
        this.refresh();
        console.log("upper");
        setTimeout(function () {
            wx.hideNavigationBarLoading();
            wx.stopPullDownRefresh();
        }, 2000);
    },
    // 上拉加载
    lower: function () {

    },
    // 使用本地假数据填充页面
    getData: function () {
        var feed = util.getData2();
        console.log("loaddata");
        var feed_data = feed.data;
        this.setData({
            feed: feed_data,
            feed_length: feed_data.length
        })
    },
    refresh: function() {
        console.log("refresh")
    }
})
