<template>
  <form @submit.prevent="handlSubmit">
    <label>Email</label>
    <input type="email" required v-model="email" autocomplete="email" />
    <label>Password</label>
    <input type="password" required v-model="password" autocomplete="current-password" />
    <div class="error" v-if="errorPassword">{{errorPassword}}</div>
    <label>Role</label>
    <select v-model="role">
      <option value="developer">Web Develop</option>
      <option value="designer">Web Design</option>
    </select>

    <label>Skills (separate between skills using ',')</label>
    <input type="text" v-model="tempSkill" @keyup="addSkill" />
    <div class="pill" v-for="(skill, index) in skills" :key="index">
      <span @click="deleteSkill(skill)" title="delete">{{ skill }}</span>
    </div>

    <div class="terms">
      <input type="checkbox" required v-model="terms" />
      <label>Accept terms and conditions</label>
    </div>

    <div class="names">
      <div>
        <input type="checkbox" value="mohamed" v-model="names" />
        <label>Mohamed</label>
      </div>
      <div>
        <input type="checkbox" value="khaouda" v-model="names" />
        <label>Khaouda</label>
      </div>
      <div>
        <input type="checkbox" value="haroun" v-model="names" />
        <label>Haroun</label>
      </div>
    </div>

    <div class="submit">
      <button>JOIN</button>
    </div>
  </form>

  <p>Email:: {{ email }}</p>
  <p>Password:: {{ password }}</p>
  <p>Role:: {{ role }}</p>
  <p>Terms:: {{ terms }}</p>
  <p>Names:: {{ names }}</p>
  <p>Skills:: {{ skills }}</p>
</template>

<script>
export default {
  name: "Test",
  created() {},
  data() {
    return {
      email: "",
      password: "",
      role: "designer",
      terms: false,
      names: [3],
      tempSkill: "",
      skills: [],
      errorPassword: "",
    };
  },
  props: {},
  methods: {
    addSkill(e) {
      if (e.key === "," && this.tempSkill) {
        if (!this.skills.includes(this.tempSkill.split(",")[0])) {
          this.skills.push(this.tempSkill.split(",")[0]);
        }
        this.tempSkill = "";
      }
    },
    // deleteSkill(skill){
    //   this.skills.splice(this.skills.indexOf(skill), 1)
    // }
    deleteSkill(skill) {
      this.skills = this.skills.filter((item) => {
        return skill !== item;
      });
    },
    handlSubmit() {
      this.errorPassword =
        this.password.length > 5 ? "" : "must be greather than 5 caractere";
      if(!this.errorPassword)
      {
        console.log({
          email: this.email,
          password: this.password,
          role: this.role,
          skills: this.skills,
          terms_accepted: this.terms
        });
      }
    },
  },
};
</script>

<style scoped>
form {
  max-width: 420px;
  margin: 30px auto;
  background-color: #fff;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
.error{
  color: #ff0062;
  font-size: 0.8rem;
  margin-top: 10px;
}
input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}
.pill {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background-color: #eee;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
}
button {
  background: #0b6dff;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: #fff;
  border-radius: 20px;
}
.submit {
  text-align: center;
}
</style>
