const { tokenFromLoginWithUsernameAndPassword } = require("../auth/auth");

const API = process.env.API;

describe('Events API tests', () => {

    // get events
    test('Check recent events fetch', async () => {
        let data;
        let status;
        await fetch(API + '/event/getRecentEvents')
            .then(response => {
                status = response.status;
                return response.json()
            })
            .then(json_data => {
                data = json_data;
            });

        // Check status
        expect(status).toBe(200);
        expect(data.length).toBe(5);

        // Check each event
        data.forEach(event => {
            expect(event).toHaveProperty('id');
            expect(typeof event.id).toBe('number');

            expect(event).toHaveProperty('eventDateTime');
            expect(typeof event.eventDateTime).toBe('string');
            expect(event.eventDateTime.length).toBeGreaterThan(0);

            expect(event).toHaveProperty('eventName');
            expect(typeof event.eventName).toBe('string');
            expect(event.eventName.length).toBeGreaterThan(0);

            expect(event).toHaveProperty('eventDescription');
            expect(typeof event.eventDescription).toBe('string');
            expect(event.eventDescription.length).toBeGreaterThan(0);

            expect(event).toHaveProperty('createdBy');
            expect(typeof event.createdBy).toBe('string');
            expect(event.createdBy.length).toBeGreaterThan(0);

            expect(event).toHaveProperty('createdOn');
            expect(typeof event.createdOn).toBe('string');
            expect(event.createdOn.length).toBeGreaterThan(0);
        });
    });

    // get 25 events from a given id
    test('Check 25 events from given id', async () => {
        let data;
        let status;
        await fetch(API + '/event/get25Events', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                startId: 1
            })

        })
        .then(response => {
            status = response.status;
            return response.json()
        })
        .then(json_data => {
            data = json_data;
        });

        // Check status
        expect(status).toBe(200);
        expect(data.length).toBeLessThanOrEqual(25);

        // Check each event
        data.forEach(event => {
            expect(event).toHaveProperty('id');
            expect(typeof event.id).toBe('number');

            expect(event).toHaveProperty('eventDateTime');
            expect(typeof event.eventDateTime).toBe('string');
            expect(event.eventDateTime.length).toBeGreaterThan(0);

            expect(event).toHaveProperty('eventName');
            expect(typeof event.eventName).toBe('string');
            expect(event.eventName.length).toBeGreaterThan(0);

            expect(event).toHaveProperty('eventDescription');
            expect(typeof event.eventDescription).toBe('string');
            expect(event.eventDescription.length).toBeGreaterThan(0);

            expect(event).toHaveProperty('createdBy');
            expect(typeof event.createdBy).toBe('string');
            expect(event.createdBy.length).toBeGreaterThan(0);

            expect(event).toHaveProperty('createdOn');
            expect(typeof event.createdOn).toBe('string');
            expect(event.createdOn.length).toBeGreaterThan(0);
        });
    });

    test('Check event creation without token', async () => {
        let data, status;
        await fetch(API + '/event/addEvent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "eventDateTime": "2024-05-04T14:18:21.274Z",
                "eventName": "test-eventName",
                "eventDescription": "test-eventDescription",
            })
        }).then(response => {
            status = response.status;
            return response.toString();
        }).then(json_data => {
            data = json_data;
        });

        expect(status).toBe(401);
    });

    test('Check event creation with token', async () => {
        const token = await tokenFromLoginWithUsernameAndPassword("admin", "admin");
        expect(typeof token).toBe('string');

        let data, status;
        await fetch(API + '/event/addEvent', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            authorization: ('bearer ' + token)
            },
            body: JSON.stringify({
            "eventDateTime": "2024-05-04T14:18:21.274Z",
            "eventName": "test-eventName",
            "eventDescription": "test-eventDescription",
            })
        }).then(response => {
            status = response.status;
            return response.text(); 
        }).then(body => {
            data = body;
        });

        expect(typeof data).toBe('string');
        expect(status).toBe(200);
    });

    test('Check event creation with missing eventDateTime', async () => {
        throw new Error('Not implemented');
    });

    test('Check event creation with missing eventName', async () => {
        throw new Error('Not implemented');
    });

    test('Check event creation with missing eventDescription', async () => {
        throw new Error('Not implemented');
    });

    test('Check event deletion with token', async () => {
        throw new Error('Not implemented');
    });

    test('Check event deletion without token', async () => {
        throw new Error('Not implemented');
    });

    test('Check event deletion without id', async () => {
        throw new Error('Not implemented');
    });

    test('Check event update with token', async () => {
        throw new Error('Not implemented');
    });

    test('Check event update without token', async () => {
        throw new Error('Not implemented');
    });

    test('Check event update with invalid id', async () => {
        throw new Error('Not implemented');
    });
});