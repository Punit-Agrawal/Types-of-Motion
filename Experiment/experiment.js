//PROJECT
//Electric Fuse
/*    
        Name : PUNIT AGRAWAL
        COLLEGE Name : NIT-PATNA
*/
var intersects;     // to hold return array of ray intersects
var zs=0;
var mySceneTLX;    
var l=0;    
var mySceneTLY;        
var mySceneBRX;        
var mySceneBRY;
var pgval;  
var gval;      
var mySceneW;          
var mySceneH;          
var myCenterX;         
var myCenterY;         
var myvoltage=0;
var mycurrent=0;
var check = ["-1", "-1", "-1", "-1", "-1"];
//var mytemp=0;
var wallThickness;
var myBack;
var i=0;
var k=1;
var p=0;             
var p=0;
var line;
var line1;
var line1a;
var line2;
var line3;
var line3a;
var gate;
var gateC;
var dir;
var aro;
var aro1;

var leg1;
var leg2;
var tp;
var open;
var resistanceE;
var SwitchText;
var SwitchText1;
var amm;
var amm1;
var volt;
var volt1;
/*variables used to update animation*/
var f;
var c;
var u;

var voltage;
var voltageV = 5;
var resistanceC;
var resistanceV;
var reR;
var reB;
var reG;
var voltageR;
var GS;
var GSF;
var dis;

var currentCIR;
var resistanceCIR;

var BatteryValue;
var counter = 0;
var switchE;
var switchV;
var dissapear1;
var disappear;
var BulbH;
var Bulb;
var BulbB;
var valuebattery;

function handleV(newValue) {
    voltageV = newValue;
    PIErender();
}
function initialiseControlVariables()
{
	voltageR="Voltage(in V)"; 
    voltage = "MaxSafeVoltage(10*V)"; //2
    voltageV = 5.0;
    Vstep = 1.0;
    myvoltage=0.0;
   resistanceC = "Temperature(in C)"; //25
    resistanceV = 60.0;
    resStep = 1.0;
  switchV="OFF";
    dis = "CRT-Current(mA)";
    currentCIR = 1.0;
    resistanceCIR = 0.0;
    mycurrent=0.0;
	k=0;
	resistanceE = "Resistance(in ohm)";
	switchE="Bulb(condition)";
	//L10.scale.set(0,0,0);
//	L10.scale.set(0,0,0);
	//L2.scale.set(1,1,1);
	PIEremoveElement(dir);
		PIEremoveElement(aro);
		PIEremoveElement(aro1);
		PIEaddElement(L2);
		//PIEaddElement(dir);
		//PIEaddElement(aro);
		//PIEaddElement(aro1);
		PIEremoveElement(L10);
			 switchV="Break";
		
		 Bulb.material.color.setHex(0xa6a6a6);
	
}
var flag = 0;

function initialiseControls()
{
    initialiseControlVariables();
   PIEaddInputSlider(voltage,voltageV, handleV, 0.0, 70.0, Vstep);
  PIEaddDisplayText(switchE,switchV);
    PIEpauseAnimation();
	PIEresetExperiment();
	PIEresumeAnimation();
	PIEslowdownAnimation();
	PIEspeedupAnimation();
	PIEstartAnimation();
	PIEstopAnimation();
	PIEupdateHelp(helpContent);
	PIEupdateInfo(infoContent);
	PIEremoveElement(gval);
    PIEaddDisplayText(voltageR, myvoltage);
    PIEaddDisplayText(dis, mycurrent);
    PIEaddDisplayText(resistanceE,resistanceV);
}

