/**
 * This lambda authorizer function is used to authenticate the user and generate a policy for the user.
 * It is trigerred when a user tries to access a protected resource.
 */


xports.handler = async (event) => {
    const token = event.authorizationToken;
    // Decoding the token
    const decodedToken = decodeToken(token);
    const principalId = 'user|a1b2c3';

    // You can send a 401 Unauthorized response to the client by failing like so:
    // throw new Error('Unauthorized');

    // If the token is valid, a policy must be generated which will allow or deny access to the client
    const policyDocument = {
        Version: '2012-10-17', // default version
        Statement: [{
            Action: 'execute-api:Invoke', // default action
            Effect: 'Allow', // 'Allow' or 'Deny'
            Resource: event.methodArn, // default resource
        }]
    };

    // Finally, build the policy
    const authResponse = {};
    authResponse.principalId = principalId;
    authResponse.policyDocument = policyDocument;

    // Pass the decoded token to the next function
    authResponse.decodedToken = decodedToken;

    return authResponse;
};

function decodeToken(token) {
    // Validate the decoded token and produce the principal user identifier associated with the token
    // This could be accomplished in a number of ways:
    // 1. Call out to OAuth provider
    // 2. Lookup in a self-managed DB

    const mockedDecodedToken = {
        username: 'user',
        id: 'a1b2c3',
        roles: ['admin', 'user'],
    };
    return mockedDecodedToken;
}
