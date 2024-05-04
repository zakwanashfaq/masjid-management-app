
const API = process.env.API;

/**
 * Logins with username and password.
 * Useful for referencing on how to implement login API tests.
 * @param {string} username 
 * @param {string} password 
 */
const loginWithUsernameAndPassword = async (username, password) => {
    return await fetch(API + '/auth/loginWithUsernameAndPassword', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    });
}

/**
 * Token from login with username and password.
 * @param {string} username 
 * @param {string} password 
 * @returns {string} token
 */
const tokenFromLoginWithUsernameAndPassword = async (username, password) => {
    const response = await loginWithUsernameAndPassword(username, password);
    if (response.status !== 200) {
        throw new Error('Login failed');
    }
    const json = await response.json();
    if (!json.token) {
        throw new Error('Token not found in response');
    }
    const token = json.token;
    if (typeof token !== 'string') {
        throw new Error('Token not found in response');
    }
    return token;
}

module.exports = { loginWithUsernameAndPassword, tokenFromLoginWithUsernameAndPassword };