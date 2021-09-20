<template>
  <div>
    <h1>Questions!</h1>
    <p> {{ questions }} </p>

    <question id="question" :question="questions[0]" @answer-clicked="handleNextQuestion"/>
  </div>

</template>

<script>
import {getTriviaGame} from "../../api/TriviaAPI";
import Question from "./Question";

export default {
  name: "QuestionPage",
  components: {Question},
  async created() {
    //TODO input from StartScreen later
    const [error, questions] = await getTriviaGame(10, 9, "medium")
    this.error = error
    this.questions = questions
  },
  data() {
    return{
      questions: ""
    }

  },
  methods: {
    handleNextQuestion(answer){
      console.log(answer)
      this.$router.push({
        path: "/",
        query: {
          foo: 123
        }
      })
    }
  }
}
</script>