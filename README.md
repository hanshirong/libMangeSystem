# libMangeSystem
a system to manage own books
- 前端vue
- 后端express
### 后端搭建过程：
1. `npm install express -generator -g`
2.  `express name `
3. cd name
4. `npm install`
5. `npm start`
6. `npm install nodemoe`
7. 在package.json的scripts里面添加 "dev": "nodemon"
8. 启动`npm run dev`
### 前端搭建过程
1. `vue init webpack name`
2. 根据提示填就好啦
3. cd name
4. 启动`npm run dev`
5. `npm i element-ui -S`
6. 在main.js里面
`import ElementUI from 'element-ui';`
`import 'element-ui/lib/theme-chalk/index.css';`
`Vue.use(ElementUI);`
7. `npm install vuex`
8. 在src里面新建store文件夹里面新建index.js
9. 在main.js里面引入store，并且在vue里面添加store
10. `npm install axios`
11. 在src里面新建api文件夹，里面放index.js
12. 在main.js里面引入Api，并且绑定`Vue.prototype.$api=Api;`
13. 在config文件夹下的index.js里面配置跨域信息
 proxyTable: {
      '/api':{
        target:  'http://localhost:3000',
        changeOrigin:true,
      }
    },
    

