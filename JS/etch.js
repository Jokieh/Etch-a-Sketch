let color = "black";

(function init () {

    renderHeader();
    renderContent();
    renderFooter();

})();


function renderHeader () {

    const headerCSS =
        "display: flex; " +
        "height: 10%;" +
        "justify-content: center;" +
        "align-content: center;"
    ;

    const header = document.createElement('div');

    header.className = "header";
    //header.textContent = "header";
    header.style.cssText = headerCSS;

    document.body.appendChild(header);

}

function renderContent () {

    const contentCSS =
        "display: flex;" +
        "height: 80%;" +
        "flex-direction: row:" +
        "justify-self: center;" +
        "justify-content: center;" +
        "align-content: center;";

    const content = document.createElement('div');
    content.className = "content";
    content.style.cssText = contentCSS;

    document.body.appendChild(content);

    renderLeftContent()
    renderTable();
    renderRightContent();
}

function renderLeftContent () {

    const leftContentCSS =
        "display: flex;" +
        "align-content: right;"
    ;

    const leftContent = document.createElement('div');

    leftContent.className = "leftContent";
    //leftContent.textContent = "leftContent";
    leftContent.style.cssText = leftContentCSS;

    document.querySelector(".content").appendChild(leftContent);

}

function renderTable () {

    const tableCSS =
        "display: flex; " +
        "height: 80vh; " +
        "width: 80vh;" +
        "margin: 0px;" +
        "padding: 0px" +
        "flex-direction: row;" +
        "align-self: center;" +
        "justify-self: flex-center;" +
        "justify-content: flex-start;" +
        "flex-wrap: wrap;" +
        "border: 1px solid black;";

    const table = document.createElement('div');
    table.className = "table";
    table.style.cssText = tableCSS;

    document.querySelector(".content").appendChild(table);

    renderCells();

}

function renderRightContent () {

    const rightContentCSS =
        "display: flex;" +
        "align-content: left;" +
        "flex-direction: column;"
    ;

    const rightContent = document.createElement('div');
    rightContent.className = "rightContent";
    //rightContent.textContent = "rightContent";
    rightContent.style.cssText = rightContentCSS;

    document.querySelector(".content").appendChild(rightContent);

    (function renderColorPicker () {

        const colorPicker = document.createElement("input");
        colorPicker.type = "color";
        colorPicker.value = color;
        colorPicker.addEventListener("input", (event) => {color = event.target.value});

        document.querySelector(".rightContent").appendChild(colorPicker);

    })();

    (function renderSizeInput () {

        const sizeDiv = document.createElement("div");
        const sizeInput = document.createElement("input");
        const sizeInputLabel = document.createElement("label");
        const clearButton = document.createElement("button");

        clearButton.textContent = "CLEAR";

        sizeDiv.className = "sizeDiv";
        sizeInputLabel.htmlFor = "sizeInput";
        sizeInputLabel.className = "sizeInputLabel";
        sizeInputLabel.textContent = "Size: 50x50";


        sizeInput.name = "sizeInput";
        sizeInput.type = "range";
        sizeInput.min = "1";
        sizeInput.max = "100";

        clearButton.addEventListener("click", (event) => { document.querySelector(".table").childNodes.forEach(node => node.style.backgroundColor = "white")});

        sizeInput.addEventListener("input", (event) => {

            document.querySelector(".sizeInputLabel").textContent = "Size: " + event.target.value + "x" + event.target.value;
            renderCells(event.target.value)});


        document.querySelector(".rightContent").appendChild(sizeInput);
        document.querySelector(".rightContent").appendChild(sizeInputLabel);
        document.querySelector(".rightContent").appendChild(clearButton);

        sizeInputLabel.textContent = document.querySelector(".sizeInput").nodeValue.toString();

    })();

}

function renderCells (tableSize) {

    if (typeof tableSize == "undefined") {
        tableSize = 50;
    }

    (function removeCells() {
        while (document.querySelector(".table").firstChild) document.querySelector(".table").removeChild(document.querySelector(".table").firstChild);
    })();


    const cellCSS =
        "display: flex;" +
        "border: solid 0px red;" +
        "margin: 0px; padding: 0px;" +
        "width: " + 100/tableSize + "%;" +
        "height: " + 100/tableSize + "%;";

    for (let i = 0; i < (tableSize * tableSize); i++) {

        const cell = document.createElement('div');
        cell.style.cssText = cellCSS;
        //cell.textContent = i+1 + ".";
        cell.addEventListener("mouseover", (event) => { event.currentTarget.style.backgroundColor = color;});
        document.querySelector(".table").appendChild(cell);

    }
}

function renderFooter () {

    const footerCSS =
        "display: flex;" +
        "height: 10%;" +
        "justify-content: center;" +
        "align-content: center;"
    ;

    const footer = document.createElement('div');
    //footer.textContent = "footer";
    footer.className = "footer";
    footer.style.cssText = footerCSS;

    document.body.appendChild(footer);

}

