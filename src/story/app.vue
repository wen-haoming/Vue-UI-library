<template>
<app-navigator defaultPath="normal/button" ref="navigator">
    <article class="app-home">
        <section class="app-header" :style="{height:HomeConfig.headSize+'px',}">
            <span @click="goHome">v3-component</span>
        </section>
        <section class="app-menu" :style="{width:HomeConfig.menuSize+'px',top:HomeConfig.headSize+'px'}">
            <app-menu />
        </section>
        <section class="app-content" :style="{
                paddingTop:(HomeConfig.headSize+20)+'px',
                paddingLeft:(HomeConfig.menuSize+20)+'px',
            }">
            <app-navigator-page />
        </section>
    </article>
</app-navigator>
</template>

<script lang="ts">
import {
    defineComponent
} from 'vue'
import {
    AppNavigator
} from "./components/navigator/app-navigator";
import {
    AppNavigatorPage
} from "./components/navigator/app-navigator-page";
import AppMenu from "./components/menu/app-menu.vue";

const HomeConfig = {
    headSize: 60,
    menuSize: 300,
}

export default defineComponent({
    components: {
        AppMenu,
        AppNavigator,
        AppNavigatorPage,
    },
    name: "app",
    methods: {
        goHome() {
            // console.log(this.$refs.navigator)
            (this.$refs.navigator as any).$._refer.methods.go('home')
        }
    },
    setup(props, setupContext) {

        return {
            HomeConfig,
            // goHome() {

            // }
        }
    }
})
</script>

<style lang="scss">
html,
body {
    margin: 0;
    padding: 0;
}

.app-home {
    .app-header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;

        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        box-sizing: border-box;
        border-bottom: solid 1px #f2f2f2;
        background-color: white;
    }

    .app-menu {
        position: fixed;
        left: 0;
        bottom: 0;
        border-right: solid 1px #f2f2f2;
        background-color: white;
    }

    .app-content {
        min-height: 100vh;
        box-sizing: border-box;
    }
}
</style>
