<template>
    <div class="d-article">
        <div class="article-info">
            <h1>{{$page.frontmatter.title}}</h1>
            <p class="time-container">
                <i class="fa fa-calendar" aria-hidden="true"></i>
                <span>{{$page.frontmatter.postTime?.substr?.(0, 10)}}</span>
            </p>
            <d-article-info></d-article-info>
        </div>

        <Content />

        <PrevNext />
    </div>
</template>

<script>
import PrevNext from './DPrevNext.vue'

export default {
    name: 'dArticle',

    components: {
        PrevNext,
    },

    data() {
        return {
            
        };
    },

    mounted() {
        console.log('====this.$site====', this.$site)
        console.log('====this.$page====', this.$page)
        console.log('====this.$themeConfig====', this.$themeConfig)
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>
.d-article {
    .article-info {
        margin: 3rem 0;
    }

    h1 {
        text-align: center;
    }

    .time-container {
        font-size: .875rem;
        text-align: center;
    }

    ::v-deep .content__default,
    ::v-deep .content__abstract {
        width: 100%;
    
        img {
            width: 100%;
            cursor: pointer;
        }
    }
}
</style>