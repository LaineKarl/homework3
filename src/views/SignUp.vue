<template>
    <body>
      <AppHeader />
      <section>
        <div id="login">
          <a>Create an account</a>
          <form @submit.prevent="validatePassword">
            <input
              type="email"
              v-model="email"
              placeholder="Email"
              required
            /><br />
            <input
              type="password"
              v-model="password"
              placeholder="Password"
              required
            /><br />
            <button class="loginbutton" type="submit">Sign Up</button>
          </form>
          <div v-if="validationErrors.length > 0" class="validation-errors">
            <p>The password is not valid:</p>
            <ul>
              <li v-for="(error, index) in validationErrors" :key="index">
                {{ error }}
              </li>
            </ul>
          </div>
        </div>
      </section>
      <AppFooter />
    </body>
</template>
  
<script>
  import AppFooter from "@/components/AppFooter.vue";
  import AppHeader from "@/components/AppHeader.vue";
  
  export default {
    name: "signup",
    components: {
      AppHeader,
      AppFooter,
    },
    data() {
      return {
        email: "",
        password: "",
        validationErrors: [],
      };
    },
    methods: {
      validatePassword() {
        this.validationErrors = [];
  
        const password = this.password;
  
        // Validation rules
        if (password.length < 8 || password.length >= 15) {
          this.validationErrors.push(
            "The password must be at least 8 characters and less than 15 characters."
          );
        }
        if (!/^[A-Z]/.test(password)) {
          this.validationErrors.push(
            "The password must start with an uppercase alphabet."
          );
        }
        if (!/[A-Z]/.test(password)) {
          this.validationErrors.push(
            "The password must include at least one uppercase alphabet character."
          );
        }
        if (!/[a-z].*[a-z]/.test(password)) {
          this.validationErrors.push(
            "The password must include at least two lowercase alphabet characters."
          );
        }
        if (!/\d/.test(password)) {
          this.validationErrors.push("The password must include at least one numeric value.");
        }
        if (!/_/.test(password)) {
          this.validationErrors.push("The password must include the character '_'.");
        }
  
        // If no errors, proceed
        if (this.validationErrors.length === 0) {
          this.$router.push("/");
        }
      },
    },
  };
</script>

<style scoped>
#login {
  display: flex;
  flex-direction: column;
  height: auto;
  width: 450px;
  margin: 70px auto;
  padding-top: 20px;
  background-color: orange;
  text-align: center;
  border-radius: 10px;
  line-height: 1.5;
}

input[type="email"],
input[type="password"] {
  padding: 10px;
  margin: 10px 0;
}

.loginbutton {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  width: 50%;
  margin-top: 1rem;
}

.loginbutton:hover {
  background-color: #0056b3;
}

.validation-errors {
  padding: 20px;
  margin-top: 20px;
  text-align: left;
  font: bold;
  color: rgb(10, 0, 0);
  font-size: 0.9rem;
}

.validation-errors ul {
  margin: 0;
  padding-left: 20px;
}
</style>
