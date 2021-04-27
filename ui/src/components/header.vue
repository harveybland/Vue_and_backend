<template>
<div>
  <b-navbar toggleable="lg" class="navbar">
    <b-navbar-brand href="/clients">Bob's Legal Practice</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <router-link to="/clients">Clients</router-link> |
        <router-link to="/Medical">Cases</router-link> |
        <router-link to="/createClient">Create</router-link>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>

          <template #button-content>
            <a>John Smith</a>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>

<style lang="scss" scoped>
.navbar {
    background-color:#46494c;
    font-size: 16px;
    a {
      color: #fff !important;
    }
}

.dropdown-toggle::after {
  background: #fff;
  color: #fff;
}
.navbar {
  padding: 0 !important;
}
  a {
    padding: 12px 10px;
  }
  a.router-link-active {
    background: lightgray;
    color: #000 !important;
  }
  #nav-collapse a:hover {
     background: lightgray;
     color: #000;
     text-decoration: none;
  }
.nav-link {
    display: block;
    padding: 0.8rem 1rem !important;
}

.navbar-brand {
    display: inline-block;
    padding-top: 0.3125rem;
    padding-bottom: 0.3125rem;
    margin-right: 6rem;
    font-size: 1.25rem;
    line-height: inherit;
    white-space: nowrap;
}
</style>