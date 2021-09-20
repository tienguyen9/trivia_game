<template>
  <div>
    <h1>Start Screen</h1>
    <Difficulty @difficulty="changeDifficulty"/><br>
    <InfoQuestions @category="changeCategory" @amount="changeAmount"/><br>
    <label>Username:</label>
    <input class="input" v-model="usernameInput" type="text"/><br>
    <button @click="registerUser"> Start Game </button>
  </div>
</template>

<script>
import {UserAPI} from "@/api/UserAPI";
import Difficulty from "./Difficulty";
import InfoQuestions from "./InfoQuestions";

export default {
  name: "StartScreen.vue",
  components: {InfoQuestions, Difficulty},
  data() {
    return {
      usernameInput: ""
    };
  },
  methods: {
    changeDifficulty(difficulty){
      console.log(difficulty)
      this.difficulty = difficulty;
    },

    changeAmount(amount){
      console.log(amount)
      this.amount = amount;
    },

    changeCategory(category){
      console.log(category)
      this.category = category;
    },
    async registerUser() {
      console.log(this.difficulty)
      try{
        const registerDetails = {
          "username": this.usernameInput,
          "highScore": 0
        }
        await UserAPI.postNewUser(registerDetails)
      }
      catch(e){
        console.log("error")
      }

      this.$router.push({
        path: "/question/0",
        params: {
          questionId: 1
        },
        query: {
          amount: this.amount,
          category: this.category,
          difficulty: this.difficulty
        }
      })
    },
  },


}
</script>


