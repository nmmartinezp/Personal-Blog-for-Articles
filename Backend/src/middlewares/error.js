const boom = require('@hapi/boom');
const { error } = require('./response');

exports.errors = function (err, req, res, next){
    const message = err.message;
    const errors409 = [
        "Error trying to get",
        "Error trying to add",
        "Error trying to update",
        "Error trying to delete",
        "not found"
    ];
    const errors401 = [
        "Token not provided",
        "Invalid token format",
        "Invalid data"
    ];
    const errors403 = [
        "Invalid or expired"
    ];
    const errors400 = [
        "We had an error trying to compare"
    ];

    const error = null;

    if(errors409.some(err => message.includes(err))){
        error = boom.conflict(err.message);
    }else if(errors401.some(err => message.includes(err))){
        error = boom.unauthorized(err.message);
    }else if(errors403.some(err => message.includes(err))){
        error = boom.forbidden(err.message);
    }else if(errors400.some(err => message.includes(err))){
        error = boom.badRequest(err.message);
    }else{
        error = boom.internal(err.message);
    }

    next(error);
}

exports.response = function (err, req, res, next){
    error(req, res, err, err.output.statusCode);
}
