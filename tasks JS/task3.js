
const path = "/users/download/index.html"


const isHtml = path => {
    const reqiredExt = ".html";
    const pathExt = path.slice(-5);


    return pathExt === reqiredExt
    

}


console.log(isHtml(path));