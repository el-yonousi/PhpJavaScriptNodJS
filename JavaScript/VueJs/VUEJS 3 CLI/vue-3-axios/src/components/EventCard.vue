<template>
  <router-link class="event-link" :to="{name: 'EventDetails', params:{name: event.name}}">
    <div class="event-card">
      <span>@{{ event.name }} on {{ event.nativeName }}</span>
      <h4>{{ event.subregion }}</h4>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "EventCard",
  props: {
    event: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.event-card {
  padding: 16px;
  width: 90%;
  cursor: pointer;
  border: 1px solid #39495c;
  margin: 16px;
  &:hover {
    transform: scale(1.01);
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
  }
}
.event-link{
  color: #39495c;
  text-decoration: none;
}
</style>
