<template>
    <div class="input-field">
        <select :name="label" v-validate="validator" @change="triggerUpdate" v-model="selectValue">
            <option value="" disabled selected></option>
            <option :value="item" :key="index" v-for="(item, index) in list">{{item}}</option>
        </select>
        <label>
            {{label}} 
            <i class="fas fa-check animated bounceIn" v-show="safe(fields[label]) && fields[label].valid"></i>
            <i class="fas fa-times animated bounceIn red-text" v-show="isSubmitted && safe(fields[label]) && fields[label].invalid"></i>
        </label>
    </div>
</template>
<script>
import serviceProvider from '../mixin/serviceProvider'
export default {
    name:'v-select',
    props:{
        'list':Array,
        'label':String,
        'validator':Object,
        'propName':String,
        'isSubmitted':Boolean
    },
    mixins: [serviceProvider],
    data:function(){
        return{
            selectValue:null
        }
    },
    mounted: function(){
        //Setup for MaterializeCss select plugin on the browser
        let elems = document.querySelectorAll('select');
        let options = {}
        this.selectInstances = M.FormSelect.init(elems, options);
    }
}
</script>
