<template>
  <div>
    <p id="question"> {{ questionText }} </p>
    <div id="answers" v-for="(answer, index) in answers" :key="index">
      <button @click="onAnswerClick"> {{ answer }} </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Question",
  props: ["question"],
  computed: {
    answers() {
      let unshuffled = []
      try{
        for(let alternative of this.question?.incorrect_answers){
          unshuffled.push(alternative)
        }
        let correct = this.question?.correct_answer
        unshuffled.push(correct)
      }catch (error){
        console.log(error)
      }


      let shuffled = unshuffled
          .map((value) => ({ value, sort: Math.random() }))
          .sort((a, b) => a.sort - b.sort)
          .map(({ value }) => value)
      return shuffled
    },
    questionText() {
      return this.question?.question
    }

  },
  methods: {
    onAnswerClick(event) {
      let buttonElement = event.target
      let selectedAnswer = buttonElement.innerText;
      this.$emit('answer-clicked', selectedAnswer)
    }
  },
}

</script>