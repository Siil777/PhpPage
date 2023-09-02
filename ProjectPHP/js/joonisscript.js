function vanish(){
    let j=document.getElementById("joonis").getContext("2d");
    j.clearRect(0,0,400,300);

}


function circle(){
    let j=document.getElementById("joonis").getContext("2d");

    j.beginPath();
    j.arc(80,100,60,0,2*Math.PI, true);//x,y alguspunkt, 60 radius
    j.strokeStyle="green"
    j.stroke();

    j.beginPath();
    j.arc(265,70,20,0,2*Math.PI, true);//x,y alguspunkt, 60 radius
    j.fillStyle="green"
    j.stroke();



    j.beginPath();
    j.arc(140,70,5,0,2*Math.PI, true);//x,y alguspunkt, 60 radius
    j.strokeStyle="gold"
    j.fill();

    //ring
    j.beginPath();
    j.arc(265,70,5,0,2*Math.PI, true);//x,y alguspunkt, 60 radius
    j.fillStyle="green"
    j.stroke();;



}

function brain() {
    let j = document.getElementById("joonis").getContext("2d");
    let gradient = j.createLinearGradient(180, 50, 100, 50); gradient.addColorStop(0, 'rgb(36,0,3)'); gradient.addColorStop(1, 'white');

    j.lineWidth = 3;
    j.strokeStyle = 'black';
    j.beginPath();
    j.moveTo(180, 50);
    j.lineTo(100,50);
    j.lineTo(120,100);
    j.lineTo(180,80);





    j.lineTo(190,88);
    j.lineTo(210,88);
    j.lineTo(220,80);

    j.lineTo(230,50);
    j.fillStyle=gradient;
    j.fill();
    j.stroke();
    j.restore();

    j.save();
    j.translate(j.canvas.width, 0);
    j.scale(-1, 1);
    j.beginPath();
    j.moveTo(180, 50);
    j.lineTo(100,50);
    j.lineTo(120,100);
    j.lineTo(180,80);
    j.fillStyle=gradient;
    j.fill();
    j.stroke();
    j.restore();





    j.stroke();
    j.restore();

    j.beginPath();
    j.moveTo(180,90);
    j.lineTo(180,100);
    j.lineTo(195,100);
    j.stroke();
    j.restore();
    j.save();
    j.translate(j.canvas.width, 0);
    j.scale(-1,1);
    j.moveTo(180,90);
    j.lineTo(180,100);
    j.lineTo(195,100);
    j.stroke();
    j.restore();

    j.beginPath();
    j.moveTo(195,100);
    j.lineTo(205,100);
    j.stroke();
    j.restore();

    j.beginPath();
    j.moveTo(190, 90);
    j.lineTo(220, 90);
    j.stroke();
    j.restore();

    j.beginPath();
    j.moveTo(190, 90);
    j.lineTo(190, 100);
    j.stroke();
    j.restore();
    j.save();
    j.translate(j.canvas.width, 0);
    j.scale(-1,1);
    j.moveTo(190, 90);
    j.lineTo(190, 100);
    j.stroke();
    j.restore();

    j.beginPath();
    j.moveTo(200, 90);
    j.lineTo(200, 100);
    j.stroke();
    j.restore();
    j.beginPath();
    j.moveTo(180,90);
    j.lineTo(190,90);
    j.stroke();
    j.restore();
    j.save();
    j.translate(j.canvas.width,0)
    j.scale(-1,1);
    j.moveTo(180,90);
    j.lineTo(190,90);

    j.stroke();
    j.restore();


}

