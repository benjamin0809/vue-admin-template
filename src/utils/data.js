const demouser = {
  userid: 123,
  username: 'benjamin',
  address: 'lon',
  category: 'category',
  desc: 'good'
}
export function getNewslist() {
  const list = []
  const article = {}
  article.content = `<p><strong>央视网消息：</strong>&ldquo;早上6点02分和6点05分，C2581和C2002次动车组分别从北京南站和天津站发出。&rdquo;这个画面出现在8月8日的《新闻联播》里有着特别的意义。</p>
  <p>8月8日，京津城际铁路实施新的列车运行图，复兴号以350公里时速&ldquo;开跑&rdquo;，从北京南站至天津站之间列车运行时间压缩至30分钟，提速却保持票价不变，这进一步增强了同城效应，助推京津冀一体化发展。</p>
  <p>作为中国首条设计时速350公里的高速铁路，2008年8月1日京津城际开通运营，它标志着中国正式跨入高铁时代，如今它已&ldquo;奔跑&rdquo;了整整10年。</p>
  <p>10年间，京津城际铁路发送旅客2.5亿人次，相当于将北京、天津全部常住人口3600万人运送了3个来回。</p>
  <p>10年间，中国高铁迅猛发展，已经建成&ldquo;四纵四横&rdquo;运营网络，&ldquo;八纵八横&rdquo;规划也在逐步完善。</p>
  <p>2018年5月28日，习近平总书记在两院院士大会讲话中强调：&ldquo;复兴号高速列车迈出从追赶到领跑的关键一步。&rdquo;中国高铁不仅代表着&ldquo;中国速度&rdquo;，更续写着我国高质量发展的新篇章，然而，它的意义并不仅限于此。</p>
  <p>&ldquo;高铁是我国装备制造的一张亮丽的名片。&rdquo;党的十八大以来，习近平主席出访的足迹遍及六个大洲，谈的最多的合作项目之一就是高铁。身为&ldquo;中国故事第一讲解人&rdquo;，他称赞中国高铁是&ldquo;走出去&rdquo;&ldquo;一带一路&rdquo;建设方面的&ldquo;抢手货&rdquo;：&ldquo;高铁动车体现了中国装备制造业水平。&rdquo;</p>
  <p class="text_span1_blue"><strong>走进中国，多国政要访华感受中国速度</strong></p>
  <p>京津城际铁路开通运营以来，党和国家领导人曾多次考察，对建设和运营成果给予充分肯定。外国政要到访中国，乘坐京津城际，感受中国速度已成为&ldquo;必备&rdquo;项目。</p>
  <p>就在这个夏天，中国今年第二场重大主场外交活动&mdash;&mdash;&ldquo;上海合作组织成员国元首理事会第十八次会议&rdquo;在青岛举办的前一天，习近平同俄罗斯总统普京共同乘坐高铁从北京前往天津，出席中俄友好交流活动。</p>
  <p>从央视独家V观视频的同期声中，可以清楚地听到习近平向普京介绍高铁的时速、规划等情况。普京表示坐火车有种浪漫的感觉，习近平在交谈中，回应称：&ldquo;是的，实际上我现在很喜欢坐火车，火车还是比较舒适一点，再有它机动性比较强一点。&rdquo;</p>
  <p>视频中有一个小细节引起海内外网友注意，当习近平指着电子屏幕说，&ldquo;咱们现在开始跑到300（公里）啦&rdquo;的时候，画面聚焦到普京面前的茶杯上，在300公里时速下仍纹丝未动，这个&ldquo;魔术&rdquo;一样的事实，源自中国高铁技术的轨下基础产品，它打破了外国技术壁垒，具有我国完全自主知识产权，是中国高铁走出去的主要技术支撑之一。</p>
  <p>据中国铁路总公司官网介绍，10年来，先后有65个国家300余名政要，各类国际组织200余批次、5000多人考察体验了京津城际铁路。</p>
  <p>德国总理默克尔早在2012年8月31日，就曾乘坐京津城际高铁从北京前往天津，对于来自高铁技术大国的默克尔来说，中国的高铁之旅让她感受到了中国的快速发展。</p>
  <div class="img_wrapper"><img src="http://n.sinaimg.cn/kandian/crawl/83/w550h333/20180811/reWn-hhnunsr2330103.jpg" alt="" width="500" /></div>
  <p>2014年12月23日，泰国总理巴育访华期间参观了全国铁路调度指挥中心，并体验了京津城际列车。当列车时速达到306公里时，中方陪同人员邀请巴育看显示屏。&ldquo;丝毫没有感觉，以为还挺慢，结果已经很快了。&rdquo;巴育说，&ldquo;我喜欢很快的速度。&rdquo;</p>
  <div class="img_wrapper"><img src="http://n.sinaimg.cn/kandian/crawl/157/w544h413/20180811/b-N1-hhnunsr2330513.jpg" alt="斯里兰卡总统及夫人（图片来自：国际在线）" data-mcesrc="http://n.sinaimg.cn/kandian/crawl/157/w544h413/20180811/b-N1-hhnunsr2330513.jpg" data-mceselected="1" data-link="" /><span class="img_descr">斯里兰卡总统及夫人（图片来自：国际在线）</span></div>
  <p>&ldquo;我是在习近平主席的建议下选择乘坐高铁的。&rdquo;2015年3月28日，刚参加完博鳌亚洲论坛年会开幕式的斯里兰卡总统西里塞纳乘坐高铁前往三亚。在途中他赞扬中国的高铁高速、舒适。&ldquo;中国和斯里兰卡的铁路发展状况差别较大，很高兴亲自体验了中国高铁。&rdquo;他说。</p>
  <p>不知何时起，&ldquo;高铁一通转换时空。火车一响黄金万两。&rdquo;的说法开始流行，这是高铁效应的总结。中国高铁在中国发展不过短短十年时间，却给中国带来天翻地覆的变化。&ldquo;同城效应&rdquo;&ldquo;小时生活圈&rdquo;&ldquo;发展带&rdquo;相继形成，让高铁在真正意义上拉近了我们的生活圈。</p>
  <p>发展不止，创新不停。未来3年内，我国智能高铁将实现新的推进，2019年智能型&ldquo;复兴号&rdquo;动车组将率先在京张高铁投入运行；2020年，京雄城际铁路将建成通车。</p>
  <p class="text_span1_blue"><strong>走出国门，&ldquo;中国名片&rdquo;助力&ldquo;一带一路&rdquo;朋友圈</strong></p>
  <p>外国政要感受中国高铁速度激情的同时，也拉近了国与国之间的时空距离。</p>
  <p>跟随习近平主席出访的足迹，不难发现谈的最多的合作项目之一就是高铁，他也曾多次在不同国际场合，亲自介绍中国高铁的发展情况，给多国政要留下深刻印象。</p>
  <p>近年来，随着自身技术水平提高和领导人的不断推介，中国高铁&ldquo;走出去&rdquo;战略逐步实施。</p>
  <div class="img_wrapper"><img src="http://n.sinaimg.cn/kandian/crawl/147/w550h397/20180811/COqy-hhnunsr2330752.jpg" alt="2018年7月24日，习近平和拉马福萨共同参观中南科技创新合作成果图片展。（图片来自：新华网）" data-mcesrc="http://n.sinaimg.cn/kandian/crawl/147/w550h397/20180811/COqy-hhnunsr2330752.jpg" data-mceselected="1" data-link="" /><span class="img_descr">2018年7月24日，习近平和拉马福萨共同参观中南科技创新合作成果图片展。（图片来自：新华网）</span></div>
  <p>就在今年7月24日下午，习近平对南非共和国进行国事访问时，同拉马福萨总统一起参观了中南科技创新合作成果图片展。走到反映中国科技成果的展板前，习近平主席向拉马福萨总统介绍说：&ldquo;中国高铁总里程已经达到2.5万公里，占全世界的2/3。&rdquo;拉马福萨总统连连赞叹</p>
  <div class="img_wrapper"><img src="http://n.sinaimg.cn/kandian/crawl/123/w550h373/20180811/6Btl-hhnunsr2330788.jpg" alt="2017年6月8日，习近平邀请纳扎尔巴耶夫体验高铁模拟驾驶。（图片来自：新华网）" data-mcesrc="http://n.sinaimg.cn/kandian/crawl/123/w550h373/20180811/6Btl-hhnunsr2330788.jpg" data-mceselected="1" data-link="" /><span class="img_descr">2017年6月8日，习近平邀请纳扎尔巴耶夫体验高铁模拟驾驶。（图片来自：新华网）</span></div>
  <p>2017年6月8日，习近平访问哈萨克斯坦，在参观阿斯塔纳专项世博会中国国家馆时，他邀请纳扎尔巴耶夫总统&ldquo;开高铁&rdquo;，试驾了展厅内的中国高铁体验舱。当屏幕上的中国G2017高铁列车从古丝绸之路起点西安出发，经过兰州、乌鲁木齐、阿拉山口，一路飞驰到阿斯塔纳时，全场响起热烈的掌声。</p>
  <p>蒙内铁路开通时，肯尼亚总统肯雅塔说：&ldquo;122年来，肯尼亚人民有了新的铁路，我们将掀开新的一章，书写未来100年肯尼亚的历史。&rdquo;</p>
  <p>随着&ldquo;一带一路&rdquo;建设的推进，越来越多的铁路在沿线各国建设，中国铁路在美洲、非洲、亚洲、中东等地区落地生根。促进国家之间互联互通的同时，也让更多地区之间打破隔阂和冲突，更加紧密地联系在一起。</p>
  <p>目前，中国高铁已经拿下多个世界之&ldquo;最&rdquo;：成为世界上高铁里程最长、运输密度最高、成网运营场景最复杂的国家。据统计，中国高铁已累计运输旅客83亿人次，完成旅客周转量2.74万亿人公里。</p>
  <p>中国铁路承载着希望，给世界越来越多改变和惊喜的同时，也正在改变世界，让世界变得更美好。中国需要高铁，世界更需要高铁。中国高铁走出国门后，将给越来越多的国家带去高铁红利。（文/田宏）</p>`
  article.title = '"原标题：这张“中国名片”，习近平多次展示给外国政要"'
  article.publishtime = '2018-08-11 13:34:28'
  article.editor = 'liu mr sam'
  article.tags = ['super', 'energe']
  article.id = '669998846513'
  article.status = 1
  article.istop = true
  list.push(article)
  return list
}

