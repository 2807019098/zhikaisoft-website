require('dotenv').config();
const Redis = require('ioredis');
const cases = require('../src/mock/cases.json');

const redis = new Redis({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  password: process.env.REDIS_PASSWORD,
});

redis.set('cases', JSON.stringify(cases))
  .then(() => {
    console.log('案例数据写入 Redis 成功');
    process.exit(0);
  })
  .catch(err => {
    console.error('写入 Redis 失败', err);
    process.exit(1);
  }); 