<template>
  <div class="home">
    <h1>Home</h1>
    <!-- <h3>Ref</h3>
    <p>{{ mohamedOne.name }} {{ mohamedOne.age }} name one:: {{ nameOne }}</p>
    <button @click="updateMohamedOne">Update Mohamed One</button>
    <h3>Reactive</h3>
    <p>{{ mohamedTwo.name }} {{ mohamedTwo.age }} name Two:: {{ nameTwo }}</p>
    <button @click="updateMohamedTwo">Update Mohamed Two</button> -->

    <!-- computed -->
    <input type="search" v-model="search" />
    <p>Search term:: {{ search }}</p>
    <div v-for="(name, index) in mathingNames" :key="index">
      {{ name }}
    </div>
    <button @click="handleClick">stop watching</button>
  </div>
</template>

<script>
import { computed, reactive, ref } from "@vue/reactivity";
import { watch, watchEffect } from "@vue/runtime-core";
// the diffrent between ref and reactive is (reactive is premetive value but ref not)
export default {
  name: "Home",
  setup() {
    //computed
    const search = ref("");
    const names = ref(["Mohamed", "Haroun", "Ferdaous", "Fatima", "Mariam"]);

    // the deffrent between watch and watchEffect is watchEffect run in the create but watch in initialise
    const stopWatch = watch(search, () => {
      console.log(search.value);
    });

    const stopEffect = watchEffect(() => {
      console.log("wacth effect", search.value);
    });

    const mathingNames = computed(() => {
      return names.value.filter((name) =>
        name.toLowerCase().includes(search.value.toLowerCase())
      );
    });

    const handleClick = () => {
      stopWatch();
      stopEffect();
    };

    return { mathingNames, search, handleClick };

    // const mohamedOne = ref({ name: "Mohamed", age: 26 });
    // const mohamedTwo = reactive({ name: "Haroun", age: -1 });

    // const updateMohamedOne = () => {
    //   mohamedOne.value.age = 27;
    // };

    // const nameOne = ref("Souad");
    // const nameTwo = reactive("Hasnae");

    // const updateMohamedTwo = () => {
    //   mohamedTwo.age++;
    // };

    // return {
    //   nameOne,
    //   nameTwo,
    //   mohamedOne,
    //   updateMohamedOne,
    //   updateMohamedTwo,
    //   mohamedTwo,
    // };
  },
  data() {
    return {};
  },
  // created() {
  //   console.log("created");
  // },
  // mounted() {
  //   console.log("mounted");
  // },
};
</script>
