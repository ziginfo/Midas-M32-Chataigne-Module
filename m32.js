var myParameters = {};
var paramUseMeters;
var paramUseControls;

function init() {
	names=local.values.addContainer("Names");
	names.setCollapsed(true);
	
		
	for (var i = 1; i<=32; i++) {
		names.addStringParameter("Track "+(i), "","");}
		
	faders = local.values.faders.addContainer("Channel Faders");
		faders.setCollapsed(true);
		for (var i = 1; i<=32; i++) {
		faders.addFloatParameter("Fader "+(i), "", 0, 0, 1);}
		
	faders = local.values.faders.addContainer("Bus Faders");
		faders.setCollapsed(true);
		for (var i = 1; i<=16; i++) {
		faders.addFloatParameter("Bus "+(i), "", 0, 0, 1);}
		faders.addFloatParameter("Main LR", "", 0, 0, 1);
		faders.addFloatParameter("Main Mono", "", 0, 0, 1);
		
	faders = local.values.faders.addContainer("DCA MTX Faders");
		faders.setCollapsed(true);
		for (var i = 1; i<=8; i++) {
		faders.addFloatParameter("DCA "+(i), "", 0, 0, 1);}
		for (var i = 1; i<=6; i++) {
		faders.addFloatParameter("Matrix "+(i), "", 0, 0, 1);}
		
	faders = local.values.faders.addContainer("AUX FxRtn Faders");
		faders.setCollapsed(true);
		for (var i = 1; i<=8; i++) {
		faders.addFloatParameter("AuxIn "+(i), "", 0, 0, 1);}
		for (var i = 1; i<=8; i++) {
		faders.addFloatParameter("FX Return "+(i), "", 0, 0, 1);}
		
	meters =local.values.addContainer("Meters");
		meters.setCollapsed(true);
		for (var i = 0; i < meters4.length; i++) {
		var n = meters4[i];
		var p = local.values.getChild("Meters").addFloatParameter(n,n,0,0,1); }
}

var meters4 = [
	"in1", "in2", "in3", "in4", "in5", "in6", "in7", "in8", "in9", "in10", "in11", "in12", "in13", "in14", "in15", "in16", "in17", "in18", "in19", "in20", "in21", "in22", "in23", "in24", "in25", "in26", "in27", "in28", "in29", "in30", "in31", "in32", 
	"aux1", "aux2", "aux3", "aux4", "aux5", "aux6", "aux7", "aux8", 
	"out1", "out2", "out3", "out4", "out5", "out6", "out7", "out8", "out9", "out10", "out11", "out12", "out13", "out14", "out15", "out16"
	];


