export {};

// var newDiv = document.createElement('div');
// var grid = document.body.appendChild(newDiv);
// grid.setAttribute("class", "grid");
let add_element = () => {
    const template = document.createElement('div');
    template.innerHTML = "Content inside DIV";
    
    document.body.appendChild(template);
}

add_element();
// var items: any[];
// items = [];

// for (var i = 0; i < 16; i++) {
//     var item = document.body.appendChild(newDiv);
//     item.setAttribute("class", "grid-item");
//     item.setAttribute("id", i.toString());
//     items.push(item);
// }

