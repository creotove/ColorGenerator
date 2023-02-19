let idk = "#"
let myclr = ""
let color_display = document.getElementById('color_display');
function colorgenerate() {
    let bruh = "";
    clipboardCopy.innerText= "Copy To clipboard"
    let myColorArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
    let redArr = [];
    let greenArr = [];
    let blueArr = [];
    function redColor() {
        for (i = 0; i < 2; i++) {
            let red = myColorArr[Math.floor(Math.random(myColorArr) * myColorArr.length)]
            redArr.push(red)
        }
        red = redArr.join('');
        redArr = []
    }
    redColor()
    function greenColor() {
        for (i = 0; i < 2; i++) {
            green = myColorArr[Math.floor(Math.random(myColorArr) * myColorArr.length)]
            greenArr.push(green)
        }
        green = greenArr.join('');
        greenArr = []
    }
    greenColor()
    function blueColor() {
        for (i = 0; i < 2; i++) {
            blue = myColorArr[Math.floor(Math.random(myColorArr) * myColorArr.length)]
            blueArr.push(blue)
        }
        blue = blueArr.join('');
        blueArr = []
    }
    blueColor()
    clipboardCopy.style.backgroundColor = "#E8DE2A";


    bruhh = ` ${idk}${red}${green}${blue}`
    console.log(bruhh);
    color_display.style.backgroundColor = `${bruhh}`
    myclr = bruhh;
    color_display.innerHTML = `<p class="display_color_code">${bruhh}</p>`

    
}


let randomGenerate = document.getElementById("randomGenerate");
randomGenerate.addEventListener("click", colorgenerate);




let clipboardCopy = document.getElementById('clipboardCopy');
clipboardCopy.addEventListener("click", (e) => {
    myColor = color_display.innerText
    
    navigator.clipboard.writeText(myColor);
    alert(`"${myColor} Copied to Clipboard"`)
    clipboardCopy.style.backgroundColor = myColor
    clipboardCopy.innerText= "copied"
    // console.log(e);
})