function oscEvent(address, args) {

	//	if (address == "/info"){
	//	local.values.infos.info1.set(args[4]);}
		
		for(var i=0; i <4; i++) {
		if (address == "/info") {
		n= i+1 ;
		local.values.infos.getChild('Info'+n).set(args[i]);} }
		
		for(var i=0; i <4; i++) {
		if (address == "/status") {
		n= i+5 ;
		local.values.infos.getChild('Info'+n).set(args[i]);} }		

		for(var i=1; i <10; i++) {
		if (address == "/ch/0"+i+"/mix/fader") {
		local.values.faders.channelFaders.getChild('Fader'+i).set(args[0]);} }		
		for(var i=10; i <=32; i++) {
		if (address == "/ch/"+i+"/mix/fader") {
		local.values.faders.channelFaders.getChild('Fader'+i).set(args[0]);} }
		
		for(var i=1; i <10; i++) {
		if (address == "/bus/0"+i+"/mix/fader") {
		local.values.faders.busFaders.getChild('Bus'+i).set(args[0]);} }		
		for(var i=10; i <=16; i++) {
		if (address == "/bus/"+i+"/mix/fader") {
		local.values.faders.busFaders.getChild('Bus'+i).set(args[0]);} }
		
		if (address == "/main/st/mix/fader") {
		local.values.faders.busFaders.mainLR.set(args[0]); }
		if (address == "/main/m/mix/fader") {
		local.values.faders.busFaders.mainMono.set(args[0]); }
		
		for(var i=1; i <=8; i++) {
		if (address == "/dca/"+i+"/fader") {
		local.values.faders.dcaMTXFaders.getChild('dca'+i).set(args[0]);} }
		
		for(var i=1; i <=6; i++) {
		if (address == "/mtx/0"+i+"/mix/fader") {
		local.values.faders.dcaMTXFaders.getChild('matrix'+i).set(args[0]);} }
		
		for(var i=1; i <=8; i++) {
		if (address == "/auxin/0"+i+"/mix/fader") {
		local.values.faders.auxFxRtnFaders.getChild('auxIn'+i).set(args[0]);} }
		
		for(var i=1; i <=8; i++) {
		if (address == "/fxrtn/0"+i+"/mix/fader") {
		local.values.faders.auxFxRtnFaders.getChild('fxReturn'+i).set(args[0]);} }
		
		for(var i=1; i <10; i++) {
		if (address == "/ch/0"+i+"/config/name") {
		local.values.names.getChild('Track'+i).set(args[0]);} }		
		for(var i=10; i <=32; i++) {
		if (address == "/ch/"+i+"/config/name") {
		local.values.names.getChild('Track'+i).set(args[0]);} }

/*	
		if (address == "/meters/4") {
		for(var i=0; i < args.length; i++) {
			var data = args[i];
			var d = 1;
			for (var j = 4*d; j< data.length; j=j+4) {
				var index = parseInt(Math.floor(j/4))-1;
				if (index < meters4.length) {
					var f = bytesToFloat([data[j+0], data[j+1], data[j+2], data[j+3]]);
					var n = meters4[index];
					local.values.getChild("Meters").getChild(n).set(f); } } }
	} else {}
*/	
		
}

/*

function bytesToFloat(bytes) {
    // JavaScript bitwise operators yield a 32 bits integer, not a float.
    // Assume LSB (least significant byte first).
    var bits = bytes[3]<<24 ;//| bytes[2]<<16 | bytes[1]<<8 | bytes[0];
    bits = bits | bytes[2]<<16;
    bits = bits | bytes[1]<<8;
    bits = bits | bytes[0];

    var sign = (bits>>>31 === 0) ? 1.0 : -1.0;
    var e = bits>>>23 & 0xff;
    var m = (e === 0) ? (bits & 0x7fffff)<<1 : (bits & 0x7fffff) | 0x800000;
    var f = sign * m * Math.pow(2, e - 150);
    return f;
  }  
 */ 
 
 function moduleValueChanged(value) { 
 	if (value.name=="clickToUpdateAll"){ 
		for(var i=1; i <10; i++) {
		local.send("/subscribe","/ch/0"+i+"/config/name 50");} 
		for(var i=10; i <=32; i++) {
		local.send("/subscribe","/ch/"+i+"/config/name 50");}
		for(var i=1; i <10; i++) {
		local.send("/subscribe","/ch/0"+i+"/mix/fader 50");} 
		for(var i=10; i <=32; i++) {
		local.send("/subscribe","/ch/"+i+"/mix/fader 50");}
		for(var i=1; i <10; i++) {
		local.send("/subscribe","/bus/0"+i+"/mix/fader 50");} 
		for(var i=10; i <=32; i++) {
		local.send("/subscribe","/bus/"+i+"/mix/fader 50");}
		for(var i=1; i <=8; i++) {
		local.send("/subscribe","/auxin/0"+i+"/mix/fader 50");}
 		for(var i=1; i <8; i++) {
		local.send("/subscribe","/fxrtn/0"+i+"/mix/fader 50");}
		for(var i=1; i <6; i++) {
		local.send("/subscribe","/mtx/0"+i+"/mix/fader 50");} 
		for(var i=1; i <=8; i++) {
		local.send("/subscribe","/dca/"+i+"/fader 50");}
		local.send("/subscribe","/main/st/mix/fader 50");
		local.send("/subscribe","/main/m/mix/fader 50"); 
		}	
		else {}  
}


 
function update(deltaTime) {
	var now = util.getTime();
	if (now > TSSendAlive) {
		TSSendAlive = now + 6;
		keepAlive();
	}
}

