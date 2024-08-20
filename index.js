let counter = 0;

function testOverFlow() {
    counter++;
    testOverFlow();
}

try {
    testOverFlow();
} catch (e) {
    console.log("Stack OverFlow at cell count" + counter);
}



