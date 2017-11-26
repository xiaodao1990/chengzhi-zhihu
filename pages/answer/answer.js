// pages/answer/answer.js
Page({

    data: {

    },
    //事件处理函数
    toQuestion: function() {
        wx.navigateTo({
            url: '../question/question'
        })
    }
})