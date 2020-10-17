document.addEventListener("DOMContentLoaded",() =>{
    let introClass = document.getElementById("intro");
    let introParagraph = document.querySelector("#intro p");
    let clicked = false;

    let l1 = document.querySelector("li:nth-child(1)");
    let l2 = document.querySelector("li:nth-child(2)");
    let l3 = document.querySelector("li:nth-child(3)");
    let l4 = document.querySelector("li:nth-child(4)");
    let l5 = document.querySelector("li:nth-child(5)");

    let headers = [l1,l2,l3,l4, l5];

    for (let i = 0; i < 5; i++)
    {
        headers[i].addEventListener("click", createData);
    }

    function createData(event) {
        let clicked = event.target.innerText;

        if (clicked === "Java")
            javaData(event.target)
        else{
            if (clicked === "Javascript")
                scriptData(event.target)
            else {
                if (clicked === "Node.js")
                    nodeData(event.target);
                else {
                    if (clicked === "SQL")
                        sqlData(event.target)
                    else {
                            cssData(event.target)
                    }
                }
            }
        }
    }
    let ul, li1, li2, li3, li4;
    function javaData(e) {
       setup(e)
       li1.innerText = "Worked with Java to develop and debug object oriented programs and write efficient algorithms that solve and simplify complex operations.";
       ul.appendChild(li1);
       li4.innerText = "Generated data structures and algorithms that build programs that allow for efficient data storage and retrieval while learning various sorting and computing algorithms.";
       ul.appendChild(li4);
       li2.innerText = "Conceptualized and built various android applications with  intuitive and aesthetically pleasing UI that implemented core java functionality through Android Studio.";
       ul.appendChild(li2);
       li3.innerText = "Experienced with Generic programming.";
       ul.appendChild(li3);

    }

    function scriptData(e) {
        setup(e)
        li1.innerText = "Used javascript to create and manipulate dynamic web pages using the DOM.";
        ul.appendChild(li1);
        li2.innerText = "Created scripts that validate client side inputs";
        ul.appendChild(li2);
        li3.innerText = "Used web Workers to create and run multi thread programs"


    }

    function nodeData(e) {
        setup(e)
        li1.innerText = "Used asynchronous programming to get data from a database";
        ul.appendChild(li1);
        li2.innerText = "Implemented server side logic with Node.js";
        ul.appendChild(li2);
    }

    function sqlData(e) {
        setup(e)
        li1.innerText = "Utilized  MySQL to store and retrieve data from databases that adhere to the principles of  a relational database.";
        ul.appendChild(li1);
        li2.innerText = "Learned the fundamentals of joining tables in order to retrieve analytical data as well uncover trends and trends";
        ul.appendChild(li2);
        li3.innerText = "Learned how to utilized functions in order to manipulate data in a SQL database";
        ul.appendChild(li3);
    }

    function cssData(e) {
        setup(e)
        li1.innerText = "Wrote semantically correct HTML in order to make the content of a web page machine readable";
        ul.appendChild(li1);
        li2.innerText = "Designed HTML pages with accessibility in mind";
        ul.appendChild(li2);
        li3.innerText = "Created layouts with float, positioning, Flexbox and Grid Layout";
        ul.appendChild(li3);
        li4.innerText = "Created responsive web designs using media query";
        ul.appendChild(li4);
    }

    function setup(e){
        if (clicked)
            clear();

        e.style.color = "red";
        introParagraph.style.display = "none";
        e.removeEventListener("click", createData);
        e.addEventListener("click", reset);

        ul = document.createElement("ul");
        ul.id = "list";
        introClass.insertBefore(ul,document.querySelector(".projects"));

        li1 = document.createElement("li");
        li2 = document.createElement("li");
        li3 = document.createElement("li");
        li4 = document.createElement("li");

        clicked = true;
    }

    function reset(event) {
        clicked = false;
        let e = event.target;
        introClass.removeChild(introClass.childNodes[5]);
        introParagraph.style.display = "inline";
        introParagraph.style.textIndent = "4em";
        e.style.color = "black";
        e.removeEventListener("click", reset);
        e.addEventListener("click", createData)
    }

    function clear(){
        introClass.removeChild(introClass.childNodes[5]);
        for (let i = 0; i < 5; i++)
        {
            headers[i].style.color = "black";
        }
        clicked = false;
    }
});