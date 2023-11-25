<template>
    <div class="theme-container">
        <d-header></d-header>

        <SplitMask v-if="showMask" @hiddenMask="showMask = false" />
        <Home v-if="$page.frontmatter.home" @showMask="showMask = true" />

        <Wrapper v-else>
            <List />
        </Wrapper>
    </div>
</template>

<script>
import SplitMask from '../components/DSplitFullMask.vue'
import Home from '../components/DHome.vue'
import Wrapper from '../components/DWrapper.vue'
import List from '../components/DList.vue'

export default {
    name: 'Layout',
    components: {
        SplitMask,
        Home,
        Wrapper,
        List,
    },

    data() {
        return {
            showMask: false,
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
            const fontSize = width / 120 + 'px'
            html.style.fontSize = fontSize
        }
        setFont()

        window.onresize = function () {
            setFont()
        }
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>
.theme-container {
    height: 100%;
    color: #2c3e50;
}
</style>