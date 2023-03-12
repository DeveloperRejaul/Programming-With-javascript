// 2 ways to call - than , async awit



// then way
// stap 01 templet
fetch("url").then((res)=> res.json())
.then((res)=>console.log(res))
.catch((err)=>console.log(err))

// ***********************************************//

// stap 02 templet // statas code eror hendeling //GET METHOD //GET FOR CALLING DATA IN SURVER
fetch("url")
.then((res)=>{
    if (!res.ok) {
        const message = `Error : ${res.status}`
        throw new Error (message)
    }else{
        return res.json();
    }
})
.then((res)=>console.log(res))
.catch((err)=>console.log(err));



// stap 02 templet // statas code eror hendeling //POST METHOD // POST FOR CREATING NEW DATA
fetch("url",{
    // stap - 01
    method: "POST",

    // stap - 02
    headers:{
        "Content-type":"application/json; charset=UTF-8",
    },
    // STAP - 03
    body:JSON.stringify({
        title: "foo",
        id:01,
    })
})
.then((res)=> {
    if (!res.ok) {
        const message = `Error : ${res.status}`
        throw new Error (message)
    }else{
        return res.json();
    }
})
.then((res)=>console.log(res))
.catch((err)=>console.log(err))



// stap 02 templet // statas code eror hendeling //PUT METHOD // FUT FOR ALL DATA UPDATE
fetch("url",{
    // stap - 01
    method: "PUT",

    // stap - 02
    headers:{
        "Content-type":"application/json; charset=UTF-8",
    },
    // STAP - 03
    body:JSON.stringify({
        title: "foo",
        id:01,
    })
})
.then((res)=> {
    if (!res.ok) {
        const message = `Error : ${res.status}`
        throw new Error (message)
    }else{
        return res.json();
    }
})
.then((res)=>console.log(res))
.catch((err)=>console.log(err))



// stap 02 templet // statas code eror hendeling //PATCH METHOD //PATCH FOR SINGLE DATA UPDATE
fetch("url",{
    // stap - 01
    method: "PATCH",

    // stap - 02
    headers:{
        "Content-type":"application/json; charset=UTF-8",
    },
    // STAP - 03
    body:JSON.stringify({
        title: "fooMA",
    })
})
.then((res)=> {
    if (!res.ok) {
        const message = `Error : ${res.status}`
        throw new Error (message)
    }else{
        return res.json();
    }
})
.then((res)=>console.log(res))
.catch((err)=>console.log(err))


// stap 02 templet // statas code eror hendeling //DELETE METHOD //DELET  FOR DELETE DATA
fetch("url",{
    // stap - 01
    method: "DELETE",
})
.then((res)=> {
    if (!res.ok) {
        const message = `Error : ${res.status}`
        throw new Error (message)
    }else{
        return res.json();
    }
})
.then((res)=>console.log(res))
.catch((err)=>console.log(err))




/*=====================================================
                async await
=====================================================*/

//   03 TEMPLET
const makeRequst = async (url, config, DATA)=>{
    const res = await fetch(url, config)
    if (!res.ok) {
        const message = `Error : ${res.status}`
        throw new Error (message)
    } else {
        const data = res.json();
        return data
    }

}

// DET TADA
const getData = () =>{
    makeRequst("url")
    .then((res) => console.log(res))
    .catch((err) => console.log(err))

};
getData();


// POST DATA
const SentData = () =>{
    makeRequst("url",{
        method : "POST",
        body: JSON.stringify({
            title: " fooma",
            doby: " bar ",
            id:02,
        }),
        headers:{
            "Content-type":"application/json; charset=UTF-8",
        }

    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err))

};
SentData()




// PUT DATA 
const updateData = () =>{
    makeRequst("url",{
        method : "PUT",
        body: JSON.stringify({
            title: " foomaQWEQRQWER",
            doby: " barQWREQWRE ",
        }),
        headers:{
            "Content-type":"application/json; charset=UTF-8",
        }

    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err))

};
updateData()


// PATCH DATA 
const updateData = () =>{
    makeRequst("url",{
        method : "PATCH",
        body: JSON.stringify({
            title: " foomaQWEQRQWER",
        }),
        headers:{
            "Content-type":"application/json; charset=UTF-8",
        }

    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err))

};
updateData()

// DELETE DATA 
const updateData = () =>{
    makeRequst("url",{
        method : "DELETE",
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err))

};
updateData()




// stap * full setap
// var tabil = document.querySelector("#myData")
// console.log(tabil);
// const link="https://jsonplaceholder.typicode.com/posts";
// fetch(link).then(
//     response=>{
//         response.json().then(
//             data=>{
//                 // console.log(data);

//                 if (data.length>0) {

//                     var temp = "";

//                     // start for loop
//                     data.forEach(element => {
//                         console.log(element);
//                         temp+="<tr>";
//                         temp+="<td>"+element.body+"</td>";
//                         temp+="<td>"+element.id+"</td>";
//                         temp+="<td>"+element.title+"</td> <tr>";
//                     });
//                     // close for loop

//                     tabil.innerHTML=temp;
                    
//                 }
//             }
//         )
//     }
// )

// .catch(err=>console.log(err))
