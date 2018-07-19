<template>
    <div class="input-field">
        <input :id="name" type="text" class="validate" :name="name" @input="triggerUpdate" 
        placeholder="" v-model="inputValue" v-validate="validator" :maxlength="maxlength">
        <label :for="name">
            {{label}} 
            <i class="fas fa-check animated bounceIn" v-show="safe(fields[name]) && fields[name].valid"></i>
            <i class="fas fa-times animated bounceIn red-text" v-show="isSubmitted && safe(fields[name]) && fields[name].invalid"></i>
        </label>
    </div>
</template>

<script>
import serviceProvider from '../mixin/serviceProvider'
export default {
    name:'vInput',
    props:{
        'name':String,
        'label':String,
        'validator':String|Object,
        'propName':String,
        'isSubmitted':Boolean,
        'maxlength':Number
    },
    mixins: [serviceProvider],
    data:function(){
        return{
            inputValue:null
        }
    }
}
</script>
