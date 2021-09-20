<template>
  <div>
    <h1>Question {{questionId +1 }} of {{questions.length}}</h1>
    <p hidden> {{ questions }} </p>

    <question id="question" :question="questions[questionId]" @answer-clicked="handleNextQuestion"/>
  </div>

</template>

<script>
import {getTriviaGame} from "../../api/TriviaAPI";
import Question from "./Question";

export default {
  name: "QuestionPage",
  components: {Question},
  async created() {
    this.questionId = parseInt(this.$route.params.id)
    this.username = this.$route.query.username
    if(this.questionId == 0){
      this.answers = ["1"];
      const [error, questions] = await getTriviaGame(
          this.$route.query.amount, this.$route.query.category, this.$route.query.difficulty)
      this.error = error
      this.questions = questions
    }
    else{
      console.log(this.$route.query.answers)
      this.answers = this.$route.query.answers
      this.questions = JSON.parse(this.$route.query.questionData)
    }



  },
  data() {
    return{
      questions: [],
    }

  },
  methods: {
    handleNextQuestion(answer){
      this.questionId++
      this.answers.push(answer)
      console.log(this.answers)
      let nextPage = "question"
      if(this.questionId >= this.questions.length){
        nextPage = "result"
      }
      this.$router.push({
        name: nextPage,
        params: {
          id: this.questionId
        },
        query: {
          username: this.username,
          amount: this.$route.query.amount,
          category: this.$route.query.category,
          difficulty: this.$route.query.difficulty,
          questionData: JSON.stringify(this.questions),
          answers: this.answers
        }
      })

      //refresh
      this.$router.go(0);


    }
  },
}
</script>