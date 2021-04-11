#! /bin/bash
# 主服务
pm2 start pm2.config.js --env NODE_ENV=production
# 使docker常驻
while :;do
sleep 300
done
