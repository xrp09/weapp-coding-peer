// pages/titleDetail/titleDetail.js
var util = require("../../utils/util.js")
var resdata = require("../../utils/data.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailTitle: "我是一个标题",
    author:"老马",
    downloadCount:"12",
    content:"   它的另一个名字就是牛逼。它的另一个名字就是牛逼它的另一个名字就是牛逼它的另一个名字就是牛逼它的另一个名字就是牛逼它的另一个名字就是牛逼它的另一个名字就是牛逼"
  },

  receiveResource:function(){
    util.showSuccess("内容已复制");
    // 弹出框
    // this.popup.showPopup();

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
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.id;
    var title = options.title;
    console.log(id+title);
    this.setData({
      detailTitle:title
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