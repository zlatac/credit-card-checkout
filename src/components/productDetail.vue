<template>
   <div class="col m10 l8">
        <div class="card medium product-bg rounded z-depth-3">
            <div class="row">
                <div class="col s10 l5 m5 push-m1 push-l1 white-text" style="margin-top:10%">
                    <img class="col s12" :src="product.imageUrl" alt="product Image" height="70%"/>
                    <p class="col s12 price">{{'$' + product.price}}</p>
                    <p class="col s12 product-name">{{product.name}}</p>
                </div>
            </div>

        </div>
    </div> 
</template>

<script>
export default {
    name:'product-detail',
    props:{
        'product':Object
    }
    
}
</script>
