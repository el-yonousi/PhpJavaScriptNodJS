<template>
  <div>
    <div class="container">
      <Hero />
      <LargeCardDisplay
        v-for="cardInfo in largeCardInfo"
        :key="`${cardInfo.title}_${cardInfo.id}`"
        :cardsSection="cardInfo"
      />
      <SmallCardDisplay
        v-for="cardInfo in smallCardSections"
        :key="`${cardInfo.title}_${cardInfo.id}`"
        :cardsSection="cardInfo"
      />
    </div>
  </div>
</template>

<script>
import { largeCardSections, smallCardSections } from "~/assets/data";
export default {
  data() {
    return {
      largeCardInfo: largeCardSections,
      smallCardSections,
    };
  },
};
</script>