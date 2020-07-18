
var app = new Vue({
    el: '#app',     // 綁定html裡的#app
    data: {     // 處理資料
        products: [
            {
                id: 1586934917210,
                title: 'Switch',
                category: '掌上主機',
                content: '動森太好玩惹',
                description: '買不到QQ',
                imageUrl: 'https://images.unsplash.com/photo-1592107761705-30a1bbc641e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
                enabled: true,
                origin_price: 20000,
                price: 9980,
                unit: '台',
            },
            {
                id: 1196934917910,
                title: 'PS5 Wifi',
                category: '主機',
                content: '海馬賴人',
                description: 'wifi+空氣清新機',
                imageUrl: 'https://images.unsplash.com/photo-1592107761705-30a1bbc641e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
                enabled: false,
                origin_price: 29999,
                price: 9487,
                unit: '台',
            },
        ],
        tempProduct: {},
    },
    methods: {      // 放函式、渲染畫面
        updateProduct() {
            if (this.tempProduct.id) {      // 判定是否有id，有的話是編輯，沒有的話是新增
                var id = this.tempProduct.id;
                this.products.forEach((item, index) => {        // 找出是要更新哪一個
                    if (item.id === id) {
                        this.products[index] = this.tempProduct;
                    }
                });
            }else {
                // Unix Timestamp
                var id = new Date().getTime();
                this.tempProduct.id = id;
                this.products.push(this.tempProduct);
            };
            this.tempProduct = {};
            $('#productModal').modal('hide');

        },
        openModal(isNew, item) {     // 打開互動視窗
            switch (isNew) {
                case 'new':     // 新增，空物件指向this.tempProduct
                    this.tempProduct = {};
                    $("#productModal").modal('show');
                    break;
                case 'edit':        // 編輯，把目前的item物件，指向this.tempProduct
                    this.tempProduct = Object.assign({}, item);
                    $("#productModal").modal('show');
                    break;
                case 'delete':      // 刪除，把目前的item物件，指向this.tempProduct，並開啟刪除的視窗
                    $("#delProductModal").modal('show');
                    this.tempProduct = Object.assign({}, item);
                default:
                    break;
            }
        },
        deleteProduct() {
            if (this.tempProduct.id) {        // 判定是否有id，有才可以刪除
                var id = this.tempProduct.id;
                this.products.forEach((item, index) => {        // 找出是要刪除哪一個
                    if (item.id === id) {
                        this.products.splice(index, 1);
                        this.tempProduct = {};
                    }
                });
            };
            $('#delProductModal').modal('hide');

        }

    },
});