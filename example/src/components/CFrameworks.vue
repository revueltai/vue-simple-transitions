<template>
    <h6
      v-anim="'slide-y-top'"
      v-anim-delay="400"
      class="mb-xs mt-xl bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-200 text-center"
    >
      Plays along nicely with
    </h6>

    <c-block-horizontal direction="'flex-row'">
      <a
        v-anim="'slide-x-left'"
        v-anim-delay="600"
        href="https://vuejs.org/"
        target="_blank"
      >
        <img
          src="/logo-vue.svg"
          alt="Vuejs"
          width="48"
          height="48"
          class="opacity-50 hover:opacity-100 duration-500 transition-opacity cursor-pointer"
        />
      </a>

      <a
        v-anim="'slide-x-right'"
        v-anim-delay="600"
        href="https://nuxtjs.org/"
        target="_blank"
      >
        <img
          src="/logo-nuxt.svg"
          alt="Nuxtjs"
          width="48"
          height="48"
          class="opacity-50 hover:opacity-100 duration-500 transition-opacity cursor-pointer"
        />
      </a>
    </c-block-horizontal>
</template>

<style scoped>
.token.symbol,
.token.c-name {
  @apply text-gray-500;
}
.token.c-prop {
  @apply text-green-400;
}
.token.c-value {
  @apply text-purple-400;
}
</style>
