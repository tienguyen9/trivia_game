<template>
  <div id="difficulty">
    <input type="radio" id="easy" value="easy" v-model="diff" @change="updateLevel">
    <label for="easy">Easy</label>
    <br>
    <input type="radio" id="medium" value="medium" v-model="diff" @change="updateLevel">
    <label for="medium">Medium</label>
    <br>
    <input type="radio" id="hard" value="hard" v-model="diff" @change="updateLevel">
    <label for="hard">Hard</label>
    <br>
    <span>Picked: {{ diff }}</span>
  </div>
</template>

<script>
import {getTriviaGame} from "../../api/TriviaAPI";

export default {
  name: "Difficulty",
  data() {

    return{
      diff: "",

    }
  },
  methods: {
    updateLevel(){
      this.$emit('difficulty', this.diff)
    }
  }
}
</script>

<style scoped>

</style>