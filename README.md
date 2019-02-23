# [Sample] Swagger API Client generation for NUXT
> Generate Swagger API Client from backend-exported documentation json file.
> And injects 'this.$api' object to deal with Api.. functions.

## Build Setup
### RUN
``` bash
// Install dependencies
$ npm i

// Change 'swagger-vue-generator' paths to our templates
$ npm run change-tpl

// Generate 'HDApiService' class from json
$ npm run hdapi-gen

// Run Nuxt 'development' mode
$ npm run dev
```