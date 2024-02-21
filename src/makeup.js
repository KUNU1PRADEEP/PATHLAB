

let obj_data=[
    {
        image_link:"https://sunrisediagnosis.com/wp-content/uploads/2022/01/CBC-test-pune-2.jpg",
        name: "blood Test",
        // price: ,
        rating: 4.9 + "(15)",
        product:"Face Brush",
    },
    {
        image_link:"https://plus.unsplash.com/premium_photo-1664299422915-d67e36404534?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "blood Test",
        // price: 499.00,
        rating: 4.8 + "(26)",
        product:"Foundation Brush",
    },
    {
        image_link:"https://plus.unsplash.com/premium_photo-1661769338046-e07bc03ff32a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "blood Test",
        // price: 399.00,
        rating: 4.7 + "(23)",
        product:"Face Brush",
    },
    {
        image_link:"https://images.unsplash.com/photo-1584452964155-ef139340f0db?q=80&w=1797&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "blood Test",
        // price: 599.00,
        rating: 5 + "(2)",
        product:"Eyeshadow Brush",
    },
    {
        image_link:"https://plus.unsplash.com/premium_photo-1664299422915-d67e36404534?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "blood Test",
        // price: 399.00,
        rating: 5 + "(3)",
        product:"Eyeshadow Brush",
    },
    {
        image_link:"https://plus.unsplash.com/premium_photo-1661769338046-e07bc03ff32a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "blood Test",
        // price: 599.00,
        rating: 5 + "(2)",
        product:"Eyeshadow Brush",
    },
    {
        image_link:"https://images.unsplash.com/photo-1584452964155-ef139340f0db?q=80&w=1797&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "blood Test",
        // price: 599.00,
        rating: 4.8 + "(42)",
        product:"Face Brush",
    },
    {
        image_link:"https://plus.unsplash.com/premium_photo-1661274159117-fd9939ef2ed0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "blood Test",
        // price: 399.00,
        rating: 4.4 + "(5)",
        product:"Eyeshadow Brush",
    },
    {
        image_link:"https://plus.unsplash.com/premium_photo-1664299422915-d67e36404534?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "blood Test",
        // price: 399.00,
        rating: 4.8 + "(6)",
        product:"Eyeshadow Brush",
    },
    {
        image_link:"https://images.unsplash.com/photo-1584452964155-ef139340f0db?q=80&w=1797&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "blood Test",
        // price: 399.00,
        rating: 4.5 + "(13)",
        product:"Face Brush",
    },
    {
        image_link:"https://plus.unsplash.com/premium_photo-1664299422915-d67e36404534?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "blood Test",
        // price: 399.00,
        rating: 4.9 + "(24)",
        product:"Face Brush",
    },
    {
        image_link:"https://plus.unsplash.com/premium_photo-1661769338046-e07bc03ff32a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "blood Test",
        // price: 1499.00,
        rating: 5 + "(1)",
        product:"Face Essentials Combo",
    },
    {
        image_link:"https://images.unsplash.com/photo-1584452964155-ef139340f0db?q=80&w=1797&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "blood Test",
        // price: 649.00,
        rating: 4.5 + "(6)",
        product:"EYES & FACE Combo",
    },

];

localStorage.setItem("RelevanceData",JSON.stringify(obj_data));
let Relevance=JSON.parse(localStorage.getItem("RelevanceData"));


 //jquery for toggle sub_menu
 $(document).ready(function(){
    $('.sub-btn').click(function(){
        // console.log("hiii")
        $(this).next('.sub_menu').slideToggle();
        $(this).find('.dropdown').toggleClass('rotate');
    });
})




function append(data){
    const right_side=document.getElementById('right_side');
    right_side.innerHTML=null;

    data.forEach((el)=>{
    const div=document.createElement("div");
    div.setAttribute("id","p-div");

    const div2=document.createElement("div");
    div2.setAttribute("class","star-main-div");

    const div3=document.createElement("div");
    div3.setAttribute("class","star-div");
    div3.innerHTML = '<i class="fa-regular fa-heart 2fa"></i>';

    const img=document.createElement('img');
    img.src=el.image_link;

    const Name=document.createElement("p");
    Name.innerText=el.name;
    
    const Price=document.createElement("h4");
    Price.innerText=" ₹ "+ el.price;

    const Rating=document.createElement("h4");
    Rating.style.color="rgb(242, 106, 128)";
    if(el.rating==null){
        Rating.innerText=" ★ " + "0.0";
    }
    else{
        Rating.innerText=" ★ "+el.rating;
    }

    const btn=document.createElement("button")
    btn.innerHTML="VISIT LAB";
    btn.addEventListener("click",()=>{
        addtocart(el); 
    })


     div2.append(div3,btn);
    div.append(img,Name,Price,Rating,div2);
    right_side.append(div);
    })
}

