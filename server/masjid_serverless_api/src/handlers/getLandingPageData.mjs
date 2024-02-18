import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, GetCommand } from '@aws-sdk/lib-dynamodb';

const client = new DynamoDBClient({});
const ddbDocClient = DynamoDBDocumentClient.from(client);

export const handler = async (event) => {
    const params = {
        TableName: 'icna_newfoundland',
        Key: {
            id: 'landingPage'
        }
    };
    let data;
    let statusCode;
    try {
        data = await ddbDocClient.send(new GetCommand(params));
        statusCode = 200;
        console.log(data.Item);
    } catch (error) {
        statusCode = 500;
        data = error;
        console.error(error);
    }

    return {
        headers: {
            "Access-Control-Allow-Origin": "*", // Or the specific origin you want to give access to
            "Access-Control-Allow-Credentials": true,
            "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
            "Access-Control-Allow-Methods": "OPTIONS,GET,PUT,POST,DELETE"
        },
        statusCode,
        body: JSON.stringify(data),
    };
};