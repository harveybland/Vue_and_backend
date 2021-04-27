<template>
    <div class="container">
      <h3>Clients Profile</h3>
      <div class="profile">
        <div>
          <b-icon icon="person-circle" style="width: 120px; height: 120px; color: #3c6e71;" ></b-icon>
        </div>
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
      </div>
      <div class="btns">
        <b-button variant="primary" @click.prevent="edit(arrayItem._id)">Save</b-button>
        <div v-if="arrayItem.isDeleted === false">
          <b-button variant="danger" @click.prevent="deleteVacancy(arrayItem._id)">Delete</b-button>
      </div>
      </div>

        <li v-for="item in caseArray" v-bind:key="item._id">
        <div v-if="caseArray.details === null">
          <p>Add case</p>
        </div>
        <div class="mb-5">
              <p>{{ item.caseType }}</p>
              <p>{{ item.details }}</p>
              <p>{{ item.start }}</p>
              <p>{{ item.end }}</p>
        </div>
        </li>

      <div class="addCase">
        <h3>Case Type</h3>
        <div class="case-input">
            <b-form-group>
            <li>
              <b-form-select :options="options"></b-form-select>
            </li>
          </b-form-group>
          <b-form-group>
                <label>Details</label>
                  <b-form-textarea id="textarea-no-resize" placeholder="Details" v-model="details" rows="3" no-resize ></b-form-textarea>
            </b-form-group>

            <b-form-group>
                <label>Todays Date</label>
                <b-form-datepicker id="example-datepicker" v-model="date" class="mb-2"></b-form-datepicker>
            </b-form-group>
            <b-button @click.prevent="addCase" variant="primary" class="mb-4">Add</b-button>
          </div>
      </div>
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
            },
            caseArray: [],
            caseItem: []
        }
    },
    methods: {
    getClient() {
      this.id = this.$router.currentRoute.params.id;
      axios.get('http://localhost:4001/api/client/' + this.id)
       .then(res => { this.arrayItem = res.data})
    },
      getClientCase() {
      this.id = this.$router.currentRoute.params.id;
      axios.get('http://localhost:4001/api/clientCase/' + this.id)
      .then(res => { this.caseItem = res.data })
    },
    getCase() {
      this.id = this.$router.currentRoute.params.id;
      axios.get('http://localhost:4001/api/case/' + this.id)
      .then(res => {this.caseArray = res.data})
    },
    deleteVacancy() {
      this.id = this.$router.currentRoute.params.id;
      axios.delete('http://localhost:4001/api/client/' + this.id)
      .then(res => {
        this.arrayItem = res
        this.$router.push('/Clients')
      })
    },
    edit() {
      const body = { firstname: this.$data.arrayItem.firstname, surname: this.$data.arrayItem.surname,
      address: this.$data.arrayItem.address, city: this.$data.arrayItem.city, postcode: this.$data.arrayItem.postcode,
      county: this.$data.arrayItem.county, DOB: this.$data.arrayItem.DOB,  age: this.$data.arrayItem.age,
      mobile: this.$data.arrayItem.mobile, emailaddress: this.$data.arrayItem.emailaddress,};
      this.id = this.$router.currentRoute.params.id;
      axios.put('http://localhost:4001/api/updateClient/' + this.id, body)
      .then(res => {
        console.log(res);
        this.$router.push('/Clients');
      })
    },
    },
    beforeMount() {
    this.getClient();
    this.getClientCase()
    this.getCase()
  }
  }
</script>

<style lang="scss" scoped>
@import './styles/styles.scss';

  h3 {
    background-color: #3c6e71;
    color: #fff;
    margin: 0;
    font-size: 22px;
    padding: 8px 0;
  }
  .profile {
    background-color: #fff;
    display: grid;
    grid-template-columns: 1fr 2fr;
    padding: 20px 40px 0 0;
  }
  .btns {
    display: flex;
    justify-content: center;
    background-color: #fff;
    padding: 15px 0;
    margin-bottom: 40px;
    button {
      margin-right: 15px ;
    }
  }
  .addCase {
    background-color: #fff;
    .case-input {
      padding: 20px 20px;
    }
  }
  .form-group {
    margin: 0 10px 10px 10px;
  }
  .twin-input {
    text-align: left;
  }
</style>