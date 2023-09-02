const handleClick=()=>{
    const onclick=document.getElementById('handleClick');
    }
    const showClick=()=>{
      const showContainer=document.getElementById('show-container')
      const div=document.createElement('div');
      
      showContainer.appendChild(div)
    console.log('clicked')
    }
    
    
    const handleCategories=async()=>{
    const res=await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data=await res.json();
    const tabContainer=document.getElementById('tab-container');
    data.data.forEach(category => {
        console.log(category)
     
    const div=document.createElement('div');
    div.innerHTML=`
    <button onclick="handleLodeVideo('${category.category_id}')" class="btn btn-neutral">${category.category}</button>
    
    `
    
    tabContainer.appendChild(div)
    });
    
    
    
    }
    const handleLodeVideo= async(categoryID)=>{
     const res=await fetch(` https://openapi.programming-hero.com/api/videos/category/${categoryID}`);
     const data=await res.json();
     const cardContainer=document.getElementById('card-container');
     cardContainer.innerHTML='';
     data.data.forEach(news => {
        
        const div=document.createElement('div');
        div.innerHTML=`
      
     <div class="card w-96 bg-base-100 shadow-xl">
        <figure class=" h-64">
          <img class=""
            src="${news.thumbnail}"
            
          />
        </figure>
        ​​​<p class="justify-end absolute ml-[280px] pt-[200px] text-red-500">${news.others.posted_date}</p>
     
        <div class="card-footer flex justify-between mt-8">
        <div class="flex">
          <div>
            <div class="avatar online">
              <div class="w-14 rounded-full">
                <img
                  src="${news.authors[0]?.profile_picture}"
                  
                />
              </div>
            </div>
          </div>
          <div class="text-2xl px-2 flex-1">
            <h6>${news.title}</h6>
            <i class="fa-solid fa-badge-check"></i>
         
           
          </div>
        </div>
    </div>
    
    
        <div class="px-[60px]">
        <p>${news.authors[0].profile_name}</p>
        <p>${news.others.views}</p>
      </div>
        
      
      </div>
        `
        
    if(Array.length===0)
    {
      console.log('clicked')
    }
    
        cardContainer.appendChild(div)
    
     });
    //  const handleLodeVideo=()=>{
    // const click=category.category_id[4];
    // console.log(click,"clicked")
    //  }
     
    
     console.log(data.data)
    //  const handleCategories=()=>{
    //   if(Array.length===0){
    //     console.log('Add data')
    //   }
    //   else{
    //     console.log('Already Add a data')
    //   }
    //  }
    const buttonClick=async()=>{
      const res=await fetch('https://openapi.programming-hero.com/api/videos/category/1005');
      const clicked=document.getElementById('drowing-button')
      const data=await res.json();
      const div=document.createElement('div');
      div.innerHTML=`
      
      `
      if (Array.length===0) {
        console.log('clicked')
      }
      else{
        console.log('Error')
      }
      
      }
      buttonClick();
    }
    
    handleLodeVideo("1000")
    
    handleCategories()