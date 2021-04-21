var item = document.getElementById("itemName");
var btn = document.getElementById("enter");

createListElement = () => {
    var li = document.createElement("li");
    var div = document.createElement("div");
    div.appendChild(document.createTextNode(item.value));
    li.appendChild(div);
    var del = document.createElement("button");
    del.innerText = "Delete";
    del.addEventListener("click", () => deleteItem(li));
    li.appendChild(del);
    addDoneToggle(div);
    var ul = document.querySelector("ul");
    ul.appendChild(li);
    item.value = "";
};

addListPostClick = () => {
    if (item.value.length > 0) {
        createListElement();
    }
};

addListPostEnter = (event) => {
    if (event.key === "Enter" && item.value.length > 0) {
        createListElement();
    }
};

addDoneToggle = (i) => {
    i.addEventListener("click", () => {
        i.classList.toggle("done");
    })
}

deleteItem = (i) => {
    i.remove();
}


btn.addEventListener("click", addListPostClick);

item.addEventListener("keypress", addListPostEnter);

var l_items = document.querySelectorAll("li");


for (i of l_items) {
    // add delete listener
    var del_btn = i.children[1];
    var item_div = i.children[0];
    del_btn.addEventListener("click", () => deleteItem(i));
    addDoneToggle(item_div);
}