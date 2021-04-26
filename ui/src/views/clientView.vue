<template>
<div class="container mb-5">
      <div class="twin-input">
        <b-form-group>
                <label>First Name</label>
                <b-form-input v-model="arrayItem.firstname"></b-form-input>
          </b-form-group>
        <b-form-group>
                <label>Surname</label>
                <b-form-input v-model="arrayItem.surname"></b-form-input>
          </b-form-group>
          <b-form-group>
              <label>Address</label>
              <b-form-input v-model="arrayItem.address"></b-form-input>
          </b-form-group>
            <b-form-group>
              <label>city</label>
              <b-form-input v-model="arrayItem.city"></b-form-input>
          </b-form-group>
            <b-form-group>
              <label>Postcode</label>
              <b-form-input v-model="arrayItem.postcode"></b-form-input>
          </b-form-group>
            <b-form-group>
              <label>County</label>
              <b-form-input v-model="arrayItem.county"></b-form-input>
          </b-form-group>
            <b-form-group>
              <label>DOB</label>
              <b-form-input v-model="arrayItem.DOB"></b-form-input>
          </b-form-group>
            <b-form-group>
              <label>Age</label>
              <b-form-input v-model="arrayItem.age"></b-form-input>
          </b-form-group>
            <b-form-group>
              <label>mobile</label>
              <b-form-input v-model="arrayItem.mobile"></b-form-input>
          </b-form-group>
            <b-form-group>
              <label>Email Address</label>
              <b-form-input v-model="arrayItem.emailaddress"></b-form-input>
          </b-form-group>
        </div>
         <b-dropdown-item><router-link :to="{ path: '/clientCase/' + arrayItem._id }">Case</router-link></b-dropdown-item>
      </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'clientView',
        data() {
        return {
            arrayItem: {
            firstname: '',
            surname: '',
            address: '',
            city: '',
            postcode: '',
            county: '',
            DOB: '',
            age: '',
            mobile: '',
            emailaddress: '',
            }
        }
    },
    methods: {
      getClient() {
      this.id = this.$router.currentRoute.params.id;
      axios.get('http://localhost:4001/api/client/' + this.id)
       .then(res => { this.arrayItem = res.data})
    },
    },
    beforeMount() {
    this.getClient();
  }
  }
</script>

<style lang="scss" scoped>

</style>