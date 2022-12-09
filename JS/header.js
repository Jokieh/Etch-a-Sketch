class Header {

    const text = "";
    const css = "";

    constructor() {
        this.text = text;
        this.css = css;
    }


    function render() {

        const div = document.createElement('div');
        div.className = "header";

        document.body.appendChild(div);

    }
}

export class Header;

