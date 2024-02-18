import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, PutCommand, GetCommand } from '@aws-sdk/lib-dynamodb';

const client = new DynamoDBClient({});
const ddbDocClient = DynamoDBDocumentClient.from(client);


export class PrayerTimesModel {
    tableName = "icna_newfoundland"; //load this from env

    constructor() {
        this.prayerTimes = {
            fajr: "5:30",
            dhuhr: "12:30",
            asr: "15:30",
            maghrib: "18:30",
            isha: "20:30",
        };
    }

    async getPrayerTimes() {
        const command = new GetCommand({
            TableName: this.tableName, 
            Key: {
                id: "prayerTimes"
            }
        });
        return await ddbDocClient.send(command);
    }

    saveToDB(prayerTimes) {
        const command = new PutCommand({
            TableName: this.tableName, 
            Item: {
                id: "landingPage",
                prayerTimes // Update only the prayerTime subdocument
                
            }
        });
        return ddbDocClient.send(command);
    }
}

