export const scrollIntoView = (id:string="") => {
    const element = document.getElementById(id);
    console.log("element",element,id)
    element?.scrollIntoView({
        behavior:'smooth'
    })
}