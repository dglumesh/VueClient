<template>
  <b-container fluid>
    <div class="form-wrapper">
      <b-form @submit.prevent="updateStudent">
        <b-form-group
          :label-cols="2"
          breakpoint="md"
          horizontal
          label="First Name of the student:"
          for="name">
          <b-col :md="5">
            <b-input
              id="FirstName"
              v-model="formData.FirstName"
              maxlength="60"
              required />
          </b-col>
        </b-form-group>
         <b-form-group
          :label-cols="2"
          breakpoint="md"
          horizontal
          label="Middle Name of the student:"
          for="name">
          <b-col :md="5">
            <b-input
              id="MiddleName"
              v-model="formData.MiddleName"
              maxlength="60"
              required />
          </b-col>
        </b-form-group>
         <b-form-group
          :label-cols="2"
          breakpoint="md"
          horizontal
          label="Last Name of the student:"
          for="name">
          <b-col :md="5">
            <b-input
              id="LastName"
              v-model="formData.LastName"
              maxlength="60"
              required />
          </b-col>
        </b-form-group>
         <b-form-group
          :label-cols="2"
          breakpoint="md"
          horizontal
          label="Mobile:"
          for="name">
          <b-col :md="5">
            <b-input
              id="Mobile"
              v-model="formData.Mobile"
              maxlength="60"
              required />
          </b-col>
        </b-form-group>
         <b-form-group
          :label-cols="2"
          breakpoint="md"
          horizontal
          label="Telephone:"
          for="name">
          <b-col :md="5">
            <b-input
              id="Telephone"
              v-model="formData.Telephone"
              maxlength="60"
              required />
          </b-col>
        </b-form-group>
         <b-form-group
          :label-cols="2"
          breakpoint="md"
          horizontal
          label="Email:"
          for="name">
          <b-col :md="5">
            <b-input
              id="Email"
              v-model="formData.Email"
              maxlength="60"
              required />
          </b-col>
        </b-form-group>
         <b-form-group
          :label-cols="2"
          breakpoint="md"
          horizontal
          label="Address:"
          for="name">
          <b-col :md="5">
            <b-input
              id="Address"
              v-model="formData.Address"
              maxlength="600"
              required />
          </b-col>
        </b-form-group>

        <b-form-group
          :label-cols="2"
          breakpoint="md"
          horizontal
          label="Date of birth:"
          for="dateOfBirth">
          <b-col :md="5">
            <b-input
              id="DOB"
              v-model="formData.DOB"
              type="date"
              required />
          </b-col>
        </b-form-group>
         <b-form-group
          :label-cols="2"
          breakpoint="md"
          horizontal
          label="NIC:"
          for="name">
          <b-col :md="5">
            <b-input
              id="NIC"
              v-model="formData.NIC"
              maxlength="60"
              required />
          </b-col>
        </b-form-group>
        <br ><br >

        <b-col
          :md="5"
          offset="4">
          <b-button
            type="submit"
            variant="info">Save</b-button>
          <b-button
            :to="{ name: 'StudentList' }"
            variant="danger">Cancel</b-button>
        </b-col>
</b-form>

    </div>
    <b-modal
      ref="alertModal"
      :title="alertModalTitle"
      :ok-only="true"
      @ok="onAlertModalOkClick">
      <p class="my-4">{{ alertModalContent }}</p>
    </b-modal>
  </b-container>
</template>

<script>
import StudentService from '@/api-services/student.service'
export default {
  name: 'StudentUpdate',
  data () {
    return {
      formData: {
        FirstName: '',
        MiddleName: '',
        LastName: '',
        Mobile: '',
        Telephone: '',
        Email: '',
        Address: '',
        DOB: '',
        NIC: ''
      },
      alertModalTitle: '',
      alertModalContent: '',
      isSuccessfully: false
    }
  },
  created () {
    StudentService.get(this.$router.currentRoute.params.id).then((response) => {
      this.formData.StudentID = response.data.StudentID
      this.formData.FirstName = response.data.FirstName
      this.formData.MiddleName = response.data.MiddleName
      this.formData.LastName = response.data.LastName
      this.formData.Mobile = response.data.Mobile
      this.formData.Telephone = response.data.Telephone
      this.formData.Email = response.data.Email
      this.formData.Address = response.data.Address
      this.formData.DOB = response.data.DOB.split('T')[0]
      this.formData.NIC = response.data.NIC
    })
  },
  methods: {
    updateStudent () {
      StudentService.update(this.$router.currentRoute.params.id, this.formData).then(() => {
        this.isSuccessfully = true
        this.alertModalTitle = 'Successfully'
        this.alertModalContent = 'Successfully updated Account Student'
        this.$refs.alertModal.show()
      }).catch((error) => {
        this.isSuccessfully = false
        this.alertModalTitle = 'Error'
        this.alertModalContent = error.response.data
        this.$refs.alertModal.show()
      })
    },
    onAlertModalOkClick () {
      if (this.isSuccessfully) {
        this.$router.push({ name: 'StudentList' })
      }
    }
  }
}
</script>
