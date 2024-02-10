

export const signUpWithUsernamePassword = async (event) => {
    if (event.httpMethod !== 'POST') {
        throw new Error(`loginWithUsernamePassword only accept POST method, you tried: ${event.httpMethod}`);
    }

    const requestBody = JSON.parse(event.body); // Parse the JSON body
    // extract username asn password from the request body
    const username = requestBody.username;
    const password = requestBody.password;

    // add the username and password to dynamoDB

    const response = {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*", // set this from environment variable
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: "Sign-up successful",
          requestBody
          // Include any other data you want to return here
        }),
      };
      
      return response;
}