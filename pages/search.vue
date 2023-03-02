<template>
    <div class="mt-8 container mx-auto">
        <div class="mx-4">
            <p class="font-bold text-sm">Search</p>
            <div class="ml-0 font-bold flex"><input id="searchInput" class="w-full text-xl sm:text-4xl text-black border-black bg-white sm:border-b-8 border-b-8 focus:outline-0" ></div>
        </div>
    </div>
    <div class="flex flex-row flex-wrap justify-center my-10 gap-4">
        <Card :classInfo="testClassInfo"/>
        <Card :classInfo="testClassInfo"/>
        <Card :classInfo="testClassInfo"/>
        <Card :classInfo="testClassInfo"/>
    </div>
</template>

<script setup>
const testClassInfo = {
    'regno':'ISC344',
    'ja':'情報科学特論',
    'en':'Topics of Information Science',
}
    
setTimeout(function(){
    document.getElementById("searchInput").value="lol"
},10)


</script>

<style scoped>
input:focus,
select:focus,
textarea:focus,
button:focus {
    outline: none;
}
</style>

