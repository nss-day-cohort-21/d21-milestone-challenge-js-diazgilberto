// Getting dom elements
var char = document.querySelector('#character');
var height = document.querySelector('#height');
var button = document.querySelector('#btn');
// Array.from converts HTMLCollection in a js array in order to utilize forEach().
var inputArray = Array.from(document.getElementsByTagName('input'))

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

// Getting values of input fields
function getValues() {
    var values = {};
    var charVal = char.value;
    var treeHeight = height.value;
    values.string = charVal;
    values.height = treeHeight;
    return values;
}

// Listening for botton click event.
button.addEventListener('click', function () {
    var values = getValues();
    tree(values);
});

// Listening for input field keyup event.
inputArray.forEach(function (singleInput) {
    singleInput.addEventListener('keyup', function (e) {
        if (e.keyCode === 13) {
            var values = getValues();

            // Check if both fields have values. Otherwise notify the user.
            if (values.string && values.height) {
                tree(values);
                char.value = '';
                height.value = '';
                char.focus();
            } else {
                alert('Both fields need value. Please try again.');
            }
        }
    });
});
