const { loginWithUsernameAndPassword } = require("./auth");


const API = process.env.API;


describe('Authentotaction tests', () => {
    // checks login with wrong username and password
    test('Check login API with wrong credentials', async () => {
        const response = await loginWithUsernameAndPassword("fdbfbdfb", "fdbdfbfdbdf");
        expect(response.status).toBe(401);
    });

    // checks login with right username and wrong password
    test('Check login API with wrong credentials', async () => {
        const response = await loginWithUsernameAndPassword("admin", "fdbdfbfdbdf");
        expect(response.status).toBe(401);
    });

    // checks login with correct username and password
    test('Check login API with right credentials', async () => {
        const response = await loginWithUsernameAndPassword("admin", "admin");
        expect(response.status).toBe(200);
    });

    // check login with missing username in body
    test('Check login API with missing username', async () => {
        const response = await fetch(API + '/auth/loginWithUsernameAndPassword', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                password: "admin"
            })
        });
        expect(response.status).toBe(400);
    });

    // check login with missing password in body
    test('Check login API with missing password', async () => {
        const response = await fetch(API + '/auth/loginWithUsernameAndPassword', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: "admin"
            })
        });
        expect(response.status).toBe(400);
    });
});