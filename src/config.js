import {access_token} from './bootstrap'

export const loginUrl = window.apiDomain+'/oauth/token';

export const userUrl = window.apiDomain+'/api/user';

export const getHeader = function () {
  	const headers = {
	    'Accept': 'application/json',
	    'Authorization': 'Bearer ' + access_token
  	}
  	return headers
}
export const rt = {
	users: {
		create: window.apiDomain+'/users',
		update: window.apiDomain+'/painel/profiles/{id}',
		logged: window.apiDomain+'/users/logged',
		logout: window.apiDomain+'/users/logout'
	}
};
