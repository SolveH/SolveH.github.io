function rain(name) {
    var body = document.body;

    setTimeout(stopLeafing, 20000);


    var leafId1 = setInterval(addLeaf, 600);

    /* Adds an leaf to the top and call descend, causing it to fall towards the bottom*/
    function addLeaf() {

        var x = Math.max(0, Math.random() * body.clientWidth - 40.0);
        var y = 0;
        var rotationSpeed = generateRandomRotationSpeed();

        var leaf = createDiv(name, x, y);

        body.appendChild(leaf);
        
        var speed = 0;
        var counter = 0;

        var id = setInterval(animateFrame, 10);
        /* Updates the position/speed of the leaf for each call */
        function animateFrame() {
            if (y > (body.clientHeight - leaf.clientHeight - 5)) {
                /* Logic when we've reached the bottom */
                leaf.parentNode.removeChild(leaf);
                clearInterval(id);
            } else {
                /* Logic to update position and speed */
                speed = speed + 0.01;
                y = y + speed; 
                leaf.style.transform = "rotate(" + rotationSpeed * counter + "deg)";
                counter += 1;
                leaf.style.top = y + 'px'; 
            }
        }
    }

    function stopLeafing() {
        clearInterval(leafId1);
    }
}


function generateRandomRotationSpeed(){
    return 1.0 - 2 * Math.random();
}



function createDiv(name, x, y) {
    var flake = document.createElement("img");
    flake.style.position = "absolute";
    if (name == "summer") {
        flake.src = "images/summer/ball.png";
    } else if (name == "winter") {
        flake.src = "images/winter/flake.png";
    } else if (name == "spring") {
        flake.src = "images/spring/leaf.png";
    } else if (name == "autumn") {
        flake.src = "images/autumn/leaf.png";
    }


    flake.style.top = y;
    flake.style.left = x + 'px';
    flake.style.width = "40px";
    flake.style.height = "40px";
    flake.style.margin = "-200px";

    return flake; 
}


