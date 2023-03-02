// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app:{
        head:{
            link: [
              {
                rel: "preconnect",
                href: "https://fonts.googleapis.com",
              },
              {
                rel: "preconnect",
                href: "https://fonts.gstatic.com",
              },
              {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap",
                crossorigin: "",
              },
            ],
            title: "ICU B-Syllabus",
            meta:[
                {name:'description',content:'ICU B-syllabus'}
            ]
        },
        pageTransition:{name:"page",mode: 'out-in'}
    },
    
    modules: ['@nuxtjs/tailwindcss'],

})
