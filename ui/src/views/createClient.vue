<template>
        <div>
           <b-form>
            <div class="banner">
                <h4>Create a new Client</h4>
            </div>
        <div class="container mt-4">
            <div class="contain">
            <div class="twin-input">
                <b-form-group>
                    <label>First Name</label>
                    <b-form-input placeholder="Harvey" v-model="firstname"></b-form-input>
                </b-form-group>
                <b-form-group>
                    <label>Surname</label>
                    <b-form-input placeholder="Bland" v-model="surname"></b-form-input>
                </b-form-group>
            </div>
            
            <b-form-group>
                <label>Address</label>
                  <b-form-textarea id="textarea-no-resize" 
                  placeholder="43 alma avenue" 
                  rows="3" no-resize 
                  v-model="address"></b-form-textarea>
            </b-form-group>
            
             <b-form-group>
                <label>City</label>
                <b-form-input placeholder="Foulridge" v-model="city"></b-form-input>
            </b-form-group>

            <b-form-group>
                <label>Postcode</label>
                <b-form-input placeholder="BB8 7NS" v-model="postcode"></b-form-input>
            </b-form-group>

            <b-form-group>
                <label>County</label>
                <b-form-input placeholder="Lancashire" v-model="county"></b-form-input>
            </b-form-group> 
            <div class="twin-input">
                <b-form-group>
                    <label>DOB</label>
                    <b-form-input placeholder="16-04-1999" v-model="DOB"></b-form-input>
                </b-form-group>
                
                <b-form-group>
                    <label>Age</label>
                    <b-form-input placeholder="21" v-model="age"></b-form-input>
                </b-form-group>
            </div>

            <b-form-group>
                <label>Mobile</label>
                <b-form-input placeholder="07957 445590" v-model="mobile"></b-form-input>
            </b-form-group>

            <b-form-group>
                <label>Email Address</label>
                <b-form-input placeholder="example@example.com" v-model="emailaddress"></b-form-input>
            </b-form-group>

    </div>
        <b-button @click.prevent="createClient" class="mb-4">Submit</b-button>
        </div>
        </b-form>
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        name: 'createClient',
        data() {
        return {
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
            caseTypeId: '605c724494f51b3b6c71aa2f'
        }
    },
    methods: {
        createClient() {
        const body = { firstname: this.$data.firstname, surname: this.$data.surname,
        address: this.$data.address, city: this.$data.city, postcode: this.$data.postcode,
        county: this.$data.county, DOB: this.$data.DOB,  age: this.$data.age,
        mobile: this.$data.mobile, emailaddress: this.$data.emailaddress,
        caseTypeId: this.$data.caseTypeId };
        axios.post('http://localhost:4001/api/createClient', body)
        .then( res => {
            console.log(res)
            this.$router.push('/Clients')
        })
        }
    }
}
</script>

<style lang="scss" scoped>
@import './styles/styles.scss';

    .contain {
        text-align: left;
    }
    h4 {
        margin: 0;
    }
</style>