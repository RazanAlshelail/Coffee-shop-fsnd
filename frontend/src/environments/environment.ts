/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: 'http://127.0.0.1:5000', // the running FLASK api server url
  auth0: {
    url: 'razan-fsnd.us',
    audience: 'drink api',
    clientId: 'bcl9HNRR0bKq1Z2ClF0SZF5ovzDyFNnP',
    callbackURL: 'http://localhost:8100/login-result', // the base url of the running ionic application. 
  }
};
