<template>
    <div class="h-screen flex flex-col ">
        <div class="flex flex-row">
            <div class="ml-5 my-auto text-xl md:text-2xl font-semilight underline "><NuxtLink to="/" class="bg-black text-white p-1">b-syllabus.icu</NuxtLink></div>
            <div class="flex ml-5 text-lg my-4 font-semibold leading-4">The<br>Non-Official<br>ICU Syllabus Search</div>
            
        </div>
        <slot />
    </div>
</template>

<style>
    body {
      font-family: "Inter" ;
    }
</style>