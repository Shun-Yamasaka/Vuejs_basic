new Vue({
    el:'#app',
    data(){
        return {
            todos:[], // TODOリストを格納する配列
            text:'' // テキストボックスの初期状態（空文字列）
        };
    },
    methods:{
        inputText(e){ // e:テキストボックス空の入力引数
            // textプロパティに入力値を格納する
            this.text = e.target.value;
        },
        addTodo(){ // TODO追加メソッド
            if (!this.text) return; // textプロパティが空の場合何もしない

            const text = this.text; // 入力値を変数に格納
            const id = Math.ceil(Math.random()* 1000); // 乱数を発生させidとして利用
            // TODOオブジェクトを作成
            const todo ={
                id,
                text,
                isDone:false
            };
            this.todos.push(todo); // 配列にTODOオブジェクトを追加
            this.resetText(); // テキストボックスの入力内容を空にする
        },
        resetText(){ // テキストボックス初期化処理
            this.text = '';
        },
        deleteTodo(id){
            const index = this.getIndexBy(id);
            this.todos.splice(index, 1); // splice(配列の要素数, 削除する個数)
        },
        toggleIsDone(id){
            const index = this.getIndexBy(id);
            this.todos[index].isDone = !this.todos[index].isDone;
        },
        getIndexBy(id){ // 配列の要素数を取得
            const filteredTodo = this.todos.filter(todo => todo.id === id)[0];
            const index = this.todos.indexOf(filteredTodo);
            return index;
        }
    },
    computed:{
        doneTodo(){ // 完了のTODOを取り出す
            return this.todos.filter(todo => todo.isDone === true);
        },
        incompleteTodo(){ // 未完了のTODOを取り出す
            return this.todos.filter(todo => todo.isDone === false);
        }
    }
});
