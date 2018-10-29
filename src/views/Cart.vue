<template>
     <div class="cart-page">
    <div class="container">
      <!-- {{> common/messages}} -->
      <div class="row">
        <div class="col-sm-8 col-xs-12">
          <div class="current-in-bag">
            <span>
              <img class="bag-icon-lg" src="../assets/img/hand-bag-2-black.png" alt="bag icon">
            </span>
            <span class="text-uppercase your-bag-txt"> {{ $t('yourBag')}}: </span>
            <!-- <span class="items-total-txt">{{i18n "checkout:itemsTotal" count=content.cart.totalItems}}</span> -->
            <span class="items-total-txt"> {{ $t('itemsTotal') }} </span>
          </div>
        </div>
        <div class="col-sm-4">
           <div class="checkout-now">
                <a href="#" class="pull-right text-uppercase checkout-now-btn"
                      id="cart-checkoutnow-btn">{{ $t('checkout') }}</a>
           </div>
          <!-- {{> checkout/start-checkout-link id="cart-checkoutnow-btn"}} -->
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <!-- {{> checkout/order-summary cart=content.cart mainClass="cart-content" editable=true}} -->
          <OrderSummary />
        </div>
      </div>
      <div class="row bottom-cart-btns">
        <div class="col-sm-6">
          <!-- {{> checkout/continue-shopping-button-left}} -->
        </div>
        <div class="col-sm-6">
          <!-- {{> checkout/start-checkout-link bottom=true}} -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OrderSummary from '@/components/OrderSummary.vue';

export default {
  components: {
    OrderSummary,
  },
  props: ['categorySlug'],
};
</script>

<!-- eslint-disable -->
<i18n>
{
  "en": {
    "yourBag": "Your Bag",
    "itemsTotal": "item in total",
    "checkout": "Checkout"
  },
  "de": {
    "yourBag": "Ihr Einkaufswagen",
    "itemsTotal": "Artikel im Warenkorb",
    "checkout": "Checkout"
  }
}
</i18n>