function keepAlive() {
//		local.send("/meters", "/meters/4");
		local.send("/info");
		local.send("/status");
		local.send("/xremote");
		
	
}

// Requests
function request_names() {
 		for(var i=1; i <10; i++) {
		local.send("/subscribe","/ch/0"+i+"/config/name 50");} 
		for(var i=10; i <=32; i++) {
		local.send("/subscribe","/ch/"+i+"/config/name 50");} 
}

function request_chfader() {
 		for(var i=1; i <10; i++) {
		local.send("/subscribe","/ch/0"+i+"/mix/fader 50");} 
		for(var i=10; i <=32; i++) {
		local.send("/subscribe","/ch/"+i+"/mix/fader 50");} 
}

function request_busfader() {
 		for(var i=1; i <10; i++) {
		local.send("/subscribe","/bus/0"+i+"/mix/fader 50");} 
		for(var i=10; i <=32; i++) {
		local.send("/subscribe","/bus/"+i+"/mix/fader 50");}
		local.send("/subscribe","/main/st/mix/fader 50");
		local.send("/subscribe","/main/m/mix/fader 50"); 
}

function request_rtnfader() {
		for(var i=1; i <=8; i++) {
		local.send("/subscribe","/auxin/0"+i+"/mix/fader 50");}
 		for(var i=1; i <8; i++) {
		local.send("/subscribe","/fxrtn/0"+i+"/mix/fader 50");} 
		 
}

function request_dcamtxfader() {
 		for(var i=1; i <6; i++) {
		local.send("/subscribe","/mtx/0"+i+"/mix/fader 50");} 
		for(var i=1; i <=8; i++) {
		local.send("/subscribe","/dca/"+i+"/fader 50");} 
}


/*	
function request_all() {
		var i = "**" ;
		local.send("/formatsubscribe", "zig  /ch/[01-32]/config/name 50");}
		local.send("/formatsubscribe", "zig  /ch/[01-32]/mix/fader 50");}
		local.send("/formatsubscribe", "zig  /bus/"+i+"/mix/fader 50");} 		
		local.send("/formatsubscribe", "zig  /bus/"+i+"/mix/fader 50");}		
		local.send("/formatsubscribe", "zig  /auxin/"+i+"/mix/fader 50");}		
		local.send("/formatsubscribe", "zig  /fxrtn/"+i+"/mix/fader 50");}		
		local.send("/formatsubscribe", "zig  /mtx/"+i+"/mix/fader 50");} 		
		local.send("/formatsubscribe", "zig  /dca/"+i+"/fader 50");}
		local.send("/subscribe","/main/st/mix/fader 50");
		local.send("/subscribe","/main/m/mix/fader 50");  
}
*/


function request_all() {
 		for(var i=1; i <10; i++) {
		local.send("/subscribe","/ch/0"+i+"/config/name 50");} 
		for(var i=10; i <=32; i++) {
		local.send("/subscribe","/ch/"+i+"/config/name 50");}
		for(var i=1; i <10; i++) {
		local.send("/subscribe","/ch/0"+i+"/mix/fader 50");} 
		for(var i=10; i <=32; i++) {
		local.send("/subscribe","/ch/"+i+"/mix/fader 50");}
		for(var i=1; i <10; i++) {
		local.send("/subscribe","/bus/0"+i+"/mix/fader 50");} 
		for(var i=10; i <=32; i++) {
		local.send("/subscribe","/bus/"+i+"/mix/fader 50");}
		for(var i=1; i <=8; i++) {
		local.send("/subscribe","/auxin/0"+i+"/mix/fader 50");}
 		for(var i=1; i <8; i++) {
		local.send("/subscribe","/fxrtn/0"+i+"/mix/fader 50");}
		for(var i=1; i <6; i++) {
		local.send("/subscribe","/mtx/0"+i+"/mix/fader 50");} 
		for(var i=1; i <=8; i++) {
		local.send("/subscribe","/dca/"+i+"/fader 50");}
		local.send("/subscribe","/main/st/mix/fader 50");
		local.send("/subscribe","/main/m/mix/fader 50");  
}



