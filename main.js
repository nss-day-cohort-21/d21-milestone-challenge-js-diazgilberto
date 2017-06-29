// Getting dom elements
var char = document.querySelector('#character');
var height = document.querySelector('#height');
var button = document.querySelector('#btn');

// Button listening for click event
button.addEventListener('click', function () {
    var values = {};
    var charVal = char.value;
    var treeHeight = height.value;
    values.string = charVal;
    values.height = treeHeight;
    tree(values);
});

// Function that builds the tree
function tree(obj) {
    var counter = obj.height;
    var str = '';

    for (var i = 0; i < counter; i++) {
        var space = '';
        for (var j = counter - 1; j > i; j--) {
            space += ' ';
        }
        if (i === 0) {
            str += obj.string;

        } else {
            for (var z = i + 1; z >= i; z--) {
                str += obj.string;
            }
        }
        console.log(space + str);
    }
};