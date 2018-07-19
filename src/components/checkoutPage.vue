<template>
    <div class="container">
        <productCard></productCard>
    </div>
</template>
<script>
import serviceProvider from '../mixin/serviceProvider'
export default {
    name: 'checkoutPage',
    mixin: [serviceProvider]
}
</script>

