// Instructions
// Create a function that receives one argument, a string color.
// Create a switch statement that:
// 1. If the color is yellow, pink or orange return from the function “light color”.
// 2. If the color is blue, purple, brown return from the function “dark color”.
// 3. If the color is none of the above return “Unknown color”.
// Note:
// It shouldn’t be case sensitive --- Add .toUppperCase()

function color(color) {
    switch (color.toUpperCase()) {
        case "YELLOW":
        case "PINK":
        case "ORANGE":
            return "Light Color";
            break;
        case "BLUE":
        case "PURPLE":
        case "BROWN":
            return "Dark Color";
            break;
        default:
            return "Unknown Color";
    }
}