<template>
    <div class="wapper">
        <el-tooltip
            :content="'切换' + nextModeTExt"
            :effect="mode === 'white' ? 'light' : 'dark'"
        >
            <div
                class="darkmode"
                :class="{
                    right: position === 'right',
                    left: position === 'left',
                }"
                :style="{
                    top,
                    'background-image': icons[mode],
                }"
                @click="modeSwitch"
            ></div>
        </el-tooltip>
    </div>
</template>

<script>
export default {
    name: 'DarkMode',
    props: {
        top: {
            type: String,
            default: '200px',
        },
        position: {
            type: String,
            default: 'right',
        },
        prebgc: {
            type: String,
            default: '#fff',
        },
        darkbgc: {
            type: String,
            default: '#38444c',
        },
    },
    data() {
        return {
            icons: {
                white: `url(${require('../../assets/img/white_skin.svg')})`,
                black: `url(${require('../../assets/img/black_skin.svg')})`,
            },
            mode: 'white',
        };
    },
    computed: {
        modeText() {
            return this.mode === 'white' ? '浅色' : '深色';
        },
        nextModeTExt() {
            return this.mode === 'white' ? '深色' : '浅色';
        },
    },
    methods: {
        //点击触发 模式切换
        modeSwitch() {
            if (this.mode === 'white') {
                this.mode = 'black';
                document.documentElement.style.setProperty(
                    '--global_bgc',
                    this.darkbgc
                );
                document.documentElement.style.setProperty(
                    '--global_color',
                    '#fff'
                );
            } else {
                this.mode = 'white';
                document.documentElement.style.setProperty(
                    '--global_bgc',
                    this.prebgc
                );
                document.documentElement.style.setProperty(
                    '--global_color',
                    '#000000'
                );
            }
        },
        //进入页面自动识别系统
        autoSwitch() {
            const colorSchemeQuery = matchMedia('(prefers-color-scheme: dark)');
            // 进入页面,判断 浏览器是否支持 媒体查询'(prefers-color-scheme: dark)'
            if (colorSchemeQuery.media === '(prefers-color-scheme: dark)') {
                if (colorSchemeQuery.matches) {
                    this.$nextTick(() => {
                        this.modeSwitch();
                        this.$message.success('跟随系统 切换到深色模式');
                    });
                }
            } else {
                console.log('当前浏览器不支持跟随系统暗黑模式');
            }
        },
    },
    created() {
        this.autoSwitch();
    },
};
</script>

<style scoped lang="less">
.darkmode {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: fixed;
    background-color: #fff;
    z-index: 6;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
    border: solid 1px rgb(210, 210, 215);
    cursor: pointer;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    transition: all ease-in-out 0.5s;
}

.darkmode.right {
    right: 8px;
    margin-right: -29px;
}
.darkmode.left {
    left: 0;
    margin-left: -25px;
}
.darkmode:hover {
    margin: 0px;
}
</style>
