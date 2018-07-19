<template>
    <div class="card small white rounded center-align z-depth-4" style="padding:20px;" 
         :class="{'animated flipInX': isSubmitted && isFormValid, 'hide':!isFormValid}">
        <div class="row">
            <div class="col s12">Payment Completed</div>
        </div>
        <div class="row">
            <div class="col s12">Thank You {{cardName}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'paymentSuccess',
    props:{
        'cardName':String,
        'isSubmitted':Boolean,
        'isFormValid':Boolean
    }
}
</script>
