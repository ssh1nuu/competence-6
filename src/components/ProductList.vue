<template>
    <div class="product-list-container">
      <h2>Наши Товары</h2>
      <ul class="product-list">
        <li v-for="product in products" :key="product.id" class="product-item">
          <span class="product-name">{{ product.name }}</span>
          <span class="product-price">${{ product.price }}</span>
          <button @click="addToCart(product)" class="add-to-cart-button">
            <i class="fas fa-shopping-cart"></i> В корзину
          </button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { mapActions } from 'vuex';
  
  export default {
    name: 'ProductList',
    data() {
      return {
        products: [
          { id: 1, name: 'Товар 1', price: 75 },
          { id: 2, name: 'Товар 2', price: 45 },
          { id: 3, name: 'Товар 3', price: 90 },
        ]
      }
    },
    methods: {
      ...mapActions(['addToCart'])
    }
  }
  </script>
  
  <style scoped>
  .product-list-container {
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
  
  .product-list {
    list-style: none;
    padding: 0;
  }
  
  .product-item {
    display: grid; /* Используем grid */
    grid-template-columns: 2fr 1fr 1fr; /* Распределение колонок */
    align-items: center;
    padding: 15px;
    border-bottom: 1px solid #eee;
    gap: 10px; /* Расстояние между колонками */
  }
  
  .product-item:last-child {
    border-bottom: none;
  }
  
  .product-name {
    font-size: 18px;
    color: #444;
    font-weight: 500;
  }
  
  .product-price {
    font-size: 17px;
    color: #555;
    font-weight: 400;
    text-align: center; /* Цена по центру */
  }
  
  .add-to-cart-button {
    background-color: #2d86c6;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 0.3px;
    justify-self: end; /* Кнопка в конец строки */
  }
  
  .add-to-cart-button:hover {
    background-color: #1e6091;
    transform: translateY(-2px);
  }
  
  .add-to-cart-button i {
    margin-right: 8px; /* Добавляем отступ между иконкой и текстом */
  }
  </style>
  