<template>
    <div class="bg-gray-300 w-[340px] flex flex-col">
        <div class=" mx-4 mt-2 mb-4 search-content">
            <div class="flex flex-row justify-between"><div class="leading-none text-custom font-bold mb-1">{{ classInfo.cno }}</div><div class="text-rg self-end font-regular mb-1">2023 {{ term }}</div></div>
            
            <div class="leading-none text-2xl font-bold">
                <NuxtLink :to="`/search/${classInfo.regno}`">{{classInfo.title_j}}</NuxtLink>
            </div>
            <div class="leading-none text-base font-bold">{{ classInfo.title_e }}</div>
        </div>
        <div class="container bg-gray-200 grow flex">
            <div class="bg-black w-1 border-4 border-gray-200"></div>
            <div class="container"><p class="whitespace-pre-wrap mb-2 " v-for="item in classInfo.hits" :key="item[0]">{{item}}</p></div>
        </div>
        <div class="container flex">
            <div class="grow"></div>
            <NuxtLink class="text-2xl mr-4 my-1 font-semibold" :to="`/search/${classInfo.regno}`" >Details...</NuxtLink>
       </div>
    </div>
</template>

<script setup>
const { classInfo } = defineProps([ 'classInfo' ]);
const term = classInfo.term.slice(0,6)
</script>

<style scoped>
.text-custom{
    font-size: 1.3rem;
}
</style>