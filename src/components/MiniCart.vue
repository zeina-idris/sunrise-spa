<template>
 <li class="list-item-bag">
    <!--{{> common/mini-cart miniCart=header.miniCart}}-->
    <router-link :to="{ name: 'cart' }"
                class="not-empty link-your-bag icon-hand-bag">
      <span class="hidden-xs hidden-sm">{{ $t('miniCart') }}</span>
      <span class="cart-item-number">0</span>
    </router-link>
  </li>
</template>

<script>
export default {

};
</script>

<!-- eslint-disable -->
<i18n>
  {
    "en": {
      "miniCart": "miniCart"
    },
    "de": {
      "miniCart": "miniCart"
    }
  }
</i18n>