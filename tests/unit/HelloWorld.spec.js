import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import { shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'
import { createLocalVue } from '@vue/test-utils'
import VeeValidate from 'vee-validate';
import serviceProvider from '../../src/mixin/serviceProvider'
import vInput  from '@/components/vInput.vue'

// describe('vInput.vue', () => {
//   it('renders select options', () => {
//     // create an extended `Vue` constructor
//     const localVue = createLocalVue()

//     // install plugins as normal
//     localVue.use(VeeValidate)
//     localVue.use(serviceProvider)
//     const wrapper = shallowMount(vInput, {
//       propsData: {
//         name:'card_number',
//         label:'cardNumber',
//         validator:'required|credit_card',
//         propName:'cardNumber',
//         isSubmitted:true,
//         maxlength:16
//       },
//       localVue
//     })
//     const input = wrapper.find('input[type="text"]')
//     input.setValue('6011476391429376')
//     //input.setValue('ida hosa for sure')
//     //wrapper.setData({ inputValue: '45' })
//     //console.log(wrapper.vm.errors)
//     //expect(wrapper.vm.inputValue).to.equal('3455678990')
//     //expect(wrapper.vm.errors.items.length).to.equal(1)
//     //expect(wrapper.vm.fields['card_number'].changed).to.equal(true)
//     //expect(wrapper.text()).to.include('red-text')
//     // expect(wrapper.vm.fields['card_number'].valid).to.equal(true)
//     wrapper.vm.$validator.validate('card_number');
    
//     return Vue.nextTick()
//     .then(function () {
//       expect(wrapper.vm.$validator.errors.has('card_number')).to.equal(true)
//     })
//   })
// })

// describe('HelloWorld.vue', () => {
//   it('renders props.msg when passed', () => {
//     // create an extended `Vue` constructor
//     const localVue = createLocalVue()

//     // install plugins as normal
//     localVue.use(VeeValidate)
//     localVue.use(serviceProvider)
//     const msg = 'new message'
//     const wrapper = mount(HelloWorld, {
//       propsData: { msg },
//       //localVue
//     })
//     wrapper.setProps({ msg: 'why me' })
//     wrapper.setData({ output: "its hot" })
//     console.log(wrapper)
//     //expect(wrapper.text()).to.include('why me')
//     expect(wrapper.vm.output).to.include('hot')
//   })
// })
