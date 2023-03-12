// Create Element 
    const li = document.createElement('li');
    const a = document.createElement('a');


    

    // add class
    li.className = ("list");
    // class add kurar onno niom
    li.classList.add("list01")




    // add id
    li.id = ("list-id")





    // add attribute
    li.setAttribute("title", "New list");

    // add Content
    li.textContent = "I'm Append Child li"
    a.textContent = "X"




    // add Style
    a.style.marginLeft="100px"





    // append li as a child to ul  (ay nome sodo mattoro ni ser dike add hube)
    var ul = document.querySelector("ul");
    ul.appendChild(li).appendChild(a);

