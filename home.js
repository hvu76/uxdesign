let panels = document.getElementsByClassName("panel");

let paneltops = [];
paneltops.push(0);  // add for space before 1st panel
for (i = 0; i < panels.length; i++) {
  paneltops.push(panels[i].offsetTop);
}

let colors = [/*"white"*/, "color-one", "color-two", "color-three", "color-four", "color-five"];

function showColorChange(){
    // loop through the panels and add a new colour as the panels change
    for (var i = 0; i < paneltops.length; i++) {

        // if this container is at the top of the screen get a new colour class
        if (document.body.scrollTop >= paneltops[i] || document.documentElement.scrollTop >= paneltops[i]) {
        document.body.className = '';  // clear class

        // if we have not enough colours, use the last colour class again
        colorclass= i;
        document.body.classList.add(colors[colorclass]);
        }
    }
};

window.onscroll = function() {
    showColorChange()
};

