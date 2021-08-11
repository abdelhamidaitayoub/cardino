<template>
  <base-card>
    <div>
      <div class="flex gap-2">
        <div>
          <router-link :to="`/${card.user.username}`"
            ><img class="rounded-full h-10" :src="card.user.photo"
          /></router-link>
        </div>
        <div class="leading-tight">
          <p class="text-sm font-normal text-gray-700">
            <router-link :to="`/${card.user.username}`">{{
              card.user.name
            }}</router-link>
          </p>
          <router-link
            class="text-sm font-normal text-gray-500"
            :to="`/${card.user.username}/${card.slug}`"
            ><time datetime="">Jul 27 (16 hours ago)</time></router-link
          >
        </div>
      </div>
    </div>
    <div class="space-y-2 px-8">
      <h3 class="text-gray-900 font-bold text-2xl group-hover:text-blue-500">
        <router-link :to="`/${card.user.username}/${card.slug}`"
          ><span>{{ card.title }}</span></router-link
        >
      </h3>
      <div class="flex gap-5 text-sm text-gray-500">
        <router-link v-for="(tag, i) in card.tags" :key="i" :to="`/t/${tag}`"
          ><span>#</span>{{ tag }}</router-link
        >
      </div>
      <div class="flex justify-between text-sm text-gray-500">
        <div class="flex space-x-4">
          <router-link
            class="flex items-center"
            :to="`/${card.user.username}/${card.slug}`"
            ><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"
              ></path></svg
            ><span title="Number of reactions"
              >{{ Math.floor(Math.random() * 20)
              }}<span>&nbsp;reactions</span></span
            ></router-link
          ><router-link
            class="flex items-center"
            :to="`/${card.user.username}/${card.slug}`"
            ><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"
              ></path></svg
            ><span class="inline s:hidden">0</span
            ><span>&nbsp;comments</span></router-link
          >
        </div>

        <p class="mr-2">{{ card.readingTime }}</p>
      </div>
    </div>
  </base-card>
</template>

<script>
import BaseCard from '../ui/BaseCard.vue'
export default {
  components: { BaseCard },
  name: 'Card',
  props: ['card'],
}
</script>

<style lang="scss"></style>
