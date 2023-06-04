// Moving between HOME, CALCULATOR and GAME
let pages = ["home", "calc", "game", "about"];
let onPage = "home";

function goTo(page_name) {
    for (const page of pages) {
        document.getElementById(page).style.display = "none"
    }
    document.getElementById(page_name).style.display = "block"
    onSection = page_name
    document.getElementById("gameCanvas").style = "display: none;"
    document.getElementById("gameCanvas").style.display = "none"
}

// In CALCULATOR, moving between ELEMENTS
const done_color = "#40ad61"
const on_color = "#79c9d4"

const sections = ["location", "household", "travel", "food", "shopping", "footprint"]
let completion = new Array(5).fill(false)
completion[0] = true
let onSection = "location"
let nextSection = "household"

const buttons = ["location-jump", "household-jump", "travel-jump", "food-jump", "shopping-jump", "footprint-jump"]
let onButton = "location-jump"

const icons = ["location-icon", "household-icon", "travel-icon", "food-icon", "shopping-icon", "footprint-icon"]
let onIcon = "location-icon"

const titles = ["location_title", "household_title", "travel_title", "food_title", "shopping_title", "footprint_title"]
let onTitle = "location_title"


function jumpTo(section_name) {
    update()
    if (section_name === "footprint") {
        document.getElementById("improve_button").style.display = "flex"
        document.getElementById("improvement_button").style.display = "inline-block"
        document.getElementById("game_button").style.display = "inline-block"
        pages.push("improve")
    }
    else {
        document.getElementById("improve_button").style.display = "none"
    }
    for (const sec_index of Array(sections.length).keys()) {
        document.getElementById(sections[sec_index]).style.display = "none"
        document.getElementById(titles[sec_index]).style.display = "none"
    }
    document.getElementById(section_name).style.display = "block"
    document.getElementById(onButton).style.backgroundColor = done_color
    document.getElementById(onIcon).style.filter = "invert()"
    onSection = section_name
    for (const index of Array(sections.length).keys()) {
        if (sections[index] === onSection) {
            document.getElementById(titles[index]).style.display = "block"
            onTitle = titles[index]
            nextSection = sections[index + 1]
            onButton = buttons[index]
            onIcon = icons[index]
            completion[index] = true
        }
    }
    if (section_name !== "footprint") {
        document.getElementById("next_button").style.display = "flex"
    } else {
        document.getElementById("next_button").style.display = "none"
    }
    document.getElementById(onButton).style.backgroundColor = on_color
    let finished = true
    for (const vals of completion) {
        if (vals === false) {
            finished = false
        }
    }
    if (finished) {
        document.getElementById("footprint-jump").style.display = "flex"
    }
}
function jumpNext() {
    update()
    jumpTo(nextSection)
}

function jumpImprove() {
    goTo("improve")
}

// In CALCULATOR, moving between ELEMENTS
// In HOUSEHOLDS
const peopleInput = document.getElementById('PeopleInHousehold');
const peopleValue = document.getElementById('PeopleInHousehold_output');
peopleInput.addEventListener('input', function() {
    update()
    if (peopleInput.value === "6") {
        peopleValue.textContent = "5+ people"
    }
    else {
        if (peopleInput.value === "1") {
            peopleValue.textContent = "1 person"
        }
        else {
            peopleValue.textContent = peopleInput.value + " people";
        }
    }
});

const incomeInput = document.getElementById('Income');
const incomeValue = document.getElementById('Income_output');
incomeInput.addEventListener('input', function() {
    update()
    incomeValue.textContent = Math.round(Number(incomeInput.value)*28300);
});

const electricityInput = document.getElementById('electricity')

const cleanInput = document.getElementById('clean');
const cleanValue = document.getElementById('clean_output');
cleanInput.addEventListener('input', function() {
    update()
    cleanValue.textContent = (cleanInput.value);
});

const gasInput = document.getElementById('gas')

const waterInput = document.getElementById('water');
const waterValue = document.getElementById('water_output');
waterInput.addEventListener('input', function() {
    update()
    waterValue.textContent = Math.round(Number(waterInput.value) * 130);
});

// In TRAVEL
const busInput = document.getElementById('bus')
const railInput = document.getElementById('rail')
const mtrInput = document.getElementById('mtr')
const tramInput = document.getElementById('tram')

const taxiInput = document.getElementById('taxi')
const uberInput = document.getElementById('uber')

const shortFlightInput = document.getElementById('short')
const mediumFlightInput = document.getElementById('med')
const longFlightInput = document.getElementById('long')
const verylongFlightInput = document.getElementById('verylong')

