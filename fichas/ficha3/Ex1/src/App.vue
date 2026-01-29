<template>
  <StudentCard v-for="student in students" :key="student" :name="student.name" :studentNumber="student.studentNumber" :course="student.course" :year="student.year"/>
</template>

<script>
  import StudentCard from './components/StudentCard.vue';

  export default {
    name: "App",
    components: {
      StudentCard
    },

    data() {
      return {
        students: [
          {name: "Francisco", studentNumber: "324234329", course: "Psicologia", year: 2},
          {name: "Maria", studentNumber: "329049120", course: "Engenharia Informática", year: 1},
          {name: "Catarina", studentNumber: "32132109", course: "Ciências Biomédicas", year: 3},
        ]
      }
    }
  }
</script>