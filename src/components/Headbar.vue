
<template>
  <div class="shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md">
 <nav class="navbar mx-20 p-5 flex md:justify-between justify-center items-center ">
  <!-- part1 -->
  <div class="flex gap-5 items-center md:w-auto w-full">
    <img src="/settings.svg" alt="settings">
    <div class="border border-black flex p-2 gap-3 rounded-3xl w-full" >
     <img src="/search.svg" alt="search">
      <input type="text" name="" id="" class="focus:border-none focus:outline-none" placeholder="Search">
    </div>
  </div>
   <!-- part 2 -->
   <ul class="lg:flex hidden gap-5"> 
    <li v-for="{title,icon} in navbarData" :key="title" class="flex gap-3 items-center cursor-pointer">
     <img :src="icon" alt="icon"> 
      <span class="font-semibold">{{ title }}</span>
      <span class="w-6 h-6 bg-red-500 text-white rounded-full flex justify-center items-center" v-if="title=='Notification'">3</span>
    </li>
   </ul>
   <!--part 3 -->
   <div class="md:flex hidden gap-4">
    <div class="flex gap-3 items-center">
     <img src="/tool.svg" alt="">
      <span class="font-semibold">Tools</span>
    </div>
    <div class="profile flex items-center gap-2">
      <img src="/profile.jpeg" alt="person" class="rounded-full w-10 h-10 border border-black">
      <span class="font-semibold">Arslan jafar</span>
      <img src="/chevrons-down.svg" alt="icon" class="cursor-pointer">
    </div>
   </div>
 </nav>
 </div>

</template>
<script>
import {} from '@heroicons/vue'
export default {
  data() {
    return {
      navbarData: [
        { title: "Homepage", icon: "/home.svg", route: "" },
        { title: "Connections", icon: "/user.svg", route: "" },
        { title: "Messages", icon: "/message-square.svg", route: "" },
        { title: "Notification", icon: "/bell.svg", route: "",notif:"3" },
      ],
    };
  },
};
</script>
<style lang="scss">
 .navbar{
  display: flex;
 }
</style>
