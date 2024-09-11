// const carouselBox = document.querySelector('.box');
// const leftArrow = document.querySelector('.leftArrow');
// const rightArrow = document.querySelector('.rightArrow');


const products = document.querySelector(".popularProducts")
function getData() {
    axios.get("https://fakestoreapi.com/products")
        .then((res) => {
            let data = res.data;
            data.map((item) => {
                products.innerHTML += `
                <div class="products">
                    <div class="up-part-img">
                        <img src="${item.image}"
                            alt="">
                        <p>En cok satilan 1. urun</p>
                    </div>
                    <div class="down-part-infos">
                        <p>${item.title}</p>
                        <div class="price">
                            <span>790TL</span>
                            <span>${item.price}TL</span>
                        </div>
                        <div class="sale">
                            <i class="fa-solid fa-arrow-trend-down"></i>
                            <span>Son 30 gunun en dusuk fiyati</span>
                        </div>
                        <div class="ratings">
                            <span>${item.rating.rate}</span>
                            <div>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star-half"></i>
                            </div>
                            <span>(${item.rating.count})</span>
                        </div>
                        <div class="opportunity">
                            <div class="coupon">
                                <img src="https://cdn.dsmcdn.com/web/production/campaign-coupon-icon.svg" alt="">
                                <span>150 TL Kupon</span>
                            </div>
                            <div class="buymorepayless">
                                <img src="https://cdn.dsmcdn.com/web/production/campaign-product-promotion-icon.svg" alt="">
                                <span>Cok al az ode</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                `
            })
        })
}
getData()

const search = document.querySelector('#searchSystem')
search.addEventListener("input", getSearch)
let getSearch = () => {
    let value = search.value.toLowerCase();
    console.log(value);
    
}