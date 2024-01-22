<template>
    <div>
      <form @submit.prevent="login">
        <input type="email" v-model="email" placeholder="Email">
        <input type="password" v-model="password" placeholder="Password">
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      login() {
        // Perform authentication logic here
        // E.g., make an API call to your backend
        axios.post('/api/login', { email, password })
          .then(response => {
            // Handle successful login (store user data, redirect, etc.)
          })
          .catch(error => {
            // Handle login errors (display error messages)
          });
      },
    },
  };
  </script>
  <style scoped>
/* General form styling */
.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 20px;
}

/* Input fields */
.login-form input {
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

/* Login button */
.login-form button {
  background-color: #4CAF50; /* Green */
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

/* Error message styling (optional) */
.error-message {
  color: red;
  font-weight: bold;
  margin-top: 10px;
}

    </style>