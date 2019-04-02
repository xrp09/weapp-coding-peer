var env = 'development';
var api = require('./api.config.js');




const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

// 显示繁忙提示
var showBusy = text => wx.showToast({
  title: text,
  icon: 'loading',
  duration: 10000
})

// 显示成功提示
var showSuccess = text => wx.showToast({
  title: text,
  icon: 'success'
})

// 显示失败提示
var showFail = (title, content) => {
  wx.hideToast();

  wx.showModal({
    title,
    content: JSON.stringify(content),
    showCancel: false
  })
}

// 显示提示消息
var showMessage = (title) => {
  wx.showToast({
    title: title,
    //content: JSON.stringify(content),
    icon: 'none',  //图标，支持"success"、"loading"
    duration: 2000 //提示的延迟时间，单位毫秒，默认：1500
  })
}

var testShow=function(){
  wx.showToast({
    title: '成功',  //标题
    icon: 'none',  //图标，支持"success"、"loading"
    //image: '../image/img.png',  //自定义图标的本地路径，image 的优先级高于 icon
    duration: 2000, //提示的延迟时间，单位毫秒，默认：1500
    mask: true,  //是否显示透明蒙层，防止触摸穿透，默认：false
    success: function () { }, //接口调用成功的回调函数
    fail: function () { },  //接口调用失败的回调函数
    complete: function () { } //接口调用结束的回调函数
  })
}

// 请求
var http = (url, data, fun) => {
  wx.request({
    method: 'POST',
    url: api[url][env],
    data: data,
    header: {
      'content-type': 'application/json' // 默认值
    },
    success: function (res) {
      console.log(res.errMsg)
      res.statusCode === 200 ? fun(res.data) : fun(res);
    },
    fail: function (res) {
      console.log(res.statusCode, res.errMsg)
    }
  })
}

let dateUtil = {
  //获取前一个月
  preMonth: function (d) {
    if (typeof d === 'string') d = new Date(d);
    else d = new Date();
    let date = new Date(d.getFullYear(), d.getMonth() - 1)
    return date;
  },

  nextMonth: function (d) {
    if (typeof d === 'string') d = new Date(d);
    else d = new Date();
    let date = new Date(d.getFullYear(), d.getMonth() + 1)
    return date;
  },

  //获取前一个天
  preDay: function (d) {
    if (typeof d === 'string') d = new Date(d);
    else d = new Date();
    let date = new Date(d.getFullYear(), d.getMonth(), d.getDate() - 1)
    return date;
  },

  nextDay: function (d) {
    if (typeof d === 'string') d = new Date(d);
    else d = new Date();
    let date = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1)
    return date;
  }
}



   //获取页面数组 (写法简单，异步请求)
var loadData=path=>{
  var dataArrays=[];
  $.getJSON("../../assets/data/data.json", function (data) {
    dataArrays = data;
    console.log(dataArrays);
  });
  return dataArrays;
}




module.exports = {
  formatTime: formatTime,
  showBusy: showBusy,
  showSuccess: showSuccess,
  showFail: showFail,
  http: http,
  dateUtil: dateUtil,
  loadData: loadData,
  testShow:testShow,
  showMessage: showMessage
}
