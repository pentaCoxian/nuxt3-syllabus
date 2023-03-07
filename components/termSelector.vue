<template>
    <div>
    <div class="container mx-auto">
        <div class="mb-1 text-white text-md font-semibold"><p>Search from</p></div>
    </div>
    
    <div class="container mx-auto space-y-2">
        <div><button class="text-5xl text-white font-bold season" :class="[selected=='*' ? 'selected' : 'not-selected']" v-on:click="consoleHitOn('*')">Full</button></div>
        <div><button class="text-5xl text-white font-bold season" :class="[selected=='Spring Term' ? 'selected' : 'not-selected']" v-on:click="consoleHitOn('Spring Term')">Spring</button></div>
        <div><button class="text-5xl text-white font-bold season" :class="[selected=='Autumn Term' ? 'selected' : 'not-selected']" v-on:click="consoleHitOn('Autumn Term')">Autumn</button></div>
        <div><button class="text-5xl text-white font-bold season" :class="[selected=='Winter Term' ? 'selected' : 'not-selected']" v-on:click="consoleHitOn('Winter Term')">Winter</button></div>
    </div>
    </div>
</template> 

<script setup>

const searchTerm = useSearch();
const selected = ref(searchTerm.value.season);
function consoleHitOn(arg) {
  selected.value = arg;
  searchTerm.value.season = arg;
};
</script>
  

<style scoped>
.not-selected{
    font-size: 2.2em;
    opacity: 60%;
}
</style>