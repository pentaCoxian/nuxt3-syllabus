<template>
    <div>
    <div class="mt-8 container mx-auto">
        <div class="mx-4">
            <p class="font-bold text-sm">Search</p>
            <div class="ml-0 font-bold flex"><input ref="rootE1" id="searchInput" class="w-full text-xl sm:text-4xl text-black border-black bg-white sm:border-b-8 border-b-8 focus:outline-0" @input="searchUpdate"></div>
            <div class="container flex flex-row items-end mt-1.5 text-lg">
                <div class="grow"></div>
                <div class="border border-black border-2">
                    <button class="season  px-1.5" :class="[selected=='*' ? 'selected' : 'not-selected']" v-on:click="consoleHitOn('*')">Full</button>
                    <button class="season  px-1.5" :class="[selected=='Spring Term' ? 'selected' : 'not-selected']" v-on:click="consoleHitOn('Spring Term')">Spring</button>
                    <button class="season  px-1.5" :class="[selected=='Autumn Term' ? 'selected' : 'not-selected']" v-on:click="consoleHitOn('Autumn Term')">Autumn</button>
                    <button class="season  px-1.5" :class="[selected=='Winter Term' ? 'selected' : 'not-selected']" v-on:click="consoleHitOn('Winter Term')">Winter</button>
                </div>
            </div>
        </div>
    </div>
    <div class="container mx-auto">
        <div class="mx-4">
            <div class="container flex flex-row items-end mt-1 text-lg ">
                <div class="grow"></div>
                <div v-if="!pending" class="">{{ classes.length }} Results</div>
            </div>
        </div>
    </div>
    <div class="container mx-auto">
        <div class="flex flex-row flex-wrap justify-center my-4 gap-4" v-if="!pending">
            <Card  v-for="classdata in classes" :classInfo="classdata" :key="classdata.regno"/>
        </div>
    </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: "default",
    scrollToTop: false,
})



const searchTerm = useSearch();
const selected = ref(searchTerm.value.season);
const rootE1 = ref();
useSafeOnMounted(rootE1,()=>{
    document.getElementById("searchInput").value = searchTerm.value.search
})

//make query string
const qString = computed(()=> {
    let qstring = '?q='+searchTerm.value.search
    qstring += searchTerm.value.season != ''? '&term='+searchTerm.value.season : '&term=Full'
    return qstring
})

//query api
const {data:classes,pending,refresh}= await useLazyAsyncData(
    'classes',()=>$fetch(`https://devserver.icu/api/v3/search${qString.value}`)
)

//change display and value of term selector
function consoleHitOn(arg) {
  selected.value = arg;
  searchTerm.value.season = arg;
};

//when input is made update the search term
function searchUpdate(){
    let q = document.getElementById("searchInput").value
    searchTerm.value.search = (q = undefined ? '' : q );
}


//unused
const onClickSearch = (e) => {
    searchTerm.value.search = document.getElementById("searchInput").value;
    console.log(searchTerm.value);
}

//watch for updates in variables and query the api on change
watchEffect(()=>searchTerm.value.search,()=>refresh());
watchEffect(()=>searchTerm.value.season,()=>refresh());
watchEffect(()=>refresh())
</script>

<style scoped>

.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translate(-1000px, 0);
}

input:focus,
select:focus,
textarea:focus,
button:focus {
    outline: none;
}
.selected{
    background: black;
    color: white;
}
</style>

