<template>
    <el-container class="home">
        <el-header>
            <section class="header">
                <div class="left">
                    <img src="~assets/img/favicon.svg" alt="热巴壁纸" />
                    <h4>热巴壁纸</h4>
                </div>
                <nav class="nav">
                    <router-link to="./home" tag="span">首页</router-link>
                    <router-link to="./home/photo" tag="span">照片</router-link>
                    <router-link to="./home/cartoon" tag="span"
                        >手绘</router-link
                    >
                </nav>
            </section>
        </el-header>
        <el-main></el-main>
        <el-footer></el-footer>
    </el-container>
</template>

<script>
// @ is an alias to /src
export default {
    name: 'Home',
    components: {},
};
</script>
<style scoped lang="less">
.home {
    /deep/ .el-header {
        padding: 0;
        .header {
            padding: 0 20px;
            display: flex;

            align-items: center;
            // background-image: url(http://static.win4000.com/home/images/tit_bg.jpg);

            .left {
                display: flex;
                align-items: center;
                h4 {
                    margin-left: 10px;
                }
            }
            .nav {
                margin-left: 30px;
                display: flex;
                span {
                    display: block;
                    width: 50px;
                    cursor: pointer;
                }
                span:hover {
                    text-decoration: underline;
                    color: rgb(238, 89, 101);
                }
                span::after {
                    content: '|';
                    margin-left: 5px;
                }
            }
        }
    }
}
</style>