//  Chan Config

function config_name(targetType, targetNumber, val) {
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; }
	local.send("/"+targetType+"/"+targetNumber+"/config/name", val);
}


function config_color(targetType, targetNumber, val) {
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; }
	local.send("/"+targetType+"/"+targetNumber+"/config/color", val);
}

function config_icon(targetType, targetNumber, value) {  
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; } 
	local.send("/"+targetType+"/"+targetNumber+"/config/icon", value);
}

function channel_source(targetType,targetNumber, val) {
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; } 
	local.send("/"+targetType+"/"+targetNumber+"/config/source", val);
}



//  Channel Actions

function ch_automix_group(targetNumber, val) {
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; } 
	local.send("/ch/"+targetNumber+"/automix/group", val);
}

function ch_automix_gain(targetNumber, val) {
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; } 
	
	local.send("/ch/"+targetNumber+"/automix/weight", val);
}



//  Preamp

function preamp_gain(targetType, targetNumber, val) {
	
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; }
	local.send("/"+targetType+"/"+targetNumber+"/preamp/trim", val);
}

function auxin_trim(targetType, targetNumber, val) {
	
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; }
	local.send("/"+targetType+"/"+targetNumber+"/preamp/trim", val);
}

function preamp_invert(targetType, targetNumber, val) {
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; }
	local.send("/"+targetType+"/"+targetNumber+"/preamp/invert", val);
}


//  Gate
function gate_on(targetType, targetNumber, val) {
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; }
	local.send("/"+targetType+"/"+targetNumber+"/gate/on", val);
}

function gate_mode(targetType, targetNumber, val) { 
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; }
	local.send("/"+targetType+"/"+targetNumber+"/gate/mode", val);
}

function gate_thr(targetType, targetNumber, val) {
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; }
	val=(val+80)/80 ;
	local.send("/"+targetType+"/"+targetNumber+"/gate/thr", val);
}

function gate_range(targetType, targetNumber, val) {
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; }
	val=(val-3)/57 ;
	local.send("/"+targetType+"/"+targetNumber+"/gate/range", val);
}

function gate_attack(targetType, targetNumber, val) { 
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; }
	
	local.send("/"+targetType+"/"+targetNumber+"/gate/attack", val);
}

function gate_hold(targetType, targetNumber, val) { 
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; }
	local.send("/"+targetType+"/"+targetNumber+"/gate/hold", val);
}

function gate_release(targetType, targetNumber, val) { 
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; }
	local.send("/"+targetType+"/"+targetNumber+"/gate/release", val);
}

function gate_keysrc(targetType, targetNumber, val) {
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; }
	local.send("/"+targetType+"/"+targetNumber+"/gate/keysrc", val);
}

function gate_filter_on(targetType, targetNumber, val) { 
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; }
	local.send("/"+targetType+"/"+targetNumber+"/gate/filter/on", val);
}

function gate_filter_type(targetType, targetNumber, val) { 
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; }
	local.send("/"+targetType+"/"+targetNumber+"/gate/filter/type", val);
}

function gate_filter_f(targetType, targetNumber, val) { 
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; }
	local.send("/"+targetType+"/"+targetNumber+"/gate/filter/f", val);
}

function gate_keysrc(targetType, targetNumber, val) {
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; }
	local.send("/"+targetType+"/"+targetNumber+"/gate/keysrc", val);
}


//  Compressor

function ch_comp_full(targetType, targetNumber, val1, val2, val3, val4, val5, val6, val7, val8, val9, val10, val11, val12, val13 ) { 
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; }
	local.send("/"+targetType+"/"+targetNumber+"/dyn/on", val1);
	local.send("/"+targetType+"/"+targetNumber+"/dyn/mode", val2);
	local.send("/"+targetType+"/"+targetNumber+"/dyn/det", val3);
	local.send("/"+targetType+"/"+targetNumber+"/dyn/env", val4);
	
	local.send("/"+targetType+"/"+targetNumber+"/dyn/thr", val5);
	local.send("/"+targetType+"/"+targetNumber+"/dyn/ratio", val6);
	local.send("/"+targetType+"/"+targetNumber+"/dyn/knee", val7);
	 
	local.send("/"+targetType+"/"+targetNumber+"/dyn/mgain", val8);
	
	local.send("/"+targetType+"/"+targetNumber+"/dyn/attack", val9);
	local.send("/"+targetType+"/"+targetNumber+"/dyn/hold", val10);
	local.send("/"+targetType+"/"+targetNumber+"/dyn/release", val11);
	
	local.send("/"+targetType+"/"+targetNumber+"/dyn/mix", val12);
	local.send("/"+targetType+"/"+targetNumber+"/dyn/auto", val13);
}

