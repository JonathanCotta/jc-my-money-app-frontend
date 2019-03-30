const config = {
    development: {
        api: 'http://localhost:3003/api',
        oapi: 'http://localhost:3003/oapi',
    },
    production: {
        api: 'https://jc-my-money-backend.herokuapp.com/api',
        oapi: 'https://jc-my-money-backend.herokuapp.com/oapi',
    }
}

export default config[process.env.NODE_ENV];