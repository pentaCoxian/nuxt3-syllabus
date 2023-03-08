<template>
    <div class="grow w-full bg-icu flex-col flex">
        <div class="container mx-auto mt-10">
            <div class="text-7xl text-white font-bold mx-1">I WANT TO LEARN ABOUT...</div>
            <div class="ml-0 font-bold flex"><img src="../assets\icons\chevron_right_FILL0_wght700_GRAD0_opsz48.svg" alt="search icon" class="mt-8 searchIcon border-0 border-white"><input id="search-box" placeholder="" @keydown.enter="navigate" class="w-full mt-8 text-2xl sm:text-4xl text-white bg-icu sm:border-b-8 border-b-4 focus:outline-0" ></div>
        </div>
        <div class="container mx-auto mt-4 ">
            <NuxtLink to="/search" @click="onClickSearch"><p class="text-white text-4xl font-bold text-right sm:mr-20 mr-4">Go!</p></NuxtLink>
        </div>
        <div class="grow"></div>
        <div class="ml-4 mb-4">
            <TermSelector/>
        </div>
    </div>
</template>

<script setup>
const searchTerm = useSearch();
definePageMeta({
    layout: "landing",
    pageTransition:{
        name: 'rotate'
    }
})

const navigate = () => {
    searchTerm.value.search = document.getElementById("search-box").value;
    return navigateTo({
        path: '/search',
  });
}

const onClickSearch = (e) => {
    searchTerm.value.search = document.getElementById("search-box").value;
}


</script>

<style scoped>
input:focus,
select:focus,
textarea:focus,
button:focus {
    outline: none;
}
</style>
