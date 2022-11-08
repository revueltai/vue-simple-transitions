<template>
  <c-block class="border-y border-gray-900">
    <h3
      v-anim="'slide-y-top'"
      class="mb-sm bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-200 text-center"
    >
      Plays along nicely with
    </h3>

    <c-block-horizontal class="mt-xl">
      <a
        v-anim="'slide-x-left'"
        v-anim-delay="200"
        href="https://vuejs.org/"
        target="_blank"
      >
        <img
          src="/logo-vue.svg"
          alt="Vuejs"
          width="72"
          height="72"
          class="opacity-50 hover:opacity-100 transition-opacity cursor-pointer"
        />
      </a>

      <a
        v-anim="'slide-x-right'"
        v-anim-delay="200"
        href="https://nuxtjs.org/"
        target="_blank"
      >
        <img
          src="/logo-nuxt.svg"
          alt="Nuxtjs"
          width="72"
          height="72"
          class="opacity-50 hover:opacity-100 transition-opacity cursor-pointer"
        />
      </a>
    </c-block-horizontal>
  </c-block>
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
