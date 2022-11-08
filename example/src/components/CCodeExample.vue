<template>
  <c-block class="border-y border-gray-900">
    <div class="mb-xl">
      <h2
        v-anim="'slide-y-top'"
        class="mb-sm bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-200"
      >
        I mean... really simple.
      </h2>
      <p
        v-anim="'slide-y-bottom'"
        v-anim-delay="200"
      >
        You only need <strong>3 props</strong> to animate <strong>any</strong> element.
      </p>
    </div>

    <div class="grid gap-lg grid-cols-2 grid-rows-1">
      <div class="relative z-10">
        <div
          v-anim
          class="relative overflow-hidden flex-row border border-gray-800 rounded-sm bg-black/75 backdrop-blur-md"
        >
          <div class="flex gap-xs border-b border-gray-800 p-sm w-full">
            <div class="w-sm h-sm bg-gray-600 rounded-full"></div>
            <div class="w-sm h-sm bg-gray-600 rounded-full opacity-50"></div>
            <div class="w-sm h-sm bg-gray-600 rounded-full opacity-25"></div>
          </div>

          <pre
            v-anim
            v-anim-delay="100"
            class="flex"
          >
          <code class="flex-auto relative block py-md px-4xl overflow-auto m:text-14 t:text-16 d:text-18">
<span
  v-anim
  v-anim-delay="300"
><span class="token symbol">&lt;</span><span class="token c-name">buscemi-greet</span></span>
<span
  v-anim="'slide-x-left'"
  v-anim-delay="500"
  class="token c-prop"
>  v-anim="<span v-anim="'slide-x-left'" v-anim-delay="600" class="token c-value">'slide-x-left'</span>"</span>
<span
  v-anim="'slide-x-left'"
  v-anim-delay="800"
  class="token c-prop"
>  v-anim-delay="<span v-anim="'slide-x-left'" v-anim-delay="900" class="token c-value">200</span>"</span>
<span
  v-anim="'slide-x-left'"
  v-anim-delay="1000"
  class="token c-prop"
>  v-anim-duration="<span v-anim="'slide-x-left'" v-anim-delay="1100" class="token c-value">1500</span>"</span>
<span
  v-anim
  v-anim-delay="1200"
  class="token symbol"
>&gt;</span>
<span
  class="token"
  v-anim
  v-anim-delay="1400"
>  How do you do, fellow kids? 👋</span>
<span
  v-anim
  v-anim-delay="1600"
><span class="token symbol">&lt;</span><span class="token c-name">/buscemi-greet</span><span class="token symbol">&gt;</span></span>
          </code>
        </pre>
        </div>
      </div>

      <div class="-translate-x-4xl translate-y-xl z-0">
        <div
          v-anim="'slide-x-left'"
          v-anim-delay="1800"
          v-anim-duration="1500"
          class="h-full flex items-center justify-center rounded-sm bg-blue-700 text-slate-50"
        >
          <div class="font-bold text-2xl text-center">
            <img
              src="/card.jpg"
              alt=""
              width="80"
              height="80"
              class="rounded-full block mb-sm m-auto"
            />
            <span>How do you do, fellow kids? 👋</span>
          </div>
        </div>
      </div>
    </div>
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