var privateVehicles = document.getElementById("table_travel");
var vehicles = []
function handleTableChange() {
    vehicles = []
    for (var i = 0; i < privateVehicles.rows.length - 1; i++){
        var privateVehicle = privateVehicles.rows[i]
        var dieselorgas = privateVehicle.cells[0];
        var milesperyear = privateVehicle.cells[1];
        var milespergallon = privateVehicle.cells[3];
        dieselorgas = dieselorgas.getElementsByTagName("select")[0]
        dieselorgas = dieselorgas.options[dieselorgas.selectedIndex].value
        milesperyear = milesperyear.getElementsByTagName("input")[0].value
        milespergallon = milespergallon.getElementsByTagName("input")[0].value
        vehicles.push([dieselorgas, milesperyear, milespergallon])
    }
}
privateVehicles.addEventListener("change", handleTableChange);

// In FOODS
const meatInput = document.getElementById('meat');
const meatValue = document.getElementById('meat-value');
meatInput.addEventListener('input', function() {
    update()
    meatValue.textContent = (Number(meatInput.value) * 2.3).toFixed(1);
});

const grainInput = document.getElementById('grain');
const grainValue = document.getElementById('grain-value');
grainInput.addEventListener('input', function() {
    update()
    grainValue.textContent = (Number(grainInput.value) * 4.4).toFixed(1);
});

const dairyInput = document.getElementById('dairy');
const dairyValue = document.getElementById('dairy-value');
dairyInput.addEventListener('input', function() {
    update()
    dairyValue.textContent = (Number(dairyInput.value) * 2.1).toFixed(1);
});

const fruit_vegInput = document.getElementById('fruit_veg');
const fruit_vegValue = document.getElementById('fruit_veg-value');
fruit_vegInput.addEventListener('input', function() {
    update()
    fruit_vegValue.textContent = (Number(fruit_vegInput.value) * 3.4).toFixed(1);
});

const snackInput = document.getElementById('snack');
const snackValue = document.getElementById('snack-value');
snackInput.addEventListener('input', function() {
    update()
    snackValue.textContent = ((snackInput.value) * 3.2).toFixed(1);
});

//In SHOPPING
const goodsInput = document.getElementById('goods');
const goodsValue = document.getElementById('goods-value');
goodsInput.addEventListener('input', function() {
    update()
    if (goodsInput.value != 1) {
        goodsValue.textContent = Number(goodsInput.value)*15000;
    } else {
        goodsValue.textContent = "average"
    }
});

const servicesInput = document.getElementById('services');
const servicesValue = document.getElementById('services-value');
servicesInput.addEventListener('input', function() {
    update()
    if (servicesInput.value != 1) {
        servicesValue.textContent = Number(servicesInput.value)*15000;
    } else {
        servicesValue.textContent = "average"
    }
});

let footprints = []
let footprint_vals = []
function update() {
    let householdEmissions = Number(((electricityInput.value) * 0.000409)*(1 - cleanInput.value/100) + (gasInput.value) * 0.0000585 + (waterInput.value) * 0.00000032848877)
    let travelEmissions = Number((busInput.value) * (0.103) + (railInput.value + mtrInput.value) * (0.002) + (tramInput.value) * (0.74) + (taxiInput.value) * (198.22*0.001) + (uberInput.value) * (0.0972))
    for (const vehicle of vehicles) {
        if (vehicle[0] === "Diesel") {
            travelEmissions += (vehicle[1] * vehicle[2]) * 10.18
        }
        if (vehicle[0] === "Gasoline") {
            travelEmissions += (vehicle[1] * vehicle[2]) * 8.887
        }
        if (vehicle[0] === "Electric"){
            travelEmissions += (vehicle[1] * vehicle[2]) * 0.06
        }
    }
    travelEmissions += Number((shortFlightInput.value)*(1000*0.255) + (mediumFlightInput.value)*(2000*0.156) + (longFlightInput.value)*(4000*0.15) + (verylongFlightInput.value)*(6000*0.15))
    travelEmissions = travelEmissions * 0.001
    let foodEmissions = Number((meatInput.value) * 1.01 + (grainInput.value) * 0.35 + (dairyInput.value) * 0.42 + (fruit_vegInput.value) * 0.33 + (snackInput.value) * 0.61)
    let shoppingEmissions = Number((goodsInput.value) * 0.61 + (servicesInput.value) * 0.54)
    let totalEmissions = householdEmissions + travelEmissions + foodEmissions + shoppingEmissions
    document.getElementById('carbon_emissions_dat').value = (totalEmissions * 10).toFixed(0)
    document.getElementById('household-value').textContent = householdEmissions.toFixed(3)
    document.getElementById('travel-value').textContent = travelEmissions.toFixed(3)
    document.getElementById('food-value').textContent = foodEmissions.toFixed(3)
    document.getElementById('shopping-value').textContent = shoppingEmissions.toFixed(3)
    document.getElementById('total-value').textContent = totalEmissions.toFixed(3)

    const hkAverage = 6.5
    let difference = totalEmissions - hkAverage
    if (difference > 1) {
        document.getElementById("footprint_overall").style.backgroundColor = "rgb(170, 0, 0)"
        document.getElementById("comparison").textContent = "~" + Math.abs(difference).toFixed(2) + " more than average"
    }
    else if (difference < 1) {
        document.getElementById("footprint_overall").style.backgroundColor = "rgb(0, 170, 0)"
        document.getElementById("comparison").textContent = "~" + Math.abs(difference).toFixed(2) + " less than average"

    }
    else {
        document.getElementById("footprint_overall").style.backgroundColor = "rgb(150, 150, 60)"
    }
    footprints = ["household", "travel", "food", "shopping"]
    footprint_vals = [householdEmissions.toFixed(3), travelEmissions.toFixed(3), foodEmissions.toFixed(3), shoppingEmissions.toFixed(3)]

}
update()

