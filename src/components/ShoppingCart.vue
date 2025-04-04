<template>
    <div class="shopping-cart-container">
      <h2>Ваша Корзина</h2>
      <div v-if="cartItems.length === 0" class="empty-cart">
        Корзина пуста.
      </div>
      <div v-else>
        <div class="cart-header">
          <span class="header-item">Наименование</span>
          <span class="header-item">Цена</span>
          <span class="header-item">Количество</span>
          <span class="header-item">Итого</span>
        </div>
        <ul class="cart-items">
          <li v-for="item in cartItems" :key="item.id" class="cart-item">
            <span class="cart-item-name">{{ item.name }}</span>
            <span class="cart-item-price">${{ item.price }}</span>
            <span class="cart-item-quantity">
              <button @click="decreaseQuantity(item)" class="quantity-button">-</button>
              {{ item.quantity }}
              <button @click="increaseQuantity(item)" class="quantity-button">+</button>
            </span>
            <span class="cart-item-total">${{ item.price * item.quantity }}</span>
            <button @click="removeFromCart(item.id)" class="remove-from-cart-button">
              <i class="fas fa-trash-alt"></i> Удалить
            </button>
          </li>
        </ul>
        <p class="total-price">Общая стоимость: ${{ totalPrice }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import { mapGetters, mapActions } from 'vuex';
  
  export default {
    name: 'ShoppingCart',
    computed: {
      ...mapGetters(['cartItems', 'totalPrice'])
    },
    methods: {
      ...mapActions(['removeFromCart']),
      increaseQuantity(item) {
        this.$store.commit('incrementQuantity', item);
      },
      decreaseQuantity(item) {
        if (item.quantity > 1) {
          this.$store.commit('decrementQuantity', item);
        } else {
          this.removeFromCart(item.id);
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .shopping-cart-container {
    padding: 30px;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  }
  
  h2 {
    color: #2d86c6;
    margin-bottom: 25px;
    font-weight: 600;
    letter-spacing: 0.5px;
  }
  
  .cart-header {
    display: grid; /* Используем grid */
    grid-template-columns: 2fr 1fr 1fr 1fr 0.5fr; /* Распределение колонок */
    padding: 15px;
    font-weight: 600;
    border-bottom: 2px solid #eee;
    color: #555;
    gap: 10px;
  }
  
  .header-item {
    text-align: center; /* Текст заголовков по центру */
  }
  
  .cart-items {
    list-style: none;
    padding: 0;
  }
  
  .cart-item {
    display: grid; /* Используем grid */
    grid-template-columns: 2fr 1fr 1fr 1fr 0.5fr; /* Распределение колонок */
    align-items: center;
    padding: 15px;
    border-bottom: 1px solid #eee;
    gap: 10px;
  }
  
  .cart-item:last-child {
    border-bottom: none;
  }
  
  .cart-item-name {
    font-size: 17px;
    color: #444;
  }
  
  .cart-item-price,
  .cart-item-quantity,
  .cart-item-total {
    font-size: 16px;
    color: #555;
    text-align: center;
  }
  
  .quantity-button {
    background-color: #ddd;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
    margin: 0 5px;
    transition: background-color 0.3s ease;
  }
  
  .quantity-button:hover {
    background-color: #ccc;
  }
  
  .remove-from-cart-button {
    background-color: #e44d26;
    color: white;
    border: none;
    padding: 10px 16px;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;
    justify-self: end;
  }
  
  .remove-from-cart-button:hover {
    background-color: #c0392b;
    transform: translateY(-1px);
  }
  
  .remove-from-cart-button i {
    margin-right: 5px;
  }
  
  .total-price {
    font-weight: bold;
    margin-top: 25px;
    font-size: 20px;
    text-align: right;
    color: #333;
  }
  
  .empty-cart {
    font-style: italic;
    color: #777;
  }
  </style>
  