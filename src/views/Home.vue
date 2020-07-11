<template>
    <div class="home">
        <el-card>
            <section class="introduce">
                <p class="words">
                    <span class="name">迪丽热巴</span
                    >，1992年6月3日出生于乌鲁木齐，中国内地女演员、歌手，毕业于上海戏剧学院。
                    2010年，参加由陆川导演的电影《王的盛宴》“虞姬”上海站海选进入娱乐圈。2011年，参演电视剧《阿娜尔罕》正式走红。2016年，凭借电影《傲娇与偏见》获得2016中英电影节最佳新人奖；同年荣获2016中国泛娱乐指数盛典微博新势力女艺人奖。2017年1月，主演都市爱情喜剧《漂亮的李慧珍》，同月，主演古装仙侠剧《三生三世十里桃花》播出，并凭借该剧提名上海电视节“白玉兰奖”最佳女配角；2月14日，官方宣布迪丽热巴加盟《奔跑吧》；8月14日，参演电视剧《秦时丽人明月心》在浙江卫视首播。2018年7月22日，其加盟的明星舞蹈真人秀《新舞林大会》在东方卫视播出。10月11日，金鹰节官方宣布迪丽热巴成为2018年的“金鹰女神”。10月14日，获得第12届中国金鹰电视艺术节观众喜爱的女演员奖和最具人气女演员奖。2019年3月2日，加盟综艺节目《创造营2019》担任男团发起人。
                    <a
                        href="https://baike.so.com/doc/2156196-2281474.html"
                        target="_blank"
                        >完整资料</a
                    >
                </p>
                <img
                    src="http://d.ifengimg.com/mw978_mh598/p0.ifengimg.com/cmpp/2017/08/14/09/c9c00a99-c514-4404-9687-388f70ebe947_size1088_w895_h1181.jpg"
                    alt="照片"
                />
            </section>
        </el-card>
        <section class="wapper">
            <section class="items-wapper">
                <el-alert show-icon :closable="false" title="最新上传" />
                <el-card>
                    <section class="items">
                        <EntranceItem
                            v-for="(item, index) in items"
                            :key="index"
                            v-bind="item"
                        />
                    </section>
                </el-card>
                <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="query.page"
                    :page-sizes="[100, 200, 300, 400]"
                    :page-size="query.size"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="query.total"
                >
                </el-pagination>
            </section>
            <section class="rank-wapper">
                <el-alert show-icon :closable="false" title="排行榜"></el-alert>
                <el-card>
                    <div
                        v-for="(item, index) in ranklist"
                        :key="index + 100"
                        class="rank_item"
                        @mouseover="imgPreview($event, item.cover)"
                        @mouseleave="showPreview = false"
                    >
                        <div class="rank_number">{{ index + 1 }}</div>
                        <span class="title">{{ item.title }}</span>
                    </div>
                    <div class="preview" ref="preview" v-show="showPreview">
                        <img :src="preImg" alt="预览" />
                    </div>
                </el-card>
            </section>
        </section>
    </div>
</template>

