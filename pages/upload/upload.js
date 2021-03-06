// pages/upload/upload.js

var util = require("../../utils/util.js")
var resdata = require("../../utils/data.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shuoming:"",
    items: [
      { name: 'YC', value: '原创', checked: 'true' },
      { name: 'ZZ', value: '转载' },
    ]

  },

  postResource:function(){

    this.popup.showPopup();
  },
  showPopup() {
    this.popup.showPopup();
  },

  //取消事件
  _error() {
    console.log('你点击了取消');
    this.popup.hidePopup();
  },
  //确认事件
  _success() {
    console.log('你点击了确定');
    this.popup.hidePopup();
    util.showMessage("上传成功");
  },

  // formsubmit: function (e) {
  //   var that = this;
  //   var formData = e.detail.value;
  //   wx.request({
  //     url: util.apiUrl + 'Index/formsubmit?program_id=' + app.jtappid,
  //     data: formData,
  //     header: { 'Content-Type': 'application/json' },
  //     success: function (res) {
  //       if (res.data.statu == 1) {
  //         wx.showToast({
  //           title: '提交成功',
  //         })
  //         that.setData({
  //           form_info: ''
  //         })
  //       }
  //     }
  //   })
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      shuoming: resdata.shuoming.content
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //获得popup组件
    this.popup = this.selectComponent("#popup");
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