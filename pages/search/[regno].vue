<template>
    <div class="container mx-auto sm:px-0 px-3 sm:mt-10 mt-2 ">
        <div class="sm:text-4xl text-xl font-bold content-marker" v-if="!pending">{{ classInfo.cno }}  </div><div class="sm:text-4xl text-xl font-bold border-b-2 pb-1 mb-3 border-black content-marker" v-if="!pending">  {{ classInfo.title_j }} / {{classInfo.title_e}}</div>
        <div class="flex flex-row-reverse space-x-2.5">
            <div class="mx-1 content-marker" v-if="!pending">{{ classInfo.lang }}({{ classInfo.unit_e.split('CREDIT （単位）: ').pop() }})</div>
            <div class="mx-1 content-marker" v-if="!pending">regno: {{ classInfo.regno }}</div>
        </div>
        
        <div class="flex flex-row-reverse">
            <div class="content-marker" v-if="!pending">{{ classInfo.instructor }}</div>
        </div>
        <div class="flex flex-row-reverse space-x-2.5">
            <div class="mx-1 content-marker" v-if="!pending">{{ classInfo.schedule }}</div>
        </div>
        <div class="mb-4">
            <div class="font-bold text-lg" :class="(classInfo.descreption == '') ? 'hidden':''" v-if="!pending">Descreption </div><div class="content-marker whitespace-pre-wrap" v-if="!pending">{{classInfo.descreption}}</div>
            <div class="font-bold text-lg" :class="(classInfo.descreption_j == '') ? 'hidden':''" v-if="!pending">Descreption_j</div><div class="content-marker whitespace-pre-wrap" v-if="!pending">{{classInfo.descreption_j}}</div>
        </div>

        <div class="mb-4">
            <div class="font-bold text-lg" :class="(classInfo.goals == '') ? 'hidden':''" v-if="!pending">Learning goals </div><div class="content-marker whitespace-pre-wrap" v-if="!pending">{{classInfo.goals}}</div>
            <div class="font-bold text-lg" :class="(classInfo.goals_j == '') ? 'hidden':''" v-if="!pending">Learning goals_j </div><div class="content-marker whitespace-pre-wrap" v-if="!pending">{{classInfo.goals_j}}</div>
        </div>
        
        <div class="mb-4">
            <div class="font-bold text-lg" :class="(classInfo.content == '') ? 'hidden':''" v-if="!pending">Content </div><div class="content-marker whitespace-pre-wrap" v-if="!pending">{{classInfo.content}}</div>
            <div class="font-bold text-lg" :class="(classInfo.content_j == '') ? 'hidden':''" v-if="!pending">Content_j </div><div class="content-marker whitespace-pre-wrap" v-if="!pending">{{classInfo.content_j}}</div>
        </div>

        <div class="mb-4">
            <div class="font-bold text-lg" :class="(classInfo.lang_of_inst == '') ? 'hidden':''" v-if="!pending">Language of Instruction </div><div class="content-marker whitespace-pre-wrap" v-if="!pending">{{classInfo.lang_of_inst}}</div>
        </div>

        <div class="mb-4">
            <div class="font-bold text-lg" :class="(classInfo.pollicy == '') ? 'hidden':''" v-if="!pending">Grading Policy </div><div class="content-marker whitespace-pre-wrap" v-if="!pending">{{classInfo.pollicy}}</div>
        </div>

        <div class="mb-4">
            <div class="font-bold text-lg" :class="(classInfo.individual_study == '') ? 'hidden':''" v-if="!pending">Individual Study </div><div class="content-marker whitespace-pre-wrap" v-if="!pending">{{classInfo.individual_study}}</div>
        </div>

        <div class="mb-4">
            <div class="font-bold text-lg" :class="(classInfo.notes == '') ? 'hidden':''" v-if="!pending">Notes </div><div class="content-marker whitespace-pre-wrap" v-if="!pending">{{classInfo.notes}}</div>
        </div>

        <div class="mb-4">
            <div class="font-bold text-lg" :class="(classInfo.ref == '') ? 'hidden':''" v-if="!pending">References </div><div class="content-marker whitespace-pre-wrap" v-if="!pending">{{classInfo.ref}}</div>
        </div>
    </div>
</template>

<script setup>
const { regno } = useRoute().params;
const searchTerm = useSearch();
let q = searchTerm.value.search;
const qList = q.split(' ');

function makeTag(q,tagStart,tagEnd){
    q = tagStart + q + tagEnd;
    return q
}

onMounted(()=>{
    setTimeout(()=>{
    console.log(q)
    let htmlList = document.getElementsByClassName("content-marker")
    qList.forEach((e)=>{
        for(let i of htmlList){
            qList.forEach((e)=>{
                i.innerHTML = i.innerHTML.replace(e,makeTag(e,"<found class='underline decoration-pink-500 decoration-4'>","</found>"));
            })
            
        }
    });},100);
});


//query api
const {data:classInfo,pending,refresh}= await useLazyAsyncData(
    'classInfo',()=>$fetch(`https://devserver.icu/api/v1/details?id=${regno}`)
);
</script>

<style scoped>

</style>