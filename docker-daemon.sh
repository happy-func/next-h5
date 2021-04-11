#! /bin/bash
# 主服务
pm2 start npm -- start
# 使docker常驻
while :;do
sleep 300
done
