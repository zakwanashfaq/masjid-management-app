/**
 * 
 */

import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, PutCommand } from '@aws-sdk/lib-dynamodb';
const client = new DynamoDBClient({});
const ddbDocClient = DynamoDBDocumentClient.from(client);
import { v4 as uuidv4 } from 'uuid';
// Get the DynamoDB table name from environment variables
const tableName = "icna_newfoundland"; //process.env.SAMPLE_TABLE;

export const loginWithUsernamePassword = async (event, context, callback) => {
  if (event.httpMethod !== 'POST') {
    throw new Error(`loginWithUsernamePassword only accept POST method, you tried: ${event.httpMethod}`);
  }

  const requestBody = JSON.parse(event.body);
  // extract username asn password from the request body
  const username = requestBody.username;
  const password = requestBody.password;

  // fetch the username and password from dynamoDB
  // if valid, return a JWT token
  // if not valid, return an error message
  let data;
  try {
    const command = new PutCommand({
      TableName: tableName,
      Item: {
        id: uuidv4(),
        username: username,
        password: password 
      }
    });
    data = await ddbDocClient.send(command);
  } catch (err) {
    console.log("Error", err);
  }

  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*", // set this from environment variable
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      message: "Login successful",
      data,
      event
      // Include any other data you want to return here
    }),
  };

  callback(null, response);
}