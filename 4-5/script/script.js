const app = new Vue({
    el:'#app',
    data(){
        return {
            name:'name',   // nameプロパティに初期値「name」を設定する
            email:'email', // emailプロパティに初期値「email」を設定する
            tel:'00'       // telプロパティに初期値「00」を設定する
        };
    },
    // computedオプションを設定
    computed:{
        // 算出プロパティを設定（name）
        isInValidName(){
            return this.name.length < 4; // nameプロパティが4文字未満の場合trueを返す
        },
        // 算出プロパティを設定（email）
        isInValidEmail(){
            const regex = new RegExp(/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i)
            return !regex.test(this.email);
        },
        // 算出プロパティを設定（tel）
        isInValidTel(){
            const tel = this.tel;
            const isErr = tel.length < 8 || isNaN(Number(tel));
            return isErr;
        }
    }
});