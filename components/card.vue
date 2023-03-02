<template>
    <div class="bg-gray-300 w-[340px] h-[340px] flex flex-col">
        <div class="container mx-4 mt-2 mb-4 ">
            <div class="leading-none text-custom font-bold mb-1">{{ classInfo.regno }}</div>
            <div class="leading-none text-2xl font-bold">{{classInfo.ja}}</div>
            <div class="leading-none text-base font-bold">{{ classInfo.en }}</div>
        </div>
        <div class="container bg-gray-200 grow flex">
            <div class="bg-white w-14 border-4 border-gray-200"></div>
            <div class="text-">Hello</div>
        </div>
    </div>
</template>

<script setup>
const { classInfo } = defineProps([ 'classInfo' ]);
</script>

<style scoped>
.text-custom{
    font-size: 1.3rem;
}
</style>