export function getNewslistByCount(length) {
  const article = getNewslist()[0]
  const list = []
  for (let i = 0; i < length; i++) {
    const newarticle = JSON.parse(JSON.stringify(article))
    newarticle.id += i
    newarticle.title += i
    newarticle.type = getArticleSubCol()[Math.floor(Math.random() * 10 + 1) % 4].name
    newarticle.status = getArticleStatus()[Math.floor(Math.random() * 10 + 1) % 3].value
    newarticle.istop = Math.floor(Math.random() * 10 + 1) % 2 === 1
    list.push(newarticle)
  }
  return list
}
export function getNewsById(id) {
  const list = getNewslist()
  for (const item of list) {
    if (item.id === '669998846513') {
      return item
    }
  }
  return null
}
export function getArticleCol() {
  const list = [
    { id: '0', name: 'all', value: '' },
    { id: '1', name: 'news', value: 'news' },
    { id: '2', name: 'notice', value: 'notice' },
    { id: '3', name: 'life', value: 'life' },
    { id: '4', name: 'events', value: 'events' }]
  return list
}

export function getArticleSubCol() {
  return getArticleCol().filter(item => item.value)
}

export function getArticleStatus() {
  const list = [
    { id: '0', name: 'publish', value: 9 },
    { id: '1', name: 'invalid', value: -1 },
    { id: '2', name: 'edit', value: 0 }]
  return list
}

export function getUser(length) {
  const list = []
  for (let i = 0; i < length; i++) {
    const newdemouser = JSON.parse(JSON.stringify(demouser))
    newdemouser.userid += i
    newdemouser.username += i
    newdemouser.address += i
    list.push(newdemouser)
  }
  return list
}

