export default {
    data: function(){
        return{
            modalInstance:null,
            modalData:{},
            loader: false,
            toastInstance: null,
            selectInstances:null,
            product:{
                imageUrl:'https://scontent-yyz1-1.cdninstagram.com/vp/ff6da23f36375beecdddf7243268fb11/5BE9A685/t51.2885-15/e35/28427427_2016033232013034_6613761474152103936_n.jpg',
                name:'Braided ankle boots',
                price:1250
            }
        }
    },
    computed:{
       monthList(){
           let monthArray = []
           for(let i=0; i<12; i++){
                let num = i + 1
                if(num < 10){
                    num = '0' + num
                }else{
                    num = num.toString()
                } 
                monthArray.push(num)
           }
           return monthArray
       },
       yearList(){
           let yearArray = []
           let currentYear = new Date().getFullYear()
           for(let i=currentYear; i < currentYear + 12; i++){
            yearArray.push(i)
           }
           return yearArray
       }

    },
    mounted: function(){
        let modal = document.querySelector('.modal');
        let tooltip = document.querySelector('.tooltipped');
        let modalOptions = {}
        if (modal) this.modalInstance = M.Modal.init(modal,modalOptions);
        if (tooltip) M.Tooltip.init(tooltip);
                            
    },
    methods:{
        safe(a){
            if(a === undefined || a === null || a === ''){
                return false;
            }
            return true;
        },
        toggleModal(modalData){
            this.modalData = modalData
            this.modalInstance.open();
        },
        clearInterval(intervalInstance){
            if(this.safe(intervalInstance)){
                clearInterval(intervalInstance)
            }            
        },
        creditCardValidate(number){
            //Using Luhn Formula to validate its a real credit card number
            //number: string
            var numberArray = number.split('').reverse();
            for (let i=0; i<numberArray.length; i++){
                if (i%2 != 0){
                numberArray[i] = numberArray[i] * 2;
                if (numberArray[i] > 9){
                    numberArray[i] = parseInt(String(numberArray[i]).charAt(0)) + parseInt(String(numberArray[i]).charAt(1))
                }
                }
            }
            var sum = 0;
            for (let i=1; i<numberArray.length; i++){
                sum += parseInt(numberArray[i]);
            }
            sum = sum * 9 % 10;
            if (numberArray[0] == sum){
                return true
            }else{
                return false
            }
        },
        updateComponent(prop,newValue){
            //console.log(arguments)
            this[prop] = newValue
        },
        triggerUpdate(event){
            //console.log('something happend')
            this.$emit('updateForm',this.propName,event.target.value)
        }
        
    }
}