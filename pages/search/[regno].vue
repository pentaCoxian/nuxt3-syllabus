<template>
    <div class="container mx-auto sm:px-0 px-3 sm:mt-10 mt-2 ">
        <div class="sm:text-4xl text-xl font-bold">{{ classInfo.cno }}  </div><div class="sm:text-4xl text-xl font-bold border-b-2 pb-1 mb-3 border-black" >  {{ classInfo.title_j }} / {{classInfo.title_e}}</div>
        <div class="flex flex-row-reverse space-x-2.5">
            <div class="mx-1">{{ classInfo.lang }}({{ classInfo.unit_e.split('CREDIT （単位）: ').pop() }})</div>
            <div class="mx-1">regno: {{ classInfo.regno }}</div>
        </div>
        
        <div class="flex flex-row-reverse">
            <div>{{ classInfo.instructor }}</div>
        </div>
        <div class="flex flex-row-reverse space-x-2.5">
            <div class="mx-1">{{ classInfo.schedule }}</div>
        </div>
        <div class="mb-4">
            <div class="font-bold text-lg" :class="(classInfo.descreption == '') ? 'hidden':''">Descreption </div><div>{{classInfo.descreption}}</div>
            <div class="font-bold text-lg" :class="(classInfo.descreption_j == '') ? 'hidden':''">Descreption_j</div><div>{{classInfo.descreption_j}}</div>
        </div>

        <div class="mb-4">
            <div class="font-bold text-lg" :class="(classInfo.goals == '') ? 'hidden':''">Learning goals </div><div>{{classInfo.goals}}</div>
            <div class="font-bold text-lg" :class="(classInfo.goals_j == '') ? 'hidden':''">Learning goals_j </div><div>{{classInfo.goals_j}}</div>
        </div>
        
        <div class="mb-4">
            <div class="font-bold text-lg" :class="(classInfo.content == '') ? 'hidden':''">Content </div><div>{{classInfo.content}}</div>
            <div class="font-bold text-lg" :class="(classInfo.content_j == '') ? 'hidden':''">Content_j </div><div>{{classInfo.content_j}}</div>
        </div>

        <div class="mb-4">
            <div class="font-bold text-lg" :class="(classInfo.lang_of_inst == '') ? 'hidden':''">Language of Instruction </div><div>{{classInfo.lang_of_inst}}</div>
        </div>

        <div class="mb-4">
            <div class="font-bold text-lg" :class="(classInfo.pollicy == '') ? 'hidden':''">Grading Policy </div><div>{{classInfo.pollicy}}</div>
        </div>

        <div class="mb-4">
            <div class="font-bold text-lg" :class="(classInfo.individual_study == '') ? 'hidden':''">Individual Study </div><div>{{classInfo.individual_study}}</div>
        </div>

        <div class="mb-4">
            <div class="font-bold text-lg" :class="(classInfo.notes == '') ? 'hidden':''">Grading Policy </div><div>{{classInfo.notes}}</div>
        </div>

        <div class="mb-4">
            <div class="font-bold text-lg" :class="(classInfo.ref == '') ? 'hidden':''">References </div><div>{{classInfo.ref}}</div>
        </div>
    </div>
</template>

<script setup>
const { regno } = useRoute().params;

//query api
const {data:classInfo,pending,refresh}= await useLazyAsyncData(
    'classInfo',()=>$fetch(`https://devserver.icu/api/v1/details?id=${regno}`)
);
</script>

<style scoped>

</style>