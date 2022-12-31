// To import you need to export. There are 2 ways to export functions or variables
//1.Way

export const showAlert = (msg) => {
    alert(msg);
}

export const showConfirm = (msg) =>{
    return confirm(msg);
}
//2. Way
//export {showAlert, showConfirm}

// There might be some functions very similar. Kind of this function can be created once and then exported with default keyword
// export default showAlert and to import that kind of function when you use import type the name of function outside of {}.