var helpContent;
function initialiseHelp()
{
    helpContent="";
    helpContent = helpContent + "<h2>>Electricity  Fuse experiment  help</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment shows a electric circuit which demonstrates Working of Electric Fuse .<br><br>The primary use of an electric fuse is to protect electrical equipment from excessive current and to prevent short circuits or mismatched loads. </p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>The top line has animation controls. There are two states of the experiment.</p>";
    helpContent = helpContent + "<h3>The setup stage</h3>";
    helpContent = helpContent + "<p>The initial state is setup stage. In this stage, you can see a control window at the right. You have access to ONE slider.</p>";
    helpContent = helpContent + "<ul>";
    helpContent = helpContent + "<li>Maximum Safe Voltage (V)&nbsp;&nbsp;:&nbsp;Maximum Safe voltage for our circuit. We will choose Fuse wire Accordingly to  he maximum safe voltage .</li>";
    helpContent = helpContent + "</ul>";
    helpContent = helpContent + "<p>Once you setup the experiment, you can enter the animation stage by clicking the start button</p>";
    helpContent = helpContent + "<h3>The animation stage</h3>";
    helpContent = helpContent + "<p>In the animation stage, the circuit is now complete and the variable battery voltage start increasing every second thus increasing current in wires  .<br> voltmeter reading shows voltage in circuit and ammeter shows current in circuit.<br>At the time when voltage value get more then maximum safe voltage fuse wire melt and circuit breaks .</p>";
    helpContent = helpContent + "<p>The right hand panel now shows the values of current in the circuit , temperature of Fuse wire  and battery voltage. </p>";
    helpContent = helpContent + "<p>You can pause and resume the animation by using the pause/play button on the top line</p>";
    helpContent = helpContent + "<h2>Happy Experimenting</h2>";
    PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo()
{
    infoContent =  "";
    infoContent = infoContent + "<h2>Electricity  Fuse experiment concepts</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment shows a circuit consisting of resistance(electric bulb) , switch , variable battery , wires,  ammeter,   voltmeter,    and  a electric fuse when switch is closed.</p>";
    infoContent = infoContent + "<p> current starts to flow in the circuit when switch is ON as voltage increases result in increase in current and increase in temperature of fuse wire .</p>"
	infoContent = infoContent + "<p>  when an excessive amount of current flows through the fuse wire, the heating effect of current causes the fuse wire to melt and break the circuit.</p>"
	infoContent = infoContent + "<h3>Working of Electric Fuse .</h3>";
    infoContent = infoContent + "<p>The primary use of an electric fuse is to protect electrical equipment from excessive current and to prevent short circuits or mismatched loads.<br><br> Under normal conditions, the fuse wire is part of the circuitry contributing to a complete loop for charges to flow through it. However, when an excessive amount of current flows through the fuse wire, the heating effect of current causes the fuse wire to melt. This is because the fuse wire is chosen such that it has a low melting point. This causes the loop to break thereby stopping the flow of charges in the circuit.</p>";
    infoContent = infoContent + "<h3>Selection Of Fuse Wire .</h3>";
    infoContent = infoContent + "<p>It is important to select a fuse that is properly specified for the circuit in consideration. For example, if the fuse that is used is underrated, then it will fail even under normal current conditions, unnecessarily breaking the circuit loop. <br><br>If it is overrated, then it will not break the circuit when required and cause equipment damage and failure and may even present itself as a safety hazard. .</p>";
    infoContent = infoContent + "<h3>Temperature Increased in Fuse Wire</h3>";
    infoContent = infoContent + "<p>The temperature increased in wire  is directly proportional to current in the circuit.</p>";
    infoContent = infoContent + "<h2>Happy Experimenting</h2>";
    PIEupdateInfo(infoContent);
}
function setOn(){
    //swtch.rotation.z = 0;
	onoff = true;
PIEstartAnimation();
 Bulb.material.color.setHex(0xffff00);
		PIEremoveElement(gval);
		k=1;
     pgval=gval;
	
	swtch.rotation.z = (Math.PI / 2);
   
	PIErender();
}

function setOff(){ 
	swtch.rotation.z = 0;
	 Bulb.material.color.setHex(0xa6a6a6);
		PIEremoveElement(dir);
		PIEremoveElement(aro);
		PIEremoveElement(aro1);
		PIEaddElement(L2);
		//PIEaddElement(dir);
		//PIEaddElement(aro);
		//PIEaddElement(aro1);
		PIEremoveElement(L10);
		
        //dir.scale.set(0, 0, 0);
        //aro.scale.set(0, 0, 0);
        //aro1.scale.set(0, 0, 0);
     //   gate.scale.set(0, 0, 0);
      //  gateC.scale.set(1, 1, 1);
		PIEaddElement(gval);
        PIEremoveElement(gval);
	PIEstopAnimation();
    onoff= false;
  
	PIErender();
}

function setOnOff(){
    onoff = !onoff;
    if (onoff) {setOn()} else {setOff()};
}


function initialiseScene()
{
    mySceneTLX = 0.0;
    mySceneTLY = 3.0;
    mySceneBRX = 4.0;
    mySceneBRY = 0.0;
    mySceneW   = (mySceneBRX - mySceneTLX);
    mySceneH   = (mySceneTLY - mySceneBRY);
    myCenterX  = (mySceneTLX + mySceneBRX) / 2.0;
    myCenterY  = (mySceneTLY + mySceneBRY) / 2.0;
	       var groundMaterial = new THREE.MeshLambertMaterial( { color: 0x00ffff, specular: 0x111111} );
    var mesh233 = new THREE.Mesh( new THREE.PlaneBufferGeometry( 1000, 1000 ), groundMaterial );
    mesh233.position.z = -0;
	mesh233.recieveShadow = true;
    PIEaddElement( mesh233 );
	PIEremoveElement(gval);
	k=0;
  //  setOnOff();
}
function initialiseOtherVariables()
{
    wallThickness = 0.20;
}


function jik()
{ i=0;
 p=0;
	if(onoff==true)
	{i=0;
 p=0;
 while(check[i]==voltageV&&i<5){
							i++;
						
						p=1;
						}
						
						if(p==0&&zs<5){
						check[l]=voltageV;
						zs++;
						i=0;
						PIEupdateTableCell(zs, 0, zs);
				    		PIEupdateTableCell(zs, 1,voltageV );
				   		PIEupdateTableCell(zs, 2,Math.round(currentCIR*1000*100)/100);
						
				   		PIEupdateTableCell(zs, 3,switchV);
						}	
	
		}
}
function loadExperimentElements()
{
	
    line = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.45), new THREE.MeshLambertMaterial({ color: 0xff0000 }));
    line.position.set(.76 , 1.5  + 0.4, 1.0);
    line.castShadow = true;
    PIEaddElement(line);
	
	
    line = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.35), new THREE.MeshLambertMaterial({ color: 0xff0000 }));
    line.position.set(.76 , 1.45 , 1.0);
    line.castShadow = true;
    PIEaddElement(line);
	
    var geo;
    var geometry;
    var material;
    PIEappendHelp(helpContent);
	
   PIEappendInfo(infoContent);//addSystemButtons();
    PIEsetExperimentTitle("Electric Fuse");
    PIEsetDeveloperName("Punit Agrawal");
    PIEhideControlElement();
    initialiseHelp();
    initialiseInfo();
    initialiseScene();

    initialiseOtherVariables();
	PIEaddDualCommand("Note  Reading",jik);

	 PIEcreateTable("Test Table", 10, 10, true);
		    var headerRow=["|S.|</br>|No.|","|V|","|A|", "|Wire|</br>|status|"];
		    PIEupdateTableRow(0, headerRow);
		    PIEupdateTableCell(1, 0, 0);
		    PIEupdateTableCell(1, 1, 0);
		    PIEupdateTableCell(1, 2, 0);
		    PIEupdateTableCell(2, 0, 0);
		    PIEupdateTableCell(2, 1, 0);
		    PIEupdateTableCell(2, 2, 0);
		    PIEupdateTableCell(3, 0, 0);
		    PIEupdateTableCell(3, 1, 0);
		    PIEupdateTableCell(3, 2, 0);
		     PIEupdateTableCell(4, 0, 0);
		    PIEupdateTableCell(4, 1, 0);
		    PIEupdateTableCell(4, 2, 0);
		    PIEupdateTableCell(5, 0, 0);
		    PIEupdateTableCell(5, 1, 0);
		    PIEupdateTableCell(5, 2, 0);
			PIEupdateTableCell(1, 3, 0);
		    PIEupdateTableCell(2,3 , 0);
		    PIEupdateTableCell(3,3, 0);
		    PIEupdateTableCell(4,3, 0);
		    PIEupdateTableCell(5,3, 0);
		    
	
    line1 = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.43), new THREE.MeshLambertMaterial({ color: 0xff0000 }));
    line1.position.set(3.5, 1.22 + 0.25, 0.0);
    line1.castShadow = true;
    PIEaddElement(line1);

    line1a = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.28), new THREE.MeshLambertMaterial({ color: 0xff0000 }));
    line1a.position.set(3.5, 1.87 + 0.25, 0.0);
    line1a.castShadow = true;
    PIEaddElement(line1a);

    line2 = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 3.02), new THREE.MeshLambertMaterial({ color: 0xff0000 }));
    line2.position.set(2, 1 + 0.25, 0.0);
    line2.castShadow = true;
    line2.rotateZ(Math.PI / 2);
    PIEaddElement(line2);

    line3a = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 3), new THREE.MeshLambertMaterial({ color: 0xff0000 }));
    line3a.position.set(2, 2 + 0.25, 0.0);
    line3a.rotateZ(Math.PI / 2);
    PIEaddElement(line3a);
    line3a.castShadow = false;
	
    var res;
    res = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 0.8), new THREE.MeshLambertMaterial({ color:  0x000000}));
    res.position.set(2, .99 + 1.25, 0.1);
    res.castShadow = true;
    res.rotateZ(Math.PI / 2);
    
    PIEaddElement(res);
    
    L2 = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.35), new THREE.MeshLambertMaterial({ color: 0xEAF2F8 }));
    L2.position.set(1.95, .979 + 1.11, 1.18);
     L2.rotateZ(Math.PI / 2);
	PIEaddElement(L2);
    L2.castShadow = false;
    //var L2;
    L10 = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.35), new THREE.MeshLambertMaterial({ color: 0xEAF2F8 }));
    L10.position.set(1.95, .979 + 1.07, 1.18);
     L10.rotateZ(Math.PI / 2.4);
	PIEaddElement(L10);
    L10.castShadow = false;

	    var L3;
    L3 = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.25), new THREE.MeshLambertMaterial({ color: 0xF1C40F }));
    L3.position.set(1.67, .979 + 1.12, 1.18);
    PIEaddElement(L3);
    L3.castShadow = false;

	    var L5;
    L5 = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.25), new THREE.MeshLambertMaterial({ color: 0xF1C40F }));
    L5.position.set(2.32, 0.979 + 1.12, 1.18);
    PIEaddElement(L5);
    L5.castShadow = false;
	
	
	texture = new THREE.TextureLoader().load( 'battery.png' );


