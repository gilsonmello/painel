window.enviroment = "local";
window.apiDomain = (window.enviroment == "production") ? "http://pi.mirandafitness.com.br" : "http://localhost:8000";
window.url = (window.enviroment == "production") ? "http://www.painel.mirandafitness.com.br" : "http://localhost:8080";

function getParamsUrl() {
    var s1 = location.search.substring(1, location.search.length).split('&'),
        r = {}, s2, i;
    for (i = 0; i < s1.length; i += 1) {
        s2 = s1[i].split('=');
        r[decodeURIComponent(s2[0]).toLowerCase()] = decodeURIComponent(s2[1]);
    }
    return r;
};

window.QueryString = getParamsUrl();

window.getCookie = function(name){
	var cookies = window.document.cookie;
	var prefix = name + "=";
    var begin = cookies.indexOf("; " + prefix);
	if (begin == -1) {
 		begin = cookies.indexOf(prefix);
        if (begin != 0) {
            return null;
        }

    } else {
        begin += 2;
    }
    var end = cookies.indexOf(";", begin);
    if (end == -1) {
        end = cookies.length;
    }
    return unescape(cookies.substring(begin + prefix.length, end));
};

window.deleteCookie = function(name) {
   	if (getCookie(name)) {
      	document.cookie = name + "=" + "; expires=Thu, 01-Jan-70 00:00:01 GMT";
      	return true;
   	}
   	return false;
}

const params = (QueryString.access_token) ? QueryString.access_token : null;

export const authUser = window.localStorage.getItem('authUser') == "" ? null : JSON.parse(window.localStorage.getItem('authUser'));

if(authUser == null && params == null) {
	alert('Acesse a área do cliente clique em Painel');
	window.location.href = window.apiDomain;
	throw new Error("Something went badly wrong!");
}else if(QueryString.access_token){
  window.localStorage.removeItem('authUser');
	window.localStorage.setItem('access_token', QueryString.access_token);
	window.history.pushState({url: "/"}, '', '/#/');
}

window._ = require('lodash')

window.qs = require('qs')

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
	//window.localStorage.setItem('authUser', JSON.stringify({name: 'adlksjf'}));
  	window.$ = window.jQuery = require('jquery');

  	require('bootstrap');

	require('jquery.inputmask/dist/jquery.inputmask.bundle.js');
    //require('bootstrap-datepicker');
    window.toastr = require('toastr');
    require('toastr/build/toastr.min.css');

  	require('bootstrap/dist/css/bootstrap.min.css');

  	require('gentelella/vendors/nprogress/nprogress.css');
  	require('gentelella/vendors/animate.css/animate.min.css');
  	require('gentelella/vendors/iCheck/skins/flat/green.css');
  	require('gentelella/vendors/bootstrap-progressbar/css/bootstrap-progressbar-3.3.4.min.css');
  	require('gentelella/vendors/jqvmap/dist/jqvmap.min.css');
  	require('gentelella/vendors/bootstrap-daterangepicker/daterangepicker.css');
	require('gentelella/build/css/custom.min.css');


	require('gentelella/vendors/fastclick/lib/fastclick.js');
	require('gentelella/vendors/nprogress/nprogress.js');
	require('gentelella/vendors/Chart.js/dist/Chart.min.js');
	require('gentelella/vendors/gauge.js/dist/gauge.min.js');
	require('gentelella/vendors/bootstrap-progressbar/bootstrap-progressbar.min.js');
	require('gentelella/vendors/iCheck/icheck.js');
	require('gentelella/vendors/skycons/skycons.js');
	require('gentelella/vendors/Flot/jquery.flot.js');
	require('gentelella/vendors/Flot/jquery.flot.pie.js');
	require('gentelella/vendors/Flot/jquery.flot.time.js');
	require('gentelella/vendors/Flot/jquery.flot.stack.js');
	require('gentelella/vendors/Flot/jquery.flot.resize.js');
	require('gentelella/vendors/flot.orderbars/js/jquery.flot.orderBars.js');
	require('gentelella/vendors/flot-spline/js/jquery.flot.spline.min.js');
	require('gentelella/vendors/flot.curvedlines/curvedLines.js');
	require('datejs');

	require('gentelella/vendors/jqvmap/dist/jquery.vmap.js');
	require('gentelella/vendors/jqvmap/dist/maps/jquery.vmap.world.js');
	require('gentelella/vendors/jqvmap/examples/js/jquery.vmap.sampledata.js');
	window.moment = require('moment');
	require('gentelella/vendors/bootstrap-daterangepicker/daterangepicker.js');
	//require('gentelella/build/js/custom.js');


} catch (e) {
	console.log(e)
}


/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios')

window.axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest'
};

export var tokenData = window.localStorage.getItem('access_token') == null ? JSON.parse(window.localStorage.getItem('authUser')).access_token : window.localStorage.getItem('access_token');
export var access_token = (tokenData != null) ? tokenData : null;

window.addEventListener('storage',function(e){
    if((event.key == "authUser" && e.newValue == null) || e.storageArea.length == 0){
        tokenData = "";
        access_token = "";
        window.location.href = window.apiDomain;
    }
});


/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo'

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: 'your-pusher-key'
// });
