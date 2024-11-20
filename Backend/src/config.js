module.exports = {
    app: {
        port: process.env.SERVER_PORT || 4000,
    },
    keys_auth: {
        jwt: process.env.JWT_SECRET_HEY,
    },
    path: {
        root: process.env.PATH_ROOT,
        articles: process.env.PATH_ROOT + process.env.PATH_DATA_ART ,
        user: process.env.PATH_ROOT + process.env.PATH_DATA_USER
    }
}
