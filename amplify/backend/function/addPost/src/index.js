/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
 
const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

const params = {
  TableName : 'Post',
  /* Item properties will depend on your application concerns */
  Item: {
     id: 3,
     postMsg: 'third lambda'
  }
}

exports.handler = async (event) => {
  try {
    await docClient.put(params).promise();
    return { body: 'Successfully created item!' }
  } catch (err) {
    
    return { error: err }
  }
};
