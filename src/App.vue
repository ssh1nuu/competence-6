<template>
  <div id="app">
    <h1>Мой Магазин</h1>
    <nav>
      <router-link to="/">Каталог товаров</router-link> |
      <router-link to="/cart">Корзина</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
#app {
  font-family: 'Nunito', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333;
  background-color: #f9f9f9;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
}

h1 {
  color: #2d86c6;
  margin-bottom: 25px;
  font-weight: 700;
  letter-spacing: 0.5px;
}

nav {
  padding: 18px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  margin-bottom: 30px;
}

nav a {
  font-weight: 600;
  color: #666;
  text-decoration: none;
  margin: 0 20px;
  transition: color 0.3s ease, transform 0.3s ease;
  display: inline-block;
}

nav a:hover {
  color: #2d86c6;
  transform: translateY(-2px);
}

nav a.router-link-exact-active {
  color: #1fa2ff;
  font-weight: bold;
}
</style>
