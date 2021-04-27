<template>
    <div class="container">
      <h3>Clients Profile</h3>
      <div class="profile-border">
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
      </div>

          <div class="mb-5" v-if="arrayItem.case && arrayItem.case.length > 0">
              <h3>Case</h3>
              <div class="case">
                <div>
                  <label>Case Type</label>
                  <p>{{ arrayItem.case && arrayItem.case.length > 0 ? arrayItem.case[0].caseType : '' }}</p>
                </div>
                <div>
                  <label>Details</label>
                  <p>{{ arrayItem.case && arrayItem.case.length > 0 ? arrayItem.case[0].details : '' }}</p>
                </div>
                <div>
                  <label>Date of Submission</label>
                  <p>{{ arrayItem.case && arrayItem.case.length > 0 ? arrayItem.case[0].start : '' }}</p>
                </div>
                <div>
                  <label>Court Date</label>
                  <p>{{ arrayItem.case && arrayItem.case.length > 0 ? arrayItem.case[0].end : '' }}</p>
                </div>
              </div>
          </div>

      <div class="addCase" v-if="arrayItem.case && arrayItem.case.length === 0">
        <h3>Add Case</h3>
        <div class="case-input">
                <b-form-group class="displaynone">
                      <label>id</label>
                      <b-form-input v-model="arrayItem._id"></b-form-input>
                </b-form-group>
            <b-form-group>
            <label>Case Type</label>
            <li>
              <b-form-select :options="options"></b-form-select>
            </li>
          </b-form-group>
          <b-form-group>
                <label>Details</label>
                  <b-form-textarea v-model="details" id="textarea-no-resize" placeholder="Details"  rows="3" no-resize ></b-form-textarea>
            </b-form-group>

            <b-form-group>
                <label>Todays Date</label>
                <b-form-datepicker v-model="date" id="example-datepicker"  class="mb-2"></b-form-datepicker>
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
            _id: ''
            },
            options: [
              { text: 'Personal Injury' },
              { text: 'Medical Negligence' },
              { text: 'conveyancing' }
            ],
            details: '',
            date: ''
        }
    },
    methods: {
      getClientCase() {
      this.id = this.$router.currentRoute.params.id;
      axios.get('http://localhost:4001/api/clientCase/' + this.id)
      .then(res => { this.arrayItem = res.data })
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
      mobile: this.$data.arrayItem.mobile, emailaddress: this.$data.arrayItem.emailaddress };
      this.id = this.$router.currentRoute.params.id;
      axios.put('http://localhost:4001/api/updateClient/' + this.id, body)
      .then(res => {
        console.log(res);
        this.$router.push('/Clients');
      })
    },
      addCase() {
        const body = { clientid: this.$data.arrayItem._id, options: this.$data.options, details: this.$data.details,
        date: this.$data.date };
        this.id = this.$router.currentRoute.params.id;
        axios.post('http://localhost:4001/api/case/' + this.id, body)
        .then( res => {
          location.reload();
          console.log(res)
        })
      }
    },
    beforeMount() {
    this.getClientCase()
  }
  }
</script>

<style lang="scss" scoped>
@import './styles/styles.scss';
.displaynone {
  display: none;
}
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
  .profile-border {
    border: 0.5px solid lightgray;
    margin-bottom: 30px;
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
    border: 0.5px solid lightgray;
    margin-bottom: 50px;
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