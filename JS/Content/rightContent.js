class RightContent {

    const text = "";
    const css = "";

    constructor() {
        this.text = text;
        this.css = css;
    }


    function render() {

        const div = document.createElement('div');
        div.className = "rightContent";

        document.querySelector(".content").appendChild(div);

    }
}

export class RightContent;
