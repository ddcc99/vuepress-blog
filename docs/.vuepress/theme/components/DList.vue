<template>
    <div class="d-list">
        <h1>{{$page.title}}</h1>

        <div class="article-list">
            <div class="article-info" v-for="item in articleList" :key="item.key">
                <h2>
                    <router-link :to="item.path">{{item.frontmatter.title}}</router-link>
                </h2>

                <p class="time-container">
                    <i class="fa fa-calendar" aria-hidden="true"></i>
                    <span>{{formatPostTime(item)}}</span>
                </p>

                <Content :pageKey="item.key" slot-key="abstract" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'dList',

    data() {
        return {
            
        };
    },

    computed: {
        articleList() {
            console.log(this.$site.pages.filter(item => {
                console.log(item.frontmatter.categories)

                return item.frontmatter.categories?.some?.(val => {
                    console.log(val, this.$page.title, val === this.$page.title)
                    return val === this.$page.title
                })
            }))
            return this.$site.pages.filter(item => item.frontmatter.categories?.some?.(val => val === this.$page.title))
        }
    },

    mounted() {
        console.log('====this.$site====', this.$site)
        console.log('====this.$page====', this.$page)
        console.log('====this.$themeConfig====', this.$themeConfig)
    },

    methods: {
        formatPostTime(item) {
            return item.frontmatter.postTime?.substr(0, 10)
        },
    },
};
</script>

<style lang="scss" scoped>
.d-list {
    h1, h2 {
        margin: .625rem 0 1.25rem 0;
    }

    h2 {
        text-align: center;

        a {
            position: relative;

            &::before,
            &::after {
                content: '';
                position: absolute;
                width: 0;
                height: .125rem;
                background: #2c3e50;
                transition-delay: 0s;
                left: 0;
                bottom: -0.3125rem;
                transition: width .5s;
                opacity: 0;
            }

            &::after {
                left: unset;
                right: 0;
                width: 100%;
                transition-delay: .3s;
            }

            &:hover {
                &::before {
                    width: 100%;
                    transition-delay: .3s;
                    opacity: 1;
                }

                &::after {
                    width: 0;
                    transition-delay: 0s;
                    opacity: 1;
                }
            }
        }
    }

    .article-list {
        .article-info {
            padding: 1rem;
            border-radius: .25rem;
            transition: box-shadow .2s ease-in-out;

            &:hover {
                box-shadow: 0 0 1rem .0625rem #cfcfcf;
            }

            .time-container {
                font-size: .875rem;
                text-align: center;
            }
        }
    }
}
</style>