<template>
    <div>
        client page
        <li v-for="item in caseArray" v-bind:key="item._id">
            <p>{{ item.details  }}</p>
        </li>
    </div>
</template>

<script>

import axios from 'axios'
export default {
    name: 'clientCase',
    data() {
        return {
            arrayItem: []
        }
    },
    methods: {
        getCase() {
        this.id = this.$router.currentRoute.params.id;
        axios.get('http://localhost:4001/api/case/' + this.id)
        .then(res => {this.caseArray = res.data})
    }
    },
    beforeMount() {
        this.getCase()
    }
    }
</script>

<style lang="scss" scoped>

</style>