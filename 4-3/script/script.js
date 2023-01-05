new Vue({
    el: '#app',
    // data関数定義
    data(){
        return {
            count:59 // カウントプロパティを準備
        };
    },
    methods:{
        // インクリメントメソッドを定義
        increment(){
            this.count++; // 処理
        },
        // デクリメントメソッドを定義
        decrement(){
            this.count--; // 処理
        }
    }
});