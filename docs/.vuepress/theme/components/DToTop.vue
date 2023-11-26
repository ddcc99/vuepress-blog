<template>
    <div class="d-to-top" @click="scrollToTop">
        <i class="fa fa-chevron-up" aria-hidden="true"></i>
    </div>
</template>

<script>
export default {
    name: 'dToTop',

    data() {
        return {
            
        };
    },

    mounted() {

    },

    methods: {
        scrollToTop() {
            document.body.scrollIntoView({behavior: 'smooth'})
        }
    },
};
</script>

<style lang="scss" scoped>
.d-to-top {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    right: 3rem;
    bottom: 3rem;
    width: 3.75rem;
    height: 3.75rem;
    border-radius: 50%;
    background: #656565;
    color: #fff;
    font-size: 1.25rem;
    cursor: pointer;
    z-index: 99;
    transition: all .3s;

    &:hover {
        box-shadow: 0 0 1rem .0625rem #cfcfcf;
        transform: translateY(-.3125rem);
    }
}
</style>