function comp_reset(targetType, targetNumber, val) { 
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; }
	local.send("/"+targetType+"/"+targetNumber+"/dyn/keysrc", val);
	local.send("/"+targetType+"/"+targetNumber+"/dyn/on", 0);
	local.send("/"+targetType+"/"+targetNumber+"/dyn/mode", 0);
	local.send("/"+targetType+"/"+targetNumber+"/dyn/det", 0);
	local.send("/"+targetType+"/"+targetNumber+"/dyn/env", 1);
	local.send("/"+targetType+"/"+targetNumber+"/dyn/thr", 1.0);
	local.send("/"+targetType+"/"+targetNumber+"/dyn/ratio", 0);
	local.send("/"+targetType+"/"+targetNumber+"/dyn/knee", 1);
	local.send("/"+targetType+"/"+targetNumber+"/dyn/attack", 0.085);
	local.send("/"+targetType+"/"+targetNumber+"/dyn/hold", 0.545);
	local.send("/"+targetType+"/"+targetNumber+"/dyn/release", 0.51);
	local.send("/"+targetType+"/"+targetNumber+"/dyn/mix", 1.0);
	local.send("/"+targetType+"/"+targetNumber+"/dyn/auto", 0);
}


function dyn_on(targetType, targetNumber, val) { 
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; }
	local.send("/"+targetType+"/"+targetNumber+"/dyn/on", val);
}

function dyn_mode(targetType, targetNumber, val) { 
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; }
	local.send("/"+targetType+"/"+targetNumber+"/dyn/mode", val);
}

function dyn_det(targetType, targetNumber, val) { 
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; }
	local.send("/"+targetType+"/"+targetNumber+"/dyn/det", val);
}

function dyn_env(targetType, targetNumber, val) { 
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; }
	local.send("/"+targetType+"/"+targetNumber+"/dyn/env", val);
}

function dyn_thr(targetType, targetNumber, val) {
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; }
	val=(val+60)/60 ;
	local.send("/"+targetType+"/"+targetNumber+"/dyn/thr", val);
}

function dyn_ratio(targetType, targetNumber, val) { 
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; }
	local.send("/"+targetType+"/"+targetNumber+"/dyn/ratio", val);
}

function dyn_knee(targetType, targetNumber, val) { 
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; }
	local.send("/"+targetType+"/"+targetNumber+"/dyn/knee", val);
}

function dyn_mgain(targetType, targetNumber, val) {
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; }
	
	local.send("/"+targetType+"/"+targetNumber+"/dyn/mgain", val);
}

function dyn_attack(targetType, targetNumber, val) {
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; }
	
	local.send("/"+targetType+"/"+targetNumber+"/dyn/attack", val);
}

function dyn_hold(targetType, targetNumber, val) { 
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; }
	local.send("/"+targetType+"/"+targetNumber+"/dyn/hold", val);
}

function dyn_release(targetType, targetNumber, val) {
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; }
	local.send("/"+targetType+"/"+targetNumber+"/dyn/release", val);
}

function dyn_pos(targetType, targetNumber, val) { 
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; }
	local.send("/"+targetType+"/"+targetNumber+"/dyn/pos", val);
}

function dyn_keysrc(targetType, targetNumber, val) { 
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; }
	local.send("/"+targetType+"/"+targetNumber+"/dyn/keysrc", val);
}

function dyn_mix(targetType, targetNumber, val) {
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; }
	
	local.send("/"+targetType+"/"+targetNumber+"/dyn/mix", val);
}

