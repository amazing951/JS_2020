
var obj = {
    data: {
        uuid: 'e1cc6621-b499-451f-b344-2f88e86ce3d8',
        products: [],
    },
    getData: function () {
        vm = this;  // 用vm綁定this，指向 外層物件obj
        var url = `https://course-ec-api.hexschool.io/api/${this.data.uuid}/ec/products`;   // api 網址
        axios.get(url)  // 發出get 請求
            .then(function (res) {     //成功，執行then
                vm.data.products = res.data.data;
                vm.render();       //關注點分離，呼叫渲染的function
            })
            .catch(function (res){      //失敗，執行catch
                console.log('RRRRR');
            })
    },
    render: function(){     
        vm = this;  // 用vm綁定this，指向 外層物件obj
        var str = '';
        var appID = document.querySelector("#app");
        vm.data.products.forEach(function(item){
            str +=  `
            <div class="card">
            <img src="${ item.imageUrl[0] }" class="card-img-top">
            <div class="card-body">
            <h5 class="card-title">${ item.title }</h5>
            <p class="card-text">${ item.content }</p>
            </div>
            </div>`;
        });
        appID.innerHTML = str;
    }
}

obj.getData();