<template>
  <tr>
                <td>{{ student.FirstName }}</td>
                <td>{{ student.MiddleName }}</td>
                <!-- <td>{{ student.LastName }}</td> -->
                 <td>{{ student.Mobile }}</td>
                  <td>{{ student.Telephone }}</td>
                   <td>{{ student.Email }}</td>
                    <td>{{ student.Address }}</td>
                     <td>{{ student.DOB }}</td>
                     <td>{{ student.NIC }}</td>
    <td>
      <div class="mt-3">
    <b-button-group>
      <b-button squared  size="sm" variant="warning" @click="onDetailsClick">Details</b-button><b-button squared  size="sm" variant="success" @click="onUpdateClick">Update</b-button><b-button squared  size="sm" variant="danger" @click="onDeleteClick">Delete</b-button>
   </b-button-group>
  </div>
    </td>
  </tr>
</template>
<script>
export default {
  name: 'StudentListRow',
  props: [ 'student' ],
  methods: {
    onDetailsClick () {
      this.$emit('details', this.student.StudentID)
    },
    onUpdateClick () {
      this.$emit('update', this.student.StudentID)
    },
    onDeleteClick () {
      this.$emit('delete', this.student.StudentID)
    }
  }
}
</script>