let householdSuggestions = [
    "Turn off the lights when leaving your home",
    "Turn off any unused electronic appliances",
    "Try not to 'keep things running",

]
let travelSuggestions = [
    "Try to use more public transportation options such as the MTR when in transit",
    "Try transport methods such as carpooling instead of driving alone",
    "Try to use eco-friendly methods of transport such as bicycles or scooters",
    "Try to switch to electric cars instead of diesel or petrol cars",
    "Endeavor to take fewer flights"
]
let foodSuggestions = [
    "Visit farmer's markets to buy directly from local producers and reduce the carbon footprint associated with long-distance shipping",
    "Try to eat less meat products",
    "Increase organic food consumpion",
    "Prioritize locally produced food instead of imported food",


]
let shoppingSuggestions = [
    "Try to spend less shopping",
    "Look for products with minimal or eco-friendly packaging",
    "Bring your own bags when you go shopping to avoid using plastic bags",
    "Choose products with minimal or recyclable packaging to reduce waste and carbon footprint",
    "Look for brands that prioritize sustainability and eco-friendly practices in their production and supply chains",
    "Carry a reusable water bottle with you to avoid single-use plastic bottles",
]

function SortWorst(arr1, arr2) {
    for (var i = 0; i < arr1.length; i++) {
        for (var j = 0; j < (arr1.length - i - 1); j++) {
            if (arr1[j] < arr1[j + 1]) {
                var temp = arr1[j]
                arr1[j] = arr1[j + 1]
                arr1[j + 1] = temp

                temp = arr2[j]
                arr2[j] = arr2[j + 1]
                arr2[j + 1] = temp
            }
        }
    }
    return arr2
}


let tips = []
let tipsCompleted = 0
function provideTip(num, index) {
    footprints = SortWorst(footprint_vals, footprints);
    let count = 0
    for (const val of footprints) {
        if (val === "household") {
            for (const suggestion of householdSuggestions) {
                if (tips.includes(suggestion)) {}
                else {
                    tips.push(suggestion)
                    householdSuggestions = householdSuggestions.slice(1)
                    break
                }
            }
        }
        if (val === "travel") {
            for (const suggestion of travelSuggestions) {
                if (tips.includes(suggestion)) {}
                else {
                    tips.push(suggestion)
                    householdSuggestions = householdSuggestions.slice(1)
                    break
                }
            }
        }
        if (val === "food") {
            for (const suggestion of foodSuggestions) {
                if (tips.includes(suggestion)) {}
                else {
                    tips.push(suggestion)
                    householdSuggestions = householdSuggestions.slice(1)
                    break
                }
            }
        }
        if (val === "shopping") {
            for (const suggestion of shoppingSuggestions) {
                if (tips.includes(suggestion)) {}
                else {
                    tips.push(suggestion)
                    householdSuggestions = householdSuggestions.slice(1)
                    break
                }
            }
        }
    }
    document.getElementById(num).textContent = tips[index]
}

