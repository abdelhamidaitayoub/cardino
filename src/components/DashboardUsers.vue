<template>
  <div class="rounded-md mb-10 border">
    <div
      v-if="!users.length"
      class="
        flex flex-col
        justify-center
        space-y-3
        bg-white
        text-center
        rounded-md
      "
      style="height: 70vh"
    >
      <p class="text-lg text-gray-500">no users</p>
    </div>

    <template v-else>
      <div
        v-for="user in users"
        :key="user._id"
        class="
          grid grid-cols-6
          items-center
          border-b
          px-8
          py-3
          first:rounded-t-md
          last:rounded-b-md
          odd:bg-white
          even:bg-gray-50
        "
      >
        <div class="col-span-3">
          <!--  -->
          <div class="flex items-center space-x-2">
            <div>
              <router-link :to="`/${user.username}`"
                ><img class="rounded-full h-8" :src="user.photo"
              /></router-link>
            </div>
            <div class="leading-tight flex flex-col">
              <p class="text-sm font-normal text-gray-700">
                <router-link :to="`/${user.username}`">{{
                  user.name
                }}</router-link>
              </p>
              <router-link
                class="font-normal text-gray-500"
                :to="`/${user.username}`"
                ><time class="text-xs" datetime="">{{
                  createdAt(user.createdAt)
                }}</time></router-link
              >
            </div>
          </div>
          <!--  -->
        </div>
        <div class="text-gray-500 col-span-1 text-sm justify-self-start">
          <div>
            <p class="px-2 py-1 bg-blue-500 text-white text-sm rounded-md">
              {{ user.role }}
            </p>
          </div>
        </div>
        <div class="text-gray-500 col-span-1 text-sm justify-self-start">
          <div>
            <p class="text-sm rounded-md">
              {{ user.active ? 'Active' : 'Inactive' }}
            </p>
          </div>
        </div>
        <div
          class="
            flex
            space-x-4
            text-gray-500
            col-span-1
            text-sm
            justify-self-end
          "
        >
          <router-link class="text-blue-400" :to="`/${user.username}/manage`"
            >Manage</router-link
          >
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import api from '../store/api'
import moment from 'moment'

export default {
  name: 'DashboardUsers',
  data() {
    return {
      users: [],
    }
  },

  methods: {
    async getUsers() {
      const { data } = await api.get('api/v1/users')
      this.users = data.data.users
    },
    createdAt(createdAt) {
      console.log(createdAt)
      return moment(createdAt).format('ll')
    },
  },

  created() {
    this.getUsers()
  },
}
</script>

<style></style>
