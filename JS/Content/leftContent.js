class LeftContent {

    const text = "";
    const css = "";

    constructor() {
        this.text = text;
        this.css = css;
    }


    function render() {

        const div = document.createElement('div');
        div.className = "leftContent";

        document.querySelector(".content").appendChild(div);

    }
}

export class LeftContent;
