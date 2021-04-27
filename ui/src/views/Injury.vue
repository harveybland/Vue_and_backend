<template>
    <div>
        <div class="banner">
          <router-link :to="{ path: '/Injury' }" class="pt-3">Personal Injury</router-link>
          <router-link :to="{ path: '/Medical' }" class="pt-3">Medical Negligence</router-link>
          <router-link :to="{ path: '/Conveyancing' }" class="pt-3">Conveyancing</router-link>
        </div>
          <div class="box container">
            <div class="title">
                <p>Name</p>
                <p>Address</p>
                <p>Case Type</p>
                <p>Court Date</p>
                <p>More</p>
            </div>
            <li v-for="item in filteredCase" v-bind:key="item._id" class="clients"> 
            <p>{{ item.firstname }} {{ item.surname }}</p>
              <div>
                  <p>{{ item.address }}</p>
              </div>
              <div>
                 <p>{{ item.case && item.case.length > 0 ? item.case[0].caseType : '' }}</p>
              </div>
              <div>
                   <p>{{ item.case && item.case.length > 0 ? item.case[0].end : '' }}</p>
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
let clients = [{ firstname: 'tests'}]
import axios from 'axios';
export default {
  name: 'Injury',
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
  },
    computed: {
      filteredCase() {
        return this.arrayItem.filter(item => {
          return item.case && item.case.length > 0 ? item.case[0].caseType === 'Personal Injury' : ''
        }
      )
    }
  }
}
</script>

<style lang="scss" scoped>
@import './styles/styles.scss';

.banner {
    .router-link-active {
        padding: 15px 8px;
        margin-right: 20px;
        background-color: #F5F5F5;
    }
}
</style>
