<template>
  <div>

    <label>Number of questions</label>
    <select id="questionAmount" v-model="amountSelect" @change="handleSelectQuestionAmount">
      <option v-for="(value, index) in amountOptions" :key=index :value="value">
        {{ value }}
      </option>
    </select><br>

    <label>Category</label>
      <select id="categories" v-model="categorySelect" @change="handleSelectCategory">
      <option v-for="category in categories" :key="category.id" :value="category">
        {{ category.name }}
      </option>
    </select>


  </div>
</template>

<script>

import {getTriviaCategories} from "../../api/TriviaAPI";

export default {
  name: "InfoQuestions",
  async created() {
    const [error, categories] = await getTriviaCategories()
    this.error = error
    this.categories = categories
  },
  data() {
    const amountOptions = [10, 20, 30, 40, 50]
    const defaultCategory = {id: 9, name: "General Knowledge"}
    return {
      amountSelect: "",
      amountOptions,
      categorySelect: "",
      categories: ""
    }
  },
  methods: {
    handleSelectQuestionAmount() {
      this.$emit('amount', this.amountSelect)
    },
    handleSelectCategory() {
      this.$emit('category', this.categorySelect["id"])
    }
  }
}

</script>

<style scoped>

</style>