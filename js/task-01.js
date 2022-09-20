const inner = document.querySelector("#categories");
const list = inner.querySelectorAll('.item') ;
console.log("Number of categories:",Number(list.length));

const item = list.forEach(title => {
    const text = title.querySelector('h2');
    console.log("Category:",text.textContent);
    const list = title.querySelectorAll("li");
    console.log("Elements:", Number(list.length));
})



