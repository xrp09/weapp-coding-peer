//index.js
var util = require("../../utils/util.js")
var resdata = require("../../utils/data.js")
var dictTranslation = require("../../utils/dict.js")
//获取应用实例
const app = getApp()

Page({
  data: {
    //motto: '敢为天下先',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    isActive: 0,
    animationData: {},
    resourceList: [],
    yc:"转载",
    zz:"原创"
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  // 设置显示的tab
  setActive: function (e) {

    // 获取当前点击的index
    var index = e.target.dataset.index;
    console.log("index tab click : "+index);
    // 初始化动画数据
    var animation = wx.createAnimation({
      duration: 200,//动画持续时间
      timingFunction: 'ease-out',//动画效果：结束时减速
      delay: 0//延迟多长时间开始
    })
    // 距离左边位置
    animation.left((index * 375) + 'rpx').step()
    // 设置动画
    this.setData({
      animationData: animation.export()
    })
    // 设置对应class
    this.setData({
      isActive: index
    })
  },
 
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  // getResourceList:function(){
  //   this.setData({
  //     resourceList: resdata.resource1().list

  //   })

  //   console.log(resdata.resource1().list);
  // },
  //获取首页信息
  getResourceList(flag) {
    var that = this;
    util.http('resourceListApi', {}, (res) => {
      if (res.errMsg) {
        util.showModel(res.errMsg);
      } else {
        if (!flag) {
          console.log('setData')
          that.setData({
            resourceList: res.data.list
          })
        console.log('请求首页列表数据');
        }
        if (flag) {
          that.setData({
            resourceList: res.list.concat(that.data.recList)
          })
          console.log('刷新首页列表数据');
          wx.stopPullDownRefresh();
          wx.hideNavigationBarLoading();
          util.showSuccess(res.list.length + '条新内容');
        }
      }
    })
  },

  goTitleDetail(e) {
    wx.navigateTo({
      url: '../../pages/titleDetail/titleDetail?id=' + e.target.dataset.id + '&title=' + e.target.dataset.title
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    };

  },
  onReady: function () {
    this.getResourceList();
    util.testShow();
  }
  
})
