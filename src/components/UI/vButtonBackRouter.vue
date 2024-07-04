<template>
    <div class="mb-8">
        <button @click="goBack" class="bg-white border-2 dark:bg-black dark:text-white dark:border-2 px-4 py-1 rounded-[30px] text-2xl"><i class='bx bxs-left-arrow-circle'></i></button>
    </div>
</template>

<script>
export default {
    methods: {
        goBack() {
            this.$router.go(-1);
        }
    }
}
</script>
