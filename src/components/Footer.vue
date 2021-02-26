<template>
  <div>
    <div id="footer">
      <div class="footer-wrap">
        <p class="footer-tit">友情链接</p>
        <div id="footer-col">
          <el-row :gutter="0" id="el-row">
            <el-col :sm="12" :md="8" :lg="4" v-for="(v, i) of 6" :key="i">
              <div class="grid-content bg-purple">
                <a href>
                  <img
                    src="/img/assets/image/carouls/footer1.png"
                    class="image"
                    alt
                  />
                </a>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="copyright">
          <p>CopyRight©2020 All rigt rederved</p>
          <p>版权所有：XXX牛排有限公司</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
#footer.grid-content .bg-purple {
  text-align: center;
}
#footer {
  background-color: #533336;
  border: 1px solid #533336;
  margin-top: 30px;
}
#footer .image {
  text-align: center;
  margin: 0 40px 0 50px;
  width: 50%;
}
div.footer-wrap {
  margin-top: 48px;
  border-top: 2px solid #fff;
}
.footer-tit {
  display: block;
  width: 300px;
  height: 49.6px;
  color: #fff;
  background-color: #533336;
  text-align: center;
  font-size: 30px;
  line-height: 50px;
  margin: -25px auto 30px auto;
  border: 2px solid #fff;
}
#footer-col {
  margin: 60px 220px 0 220px;
}
div.el-col.el-col-4 {
  text-align: center;
}
.copyright {
  margin-top: 70px;
  text-align: center;
  color: #999;
  font-size: 16px;
  line-height: 26px;
  margin-bottom: 40px;
}
</style>
