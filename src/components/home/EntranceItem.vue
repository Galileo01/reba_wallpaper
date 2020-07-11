<template>
    <div class="entrance_item">
        <div class="cover_wapper"><img :src="cover" alt="封面" /></div>
        <div class="desc">
            <p>{{ title }}</p>
            <p>类型:{{ typeText(type) }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'EntranceItem',
    props: {
        cover: {
            type: String,
            required: true,
            default:
                'http://pic1.win4000.com/wallpaper/2020-07-03/5efe898db7354_270_185.jpg',
        },
        type: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
    },
    methods: {
        typeText(type) {
            const types = {
                photo: '照片',
                cartoon: '手绘',
            };
            return types[type];
        },
    },
};
</script>

<style scoped lang="less">
.entrance_item {
    // width: 200px;
    width: 22%;
    min-width: 200px;
    margin: 10px;
    height: 200px;
    // box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
    font-size: 13px;
    text-align: center;
    cursor: pointer;
    .cover_wapper {
        width: 200px;
        margin: 0 auto;
        overflow: hidden;
        img {
            width: 100%;
        }
    }
    .cover_wapper:hover img {
        transform: scale(1.5);
    }
    .desc p:nth-child(2) {
        font-size: 11px;
    }
}
.entrance_item:hover {
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
}
</style>
