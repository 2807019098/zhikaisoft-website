# 第一阶段：构建阶段
FROM node:18-alpine AS builder

WORKDIR /app
# 安装 pnpm
RUN npm install -g pnpm
# 复制依赖声明文件
COPY package.json pnpm-lock.yaml ./
# 安装所有依赖（包括开发依赖）
RUN pnpm install
# 复制项目所有文件
COPY . .

# 运行 Next.js 构建
RUN pnpm build

# 第二阶段：生产运行阶段
FROM node:18-alpine

WORKDIR /app
# 安装 pnpm
RUN npm install -g pnpm
# 复制依赖声明文件
COPY package.json pnpm-lock.yaml ./
# 安装生产依赖
RUN pnpm install --production

# 复制构建产物和静态资源
COPY --from=builder /app/.next .next
COPY --from=builder /app/public public
COPY --from=builder /app/next.config.ts ./

# 安装 ts-node 以支持运行时加载 TS 配置
RUN pnpm add ts-node

# 暴露端口
EXPOSE 5000

# 启动 Next.js 生产服务器
CMD ["pnpm", "start"]