// Initialize the Amazon Cognito credentials provider
AWS.config.region = 'zzz'; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'xxxx',
});