geometry = new THREE.PlaneGeometry(.6, .4);
    plane = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({ opacity: 0.5 ,map: texture})); // 0xfcf0b6
    plane.position.set(.615, 1.7, 1);
  PIEaddElement(plane);

	  switchGeom = new THREE.BoxGeometry(.5, .05, .01);
    
	swtch = new THREE.Mesh(switchGeom, new THREE.MeshLambertMaterial({color: "red"}));
    swtch.position.set(3.45, 0.62 + 1.25, 0.18);
	PIEaddElement(swtch);
	PIEsetClick(swtch,function(){setOnOff();});
	

    geometry = new THREE.BoxGeometry(0.40, 0.12, 0.25);
    material = new THREE.MeshLambertMaterial({ color: 0x303030 });
    switchB = new THREE.Mesh(geometry, material);
    switchB.position.set(3.48, 1.62 + 0.25, 0.1);
    switchB.rotateX(Math.PI / 6);
    //PIEaddElement(switchB);
    switchB.castShadow = false;

	texture = new THREE.TextureLoader().load( 'up.png' );

 geometry = new THREE.PlaneGeometry(.08,.08);
    up = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({ opacity: 0.5 ,map:texture})); // 0xfcf0b6
    up.position.set(.83, 1.7, 1.0);
    PIEaddElement(up);