<script>
import EntranceItem from 'components/home/EntranceItem';
export default {
    name: 'Home',
    data() {
        return {
            items: [],
            ranklist: [],
            preImg: '', //预览的图片
            query: {
                page: 1,
                size: 20,
                total: 100,
            },
            showPreview: false,
        };
    },
    methods: {
        getItems() {
            const data = [
                {
                    cover:
                        'http://pic1.win4000.com/wallpaper/2020-06-24/5ef3008926c54_270_185.jpg',
                    title: '迪丽热巴甜飒俏丽高清桌面壁纸',
                    type: 'photo',
                    id: 1,
                },
                {
                    cover:
                        'http://pic1.win4000.com/wallpaper/2020-07-03/5efe898db7354_270_185.jpg',
                    title: '迪丽热巴甜飒俏丽高清桌面壁纸',
                    type: 'photo',
                    id: 2,
                },
                {
                    cover:
                        'http://pic1.win4000.com/wallpaper/2020-06-15/5ee7152613b4d_270_185.jpg',
                    title: '迪丽热巴甜飒俏丽高清桌面壁纸',
                    type: 'cartoon',
                    id: 3,
                },
                {
                    cover:
                        'http://pic1.win4000.com/wallpaper/2020-06-08/5edd982d4dbec_270_185.jpg',
                    title: '迪丽热巴甜飒俏丽高清桌面壁纸',
                    type: 'photo',
                    id: 4,
                },
                {
                    cover:
                        'http://pic1.win4000.com/wallpaper/2020-06-24/5ef3008926c54_270_185.jpg',
                    title: '迪丽热巴甜飒俏丽高清桌面壁纸',
                    type: 'cartoon',
                    id: 5,
                },
                {
                    cover:
                        'http://pic1.win4000.com/wallpaper/2020-06-24/5ef3008926c54_270_185.jpg',
                    title: '迪丽热巴甜飒俏丽高清桌面壁纸',
                    type: 'photo',
                    id: 6,
                },
                {
                    cover:
                        'http://pic1.win4000.com/wallpaper/2020-06-24/5ef3008926c54_270_185.jpg',
                    title: '迪丽热巴甜飒俏丽高清桌面壁纸',
                    type: 'cartoon',
                    id: 7,
                },
                {
                    cover:
                        'http://pic1.win4000.com/wallpaper/2020-06-24/5ef3008926c54_270_185.jpg',
                    title: '迪丽热巴甜飒俏丽高清桌面壁纸',
                    type: 'photo',
                    id: 6,
                },
                {
                    cover:
                        'http://pic1.win4000.com/wallpaper/2020-06-24/5ef3008926c54_270_185.jpg',
                    title: '迪丽热巴甜飒俏丽高清桌面壁纸',
                    type: 'cartoon',
                    id: 7,
                },
                {
                    cover:
                        'http://pic1.win4000.com/wallpaper/2020-06-24/5ef3008926c54_270_185.jpg',
                    title: '迪丽热巴甜飒俏丽高清桌面壁纸',
                    type: 'cartoon',
                    id: 7,
                },
            ];

            this.ranklist = this.items = data;
        },
        imgPreview(event, cover) {
            this.preImg = cover;
            this.$refs.preview.style.left = event.pageX + 5 + 'px';
            this.$refs.preview.style.top = event.pageY - 100 + 'px';
            this.showPreview = true;
        },
        handleSizeChange() {},
        handleCurrentChange() {},
    },
    created() {
        this.getItems();
    },
    components: { EntranceItem },
};
</script>
<style scoped lang="less">
.home {
    .el-card {
        background-color: var(--global_bgc);
        color: var(--global_color);
        .introduce {
            width: 80vw;
            margin: 0 auto;
            display: flex;
            .words {
                font-size: 14px;
                // font-size: .95rem;
                text-indent: 2em;
                // color: #666666;
                a {
                    color: var(--global_color);
                }
                .name {
                    font-size: 26px;
                }
            }
            img {
                width: 200px;
                height: 250px;
                margin-left: 10px;
            }
        }
    }
    .wapper {
        display: flex;
        flex-direction: row;
        margin-top: 20px;
    }
    .items-wapper {
        width: 70%;
        .items {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-evenly;
            // display: grid;
            // grid-template-columns: 25% 25% 25% 25%;
            // grid-template-rows: 220px 220px 220px 220px 220px;
        }
    }
    .rank-wapper {
        width: 25%;
        margin-left: 50px;
        /deep/ .el-card {
            overflow: initial;
        }
        font-size: 13px;
        cursor: pointer;
        .rank_item {
            display: flex;
            align-items: center;
            margin-bottom: 10px;

            .rank_number {
                width: 14px;
                height: 14px;
                margin-right: 20px;
                font-size: 11px;
                text-align: center;
                background-color: rgb(200, 200, 200);
            }
        }
        .rank_item:hover {
            .title {
                color: #ff8773;
            }
        }
        .preview {
            img {
                height: 100px;
            }
            position: absolute;
        }
    }
}
</style>
