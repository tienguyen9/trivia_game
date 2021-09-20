<template>
  <div>
    <h1>Start Screen</h1>
    <Difficulty @difficulty="changeDifficulty"/><br>
    <InfoQuestions @category="changeCategory" @amount="changeAmount"/><br>
    <label>Username:</label>
    <input class="input" v-model="usernameInput" type="text"/><br>
    <button @click="startGame"> Start Game </button>
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
    async startGame() {
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
      if(this.amount && this.category && this.difficulty && this.usernameInput){
        this.$router.push({
          name: "question",
          params: {
            id: 0
          },
          query: {
            username: this.usernameInput,
            amount: this.amount,
            category: this.category,
            difficulty: this.difficulty
          }
        })
      }else{
        alert("need to fill in form!")
      }

    },
  },


}
</script>