append(obj_data);

let cartdata=JSON.parse(localStorage.getItem("CartList")) || [];
function addtocart(el){
    cartdata.push(el);
    localStorage.setItem("CartList",JSON.stringify(cartdata));
    alert("test Added To Cart for appointment Successfully")
}

//Relevance data 
let relevance_p=document.getElementById('s1');
relevance_p.addEventListener("click", ()=>{
    starting();
});
const starting=async()=>{
    append(Relevance);
  }
  


    //sort high to low
    let hightolow_p=document.getElementById('s2');
    hightolow_p.addEventListener("click", ()=>{
        hlrating();
    });
    const hlrating=()=>{
        // console.log("HL");
     let sortdata= obj_data.sort(function(a,b){
         return b.price - a.price;
       });
     append(sortdata);
   }


  //sort low to high
  let lowtohigh_p=document.getElementById('s3');
  lowtohigh_p.addEventListener("click", ()=>{
    lhrating()
});
  const lhrating=()=>{
    // console.log("LH");
    let sortdata = obj_data.sort(function(a,b){
        return a.price - b.price ;
      });
    append(sortdata);
  }
  
//   -------------------------------
 
let filter_1=document.getElementById('F1');
filter_1.addEventListener("click", ()=>{
   Filter_1()
});
const Filter_1=()=>{
 let  data_Filter_1=[
    {
        image_link:"https://plus.unsplash.com/premium_photo-1661769338046-e07bc03ff32a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "blood Test",
        
        // price: 599.00,
        rating: 4.8 + "(42)",
        product:"Face Brush",
    },
    {
        image_link:"https://plus.unsplash.com/premium_photo-1661274159117-fd9939ef2ed0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "blood Test",
        // price: 399.00,
        rating: 4.8 + "(6)",
        product:"Eyeshadow Brush",
    },
   ]
   //console.log("data_Filter_1:",data_Filter_1);
   append(data_Filter_1);
}


let filter_2=document.getElementById('F2');
filter_2.addEventListener("click", ()=>{
  Filter_2()
});
const Filter_2=()=>{
let  data_Filter_2=[
    {
        image_link:"https://images.unsplash.com/photo-1584452964155-ef139340f0db?q=80&w=1797&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "blood Test",
        // price: 599.00,
        rating: 5 + "(2)",
        product:"Eyeshadow Brush",
    }, 
    {
        image_link:"https://plus.unsplash.com/premium_photo-1664299422915-d67e36404534?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "blood Test",
        // price: 599.00,
        rating: 5 + "(2)",
        product:"Eyeshadow Brush",
    },
    {
        image_link:"https://images.unsplash.com/photo-1584452964155-ef139340f0db?q=80&w=1797&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "blood Test",
        // price: 1499.00,
        rating: 5 + "(1)",
        product:"Face Essentials Combo",
    },
   
  ]
  append(data_Filter_2);
}


let filter_3=document.getElementById('F3');
filter_3.addEventListener("click", ()=>{
  Filter_3()
});
const Filter_3=()=>{
let  data_Filter_3=[
    {

        image_link:"https://plus.unsplash.com/premium_photo-1661769338046-e07bc03ff32a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "blood Test",
        // price: 399.00,
        rating: 4.9 + "(15)",
        product:"Face Brush",
    },
    {
        image_link:"https://plus.unsplash.com/premium_photo-1664299422915-d67e36404534?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "blood Test",
        // price: 399.00,
        rating: 4.4 + "(5)",
        product:"Eyeshadow Brush",
    },
    {
        image_link:"https://plus.unsplash.com/premium_photo-1661274159117-fd9939ef2ed0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "blood Test",
        // price: 399.00,
        rating: 4.9 + "(24)",
        product:"Face Brush",
    },
  ]
  append(data_Filter_3);
}


let filter_4=document.getElementById('F4');
filter_4.addEventListener("click", ()=>{
  Filter_4()
});
const Filter_4=()=>{
let  data_Filter_4=[
    {
        image_link:"https://plus.unsplash.com/premium_photo-1661274159117-fd9939ef2ed0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "blood Test",
        // price: 499.00,
        rating: 4.8 + "(26)",
        product:"Foundation Brush",
    },
    {
        image_link:"https://images.unsplash.com/photo-1600443271879-ac4adddb2927?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "blood Test",
        // price: 399.00,
        rating: 5 + "(3)",
        product:"Eyeshadow Brush",
    },

  ]
  append(data_Filter_4);
}


