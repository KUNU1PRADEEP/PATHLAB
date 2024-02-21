let obj_data=[

    
    {
        image_link:
            "https://www.lalpathlabs.com/blog/wp-content/uploads/2016/03/ecg-test.jpg",
        name: "ECG Test",
        // price: 100,
        rating: "4.7(414)",
        strike: '',
    },

    {
        image_link:
            "https://d3b6u46udi9ohd.cloudfront.net/wp-content/uploads/2019/01/17073558/EKG-Test.png",
        name: "ECG Test",
        // price: XX,
        rating: "4.6(141)",
        strike: '',
    },
    
    {
        image_link:
            "https://thumbs.dreamstime.com/z/older-patient-under-ecg-ekg-test-cardiologist-electrocardiogram-equipment-making-cardiogram-who-attached-vacuum-158836531.jpg",
        name: "ECG Test",
        // price: XX,
        rating: "4.9(121)",
        strike: '',
    }, 
    
    {
        image_link:
            "https://www.lalpathlabs.com/blog/wp-content/uploads/2016/03/ecg-test.jpg",
        name: "ECG Test",
        // price: XX,
        rating: "4.9(41)",
        strike: '',
    },
    
    {
        image_link:
            "https://thumbs.dreamstime.com/z/older-patient-under-ecg-ekg-test-cardiologist-electrocardiogram-equipment-making-cardiogram-who-attached-vacuum-158836531.jpg",
        name: "ECG Test",
        // price: XXXX,
        rating: "4.8(142)",
        strike: '',
    },
    
    {
        image_link:
            "https://th.bing.com/th/id/OIP.AJrpMcF5AUsLREK-lnaaHAAAAA?rs=1&pid=ImgDetMain",
        name: "ECG Test",
        // price: XXXX,
        rating: "4.9(54)",
        strike: 'RS.799',
    }, 
    
    {
        image_link:
            "https://images.assetsdelivery.com/compings_v2/roman023/roman0231909/roman023190900136.jpg",
        name: "ECG Test",
        // price: XX,
        rating: "4.7(421)",
        strike: '',
    },

    
    {
        image_link:
            "https://www.lalpathlabs.com/blog/wp-content/uploads/2016/03/ecg-test.jpg",
        name: "ECG Test",
        // price: XXXX,
        rating: "4.9(137)",
        strike: '1299',
    },
    
    {
        image_link:
            "https://images.assetsdelivery.com/compings_v2/roman023/roman0231909/roman023190900136.jpg",
        name: "ECG Test",
        // price: XXXX,
        rating: "4.7(421)",
        strike: '1399',
    },
    
    {
        image_link:
            "https://d3b6u46udi9ohd.cloudfront.net/wp-content/uploads/2019/01/17073558/EKG-Test.png",
        name: "ECG Test",
        // price: XX,
        rating: "4.9(14)",
        strike: '',
    }, 
    
    {
        image_link:
            "https://th.bing.com/th/id/OIP.AJrpMcF5AUsLREK-lnaaHAAAAA?rs=1&pid=ImgDetMain",
        name: "ECG Test",
        // price: XXXX,
        rating: "4.8(201)",
        strike: '2100',
    },
    
    {
        image_link:
            "https://media.sciencephoto.com/image/m8720324/800wm/M8720324-ECG_stress_test_on_male_patient.jpg",
        name: "ECG Test",
        // price: XX,
        rating: "4.6(137)",
        strike: '',
    },
    
    {
        image_link:"https://images.assetsdelivery.com/compings_v2/roman023/roman0231909/roman023190900136.jpg",
         name:   "ECG Test",
        // price: XX,
        rating: "4.8(27)",
        strike: '',
    }, 
    
    {
        image_link:
            "https://th.bing.com/th/id/OIP.-bpHs2jbYRbdp67CXYNFGgHaE8?rs=1&pid=ImgDetMain",
        name: "ECG Test",
        // price: XX,
        rating: "4.5(421)",
        strike: 'RS.1199',
    },
    
    {
        image_link:
            "https://media.sciencephoto.com/image/m8720324/800wm/M8720324-ECG_stress_test_on_male_patient.jpg",
        name: "ECG Test",
        // price: XX,
        rating: "4.8(421)",
        strike: 'RS.999',
    },
    
    {
        image_link:
            "https://images.assetsdelivery.com/compings_v2/roman023/roman0231909/roman023190900136.jpg",
        name: "ECG Test",
        // price: XX,
        rating: "4.5(421)",
        strike: 'RS.1799',
    },
    
    {
        image_link:
            "https://www.choc.org/wp/wp-content/uploads/2015/04/Electrocardiogram.jpg",
        name: "ECG Test",
        // price: XX,
        rating: "4.5(421)",
        strike: 'RS.1799',
    },

    {
        image_link:
            "https://th.bing.com/th/id/OIP.-bpHs2jbYRbdp67CXYNFGgHaE8?rs=1&pid=ImgDetMain",
        name: "ECG Test",
        // price: XX,
        rating: "4.5(421)",
        strike: 'RS.1799',
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
alert("TESTS Added To Cart Successfully")
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

// let filter_1=document.getElementById('Ft1');
// filter_1.addEventListener("click", ()=>{
// Filter_1()
// });
// const Filter_1=()=>{
// let  data_Filter_1=[
// {
//     image_link:
//         "https://images.assetsdelivery.com/compings_v2/roman023/roman0231909/roman023190900136.jpg",
//     name: "ECG Test",
//     // price: XX,
//     rating: "4.6(141)",
//     strike: '',
// },
// {
//     image_link:
//         "https://www.lalpathlabs.com/blog/wp-content/uploads/2016/03/ecg-test.jpg",
//     name: "ECG Test",
//     // price: XX,
//     rating: "4.9(41)",
//     strike: '',
// },
// ]
// //console.log("data_Filter_1:",data_Filter_1);
// append(data_Filter_1);
// }


// let filter_2=document.getElementById('Ft2');
// filter_2.addEventListener("click", ()=>{
// Filter_2()
// });
// const Filter_2=()=>{
// let  data_Filter_2=[
// {
//     image_link:
//         "https://www.lalpathlabs.com/blog/wp-content/uploads/2016/03/ecg-test.jpg",
//     name: "ECG Test",
//     // price: XX,
//     rating: "4.8(142)",
//     strike: '',
// },


// {
//     image_link:
//         "https://images.assetsdelivery.com/compings_v2/roman023/roman0231909/roman023190900136.jpg",
//     name: "ECG Test",
//     // price: XX,
//     rating: "4.9(14)",
//     strike: '',
// }, 

// {
//     image_link:
//         "https://th.bing.com/th/id/OIP.-bpHs2jbYRbdp67CXYNFGgHaE8?rs=1&pid=ImgDetMain",
//     name: "ECG Test",
//     // price: XXXX,
//     rating: "4.8(201)",
//     strike: '2100',
// },

// {
//     image_link:
//         "https://www.lalpathlabs.com/blog/wp-content/uploads/2016/03/ecg-test.jpg",
//     name: "ECG Test",
//     // price: XXXX,
//     rating: "4.6(137)",
//     strike: '',
// },

// {
//     image_link:"https://images.assetsdelivery.com/compings_v2/roman023/roman0231909/roman023190900136.jpg",
//      name:   "ECG Test",
//     // price: XXXX,
//     rating: "4.8(27)",
//     strike: '',
// }, 

// {
//     image_link:
//         "https://th.bing.com/th/id/OIP.-bpHs2jbYRbdp67CXYNFGgHaE8?rs=1&pid=ImgDetMain",
//     name: "ECG Test",
//     // price: XXXX,
//     rating: "4.7(421)",
//     strike: '',
// },
// ]
// append(data_Filter_2);
// }


// let filter_3=document.getElementById('Ft3');
// filter_3.addEventListener("click", ()=>{
// Filter_3()
// });
// const Filter_3=()=>{
// let  data_Filter_3=[


// {
// image_link:
//     "https://images.assetsdelivery.com/compings_v2/roman023/roman0231909/roman023190900136.jpg",
// name: "ECG Test",
// // price: XXXX,
// rating: "4.9(121)",
// strike: '',
// }, 
// {
// image_link:
//     "https://www.lalpathlabs.com/blog/wp-content/uploads/2016/03/ecg-test.jpg",
// name: "ECG Test",
// // price: XXXX,
// rating: "4.9(54)",
// strike: 'RS.799',
// }, 

// {
// image_link:
//     "https://th.bing.com/th/id/OIP.-bpHs2jbYRbdp67CXYNFGgHaE8?rs=1&pid=ImgDetMain",
// name: "ECG Test",
// // price: XXXX,
// rating: "4.9(137)",
// strike: '1299',
// },
// {
// image_link:
//     "https://media.sciencephoto.com/image/m8720324/800wm/M8720324-ECG_stress_test_on_male_patient.jpg",
// name: "ECG Test",
// // price: XXXX,
// rating: "4.5(421)",
// strike: 'RS.1199',
// },

// {
// image_link:
//     "https://www.lalpathlabs.com/blog/wp-content/uploads/2016/03/ecg-test.jpg",
// name: "ECG Test",
// // price: XXXX,
// rating: "4.8(421)",
// strike: 'RS.999',
// },

// {
// image_link:
//     "https://images.assetsdelivery.com/compings_v2/roman023/roman0231909/roman023190900136.jpg",
// name: "ECG Test",
// // price: XXXX,
// rating: "4.5(421)",
// strike: 'RS.1799',
// },
// ]
// append(data_Filter_3);
// }


// let filter_4=document.getElementById('Ft4');
// filter_4.addEventListener("click", ()=>{
// Filter_4()
// });
// const Filter_4=()=>{
// let  data_Filter_4=[
  
// {
//     image_link:
//         "https://media.sciencephoto.com/image/m8720324/800wm/M8720324-ECG_stress_test_on_male_patient.jpg",
//     name: "ECG Test",
//     // price: XXXX,
//     rating: "4.5(421)",
//     strike: 'RS.1799',
// },

// {
//     image_link:
//         "https://th.bing.com/th/id/OIP.-bpHs2jbYRbdp67CXYNFGgHaE8?rs=1&pid=ImgDetMain",
//     name: "ECG Test",
//     // price: XXXX,
//     rating: "4.5(421)",
//     strike: 'RS.1799',
// },

// ]
// append(data_Filter_4);
// }

