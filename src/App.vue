<template>
    <el-container class="home" id="app">
        <el-header>
            <section class="header">
                <div class="left">
                    <img src="~assets/img/favicon.svg" alt="热巴壁纸" />
                    <h4>热巴壁纸</h4>
                </div>
                <nav class="nav">
                    <router-link to="/home" tag="span">首页</router-link>
                    <router-link to="/photo" tag="span">照片</router-link>
                    <router-link to="/cartoon" tag="span">手绘</router-link>
                </nav>
                <div class="right" @mouseover="showBox" @mouseleave="hidBox">
                    <div class="login_wapper">
                        游客身份|<span class="login_btn">登录</span>
                    </div>
                    <div class="avator"></div>
                    <transition name="show"
                        ><div
                            class="user_box"
                            v-show="isshowBox"
                            @mouseleave="hidBox"
                        >
                            <div class="triangle"></div>
                            <div>
                                <i class="el-icon-user-solid"></i
                                ><span>个人信息</span>
                            </div>
                            <div>
                                <i class="el-icon-star-on"></i
                                ><span>我的收藏</span>
                            </div>
                            <div>
                                <i class="el-icon-upload"></i
                                ><span>我的投稿</span>
                            </div>
                        </div></transition
                    >
                </div>
            </section>
        </el-header>
        <el-main>
            <router-view></router-view>
        </el-main>
        <el-footer>
            <div class="desc">
                <p>
                    本网站提供的壁纸来自网络手机和网友投稿（暂时还没有上线），如果侵犯了您的版权请来信告知
                </p>
                <p>
                    热巴壁纸网站的建立处于我个人的想法，想要做一个保存热巴壁纸的网站，主要用于为爱丽丝提供热巴的壁纸的收集和下载功能
                </p>
            </div>
            <div class="copyright">
                <span>Copyright by: ltt</span
                ><span
                    ><a href="https://github.com/Galileo01/reba_wallpaper"
                        >github</a
                    ></span
                >
                <span
                    ><a
                        href="https://github.com/Galileo01/reba_wallpaper/issues/1"
                        >联系我</a
                    ></span
                >
            </div>
        </el-footer>
        <DarkMode prebgc="rgb(246, 246, 246)" />
    </el-container>
</template>

<script>
import DarkMode from 'components/com/DarkMode';
export default {
    name: 'app',
    data() {
        return {
            isshowBox: false,
            showTimmer: null,
        };
    },
    methods: {
        hidBox() {
            //延迟 消失
            this.showTimmer = setTimeout(() => {
                this.isshowBox = false;
                clearTimeout(this.showTimmer);
                this.showTimmer = null;
                this.isshowBox = false;
            }, 200);
        },
        showBox() {
            if (this.showTimmer) {
                //如果还在 延时 的计时之内 ,先清楚延时器
                clearTimeout(this.showTimmer);
                this.showTimmer = null;
            }
            this.isshowBox = true;
        },
    },
    components: { DarkMode },
};
</script>

<style scoped lang="less">
@import url(./assets/css/base.css);
#app {
    height: 100%;

    /deep/ .el-header {
        padding: 0;
        .header {
            // min-width:
            padding: 0 20px;
            display: flex;
            align-items: center;
            background-image: -webkit-linear-gradient(left, #2afadf, #4c83ff);
            color: #fff;
            .left {
                width: 10%;
                min-width: 150px;
                display: flex;
                align-items: center;
                h4 {
                    margin-left: 10px;
                }
            }
            .nav {
                width: 70%;
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
            .right {
                width: 20%;
                min-width: 150px;
                cursor: pointer;
                .login_btn {
                    margin-left: 5px;
                }
                .login_btn:hover {
                    color: rgb(238, 89, 101);
                }
                .user_box {
                    width: 100px;
                    height: 80px;
                    padding: 5px;
                    // border-top: solid 10px red;
                    color: #000000;
                    font-size: 12px;
                    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
                    text-align: center;
                    position: absolute;
                    top: 50px;
                    background-color: #fff;

                    div {
                        margin-top: 10px;
                        i {
                            margin-right: 10px;
                        }
                    }
                    .triangle {
                        height: 0;
                        width: 0;

                        border: 10px solid;
                        border-top-color: transparent;
                        border-left-color: transparent;
                        border-right-color: transparent;
                        border-bottom-color: #ffffff;
                        position: absolute;

                        top: -30px;
                    }
                }
                /* transition 组件的 过渡样式*/
                .show-enter-active,
                .show-leave-active {
                    transition: opacity 0.5s;
                }
                .show-enter, .show-leave-to /* .show-leave-active below version 2.1.8 */ {
                    opacity: 0;
                }
            }
        }
    }
    .el-main {
        overflow: inherit;
    }
    .el-footer {
        width: 80%;
        margin: 0 auto 5px auto;
        border-top: solid 1px rgb(210, 210, 215);
        text-align: center;
        font-size: 11px;
        color: #86868b;

        .desc {
        }
        .copyright {
            width: 300px;
            margin: 0 auto 10px auto;
            display: flex;
            justify-content: space-between;
            a {
                color: #86868b;
            }
        }
    }
}
</style>
