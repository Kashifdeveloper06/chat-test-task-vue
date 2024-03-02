<template>
  <section class=" h-full flex-[2] rounded-r-lg rounded-l-none shadow-[0_3px_10px_rgb(0,0,0,0.2)]  bg-white
  overflow-y-scroll scrollbar-w-2 scrollbar-track-gray-100 scrollbar-thumb-gray-500 hover:scrollbar-thumb-gray-800
  relative
  ">
    <div :class="person.messages.length>15?'fixed  max-w-[650px] flex justify-between z-50 bg-white  w-full shadow-[0_3px_10px_rgb(0,0,0,0.2)]  items-center':'flex justify-between z-50 bg-white  w-full p-3  items-center'">
      <div v-if="person !== 'undefined'">
        <h4 class="font-semibold">{{ person?.title || "arslan jaffar" }}</h4>
        <div class="flex items-center gap-2">
          <div class="online-dot"></div>
          <p>Online</p>
        </div>
      </div>
      <img src="/more-horizontal.svg" alt="icon" class="cursor-pointer">
    </div>

    <div :class="person.messages.length>4 ?'pt-10 bg-[#F8F8F8] p-2  flex justify-center items-center rounded-lg flex-col mt-5':'bg-[#F8F8F8] p-2 pt-60 flex justify-center items-center rounded-lg flex-col mt-5'" >
      <div :class="person.messages.length>4?'hidden flex-col items-center pt-10 gap-3':'flex flex-col items-center pt-10 gap-3'" v-if="person !== 'undefined'">
        <img :src="person?.img" :alt="person?.title" class="w-20 h-20 rounded-full border">
        <h4 class="font-semibold">{{ person?.title }}</h4>
        <p>Development Manager at Tastemario</p>
      </div>
      <p :class="person.messages.length>0?'hidden':'block'">{{ new Date() }}</p>

      <div class="ps-5 my-2 self-start flex gap-2 " v-if="getMessagesForPerson().length !== 0" v-for="message in getMessagesForPerson()">
        <img :src="person?.img" :alt="person?.title" class="rounded-full w-7 h-7 border self-end">
        <p class="bg-white p-2 rounded-3xl self-start font-semibold ">
          {{ message }}
        </p>
      </div>

      <div class="bg-white p-3 rounded-lg flex items-center w-full gap-2 mt-5 sticky bottom-0 left-0 right-0 ">
        <div class="flex w-full items-center gap-2">
          <figure class="border rounded-full p-2">
            <img src="/plus.svg" alt="icon">
          </figure>
          <div class="flex-[2] w-full border p-2 rounded-3xl flex justify-between items-center ab">
            <input type="text" name="" id="" placeholder="Message" class="w-[90%] focus:border-none focus:outline-none" v-model="messageInput" @keyup.enter="sendMessage">
            <img src="/smile.svg" alt="icon">
          </div>
        </div>
        <figure class="border rounded-full p-2">
          <img src="/mic.svg" alt="icon">
        </figure>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    person() {
      return this.$store.getters.getPersonById(this.chatId);
    },
  },
  data() {
    return {
      messages: [
        "hi"
      ],
      messageInput: "",
      chatId: this.$route.params.id,
    };
  },
  methods: {
    sendMessage() {
      if (this.messageInput.trim() !== "") {
        this.$store.commit("addMessage", { personId: this.chatId, message: this.messageInput });
        this.messageInput = "";
      }
    },
    getMessagesForPerson() {
      return this.$store.getters.getMessagesByPersonId(this.chatId);
    },
  },
  watch: {
    '$route.params.id'(newId) {
      this.chatId = newId;
    },
  },
};
</script>

<style>
  .online-dot {
    width: 10px;
    height: 10px;
    background-color: #00ff00; /* Green color */
    border-radius: 50%;
    border: 2px solid #ffffff; /* White border */
  }
</style>
