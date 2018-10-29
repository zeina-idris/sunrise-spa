<template>
    <div class="row">
        <div class="row text-uppercase hidden-xs cart-items-title">
            <div class="col-sm-6">
                <span>{{$t('description')}}</span>
            </div>
            <div class="col-sm-2 text-center">
                <span>{{ $t('quantity')}}</span>
            </div>
            <div class="col-sm-2 text-right">
                <span>{{ $t('price') }}</span>
            </div>
            <div class="col-sm-2 text-right">
                <span>{{ $t('total') }}</span>
            </div>
        </div>
        <div class="checkout-now" >
            <a v-on:click="createCart()" class="pull-right text-uppercase checkout-now-btn"
                id="cart-checkoutnow-btn">Debug: createcart</a>
        </div>

        <h1> {{ currentCart.id }} </h1>


        <LineItem v-for="lineItem in currentCart.lineItems"
                            :key="lineItem.id"
                            :data="lineItem" />
    </div>
</template>


<script>
import { mapGetters } from 'vuex';
import LineItem from '@/components/checkout/LineItem.vue';


export default {
  components: {
    LineItem,
  },
  computed: {
    ...mapGetters(['currentCart']),
  },

  methods: {
    // for debug purposes. generate a new cart.
    createCart() {
      this.$store.dispatch('createCart');
    },
  },
};
</script>

<!-- eslint-disable -->
<i18n>
{
  "en": {
    "description": "description",
    "quantity": "quantity",
    "price": "price",
    "total": "total"
  },
  "de": {
    "description": "beschreibung",
    "quantity": "menge",
    "price": "preis",
    "total": "gesamtpreis"
  }
}
</i18n>