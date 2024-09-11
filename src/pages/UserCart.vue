<template>
  <section>
    <h2>Your Cart</h2>
    <h3>
      Total Amount: <base-badge mode="elegant">${{ cartTotal }}</base-badge>
    </h3>
    <ul>
      <cart-item
        v-for="item in cartItems"
        :key="item.productId"
        :prod-id="item.productId"
        :title="item.title"
        :image="item.image"
        :price="item.price"
        :qty="item.qty"
      ></cart-item>
    </ul>
    <div class="buy-items">
      <button v-if="isAuth" @click="buyItems">Proceed to Checkout</button>
      <base-button link to="/auth?redirect=cart" v-if="!isAuth">Login before you can Checkout</base-button>
    </div>
  </section>
</template>

<script>
import CartItem from "../components/cart/CartItem.vue";

export default {
  components: {
    CartItem,
  },

  computed: {
    cartTotal() {
      return this.$store.getters["cart/totalSum"];
    },

    cartItems() {
      return this.$store.getters["cart/products"];
    },

    isAuth () {
      return this.$store.getters.isAuthenticated
    },
  },

  methods: {
    buyItems() {
      const totalSum = this.cartTotal;
      if (!this.isAuth) {
        this.$router.push('/auth')
      } else {
        alert (`Proceed to remita to pay $${totalSum}?` )
      }
    }
  }
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
}

h2 {
  color: #292929;
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 1rem;
}

h3 {
  text-align: center;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

button {
  font: inherit;
  border: 1px solid #0114aa;
  background-color: #0114aa;
  color: white;
  border-radius: 30px;
  cursor: pointer;
  padding: 0.5rem 1.5rem;
}

button:hover,
button:active {
  background-color: #071687;
  border-color: #071687;
  opacity: 0.85;
}

.buy-items {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 1rem;
}
</style>
