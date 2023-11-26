<template>
    <div class="d-wrapper">
        <div :class="getClass()">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'dWrapper',
    props: {
        isFold: {
            type: Boolean,
            default: true,
        }
    },

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        getClass() {
            const temp = ['content-wrapper']

            if (this.$page.path.endsWith('html') && !this.isFold) {
                temp.push('t10')
            }

            console.log(temp)

            return temp
        }
    },
};
</script>

<style lang="scss" scoped>
.d-wrapper {
    padding: 3.75rem 0 1.25rem;

    .content-wrapper {
        width: 50%;
        margin: 1.5rem auto;
        transition: box-shadow,background-color .1s,.2s ease-in-out;
        
        &:not(:has(.d-list)) {
            width: 50rem;
            padding: 1rem 3rem;
            box-shadow: 0 0 .625rem .0625rem #cfcfcf;

            &:hover {
                box-shadow: 0 0 .9375rem .0625rem #cfcfcf;
            }
        }

        &.t10 {
            transform: translateX(10rem);
        }
    }
}
</style>