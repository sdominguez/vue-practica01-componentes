const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  //la siguiente línea se tiene que agregar.
  lintOnSave: false,
  transpileDependencies: [
    'vuetify'
  ]
})
