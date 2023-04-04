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
              { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
              { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
              
            ],
            title: "Syllabus.icu - ICUシラバス検索",
            meta:[
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                {name:'description',content:'The Non-Official ICU Syllabus Search. Search the entire ICU syllabus using keywords!'},
            ],
            htmlAttrs:{lang:'en'}
        },
        pageTransition:{name:"page",mode: 'out-in'}
    },
    
    modules: ['@nuxtjs/tailwindcss','@nuxtjs/google-adsense'],
    
    'google-adsense':{
      id: 'pub-9280740248496337',
      test: false,
      overlayBottom: true,

    },
    
})
