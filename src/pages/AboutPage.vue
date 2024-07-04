<template>
    <main>
        <v-button-back-router/>
        <v-about>
            <v-about-item/>
        </v-about>
    </main>
</template>

<script>
import vAbout from "../components/AboutPage/vAbout.vue"
import vAboutItem from "../components/AboutPage/vAboutItem.vue"
import VButtonBackRouter from "../components/UI/vButtonBackRouter.vue"

export default {
    components: {vAbout, vAboutItem, VButtonBackRouter}
}
</script>
