<template>
    <div class="d-prev-next">
        <div class="prev">
            <template v-if="!isFirstPage && prevPage">
                <router-link :to="prevPage.path">
                    <i class="fa fa-chevron-left" aria-hidden="true"></i>
                    <span>{{prevPage.frontmatter.title}}</span>
                </router-link>
            </template>
        </div>

        <div class="next">
            <template v-if="!isLastPage && nextPage">
                <router-link :to="nextPage.path">
                    <span>{{nextPage.frontmatter.title}}</span>
                    <i class="fa fa-chevron-right" aria-hidden="true"></i>
                </router-link>
            </template>
        </div>
    </div>
</template>

<script>
export default {
    name: 'dPrevNext',

    computed: {
        currentPageIndex() {
            return this.$articlePages.findIndex(page => page.path === this.$page.path)
        },
        prevPage() {
            return this.$articlePages[this.currentPageIndex - 1]
        },
        nextPage() {
            return this.$articlePages[this.currentPageIndex + 1]
        },
        isFirstPage() {
            return !this.currentPageIndex
        },
        isLastPage() {
            return this.currentPageIndex === this.$articlePages.length - 1
        }
    },

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>
.d-prev-next {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3rem;
}
</style>