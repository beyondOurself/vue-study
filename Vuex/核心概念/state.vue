<template>
    <div>
        <h1>state 视图</h1> 
        <h3>state的值:{{count}}</h3>
    </div>  
</template>
<script>
import {mapState} from 'vuex'
export default {
    // computed:{
    //     count(){
    //         return this.$store.state.count
    //     }
    // }, 
    // computed:mapState({  // mapState 辅助函数
    //     count: state => state.count,
    //     countAlias: 'count',
    // }), 
    // computed:mapState(["count"]), //当state 和computed 属性名相同时候可以传入数组  count ==> state.count
    computed:{
        localComputed(){

        },
        // 使用对象展开运算符将此对象混入到外部对象中
        ...mapState(["count"])
    }, 
    mounted(){
        console.log(">>>>>",this.count);
        // console.log("countAlias>>>>>",this.countAlias);
    }
}
</script>