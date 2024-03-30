const Wrapper = document.querySelector(".sliderWrapper");

const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
        id: 1,
        title: "Air Force",
        price: 119,

        colors: [
            {
                code: "black",
                img: "./img/air.png",
            },
            {
                code: "darkblue",
                img: "./img/air2.png",
            },
        ],
    },
    {
        id: 2,
        title: "Air Jordan",
        price: 149,

        colors: [
            {
                code: "grey",
                img: "./img/jordan.png",
            },
            {
                code: "green",
                img: "./img/jordan2.png",
            },
        ],
    },
    {
        id: 3,
        title: "Blazer",
        price: 139,

        colors: [
            {
                code: "white",
                img: "./img/blazer.png",
            },
            {
                code: "green",
                img: "./img/blazer2.png",
            },
        ],
    },
    {
        id: 4,
        title: "Crater",
        price: 199,

        colors: [
            {
                code: "black",
                img: "./img/crater.png",
            },
            {
                code: "grey",
                img: "./img/crater2.png",
            },
        ],
    },
    {
        id: 5,
        title: "Hippie",
        price: 169,

        colors: [
            {
                code: "grey",
                img: "./img/hippie.png",
            },
            {
                code: "black",
                img: "./img/hippie2.png",
            },
        ],
    },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColor = document.querySelectorAll(".color");


menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        // showing current slide 
        Wrapper.style.transform = `translateX(${-100 * index}vw)`;

        //showimg choosen product

        choosenProduct = products[index];

        //changing text title and price

        currentProductTitle.textContent = choosenProduct.title;

        currentProductPrice.textContent = "$" + choosenProduct.price;

        currentProductImg.src = choosenProduct.colors[0].img;

        // choosing colors 

        currentProductColor.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        })

    })
})


//changing image of selected product
currentProductColor.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentProductImg.src = choosenProduct.colors[index].img;
    })
})

//choosing size of the product

const currentProductSize = document.querySelectorAll(".size");

currentProductSize.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        currentProductSize.forEach((size)=>{
            size.style.backgroundColor="white"
            size.style.color="black"
        })
        size.style.backgroundColor="black"
        size.style.color="white"
    })
})
//displaying payment information

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",()=>{
    payment.style.display = "flex"
})
close.addEventListener("click",()=>{
    payment.style.display = "none"
})