function dyn_auto(targetType, targetNumber, val) {
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; }
	local.send("/"+targetType+"/"+targetNumber+"/dyn/auto", val);
}

function dyn_filter_on(targetType, targetNumber, val) {
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; }
	local.send("/"+targetType+"/"+targetNumber+"/dyn/filter/on", val);
}

function dyn_filter_type(targetType, targetNumber, val) { 
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; }
	local.send("/"+targetType+"/"+targetNumber+"/dyn/filter/type", val);
}

function dyn_filter_f(targetType, targetNumber, val) {
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; }
	local.send("/"+targetType+"/"+targetNumber+"/dyn/filter/f", val);
}

function comp_keysrc(targetType, targetNumber, val) { 
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; }
	local.send("/"+targetType+"/"+targetNumber+"/dyn/keysrc", val);
}



//  Insert

function insert_on(targetType, targetNumber, val) {
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; }
	local.send("/"+targetType+"/"+targetNumber+"/insert/on", val);
}

function insert_pos(targetType, targetNumber, val) {
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; }
	local.send("/"+targetType+"/"+targetNumber+"/insert/pos", val);
}

function insert_sel(targetType, targetNumber, val) {
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; }
	local.send("/"+targetType+"/"+targetNumber+"/insert/sel", val);
}


//  Channel

function mix_fader(targetType, targetNumber, val) {

	if (targetType == "dca") {targetNumber = targetNumber; } else
	{if (targetNumber < 10) {targetNumber = "0"+targetNumber; }}	
	if (targetType == "dca"){local.send("/"+targetType+"/"+targetNumber+"/fader", val);} else	
	{local.send("/"+targetType+"/"+targetNumber+"/mix/fader", val);}
}


function mix_on(targetType, targetNumber, val) {
	val=1-val ;
	if (targetType == "dca") {targetNumber = targetNumber; } else
	{if (targetNumber < 10) {targetNumber = "0"+targetNumber; }}
	if (targetType == "dca"){local.send("/"+targetType+"/"+targetNumber+"/on", val);} else
	{local.send("/"+targetType+"/"+targetNumber+"/mix/on", val);}
}


function mix_routing(targetType, targetNumber, val1, val2) {
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; }
	local.send("/"+targetType+"/"+targetNumber+"/mix/st", val1);
	local.send("/"+targetType+"/"+targetNumber+"/mix/mono", val2);
}

function mix_pan(targetType, targetNumber, val) {
	val = (val+50)/100  ;
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; }
	local.send("/"+targetType+"/"+targetNumber+"/mix/pan", val); 
}


function mix_send_level(targetType, targetNumber, mix, val) {
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; }
	if (mix < 10) {mix = "0"+mix; } 
	local.send("/"+targetType+"/"+targetNumber+"/mix/"+mix+"/level", val);  
}

function mix_mono_level(targetType, targetNumber, val, val2) {
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; }	
	local.send("/"+targetType+"/"+targetNumber+"/mix/mlevel", val);
	local.send("/"+targetType+"/"+targetNumber+"/mix/mono", val2);
}

function send_pan(targetType, targetNumber, mix, val) {
	
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; }
	if (mix < 10) {mix = "0"+mix; } 
	local.send("/"+targetType+"/"+targetNumber+"/mix/"+mix+"/pan", val);  
}

function send_type(targetType, targetNumber, mix, val) {
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; }
	if (mix < 10) {mix = "0"+mix; } 
	local.send("/"+targetType+"/"+targetNumber+"/mix/"+mix+"/type", val);  
}


//  Main-Channel

function lr_fader(targetType, val) { 
	
	local.send("/"+targetType+"/mix/fader", val);
}

function lr_on(targetType, val) {
	val=1-val ;
	local.send("/"+targetType+"/mix/on", val);
}

function lr_pan(targetType,val) {

	local.send("/"+targetType+"/mix/pan", val);
}

