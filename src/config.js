export const apiDomain = 'http://localhost:8000'
export const loginUrl = apiDomain+'/oauth/token'
export const userUrl = apiDomain+'/api/user'

export const getHeader = function () {
  	const tokenData = window.getCookie("access_token");
  	var token = tokenData != null ? tokenData : null;	
 	const headers = {
	    'Accept': 'application/json',
	    'Authorization': 'Bearer ' + token
  	}
  	return headers
}

export const rt = {
	users: {
		create: apiDomain+'/users',
		edit: apiDomain+'/{id}/user',
		logged: apiDomain+'/users/logged'
	}
};
