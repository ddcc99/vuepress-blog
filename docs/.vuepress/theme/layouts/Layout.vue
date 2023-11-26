<template>
    <div class="theme-container">
        <!-- 头部 -->
        <d-header></d-header>

        <!-- 主页遮罩 -->
        <SplitMask v-if="showMask" @hiddenMask="showMask = false" />

        <!-- 主页 -->
        <Home v-if="$page.frontmatter.home" @showMask="showMask = true" />

        <Wrapper v-else :isFold="isFold">
            <!-- 列表页 -->
            <List v-if="$page.frontmatter.list" />
            
            <!-- 文章页 -->
            <Article v-else />
        </Wrapper>

        <Catalogue :isFold="isFold" v-if="$page.path.endsWith('html')" @toggleFold="toggleFold" />

        <ToTop />
    </div>
</template>

<script>
import SplitMask from '../components/DSplitFullMask.vue'
import Home from '../components/DHome.vue'
import Wrapper from '../components/DWrapper.vue'
import List from '../components/DList.vue'
import Article from '../components/DArticle.vue'
import ToTop from '../components/DToTop.vue'
import Catalogue from '../components/DCatalogue.vue';

export default {
    name: 'Layout',
    components: {
        SplitMask,
        Home,
        Wrapper,
        List,
        Article,
        ToTop,
        Catalogue,
    },

    data() {
        return {
            showMask: false,
            isFold: true,
        };
    },

    mounted() {
        const setFont = () => {
            const html = document.querySelector('html')
            let width = html.clientWidth
            if (width < 1024) {
                width = 1024
            }
            if (width > 1920) {
                width = 1920
            }

            this.remValue = width / 120
            
            const fontSize = this.remValue + 'px'
            html.style.fontSize = fontSize
            console.log(this.remValue)
        }
        setFont()

        window.onresize = function () {
            setFont()
        }

        this.isFold = !~~localStorage.getItem('is-fold')
    },

    methods: {
        toggleFold() {
            this.isFold = !!~~localStorage.getItem('is-fold')
            localStorage.setItem('is-fold', ~~!this.isFold)
        }
    },
};
</script>

<style lang="scss" scoped>
.theme-container {
    height: 100%;
    color: #2c3e50;
}
</style>