function lr_eq (val1,targetType, band, val2, val3, val4, val5) {
	
	val4=1-val4 ;
	local.send("/"+targetType+"/eq/on", val1);
	local.send("/"+targetType+"/eq/"+band+"/g", val2);
	local.send("/"+targetType+"/eq/"+band+"/f", val3);
	local.send("/"+targetType+"/eq/"+band+"/q", val4);
	local.send("/"+targetType+"/eq/"+band+"/type", val5);
}

function lr_eq_reset(targetType) {
	local.send("/"+targetType+"/eq/1/g", 0.5);
	local.send("/"+targetType+"/eq/2/g", 0.5);
	local.send("/"+targetType+"/eq/3/g", 0.5);
	local.send("/"+targetType+"/eq/4/g", 0.5);
	local.send("/"+targetType+"/eq/5/g", 0.5);
	local.send("/"+targetType+"/eq/6/g", 0.5);
	local.send("/"+targetType+"/eq/1/f", 0.2);
	local.send("/"+targetType+"/eq/2/f", 0.4);
	local.send("/"+targetType+"/eq/3/f", 0.5);
	local.send("/"+targetType+"/eq/4/f", 0.8);
	local.send("/"+targetType+"/eq/5/f", 0.85);
	local.send("/"+targetType+"/eq/6/f", 0.9);
}

function lr_eq_on(targetType, val) {
	local.send("/"+targetType+"/eq/on", val);
}

function lr_comp(targetType, val1, val2, val3, val4, val5, val6, val7, val8, val9, val10, val11, val12, val13 ) {
	local.send("/"+targetType+"/dyn/on", val1);
	local.send("/"+targetType+"/dyn/mode", val2);
	local.send("/"+targetType+"/dyn/det", val3);
	local.send("/"+targetType+"/dyn/env", val4);
	
	local.send("/"+targetType+"/dyn/thr", val5);
	local.send("/"+targetType+"/dyn/ratio", val6);
	local.send("/"+targetType+"/dyn/knee", val7);
	
	local.send("/"+targetType+"/dyn/mgain", val8);
	
	local.send("/"+targetType+"/dyn/attack", val9);
	local.send("/"+targetType+"/dyn/hold", val10);
	local.send("/"+targetType+"/dyn/release", val11);

	local.send("/"+targetType+"/dyn/mix", val12);
	local.send("/"+targetType+"/dyn/auto", val13);
	
}

function lr_comp_reset(targetType) {
	local.send("/"+targetType+"/dyn/on", 0);
	local.send("/"+targetType+"/dyn/mode", 0);
	local.send("/"+targetType+"/dyn/det", 0);
	local.send("/"+targetType+"/dyn/env", 1);
	local.send("/"+targetType+"/dyn/thr", 1.0);
	local.send("/"+targetType+"/dyn/ratio", 0);
	local.send("/"+targetType+"/dyn/knee", 1);
	local.send("/"+targetType+"/dyn/mgain", 0.0);
	local.send("/"+targetType+"/dyn/attack", 0.085);
	local.send("/"+targetType+"/dyn/hold", 0.545);
	local.send("/"+targetType+"/dyn/release", 0.51);
	local.send("/"+targetType+"/dyn/mix", 1.0);
	local.send("/"+targetType+"/dyn/auto", 0);
	
}

function lr_eq_f(targetType, band, val) { 
	local.send("/"+targetType+"/eq/"+band+"/f", val);
}

function lr_eq_g(targetType, band, val) {
	
	local.send("/"+targetType+"/eq/"+band+"/g", val);
}

function lr_eq_q(targetType, band, val) {
	val=1-val ;
	local.send("/"+targetType+"/eq/"+band+"/q", val);
}

function lr_eq_type(targetType, band, val) { 
	local.send("/"+targetType+"/eq/"+band+"/type", val);
}



function lr_dyn_filter_on(targetType, val) {	
	local.send("/"+targetType+"/dyn/filter/on", val);
}

function lr_dyn_filter_type(targetType, val) { 	
	local.send("/"+targetType+"/dyn/filter/type", val);
}

function lr_dyn_filter_f(targetType, val) {
	local.send("/"+targetType+"/dyn/filter/f", val);
}

function lr_comp_keysrc(targetType, val) { 
	local.send("/"+targetType+"/dyn/keysrc", val);
}

