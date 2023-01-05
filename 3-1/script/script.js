const app = new Vue({
    el:'#app',
    data(){                     // data関数を定義
        return {                // オブジェクトをreturnする
            text:'hello Vue.js' // textプロパティに文字列を設定
        };
    },
    methods:{                             // メソッドプロパティを定義
        handleClick(){                    // handleClickメソッドを定義
            this.text = 'button pushed';  // 処理を記述
        }
    }
});