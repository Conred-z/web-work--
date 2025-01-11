<template>
    <div class="not-found">
      <h1>404</h1>
      <h3>Page Not Found</h3>
      <p>Sorry, the page you are looking for does not exist.</p>
      <router-link to="/">Go to Home</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NotFound'
  }
  </script>
  
  <style scoped>
  .not-found {
    text-align: center;
    margin-top: 50px;
  }
  
  .not-found h1 {
    font-size: 6em;
    margin-bottom: 0.5em;
  }
  
  .not-found h3 {
    font-size: 2em;
    margin-bottom: 1em;
  }
  
  .not-found p {
    font-size: 1.2em;
    margin-bottom: 2em;
  }
  
  .not-found a {
    color: #42b983;
    text-decoration: none;
    font-size: 1.2em;
  }
  </style>