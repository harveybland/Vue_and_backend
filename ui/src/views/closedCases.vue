<template>
    <div>
        <div class="banner">
          <router-link :to="{ path: '/clients' }">All clients</router-link>
          <router-link :to="{ path: '/clients/closedCases' }" class="active">Closed Cases</router-link>
        </div>
        <div  class="box container">
              <div class="title">
                <p>Name</p>
                <p>Address</p>
                <p>Case Type</p>
                <p>Court Date</p>
                <p>More</p>
            </div>
            <li v-for="item in arrayItem" v-bind:key="item._id" class="clients"> 
            <p>{{ item.firstname }} {{ item.surname }}</p>
              <div>
                  <p>{{ item.address }}</p>
              </div>
              <div>
                <p>Personal Injury</p>
              </div>
              <div>
                   <p>09/04/2021</p>
              </div>
                <div>
                  <router-link :to="{ path: '/clientView/' + item._id }" class="nav">
                    <p>More details</p>
                  </router-link>
            </div>
        </li>
      </div>
    </div>
</template>

<script>
let user = { firstname: 'test' };
import axios from 'axios';
export default {
    name: 'closedCases',
    data() {
    return {
      arrayItem: user,
    };
  },
  methods: {
    async getJobs() {
        await axios.get('http://localhost:4001/api/closedClients')
        .then(res => { this.arrayItem = res.data })
    }
    },
      beforeMount() {
        this.getJobs();
    }
}
</script>

<style lang="scss" scoped>
@import './styles/styles.scss';

.banner {
    a.active {
        padding: 15px 8px;
        margin-right: 20px;
        background-color: #F5F5F5;
    }
}
</style>