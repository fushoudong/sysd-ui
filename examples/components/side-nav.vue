<template>
    <div class="side-bar">
        <div v-for="(title, index) in Object.keys(navData)" :key="'title' + index">
            <p class="side-bar-title">{{title}}</p>
            <div v-for="(nav, navIndex) in navData[title]" :key="'nav' + navIndex">
                <template v-if="nav.desc">
                    <router-link
                        :to="{name: nav.name}"
                        v-if="nav.name">
                        {{nav.desc}}
                    </router-link>
                    <p v-else class="side-nav-group">{{nav.desc}}</p>
                    <div v-for="(item, itemIndex) in nav.items" :key="'item' + itemIndex">
                        <router-link
                            :to="{name: item.name}"
                            :class="''"
                            class="slid-nav-component">
                            <span class="span-name">{{item.name}}</span>
                        </router-link>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
import navConf from '../nav.config.json';
export default {
    name: 'SideNav',
    data() {
        return {
            navData: navConf
        }
    }
}
</script>

<style lang="scss" scoped>
    .side-bar {

    }
</style>