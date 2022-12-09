import {Header, Content, Footer} from "./";

const css = "ffff";

const header = new Header();
const content = new Content();
const footer = new Footer();

const init = {header, content, footer};

function render () {

    init.forEach(item => (item.render()));

}

