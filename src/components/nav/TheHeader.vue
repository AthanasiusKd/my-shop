<template>
  <header>
    <h1>
      <router-link to="/">Thanos Stores</router-link>
    </h1>
    <div class="all-right">
      <div class="log-action">
        <base-button v-if="!isLoggedIn" link to="/auth" mode="outline">Login</base-button>
        <base-button v-if="isLoggedIn" @click="logout">Logout</base-button>
      </div>
      <nav>
        <ul>
          <li>
            <router-link to="/products">Products</router-link>
          </li>
          <li class="cart-link">
            <router-link to="/cart" style="padding-bottom: 0">Cart</router-link>
            <base-badge mode="elegant">{{ cartQuantity }}</base-badge>
          </li>
          <li v-if="isLoggedIn">
            <router-link to="/admin">Admin</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import BaseButton from '../ui/BaseButton.vue';
export default {
  components: { BaseButton },
  computed: {
    cartQuantity() {
      return this.$store.getters["cart/quantity"];
    },

    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
  },

  methods: {
    logout () {
      this.$store.dispatch('logout')
    }
  },
};
</script>

<style scoped>
header {
  background-color: #ead6d6;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-self: center;
  align-items: center;
}

li {
  margin: 0 0 0 1rem;
}

a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  border-bottom: 2px solid transparent;
}

a:hover,
a:active,
a.router-link-active {
  color: #45006d;
  border-color: #45006d;
}

button {
  font: inherit;
  cursor: pointer;
  padding: 0.5rem 1.5rem;
  border: 1px solid #45006d;
  background-color: transparent;
  color: #45006d;
  border-radius: 30px;
}

button:hover,
button:active {
  background-color: #f0d5ff;
}

.cart-link {
  display: flex;
  align-items: center;
}

.log-action {
  background-color: #ead6d6;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 1rem;
}

.all-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
</style>
