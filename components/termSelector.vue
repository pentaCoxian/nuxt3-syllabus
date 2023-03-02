<template>
    <div class="container mx-auto">
        <div class="mb-1 text-white text-md font-semibold"><p>Search from</p></div>
    </div>
    
    <div class="container mx-auto space-y-2">
        <div><button class="text-5xl text-white font-bold season" :class="[selected==0 ? 'selected' : 'not-selected']" v-on:click="consoleHitOn(0)">All</button></div>
        <div><button class="text-5xl text-white font-bold season" :class="[selected==1 ? 'selected' : 'not-selected']" v-on:click="consoleHitOn(1)">Spring</button></div>
        <div><button class="text-5xl text-white font-bold season" :class="[selected==2 ? 'selected' : 'not-selected']" v-on:click="consoleHitOn(2)">Autumn</button></div>
        <div><button class="text-5xl text-white font-bold season" :class="[selected==3 ? 'selected' : 'not-selected']" v-on:click="consoleHitOn(3)">Winter</button></div>
    </div> 
</template> 

<script setup>
const selected = ref(0)
function consoleHitOn(arg) {
  selected.value = arg
}



</script>
  

<style scoped>
.not-selected{
    font-size: 2.2em;
    opacity: 60%;
}
</style>