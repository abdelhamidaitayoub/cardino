<template>
  <article
    class="
      card__body
      flex flex-col
      space-y-3
      rounded
      px-5
      py-4
      bg-gray-50
      border-2 border-gray-700
      relative
      shadow-lg
    "
  >
    <div class="card__cover" v-if="data === 1">cover here</div>
    <div class="card__top">
      <div class="card__meta flex gap-2">
        <div>
          <a href="/belidenikhil"
            ><img
              class="rounded-full h-10"
              src="https://res.cloudinary.com/practicaldev/image/fetch/s--flVHkGgK--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/667713/3e1c9da8-5504-4ef7-9771-f1ab65eb80c2.jpg"
          /></a>
        </div>
        <div class="leading-tight">
          <p class="text-sm font-normal text-gray-700">
            <a href="/belidenikhil">NikhilBelide</a>
          </p>
          <a
            class="text-sm font-normal text-gray-500"
            href="/belidenikhil/how-to-add-dark-mode-to-a-website-4646"
            ><time datetime="">Jul 27 (16 hours ago)</time></a
          >
        </div>
      </div>
    </div>
    <div class="card__indention space-y-2 px-8">
      <h3 class="card__title text-gray-900 font-bold text-2xl">
        <a href="/belidenikhil/how-to-add-dark-mode-to-a-website-4646"
          ><span
            >I am having a problem with downloading.. Git on may Mac</span
          ></a
        >
      </h3>
      <div class="card__tags flex gap-2 text-gray-500">
        <a class="tag" href="/t/webdev"
          ><span class="tag__prefix">#</span>webdev</a
        ><a class="tag" href="/t/codenewbie"
          ><span class="tag__prefix">#</span>codenewbie</a
        ><a class="tag" href="/t/javascript"
          ><span class="tag__prefix">#</span>javascript</a
        ><a class="tag" href="/t/beginners"
          ><span class="tag__prefix">#</span>beginners</a
        >
      </div>
      <div class="card__bottom flex justify-between text-sm text-gray-500">
        <div class="card__details flex space-x-2">
          <a
            class="flex"
            href="/belidenikhil/how-to-add-dark-mode-to-a-website-4646"
            ><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"
              ></path></svg
            ><span title="Number of reactions"
              >15<span>&nbsp;reactions</span></span
            ></a
          ><a
            class="flex"
            href="/belidenikhil/how-to-add-dark-mode-to-a-website-4646#comments"
            ><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"
              ></path></svg
            ><span class="inline s:hidden">0</span
            ><span>&nbsp;Add comment</span></a
          >
        </div>

        <p class="card__tertiary mr-2">8 min read</p>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Card',
  props: ['data'],
}
</script>

<style lang="scss"></style>
