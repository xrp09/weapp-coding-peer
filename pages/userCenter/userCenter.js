// pages/userCenter/userCenter.js
var util=require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{},
    logged:false

  },

  onGotUserInfo(e) {
    console.log(e.detail.errMsg)
    console.log(e.detail.userInfo)
    console.log(e.detail.rawData)
  },
  getUserInfo: function () {
    var that = this;
    wx.getStorage({
      key: 'userInfo',
      success(res) {
        that.setData({
          userInfo: res.data,
          logged: true
        });
      }
    })
  },

  // 获取用户信息
  getUserInfo: function () {
    var that = this;
    console.log('获取用户信息')
    wx.getUserInfo({
      success: function (res) {
        var userInfo = res.userInfo
        var nickName = userInfo.nickName
        var avatarUrl = userInfo.avatarUrl
        var gender = userInfo.gender //性别 0：未知、1：男、2：女
        var province = userInfo.province
        var city = userInfo.city
        var country = userInfo.country
        that.setData({
          userInfo: userInfo,
          logged: true
        })
        console.log('请求用户信息，存储用户信息')
        wx.setStorage({
          key: 'userInfo',
          data: that.data.userInfo
        });
        // 存储最后一次点击tab的index
        wx.setStorage({
          key: 'lastIndex',
          data: that.data.isActive
        });
      },
      fail: function (res) {
        that.getSetting();
      }
    })
  },

  // 获取用户权限
  getSetting: function () {
    console.log('获取用户权限')
    var that = this;
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.userInfo']) {
          wx.authorize({
            scope: 'scope.userInfo',
            success(res) {
              that.login()
            },
            error() { }
          })
        } else {
          that.data.logged ? that.getUserInfo() : that.login();
        }
      }
    })
  },

  // 用户登录
  login: function () {
    console.log('用户登录');
    if (this.data.logged) return
    var that = this
    // 调用登录接口
    qcloud.login({
      success(result) {
        if (result) {
          that.setData({
            userInfo: result,
            logged: true
          });
          console.log('首次登录，存储用户信息')
          wx.setStorage({
            key: 'userInfo',
            data: that.data.userInfo
          });
        } else {
          // 如果不是首次登录，不会返回用户信息，请求用户信息接口获取
          qcloud.request({
            url: config.service.requestUrl,
            login: true,
            success(result) {
              // util.showSuccess('登录成功')
              that.setData({
                userInfo: result.data.data,
                logged: true,
              });
              console.log('非首次登录，存储用户信息')
              wx.setStorage({
                key: 'userInfo',
                data: that.data.userInfo
              });
            },
            fail(error) {
              util.showModel('请求失败', error)
              console.log('request fail', error)
            }
          })
        }
      },

      fail(error) {
        util.showModel('登录失败', error)
        console.log('登录失败', error)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.getUserInfo();

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