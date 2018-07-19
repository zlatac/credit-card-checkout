import { expect } from 'chai'
// import { mount } from '@vue/test-utils'
import { shallowMount } from '@vue/test-utils'
import Vue from 'vue'
// import HelloWorld from '@/components/HelloWorld.vue'
import { createLocalVue } from '@vue/test-utils'
import VeeValidate from 'vee-validate';
import serviceProvider from '../../src/mixin/serviceProvider'
import vInput  from '@/components/vInput.vue'

describe('credit card number', () => {
    // create an extended `Vue` constructor
    const localVue = createLocalVue()
    
    // install plugins as normal
    localVue.use(VeeValidate)
    localVue.use(serviceProvider)
    let prop = {
      name:'card_number',
      label:'cardNumber',
      validator:'required|credit_card',
      propName:'cardNumber',
      isSubmitted:false,
      maxlength:16
    }
    const wrapper = shallowMount(vInput, {
      propsData: prop,
      localVue
    })
    const input = wrapper.find('input[type="text"]')
  
    it('should be valid when using valid credit card', () => {
      input.setValue('6011476391429376')
      wrapper.vm.$validator.validate(prop.name);
    
      return Vue.nextTick()
      .then(function () {
        expect(wrapper.vm.$validator.errors.has(prop.name)).to.equal(false)
      })
    })
    it('should be invalid when using invalid credit card', () => {
      input.setValue('4011476391429376')
      wrapper.vm.$validator.validate(prop.name);
    
      return Vue.nextTick()
      .then(function () {
        expect(wrapper.vm.$validator.errors.has(prop.name)).to.equal(true)
      })
    })
    it('should be invalid when input is not a credit card', () => {
      input.setValue('Idahosa is really cool 2018')
      wrapper.vm.$validator.validate(prop.name);
    
      return Vue.nextTick()
      .then(function () {
        expect(wrapper.vm.$validator.errors.has(prop.name)).to.equal(true)
      })
    })

})

describe('credit card CVV', () => {
  // create an extended `Vue` constructor
  const localVue = createLocalVue()
  
  // install plugins as normal
  localVue.use(VeeValidate)
  localVue.use(serviceProvider)
  let prop = {
    name:'card_cvv',
    label:'cardCvv',
    validator:{required:true,max:3,numeric:true,min:3},
    propName:'cardCvv',
    isSubmitted:false,
    maxlength:3
  }
  const wrapper = shallowMount(vInput, {
    propsData: prop,
    localVue
  })
  const input = wrapper.find('input[type="text"]')

  it('should be valid when cvv is all numbers', () => {
    input.setValue('546')
    wrapper.vm.$validator.validate(prop.name);
  
    return Vue.nextTick()
    .then(function () {
      expect(wrapper.vm.$validator.errors.has(prop.name)).to.equal(false)
    })
  })
  it('should be invalid when cvv digits > 3', () => {
    input.setValue('2222')
    wrapper.vm.$validator.validate(prop.name);
  
    return Vue.nextTick()
    .then(function () {
      expect(wrapper.vm.$validator.errors.has(prop.name)).to.equal(true)
    })
  })
  it('should be invalid when cvv digits < 3', () => {
    input.setValue('3')
    wrapper.vm.$validator.validate(prop.name);
  
    return Vue.nextTick()
    .then(function () {
      expect(wrapper.vm.$validator.errors.has(prop.name)).to.equal(true)
    })
  })
  it('should be invalid when cvv digits are letters', () => {
    input.setValue('tyi')
    wrapper.vm.$validator.validate(prop.name);
  
    return Vue.nextTick()
    .then(function () {
      expect(wrapper.vm.$validator.errors.has(prop.name)).to.equal(true)
    })
  })

})

describe('credit card Name', () => {
  // create an extended `Vue` constructor
  const localVue = createLocalVue()
  
  // install plugins as normal
  localVue.use(VeeValidate)
  localVue.use(serviceProvider)
  let prop = {
    name:'card_name',
    label:'cardName',
    validator:'required|alpha_spaces',
    propName:'cardName',
    isSubmitted:false,
    maxlength:100
  }
  const wrapper = shallowMount(vInput, {
    propsData: prop,
    localVue
  })
  const input = wrapper.find('input[type="text"]')

  it('should be valid when name is only letters', () => {
    input.setValue('Ida hoo')
    wrapper.vm.$validator.validate(prop.name);
  
    return Vue.nextTick()
    .then(function () {
      expect(wrapper.vm.$validator.errors.has(prop.name)).to.equal(false)
    })
  })
  it('should be invalid when name has numbers', () => {
    input.setValue('ida56 hoo')
    wrapper.vm.$validator.validate(prop.name);
  
    return Vue.nextTick()
    .then(function () {
      expect(wrapper.vm.$validator.errors.has(prop.name)).to.equal(true)
    })
  })
  it('should be invalid when name is only numbers', () => {
    input.setValue('')
    wrapper.vm.$validator.validate(prop.name);
  
    return Vue.nextTick()
    .then(function () {
      expect(wrapper.vm.$validator.errors.has(prop.name)).to.equal(true)
    })
  })

})