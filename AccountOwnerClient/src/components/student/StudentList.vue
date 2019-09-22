<template>
  <div>
   <div>
    <b-row>
      <b-col
        md="2"
        offset-md="10">
        <br/>
        <router-link :to="{ name: 'StudentCreate' }" ><b-button variant="primary">Create student</b-button></router-link>
      </b-col>
    </b-row>
    <br>
    <b-row>
      <b-col md="12">
        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>

                <th>First Name</th>
                <th>Middle Name</th>
                <!-- <th>Last Name</th> -->
                <th>Mobile</th>
                <th>Telephone</th>
                <th>Email</th>
                <th>Address</th>
                <th>DOB</th>
                <th>NIC</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
             <student-list-row
                v-for="student in students"
                :key="student.id"
                :student="student"
                @details="detailsStudent"
                @update="updateStudent"
                @delete="deleteStudent"
                />
            </tbody>
          </table>
        </div>
      </b-col>
    </b-row>
    <b-modal
      ref="deleteConfirmModal"
      title="Confirm your action"
      @ok="onDeleteConfirm"
      @hide="onDeleteModalHide">
      <p class="my-4">Are you sure you want to delete this Student?</p>
    </b-modal>

    <b-modal
      ref="alertModal"
      :title="alertModalTitle"
      :ok-only="true">
      <p class="my-4">{{ alertModalContent }}</p>
    </b-modal>
  </div>
  </div>
</template>
<script>
import StudentService from '@/api-services/student.service'
import StudentListRow from '@/components/student/StudentListRow'
export default {
  name: 'StudentList',
  components: {
    StudentListRow
  },
  data () {
    return {
      students: [],
      selectedStudentId: null,
      alertModalTitle: '',
      alertModalContent: ''
    }
  },
  created () {
    this.fetchStudents()
  },
  methods: {
    detailsStudent (StudentID) {
      this.$router.push({ name: 'StudentDetails', params: { id: StudentID } })
    },
    updateStudent (StudentID) {
      this.$router.push({ name: 'StudentUpdate', params: { id: StudentID } })
    },
    deleteStudent (StudentID) {
      this.selectedStudentId = StudentID
      this.$refs.deleteConfirmModal.show()
    },
    fetchStudents () {
      StudentService.getAll().then((response) => {
        this.students = response.data
      })
    },
    onDeleteConfirm () {
      StudentService.delete(this.selectedStudentId).then(() => {
        this.alertModalTitle = 'Successfully'
        this.alertModalContent = 'Successfully deleted Account Student'
        this.$refs.alertModal.show()
        this.fetchStudents()
      }).catch((error) => {
        this.alertModalTitle = 'Error'
        this.alertModalContent = error.response.data
        this.$refs.alertModal.show()
      })
    },
    onDeleteModalHide () {
      this.selecteStudentId = null
    }
  }
}
</script>
