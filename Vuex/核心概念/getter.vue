<template>
    <div>
        <h1>getter 视图</h1> 
        <h3>getter的值:{{count}}</h3>
    </div>  
</template>
<script>
import {mapState} from 'vuex'
export default {
    computed:{
        localComputed(){

        },
        // 使用对象展开运算符将此对象混入到外部对象中
        ...mapState(["count"])
    }, 
    mounted(){
        console.log(">>>>>",this.count);
    }
}
</script>