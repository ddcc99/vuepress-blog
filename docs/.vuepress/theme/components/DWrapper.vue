<template>
    <div>
        <div class="d-wrapper">
            <div class="content-wrapper">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'dWrapper',

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
    }
}
</style>