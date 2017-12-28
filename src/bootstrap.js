
window._ = require('lodash')

window.qs = require('qs')

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
  	window.$ = window.jQuery = require('jquery');

  	require('bootstrap'); 

	
  	require('bootstrap/dist/css/bootstrap.min.css');  	

  	require('./assets/gentelella/vendors/nprogress/nprogress.css');
  	require('./assets/gentelella/vendors/iCheck/skins/flat/green.css');
  	require('./assets/gentelella/vendors/bootstrap-progressbar/css/bootstrap-progressbar-3.3.4.min.css');
  	require('./assets/gentelella/vendors/jqvmap/dist/jqvmap.min.css');
  	require('./assets/gentelella/vendors/bootstrap-daterangepicker/daterangepicker.css');
	require('./assets/gentelella/build/css/custom.min.css');

	
	require('./assets/gentelella/vendors/fastclick/lib/fastclick.js');
	require('./assets/gentelella/vendors/nprogress/nprogress.js');
	require('./assets/gentelella/vendors/Chart.js/dist/Chart.min.js');
	require('./assets/gentelella/vendors/gauge.js/dist/gauge.min.js');
	require('./assets/gentelella/vendors/bootstrap-progressbar/bootstrap-progressbar.min.js');
	require('./assets/gentelella/vendors/iCheck/icheck.js');
	require('./assets/gentelella/vendors/skycons/skycons.js');
	require('./assets/gentelella/vendors/Flot/jquery.flot.js');
	require('./assets/gentelella/vendors/Flot/jquery.flot.pie.js');
	require('./assets/gentelella/vendors/Flot/jquery.flot.time.js');
	require('./assets/gentelella/vendors/Flot/jquery.flot.stack.js');
	require('./assets/gentelella/vendors/Flot/jquery.flot.resize.js');
	require('./assets/gentelella/vendors/flot.orderbars/js/jquery.flot.orderBars.js');
	require('./assets/gentelella/vendors/flot-spline/js/jquery.flot.spline.min.js');
	require('./assets/gentelella/vendors/flot.curvedlines/curvedLines.js');
	require('datejs');

	require('./assets/gentelella/vendors/jqvmap/dist/jquery.vmap.js');
	require('./assets/gentelella/vendors/jqvmap/dist/maps/jquery.vmap.world.js');
	require('./assets/gentelella/vendors/jqvmap/examples/js/jquery.vmap.sampledata.js');
	window.moment = require('moment');
	require('./assets/gentelella/vendors/bootstrap-daterangepicker/daterangepicker.js');
	//require('./assets/gentelella/build/js/custom.js');	

	
} catch (e) {
	console.log(e)
}

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios')

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

let token = document.head.querySelector('meta[name="csrf-token"]')

if (token) {
  window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content
} else {
  console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token')
}

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
