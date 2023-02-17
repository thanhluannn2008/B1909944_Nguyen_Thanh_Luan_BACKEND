class ApiError extends Error{
    constructor (statusCode, message){
        super();
        this.statusCode = statusCode;
        this.massage = message;
    }
}

module.exports = ApiError;