var base = ' https://www.easy-mock.com/mock/5c9c56e81a7ab91a34f14d29/codepeer/'
var api = {
  resourceListApi: {
        development: base + 'home/query',
    },
    recommendListApi: {
        development: base + 'zhixiaohu/home/recommendList',
    },
    hotListApi: {
        development: base + 'zhixiaohu/home/hotList',
    },
    searchApi: {
        development: base + 'zhixiaohu/home/searchResult',
    }
}

module.exports = api;