function OK(body = {}){
    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': '*'
        },
        body: JSON.stringify(body)
    }
}

function BAD_REQUEST(body = {}){
    return {
        statusCode: 400,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': '*'
        },
        body: JSON.stringify(body)
    }
}

module.exports = {
    OK,
    BAD_REQUEST
}