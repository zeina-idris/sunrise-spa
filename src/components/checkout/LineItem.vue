<template>
    <h3>{{currentLineItem.name}}</h3>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  computed: {
    currentLineItem() {
      return this.data || {};
    },
  },
};
</script>
