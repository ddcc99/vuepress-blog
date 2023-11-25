<template>
    <div class="d-header">
        <div class="container">
            <TextAni text="welcome"></TextAni>

            <div class="nav-container">
                <template v-for="item in $themeConfig.nav">
                    <div class="nav-item" :key="item.link" v-if="!item.items">
                        <router-link :to="item.link">{{ item.text }}</router-link>
                    </div>

                    <div class="nav-item nav-item-dropdown" :key="item.link" v-else @click.stop="clickNavItem(item)" :id="`nav_dropdown_${item.text}`">
                        <span>{{item.text}}</span>
                        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                            <path fill="currentColor" d="M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"></path>
                        </svg>

                        <div class="nav-item-options" v-show="navOptionsState[item.text]" @click.stop="">
                            <p class="option-item" v-for="val in item.items" :key="val.link" @click="clickOptionItem(item, val)">{{val.text}}</p>
                        </div>
                    </div>
                </template>
            </div>

            <div class="right-area"></div>
        </div>
    </div>
</template>

<script>
import TextAni from '../components/DTextAni.vue'

export default {
    name: 'dHeader',
    components: {
        TextAni,
    },

    data() {
        return {
            navOptionsState: {}
        };
    },

    computed: {
        hasOpenPopup() {
            return Object.values(this.navOptionsState).some(item => item)
        },
        openPopupText() {
            return Object.entries(this.navOptionsState)
                .filter(([key, value]) => value)
                .map(([key]) => key)?.[0]
        }
    },

    mounted() {
        window.onclick = (e) => {
            console.log(e, this.hasOpenPopup)
            if (!this.hasOpenPopup) {
                return
            }

            this.$set(this.navOptionsState, this.openPopupText, false)
        }
    },

    methods: {
        findParent(target) {
            if (target && target.id !== `nav_dropdown_${this.openPopupText}`) {
                return this.findParent(target.parentNode)
            }

            return target
        },
        clickNavItem(item) {
            Object.keys(this.navOptionsState).forEach(key => {
                (key !== item.text) && this.$set(this.navOptionsState, this.navOptionsState[key], false)
            })
            this.$set(this.navOptionsState, item.text, !this.navOptionsState[item.text])
        },
        clickOptionItem(item, val) {
            this.$set(this.navOptionsState, item.text, false)
            this.$router.push(val.link)
        },
    },
};
</script>

<style lang="scss" scoped>
.d-header {
    position: fixed;
    inset: 0;
    height: 3.75rem;
    z-index: 123;

    &:not(:has(.d-home)) {
        background-color: #101010;
    }

    .container {
        width: 100%;
        height: 100%;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .d-text-ani {
        position: absolute;
        left: .625rem;
        height: 100%;
    }

    .nav-container {
        display: flex;
        align-items: center;

        .nav-item {
            padding: 0 1.25rem;
            cursor: pointer;

            a {
                color: #fff;

                &:hover {
                    text-decoration: underline;
                }
            }

            .router-link-active {
                
            }
        }

        .nav-item-dropdown {
            position: relative;
            color: #fff;

            svg {
                width: 1rem;
            }

            .nav-item-options {
                position: absolute;
                top: 2.5rem;
                display: flex;
                flex-direction: column;
                padding: .3125rem 0;
                background: #fff;
                border: .0625rem solid #e4e7ed;
                box-shadow: 0 0 .75rem rgba(0, 0, 0, .12);
                border-radius: .25rem;
                font-size: .875rem;
                color: #606266;
                min-width: .625rem;
                word-wrap: break-word;

                .option-item {
                    padding: .3125rem 1rem;
                    line-height: 1.375rem;
                    text-align: center;

                    &:hover {
                        background: #ecf5ff;
                        color: #409eff;
                    }
                }

                &::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 50%;
                    transform: translate(-50%, -50%) rotate(45deg);
                    width: 0;
                    height: 0;
                    border-top: .3125rem solid #fff;
                    border-left: .3125rem solid #fff;
                    border-right: .3125rem solid transparent;
                    border-bottom: .3125rem solid transparent;
                    border-top-left-radius: .125rem;
                }
            }
        }
    }
}
</style>