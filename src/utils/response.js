exports.respMessage = {
    SUCCESS: 'Success',
    BAD_REQ: 'Bad Request',
    ISE: 'Internal Server Error',
    NF: 'Not Found'
}
// message, status = 200, data = null
exports.RESPONSE = ({ status, message, data }) => {

    if (!status) status = 200;
    if (!message) message = module.exports.respMessage.SUCCESS
    return ({ status, message, data })
}

exports.ISE_RESPONSE = () => {
    return ({ status: 500, message: module.exports.respMessage.ISE })
}