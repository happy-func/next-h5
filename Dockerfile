FROM node:14.15.1

WORKDIR /app
# 这步必须比复制文件前，如果package.json一样就不会重新安装项目依赖了
COPY package.json yarn.lock /app/
# 安装项目依赖
RUN npm install npm -g \
 && yarn install \
 && yarn global add pm2

# 复制文件(已使用.dockerignore)
COPY . /app

# 构建项目
RUN npm run build

# 暴露端口
EXPOSE 3000

# docker入口文件保证监听不断
CMD ["sh","docker-daemon.sh"]

