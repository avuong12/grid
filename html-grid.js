// TODO(angela): Ask TA's about how to use a class defined in another
// javascript file. How does this relate to modules?
// import {Grid} from './grid.js';

// The class will draw a grid to the html.
class HtmlGrid {
    constructor(rows, columns) {
        this.grid = new Grid(rows, columns);
    }

    draw(parentNode) {
       let newSpan = document.createElement('span');
       newSpan.innerText = 'hello';
       parentNode.appendChild(newSpan);
    }
}