function Carcass(){
    let j=document.getElementById("joonis").getContext("2d");
    let gradient = j.createLinearGradient(170, 170, 230, 230); gradient.addColorStop(0, 'rgb(36,0,3)'); gradient.addColorStop(1, 'white');

    j.lineWidth = 3;
    j.strokeStyle = 'black';
    j.beginPath();
    j.moveTo(230, 170);
    j.lineTo(170,170);
    j.lineTo(170,170);
    j.lineTo(170,230);
    j.lineTo(230,230);
    j.lineTo(230,170);
    j.fillStyle = gradient;
    j.fill();
    j.stroke();
    j.restore();

    j.beginPath();//
    j.moveTo(205,169);
    j.lineTo(205,100);
    j.lineTo(193,100);
    j.lineTo(193,170);
    j.fillStyle = gradient;
    j.fill();
    j.stroke();
    j.restore();

    j.save();
    j.translate(j.canvas.width,0);
    j.scale(-1,1);
    //neck
    j.moveTo(205,169);
    j.lineTo(205,100);
    j.lineTo(193,100);

    j.stroke();
    j.restore();







    j.beginPath();
    j.moveTo(190, 200);
    j.lineTo(170, 170)

    j.stroke();
    j.restore();
    j.save();
    j.translate(j.canvas.width, 0);
    j.scale(-1,1);
    j.moveTo(190, 200);
    j.lineTo(170, 170);
    j.stroke();
    j.restore();


    j.beginPath();

    j.moveTo(190,200);
    j.lineTo(190,169);
    j.stroke();
    j.restore();
    j.save();
    j.translate(j.canvas.width, 0);
    j.scale(-1,1);
    j.moveTo(190,200);
    j.lineTo(190,169);
    j.stroke();
    j.restore();

    j.beginPath();
    j.moveTo(210,200);
    j.lineTo(190,200);
    j.stroke();
    j.restore();


    j.beginPath();
    j.moveTo(170, 170);
    j.lineTo(180, 160);
    j.lineTo(190, 170);
    j.stroke();
    j.save();
    j.translate(j.canvas.width, 0);
    j.scale(-1,1);
    j.moveTo(170, 170);
    j.lineTo(180, 160);
    j.lineTo(190, 170);
    j.fillStyle=gradient;
    j.fill();
    j.stroke();
    j.restore();

}

function Leg2(){
    let j=document.getElementById("joonis").getContext("2d");
    let gradient = j.createLinearGradient(260, 230, 230, 230); gradient.addColorStop(0, 'rgb(36,0,3)'); gradient.addColorStop(1, 'white');
    j.lineWidth = 3;
    j.strokeStyle = 'black';

    j.beginPath();
    j.moveTo(260,230);
    j.lineTo(230,230);
    j.lineTo(230,290);
    j.lineTo(260,290);
    j.lineTo(261,229);
    j.fillStyle=gradient;
    j.fill();
    j.stroke();
    j.restore();
    j.save();
    j.translate(j.canvas.width,0);
    j.scale(-1,1);
    j.beginPath();
    j.moveTo(260,230);
    j.lineTo(230,230);
    j.lineTo(230,290);
    j.lineTo(260,290);
    j.lineTo(261,229);
    j.fillStyle=gradient;
    j.fill();
    j.stroke();
    j.restore();





    j.beginPath();
    j.moveTo(260,240);
    j.lineTo(230,240);
    j.stroke();
    j.restore();




    j.moveTo(260,250);
    j.lineTo(230,250);
    j.stroke();
    j.restore();


    j.beginPath();
    j.moveTo(260,260);
    j.lineTo(230,260);
    j.stroke();
    j.restore();


    j.beginPath();
    j.moveTo(260,270);
    j.lineTo(230,270);
    j.stroke();
    j.restore();



    j.beginPath();
    j.moveTo(260,280);
    j.lineTo(230,280);
    j.stroke();
    j.restore();



    j.save();
    j.translate(j.canvas.width,0)
    j.scale(-1,1)
    j.moveTo(260,240);
    j.lineTo(230,240);

    j.moveTo(260,250);
    j.lineTo(230,250);

    j.moveTo(260,260);
    j.lineTo(230,260);

    j.moveTo(260,270);
    j.lineTo(230,270);

    j.moveTo(260,280);
    j.lineTo(230,280);
    j.fillStyle=gradient;
    j.fill();
    j.stroke();
    j.restore();










}

