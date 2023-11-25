<template>
    <div class="d-split-mask" ref="mask">
        <div v-for="rowIndex in rows" :key="rowIndex" class="row">
            <div
                v-for="colIndex in cols"
                :key="colIndex"
                class="col"
                :style="getCellStyle(rowIndex, colIndex)"
            ></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SplitMask',
    props: {
        size: {
            type: Number,
            default: 100,
        }
    },

    data() {
        return {
            len: 0,
            rows: 0,
            cols: 0,
        };
    },

    mounted() {
        this.getMasks()
        const image = new Image()
        image.src = this.$themeConfig.background
        image.onload = () => {
            this.$refs.mask.style.setProperty("--o", 0)

            setTimeout(() => {
                this.$emit('hiddenMask')
            }, 3000)
        }
    },

    methods: {
        getMasks() {
            const w = window.innerWidth
            const h = window.innerHeight

            const maxGridCount =
                window.innerWidth > 1920
                    ? 1000
                    : window.innerWidth > 1080
                    ? 800
                    : window.innerWidth > 768
                    ? 600
                    : 400

            this.len = Math.min(w, h) / Math.sqrt(maxGridCount)

            this.cols = Math.ceil(w / this.len)
            this.rows = Math.ceil(h / this.len)
        },
        getCellStyle(rowIndex, colIndex) {
            return {
                width: `${this.len / 16}rem`,
                height: `${this.len / 16}rem`,
                transition: `opacity ${100 + Math.random() * 500}ms ${
                    ((colIndex + rowIndex / 2) / 20) * Math.random() * 500
                }ms`,
            };
        }
    },
};
</script>

<style lang="scss" scoped>
.d-split-mask {
    position: absolute;
    inset: 0;
    width: 100vw;
    height: 100vh;
    z-index: 99;
    overflow: hidden;

    --o: 1;

    .row {
        display: flex;

        .col {
            flex: 1;
            background-color: #101010;
            opacity: var(--o);
        }
    }
}
</style>