<template>
    <Headbar/>
    <div class="flex justify-center items-start pt-7 w-full lg:px-20  main_container bg-[#F8F8F8]" 
    >
      <Chats/>
      <ChatBox/>
      <div class="ms-10 flex-1 lg:block hidden">
        <div class="bg-[#fff] p-3 rounded-lg my-2">
          <h4 class="font-semibold mb-2">Advertising</h4>
          <img src="/prismaimage.png" alt="image">
          <p class="mt-2 text-center text-blue-700">Vist Website</p>
        </div>
        <div class="flex gap-2 mt-5">
          <p class="underline font-light">Privacy Terms</p>
          <p class="underline font-light">Advertising</p>
          <p class="underline font-light">Cookies</p>
        </div>
        <p class="font-light">TalentsWide  &copy;  {{ new Date().getFullYear() }}</p>
      </div>
    </div>
</template>
<script>
import Headbar from '../../components/Headbar.vue'
import Chats from '../../components/Chats.vue';
import ChatBox from '../../components/ChatBox.vue';
export default{
    components:{
    Headbar,
    Chats,
  ChatBox
    }
}
</script>
<style lang="scss">
.main_container{
  height: calc(100vh - 82px);
}
</style>