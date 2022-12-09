import {LeftContent, Table, RightContent} from "./Content/";

class Content {

    text = "";
    css = "";
    leftContent;
    table;
    rightContent;

    constructor() {
        this.text = text;
        this.css = css;
        this.leftContent = new LeftContent();
        this.table = new Table();
        this.rightContent = new RightContent();
    }

    const init = {leftContent, table, rightContent};


    function render() {


        const div = document.createElement('div');
        div.className = "content";

        document.body.appendChild(div);

        init.forEach(item => (item.render()));

    }
}

export class Content;
