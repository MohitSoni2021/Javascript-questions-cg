function trafficLightAction(color) {
    switch (color.toLowerCase()) {
        case 'red':
            console.log("Stop");
            break;
        case 'yellow':
            console.log("Slow down");
            break;
        case 'green':
            console.log("Go");
            break;
        default:
            console.log("Invalid color. Please enter 'red', 'yellow', or 'green'.");
    }
}

// Example usage:
trafficLightAction("red");  
trafficLightAction("yellow"); 
trafficLightAction("green"); 
trafficLightAction("blue");   