texture = new THREE.TextureLoader().load( 'up.png' );

 geometry = new THREE.PlaneGeometry(.08,.08);
    down = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({ opacity: 0.5 ,map:texture})); // 0xfcf0b6
    down.position.set(.83, 1.6, 1.0);
	down.rotateZ(Math.PI);
    PIEaddElement(down);
	
onoff=false;
		
	document.getElementById("start").addEventListener("click", setOn);
    document.getElementById("stop").addEventListener("click",setOff);
  
	 var bb6 = "font-family: Monospace ; color: #ffffff; margin: 0px; overflow: hidden;";
 
	
  var bb = "font-family: Monospace ; color: #000000; margin: 0px; overflow: hidden;";
    var bb1 = "font-family: Monospace; color: #000000; margin: 0px; overflow: hidden; ";
    var bb2 = "font-family: Monospace; color: #000000; margin: 0px; overflow: hidden;";
    var bb3 = "font-family: Monospace; color: #000000; margin: 0px; overflow: hidden; font-size: 30px;";
    var bb4 = "font-family: Monospace; color: #00e600; margin: 0px; overflow: hidden; ; background-color: #00e600 ;border-style: inset;";
    var bb5 = "font-family: Monospace; color: #ff0000; margin: 0px; overflow: hidden; ; background-color: #ff0000 ;border-style: inset;";

   

    PIEstopButton.addEventListener("click", PIEpauseAnimation);


    dir = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.2), new THREE.MeshLambertMaterial({ color: 0x000000 }));
    dir.position.set(0.6, 2 + 0.25, 0.0);
    dir.rotateZ(Math.PI / 2);
    PIEaddElement(dir);
    dir.castShadow = false;

    aro = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.05), new THREE.MeshLambertMaterial({ color: 0x000000 }));
    aro.position.set(0.7, 2.01 + 0.25, 0.0);
    aro.rotateZ(Math.PI / 4);
    PIEaddElement(aro);
    aro.castShadow = false;

    aro1 = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.05), new THREE.MeshLambertMaterial({ color: 0x000000 }));
    aro1.position.set(0.7, 1.99 + 0.25, 0.0);
    aro1.rotateZ(-Math.PI / 4);
    PIEaddElement(aro1);
    aro1.castShadow = false;

    f = 0;
    c = 0;
    u = 0;

