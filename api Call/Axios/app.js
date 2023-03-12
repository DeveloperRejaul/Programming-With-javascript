


// axios (config)
// axios (url, [config] )

// axios.get (url, [config] )
// axios.pst (url, [config] )
// axios.put (url, [config] )
// axios.patch (url, [config] )
// axios.delete (url, [config] )

// axios return response object - data , status, statusText, header, config


//  get data
axios
    .get("url")
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))

// post data
axios
    .post("url",{
        body:JSON.stringify({
            title: "fooma",
            body: "bar",
            userId: 1,
        }),
    })
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))


// put data
axios
    .put("url",{
        body:JSON.stringify({
            title: "foomafdklf",
            body: "barsdakfjfga",
            userId: 1,
        }),
    })
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))
    


// patch data
axios
    .patch("url",{
        body:JSON.stringify({
            title: "foomafdklf",
            body: "barsdakfjfga",
            userId: 1,
        }),
    })
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))
    
    
// patch data
axios
    .delete("url")
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))




/*===================================================
                async await
===================================================*/

// stap 01
const makeRequest = async (config)=>{
    return await axios(config);
};


// stap 02 - get data
const getData = () =>{
    makeRequest("https://jsonplaceholder.typicode.com/todos/1")
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))
}
getData()

// stap 02 - create data
const createData = () =>{
    makeRequest({
        url:"https://jsonplaceholder.typicode.com/todos/1",
        methed:"post",
        data: JSON.stringify({
            title:"foo",
            body:"bar",
            userID: 1,
        })

    })
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))
}
createData()


// stap 02 - update data
const updateData = () =>{
    makeRequest({
        url:"https://jsonplaceholder.typicode.com/todos/1",
        methed:"put",
        data: JSON.stringify({
            body:"barafsadfasd",
            userID: 1,
        })

    })
    .then((res)=>console.log(res.data))
    .catch((err)=>console.log(err))
}
updateData()



// stap 02 - delete data
const deleteData = () =>{
    makeRequest({
        url:"https://jsonplaceholder.typicode.com/todos/1",
        methed:"delete",
    
    })
    .then((res)=>console.log(res.data))
    .catch((err)=>console.log(err))
}
deleteData()

