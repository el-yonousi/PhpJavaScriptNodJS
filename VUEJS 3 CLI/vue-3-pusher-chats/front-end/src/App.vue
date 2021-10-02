<template>
  <div class="chat">
    <div class="chat-container">
      <div class="chat-container-card">
        <div class="chat-container-card-header">
          Conversation (<input type="text" v-model="username" />) with {{otheruser}}
        </div>
        <div class="chat-container-card-body">
          <div
            class="chat-container-card-body-conver"
            v-for="message in messages"
            :key="message"
          >
            <div
              class="chat-container-card-body-conver-message"
              :class="message.username === username ? 'currentuser' : 'otheruser'"
            >
              <!-- <small>{{ message.username }}</small> -->
              <!-- <br /> -->
              <span>{{ message.message }}</span>
            </div>
          </div>
        </div>
        <div class="chat-container-card-footer">
          <form @submit.prevent="submit">
            <input v-model="message" type="text" placeholder="write a message" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import Pusher from "pusher-js";

export default {
  name: "App",
  setup() {
    const username = ref(null);
    const messages = ref([]);
    const message = ref(null);
    const otheruser = ref(null);

    onMounted(() => {
      Pusher.logToConsole = true;

      const pusher = new Pusher("bbcd2552fae8ce2d72d5", {
        cluster: "eu",
      });

      var channel = pusher.subscribe("chat");
      channel.bind("message", (data) => {
        // alert(JSON.stringify(data));
        otheruser.value = data.message.username
        messages.value.push(data.message);
      });
    });

    const submit = async () => {
      await fetch("http://127.0.0.1:8000/api/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username.value,
          message: message.value,
        }),
      });
      message.value = "";
    };

    return { username, messages, message, submit, otheruser };
  },
};
</script>

<style lang="css" scoped>
.chat {
  display: grid;
  place-items: center;
  padding: 16px;
}
.chat-container {
  width: 100%;
  height: 95vh;
  display: flex;
  justify-content: center;
}
.chat-container-card {
  width: 60%;
  border: 4px solid #ffaa00;
  border-radius: 4px;
  background-color: #2f2f2f;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.chat-container-card-header {
  background-color: tomato;
  padding: 16px;
  text-align: center;
}
.chat-container-card-header > input {
  border: none;
  background-color: tomato;
  width: fit-content;
  font-weight: 700;
  outline: none;
}
.chat-container-card-body {
  overflow-y: auto;
  height: 100vh;
  padding: 10px;
}
.chat-container-card-body-conver {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.chat-container-card-body-conver-message {
  padding: 3px;
  width: fit-content;
}
.currentuser {
  background-color: #ffaa00;
  height: fit-content;

  border-start-start-radius: 6px;
  border-end-end-radius: 6px;
}
.otheruser {
  background-color: #3f3f3f;
  height: fit-content;
  align-self: flex-end;
  border-end-start-radius: 6px;
  border-start-end-radius: 6px;
}
.chat-container-card-footer {
  background-color: teal;
  padding: 16px;
}
.chat-container-card-footer > form > input {
  width: 96%;
  padding: 10px;
  border: none;
  outline: none;
  border-radius: 4px;
}
</style>