var L4;
    L4 = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.151), new THREE.MeshLambertMaterial({ color: 0xEAF2F8 }));
    L4.position.set(1.755, .99 + 1.10, 1.18);
	L4.rotateZ(Math.PI / 2);
    PIEaddElement(L4);
    L4.castShadow = false;
	


var L14;
    L14 = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.251), new THREE.MeshLambertMaterial({ color: 0xEAF2F8 }));
    L14.position.set(2.2, .99 + 1.10, 1.18);
	L14.rotateZ(Math.PI / 2);
    PIEaddElement(L14);
    L14.castShadow = false;


	

 loader = new THREE.FontLoader();
    loader.load("optimer.json", function(response){
		font = response;
       geometry = new THREE.TextGeometry("Fuse", {
            font : font,
            size : .05,
            height : 0,
        });
		        gval1=new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({color:0x000000}));
        gval1.translation = geometry.center();
PIEaddElement(gval1);       
	   gval1.position.set(2, 2.2, 2);

	});

PIEsetClick(up,function(){voltageV=voltageV+1;PIEremoveElement(gval);k=1;PIEchangeInputSlider(voltage, voltageV)});
        PIEsetClick(down,function(){if(voltageV>0){voltageV=voltageV-1;PIEremoveElement(gval);k=1;PIEchangeInputSlider(voltage, voltageV)}});
        
    
    geometry = new THREE.CylinderGeometry(0.1, 0.1, 0.06);
    material = new THREE.MeshBasicMaterial({ color: 0x111111 });
    BulbH = new THREE.Mesh(geometry, material);
    BulbH.position.set(2, 1 + 0.25, 0.0); 
    PIEaddElement(BulbH);
    BulbH.castShadow = false;

    geo = new THREE.Shape();
    geo.moveTo(2.1,1.25);
    geo.quadraticCurveTo(2.2,0.98,2.2,0.98);
    geo.quadraticCurveTo(2,0.98-0.5,1.8,0.98);
    geo.quadraticCurveTo(2 - 0.1, 1.25, 2 - 0.1, 1.25);
    geometry = new THREE.ShapeGeometry(geo);
    Bulb = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xa6a6a6 }));
    PIEaddElement(Bulb);

    geo = new THREE.Shape();
    geo.moveTo(2 +0.1/2, 1 + 0.25);
    geo.quadraticCurveTo(2, 1.45, 2 - 0.1/2, 1 + 0.25);
    geometry = new THREE.ShapeGeometry(geo);
    BulbB = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0x222222 }));
    PIEaddElement(BulbB);

    geometry = new THREE.BoxGeometry(mySceneW * 2, mySceneH *2, wallThickness);
    material = new THREE.MeshLambertMaterial({ color: 0xFDF6D5 });
    myBack = new THREE.Mesh(geometry, material);
    myBack.position.set(myCenterX, myCenterY, -1.5 * wallThickness);
    PIEaddElement(myBack);
    myBack.receiveShadow = false;

    initialiseControls();
    PIEstopButton.addEventListener("click", PIEpauseAnimation);
    resetExperiment();
    PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
}
function resetExperiment()
{     myvoltage=0;
mycurrent=0;
switchV="OFF";
k=0;
	swtch.rotation.z = 0;
	 onoff= false;
	PIEremoveElement(gval);
Bulb.material.color.setHex(0xa6a6a6);
zs=0;
 PIEupdateTableCell(1, 0, 0);
		    PIEupdateTableCell(1, 1, 0);
		    PIEupdateTableCell(1, 2, 0);
		    PIEupdateTableCell(2, 0, 0);
		    PIEupdateTableCell(2, 1, 0);
		    PIEupdateTableCell(2, 2, 0);
		    PIEupdateTableCell(3, 0, 0);
		    PIEupdateTableCell(3, 1, 0);
		    PIEupdateTableCell(3, 2, 0);
		     PIEupdateTableCell(4, 0, 0);
		    PIEupdateTableCell(4, 1, 0);
		    PIEupdateTableCell(4, 2, 0);
		    PIEupdateTableCell(5, 0, 0);
		    PIEupdateTableCell(5, 1, 0);
		    PIEupdateTableCell(5, 2, 0);
			PIEupdateTableCell(1, 3, 0);
		    PIEupdateTableCell(2,3 , 0);
		    PIEupdateTableCell(3,3, 0);
		    PIEupdateTableCell(4,3, 0);
		    PIEupdateTableCell(5,3, 0);
		   
 initialiseControlVariables();
    initialiseOtherVariables();
 //   dir.scale.set(0, 0, 0);
   // aro.scale.set(0, 0, 0);
    //aro1.scale.set(0, 0, 0);
    //gate.scale.set(1, 1, 1);
   // gateC.scale.set(0, 0, 0);
PIEremoveElement(dir);
		PIEremoveElement(aro);
		PIEremoveElement(aro1);
		PIEaddElement(L2);
		//PIEaddElement(dir);
		//PIEaddElement(aro);
		//PIEaddElement(aro1);
		PIEremoveElement(L10);
		

    dx = dy = dz = 0;
    Bulb.material.color.setHex(0xa6a6a6);
    var loop=0;
    resistanceV = 60.0;
    flag = 0;

    PIEchangeInputSlider(voltage, voltageV);


    if (dir.position.x == 3.0) {
        dir.rotateZ(Math.PI / 2);
        aro.rotateZ(- Math.PI / 2);
        aro1.rotateZ(Math.PI / 2);
        f = 0;
    }
    else if (dir.position.y == 1 + 0.25) {
        dir.rotateZ(Math.PI );
        aro.rotateZ(Math.PI);
        aro1.rotateZ(Math.PI);
        f = 0;
        c = 0;
    }
    else if (dir.position.x == 0.5) {
        dir.rotateZ(Math.PI / 2);
        aro.rotateZ(-Math.PI/2);
        aro1.rotateZ(-Math.PI/2); 
        f = 0;
        c = 0;
        u = 0;
    }

    dir.position.set(0.6, 2 + 0.25, 0.0);
    aro.position.set(0.7, 2.01 + 0.25, 0.0);
    aro1.position.set(0.7, 1.99 + 0.25, 0.0);

  // L10.scale.set(0,0,0);
	//L2.scale.set(1,1,1);
    
}
var dx = 0;
var dy = 0;
var dz = 0;
function updateExperimentElements(t, dt)
{
	if(voltageV==0){
		 Bulb.material.color.setHex(0xa6a6a6);
		PIEremoveElement(dir);
		PIEremoveElement(aro);
		PIEremoveElement(aro1);
		PIEaddElement(L2);
		PIEremoveElement(L10);
		
	}
    if (voltageV >0) {
		 Bulb.material.color.setHex(0xa6a6a6);
		if(k==1){
			loader = new THREE.FontLoader();
    loader.load("optimer.json", function(response){
		font = response;
       geometry = new THREE.TextGeometry(voltageV+"V", {
            font : font,
            size : .05,
            height : 0,
        });
		        gval=new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({color:0xff0000}));
        gval.translation = geometry.center();
PIEaddElement(gval);       
	   gval.position.set(.8, 1.72, 2);

	});
		}
		
		k=0;
	//PIEremoveElement(pgval);
 
		p++;
		//PIEremoveElement(dir);
		//PIEremoveElement(aro);
		//PIEremoveElement(aro1);
		PIEaddElement(L2);
		PIEaddElement(dir);
		PIEaddElement(aro);
		PIEaddElement(aro1);
		PIEremoveElement(L10);
		/*
        dir.scale.set(1, 1, 1);
        aro.scale.set(1, 1, 1);
        aro1.scale.set(1, 1, 1);
       // gate.scale.set(0, 0, 0);
       // gateC.scale.set(1, 1, 1);
		L2.scale.set(1,1,1);
		L10.scale.set(0,0,0);*/
 var counter;
counter =2;
        dx += counter / 2000;
        dy += counter / 2000;
        dz += counter / 2000;
	//	disappear.scale.set(1 + dx * 10.2, 1 + dy * 0.0, 1 + dz * 0);
      //  disappear1.scale.set(1 + dx * 2, 1 + dy * 2, 1 + dz * 2);
       
        resistanceCIR = resistanceV;
		 if(voltageV<0)
        voltageV=-voltageV;
        currentCIR = voltageV / resistanceCIR;

        if (currentCIR * 1000 < 840&& currentCIR * 1000 >0)
            Bulb.material.color.setHex(0xffff00);
        else{
            Bulb.material.color.setHex(0xa6a6a6);

        }
		if (currentCIR * 1000 < 840&& currentCIR * 1000 >0)
        {
		if (aro.position.x < 3.5 && c != 1) {
            aro.position.set(aro.position.x + 0.02, aro.position.y, aro.position.z);
            aro1.position.set(aro1.position.x + 0.02, aro1.position.y, aro1.position.z);
            dir.position.set(dir.position.x + 0.02, dir.position.y, dir.position.z);
        }
        else if (aro.position.x >= 3.5 && f != 1) {

            aro.position.set(3.5 + 0.01, 1.8 + 0.25, 0);
            aro.rotateZ(Math.PI / 2);
            aro1.position.set(3.5 - 0.01, 1.8 + 0.25, 0);
            aro1.rotateZ(-Math.PI / 2);
            dir.position.set(3.5, 1.9 + 0.25, 0);
            dir.rotateZ(Math.PI / 2);
            f = 1;
        }
        else if (f == 1 && aro.position.y > 1 + 0.25 && u == 0) {
            aro.position.set(aro.position.x, aro.position.y - 0.02, aro.position.z);
            aro1.position.set(aro1.position.x, aro1.position.y - 0.02, aro1.position.z);
            dir.position.set(dir.position.x, dir.position.y - 0.02, dir.position.z);
        }
        else if (aro.position.y <= 1 + 0.25 && c != 1) {
            aro.position.set(3.3, 1 - 0.01 + 0.25, 0);
            aro.rotateZ(-Math.PI / 2);
            aro1.position.set(3.3, 1 + 0.01 + 0.25, 0);
            aro1.rotateZ(+Math.PI / 2);
            dir.position.set(3.4, 1 + 0.25, 0);
            dir.rotateZ(Math.PI / 2);
            c = 1;
        }
        else if (c == 1 && aro.position.x > 0.5) {
            aro.position.set(aro.position.x - 0.02, aro.position.y, aro.position.z);
            aro1.position.set(aro1.position.x - 0.02, aro1.position.y, aro1.position.z);
            dir.position.set(dir.position.x - 0.02, dir.position.y, dir.position.z);
        }
        else if (aro.position.x <= 0.5 && u != 1) {
            aro.position.set(0.5 - 0.01, 1.2 + 0.25, 0);
            aro.rotateZ(-Math.PI / 2);
            aro1.position.set(0.5 + 0.01, 1.2 + 0.25, 0);
            aro1.rotateZ(+Math.PI / 2);
            dir.position.set(0.5, 1.1 + 0.25, 0);
            dir.rotateZ(Math.PI / 2);
            u = 1;
        }
        else if (u == 1) {
            aro.position.set(aro.position.x, aro.position.y + 0.02, aro.position.z);
            aro1.position.set(aro1.position.x, aro1.position.y + 0.02, aro1.position.z);
            dir.position.set(dir.position.x, dir.position.y + 0.02, dir.position.z);
            if (aro.position.y >= 2 + 0.25) {
                dir.position.set(0.6, 2 + 0.25, 0.0);
                dir.rotateZ(Math.PI / 2)
                aro.position.set(0.7, 2.01 + 0.25, 0.0);
                aro.rotateZ(-Math.PI / 2)
                aro1.position.set(0.7, 1.99 + 0.25, 0.0);
                aro1.rotateZ(Math.PI / 2);
                f = 0;
                c = 0;
                u = 0;
            }
        }
		}
		else {/*
			L10.scale.set(1,1,1);
			L2.scale.set(0,0,0);
        dir.scale.set(0, 0, 0);
        aro.scale.set(0, 0, 0);
        aro1.scale.set(0, 0, 0);*/
		PIEremoveElement(dir);
		PIEremoveElement(aro);
		PIEremoveElement(aro1);
		PIEaddElement(L10);
		//PIEaddElement(dir);
		//PIEaddElement(aro);
		//PIEaddElement(aro1);
		PIEremoveElement(L2);
		
        resistanceCIR = resistanceV;
        currentCIR = -10;
		   Bulb.material.color.setHex(0xa6a6a6);
	  switchV="OFF";
	// p=1;
    }
	if(p==1){
		//p=2;
		 switchV="Break";
	PIEremoveElement(dir);
		PIEremoveElement(aro);
		PIEremoveElement(aro1);
		PIEaddElement(L2);
		//PIEaddElement(dir);
		//PIEaddElement(aro);
		//PIEaddElement(aro1);
		PIEremoveElement(L10);
		
		 Bulb.material.color.setHex(0xa6a6a6);
	}
    }     
    if (counter == 0) {
        counter++;
        PIEresetExperiment();
    }
	
	
	if(voltageV!=0){
		for(var i=0;i<10;i++){
		
		myvoltage=myvoltage+.0025;
		if(voltageV>50)
		switchV="Break";
	else{
	switchV="Running";}
		mycurrent=mycurrent+.00015;
	if(voltageV>=0){
    PIEchangeDisplayText(voltageR,voltageV);
	 /*BatteryValue.innerHTML = voltageV + "V";*/
	}
	
else{
	/* BatteryValue.innerHTML = voltageV + "V";
	*/
	PIEchangeDisplayText(voltageR,-voltageV+7);
}


   if(voltageV>=0)
   PIEchangeDisplayText(dis, currentCIR*1000);
    
	else{
	PIEchangeDisplayText(dis, 0);
    }	
	PIEchangeDisplayText(switchE, switchV);
		
	PIEchangeDisplayText(resistanceE,resistanceV);
	}}
	

}
