<template>
    <div class="d-article-info">
        <!-- 分类信息 -->
        <div class="categories">
            <div class="category-info" v-for="(item, index) in _categories" :key="index" :style="{color: getColor()}">
                <router-link :to="getLink(item)">
                    <i class="fa fa-folder-o" aria-hidden="true"></i>
                    <span>{{item}}</span>
                </router-link>
            </div>
        </div>

        <!-- 标签信息 -->
        <div class="tags">
            <div 
                class="tag-info" 
                v-for="(item, index) in _tags" 
                :key="index"
                :style="getStyles()"
            >
                {{item}}
            </div>
        </div>
    </div>
</template>

<script>
import { getRgba } from '../utils/help'

export default {
    name: 'dArticleInfo',

    props: {
        categories: {
            type: Array,
        },
        tags: {
            type: Array,
        },
    },

    data() {
        return {
            colors: ['rgb(255, 190, 11)', 'rgb(254, 164, 10)', 'rgb(253, 138, 9)', 'rgb(252, 112, 8)', 'rgb(251, 86, 7)', 'rgb(255, 0, 110)', 'rgb(193, 28, 173)', 'rgb(131, 56, 236)', 'rgb(95, 95, 246)', 'rgb(58, 134, 255)', 'rgb(239, 71, 111)', 'rgb(247, 140, 107)', 'rgb(255, 209, 102)', 'rgb(131, 212, 131)', 'rgb(69, 213, 146)', 'rgb(6, 214, 160)', 'rgb(12, 176, 169)', 'rgb(17, 138, 178)']
        };
    },

    computed: {
        _categories() {
            return this.categories || this.$page.frontmatter.categories || []
        },
        _tags() {
            return this.tags || this.$page.frontmatter.tags || []
        }
    },

    mounted() {

    },

    methods: {
        getLink(item) {
            return this.$listPages.find(page => page.frontmatter.title === item)?.path || '/'
        },
        getColor() {
            const i = Math.floor(Math.random() * this.colors.length)
            return this.colors[i]
        },
        getStyles() {
            const color = this.getColor()

            return {
                background: getRgba(color, '.1'),
                borderColor: getRgba(color, '.2'),
                color: color
            }
        }
    },
};
</script>

<style lang="scss" scoped>
.d-article-info {
    display: flex;
    justify-content: space-around;
    align-items: center;

    .categories {
        display: flex;
        font-size: .875rem;

        .category-info {
            margin-right: .625rem;

            &:hover {
                text-decoration: underline;
                cursor: pointer;
            }
        }
    }

    .tags {
        display: flex;

        .tag-info {
            height: 1.5rem;
            margin-right: .625rem;
            padding: 0 .5625rem;
            font-size: .75rem;
            border: .0625rem solid #d9ecff;
            border-radius: .25rem;
            text-align: center;
            line-height: 1.5rem;
        }
    }
}
</style>