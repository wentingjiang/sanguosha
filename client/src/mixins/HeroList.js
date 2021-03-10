export default {
	data() {
		return {
			heroList: [
				// 标准版
				{ value: '诸葛亮', words: 'zgl', nickName: '' },
				{ value: '刘备', words: 'lb', nickName: '' },
				{ value: '关羽', words: 'gy', nickName: '' },
				{ value: '张飞', words: 'zf', nickName: '' },
				{ value: '赵云', words: 'zy', nickName: '' },
				{ value: '马超', words: 'mc', nickName: '' },
				{ value: '黄月英', words: 'hyy', nickName: '' },
				{ value: '曹操', words: 'cc', nickName: '' },
				{ value: '郭嘉', words: 'gj', nickName: '' },
				{ value: '司马懿', words: 'smy', nickName: '' },
				{ value: '张辽', words: 'zl', nickName: '' },
				{ value: '甄姬', words: 'zj', nickName: '' },
				{ value: '夏侯惇', words: 'xhd', nickName: '' },
				{ value: '许褚', words: 'xc', nickName: '' },
				{ value: '孙权', words: 'sq', nickName: '' },
				{ value: '周瑜', words: 'zy', nickName: '' },
				{ value: '大乔', words: 'dq', nickName: '' },
				{ value: '孙尚香', words: 'ssx', nickName: '' },
				{ value: '黄盖', words: 'hg', nickName: '' },
				{ value: '陆逊', words: 'lx', nickName: '' },
				{ value: '甘宁', words: 'gn', nickName: '' },
				{ value: '吕蒙', words: 'lm', nickName: '' },
				{ value: '吕布', words: 'lb', nickName: '' },
				{ value: '貂蝉', words: 'dc', nickName: '' },
				{ value: '华佗', words: 'ht', nickName: '' },
				{ value: '华雄', words: 'hx', nickName: '' },
				{ value: '袁术', words: 'ys', nickName: '' },
				// 标准版 界限突破
				{ value: '界诸葛亮', words: 'jzgl', nickName: '' },
				{ value: '界刘备', words: 'jlb', nickName: '' },
				{ value: '界关羽', words: 'jgy', nickName: '' },
				{ value: '界张飞', words: 'jzf', nickName: '' },
				{ value: '界赵云', words: 'jzy', nickName: '' },
				{ value: '界马超', words: 'jmc', nickName: '' },
				{ value: '界黄月英', words: 'jhyy', nickName: '' },
				{ value: '界曹操', words: 'jcc', nickName: '' },
				{ value: '界郭嘉', words: 'jgj', nickName: '' },
				{ value: '界司马懿', words: 'jsmy', nickName: '' },
				{ value: '界张辽', words: 'jzl', nickName: '' },
				{ value: '界甄姬', words: 'jzj', nickName: '' },
				{ value: '界夏侯惇', words: 'jxhd', nickName: '' },
				{ value: '界许褚', words: 'jxc', nickName: '' },
				{ value: '界孙权', words: 'jsq', nickName: '' },
				{ value: '界周瑜', words: 'jzy', nickName: '' },
				{ value: '界大乔', words: 'jdq', nickName: '' },
				{ value: '界孙尚香', words: 'jssx', nickName: '' },
				{ value: '界黄盖', words: 'jhg', nickName: '' },
				{ value: '界陆逊', words: 'jlx', nickName: '' },
				{ value: '界甘宁', words: 'jgn', nickName: '' },
				{ value: '界吕蒙', words: 'jlm', nickName: '' },
				{ value: '界吕布', words: 'jlb', nickName: '' },
				{ value: '界貂蝉', words: 'jdc', nickName: '' },
				{ value: '界华佗', words: 'jht', nickName: '' },
				{ value: '界华雄', words: 'jhx', nickName: '' },
				{ value: '界袁术', words: 'jys', nickName: '' },
				{ value: '界伊籍', words: 'jyj', nickName: '' },
				// 神话再临 风
				{ value: '夏侯渊', words: 'xhy', nickName: '' },
				{ value: '小乔', words: 'xq', nickName: '' },
				{ value: '张角', words: 'zj', nickName: '' },
				{ value: '黄忠', words: 'hz', nickName: '' },
				{ value: '魏延', words: 'wy', nickName: '' },
				{ value: '周泰', words: 'zt', nickName: '' },
				{ value: '于吉', words: 'yj', nickName: '' },
				{ value: '曹仁', words: 'cr', nickName: '' },
				// 神话再临 风 界限突破
				{ value: '界夏侯渊', words: 'jxhy', nickName: '' },
				{ value: '界小乔', words: 'jxq', nickName: '' },
				{ value: '界张角', words: 'jzj', nickName: '' },
				{ value: '界黄忠', words: 'jhz', nickName: '' },
				{ value: '界魏延', words: 'jwy', nickName: '' },
				{ value: '界周泰', words: 'jzt', nickName: '' },
				{ value: '界于吉', words: 'jyj', nickName: '' },
				{ value: '界曹仁', words: 'jcr', nickName: '' },
				// 神话再临 火
				{ value: '荀彧', words: 'xy', nickName: '' },
				{ value: '卧龙诸葛', words: 'wlzg', nickName: '' },
				{ value: '典韦', words: 'dw', nickName: '' },
				{ value: '袁绍', words: 'ys', nickName: '' },
				{ value: '太史慈', words: 'tsc', nickName: '' },
				{ value: '庞德', words: 'pd', nickName: '' },
				{ value: '颜良文丑', words: 'ylwc', nickName: '' },
				{ value: '庞统', words: 'pt', nickName: '' },
				// 神话再临 火 界限突破
				{ value: '界荀彧', words: 'jxy', nickName: '' },
				{ value: '界卧龙诸葛', words: 'jwlzg', nickName: '' },
				{ value: '界典韦', words: 'jdw', nickName: '' },
				{ value: '界袁绍', words: 'jys', nickName: '' },
				{ value: '界太史慈', words: 'jtsc', nickName: '' },
				{ value: '界庞德', words: 'jpd', nickName: '' },
				{ value: '界颜良文丑', words: 'jylwc', nickName: '' },
				{ value: '界庞统', words: 'jpt', nickName: '' },
				// 神话再临 林
				{ value: '孙坚', words: 'sj', nickName: '' },
				{ value: '曹丕', words: 'cp', nickName: '' },
				{ value: '贾诩', words: 'jx', nickName: '' },
				{ value: '鲁肃', words: 'ls', nickName: '鲁大师' },
				{ value: '徐晃', words: 'xh', nickName: '' },
				{ value: '祝融', words: 'zr', nickName: '' },
				{ value: '孟获', words: 'mh', nickName: '' },
				{ value: '董卓', words: 'dz', nickName: '' },
				// 神话再临 林 界限突破
				{ value: '界孙坚', words: 'jsj', nickName: '' },
				{ value: '界曹丕', words: 'jcp', nickName: '' },
				{ value: '界贾诩', words: 'jjx', nickName: '' },
				{ value: '界徐晃', words: 'jxh', nickName: '' },
				{ value: '界祝融', words: 'jzr', nickName: '' },
				{ value: '界孟获', words: 'jmh', nickName: '' },
				{ value: '界董卓', words: 'jdz', nickName: '' },
				// 神话再临 山
				{ value: '张郃', words: 'zh', nickName: '' },
				{ value: '邓艾', words: 'da', nickName: '' },
				{ value: '刘禅', words: 'ls', nickName: '' },
				{ value: '左慈', words: 'zc', nickName: '' },
				{ value: '孙策', words: 'sc', nickName: '' },
				{ value: '张昭张纮', words: 'zzzh', nickName: '' },
				{ value: '蔡文姬', words: 'cwj', nickName: '' },
				{ value: '姜维', words: 'jw', nickName: '' },
				// 神话再临 山 界限突破
				{ value: '界张郃', words: 'jzh', nickName: '' },
				{ value: '界邓艾', words: 'jda', nickName: '' },
				{ value: '界刘禅', words: 'jls', nickName: '' },
				{ value: '界左慈', words: 'jzc', nickName: '' },
				{ value: '界孙策', words: 'jsc', nickName: '' },
				{ value: '界张昭张纮', words: 'jzzzh', nickName: '' },
				{ value: '界蔡文姬', words: 'jcwj', nickName: '' },
				{ value: '界姜维', words: 'jjw', nickName: '' },
				// 神话再临 阴
				{ value: '王基', words: 'wj', nickName: '' },
				{ value: '严颜', words: 'yy', nickName: '' },
				{ value: '王平', words: 'wp', nickName: '' },
				{ value: '陆绩', words: 'lj', nickName: '' },
				{ value: '孙亮', words: 'sl', nickName: '' },
				{ value: '蒯良蒯越', words: 'klky', nickName: '' },
				{ value: '许攸', words: 'xy', nickName: 'bb机' },
				{ value: '卢植', words: 'lz', nickName: '' },
				// 神话再临 雷
				{ value: '仲帝袁术', words: 'ys', nickName: '' },
				{ value: '郝昭', words: 'hz', nickName: '' },
				{ value: '陈到', words: 'cd', nickName: '' },
				{ value: '诸葛瞻', words: 'zgz', nickName: '' },
				{ value: '周妃', words: 'zf', nickName: '' },
				{ value: '陆抗', words: 'lk', nickName: '' },
				{ value: '毌丘俭', words: 'gqj', nickName: '' },
				{ value: '张绣', words: 'zx', nickName: '' },
				// 神
				{ value: '神关羽', words: 'sgy', nickName: '' },
				{ value: '神吕蒙', words: 'slm', nickName: '' },
				{ value: '神周瑜', words: 'szy', nickName: '' },
				{ value: '神诸葛亮', words: 'szgl', nickName: '' },
				{ value: '神曹操', words: 'scc', nickName: '' },
				{ value: '神吕布', words: 'slb', nickName: '' },
				{ value: '神赵云', words: 'szy', nickName: '' },
				{ value: '神司马懿', words: 'ssmy', nickName: '' },
				{ value: '神刘备', words: 'slb', nickName: '' },
				{ value: '神陆逊', words: 'slx', nickName: '' },
				{ value: '神甘宁', words: 'sgn', nickName: '' },
				{ value: '神张辽', words: 'szl', nickName: '' },
				// 一将成名
				{ value: '曹植', words: 'cz', nickName: '' },
				{ value: '张春华', words: 'zch', nickName: '春哥' },
				{ value: '于禁', words: 'yj', nickName: '' },
				{ value: '徐庶', words: 'xs', nickName: '' },
				{ value: '马谡', words: 'ms', nickName: '' },
				{ value: '法正', words: 'fz', nickName: '' },
				{ value: '凌统', words: 'lt', nickName: '' },
				{ value: '徐盛', words: 'xs', nickName: '小宝' },
				{ value: '吴国太', words: 'wgt', nickName: '' },
				{ value: '陈宫', words: 'cg', nickName: '' },
				{ value: '高顺', words: 'gs', nickName: '' },
				// 一将成名 界限突破
				{ value: '界曹植', words: 'jcz', nickName: '' },
				{ value: '界于禁', words: 'jyj', nickName: '' },
				{ value: '界法正', words: 'jfz', nickName: '' },
				{ value: '界凌统', words: 'jlt', nickName: '' },
				{ value: '界徐盛', words: 'jxs', nickName: '大宝' },
				{ value: '界吴国太', words: 'jwgt', nickName: '' },
				{ value: '界高顺', words: 'jgs', nickName: '' },
				// 二将成名
				{ value: '荀攸', words: 'xy', nickName: '' },
				{ value: '王异', words: 'wy', nickName: '' },
				{ value: '曹彰', words: 'cz', nickName: '' },
				{ value: '钟会', words: 'zh', nickName: '' },
				{ value: '关兴张苞', words: 'gxzb', nickName: '' },
				{ value: '廖化', words: 'lh', nickName: '' },
				{ value: '马岱', words: 'md', nickName: '' },
				{ value: '步练师', words: 'bls', nickName: '' },
				{ value: '程普', words: 'cp', nickName: '' },
				{ value: '韩当', words: 'hd', nickName: '' },
				{ value: '刘表', words: 'lb', nickName: '' },
				{ value: '公孙瓒', words: 'gsz', nickName: '' },
				// 二将成名 界限突破
				{ value: '界王异', words: 'jwy', nickName: '' },
				{ value: '界钟会', words: 'jzh', nickName: '' },
				{ value: '界关兴张苞', words: 'jgxzb', nickName: '' },
				{ value: '界马岱', words: 'jmd', nickName: '' },
				{ value: '界步练师', words: 'jbls', nickName: '' },
				{ value: '界程普', words: 'jcp', nickName: '' },
				{ value: '界韩当', words: 'jhd', nickName: '' },
				{ value: '界刘表', words: 'jlb', nickName: '' },
				{ value: '界公孙瓒', words: 'jgsz', nickName: '' },
				// 三将成名
				{ value: '曹冲', words: 'cc', nickName: '' },
				{ value: '郭淮', words: 'gh', nickName: '' },
				{ value: '满宠', words: 'mc', nickName: '' },
				{ value: '关平', words: 'gp', nickName: '' },
				{ value: '简雍', words: 'jy', nickName: '' },
				{ value: '刘封', words: 'lf', nickName: '' },
				{ value: '潘璋马忠', words: 'pzmz', nickName: '' },
				{ value: '虞翻', words: 'yf', nickName: '' },
				{ value: '朱然', words: 'zr', nickName: '' },
				{ value: '伏皇后', words: 'fhh', nickName: '' },
				{ value: '李儒', words: 'lr', nickName: '' },
				// 三将成名 界限突破
				{ value: '界朱然', words: 'jzr', nickName: '' },
				// 四将成名
				{ value: '蔡夫人', words: 'cfr', nickName: '' },
				{ value: '曹真', words: 'cz', nickName: '' },
				{ value: '陈群', words: 'cq', nickName: '' },
				{ value: '顾雍', words: 'gy', nickName: '' },
				{ value: '韩浩史涣', words: 'hhsh', nickName: '' },
				{ value: '沮授', words: 'js', nickName: '' },
				{ value: '孙鲁班', words: 'slb', nickName: '' },
				{ value: '吴懿', words: 'wy', nickName: '' },
				{ value: '张松', words: 'zs', nickName: '光头' },
				{ value: '周仓', words: 'zc', nickName: '' },
				{ value: '朱桓', words: 'zh', nickName: '' },
				// 五将成名
				{ value: '曹叡', words: 'cr', nickName: '' },
				{ value: '曹休', words: 'cx', nickName: '' },
				{ value: '钟繇', words: 'zy', nickName: '' },
				{ value: '刘谌', words: 'lc', nickName: '' },
				{ value: '夏侯氏', words: 'xhs', nickName: '' },
				{ value: '张嶷', words: 'zn', nickName: '' },
				{ value: '孙休', words: 'sx', nickName: '' },
				{ value: '朱治', words: 'zz', nickName: '' },
				{ value: '全琮', words: 'qz', nickName: '' },
				{ value: '公孙渊', words: 'gsy', nickName: '' },
				{ value: '郭图逄纪', words: 'gtpj', nickName: '' },
				// 六将成名
				{ value: '郭皇后', words: 'ghh', nickName: '' },
				{ value: '李严', words: 'ly', nickName: '' },
				{ value: '孙登', words: 'sd', nickName: '' },
				{ value: '刘虞', words: 'ly', nickName: '' },
				{ value: '岑昏', words: 'ch', nickName: '' },
				{ value: '孙资刘放', words: 'szlf', nickName: '' },
				{ value: '黄皓', words: 'hh', nickName: '' },
				{ value: '张让', words: 'zr', nickName: '公公' },
				// 七将成名
				{ value: '辛宪英', words: 'xxy', nickName: '' },
				{ value: '吴苋', words: 'wx', nickName: '' },
				{ value: '徐氏', words: 'xs', nickName: '' },
				{ value: '曹节', words: 'cj', nickName: '' },
				{ value: '嵇康', words: 'jk', nickName: '' },
				{ value: '秦宓', words: 'qm', nickName: '' },
				{ value: '薛综', words: 'xz', nickName: '' },
				{ value: '蔡邕', words: 'cy', nickName: '' },
				// 稀有专属
				{ value: '兀突骨', words: 'wtg', nickName: '' },
				{ value: '士燮', words: 'sx', nickName: '' },
				{ value: '灵雎', words: 'lj', nickName: '' },
				{ value: '孙茹', words: 'sr', nickName: '' },
				{ value: '凌操', words: 'lc', nickName: '' },
				{ value: '留赞', words: 'lz', nickName: '歌王' },
				{ value: '朱灵', words: 'zl', nickName: '' },
				{ value: '诸葛果', words: 'zgg', nickName: '' },
				{ value: '曹纯', words: 'cc', nickName: '' },
				{ value: '祢衡', words: 'mh', nickName: '猴子' },
				{ value: '赵统赵广', words: 'ztzg', nickName: '二赵' },
				{ value: '司马昭', words: 'smz', nickName: '' },
				{ value: '星张辽', words: 'xzl', nickName: '' },
				{ value: '星徐晃', words: 'xxh', nickName: '' },
				{ value: '星张郃', words: 'xzh', nickName: '' },
				{ value: '星甘宁', words: 'xgn', nickName: '' },
				{ value: '刘晔', words: 'ly', nickName: '' },
				{ value: '李丰', words: 'lf', nickName: '' },
				{ value: '庞德公', words: 'pdg', nickName: '' },
				{ value: '马钧', words: 'mj', nickName: '' },
				{ value: '王元姬', words: 'wyj', nickName: '' },
				{ value: '胡金定', words: 'hjd', nickName: '' },
				{ value: '郑玄', words: 'zx', nickName: '' },
				{ value: '羊徽瑜', words: 'ywy', nickName: '' },
				// SP
				{ value: '伏完', words: 'fw', nickName: '' },
				{ value: '刘协', words: 'lx', nickName: '' },
				{ value: 'SP孙尚香', words: 'spssx', nickName: '' },
				{ value: 'SP庞德', words: 'sppd', nickName: '' },
				{ value: 'SP关羽', words: 'spgy', nickName: '' },
				{ value: 'SP马超', words: 'spmc', nickName: '' },
				{ value: 'SP赵云', words: 'spzy', nickName: '' },
				{ value: 'SP貂蝉', words: 'spdc', nickName: '' },
				{ value: 'SP贾诩', words: 'spjx', nickName: '' },
				{ value: 'SP曹仁', words: 'spcr', nickName: '' },
				{ value: 'SP蔡文姬', words: 'spcwj', nickName: '' },
				{ value: 'SP姜维', words: 'spjw', nickName: '' },
				{ value: 'SP黄月英', words: 'sphhy', nickName: '' },
				{ value: 'SP庞统', words: 'sppt', nickName: '' },
				{ value: 'SP太史慈', words: 'sptsc', nickName: '' },
				{ value: 'SP徐庶', words: 'spxs', nickName: '' },
				{ value: '曹洪', words: 'ch', nickName: '' },
				{ value: '关银屏', words: 'gyp', nickName: '' },
				{ value: '夏侯霸', words: 'xhb', nickName: '' },
				{ value: '大乔小乔', words: 'dqxq', nickName: '' },
				{ value: '乐进', words: 'yj', nickName: '' },
				{ value: '曹昂', words: 'ca', nickName: '' },
				{ value: '诸葛瑾', words: 'zgj', nickName: '' },
				{ value: '张星彩', words: 'zxc', nickName: '' },
				{ value: '祖茂', words: 'zm', nickName: '' },
				{ value: '丁奉', words: 'df', nickName: '' },
				{ value: '潘凤', words: 'pf', nickName: '' },
				{ value: '马良', words: 'ml', nickName: '' },
				{ value: '诸葛诞', words: 'zgd', nickName: '' },
				{ value: '何太后', words: 'hth', nickName: '' },
				{ value: '孙鲁育', words: 'sly', nickName: '' },
				{ value: '文聘', words: 'wp', nickName: '' },
				{ value: '张鲁', words: 'zl', nickName: '' },
				{ value: '马云騄', words: 'myl', nickName: '' },
				{ value: '蹋顿', words: 'td', nickName: '' },
				{ value: '严白虎', words: 'ybh', nickName: '' },
				{ value: '司马朗', words: 'sml', nickName: '' },
				{ value: '步骘', words: 'bz', nickName: '' },
				{ value: '李通', words: 'lt', nickName: '' },
				{ value: '糜竺', words: 'mz', nickName: '' },
				{ value: '董白', words: 'db', nickName: '' },
				{ value: '贺齐', words: 'hq', nickName: '' },
				{ value: '董允', words: 'dy', nickName: '改日哥' },
				{ value: '马忠', words: 'mz', nickName: '' },
				{ value: '阚泽', words: 'kz', nickName: '' },
				{ value: '麴义', words: 'qy', nickName: '白马' },
				{ value: '戏志才', words: 'xzc', nickName: '戏子' },
				{ value: '孙乾', words: 'sq', nickName: '' },
				{ value: '卑弥呼', words: 'bmh', nickName: '' },
				{ value: '刘琦', words: 'lq', nickName: '' },
				{ value: '鲁芝', words: 'lz', nickName: '鲁二师' },
				{ value: '司马徽', words: 'smh', nickName: '' },
				{ value: '徐荣', words: 'xr', nickName: '' },
				{ value: '李傕', words: 'lj', nickName: '' },
				{ value: '张济', words: 'zj', nickName: '' },
				{ value: '沙摩柯', words: 'smk', nickName: '沙师弟' },
				{ value: '苏飞', words: 'sf', nickName: '' },
				{ value: '樊稠', words: 'fc', nickName: '' },
				{ value: '郭汜', words: 'gs', nickName: '' },
				{ value: '张琪瑛', words: 'zqy', nickName: '白丝' },
				{ value: '杨修', words: 'yx', nickName: '' },
				{ value: '陈琳', words: 'cl', nickName: '' },
				{ value: '诸葛恪', words: 'zgk', nickName: '' },
				{ value: '张宝', words: 'zb', nickName: '' },
				{ value: '程昱', words: 'cy', nickName: '' },
				{ value: '孙皓', words: 'sh', nickName: '' },
				{ value: '关索', words: 'gs', nickName: '' },
				{ value: '王朗', words: 'wl', nickName: '' },
				{ value: '鲍三娘', words: 'bsn', nickName: '' },
				{ value: '曹婴', words: 'cy', nickName: '' },
				{ value: '赵襄', words: 'zx', nickName: '' },
				{ value: '王允', words: 'wy', nickName: '' },
				{ value: '张梁', words: 'zl', nickName: '数学家' },
				{ value: '吕虔', words: 'lq', nickName: '' },
				{ value: '杜畿', words: 'dj', nickName: '' },
				{ value: '张恭', words: 'zg', nickName: '' },
				{ value: '贾逵', words: 'jk', nickName: '通渠哥' },
				{ value: '张翼', words: 'zy', nickName: '' },
				{ value: '吕凯', words: 'lk', nickName: '' },
				{ value: '杨仪', words: 'yy', nickName: '' },
				{ value: '邓芝', words: 'dz', nickName: '' },
				{ value: '许贡', words: 'xg', nickName: '' },
				{ value: '严畯', words: 'yj', nickName: '' },
				{ value: '周鲂', words: 'zf', nickName: '' },
				{ value: '吕岱', words: 'ld', nickName: '' },
				{ value: '潘濬', words: 'pj', nickName: '' },
				{ value: '卫温诸葛直', words: 'wwzgz', nickName: '' },
				{ value: '刘繇', words: 'ly', nickName: '' },
				{ value: '刘焉', words: 'ly', nickName: '' },
				{ value: '董承', words: 'dc', nickName: '' },
				{ value: '审配', words: 'sp', nickName: '' },
				{ value: '丁原', words: 'dy', nickName: '' },
			],
		}
	},
}