<template>
<div class="app-menu-list">
    <ul>
        <li v-for="menuGroup in menus" :key="menuGroup.name">
            <div class="app-menu-group-name">
                <span>{{menuGroup.name}}</span>
            </div>
            <ul>
                <li v-for="menu in menuGroup.children" :key="menu.title" @click="handleClickMenu(menu)" :class="{'app-menu-active':currentPath === menu.page}">
                    <div class="app-menu-name">
                        <span>{{menu.name}}</span>
                        <span>{{menu.title}}</span>
                    </div>
                </li>
            </ul>
        </li>
    </ul>
</div>
</template>

<script lang="ts">
import {
    injectAppNavigator
} from "../navigator/app-navigator";
import {
    AppMenu,
    MENUS
} from "./menus";

export default {
    name: "app-menu",
    props: {
        currentPath: {
            type: String
        },
    },
    setup() {
        const navigator = injectAppNavigator()

        return {
            menus: MENUS,
            handleClickMenu(menu: AppMenu) {
                navigator.methods.go(menu.page)
            },
        }
    },
}
</script>

<style lang="scss">
.app-menu-list {
    height: 100%;
    overflow: auto;

    ul {
        list-style: none;
        margin: 0;
        padding: 0;

        .app-menu-name,
        .app-menu-group-name {
            font-size: 14px;
            padding: 10px 24px 12px 32px;
            white-space: nowrap;
            color: #333;
            cursor: pointer;
            transition: all 300ms linear;

            &:hover {
                background-color: rgba(#42b983, 0.1);
                color: #42b983;
            }
        }

        .app-menu-name {
            position: relative;

            &>span {
                &:nth-child(2) {
                    font-size: 12px;
                    margin-left: 0.5em;
                    color: #ccc;
                }
            }

            .pl-icon {
                position: absolute;
                right: 16px;
                line-height: 40px;
            }
        }

        .app-menu-group-name {
            padding-left: 24px;
            letter-spacing: 1px;
            font-size: 12px;
            font-weight: 600;
            color: #42b983;
        }
    }

    &:after {
        position: absolute;
        top: 0;
        bottom: 0;
        right: -30px;
        width: 30px;
        content: '';
        box-shadow: inset 10px 0 8px -8px #f0f1f2;
    }
}
</style>
