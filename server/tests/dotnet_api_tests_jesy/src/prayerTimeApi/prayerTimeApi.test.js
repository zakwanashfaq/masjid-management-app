
const API = process.env.API;

describe('Prayer Time API tests', () => {

    // get prayer time for today
    test('Check prayer time keys and values', async () => {
        let data;
        let status;
        await fetch('https://k80pnjbrb8.execute-api.us-east-1.amazonaws.com/Prod/landingPageData')
            .then(response => {
                status = response.status;
                return response.json()
            })
            .then(json_data => {
                data = json_data.Item;
            });

        // Check status
        expect(status).toBe(200);

        // Check id
        expect(data).toHaveProperty('id');
        expect(typeof data.id).toBe('string');
        expect(data.id.length).toBeGreaterThan(0);

        // Check prayerTimes
        expect(data).toHaveProperty('prayerTimes');

        // Check each prayer time
        ['asr', 'fajr', 'isha', 'maghrib', 'zuhr'].forEach(prayer => {
            expect(data.prayerTimes).toHaveProperty(prayer);
            expect(data.prayerTimes[prayer]).toHaveProperty('specific_time_value');
            expect(data.prayerTimes[prayer]).toHaveProperty('delay_in_minutes_value');
            expect(data.prayerTimes[prayer]).toHaveProperty('is_specific_time_active');
            expect(data.prayerTimes[prayer]).toHaveProperty('is_delay_in_minutes_active');
            expect(data.prayerTimes[prayer]).toHaveProperty('no_change');
            expect(typeof data.prayerTimes[prayer].delay_in_minutes_value).toBe('number');
            expect(typeof data.prayerTimes[prayer].specific_time_value).toBe('string');
            expect(typeof data.prayerTimes[prayer].is_delay_in_minutes_active).toBe('boolean');
            expect(typeof data.prayerTimes[prayer].is_specific_time_active).toBe('boolean');
            expect(typeof data.prayerTimes[prayer].no_change).toBe('boolean');
        });
    });
});