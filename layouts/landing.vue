<template>
    <div class="h-screen flex flex-col ">
        <div class="flex flex-row">
            <div class="ml-5 my-auto text-xl md:text-2xl font-semilight underline"><NuxtLink to="/">b-syllabus.icu</NuxtLink></div>
            <div class="flex ml-5 text-lg my-4 font-semibold leading-4">The<br>Non-Official<br>ICU Syllabus Search</div>
            
        </div>
        
        <div class="grow w-full bg-icu flex-col flex">
            <slot />
        </div>
    </div>
</template>

<style>
    body {
      font-family: "Inter" ;
    }
</style>