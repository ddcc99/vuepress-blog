<template>
    <div
        class="d-home"
        :style="{ background: `url(${$themeConfig.background}) no-repeat` }"
    >
        <div class="cloud">
            <svg
                class="waves"
                viewBox="0 24 150 28"
                preserveAspectRatio="none"
                shape-rendering="auto"
            >
                <defs>
                    <path
                        id="gentle-wave"
                        d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                        fill="white"
                    ></path>
                </defs>
                <g class="parallax">
                    <use xlink:href="#gentle-wave" x="48" y="0" opacity="0.7">
                        <path
                            id="gentle-wave"
                            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                            fill="white"
                        ></path>
                    </use>
                    <use xlink:href="#gentle-wave" x="48" y="3" opacity="0.5">
                        <path
                            id="gentle-wave"
                            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                            fill="white"
                        ></path>
                    </use>
                    <use xlink:href="#gentle-wave" x="48" y="5" opacity="0.3">
                        <path
                            id="gentle-wave"
                            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                            fill="white"
                        ></path>
                    </use>
                    <use xlink:href="#gentle-wave" x="48" y="7">
                        <path
                            id="gentle-wave"
                            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                            fill="white"
                        ></path>
                    </use>
                </g>
            </svg>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',

    data() {
        return {}
    },

    mounted() {
        this.$emit('showMask')
    },

    methods: {},
}
</script>

<style lang="scss" scoped>
.d-home {
    height: 100vh;
    background-size: cover !important;

    .cloud {
        display: flex;
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 8;
        box-sizing: border-box;
        mix-blend-mode: overlay;

        .waves {
            display: flex;
            position: relative;
            width: 100%;
            height: 6.25rem;

            @media (max-width: 48rem) {
                height: 2.5rem;
            }
        }

        .parallax {
            > use {
                animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5)
                    infinite;
            }

            > use:nth-child(1) {
                animation-delay: -2s;
                animation-duration: 7s;
            }

            > use:nth-child(2) {
                animation-delay: -3s;
                animation-duration: 10s;
            }

            > use:nth-child(3) {
                animation-delay: -4s;
                animation-duration: 13s;
            }

            > use:nth-child(4) {
                animation-delay: -5s;
                animation-duration: 20s;
            }
        }
    }

    @keyframes move-forever {
        0% {
            transform: translate3d(-5.625rem, 0, 0);
        }

        100% {
            transform: translate3d(5.3125rem, 0, 0);
        }
    }
}
</style>
