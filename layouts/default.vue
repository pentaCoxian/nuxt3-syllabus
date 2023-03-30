<template>
    <header class="shadow-sm bg-icu sticky top-0 z-50">
        <div class="relative">
            <nav class=" flex mx-auto justify-between ">
                <div class="flex">
                    <div class="sm:ml-5 ml-3 my-auto text-xl md:text-2xl font-semilight underline text-white "><NuxtLink to="/" class="bg-white text-[#005ABB] p-1">syllabus.icu</NuxtLink></div>
                    <div class="flex ml-5 text-white text-lg my-4 font-semibold leading-4">The<br>Non-Official<br>ICU Syllabus Search</div>
                </div>
            </nav>
        </div>
    </header>
    <div class="flex flex-col">
        <div >
            
        </div>

        <div class="flex-1 w-full bg-white">
            <div class="flex-col">
                <slot />
            </div>
        </div>        
    </div>
</template>

<style>
    body {
      font-family: "Inter" ;
    }
</style>