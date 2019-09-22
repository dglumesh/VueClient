<template>
  <p class="homeText">
    WELCOME TO Student Registration APPLICATION
  </p>
</template>
<script>
import StudentService from '@/api-services/student.service'
export default {
  name: 'Home',
  created () {
    StudentService.getAll().then((response) => {
      console.log(response.data)
    }).catch((error) => {
      console.log(error.response.data)
    })
  }
}
</script>

<style scoped>
.homeText{
    font-size: 35px;
    color: red;
    text-align: center;
    position: relative;
    top:30px;
    text-shadow: 2px 2px 2px gray;
}
</style>