function hands(){
    let j=document.getElementById("joonis").getContext("2d");
    let gradient = j.createLinearGradient(100, 200, 170, 200); gradient.addColorStop(0, 'rgb(36,0,3)'); gradient.addColorStop(1, 'white');

    let gradient1 = j.createLinearGradient(50, 110, 70, 70); gradient1.addColorStop(0, 'rgb(36,0,3)'); gradient1.addColorStop(1, 'white');

    let gradient3 = j.createLinearGradient(50, 110, 70, 70); gradient3.addColorStop(0, 'rgb(36,0,3)'); gradient3.addColorStop(1, 'white');

    j.lineWidth = 3;
    j.strokeStyle = 'black';
    j.beginPath();
    j.moveTo(100, 200);
    j.lineTo(170, 180);
    j.lineTo(170,202);



    j.stroke();
    j.restore();


    j.moveTo(100,200);
    j.lineTo(170, 200);
    j.fillStyle=gradient;
    j.fill();
    j.lineWidth = 3;
    j.strokeStyle = 'black';



    j.beginPath();
    j.moveTo(100, 200);
    j.lineTo(50,110);
    j.stroke();
    j.restore();

    j.beginPath();///end of hand
    j.moveTo(50,110);
    j.lineTo(70,70);
    j.lineTo(90,100);
    j.lineTo(50,110);
    j.fillStyle=gradient1;
    j.fill();



    j.stroke();
    j.restore();



    j.save();
    j.translate(j.canvas.width,0)
    j.scale(-1,1);
    j.beginPath();
    j.moveTo(100, 200);
    j.lineTo(170, 180);
    j.lineTo(170,202);





    j.moveTo(100,200);
    j.lineTo(170, 200);
    j.fillStyle=gradient;
    j.fill();





    j.beginPath();
    j.moveTo(100, 200);
    j.lineTo(50,110);

    j.moveTo(50,110);
    j.lineTo(70,70);
    j.lineTo(90,100);
    j.lineTo(50,110);
    j.fillStyle=gradient1;
    j.fill();






    j.stroke();
    j.restore();


}



function Eyes(){
    let j=document.getElementById("joonis").getContext("2d");
    let red = "rgb(255, 0, 0)";
    let orange = "rgb(255, 165, 0)";
    let black = "rgb(0, 0, 0)";
    let gradient = j.createLinearGradient(0, 0, 0, 200);
    gradient.addColorStop(0.1, red);  gradient.addColorStop(0.3, orange); gradient.addColorStop(1, black);



// Draw a half-circle
    j.beginPath();
    j.arc(140, 80, 20, Math.PI, 0, false);
    j.closePath();
    j.fillStyle = gradient;
    j.fill();


    j.lineWidth = 2;
    j.strokeStyle = "black";
// draw contour line
    j.stroke();
    j.restore();





    j.beginPath();
    j.arc(260, 80, 20, Math.PI, 0, false);
    j.closePath();
    j.fillStyle = gradient;
    j.fill();


    j.lineWidth = 2;
    j.strokeStyle = "black";
    j.stroke();
    j.restore();


    j.save();

    j.translate(100, 100);

// Rotate the canvas context by 45 degrees
    j.rotate(45 * Math.PI / 180);

// Translate the canvas context back to the original position
    j.translate(-100, -100);

// Restore the canvas context state
    j.restore();
    j.closePath();

}



function inscription(){
    let j =  document.getElementById("joonis").getContext("2d");

    j.font = "30px serif";
    j.fillText("The most advanced robot", 1, 40);

    j.fillStyle="black";
    j.fill()
    j.closePath();
    j.restore();

}

function rectangle(){
    let j = document.getElementById("joonis").getContext("2d");
    let laius = document.getElementById("laius").value;
    let korgus = document.getElementById("korgus").value;
    j.fillStyle="red";
    j.fillRect(100,100,laius,korgus);//x,y laisu,kأµrgus


}

function together(){

    brain()
    Leg2()
    Carcass()
    hands()
    Eyes()
    inscription()

}