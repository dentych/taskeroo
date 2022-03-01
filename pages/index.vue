<template>
  <div>
    <div class="px-8 mt-8 text-center" v-if="!groupID">
      <p class="text-lg">Du er ikke i et team!</p>
      <p class="mt-4"><a href="/group/create" class="text-violet-500">Opret ny gruppe</a>, eller få en ven til at
        invitere
        dig til deres gruppe.</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  data() {
    return {
      name: "Hey",
      groupID: null,
    }
  }
})
</script>
