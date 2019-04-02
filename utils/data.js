function resList(){
var json={
    "list":[
        {
            "id":1001,
            "title":"MYSQL开发规范100条",
            "category":"ZZ",
            "avatar":"http://dummyimage.com/50x50/79f2b3",
            "from":"column",
            "image":"http://dummyimage.com/400x200/f2d179",
            "fineAnswer":{
                "id":"450000200910288112",
                "like":34169,
                "description":"命期革者指米着头区流几与过因南。接单条利省维头矿适元油斯布儿水消。者条场总地斯决志公始通开型利。走派矿制具社要会才石土算便面话据十。委想原越他装支题角数之节劳观打今。结儿她报制律安外题业时广际圆水。所之展形究酸金点如者天志象少果。",
                "comment":4597
            }
        },
        {
            "id":1002,
            "title":"SpringBoot使用指南",
            "category":"ZZ",
            "avatar":"http://dummyimage.com/50x50/f279b3",
            "from":"question",
            "image":"http://dummyimage.com/400x200/f279db",
            "fineAnswer":{
                "id":"340000201804104737",
                "like":14003,
                "description":"里严七达程连快规几以进确并清它。风且自集族却通即完常效专定史次法白。需必层段山政心口调构造响北百。起目回下管出些度运用果此实将价过给。切热代什示本或作万县出那什亲效。快非声己住不图体不正计然自农车个量。",
                "comment":9464
            }
        },
        {
            "id":1003,
            "title":"微服务架构设计",
            "category":"ZZ",
            "avatar":"http://dummyimage.com/50x50/79f2bd",
            "from":"question",
            "image":"http://dummyimage.com/400x200/f279eb",
            "fineAnswer":{
                "id":"340000200612311577",
                "like":60969,
                "description":"意队产来强所信传白使族接红道。层华他对克业持统从常被律受低。效元政万八处到式体天石快选确集比叫题。业题转太音深义东通器物总决思。转称党则任还部型论院很究长白五农与。价调飞该强书治料下听线手好工因程酸段。数广种性只步往消话标以族断容使阶片按。",
                "comment":5608
            }
        },
        {
            "id":1004,
            "title":"接口工具微服务化升级",
            "category":"YC",
            "avatar":"http://dummyimage.com/50x50/79ccf2",
            "from":"column",
            "image":"http://dummyimage.com/400x200/798bf2",
            "fineAnswer":{
                "id":"120000199307194750",
                "like":30156,
                "description":"技划持权争变海转二候精期火和出并细。八便段将任精斗适光观立为使。素至对走交许入以县切易学断会青习规精。",
                "comment":4853
            }
        },
        {
            "id":1005,
            "title":"Netty大型网络应用实战",
            "category":"YC",
            "avatar":"http://dummyimage.com/50x50/e979f2",
            "from":"question",
            "image":"http://dummyimage.com/400x200/79dcf2",
            "fineAnswer":{
                "id":"360000198409220374",
                "like":45854,
                "description":"群证至料干物将育划识经厂能学由历内。学走你受美切改商业听几些程。完北界但照青往党造义海区命代美法间。点机强积住小京整工目放常重加设书力。点参劳民包代克八合料五而建及就。电改查相受结名节道文却用给色。",
                "comment":9756
            }
        },
        {
            "id":1006,
            "title":"NGINX代理服务器实现负载均衡",
            "category":"YC",
            "avatar":"http://dummyimage.com/50x50/79c3f2",
            "from":"question",
            "image":"http://dummyimage.com/400x200/a5f279",
            "fineAnswer":{
                "id":"370000200209194919",
                "like":94235,
                "description":"先查表科干及同前常适年眼律走往。放可王展值产备全石样查极学车战。六提极市观先管色规东数局然人算石每。",
                "comment":9607
            }
        }
    ]
}
return json
}

var mt_data = mtData()
function searchmtdata(id) {
    var result
    for (let i = 0; i < mt_data.list.length; i++) {
        var mt = mt_data.list[i
    ]
        if (mt.id == id) {
            result = mt
    }
  }
    return result || {}
}

function mtData() {
    var arr = {
        list: [
      {
                id: '1',
                MTId: 'MT001',
                status: 'working',
                Duration: 3,
                Operator: 'tom',
                IdleReason: 'lunch'
      },
      {
                id: '2',
                MTId: 'MT002',
                status: 'Idle',
                Duration: 7,
                Operator: 'jerry',
                IdleReason: 'reparied'
      },
      {
                id: '3',
                MTId: 'MT003',
                status: 'Idle',
                Duration: 6,
                Operator: 'tom',
                IdleReason: 'lunch'
      },
      {
                id: '4',
                MTId: 'MT004',
                status: 'working',
                Duration: 9,
                Operator: 'jerry',
                IdleReason: 'reparied'
      },
      {
                id: '5',
                MTId: 'MT005',
                status: 'Idle',
                Duration: 2,
                Operator: 'tom',
                IdleReason: 'lunch'
      },
      {
                id: '6',
                MTId: 'MT006',
                status: 'working',
                Duration: 6,
                Operator: 'jerry',
                IdleReason: 'reparied'
      },
      {
                id: '7',
                MTId: 'MT007',
                status: 'Idle',
                Duration: 1,
                Operator: 'tom',
                IdleReason: 'lunch'
      }
    ]
  }
    return arr
}

var shuoming={"content":"说明：投稿审核通过会有积分奖励；资源被下载会有积分奖励；提交的资源不得包含广告、侵权信息，百度盘地址建议有密码。"}


module.exports = {
  mtData: mtData,
  searchmtdata: searchmtdata,
  resource1:resList,
  shuoming: shuoming
}