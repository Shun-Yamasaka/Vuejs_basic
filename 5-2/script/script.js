new Vue({
    el: '#app',
    data(){
        return {
            // 配列要素を作成（menus配列）
            menus:[{
                label:'TOP',        // ラベル名
                path:'./index.html' // リンクPath
            },{
                label:'ABOUT',
                path:'./about.html'
            },{
                label:'SCHEDULE',
                path:'./schedule.html'
            },{
                label:'CONTACT',
                path:'./contact.html'
            }]

        };
    }
});