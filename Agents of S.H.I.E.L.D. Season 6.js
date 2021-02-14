/*
此文件为Node.js专用。其他用户请忽略
神盾局特工 第六季 Agents of S.H.I.E.L.D. Season 6 第1集
本集中文名: 暂无,欢迎添加
本集原名: Missing Pieces
播放时间: 2019-05-10 星期五 (当地时间)
剧情简介:
　　本集两条线，一条是地球上，麦克带着梅，悠悠球继续当神盾局，抓捕一帮穿越来的未知匪徒；一条是太空，西蒙斯和黛西在找冷冻的菲兹。
　　太空线菲兹所在的飞船就被一个大招打成了两半，菲兹下落不明。西蒙斯他们追到了一个外星球胁迫人质，发现了半艘菲兹的飞船，但冷冻舱里已经空无一人，黛西等人想先回地球，西蒙斯坚持要直接去找冷冻仓生产厂家（她认为菲兹会去那里继续冻自己），双方发生争执，结果在被外星战舰攻击的紧急情况下，西蒙斯强行输入了生产厂家的地址，执行了飞船空间跳跃。
　　地球线麦克他们缺了科学家，各种不顺，于是找了一个据说是梅的老公的老师的人，想重建神盾局学院，顺便提供技术支持。未知匪徒的穿越还在继续，新的地点在一个博物馆，神盾局众人赶到，但被一个对方的戏精延误，引爆炸弹，就在众人被震得七窍出血的时候，一艘卡车穿越过来，下车人回头一看，居然是寇森（的样子）

国王的人马
国王的人马作者: (美)华伦
出版社: 湖南人民出版社
译者: 陶洁
出版年: 1986-11
页数: 680
定价: 3.80
装帧: 平装
统一书号: 10109-2063
豆瓣评分
8.1
16人评价
5星37.5%
4星31.3%
3星31.3%
2星0.0%
1星0.0%
评价:     
  写笔记 写书评 加入购书单
分享到   
推荐

内容简介  · · · · · ·
罗伯特·佩恩·沃伦，当代美国的一大文豪，“继福克纳之后最杰出的南方小说家”。《国王的人马》是他的代表作，曾获普利策奖，并被搬上银幕。作者声称无意创作政治小说，但是因其对美国社会种种不公正现象的无情揭露，对美国腐败政治的有力抨击，《国王的人马》仍然成为一部寓意深远的政治小说和能够准确反映当时美国现实的社会小说，对于我们正在进行的反腐倡廉活动有着积极的借鉴作用。

小说以20世纪30年代美国路易斯安那州的州长休伊·斯的生平为基础，描写主人公威利。斯塔克，一个原本默默无闻的农家子弟，依靠自己的勤奋努力，怀着改革政治，造福于民的美好愿望，一步步走上州长的位子。但此后却大搞独裁政治，拉帮结派，党同伐异，在贪污腐败的泥坑里越陷越深，最后遭到一个医生莫名其妙的枪杀……

作者简介  · · · · · ·
罗伯特·佩恩·沃伦（Robort Penn Warren ，1905—）美国作家，文艺批评家。生于肯塔基州的格思里。先后就读于范得比特大学，加州大学伯克利分校和那鲁大学，获文学硕士学位。读书期间，他结识了美国南方重农学派的成员，在他们的影响下走上文学创作道路。毕业后，他曾在那鲁大学等多所大学执教。从1935年起，他和其他人共同创办了《南方评论》杂志，吸引了一批文人，形成了现代美国最重要的文艺批评流派——新批评派。1973年起，被聘为美国国会图书馆名誉教授、诗歌顾问。1986年，被选为美国第一位桂冠诗人。沃伦是以诗歌开始自己的文学创作生涯的。早期的诗集有《诗三十六首》（1935）、《同一主题的诗十一首》（1942）和《诗选，1923—1943》（1944）。《龙的兄弟》（1953，1979年修订）写杰弗逊的侄子于十九世纪初期在肯塔基州边疆谋杀黑人的事件，对恶的本性等问题进行了探讨。《许诺》（1957）集中的诗歌比喻主动、描写优美，洋溢着作者故乡的泥土芳香，于1958年获普利策诗歌奖。另外还有《此时与彼时》（1978）、《在这儿》（1980）和《证实了的传言》等诗作。沃伦的长篇小说主要有《夜间的骑手》（1939），《在天堂的大门口》（1943）、《国王的人马》（1946）和《足够的空间与时间》（1950），五十年代后的著作育《一群天使》（1955）、《山洞》（1959）、《荒野》（1961）、《洪水》（1964）和《将要失去的地方》等。沃伦还是美国20世纪的一位重要的文艺批评家。他是美国盛行一时的“新批评派”的主力，和著名文艺批评家克·布鲁克斯合著的《理解诗歌》（1938）是新批评派理论的力作。另外，还著有《理解小说》（1943）、《向西奥多·德莱塞致敬》（1971）和《民主与诗歌》（1975）等论著。

 */

let CookieJDs = [
  '',//账号一ck,例:pt_key=XXX;pt_pin=XXX;
  '',//账号二ck,例:pt_key=XXX;pt_pin=XXX;如有更多,依次类推
]

if (process.env.JD_COOKIE) {
  if (process.env.JD_COOKIE.indexOf('&') > -1) {
    console.log(`您的cookie选择的是用&隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('&');
  } else if (process.env.JD_COOKIE.indexOf('\n') > -1) {
    console.log(`您的cookie选择的是用换行隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('\n');
  } else {
    CookieJDs = [process.env.JD_COOKIE];
  }
}
if (JSON.stringify(process.env).indexOf('GITHUB')>-1) {
  console.log(`请勿使用github action运行此脚本,无论你是从你自己的私库还是其他哪里拉取的源代码，都会导致我被封号\n`);
  !(async () => {
    await require('./sendNotify').sendNotify('提醒', `请勿使用github action、滥用github资源会封我仓库以及账号`)
    await process.exit(0);
  })()
}
CookieJDs = [...new Set(CookieJDs.filter(item => item !== "" && item !== null && item !== undefined))]
console.log(`\n====================共有${CookieJDs.length}个京东账号Cookie=========\n`);
console.log(`==================脚本执行- 北京时间(UTC+8)：${new Date(new Date().getTime() + new Date().getTimezoneOffset()*60*1000 + 8*60*60*1000).toLocaleString()}=====================\n`)
for (let i = 0; i < CookieJDs.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['CookieJD' + index] = CookieJDs[i].trim();
}