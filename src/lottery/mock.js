/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-01-11 15:24:49
 * @LastEditTime: 2022-06-21 18:34:34
 * @LastEditors: Gavin
 */
const test = [
  ["000016", "佐助", "技术部"]
  , ["000022", "赵云", "技术部"]
  , ["000019", "金角大王", "技术部"]
  , ["000021", "行者孙", "技术部"]
  , ["000004", "杨幂", "技术部"]
  , ["000023", "金克丝", "技术部"]
  , ["000017", "白骨精", "技术部"]
  , ["000024", "蔚", "技术部"]
  , ["000002", "柯镇恶", "技术部"]
  , ["000008", "欧阳锋", "技术部"]
  , ["000009", "周楠", "技术部"]
  , ["000015", "卢本伟", "技术部"]
  , ["000013", "鸣人", "技术部"]
  , ["000003", "黄药师", "技术部"]
  , ["000010", "艾薇儿", "技术部"]
  , ["000011", "贾斯丁比伯", "技术部"]
  , ["000020", "银角大王", "技术部"]
  , ["000001", "周芷若", "技术部"]
  , ["000005", "张无忌", "技术部"]
]

function randomsort(a, b) {
  return Math.random() > .5 ? -1 : 1;
  //用Math.random()函数生成0~1之间的随机数与0.5比较，返回-1或1
}



const user = test.sort(randomsort)
/**
 * 卡片公司名称标识
 */
const COMPANY = "Github";
/**
 * 奖品设置
 * type: 唯一标识，0是默认特别奖的占位符，其它奖品不可使用
 * count: 奖品数量
 * title: 奖品描述
 * text: 奖品标题
 * img: 图片地址
 * ROTATE_TIME:转的球速度越大越慢
 * circle:旋转圈数最好8*x倍数
 * enter: //抽奖进行时音乐
 * awards: //颁奖音乐
 */
const prizes = [
  {
    type: 0,
    count: 1000,
    title: "抽奖结束",
    text: "需要重新抽奖请配置后重置"
  },
  {
    type: 1,
    count: 1,
    text: "一等奖 ",
    title: "价值5999元",
    img: "./img/huawei.png",
    enter: "1st-lottery",//抽奖进行时音乐
    awards: "1st-BJ-BGM",//颁奖音乐
    ROTATE_TIME: 20000,
    circle: 8 * 6

  },
  {
    type: 2,
    count: 2,
    text: "二等奖 ",
    title: "价值3799元",
    img: "./img/mbp.jpg",
    enter: "other-lottery",//抽奖进行时音乐
    awards: "other-BJ-BGM",//颁奖音乐
    ROTATE_TIME: 20000,
    circle: 8 * 3
  },
  {
    type: 3,
    count: 5,
    text: "三等奖  ",
    title: "价值1200元",
    img: "./img/ipad.jpg",
    enter: "other-lottery",//抽奖进行时音乐
    awards: "other-BJ-BGM",//颁奖音乐
    ROTATE_TIME: 10000,
    circle: 8 * 3
  },
  {
    type: 4,
    count: 10,
    text: "四等奖",
    title: "价值300-600元不等",
    img: "./img/edifier.jpg",
    enter: "other-lottery",//抽奖进行时音乐
    awards: "other-BJ-BGM",//颁奖音乐
    ROTATE_TIME: 10000,
    circle: 8 * 1
  }

];
let luckyData = JSON.parse(localStorage.getItem("luckyData")) || {};

let leftUsers = JSON.parse(localStorage.getItem("leftUsers")) || user;

let awardList = JSON.parse(localStorage.getItem("awardList")) || {}


//不能说的秘密
const excludeUser = [["000005", "张无忌", "技术部"]]
/**
 * @description: 不能说的秘密
 * @param {*} nowItem 当前奖品
 * @param {*} basicData 当前奖池人员
 * @return {*}
 * @Date: 2022-01-13 15:13:31
 */
function setSecret(nowItem, basicData) {
  if (nowItem.type != 4) {
    // console.log(mockData.excludeUser);
    const excludeId = excludeUser.map(item => item[0])
    // console.log(excludeId, basicData.leftUsers);
    basicData.leftUsers = basicData.leftUsers.filter(human => !excludeId.includes(human[0]))
    // console.log(basicData.leftUsers);
  }
}
//颜色
const rgba = "0,0,0"
//透明度
const opacity = () => 0.3 || Math.random() * 0.7 + 0.25
//气氛组卡片
const atmosphereGroupCard = () => `rgba(${rgba},${opacity()})`
//背景色
const background = "url(https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01ef5e59c878d5a8012053f8c53ab7.jpg%401280w_1l_2o_100sh.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1645253836&t=e6413ccc6469632cf5476f5f6067e13b)"
//背景动态壁纸模式 不用时可以设置为null或者注释
// const bgVideo="//game.gtimg.cn/images/lol/act/a20220121lunarpass/bg.mp4"
const width = window.innerWidth * .75
const height = window.innerWidth * .75 * .75
/**
 * 一次抽取的奖品个数与prizes对应
 */
const EACH_COUNT = [1, 1, 1, 5, 5];
export default { EACH_COUNT, prizes, COMPANY, user, luckyData, leftUsers, awardList, excludeUser, atmosphereGroupCard, background, setSecret, width, height, bgVideo }