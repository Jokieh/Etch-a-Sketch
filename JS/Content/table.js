class Table {

    const text = "";
    const css = "";

    constructor() {
        this.text = text;
        this.css = css;
    }

    function clear() {

    }

    function render (size) {

        const div = document.createElement('div');
        div.className = "table";

        document.querySelector(".content").appendChild(div);

        const cell = document.createElement('div');

        for (let i = 0; i < Math.pow(size,2); i++) {

            document.querySelector("table").appendChild(cell);

        }

    }


}

export class Table;
