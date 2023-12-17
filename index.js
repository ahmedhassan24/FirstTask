let objectCounter = 0;
let counter = 0;


const arr= ["10%","45%","80%"];
const objectOfXandY = {}
for(let i = 0;i<arr.length;i++)
{
    for(let j=0;j<arr.length;j++)
    {
            const key = objectCounter;
            const innerObject = {
                x: arr[i],
                y: arr[j]
            };
            objectOfXandY[key] = innerObject;
            objectCounter++;
    }
}

function addLeftImage()
{
    let img = document.createElement('img');
    img.src = "smileyface.png"
    img.addEventListener("click", ()=>{
        alert("Game Over!!");
        window.location.reload();
        counter = 0;
    });
    img.style.position = "absolute" 
    // console.log("x",objectOfXandY[counter].x);
    img.style.top = objectOfXandY[counter].x;   // 10 50 80
    img.style.left = objectOfXandY[counter].y;// 10 50 80
    img.style.transform = "translate("-50%","-50%")";
    img.style.width = "100px";
    img.style.borderRadius = "50%"
    const elementLeft = document.getElementById("left");
    elementLeft.appendChild(img);
    addRightImage();

}
function addRightImage(){
    let img = document.createElement('img');
    img.src = "smileyface.png"
    img.addEventListener("click", ()=>{
        alert("Game Over!!")
        window.location.reload();
        counter = 0;
    });
    img.style.position = "absolute"
    img.style.top = objectOfXandY[counter].x;
    img.style.left = objectOfXandY[counter].y;
    img.style.transform = "translate("-50%","-50%")";
    img.style.width = "100px";
    img.style.borderRadius = "50%"
    const elementRight = document.getElementById("right");
    elementRight.appendChild(img);
    counter++;
    GenerateRandomImage();
    
}

document.body.onload = ()=>{
    GenerateRandomImage()
}
    

function GenerateRandomImage(){
    const elementRandom = document.getElementById("random image");
    var randomnumber = Math.floor(Math.random()*70);
    let img = document.createElement('img');
    img.src = "smileyface.png"
    img.alt = "random smiley face";
    img.style.position = "absolute"
    // console.log("random number", randomnumber);
    
    if(randomnumber == objectOfXandY[counter].x || randomnumber == objectOfXandY[counter].y)
    {
        randomnumber = Math.floor(Math.random()*70);
    }
    console.log("random number 2", randomnumber);
    img.style.top = `${randomnumber}%`
    img.style.left = img.style.top;
    img.style.transform = "translate("-20%","-20%")";
    img.style.width = "100px";
    img.style.borderRadius = "50%"
    elementRandom.appendChild(img);
    // console.log("element random", elementRandom);
    img.addEventListener("click", ()=>{
        addLeftImage();
        img.remove();
    });
}
