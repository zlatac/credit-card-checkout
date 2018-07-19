<template>
    <form novalidate  @submit.stop.prevent="submitForm" @keyup.enter="submitForm">
        <div class="col m6 push-m5 l4 push-l5 unhinge" style="margin-top: 4%;">
            <div class="card small white rounded z-depth-4" style="padding:20px;" 
                 :class="{'animated shake': isSubmitted && !isFormValid, 'animated flipOutX hide': isSubmitted && isFormValid}">
                <div class="row">
                    <div class="col card-detail grey-text">PAYMENT DETAIL</div>
                </div>
                <div class="row">
                    <div class="col s9">
                        <vInput :name="'card_number'" :label="'Card Number'" :propName="'cardNumber'" :validator="'required|credit_card'"
                                 :isSubmitted="isSubmitted" v-model="cardNumber" v-validate="'required|credit_card'"
                                 @updateForm="updateComponent" :maxlength="16"></vInput>
                    </div>
                    <div class="col s3">
                        <i class="fab fa-cc-visa medium animated fadeInLeft" v-show="creditCardType === 'visa'"></i>
                        <i class="fab fa-cc-mastercard medium animated fadeInLeft" v-show="creditCardType === 'mastercard'"></i>
                        <i class="fab fa-cc-amex medium animated fadeInLeft" v-show="creditCardType === 'amex'"></i>
                    </div>
                </div>
                <div class="row">
                    <div class="col s9">
                        <vInput :name="'card_name'" :label="'Cardholder Name'" :propName="'cardName'" :validator="'required|alpha_spaces'"
                                 :isSubmitted="isSubmitted" v-model="cardName" v-validate="'required|alpha_spaces'"
                                 @updateForm="updateComponent" :maxlength="200"></vInput>
                    </div>
                </div>
                <div class="row">
                    <div class="col s6">
                        <div class="row">
                            <div class="col s6">
                                <vSelect :label="'Month'" :list="monthList" :validator="{required:true,max:2,numeric:true,min:1}" :propName="'cardMonth'" 
                                          @updateForm="updateComponent" v-model="cardMonth" name="card_month"
                                          v-validate="{required:true,max:2,numeric:true,min:1}" :isSubmitted="isSubmitted"></vSelect>
                            </div>
                            <div class="col s6">
                                <vSelect :label="'Year'" :list="yearList" :validator="{required:true,max:4,numeric:true,min:4}" :propName="'cardYear'" 
                                          @updateForm="updateComponent" v-model="cardYear" name="card_year"
                                          v-validate="{required:true,max:4,numeric:true,min:4}" :isSubmitted="isSubmitted"></vSelect>
                            </div>
                        </div>
                    </div>
                    <div class="col s3">
                        <vInput :name="'card_cvv'" :label="'CVV'" :propName="'cardCvv'" :validator="{required:true,max:3,numeric:true,min:3}"
                                 :isSubmitted="isSubmitted" v-model="cardCvv" v-validate="{required:true,max:3,numeric:true,min:3}"
                                 @updateForm="updateComponent" :maxlength="3"></vInput>
                    </div>
                    <div class="col s3">
                        <button type="submit" class="btn"><i class="fas fa-arrow-right"></i></button>
                    </div>
                </div>
            </div>
            <payment-success :cardName="cardName" :isFormValid="isFormValid" :isSubmitted="isSubmitted"></payment-success>
        </div>
        
    </form>
</template>

<script>
import serviceProvider from '../mixin/serviceProvider'
export default {
    name: 'paymentCard',
    mixins: [serviceProvider],
    data:function(){
        return{
            cardNumber:'',
            cardCvv:'',
            cardName:'',
            cardMonth:null,
            cardYear:null,
            isSubmitted:false,
            isFormValid:false
        }
    },
    computed:{
        creditCardType(){
            let cardNumber = this.cardNumber
            if(cardNumber !== ''){
                let firstChar = cardNumber.charAt(0)
                switch(firstChar){
                    case '4':
                        return 'visa'
                    case '5':
                        return 'mastercard'
                    case '6':
                        return 'amex'
                    default :
                        return 'visa'
                }
            }else{
                return 'visa'
            }

        }
    },
    methods:{
        submitForm(){
            this.isSubmitted = true
            //console.log(this.fields)
            this.$validator.validate()
            .then((res)=>{
                if(res === true){
                    this.isFormValid = res
                    console.log('Form is valid yaaaaaaaaaaaaaaay')
                }else{
                    console.log('Form is not valid')
                }

            })
            // this.isFormValid = checkFormFields(this.fields)
            // if(this.isFormValid){
            //     console.log('Form is valid yaaaaaaaaaaaaaaay')
            // }else{
            //     console.log('Form is not valid')
            // }
            // function checkFormFields(object){
            //     let validCounter = 0
            //     let objectCounter = 0
            //     for(let i in object){
            //         if (object[i].valid){
            //             validCounter++
            //         }
            //         objectCounter++
            //     }
            //     return validCounter === objectCounter
            // }
        }
    }
}
</script>
