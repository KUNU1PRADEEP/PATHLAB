// let ind=()=>{
//   window.location.href="Login.html"
// }


let ind=document.getElementById("changename").addEventListener("click",function(){
  window.location.href="Login.html"
})


function slideShow(){


const arr=[
    "images/i1.jpg",  

    "images/i2.jpg",
  
    "images/poster1.jpg",
  
    "images/i3.jpg",
  
  
    "images/i4.jpg",
  
  
  
    "images/i5.jpg",

    "images/poster1.jpg",
  
]


    let i=0;
    let div=document.getElementById('carousel')

    let img=document.createElement('img');
    img.src=arr[0];

    div.append(img);
    i=i+1;
    
    setInterval(function(){

        if(i==7){
            i=0;
        }
        img.src=arr[i];
        i=i+1;

        div.append(img);

    }, 2000);
}

slideShow();



//seller

let bestSellersLeftArr = [
    {
        img_url:"https://plus.unsplash.com/premium_photo-1661769338046-e07bc03ff32a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        name : "Blood Test", 
        // price: "999",
       
        text : "VISIT LAB",
    },
    {img_url:"https://plus.unsplash.com/premium_photo-1664299422915-d67e36404534?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name : "Blood Test",
    //  price: "799",
    text : "VISIT LAB",},
    {img_url:"https://plus.unsplash.com/premium_photo-1661274159117-fd9939ef2ed0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     name : "Blood Test", 
    //  price: "449",
    text : "VISIT LAB",},
    {img_url:"https://images.unsplash.com/photo-1600443271879-ac4adddb2927?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //  price: "699",
     text : "VISIT LAB",},
   
]

let pro_div = document.querySelector(".best_seller_products")
let bestSeller = (bestSellersLeftArr,container)=>{
    container.innerText = ""
    bestSellersLeftArr.forEach((el)=>{
        // console.log(el)
        
        let div = document.createElement("div")
        div.className = "four_pro_div"

        let bsimg = document.createElement("img")
        bsimg.src = el.img_url
        bsimg.style.height = "250px"
        bsimg.style.width = "100%"

        let bsname = document.createElement("div")
        bsname.className = "pro_name"
        bsname.innerText = el.name

        
        let pdiv = document.createElement("div")
        pdiv.className = "pdiv"         
        let bsprice = document.createElement("p")
        bsprice.innerText = `₹ ${el.price}`
        pdiv.append(bsprice)

        let bstag = document.createElement("div")
        bstag.className = "text_tag"
        bstag.innerText = el.text

        let img_name_price_div = document.createElement("div")
        img_name_price_div.className = "img_name_price_div"

        img_name_price_div.append(bsimg,bsname,pdiv,)
        div.append(img_name_price_div,bstag)
        // console.log(div)
        container.append(div)
    })
   

}



bestSeller(bestSellersLeftArr,pro_div)
// let flag1= true;


// document.querySelector(".left_arr_div").addEventListener("click",()=>{

//     flag1=!flag1
//     if(flag1){
//         bestSeller(bestSellersLeftArr,pro_div)
//     }else{
//         bestSeller(bestSellersRightArr,pro_div)
//     }
    
// })
// let flag2 = false
// document.querySelector(".right_arr_div").addEventListener("click",()=>{
//     flag2 = !flag2
//     if(flag2){
//         bestSeller(bestSellersRightArr,pro_div)
//     }else{
//         bestSeller(bestSellersLeftArr,pro_div)
//     }
    
// })


