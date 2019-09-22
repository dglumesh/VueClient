<template>
  <div>
    <div class="well">
      <div class="row">
        <div class="col-md-3">
          <strong>Student name:</strong>
        </div>
        <div class="col-md-3">
          {{ student.FirstName }}
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
          <strong>Date of birth:</strong>
        </div>
        <div class="col-md-3">
          {{ student.DOB }}
        </div>
      </div>
</div>
</div>
</template>
<script>
import StudentService from '@/api-services/student.service'
export default {
  name: 'StudentDetails',
  data () {
    return {
      student: {}
    }
  },
  created () {
    StudentService.get(this.$router.currentRoute.params.id).then((response) => {
      this.student = response.data
    })
  }
}
</script>
