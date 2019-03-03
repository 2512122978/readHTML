import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
// backpage返回页面, backtype返回类型
Vue.prototype.checkLogin = function(backpage, backtype) {
	var SUID = uni.getStorageSync('SUID');
	var SRAND = uni.getStorageSync('SRAND'); //随机码
	var SNAME = uni.getStorageSync('SNAEM');
	var SFACE = uni.getStorageSync('SFACE');
	if (SUID == '' || SRAND == '' || SFACE == '') {
		uni.redirectTo({
			url: "../login/login?backpage=" + backpage + "&backtype=" + backtype
		});
		return false;
	}
	return [SUID, SRAND, SNAME, SFACE];
}
var APITOKEN = 'api2018'
// Vue.prototype.apiServer = 'http://10.0.0.203/index.php?token='+APITOKEN+'&c='

Vue.prototype.apiServer = 'http://127.0.03/index.php?token='+APITOKEN+'&c='
// Vue.prototype.staticServer = 'http://stevenliu.320.io/'
App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
