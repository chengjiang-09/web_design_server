import redis from "redis"

const getredisconnection = () => {
    let RDS_PORT = 6379
    let RDS_HOST = '127.0.0.1'

    let connection = redis.createClient(RDS_PORT, RDS_HOST)
    return connection
}

export default {
    getredisconnection
}