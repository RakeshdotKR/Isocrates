//File System
const fs = require("fs");
fs.readFile('./docs/iso1.txt',(err,data) => {
    if(err){
        console.log(err);
    }
    console.log(data.toString());
});
// fs.writeFile('./docs/iso2.txt','Hello,again from Isocrates',()=>{
//     console.log('File written successfully');
// });
// if (!fs.existsSync("./assets")) {
//   fs.mkdir("./assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("Folder created");
//   });
// }
// else{
//     // console.log('Folder already exists');
//     fs.rmdir("./assets", (err) => {
//         if (err) {
//           console.log(err);
//         }
//         console.log("Folder deleted");
//       });
// }
if (fs.existsSync('./docs/iso2.txt')) {
    fs.unlink('./docs/iso2.txt',err => {
        if(err){
            console.log(err);
        }
        console.log("File deleted");
    });
}
