<template>
    <div class="row" style="margin-top:10%">
        <productDetail :product="product"></productDetail>
        <paymentCard></paymentCard>
    </div>
</template>

<script>
import serviceProvider from '../mixin/serviceProvider'
export default {
    name: 'productCard',
    mixins: [serviceProvider],
}
</script>
