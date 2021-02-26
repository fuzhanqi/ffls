const express = require('express');
const pool = require("./pool.js");
const bodyParser = require("body-parser");
//加载md5模块
const md5 = require("md5");
const { Console } = require("console");

let port = 5050; // 新浪云中的NodeJS只支持5050端口
let server = express();

server.listen(port, ()=>{
    console.log('Server is Listening:', port);
});
// server.use(express.static('static'));
server.use(bodyParser.urlencoded({ extended: false }));
// 获取所有的商品分类
server.get("/category", (req, res) => {
  let sql = "SELECT id,category_name FROM hotel_category ORDER BY id";
  pool.query(sql, (err, results) => {
    if (err) {
      throw err;
    }
    res.set('Access-Control-Allow-Origin', "*");
    res.send({ code: 200, message: "查询成功", results: results });
  });
});
// 获取指定的文章
server.get("/articles", (req, res) => {
  //获取地址栏的url参数
  let id = req.query.id;
  // 设置分页开始
  let page = req.query.page;
  let pagesize = 6;
  let offset = (page - 1) * pagesize;
  // 设置分页结束
  let sql_1 =
    "SELECT COUNT(id) AS count FROM hotel_commodity WHERE category_id=?";
  //声明变量，用于存储总记录数
  let rowcount;
  pool.query(sql_1, [id], (err, results) => {
    if (err) throw err;
    rowcount = results[0].count;
    ////////////////////////////////////////////////////
    //计算总页数
    let pagecount = Math.ceil(rowcount / pagesize);
    //获取数据
    let sql =
      "SELECT id,subject,image,price FROM hotel_commodity WHERE category_id=? LIMIT ?,?";
    pool.query(sql, [id, offset, pagesize], (err, results) => {
      if (err) {
        throw err;
      }
      res.set('Access-Control-Allow-Origin', "*");
      res.send({
        code: 200,
        message: "查询成功",
        results: results,
        pagecount: pagecount,
      });
    });
    ///////////////////////////////////////////////////
  });
});
//获取指定文章的详细信息
server.get("/review", (req, res) => {
  let id = req.query.id;
  // 查询特定记录的SQL语句
  let sql = "SELECT id,subject,content,image FROM hotel_commodity WHERE id=?";
  pool.query(sql, [id], (err, results) => {
    if (err) {
      throw err;
    }
    res.set('Access-Control-Allow-Origin', "*");
    res.send({ code: 200, message: "查询成功", result: results[0] });
  });
});
//新闻
server.get("/news", (req, res) => {
  page = req.query.page - 1;
  pagesize = 1 * req.query.pagesize;
  pages = page * pagesize;
  let sql =
    "SELECT id,subject,created_at,intro,image,content FROM  hotel_news ORDER BY id LIMIT ?,? ";
  pool.query(sql, [pages, pagesize], (error, results) => {
    if (error) throw error;
    res.set('Access-Control-Allow-Origin', "*");
    res.send({ code: 200, message: "查询成功", results: results });
  });
});
//新闻
server.get("/news_details", (req, res) => {
  let id = req.query.id;
  let sql =
    "SELECT subject,created_at,intro,image,content FROM  hotel_news  WHERE id=?";
  pool.query(sql, [id], (error, results) => {
    if (error) throw error;
    res.set('Access-Control-Allow-Origin', "*");
    res.send({ code: 200, message: "查询成功", results: results });
  });
});
//店面信息
server.get("/type", (req, res) => {
  let sql = "SELECT type_name,id FROM hotel_type ORDER BY id";
  pool.query(sql, (err, results) => {
    if (err) throw err;
    res.set('Access-Control-Allow-Origin', "*");
    res.send(results);
  });
});
//店面信息
server.get("/shop", (req, res) => {
  let cid = req.query.cid;
  // console.log(req.query)
  // console.log(cid);
  let sql =
    "SELECT id,subject,image,characteristic,business,parking,address,label FROM hotel_storefront WHERE category_id=?";
  pool.query(sql, [cid], (err, results) => {
    if (err) throw err;
    res.set('Access-Control-Allow-Origin', "*");
    // console.log(results);
    res.send({ results });
  });
});
// 获取关于我们的所有信息;
server.get("/abouts", (req, res) => {
  let sql =
    "SELECT id,branch,phone,email,postcode,address,image FROM hotel_about";
  pool.query(sql, (error, results) => {
    if (error) throw error;
    res.set('Access-Control-Allow-Origin', "*");
    res.send({ code: 200, message: "查询成功", results: results });
  });
});
// 获取首页的新闻资讯的标题和时间
server.get("/newss", (req, res) => {
  let sql =
    "SELECT id,subject,created_at FROM hotel_news ORDER BY created_at DESC LIMIT 8";
  pool.query(sql, (error, results) => {
    if (error) throw error;
    res.set('Access-Control-Allow-Origin', "*");
    res.send({ code: 200, message: "查询成功", results: results });
  });
});
//获取注册信息
server.post("/resgiter", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  let phone = req.body.phone;
  let email = req.body.email;
  let sql = "SELECT COUNT(id) AS count FROM hotel_resgiter WHERE username=?";
  // 执行sql查询
  pool.query(sql, [username], (error, results) => {
    if (error) throw error;
    if (results[0].count) {
      res.set('Access-Control-Allow-Origin', "*");
      res.send({ code: 201, message: "用户注册失败" });
    } else {
      sql =
        "INSERT INTO hotel_resgiter(username,password,phone,email) VALUES(?,MD5(?),?,?)";
      //
      pool.query(sql, [username, password, phone, email], (error, results) => {
        if (error) throw error;
        res.set('Access-Control-Allow-Origin', "*");
        res.send({ code: 200, message: "注册成功" });
      });
    }
  });
});
//登录
server.post("/login", (req, res) => {
  // 获取用户名和密码信息
  let username = req.body.username;
  let password = md5(req.body.password);
  // SQL查询
  let sql =
    "SELECT id,username FROM hotel_resgiter WHERE username=? AND password=?";
  // 执行SQL
  pool.query(sql, [username, password], (error, results) => {
    if (error) throw error;
    if (results.length) {
      res.set('Access-Control-Allow-Origin', "*");
      res.send({ code: 200, message: "登录成功", info: results[0] });
    } else {
      res.set('Access-Control-Allow-Origin', "*");
      res.send({ code: 201, message: "登录失败" });
    }
  });
});

// 监视端口号
// server.listen(5050);