function completeTip(num, index) {
    tips = tips.slice(0, index).concat(tips.slice(index+1))
    tipsCompleted += 1
    provideTip('first', 0)
    provideTip('second', 1)
    provideTip('third', 2)
}



document.addEventListener("DOMContentLoaded", function() {
    var btnAdd = document.getElementById("btnAdd");
    btnAdd.addEventListener("click", function() {
        var div = document.createElement("tr");
        div.rowSpan = 3;
        div.innerHTML = GetDynamicTextBox("");
        document.getElementById("TextBoxContainer").appendChild(div);
    });

    document.body.addEventListener("click", function(event) {
        if (event.target.classList.contains("remove")) {
            var closestRow = event.target.closest("tr");
            closestRow.parentNode.removeChild(closestRow);
        }
    });
});


function GetDynamicTextBox(value){
    return '<td><select name="" class = "form-select"/> <option>Diesel</option> <option>Gasoline</option> <option>Electric</option> </select></td>' + '<td><input name = "DynamicTextBox" type="number" value = "" class="form-control" /></td>' + '<td> <span>miles/year</span></td>' + '<td><input name = "DynamicTextBox" type="number" value = "" class="form-control" /></td>' + '<td> <span>miles/gallon</span></td>' +'<td> <button type="button" class="btn btn-danger remove"> <i class="bi bi-x" ></i> </button> </td>'
}


/* ryan add game loop here */






/* game */
// Import necessary libraries (not needed in JavaScript)
// Create necessary constants
const SCREEN_WIDTH = 800;
const SCREEN_HEIGHT = 600;
const FPS = 60;
const ENEMY_SPEED = 1;

// Define colors
const BLACK = [64, 162, 174];
const WHITE = [255, 255, 255];
const RED = [255, 0, 0];

// Create the game canvas (not needed in JavaScript)
const canvas = document.getElementById("gameCanvas");
canvas.width = SCREEN_WIDTH;
canvas.height = SCREEN_HEIGHT;
const ctx = canvas.getContext("2d");
document.body.appendChild(canvas);

// Define variables
let time = 0;
let gaming = true;
let finalscore = 0;

// Define Tree class
class Tree {
    constructor(x, y, size) {
        this.image = new Image();
        this.image.src = "tree.png";
        this.image.width = size;
        this.image.height = size;
        this.x = x;
        this.y = y;
        this.destroyed = false;
    }

    update() {

        if (this.destroyed) {
            return;
        }
    }

}

// Define TreeDestroyer class
class TreeDestroyer {
    constructor(x, y, target) {
        this.image = new Image();
        this.image.src = "enemy.png";
        this.image.width = 40;
        this.image.height = 40;
        this.x = x;
        this.y = y;
        this.targetTree = target;
        this.time = 0;
        this.size = this.targetTree.image.width
    }

    update(trees, limit) {
        const dx = this.targetTree.x + Math.floor(this.size/3) - this.x;
        const dy = this.targetTree.y + Math.floor(this.size/2) - this.y;
        const distance = Math.hypot(dx, dy);
        if (distance > 1 && this.time === 0) {
            const speed_x = dx / distance;
            const speed_y = dy / distance;
            this.x += speed_x * ENEMY_SPEED;
            this.y += speed_y * ENEMY_SPEED;
        } else {
            this.image.src = "enemy2.png";
            this.image.width = 40;
            this.image.height = 40;
            this.time += 1;
            if (this.time > limit) {
                this.image.src = "enemy.png";
                this.image.width = 40;
                this.image.height = 40;
                this.targetTree.destroyed = true;
                trees.splice(trees.indexOf(this.targetTree), 1);
                this.targetTree = trees[Math.floor(Math.random() * trees.length)];
                this.time = 0;
                if (!this.targetTree) {
                    gaming = false;
                }
            }
        }
    }

    display() {
        ctx.drawImage(this.image, this.x, this.y, this.image.width, this.image.height);
    }
}

