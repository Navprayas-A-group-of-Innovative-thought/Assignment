const form = document.querySelector("form");

document.addEventListener("submit",(e) => {
    console.log(e.target);
    const formData = new FormData(e.target);
    let formObj = {};

    for(let key of formData.keys()){
        formObj[key] = formData.get(key);
    }
    console.log(formObj);
    e.preventDefault();
});

