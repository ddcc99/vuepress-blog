<template>
    <div :class="['d-catalogue', {unfold: !isFold}]">
        <div class="title" :style="getStyles(item)" v-for="(item, index) in $page.headers" :key="index">
            <span @click="jumpToTitle(item)">{{item.title}}</span>
        </div>

        <div class="arrow" @click="$emit('toggleFold')">
            <i :class="getClass()"></i>
        </div>
    </div>
</template>

<script>
export default {
    name: 'dCatalogue',

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
        getStyles(item) {
            return {
                fontSize: (18 - (item.level - 1) * 2) / this.remValue + 'rem',
                fontWeight: item.level < 3 ? 700 : 400,
                textIndent: (item.level - 1) * 30  / this.remValue + 'rem'
            }
        },
        jumpToTitle(item) {
            const dom = document.getElementById(item.slug)
            dom && dom.scrollIntoView({behavior: 'smooth', block: 'center'})
        },
        getClass() {
            return ['fa', {[`fa-angle-double-${!this.isFold ? 'left' : 'right'}`]: true}]
        }
    },
};
</script>

<style lang="scss" scoped>
.d-catalogue {
    position: fixed;
    left: 0;
    top: 3.75rem;
    height: 100vh;
    width: 0;
    box-shadow: 0 0 .625rem .0625rem #cfcfcf;
    overflow-y: auto;
    transition: width,padding .3s,.3s ease-in-out;

    .title {
        margin: .75rem 0;
        cursor: pointer;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;

        &:hover {
            color: #0cb0a9;
        }
    }

    .arrow {
        position: fixed;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        font-size: 1.75rem;
        cursor: pointer;
        transition: left .3s ease-in-out;
        animation: toRight 1s ease-in-out infinite;

        &:hover {
            opacity: .8;
            font-size: 1.875rem;
        }
    }

    &.unfold {
        width: 20rem;
        padding: 1.5rem;

        .arrow {
            left: 20rem;
            transform: translate(-50%, -50%);
            animation: toLeft 1s ease-in-out infinite;
        }
    }
}

@keyframes toLeft {
    0% {
        transform: translate(-50%, -50%);
    }

    50% {
        transform: translate(-80%, -50%);
    }

    100% {
        transform: translate(-50%, -50%);
    }
}

@keyframes toRight {
    0% {
        transform: translate(0, -50%);
    }

    50% {
        transform: translate(30%, -50%);
    }

    100% {
        transform: translate(0, -50%);
    }
}
</style>