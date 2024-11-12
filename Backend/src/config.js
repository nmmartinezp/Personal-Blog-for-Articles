module.exports = {
    app: {
        port: process.env.SERVER_PORT || 4000,
    },
    keys_auth: {
        jwt: process.env.JWT_SECRET_HEY,
    }
}
