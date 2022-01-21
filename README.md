<!--
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-05-01 00:48:47
 * @LastEditTime: 2022-01-21 15:04:52
 * @LastEditors: Gavin
-->
<h1 align="center">年会抽奖系统👋</h1>

## 项目介绍
 年会快到了,参与到了设计抽奖系统T-T,是在不想自写一个发现了[@moshang-xc](https://github.com/moshang-xc/lottery)大佬写的作品很炫酷,于是本人就二次开发了下大佬的作品,实现脱离后台前端mock分离版本,喜欢的可以给@moshang-xc点个Star 

## 页面预览
  <img width="400" src="https://gd-filems.dancf.com/mcm79j/mcm79j/50641/19898600-108a-4593-b9b5-afcb1c9d401a734451.png">

## 浏览地址
  [web浏览地址](https://gatomis.github.io/lottery-web/)

## 启动项目
### 安装依赖
```
yarn intall 安装依赖...
```
### 启动项目
```
yarn dev  启动项目...
```
### 项目打包
```
yarn build 项目打包..
```

## 目录结构

```
Lottery-web
  ├── src
  │   ├── lottery
  |   |   ├── mock.js
  │   │   └── index.js
  │   ├── lib
  │   ├── img
  │   ├── css
  │   └── data
  ├── package.json
  └── webpack.config.js
```

## Mock中
| 参数  | 值类型 | 描述                                                         |
| ----- | ------ | ------------------------------------------------------------ |
| user  | Array[Info] | 奖品类型，唯一标识，0 是默认特别奖的占位符，其它奖品不可使用 |
| COMPANY | string| 公司名                                                     |
| prizes  | Array[Gift] | 奖品信息                                                    |
| luckyData  | {type:Array[Info]} | 中奖名单  type为奖品类型                                                   |
| leftUsers  | Array[Info]  | 当前奖池可以抽取人员                                                   |
| excludeUser | Array[Info] | 排除奖池人员述                                                     |
| atmosphereGroupCard   | String | 气氛组卡片                        |
| background   | String | 背景图片                        |
| EACH_COUNT   | Array[Number] | 抽奖次序默认有个隐藏顺序                      |
| width   | string| 渲染抽奖墙宽度比例        最好按照原比例去做             |
| height   | string| 渲染抽奖墙长度比例       最好按照原比例去做                |
| bgVideo   | string| 可以放动态渲染图(mp4类型这种)     使用时会自动覆盖背景不用时请注释或者node该属性               |
### Gift详情
```
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
```

### 内置方法
插入抽奖前的方法
```
/**
 * @description: 不能说的秘密
 * @param {*} nowItem 当前奖品
 * @param {*} basicData 当前奖池人员
 * @return {*}
 * @Date: 2022-01-13 15:13:31
 */
function setSecret(nowItem,basicData) {
  if (nowItem.type != 4) {
    const excludeId = excludeUser.map(item => item[0])
    basicData.leftUsers = basicData.leftUsers.filter(human => !excludeId.includes(human[0]))
    // console.log(basicData.leftUsers);
  }
}
```
### 背景音乐说明
方法在index.js replaceMusic()

| 参数  |  描述    |
| ----- | ------ |
| enter-BGM  | 进场音乐 |
| other-BJ-BGM  | 抽奖颁奖音乐 |
| other-lottery | 抽奖进行时音乐|
| 1ts-BJ-BGM | 抽奖颁奖音乐 |
| 1ts-lottery | 抽奖进行时音乐|
| shenchou | 备用|


## Store（缓存）
当页面刷新了怎么办,别担心这里做了页面数据缓存
所有数据都优先读取缓存中数据,当页面刷新时自动读取,如果没有缓存自动初始化话数据
## 页面逻辑

* 抽奖=>对奖池人进行当前奖品抽奖,当再次进行抽奖时会保存上次抽奖结果到缓存中并更新luckUser和leftUser
* 重新抽奖=>将当前抽中的人员扔回leftUser中(这里和原作者不同,原作者是直接删除了提出了刚才重抽之前人员),进行重新抽奖仍有可能抽中点重抽之前的人(当前轮)
* 颁奖模式=>进行当前奖品的颁奖模式bgm
* 重置=>无视一切条件进行页面重置（与原作不同）
* 奖池每次重置都会被打乱池子顺序,优化随机算法

### 自行修改(需要自己二次开发)
1. 卡片显示编号和名字(index.js)
2. 选中颜色（index.css）
3. 卡片背景 (index.css)

