<template>
  <div v-if="event">
    <h1>{{ event.name }}</h1>
    <p>{{ event.population }} on {{ event.region }} @ {{ event.capital }}</p>
    <p>{{ event.name }} on {{ event.nativeName }}</p>
    <h4>{{ event.subregion }} {{ event.numericCode }}</h4>
  </div>
</template>

<script>
import EventService from "@/services/EventService.js";
export default {
  name: "EventDetails",
  data() {
    return {
      event: {},
    };
  },
  created() {
    EventService.getEventDetails(this.name)
      .then((response) => {
        this.event = response.data[0];
        // console.log(response);
      })
      .catch((err) => {
        console.error(err);
      });
  },

  props: {
    name: {
      type: String,
      required: true,
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
