<template>
  <div>
    <div class="px-8 mt-8 text-center" v-if="!groupID">
      <p class="text-lg">Du er ikke i et team!</p>
      <p class="mt-4"><a href="/group/create" class="text-violet-500">Opret ny gruppe</a>, eller få en ven til at
        invitere
        dig til deres gruppe.</p>
    </div>
    <div class="fixed bottom-0 w-full" v-if="groupID">
      <div class="flex flex-col">
        <NuxtLink to="/task/create" class="p-2 bg-pink-500 ml-auto rounded-full text-white m-3">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
          </svg>
        </NuxtLink>
      </div>
    </div>
    <div class="flex flex-col w-full px-4 mt-8">
      <div class="flex flex-col space-y-6 mb-16" v-if="tasks && tasks.length">
        <div class="border border-pink-300 rounded-md bg-white px-4 py-2 flex flex-col" v-if="tasks"
             v-for="task in tasks">
          <h1 class="text-lg font-semibold">{{ task.title }}</h1>
          <p class="mt-2">{{ task.description }}</p>
          <div class="flex items-center mt-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
            </svg>
            <p class="ml-2" v-if="task.assigneeName">{{ task.assigneeName }}</p>
            <p class="ml-2" v-else>Fælles</p>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor" v-if="task.rotatingAssignee">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                    d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
            </svg>
          </div>
          <div class="w-full bg-gray-200 h-2.5 rounded-full mt-2">
            <div class="bg-pink-500 rounded-full h-2.5" :style="`width: ${task.percentageLeft * 100}%`"></div>
          </div>
          <p class="text-sm mt-2">
            {{ task.daysLeft }}
            <template v-if="task.daysLeft === 1">dag</template>
            <template v-else>dage</template>
            tilbage ({{ task.dueDate }})
          </p>
          <div class="flex ml-auto">
            <a @click="deleteTask()" class="h-6 w-6 mt-2 mr-4 text-pink-600">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
              </svg>
            </a>
            <NuxtLink :to="'/task/' + task.id + '/edit'" class="mt-2 text-pink-600 h-6 w-6 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
              </svg>
            </NuxtLink>
            <button class="mt-1 bg-pink-600 text-white px-4 py-1 rounded"
                    @click='completeTask()'>Udført
            </button>
          </div>
        </div>
      </div>
      <div class="flex flex-col text-center px-4" v-else>
        <p class="text-lg">Du har ingen opgaver!</p>
        <p class="mt-4">Opret din første opgave ved at trykke på krydset, nederst til højre!</p>
      </div>
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
      groupID: "1234",
      tasks: [{
        id: "1234",
        title: "Vaske 30 grader",
        description: "bla bla",
        daysLeft: 5,
        dueDate: "mandag, 7. marts 2022",
        percentageLeft: 0.9021,
      }],
    }
  },
  methods: {
    deleteTask() {
      alert("Deleting")
    },
    completeTask() {
      alert("Completing")
    },
  }
})
</script>
