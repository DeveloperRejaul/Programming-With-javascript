

// event - onlode(), onerror()
// property - resposnse, responseText, responseType, responseURL, status, statusTaxt
// function - open(), send(), setRequestHeader()


// 01 stap

// const getRequest = () =>{


//     // calling server 
//     const xhr = new XMLHttpRequest();

//     // opening data 
//     xhr.open("get", "url");

//     // creating data in javascript object
//     xhr.onload = () =>{
//         let data = xhr.response;
//         // converting data in javascript object
//         console.log(JSON.parse(data));
//     }

//     // catsh in err
//     xhr.onerror = () => {
//         console.log("Errer is Here");
//     }


//     // finaly sent request 
//     xhr.send()
// }



// 02 stap 

// const makeRequest = (methed, url, DATA) =>{

//     // calling server 
//     const xhr = new XMLHttpRequest();

//     // opening data 
//     xhr.open(methed, url);

//     // sending data in jeson pormet
//     xhr.setRequestHeader('Content-Type', 'application/json')


//     // creating data in javascript object
//     xhr.onload = () =>{
//         let data = xhr.response;
//         // converting data in javascript object
//         console.log(JSON.parse(data));
//     }

//     // catsh in err
//     xhr.onerror = () => {
//         console.log("Errer is Here");
//     }

//     // finaly sent request 
//     xhr.send(JSON.stringify(DATA))
// }

// // for get data
// const getData = () => {
//     makeRequest("GET", "URL")
// }

// // for sent data
// const sentData = () => {
//     makeRequest("POST", "URL",{
//         title:'fooMA',
//         body:"barMA",
//         userId:1,
//     })
// }

// // ALL DATA UPDATE
// const updatetData = () => {
//     makeRequest("PUT", "URL",{

//         title:'fooMA',
//         body:"barMA",
//         userId:1,

//     })
// }

// // SINGLE data update
// const singleupdatetData = () => {
//     makeRequest("PATCH", "URL",{

//         title:'THIS CHANGE',

//     });
// };

// // DELET DATA
// const deleteData = () => {
//     makeRequest("DELETE", "URL",);
// };


// // call all function
// getData()
// sentData()
// updatetData()
// deleteData()






// 03 stap

// server requst with promise

const promisRequest = ()=>{

    return new Promise((resolve, reject)=>{

        // calling server 
        const xhr = new XMLHttpRequest();

        // opening data 
        xhr.open(methed, url);

        // sending data in jeson pormet
        xhr.setRequestHeader('Content-Type', 'application/json')


        // creating data in javascript object
        xhr.onload = () =>{
            let data = xhr.response;
            // converting data in javascript object
            console.log(JSON.parse(data));
        }

        // catsh in err
        xhr.onerror = () => {
            console.log("Errer is Here");
        }

        // finaly sent request 
        xhr.send(JSON.stringify(DATA))

    })

}

// gat data
const getData =()=>{
    promisRequest('GET', "URL")
    .then((response)=>{
        console.log(response);
    })
}


