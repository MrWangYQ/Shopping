<template>
    <div class="foot-a-box">
        <i :class="icon"></i>
        <p>{{text}}</p>
        <span class="allsum" v-if='num'>{{$store.state.checkProduct.length}}</span>
    </div>
</template>
<script>
    export default {
        props: {
            icon: {
                required: true,
                type: String
            },
            text: {
                required: true,
                type: String
            },
            num: {
                required: true,
                type: Boolean
            }
        }
    }
</script>
<style scoped>
    .foot-a-box {
        position: relative;
    }
    .foot-a-box i{
        font-size: .4rem;
    }
    .allsum {
        width: .4rem;
        height: .4rem;
        line-height: .4rem;
        text-align: center;
        font-size: .1rem;
        color: #fff;
        background: red;
        border-radius: 50%;
        position: absolute;
        right: 0.1rem;
        top: 0rem;
    }
</style>