function lr_config_name(targetType, val) {
	local.send("/"+targetType+"/config/name", val);
}


function lr_config_color(targetType, val) {
	local.send("/"+targetType+"/config/color", val);
}


//  EQ

function full_ch_eq (targetType, targetNumber, val, val1, band, val2, val3, val4, val5) {
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; }
	
	val4=1-val4 ;
	local.send("/"+targetType+"/"+targetNumber+"/eq/on", val1);
	local.send("/"+targetType+"/"+targetNumber+"/eq/"+band+"/g", val2);
	local.send("/"+targetType+"/"+targetNumber+"/eq/"+band+"/f", val3);
	local.send("/"+targetType+"/"+targetNumber+"/eq/"+band+"/q", val4);
	local.send("/"+targetType+"/"+targetNumber+"/eq/"+band+"/type", val5);
}


function ch_eq_reset(targetType, targetNumber) {
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; }
	local.send("/"+targetType+"/"+targetNumber+"/eq/1/g", 0.5);
	local.send("/"+targetType+"/"+targetNumber+"/eq/2/g", 0.5);
	local.send("/"+targetType+"/"+targetNumber+"/eq/3/g", 0.5);
	local.send("/"+targetType+"/"+targetNumber+"/eq/4/g", 0.5);
	local.send("/"+targetType+"/"+targetNumber+"/eq/5/g", 0.5);
	local.send("/"+targetType+"/"+targetNumber+"/eq/6/g", 0.5);
	local.send("/"+targetType+"/"+targetNumber+"/eq/1/f", 0.2);
	local.send("/"+targetType+"/"+targetNumber+"/eq/2/f", 0.4);
	local.send("/"+targetType+"/"+targetNumber+"/eq/3/f", 0.5);
	local.send("/"+targetType+"/"+targetNumber+"/eq/4/f", 0.8);
	local.send("/"+targetType+"/"+targetNumber+"/eq/5/f", 0.85);
	local.send("/"+targetType+"/"+targetNumber+"/eq/6/f", 0.9);
}

function eq_on(targetType, targetNumber, val) {
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; }
	local.send("/"+targetType+"/"+targetNumber+"/eq/on", val);
}

function eq_type(targetType, targetNumber, band, val) { 
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; }
	local.send("/"+targetType+"/"+targetNumber+"/eq/"+band+"/type", val);
}

function eq_f(targetType, targetNumber, band, val) { 
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; }
	local.send("/"+targetType+"/"+targetNumber+"/eq/"+band+"/f", val);
}

function eq_g(targetType, targetNumber, band, val) { 
	Val = 1-val ;
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; }
	local.send("/"+targetType+"/"+targetNumber+"/eq/"+band+"/g", val);
}

function eq_q(targetType, targetNumber, band, val) {
	val = 1-val ;  
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; }
	local.send("/"+targetType+"/"+targetNumber+"/eq/"+band+"/q", val);
}

// Hi-Pass

function hipass (targetNumber, val1, val2, val3) {
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; }
	local.send("/ch/"+targetNumber+"/preamp/hpon", val1);
	local.send("/ch/"+targetNumber+"/preamp/hpf", val2);
	local.send("/cn/"+targetNumber+"/preamp/hpslope", val3);
}

function preamp_hpon(targetType, targetNumber, val) {
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; }
	local.send("/"+targetType+"/"+targetNumber+"/preamp/hpon", val);
}


function preamp_hpf(targetType, targetNumber, val) {
	
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; }
	local.send("/"+targetType+"/"+targetNumber+"/preamp/hpf", val);
}



//Player



function player_actions (val) {
	local.send("/-stat/tape/state", val);
}

function player_next (val) {
	local.send("/-prefs/playnext", val);
}

function player_mode (val) {
	local.send("/-prefs/usbifcmode", val);
}

//Divers

function Snap_load (val) {
	local.send("/-snap/load", val);
}

function Snap_save (val) {
	local.send("/-snap/save", val);
}

function mute_group (group, val) {
	local.send("/config/mute/"+group+"", val);
}

function solo_level (target, val) { 

	local.send("/config/"+target+"/level", val);

}




