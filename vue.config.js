module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/scss/prepend.scss";`
      },
    }
  }
}