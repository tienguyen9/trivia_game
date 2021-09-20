<template>
  <div>
    <h1>Result</h1>
      <div v-for="(question, index) in questions">
        <p>{{question.question}}</p>
        <p class="correct">{{question.correct_answer}}</p>
        <p v-for="ans in question.incorrect_answers">{{ans}}</p>
        <p>Your answer: {{answers[index+1]}}</p>
        <p>___________________________________</p>
      </div>
    <p>Score: {{score}}</p>
    <button @click="backToStart"> Go back to start screen </button>
  </div>


</template>

<script>

import {getUserByName, UserAPI} from "../../api/UserAPI";

export default {
  name: "QuestionPage",
  components: {},
  async created() {
    this.score = 0
    this.questions = JSON.parse(this.$route.query.questionData)
    this.answers = this.$route.query.answers
    this.username =this.$route.query.username
        console.log(this.questions)
    console.log(this.answers)

    for(let i = 0; i < this.questions.length; i++){
      if(this.questions[i].correct_answer == this.answers[i+1]){
        this.score++;
      }
    }

    //TODO Finish user db highscore
    const user = await getUserByName(this.username);
    this.user = user
    console.log(this.user[0]["highScore"])
    if(this.user[0]["highScore"] < this.score){
      UserAPI.updateHighScore(this.score, this.username)
    }
    const user2 = await getUserByName(this.username);
    console.log(user2)
  },
  data() {
    return{
      questions: [],
    }

  },
  methods: {
    backToStart(){
      this.$router.push({
        name: "start",
      })
    }
  }
}
</script>

<style scoped>
.correct{
  color: red;
}
</style>
