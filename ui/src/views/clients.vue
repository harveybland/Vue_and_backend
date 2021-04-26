<template>
  <div class="container">
    <h1>Client page</h1>
    <li v-for="item in arrayItem" v-bind:key="item._id">
      <p>{{ item.firstname }} {{ item.surname }}</p>
      <div>
          <p>Personal Injury</p>
      </div>
      <div>
        <router-link :to="{ path: '/clientView/' + item._id }" class="nav">
          <p>More details</p>
        </router-link>
    </div>
    </li>
  </div>
</template>

<script>
let clients = [{ firstname: 'tests'}]
import axios from 'axios';
export default {
  name: 'clients',
  data() {
    return {
      arrayItem: clients
    }
  },
  methods: {
    async getClients() {
      axios.get('http://localhost:4001/api/clients')
      .then(res => { this.arrayItem = res.data })
    }
  },
      beforeMount() {
      this.getClients();
  }
}
</script>
