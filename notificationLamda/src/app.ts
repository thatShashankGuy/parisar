import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import os from 'os'
/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */

export const lambdaHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {

        const {body} = event
        console.log(event)      
        if (event.httpMethod === 'OPTIONS') {
            return {
                statusCode: 200,
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
                    "Access-Control-Allow-Headers": "Content-Type",  // List of allowed headers
                },
                body: ""
            };
        }
        const response = {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
            },
            body: JSON.stringify({ message: os.hostname + "__PING" ,
                                    body : body }),
        };
    
        return response;
    } catch (err: any) {
        console.log(err.message);
        return {
            statusCode: 500,
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({ message: err.message + "__ERROR"  }),
        };
    }
};
