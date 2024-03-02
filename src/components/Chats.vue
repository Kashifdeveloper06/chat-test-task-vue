<template>
<div class=" h-full flex-1 rounded-lg rounded-r-none border shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white
overflow-y-scroll scrollbar-w-2 scrollbar-track-gray-100 scrollbar-thumb-gray-500 hover:scrollbar-thumb-gray-800
">
<!--  -->
<div class="flex justify-between items-center w-full px-5  p-2">
 <h3>Message</h3>
 <div class="flex gap-3">
     <figure class="border rounded-full flex items-center justify-center p-2 cursor-pointer">
         <img src="/plus.svg" alt="plus">
    </figure>
<img src="/more-horizontal.svg" alt="icon">
</div>
</div>

<!--  -->
<div class="flex justify-between items-center  px-5  p-2">
    <img src="/plus.svg" alt="plus">
    <input type="text" name="" id="" placeholder="search message" class="focus:border-none focus:outline-none">
    <img src="/align-center.svg" alt="icon">
</div>
<!-- chats persons -->
<router-link v-for="person in persons" :key="person.id" :to="{ name: 'chat', params: { id: person.id } }" class="border-t border-b flex gap-3 p-5 px-0 mx-2">
  <img :src="person.img" :alt="person.title" class="border rounded-full w-10 h-10">
  <div>
     <h4 class="font-semibold">{{ person.title }}</h4>
     <!-- // last message -->
     <p>{{ person?.messages[person?.messages.length - 1]?.substring(0, 10) }}</p>

     <!-- <p>{{ person?.messages[person?.messages.length-1].substring(0,10) }}</p>   -->
  </div>
  <!-- date -->
  <span class="ms-6">08 Jan</span>
</router-link>

</div>
</template>

<script>
export default {
  computed: {
    persons() {
      return this.$store.getters.getPersons;
    },
  },
};
</script>


<style lang="scss">
</style>