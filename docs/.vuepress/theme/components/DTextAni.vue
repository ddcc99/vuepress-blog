<template>
    <div class="d-text-ani">
        <div class="stage">
            <div class="wrapper">
                <div class="slash"></div>
                <div class="sides">
                    <div class="side"></div>
                    <div class="side"></div>
                    <div class="side"></div>
                    <div class="side"></div>
                </div>
                <div class="text">
                    <div class="text--backing">{{text}}</div>
                    <div class="text--left">
                        <div class="inner">{{text}}</div>
                    </div>
                    <div class="text--right">
                        <div class="inner">{{text}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'dTextAni',
    props: {
        text: {
            type: String,
            required: true,
        }
    }
};
</script>

<style lang="scss" scoped>
.d-text-ani {
    .stage {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        .wrapper {
            position: relative;
            color: #fff;
            font-size: 1.5rem;
            text-transform: uppercase;
            letter-spacing: .25rem;
            padding: .5rem;

            .slash {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%) rotate(-24deg) scaleY(0);
                transform-origin: center center;
                width: 0.15rem;
                height: 120%;
                background: #fff;
                z-index: 4;
                -webkit-animation: slash 6s ease-in infinite;
                        animation: slash 6s ease-in infinite;
                
                &:before {
                    content: '';
                    display: block;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 0.75rem;
                    height: 120%;
                    background: #232323;
                    z-index: -1;
                }

                &:after {
                    content: '';
                    display: block;
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: #fff;
                }
            }

            .sides {
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                overflow: hidden;

                .side {
                    position: absolute;
                    background: #fff;

                    &:nth-child(1) {
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 0.15rem;
                        transform: translateX(-101%);
                        -webkit-animation: side-top ease 6s infinite;
                                animation: side-top ease 6s infinite;
                    }

                    &:nth-child(2) {
                        top: 0;
                        right: 0;
                        width: 0.15rem;
                        height: 100%;
                        transform: translateY(-101%);
                        -webkit-animation: side-right ease 6s infinite;
                                animation: side-right ease 6s infinite;
                    }

                    &:nth-child(3) {
                        left: 0;
                        bottom: 0;
                        width: 100%;
                        height: 0.15rem;
                        transform: translateX(101%);
                        -webkit-animation: side-bottom ease 6s infinite;
                                animation: side-bottom ease 6s infinite;
                    }

                    &:nth-child(4) {
                        top: 0;
                        left: 0;
                        width: 0.15rem;
                        height: 100%;
                        transform: translateY(101%);
                        -webkit-animation: side-left ease 6s infinite;
                                animation: side-left ease 6s infinite;
                    }
                }
            }

            .text {
                position: relative;

                .text--backing {
                    opacity: 0;
                }
                .text--left {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 51%;
                    height: 100%;
                    overflow: hidden;

                    .inner {
                        transform: translateX(100%);
                        -webkit-animation: text-left 6s ease-in-out infinite;
                                animation: text-left 6s ease-in-out infinite;
                    }
                }

                .text--right {
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 50%;
                    height: 100%;
                    overflow: hidden;

                    .inner {
                        transform: translateX(-200%);
                        -webkit-animation: text-right 6s ease-in-out infinite;
                                animation: text-right 6s ease-in-out infinite;
                    }
                }
            }
        }
    }
}

@keyframes slash {
  0% {
    transform: translate(-50%, -50%) rotate(-24deg) scaleY(0);
  }
  6% {
    transform: translate(-50%, -50%) rotate(-24deg) scaleY(1);
  }
  13% {
    transform: translate(-50%, -50%) rotate(-24deg) scaleY(1);
  }
  16.6% {
    transform: translate(-50%, -50%) rotate(-24deg) scaleY(0);
  }
  100% {
    transform: translate(-50%, -50%) rotate(-24deg) scaleY(0);
  }
}

@keyframes text-left {
  0% {
    transform: translateX(100%);
  }
  10% {
    transform: translateX(0);
  }
  58% {
    transform: translateX(0);
  }
  70% {
    transform: translateX(-200%);
  }
  100% {
    transform: translateX(-200%);
  }
}

@keyframes text-right {
  0% {
    transform: translateX(-200%);
  }
  10% {
    transform: translateX(-100%);
  }
  58% {
    transform: translateX(-100%);
  }
  70% {
    transform: translateX(-300%);
  }
  100% {
    transform: translateX(-300%);
  }
}

@keyframes side-top {
  0%, 14% {
    transform: translateX(-101%);
  }
  24%, 55% {
    transform: translateX(0);
  }
  65% {
    transform: translateX(101%);
  }
  100% {
    transform: translateX(101%);
  }
}

@keyframes side-right {
  0%, 14%, 23% {
    transform: translateY(-101%);
  }
  30%, 62% {
    transform: translateY(0);
  }
  72% {
    transform: translateY(101%);
  }
  100% {
    transform: translateY(101%);
  }
}

@keyframes side-bottom {
  0%, 14%, 24%, 28% {
    transform: translateX(101%);
  }
  37%, 70% {
    transform: translateX(0);
  }
  79% {
    transform: translateX(-101%);
  }
  100% {
    transform: translateX(-101%);
  }
}

@keyframes side-left {
  0%, 14%, 24%, 34%, 35% {
    transform: translateY(101%);
  }
  44%, 79% {
    transform: translateY(0);
  }
  86% {
    transform: translateY(-101%);
  }
  100% {
    transform: translateY(-101%);
  }
}
</style>