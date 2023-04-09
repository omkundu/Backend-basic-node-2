// const isEven =require("is-even");

// const res=isEven(5);
// console.log(res);


const fs=require("fs");

// console.log(x.appendFile());
// fs.readFile("./lecture.txt",{encoding:"utf-8"},(err,data)=>{
//     if(err){
//         console.log("Error Reading the file")
//         console.log(err);
//     }
//     console.log(data);
// })

// const data=fs.readFileSync("./lecture.txt",{encoding:"utf-8"})
// console.log(data)

// console.log("bye")


// fs.writeFile("./test.text","Second hello from index.js",{encoding:"utf-8"},(err)=>{
//     if(err){
//         console.log("Err writing to the file")
//         console.log(err)
//     }
//     console.log("Go Check the file now")
// })


fs.appendFile("./test.text","\n  fourth hello from index.js \n",{encoding:"utf-8"},(err)=>{
    if(err){
          console.log(err)
    }
        console.log("Go Check the file now")

})
