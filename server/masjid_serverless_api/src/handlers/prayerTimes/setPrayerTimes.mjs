import { PrayerTimesModel } from "../../models/prayerTimesModel.mjs";

export const handler = async (event) => {
    const body = JSON.parse(event.body);  // Parse the body to get the JSON object
    const prayerTimes = body.prayerTimes;
    console.log("Prayer Times", prayerTimes);
    const prayerTimesModel = new PrayerTimesModel();
    try {
        await prayerTimesModel.saveToDB(prayerTimes);  // Assuming saveToDB is an async function
        console.log("Prayer times saved successfully");
        return {
            statusCode: 200,
            body: JSON.stringify('Hello from Lambda!'),
        };
    } catch (err) {
        console.log("Error", err);
        return {
            statusCode: 500,
            error: JSON.stringify('Error saving prayer times'),
        };
    }
};