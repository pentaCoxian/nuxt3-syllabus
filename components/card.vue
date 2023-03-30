<template>
    <div class="bg-gray-300 w-[340px] flex flex-col">
        <div class=" mx-4 mt-2 mb-2 search-content">
            <div class="flex flex-row justify-between"><div class="leading-none text-custom font-bold mb-1">{{ classInfo.cno }}</div><div class="text-rg self-end font-regular mb-1">2023 {{ term }} ({{ lang }})</div></div>
            
            <div class="leading-none text-2xl font-bold">
                <NuxtLink :to="`/search/${classInfo.regno}`">{{classInfo.title_j}}</NuxtLink>
            </div>
            <div class="leading-none mt-1 text-base font-medium"><NuxtLink :to="`/search/${classInfo.regno}`">{{ classInfo.title_e }}</NuxtLink></div>
        </div>
        <div class="container bg-gray-100 grow flex flex-col border-x-8 border-gray-200">
            <p class="mb-2 mt-1 ml-2 mr-1.5" >{{classInfo.summary_j}}</p>
            <div class="grow"></div>
            <div class="font-medium ml-2">Summary made by GPT-3.5</div>
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
const lang = classInfo.lang.slice(-1).length > 0 ? classInfo.lang.slice(-1): "N/A";

</script>

<style scoped>
.text-custom{
    font-size: 1.3rem;
}
</style>