// Function to create trees
function createTrees(num_trees) {
    const trees = [];
    const sqrt_num_trees = Math.ceil(Math.sqrt(num_trees));
    const trees_size = Math.floor(SCREEN_HEIGHT / sqrt_num_trees);
    const margin = Math.floor(trees_size / 8);
    const actual_trees_size = trees_size - 2 * margin;

    for (let i = 0; i < num_trees; i++) {
        const row = Math.floor(i / sqrt_num_trees);
        const col = i % sqrt_num_trees;
        const x = col * trees_size + (trees_size / 2) + margin;
        const y = row * trees_size + (trees_size / 2) + margin;
        const tree = new Tree(x, y, actual_trees_size);
        trees.push(tree);
    }

    return trees;
}
// Game loop
function gameLoop(tree_num, destroyer_num) {
    document.getElementById("gameCanvas").style = "display: block;"
    ctx.reset()
    let time = 0;
    let gaming = true;
    const trees = createTrees(tree_num);
    const tree_destroyers = [];
    let destroyer_spawn_timer = Date.now();
    let destroyer_spawn_delay = 12000 / (destroyer_num / 10);
    let tree_destroy_duration = 180;


    function handleMouseEvent(event) {
        if (event.button === 0) {
            // Check if mouse clicked on enemy, if so remove enemy
            for (const tree_destroyer of tree_destroyers) {
                if (
                    event.clientX >= tree_destroyer.x &&
                    event.clientX <= tree_destroyer.x + tree_destroyer.image.width &&
                    event.clientY - 200 >= tree_destroyer.y &&
                    event.clientY - 200 <= tree_destroyer.y + tree_destroyer.image.height
                ) {
                    tree_destroyers.splice(tree_destroyers.indexOf(tree_destroyer), 1);
                    break;
                }
            }
        }
    }

    function update() {
        const current_time = Date.now();
        try {
            if (current_time - destroyer_spawn_timer >= destroyer_spawn_delay) {
                if (tree_destroyers.length < destroyer_num && tree_destroyers.length < 100) {
                    destroyer_spawn_timer = current_time;
                    const tree = trees[Math.floor(Math.random() * trees.length)];
                    const tree_destroyer = new TreeDestroyer(
                        Math.random() * 600,
                        Math.random() * 800,
                        tree
                    );
                    tree_destroyers.push(tree_destroyer);
                }
            }
        } catch {
            return false
        }
        try {
            for (const tree of trees) {
                tree.update();
            }

            for (const tree_destroyer of tree_destroyers) {
                tree_destroyer.update(trees, tree_destroy_duration);
            }

        } catch {
            return false
        }

        if (!gaming) {
            return false
        }

        if (trees.length === 0){
            return false
        }
    }

    function render() {
        ctx.fillStyle = `rgb(${BLACK[0]}, ${BLACK[1]}, ${BLACK[2]})`;
        ctx.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);

        for (const tree of trees) {
            ctx.drawImage(tree.image, tree.x, tree.y, tree.image.width, tree.image.height);
        }

        for (const tree_destroyer of tree_destroyers) {
            tree_destroyer.display();
        }

        // Write text on the canvas
        ctx.font = "64px Outfit";
        ctx.fillStyle = `rgb(${WHITE[0]}, ${WHITE[1]}, ${WHITE[2]})`;
        ctx.fillText(Math.round(time / 60 * 10).toString(), 100, 100);
    }

    function gameLoopStep() {
        if (!gaming) {

        }

        time += 1;
        if (time % 500 === 0) {
            destroyer_spawn_delay = Math.round((destroyer_spawn_delay * 2) / 3);
        }
        if (time % 5000 === 0 && time !== 0) {
            tree_destroy_duration = Math.round(tree_destroy_duration * 1 / 3);
        }

        if (update() === false) {
            replay([])
            finalscore = Math.round(time / 60 * 10).toString()
            return
        } else {
            render();
            requestAnimationFrame(gameLoopStep);
        }
    }

    // Event listeners
    canvas.addEventListener("mousedown", handleMouseEvent);

    // Start the game loop
    requestAnimationFrame(gameLoopStep);
}

function replay(tree_destroyers) {
    const end_screen = new Image();
    end_screen.src = "end_screen_no_replay.png";
    function handleMouseEvent(event) {
        if (
            event.clientX >= 330 &&
            event.clientX <= 445 &&
            event.clientY >= 350 &&
            event.clientY <= 380
        ) {
            // gameLoop(1, 200);
        }
    }

    function render() {
        ctx.fillStyle = `rgb(${BLACK[0]}, ${BLACK[1]}, ${BLACK[2]})`;
        ctx.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);

        // for (const tree_destroyer of tree_destroyers) {
        //     tree_destroyer.display();
        // }
        end_screen.onload = function () {
            ctx.drawImage(end_screen, 250, 175, 300, 225);
            ctx.font = "20px Outfit";
            ctx.fillStyle = `rgb(200, 137, 98)`;
            ctx.fillText(finalscore, 430, 315);
        }
    }

    // Event listeners
    canvas.addEventListener("mousedown", handleMouseEvent);

    // Render the replay screen
    render();
}