let videoPlayArr = [
    {
      src: "images/v8.mp4",
    },
    {
      src: "images/v2.mp4",
    },
    {
      src: "images/v3.mp4",
    },
    {
      src: "images/v4.mp4",
    },
    {
      src: "images/v7.mp4",
    },
    {
      src: "images/v6.mp4",
    },
    {
      src: "images/v7.mp4",
    },
    {
      src: "images/v1.mp4",
    },
    {
      src:"images/v5.mp4",
    },
    {
      src:"images/v6.mp4",
    },
    {
      src:"images/v7.mp4",
    },
    {
      src:"images/v1.mp4",
    },
    {
      src:"images/v2.mp4",
    },
    {
      src:"images/v3.mp4",
    },
    {
      src:"images/v4.mp4",
    },
    {
      src:"images/v5.mp4",
    },
    
    

    // {
    //   src: "https://cdn4.fireworktv.com/medias/2022/1/18/1642490662-qrlyukpb/watermarked/540/HowtoBaketheRightWay.mp4",
    // },
    // {
    //   src: "https://cdn4.fireworktv.com/medias/2022/4/30/1651342203-wnqistjz/watermarked/540/EffortlesslyExpressive9-16.mp4",
    // },
    // {
    //   src: "https://cdn4.fireworktv.com/medias/2022/1/18/1642490844-ureajzhm/watermarked/540/FaceLiftlikeKendallJenner.mp4",
    // },
    // {
    //   src: "https://cdn4.fireworktv.com/medias/2022/2/15/1644906634-nshmulgo/watermarked/540/FoundationHacks.mp4",
    // },
    // {
    //   src: "https://cdn4.fireworktv.com/medias/2022/2/15/1644905324-hgvtazeo/watermarked/540/KoreanBeautyHack-JAMSU.mp4",
    // },
    // {
    //   src: "https://cdn4.fireworktv.com/medias/2022/2/4/1643956359-clqnsktd/watermarked/540/SunkissedLookTutorial.mp4",
    // },
    // {
    //   src: "https://cdn4.fireworktv.com/medias/2022/1/18/1642491110-kgvyhwbt/watermarked/540/ReverseCatEyeliner.mp4",
    // },
    // {
    //   src: "https://cdn4.fireworktv.com/medias/2022/3/9/1646836364-eixsrdot/watermarked/540/275182554_2096939307119931_4496228888503996313_n.mp4",
    // },
    // {
    //   src: "https://cdn4.fireworktv.com/medias/2022/3/9/1646835858-lvtrfujp/watermarked/540/InShot_20220309_184811595.mp4",
    // },
    // {
    //   src: "https://cdn4.fireworktv.com/medias/2022/2/4/1643955080-zfievyxo/watermarked/540/TissuePaperEyeshadowHack.mp4",
    // },
    // {
    //   src: "https://cdn4.fireworktv.com/medias/2021/11/1/1635767024-pedhjtzf/watermarked/540/EasywaytoMattifyLipstick7.mp4",
    // },
    // {
    //   src: "https://cdn4.fireworktv.com/medias/2022/3/9/1646836196-scobeuaq/watermarked/540/Flawlessrecreationoftheiconicdiva.mp4",
    // },
    // {
    //   src: "https://cdn4.fireworktv.com/medias/2022/3/9/1646836728-bkvwtnrc/watermarked/540/InShot_20220309_183351048.mp4",
    // },
    // {
    //   src: "https://cdn4.fireworktv.com/medias/2022/3/9/1646836997-qhfletip/watermarked/540/GlamSmokeyEyelook.mp4",
    // },
    // {
    //   src: "https://cdn4.fireworktv.com/medias/2022/4/22/1650623566-berqzfil/watermarked/540/MettlePrimingBalm-Vertical.mp4",
    // },
  ];

let vid_div = document.querySelector(".vidSlider");
let videoPlay = (data) => {
  data.forEach((el) => {
    let video_div = document.createElement("div");
    video_div.className = "video_div";
    let video = document.createElement("video");
    video.src = el.src;
    video.style.border = "0";
    video.className = "videoshorts";
    video.style.cursor = "pointer";
    //  console.log(video)
    vid_div.append(video);
  });
};
videoPlay(videoPlayArr);
const clip = document.querySelectorAll(".videoshorts");
for (let i = 0; i < clip.length; i++) {
  clip[i].addEventListener("mouseover", (e) => {
    clip[i].play();
  });
  clip[i].addEventListener("mouseout", (e) => {
    clip[i].pause();
  });
}
let vidTemp = 0;
document.querySelector("#left").addEventListener("click", () => {
  let winWidth = window.outerWidth;
  vidTemp = vidTemp - winWidth * 0.74;

  if (vidTemp > 0) {
    console.group("left", vidTemp);
    vid_div.style.transform = `translateX(${-vidTemp}px)`;
    vid_div.style.transition = ".4s";
  } else {
    vid_div.style.transform = `translateX(${-0}px)`;
    vid_div.style.transition = ".4s";
    vidTemp = 0;
  }
});
document.querySelector("#right").addEventListener("click", () => {
  let winWidth = window.outerWidth;

  vidTemp = vidTemp + winWidth * 0.74;
  console.group("right", vidTemp, winWidth);
  if (vidTemp < winWidth * 3) {
    vid_div.style.transform = `translateX(${-vidTemp}px)`;
    vid_div.style.transition = ".4s";
  } else {
    vidTemp = vidTemp - winWidth * 0.74;
  }
});

function slideShow2(){
    const arr=['images/i1.jpg',
'images/i2.jpg',
'images/i3.jpg',
'images/i4.jpg',
'images/i5.jpg',
'images/i6.jpg']

    let i=0;
    let div=document.getElementById('carousel2')
    
    let img=document.createElement('img');
    img.src=arr[0];

    div.append(img);
    i=i+1;
    
    setInterval(function(){

        if(i==6){
            i=0;
        }
        img.src=arr[i];
        i=i+1;

        div.append(img);

    }, 3000);
}

slideShow2();

// function slideShow3(){
//     const arr=[
// 'https://d32baadbbpueqt.cloudfront.net/Homepage/7fcf7da7-9d0b-4e1a-b09e-e075825bc9ad.jpg',
// 'https://d32baadbbpueqt.cloudfront.net/Homepage/05b6a9d3-2d45-4381-80f2-2b3fdd2c56f0.jpg',
// 'https://d32baadbbpueqt.cloudfront.net/Homepage/67885afc-5ba2-4f1d-a6dd-7012bf5b7b90.jpg'
// ]

// let i=0;
// let div=document.getElementById('carousel3')

// let img=document.createElement('img');
// img.src=arr[0];

// div.append(img);
// i=i+1;

// setInterval(function(){

//     if(i==3){
//         i=0;
//     }
//     img.src=arr[i];
//     i=i+1;

//     div.append(img);

// }, 2000);
// }

// slideShow3();



