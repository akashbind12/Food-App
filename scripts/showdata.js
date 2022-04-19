//getdata()
//apenddata()

async function  getdata(url){
    try{
       var res = await fetch(url);
       var data = await res.json();

       return data;
    }
    catch(err){
        console.log(err);
    }     
}

const  showsearchresult = (data,parent) =>{
     parent.innerHTML="";
    // console.log(data);
    
    data.map((el) => {
        console.log(el)
        
        const {
            strMealThumb,
            strCategory ,
            strMeal ,
            strTags,
        } = el;

        console.log(strCategory)

        var card = document.createElement("div")
        card.setAttribute("id","card")
        
        // var imgcard = document.createElement("div")

        var img = document.createElement("img")
        img.src = strMealThumb;

        var name = document.createElement("p")
        name.textContent =  strMeal;

        var Category = document.createElement("p")
        Category.textContent =  strCategory;

        var tag = document.createElement("p")
        tag.textContent =  strTags;

        card.append(img,name,Category,tag)

        parent.append(card);


    })

}



export { getdata, showsearchresult};