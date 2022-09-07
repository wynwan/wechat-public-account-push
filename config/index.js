export const config = {
  /**
   * 公众号配置
   */

  // 公众号APP_ID 
  APP_ID: "wx08e5dd49f02c14bd",

  // 公众号APP_SECRET 
  APP_SECRET: "e5f6b626d6b1e9ea1eda7f2d874be62e",
  USERS: [
    {
      // 想要发送的人的名字
      name: "宝贝",
      // 扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "ovr9j6izVqQEeLy_xbK2SbscJqVk",
      // 你想对他发送的模板消息的模板ID
      useTemplateId: "PizL0MV1hkxEM-SMP2RNwKMgqPqxciyMPkFTt7OHKks",
      // 所在省份
      province: "天津",
      // 所在城市
      city: "桥西区",
      // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
      openUrl: "https://wangxinleo.cn"
    }, 
  ],

  /**
   * 回调消息 相关，主要用来展示发送是否成功/失败的数据
   */

  // 回调消息模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: "ovr9j6gHQgHOnZFC6KtWn-IaRGzw",

  // 接收成功回调消息的微信号，（一般来说只填自己的微信号, name填不填无所谓）
  CALLBACK_USERS: [
    {
      // 一般都填自己
      name: "自己",
      // 自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "ovr9j6gHQgHOnZFC6KtWn-IaRGzw",
    }, 
  ],
  FESTIVALS: [
    {"type": "生日", "name": "宝宝", "year": "2003", "date": "02-27"},
    {"type": "生日", "name": "小昊昊", "year": "2003", "date": "03-23"},
  ],

  /**
   * 限制重要节日的展示条目, 需要填写数字; 
   * 如果为3, 则仅展示“将要到达” 的3个重要节日提醒，剩下的将被忽略
   * 如果为0, 则默认展示全部
   */
  FESTIVALS_LIMIT: 4,
  CUSTOMIZED_DATE_LIST: [
    // 在一起的日子
    {"keyword": "love_day", date: "2022-05-21"},
  ],
  SLOT_LIST: [
    // 这样配置的话，就会每次发送这句话
    {"keyword": "encourage_oneself", contents: "我爱你，每天都会重复一遍哦"},
  ],
