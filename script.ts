export{};

const newDiv = document.createElement('div');
let grid = document.body.appendChild(newDiv);
grid.setAttribute("class", "grid");
let items: any[] = [];
let item: any;
let template: any;

for (var i = 1; i < 17; i++) {
    template = document.createElement('div');
    template.setAttribute("class", "grid-item");
    template.setAttribute("id", i.toString());
    item = grid.appendChild(template);
    items.push(item);
}
