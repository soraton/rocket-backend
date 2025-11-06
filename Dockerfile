FROM node:18

WORKDIR /usr/src/app

# คัดลอก package.json ก่อนเพื่อติดตั้ง dependencies
COPY package*.json ./

# ติดตั้ง dependencies ทั้งหมด รวม dev dependencies
RUN npm install

# ติดตั้ง tools สำหรับ dev
RUN npm install --save-dev nodemon ts-node typescript

# คัดลอก source code เข้ามา
COPY . .

EXPOSE 3000

# ใช้ npm run dev เพื่อให้ nodemon auto reload ตอน save
CMD ["npm", "run", "dev"]
