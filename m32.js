// ========================== VARS ===========================
var myParameters = {};
var showMeters;
var UpdateAll;
var SelChanParams;
var ShowInfos;
var SyncAll;
var SyncNames ;
var SyncFaders ;
var SyncChannels ;
var ResetAll;
var AllowSend ;
var push ;
var tar;
var no ;
var link ;
var trig ;
var snap;
var numb = 0 ;
var doSync = false;
var syncStep = 0;

var meters4 = [
	"In 1" , "In 2" , "In 3" , "In 4" , "In 5" , "In 6" , "In 7" , "In 8" , "In 9" , "In 10" , "In 11" , "In 12" , "In 13" , "In 14" , "In 15" , "In 16",
	"In 17" , "In 18" , "In 19" , "In 20" , "In 21" , "In 22" , "In 23" , "In 24" , "In 25" , "In 26" , "In 27" , "In 28" , "In 29" , "In 30" , "In 31" , "In 32", 
	"AuxIn 1" , "AuxIn 2" , "AuxIn 3" , "AuxIn 4" , "AuxIn 5" , "AuxIn 6" , "AuxIn 7" , "AuxIn 8", 
	"Out 1" , "Out 2" , "Out 3" , "Out 4" , "Out 5" , "Out 6" , "Out 7" , "Out 8" , "Out 9" , "Out 10" , "Out 11" , "Out 12" , "Out 13" , "Out 14" , "Out 15" , "Out 16" ];
var chanNames = [
	"Channel 1" , "Channel 2" , "Channel 3" , "Channel 4" , "Channel 5" , "Channel 6" , "Channel 7" , "Channel 8", 
	"Channel 9" , "Channel 10" , "Channel 11" , "Channel 12" , "Channel 13" , "Channel 14" , "Channel 15" , "Channel 16", 
	"Channel 17" , "Channel 18" , "Channel 19" , "Channel 20" , "Channel 21" , "Channel 22" , "Channel 23" , "Channel 24", 
	"Channel 25" , "Channel 26" , "Channel 27" , "Channel 28" , "Channel 29" , "Channel 30" , "Channel 31" , "Channel 32", 
	"Bus 1" , "Bus 2" , "Bus 3" , "Bus 4" , "Bus 5" , "Bus 6" , "Bus 7" , "Bus 8", 
	"Bus 9" , "Bus 10" , "Bus 11" , "Bus 12" , "Bus 13" , "Bus 14" , "Bus 15" , "Bus 16" , "Main LR"];
var auxName = [
	"AuxIn 1" , "AuxIn 2" , "AuxIn 3" , "AuxIn 4" , "AuxIn 5" , "AuxIn 6" , "AuxIn 7" , "AuxIn 8",
	"Fx Return 1" , "Fx Return 2" , "Fx Return 3" , "Fx Return 4" , "Fx Return 5" , "Fx Return 6" , "Fx Return 7" , "Fx Return 8"];
var mixerNames = [
	"Channel 1" , "Channel 2" , "Channel 3" , "Channel 4" , "Channel 5" , "Channel 6" , "Channel 7" , "Channel 8" , 
	"Channel 9" , "Channel 10" , "Channel 11" , "Channel 12" , "Channel 13" , "Channel 14" , "Channel 15" , "Channel 16" ,
	"Channel 17" , "Channel 18" , "Channel 19" , "Channel 20" , "Channel 21" , "Channel 22" , "Channel 23" , "Channel 24", 
	"Channel 25" , "Channel 26" , "Channel 27" , "Channel 28" , "Channel 29" , "Channel 30" , "Channel 31" , "Channel 32",
	"AuxIn 1" , "AuxIn 2" , "AuxIn 3" , "AuxIn 4" , "AuxIn 5" , "AuxIn 6" , "AuxIn 7" , "AuxIn 8" , 
	"FX Return 1" , "FX Return 2" , "FX Return 3" , "FX Return 4" , "FX Return 5" , "FX Return 6" , "FX Return 7" , "FX Return 8" , 
	"Bus 1" , "Bus 2" , "Bus 3" , "Bus 4" , "Bus 5" , "Bus 6" , "Bus 7" , "Bus 8", 
	"Bus 9" , "Bus 10" , "Bus 11" , "Bus 12" , "Bus 13" , "Bus 14" , "Bus 15" , "Bus 16", 
	"Main LR" , "Main Mono" , "Matrix 1" , "Matrix 2" , "Matrix 3" , "Matrix 4" , "Matrix 5" , "Matrix 6", 
	"DCA 1" , "DCA 2" , "DCA 3" , "DCA 4" , "DCA 5" , "DCA 6" , "DCA 7" , "DCA 8"];
var mixerLinks = [
	"/ch/01/" , "/ch/02/" , "/ch/03/" , "/ch/04/" , "/ch/05/" , "/ch/06/" , "/ch/07/" , "/ch/08/" , 
	"/ch/09/" , "/ch/10/" , "/ch/11/" , "/ch/12/" , "/ch/13/" , "/ch/14/" , "/ch/15/" , "/ch/16/" ,
	"/ch/17/" , "/ch/18/" , "/ch/19/" , "/ch/20/" , "/ch/21/" , "/ch/22/" , "/ch/23/" , "/ch/24/", 
	"/ch/25/" , "/ch/26/" , "/ch/27/" , "/ch/28/" , "/ch/29/" , "/ch/30/" , "/ch/31/" , "/ch/32/",
	"/auxin/01/" , "/auxin/02/" , "/auxin/03/" , "/auxin/04/" , "/auxin/05/" , "/auxin/06/" , "/auxin/07/" , "/auxin/08" , 
	"/fxrtn/01/" , "/fxrtn/02/" , "/fxrtn/03/" , "/fxrtn/04/" , "/fxrtn/05/" , "/fxrtn/06/" , "/fxrtn/07/" , "/fxrtn/08" , 
	"/bus/01/" , "/bus/02/" , "/bus/03/" , "/bus/04/" , "/bus/05/" , "/bus/06/" , "/bus/07/" , "/bus/08/", 
	"/bus/08/" , "/bus/10/" , "/bus/11/" , "/bus/12/" , "/bus/13/" , "/bus/14/" , "/bus/15/" , "/bus/16/", 
	"/main/st/" , "/main/m/" , "/mtx/01/" , "/mtx/02/" , "/mtx/03/" , "/mtx/04/" , "/mtx/05/" , "/mtx/06/", 
	"/dca/1/" , "/dca/2/" , "/dca/3/" , "/dca/4/" , "/dca/5/" , "/dca/6/" , "/dca/7/" , "/dca/8/"];
	
var paramLink =["config/name" , "mix/fader" , "mix/pan" , "mix/on" , "eq/on" , "dyn/on" , "preamp/hpon" , "gate/on", "config/color"];

var dynRatio = {"1" : [ "0" , "1.1 : 1"], "2" : [ "1" , "1.3 : 1"], "3" : [ "2" , "1.5 : 1"], "4" : [ "3" , "2.0 : 1"], "5" : [ "4" , "2.5 : 1"],
	"6" : [ "5" , "3.0 : 1"], "7" : [ "6" , "4.0 : 1"], "8" : [ "7" , "5.0 : 1"], "9" : [ "8" , "7.0 : 1"], "10" : [ "9" , "10 : 1"],
	"11" : [ "10" , "20 : 1"], "12" : [ "11" , "100 : 1"]};	
	
var infoName = [
	"Device Status" , "Device IP" , "Device Name" , "Device Version" , "Server Name" , "Device Model" , "Software Version" , "Show Name" ,"Scene No" , "Scene Name" , "More" , "Info 1" , "Info 2", 
	"Info 3" , "Info 4" , "Info 5" , "Info 6" , "Info 7" , "Info 8"];
var channLabel = {
	"nam"	: ["Label" , "s" , "label"],
	"fad" : ["Fader" , "f" , "fader"],
	"pan" : ["Pan" , "fp" , "pan"],
	"mute" : ["Mute" , "b" , "mute"],
	"eq" : ["EQ" , "b" , "eq"],
	"dyn" : ["Dyn" , "b" , "dyn"],
	"locut" : ["LoCut" , "b" , "loCut"],
	"gate" : ["Gate" , "b" , "gate"]};
	
 var selChann = {
	"name"	:	["Label" , "s" , "label"],
	"mix" : ["Fader" , "s" , "fader"],
	"pan" : ["Pan" , "s" , "pan"],
	"invert" : ["Pol Invert" , "b" , "polInvert"],
	"mute" : ["Mute" , "b" , "mute"],
	"hpf.on" : ["LoCut on" , "b" , "loCutOn"],
	"eq.hpf.freq" : ["LoCut Freq" , "s" , "loCutFreq"],
//	"eq.hpf.slope" : ["LoCut Slope", "s","loCutSlope"],
	"eq.on" : ["Eq on" , "b" , "eqOn"],
	"eq.b1.type" : ["Type Eq 1" , "s" , "typeEq1"],
	"eq.b1.gain" : ["Gain Eq 1" , "s" , "gainEq1"],
	"eq.b1.freq" : ["Freq Eq 1" , "s" , "freqEq1"],	
	"eq.b1.q" : ["Q Eq 1" , "s" , "qEq1"],
	"eq.b2.type" : ["Type Eq 2" , "s" , "typeEq2"],
	"eq.b2.gain" : ["Gain Eq 2" , "s" , "gainEq2"],
	"eq.b2.freq" : ["Freq Eq 2" , "s" , "freqEq2"],	
	"eq.b2.q" : ["Q Eq 2" , "s" , "qEq2"],
	"eq.b3.type" : ["Type Eq 3" , "s" , "typeEq3"],
	"eq.b3.gain" : ["Gain Eq 3" , "s" , "gainEq3"],
	"eq.b3.freq" : ["Freq Eq 3" , "s" , "freqEq3"],
	"eq.b3.q" : ["Q Eq 3" , "s" , "qEq3"],
	"eq.b4.type" : ["Type Eq 4" , "s" , "typeEq4"],
	"eq.b4.gain" : ["Gain Eq 4" , "s" , "gainEq4"],
	"eq.b4.freq" : ["Freq Eq 4" , "s" , "freqEq4"],
	"eq.b4.q" : ["Q Eq 4" , "s" , "qEq4"],
	"eq.b5.type" : ["Type Eq 5" , "s" , "typeEq5"],
	"eq.b5.gain" : ["Gain Eq 5" , "s" , "gainEq5"],
	"eq.b5.freq" : ["Freq Eq 5" , "s" , "freqEq5"],
	"eq.b5.q" : ["Q Eq 5" , "s" , "qEq5"],
	"eq.b6.type" : ["Type Eq 6" , "s" , "typeEq6"],
	"eq.b6.gain" : ["Gain Eq 6" , "s" , "gainEq6"],
	"eq.b6.freq" : ["Freq Eq 6" , "s" , "freqEq6"],
	"eq.b6.q" : ["Q Eq 6" , "s" , "qEq6"],
	"dyn.on" : ["Dyn on" , "b" , "dynOn"],	
	"dyn.ratio" : ["Dyn Ratio" , "s" , "dynRatio"],
	"dyn.threshold" : ["Dyn Threshold" , "s" , "dynThreshold"],
	"dyn.outgain" : ["Dyn OutGain" , "s" , "dynOutGain"],
	"gate.on" : ["Gate on" , "b" , "gateOn"],
	"gate.thresh" : ["Gate Threshold" , "s" , "gateThreshold"],
	"dyn.range" : ["Gate Range" , "s" , "gateRange"],
	"dyn.mode" : ["Gate Mode" , "s" , "gateMode"] };	
	
var dynRatio = {"1" : [ "0" , "1.1 : 1"], "2" : [ "1" , "1.3 : 1"], "3" : [ "2" , "1.5 : 1"], "4" : [ "3" , "2.0 : 1"], "5" : [ "4" , "2.5 : 1"],
	"6" : [ "5" , "3.0 : 1"], "7" : [ "6" , "4.0 : 1"], "8" : [ "7" , "5.0 : 1"], "9" : [ "8" , "7.0 : 1"], "10" : [ "9" , "10 : 1"],
	"11" : [ "10" , "20 : 1"], "12" : [ "11" , "100 : 1"]};	

var gateMode = ["Exp2" , "Exp3" , "Exp4" , "Gate" , "Duck"]	;
	
var freqQ = {"1" : [ "0.0" , "10.0"], "2" : [ "0.014" , "9.5 "], "3" : [ "0.028" , "9.1 "], "4" : [ "0.042" , "8.6 "], "5" : [ "0.056" , "8.2 "],
	"6" : [ "0.070" , "7.8 "], "7" : [ "0.085" , "7.4 "], "8" : [ "0.099" , "7.1 "], "9" : [ "0.113" , "6.7 "], "10" : [ "0.127" , "6.4 "],
	"11" : [ "0.140" , "6.1 "], "12" : [ "0.155" , "5.8 "], "13" : [ "0.169" , "5.5 "], "14" : [ "0.183" , "5.3 "], "15" : [ "0.197" , "5.0 "],
	"16" : [ "0.211" , "4.8 "], "17" : [ "0.225" , "4.5 "], "18" : [ "0.239" , "4.3 "], "19" : [ "0.254" , "4.1 "], "20" : [ "0.268" , "3.9 "],
	"21" : [ "0.282" , "3.7 "], "22" : [ "0.296" , "3.5 "], "23" : [ "0.31" , "3.4 "], "24" : [ "0.324" , "3.2 "], "25" : [ "0.338 " , "3.1"],
	"26" : [ "0.3521" , "2.9 "], "27" : [ "0.3662" , "2.8 "], "28" : [ "0.3803" , "2.6 "], "29" : [ "0.3944" , "2.5 "], "30" : [ "0.409" , "2.4 "],
	"31" : [ "0.4225" , "2.3 "], "32" : [ "0.4366" , "2.2 "], "33" : [ "0.4507" , "2.1 "], "34" : [ "0.4648" , "2.0 "], "35" : [ "0.479" , "1.9 "],
	"36" : [ "0.493" , "1.8 "], "37" : [ "0.507" , "1.7 "], "38" : [ "0.521" , "1.6 "], "39" : [ "0.535" , "1.5 "], "40" : [ "0.563" , "1.4 "],
	"41" : [ "0.578" , "1.3 "], "42" : [ "0.592" , "1.3 "], "43" : [ "0.606" , "1.2 "], "44" : [ "0.62" , "1.1 "], "45" : [ "0.648" , "1.0 "],
	"46" : [ "0.676" , "0.9 "], "47" : [ "0.704" , "0.8 "], "48" : [ "0.747" , "0.7 "], "49" : [ "0.789" , "0.6 "], "50" : [ "0.831" , "0.5 "],
	"51" : [ "0.887" , "0.4 "], "52" : [ "0.958" , "0.3 "] };
			
var freqF = {"1" : [ "0.0000" , "20"], "2" : [ "0.0083" , "21"], "3" : [ "0.0167" , "22"], "4" : [ "0.0250" , "24"], "5" : [ "0.0333" , "25"], "6" : [ "0.0417" , "27"],
	"7" : [ "0.0500" , "28"], "8" : [ "0.0583" , "30"], "9" : [ "0.0667" , "32"], "10" : [ "0.0750" , "34"], "11" : [ "0.0833" , "36"], "12" : [ "0.0917" , "38"], 
	"13" : [ "0.1000" , "40"], "14" : [ "0.1083" , "42"], "15" : [ "0.1167" , "45"], "16" : [ "0.1250" , "47"], "17" : [ "0.1333" , "50"], "18" : [ "0.1417" , "53"], 
	"19" : [ "0.1500" , "56"], "20" : [ "0.1583" , "60"], "21" : [ "0.1667" , "63"], "22" : [ "0.1750" , "67"], "23" : [ "0.1833" , "71"], "24" : [ "0.1917" , "75"], 
	"25" : [ "0.2000" , "80"], "26" : [ "0.2083" , "84"], "27" : [ "0.2167" , "89"], "28" : [ "0.2250" , "95"], "29" : [ "0.2333" , "100"], "30" : [ "0.2417" , "106"], 
	"31" : [ "0.2500" , "113"], "32" : [ "0.2583" , "119"], "33" : [ "0.2667" , "126"], "34" : [ "0.2750" , "134"], "35" : [ "0.2833" , "142"], "36" : [ "0.2917" , "150"], 
	"37" : [ "0.3000" , "159"], "38" : [ "0.3083" , "168"], "39" : [ "0.3167" , "178"], "40" : [ "0.3250" , "189"], "41" : [ "0.3333" , "200"], "42" : [ "0.3417" , "212"], 
	"43" : [ "0.3500" , "224"], "44" : [ "0.3583" , "238"], "45" : [ "0.3667" , "252"], "46" : [ "0.3750" , "267"], "47" : [ "0.3833" , "283"], "48" : [ "0.3917" , "299"], 
	"49" : [ "0.4000" , "317"], "50" : [ "0.4083" , "336"], "51" : [ "0.4167" , "356"], "52" : [ "0.4250" , "377"], "53" : [ "0.4333" , "399"], "54" : [ "0.4417" , "423"], 
	"55" : [ "0.4500" , "448"], "56" : [ "0.4583 " , "474"], "57" : [ "0.4667" , "502"], "58" : [ "0.4750" , "532"], "59" : [ "0.4833" , "564"], "60" : [ "0.4917" , "597"], 
	"61" : [ "0.5000" , "633"], "62" : [ "0.5083" , "670"], "63" : [ "0.5167" , "710"], "64" : [ "0.5250" , "752"], "65" : [ "0.5333" , "796"], "66" : [ "0.5417" , "843"], 
	"67" : [ "0.5500" , "893"], "68" : [ "0.5583" , "946"], "69" : [ "0.5667" , "1000"], "70" : [ "0.5750" , "1060"], "71" : [ "0.5833" , "1120"], "72" : [ "0.5917" , "1190"], 
	"73" : [ "0.6000" , "1260"], "74" : [ "0.6083" , "1330"], "75" : [ "0.6167" , "1410"], "76" : [ "0.6250" , "1490"], "77" : [ "0.6333" , "1580"], "78" : [ "0.6417" , "1680"], 
	"79" : [ "0.6500" , "1780"], "80" : [ "0.6583" , "1880"], "81" : [ "0.6667" , "2000"], "82" : [ "0.6750" , "2110"], "83" : [ "0.6833" , "2240"], "84" : [ "0.6917 " , "2370"], 
	"85" : [ "0.7000" , "2510"], "86" : [ "0.7083" , "2660"], "87" : [ "0.7167" , "2820"], "88" : [ "0.7250" , "2990"], "89" : [ "0.7333" , "3160"], "90" : [ "0.7417" , "3350"], 
	"91" : [ "0.7500" , "3550"], "92" : [ "0.7583" , "3760"], "93" : [ "0.7667" , "3990"], "94" : [ "0.7750" , "4220"], "95" : [ "0.7833" , "4470"], "96" : [ "0.7917" , "4740"], 
	"97" : [ "0.8000" , "5020"], "98" : [ "0.8083" , "5320"], "99" : [ "0.8167" , "5630"], "100" : [ "0.8250" , "5970"], "101" : [ "0.8333" , "6320"], "102" : [ "0.8417" , "6690"], 
	"103" : [ "0.8500" , "7090"], "104" : [ "0.8583" , "7510"], "105" : [ "0.8667" , "7960"], "106" : [ "0.8750" , "8430"], "107" : [ "0.8833" , "8930"], "108" : [ "0.8917" , "9460"], 
	"109" : [ "0.9000" , "10020"], "110" : [ "0.9083" , "10610"], "111" : [ "0.9167" , "11240"], "112" : [ "0.9250" , "11910"], "113" : [ "0.9333" , "12610"], "114" : [ "0.9417" , "13360"], 
	"115" : [ "0.9500" , "14150"], "116" : [ "0.9583" , "15200"], "117" : [ "0.9667" , "16300"], "118" : [ "0.9750" , "17400"], "119" : [ "0.9833" , "18000"], "120" : [ "0.9917" , "20000"], 
	"121" : [ "1.0000" , "20000"] };

var loCutF = {"1" : [ "0.00" , "20"], "2" : [ "0.04" , "23"], "3" : [ "0.07" , "25"], "4" : [ "0.09" , "26"], "5" : [ "0.10" , "27"], "6" : [ "0.11" , "28"], "7" : [ "0.12" , "29"],
	"8" : [ "0.13" , "30"], "9" : [ "0.18" , "34"], "10" : [ "0.20" , "36"], "11" : [ "0.21" , "38"], "12" : [ "0.23" , "40"], "13" : [ "0.25" , "42"], "14" : [ "0.26" , "44"], 
	"15" : [ "0.27" , "45"], "16" : [ "0.28" , "46"], "17" : [ "0.29" , "48"], "18" : [ "0.30" , "49"], "19" : [ "0.31" , "51"], "20" : [ "0.32" , "52"], "21" : [ "0.33" , "54"], 
	"22" : [ "0.34" , "55"], "23" : [ "0.35" , "57"], "24" : [ "0.36" , "59"], "25" : [ "0.37" , "61"], "26" : [ "0.38" , "62"], "27" : [ "0.39" , "64"], "28" : [ "0.40" , "66"], 
	"29" : [ "0.41" , "68"], "30" : [ "0.42" , "70"], "31" : [ "0.43" , "73"], "32" : [ "0.44" , "75"], "33" : [ "0.45" , "77"], "34" : [ "0.46" , "79"], "35" : [ "0.47" , "82"], 
	"36" : [ "0.48" , "84"], "37" : [ "0.49" , "87"], "38" : [ "0.50" , "89"], "39" : [ "0.51" , "92"], "40" : [ "0.52" , "95"], "41" : [ "0.53" , "98"], "42" : [ "0.54" , "101"], 
	"43" : [ "0.55" , "104"], "44" : [ "0.56" , "107"], "45" : [ "0.57" , "110"], "46" : [ "0.58" , "114"], "47" : [ "0.59" , "117"], "48" : [ "0.60" , "121"], "49" : [ "0.61" , "124"], 
	"50" : [ "0.62" , "128"], "51" : [ "0.63" , "132"], "52" : [ "0.64" , "136"], "53" : [ "0.65" , "140"], "54" : [ "0.66" , "144"], "55" : [ "0.67" , "149"], "56" : [ "0.68" , "153"], 
	"57" : [ "0.69" , "158"], "58" : [ "0.70" , "163"], "59" : [ "0.71" , "168"], "60" : [ "0.72" , "173"], "61" : [ "0.73" , "178"], "62" : [ "0.74" , "184"], "63" : [ "0.75" , "189"], 
	"64" : [ "0.76" , "195"], "65" : [ "0.77" , "201"], "66" : [ "0.78" , "207"], "67" : [ "0.79" , "213"], "68" : [ "0.80" , "220"], "69" : [ "0.81" , "226"], "70" : [ "0.82" , "233"], 
	"71" : [ "0.83" , "240"], "72" : [ "0.84" , "248"], "73" : [ "0.85" , "255"], "74" : [ "0.86" , "263"], "75" : [ "0.87" , "271"], "76" : [ "0.88" , "279"], "77" : [ "0.89" , "288"], 
	"78" : [ "0.90" , "296"], "79" : [ "0.91" , "305"], "80" : [ "0.92" , "315"], "81" : [ "0.93" , "324"], "82" : [ "0.94" , "334"], "83" : [ "0.95" , "344"], "84" : [ "0.96" , "355"], 
	"85" : [ "0.97" , "366"], "86" : [ "0.98" , "377"], "87" : [ "0.99" , "388"], "88" : [ "1.00" , "400"] } ;

var eqFilter = {"1" : [ "0" , "LoCut"], "2" : [ "1" , "Lo-Shelf"], "3" : [ "2" , "PEQ"], "4" : [ "3" , "VEQ"],
				"5" : [ "4" , "Hi-Shelf"], "6" : [ "5" , "HiCut"] };	
		
// These messages can be displayed in the Info-Tab !!
var message = [
	"Any Personal Message" , "Message1" , "Message2" , "Informations" , "Other Infos 1" , "Any Personal Message" ];
	
// These messages will be displayed in the Alert-Tabs !!
var alerts = [
	 "Request Values from the Console !!" , "Change and Send Values here !" , "Be careful with this feature !!" , "Message2" , "Informations" , "Other Infos" ];


//===================== INITIAL FUNCTIONS ===========================
	
function init() {

//------------------ Insert Parameters ------------------------
		
//		FadersContainer = local.values.addContainer("Faders"); FadersContainer.setCollapsed(true);
//		ChannelsContainer = local.values.addContainer("Channels"); ChannelsContainer.setCollapsed(true);
//		Advice = local.parameters.addStringParameter("After Changing above" , "Alert" , "You must reload the session");

		showMeters = local.parameters.addBoolParameter("Show Meters" , "Request Meters Feddback from the Console" , false);
		SelChanParams = local.parameters.addBoolParameter("Show SelChan Values" , "", true);
//		ShowNames = local.parameters.addBoolParameter("Show Names" , "Show Names", true);
//		ShowFaders = local.parameters.addBoolParameter("Show Fader Values" , "Show Fader Values", true);
//		ShowChannels = local.parameters.addBoolParameter("Show Channel Values" , "Show Channel Values", true);
		ShowInfos = local.parameters.addBoolParameter("Show Infos" , "Show Infos Values", true);			
		AllowSend = local.parameters.addBoolParameter("Allow SendToConsole" , "Allow Send-to-Console", false);
// Sync Triggers
		RequestInfo = local.values.addStringParameter("Request Sync" , "Request Action" , "Request and Sync");
		SyncAll = local.values.addTrigger("Click to Sync all" , "Request all the Values from the Console !!" , false);
		SyncFaders = local.values.faders.addTrigger("Click to Sync Faders" , "Request all the Fader Values from the Console !!" , false);
		SyncNames = local.values.names.addTrigger("Click to Sync Names" , "Request the Names from the Console !!" , false);
		ResetGains = local.values.headamps.addTrigger("Reset Preamp Gains" , "Reset the Gain Values from the Console !!" , false);
		Alert = local.values.channels.addStringParameter("Advice" , "Alert" , "Request Sync First");
		SyncChannels = local.values.channels.addTrigger("Click to Sync Channels" , "Request the Channel Infos from the Console !!" , false);
		ResetAll = local.values.addTrigger("Click to Reset All" , "Reset all the Value-Fields !!" , false);
		SendInfo = local.values.channels.addStringParameter("Channel Info" , "Info" , "Sending Values here!");
		Sending = local.values.channels.addTrigger("Click to Send Updates" , "Send Updated Values to the Console" , false);		
		
		
		outP = local.parameters.oscOutputs ;
		outP.setCollapsed(true);

//====================CREATE CONTAINERS ==============================

//========>>>>>Headamps Container		
	preamp=local.values.headamps.addContainer("Local");
		preamp.setCollapsed(true);
		preamp.addTrigger("Sync Local" , "Request the Gain Values from the Console !!" , false);
		for (var n = 1; n < 33; n++) {		
			field = preamp.addFloatParameter("Preamp "+n, "", 0, 0, 1);
			field.setAttribute("readonly" ,true);}
	preamp=local.values.headamps.addContainer("AES50 A");
		preamp.setCollapsed(true);
		preamp.addTrigger("Sync A" , "Request the Gain Values from the Console !!" , false);	
		for (var n = 1; n < 49; n++) {		
			field = preamp.addFloatParameter("Preamp "+n, "", 0, 0, 1);
			field.setAttribute("readonly" ,true);}
	preamp=local.values.headamps.addContainer("AES50 B");
		preamp.setCollapsed(true);
		preamp.addTrigger("Sync B" , "Request the Gain Values from the Console !!" , false);	
		for (var n = 1; n < 49; n++) {		
			field = preamp.addFloatParameter("Preamp "+n, "", 0, 0, 1);
			field.setAttribute("readonly" ,true);}
			
//========>>>>>Names Container		
	names=local.values.names.addContainer("In Channels");
		names.setCollapsed(true);	
		for (var n = 0; n < 32; n++) {		
			names.addStringParameter(mixerNames[n], "" , ""); }
	names=local.values.names.addContainer("Aux FxReturn");
		names.setCollapsed(true);	
		for (var n = 32; n < 48; n++) {
			names.addStringParameter(mixerNames[n], "" , ""); }
	names=local.values.names.addContainer("Bus");
		names.setCollapsed(true);	
		for (var n = 48; n < 64; n++) {
			names.addStringParameter(mixerNames[n], "" , ""); }
	names=local.values.names.addContainer("Main Matrix DCA");
		names.setCollapsed(true);	
		for (var n = 64; n < mixerNames.length; n++) {
			names.addStringParameter(mixerNames[n], "" , ""); }
			
//========>>>>>Fader Container		
	faders=local.values.faders.addContainer("In Channels");
		faders.setCollapsed(true);	
		for (var n = 0; n < 32; n++) {		
			var p = faders.addFloatParameter(mixerNames[n], "", 0, 0, 1);
			p.setAttribute("readonly" ,true);}
	faders=local.values.faders.addContainer("Aux FxReturn");
		faders.setCollapsed(true);	
		for (var n = 32; n < 48; n++) {
			var p = faders.addFloatParameter(mixerNames[n], "", 0, 0, 1); 
			p.setAttribute("readonly" ,true);}
	faders=local.values.faders.addContainer("Bus");
		faders.setCollapsed(true);	
		for (var n = 48; n < 64; n++) {
			var p = faders.addFloatParameter(mixerNames[n], "", 0, 0, 1); 
			p.setAttribute("readonly" ,true);}
	faders=local.values.faders.addContainer("Main Matrix DCA");
		faders.setCollapsed(true);	
		for (var n = 64; n < mixerNames.length; n++) {
			var p = faders.addFloatParameter(mixerNames[n], "", 0, 0, 1); 
			p.setAttribute("readonly" ,true);}
		
//Channel Strips Container
					
		for (var i = 1; i<=32; i++) {
	strips = local.values.channels.addContainer("Channel"+(i));
		var chan = local.values.channels.addContainer("Channel"+(i));
		var col =chan.addColorParameter("ColorLabel", "", [0,0,0]);
		col.setAttribute("readonly" ,true);
		chan.addStringParameter("Name", "","");
		chan.addFloatParameter("Fader", "", 0);
		chan.addFloatParameter("Pan","", 0 , -50, 50);
		chan.addBoolParameter("Mute", "", false);
		chan.addBoolParameter("EQ", "", false);
		chan.addBoolParameter("Dyn", "", false);
		chan.addBoolParameter("LoCut", "", false);
		chan.addBoolParameter("Gate", "", false);
		chan.addEnumParameter("Color", "Color", "Black" , 0, "Red" , 1, "Green" , 2, "Yellow" , 3, "Blue" , 4, "Magenta" , 5, "Cyan" , 6, "White" , 7, "Black-inv" , 8, "Red-inv" , 9, "Green-inv" , 10, "Yellow-inv" , 11, "Blue-inv" , 12, "Magenta-inv" , 13, "Cyan-inv" , 14, "White-inv" , 15);
		chan.addBoolParameter("ColorInvert", "", false);
		chan.setCollapsed(true);}
		
		for (var i = 1; i<=16; i++) {
	strips = local.values.channels.addContainer("Bus"+(i));
		var chan = local.values.channels.addContainer("Bus"+(i));
		var col =chan.addColorParameter("ColorLabel", "", [0,0,0]);
		col.setAttribute("readonly" ,true);
		chan.addStringParameter("Name", "","");
		chan.addFloatParameter("Fader", "", 0);
		chan.addFloatParameter("Pan","", 0 , -50, 50);
		chan.addBoolParameter("Mute", "", false);
		chan.addBoolParameter("EQ", "", false);
		chan.addBoolParameter("Dyn", "", false);
		chan.addEnumParameter("Color", "Color", "Black" , 0, "Red" , 1, "Green" , 2, "Yellow" , 3, "Blue" , 4, "Magenta" , 5, "Cyan" , 6, "White" , 7, "Black-inv" , 8, "Red-inv" , 9, "Green-inv" , 10, "Yellow-inv" , 11, "Blue-inv" , 12, "Magenta-inv" , 13, "Cyan-inv" , 14, "White-inv" , 15);
		chan.addBoolParameter("ColorInvert", "", false);
		chan.setCollapsed(true);}
		
	strips = local.values.channels.addContainer("Main LR");
		var chan = local.values.channels.addContainer("Main LR");
		var col =chan.addColorParameter("ColorLabel", "", [0,0,0]);
		col.setAttribute("readonly" ,true);
		chan.addStringParameter("Name", "","");
		chan.addFloatParameter("Fader", "", 0);
		chan.addFloatParameter("Pan","", 0, -50, 50);
		chan.addBoolParameter("Mute", "", false);
		chan.addBoolParameter("EQ", "", false);
		chan.addBoolParameter("Dyn", "", false);
		chan.addEnumParameter("Color", "Color", "Black" , 0, "Red" , 1, "Green" , 2, "Yellow" , 3, "Blue" , 4, "Magenta" , 5, "Cyan" , 6, "White" , 7, "Black-inv" , 8, "Red-inv" , 9, "Green-inv" , 10, "Yellow-inv" , 11, "Blue-inv" , 12, "Magenta-inv" , 13, "Cyan-inv" , 14, "White-inv" , 15);
		chan.addBoolParameter("ColorInvert", "", false);
		chan.setCollapsed(true); 
		
//Selected Channel Container			
		
		selchan = local.values.selectedChannel;
		selchan.setCollapsed(true);
		selchan.addEnumParameter("Select Target", "Select the Target", "Input","ch", "AuxIn","auxin","FxReturn","fxrtn", "Bus","bus","Matrix","mtx","Main LR","main/st","Main Mono","main/m") ;
		selchan.addIntParameter("Select No","Select the Channel Number",1,1,32) ;	
		selchan.addTrigger("Click to Sync", "" , false);
		selchan.addTrigger("Click to Reset Sel Chan", "" , false);
		var f = selchan.addColorParameter("ColorLabel", "", [0,0,0]);
		f.setAttribute("readonly" ,true);
		var champs = util.getObjectProperties(selChann);
		for (var n = 0; n < champs.length; n++) {
			if (selChann[champs[n]][1] == "f") {
			selchan.addFloatParameter(selChann[champs[n]][0], "", 0); } 
			else if (selChann[champs[n]][1] == "b") {
			selchan.addBoolParameter(selChann[champs[n]][0], "", false); }
			else if (selChann[champs[n]][1] == "in") {
			selchan.addIntParameter(selChann[champs[n]][0], "", 0); } 
			else if (selChann[champs[n]][1] == "s") {
			selchan.addStringParameter(selChann[champs[n]][0], "", ""); } }
			 		

//Meters Container		
		meters=local.values.addContainer("Meters");
		meters.setCollapsed(true);
			for (var i = 0; i < meters4.length; i++) {
			var n = meters4[i];
			var p = local.values.getChild("Meters").addFloatParameter(n,n,-60,-60,-1); 
			p.setAttribute("readonly" ,true);} 		
}


	infos=local.values.addContainer("Infos");
		infos.setCollapsed(true);
		infos.addTrigger("Get Infos", "" , false);  	
		for (var n = 0; n < infoName.length; n++) {
			infos.addStringParameter(infoName[n], "", ""); } 

//=============== KEEP ALIVE =============================

function update(deltaTime) {
		var now = util.getTime();
		if (now > TSSendAlive) {
		TSSendAlive = now + 8;
		keepAlive(); }
		
		//if we need to do a sync we need to request the data in chunks so that the mixer has time to answer
		if (doSync){ 
			script.setUpdateRate(4); //speedup the update rate to 4 requests per second
			if(syncStep == 0){//update channels 1-6
				for(var i=1; i <=12; i++) {
					if (i<10){n="0"+i;} else{n=i;}
					local.send("/ch/"+n+"/"+paramLink[0]);
					local.send("/ch/"+n+"/"+paramLink[1]);
					local.send("/ch/"+n+"/"+paramLink[2]);
					local.send("/ch/"+n+"/"+paramLink[3]);
					local.send("/ch/"+n+"/"+paramLink[4]);
					local.send("/ch/"+n+"/"+paramLink[5]);
					local.send("/ch/"+n+"/"+paramLink[6]);
					local.send("/ch/"+n+"/"+paramLink[7]);
					local.send("/ch/"+n+"/"+paramLink[8]);
				}
				syncStep++;
			}else if(syncStep == 1){//update channels 7-12
				for(var i=13; i <=24; i++) {
					if (i<10){n="0"+i;} else{n=i;}
					local.send("/ch/"+n+"/"+paramLink[0]);
					local.send("/ch/"+n+"/"+paramLink[1]);
					local.send("/ch/"+n+"/"+paramLink[2]);
					local.send("/ch/"+n+"/"+paramLink[3]);
					local.send("/ch/"+n+"/"+paramLink[4]);
					local.send("/ch/"+n+"/"+paramLink[5]);
					local.send("/ch/"+n+"/"+paramLink[6]);
					local.send("/ch/"+n+"/"+paramLink[7]);
					local.send("/ch/"+n+"/"+paramLink[8]);
				}
				syncStep++;
			}else if(syncStep == 2){//update channels 13-16
				for(var i=25; i <=32; i++) {
					if (i<10){n="0"+i;} else{n=i;}
					local.send("/ch/"+n+"/"+paramLink[0]);
					local.send("/ch/"+n+"/"+paramLink[1]);
					local.send("/ch/"+n+"/"+paramLink[2]);
					local.send("/ch/"+n+"/"+paramLink[3]);
					local.send("/ch/"+n+"/"+paramLink[4]);
					local.send("/ch/"+n+"/"+paramLink[5]);
					local.send("/ch/"+n+"/"+paramLink[6]);
					local.send("/ch/"+n+"/"+paramLink[7]);
					local.send("/ch/"+n+"/"+paramLink[8]);
				}
				syncStep++;
			}else if(syncStep==3){ //update Buses
				for(var i=1; i <=16; i++) {
				if (i<10) {n="0"+i;} else {n=i;}
					local.send("/bus/"+n+"/"+paramLink[0]);
					local.send("/bus/"+n+"/"+paramLink[1]);
					local.send("/bus/"+n+"/"+paramLink[2]);
					local.send("/bus/"+n+"/"+paramLink[3]);
					local.send("/bus/"+n+"/"+paramLink[4]);
					local.send("/bus/"+n+"/"+paramLink[5]);
					local.send("/bus/"+n+"/"+paramLink[8]);
				}
				syncStep++;
			}else if(syncStep==4){ //update RX-Rtn and DCA
				for(var i=1; i <=8; i++) {
					n="0"+i;
					local.send("/auxin/"+n+"/config/name");
					local.send("/auxin/"+n+"/config/color");
					local.send("/auxin/"+n+"/mix/fader");
					local.send("/fxrtn/"+n+"/config/name");
					local.send("/fxrtn/"+n+"/config/color");
					local.send("/fxrtn/"+n+"/mix/fader");
					local.send("/mtx/"+n+"/config/name");
					local.send("/mtx/"+n+"/config/color");
					local.send("/mtx/"+n+"/mix/fader");
					local.send("/dca/"+n+"/config/name");
					local.send("/dca/"+n+"/config/color");
					local.send("/dca/"+n+"/fader");
				}
				syncStep++;
			}else if(syncStep==5){ //update Main LR
					local.send("/main/st/config/name");
					local.send("/main/st/config/color");
					local.send("/main/st/mix/fader");
					local.send("/main/st/mix/pan");
					local.send("/main/st/mix/on");
					local.send("/main/st/eq/on");
					local.send("/main/st/dyn/on");
					local.send("/main/m/config/name");
					local.send("/main/m/config/color");
					local.send("/main/m/mix/fader");
					local.send("/main/m/mix/pan");
					local.send("/main/m/mix/on");
					local.send("/main/m/eq/on");
					local.send("/main/m/dyn/on");	
				syncStep++;
			}else{ //if no step instructions are found -> reduce update rate and disable sync
				script.setUpdateRate(1);
				doSync=false;
				syncStep=0; //reset syncStep
			}
		}
}

function keepAlive() {
		local.send("/xremote");
		if (showMeters.get()) {
		local.send("/meters", "/meters/4"); }	
		
}

//========================================================================
//							 VALUE CHANGE EVENTS
//========================================================================


function moduleValueChanged(value) { 

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//					RESETS
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<	
//reset Names
	if (value.name == "clickToResetNames"){
		for (var n = 0; n < mixerNames.length; n++) {
		if (n<32) {var cont = "inChannels" ;}
		if (n>=32 && n<48) {var cont = "auxFxReturn" ;}
		if (n>=48 && n<64) {var cont = "bus" ;}
		if (n>=64) {var cont = "mainMatrixDCA" ;}
		child = mixerNames[n].split(" ").join("");
		local.values.names.getChild(cont).getChild(child).set("");  } }

//reset Faders
	if (value.name == "clickToResetFaders"){
		for (var n = 0; n < mixerNames.length; n++) {
		if (n<32) {var cont = "inChannels" ;}
		if (n>=32 && n<48) {var cont = "auxFxReturn" ;}
		if (n>=48 && n<64) {var cont = "bus" ;}
		if (n>=64) {var cont = "mainMatrixDCA" ;}
		child = mixerNames[n].split(" ").join("");
		local.values.faders.getChild(cont).getChild(child).set(0);  } }

// >>>>>>>>>>>>>>> RESET ALL <<<<<<<<<<<<<
	if (value.name == "clickToResetAll"){	
//reset Names
		for (var n = 0; n < mixerNames.length; n++) {
		if (n<32) {var cont = "inChannels" ;}
		if (n>=32 && n<48) {var cont = "auxFxReturn" ;}
		if (n>=48 && n<64) {var cont = "bus" ;}
		if (n>=64) {var cont = "mainMatrixDCA" ;}
		child = mixerNames[n].split(" ").join("");
		local.values.names.getChild(cont).getChild(child).set("");  }
//reset Faders
		for (var n = 0; n < mixerNames.length; n++) {
		if (n<32) {var cont = "inChannels" ;}
		if (n>=32 && n<48) {var cont = "auxFxReturn" ;}
		if (n>=48 && n<64) {var cont = "bus" ;}
		if (n>=64) {var cont = "mainMatrixDCA" ;}
		child = mixerNames[n].split(" ").join("");
		local.values.faders.getChild(cont).getChild(child).set(0);  }
//reset Channels		
		for (var n = 0; n < 49; n++) {
		child = chanNames[n].split(" ").join("");
		local.values.channels.getChild(child).getChild('ColorLabel').set([0,0,0]);
		local.values.channels.getChild(child).getChild('Color').set(0);
		local.values.channels.getChild(child).getChild('ColorInvert').set(0);
		local.values.channels.getChild(child).getChild('Name').set("");
		local.values.channels.getChild(child).getChild('Fader').set(0);
		local.values.channels.getChild(child).getChild('Pan').set(0);
		local.values.channels.getChild(child).getChild('Mute').set(0);
		local.values.channels.getChild(child).getChild('EQ').set(0);
		local.values.channels.getChild(child).getChild('Dyn').set(0); }
		for (var n = 0; n < 32; n++) {
		child = chanNames[n].split(" ").join("");
		local.values.channels.getChild(child).getChild('LoCut').set(0);
		local.values.channels.getChild(child).getChild('Gate').set(0); }
				
	}
// <<<<<<<<<<<RESET ALL FIN >>>>>>>>>>>>>>>>>>> 

// RESET GAINS
		if (value.name == "resetPreampGains"){
		for (var n = 0; n < 32; n++) {
		var p = n + 1 ;
		var targ = "Preamp"+p ;
		local.values.headamps.local.getChild(targ).set(0); }
		for (var n = 0; n < 48; n++) {
		var p = n + 1 ;
		var targ = "Preamp"+p ;
		local.values.headamps.aes50A.getChild(targ).set(0); 
		local.values.headamps.aes50B.getChild(targ).set(0); }	 
		}			

// >>>>>>>>>>>RESET SELECTED CHANNEL <<<<<<<<<<<<<<<<<<<<<<<
//Selected Channel Reset All
		if (value.name == "resetValueFields"){
		var champs = util.getObjectProperties(selChann);
		for (var n = 0; n < champs.length; n++) {
		var item = selChann[champs[n]][2] ;
		var par = selChann[champs[n]][1];
		if (par == "s") {
			local.values.selectedChannel.getChild(item).set("");}
		else if (par == "b") {
			local.values.selectedChannel.getChild(item).set(0);}  }				
		}		

// >>>>>>>>>>>>>>>>>> REQUEST DATA FOR SELECTED CHANNEL <<<<<<<<<<<<<<<<<<<<<<<

//Selected Channel =======>>>>
	if (value.name == "clickToSync"){ 
		var tar=local.values.selectedChannel.selectTarget.get();
		var no=local.values.selectedChannel.selectNo.get();
		if(no < 10){no = "0"+no ;} else {no=no ;}
		if (tar=="main/st" || tar=="main/m") {var link = tar ;}
		else {link = tar+"/"+no ;}
			local.send("/"+link+"/config/color");		
			local.send("/"+link+"/config/name");
			local.send("/"+link+"/mix/fader");
			local.send("/"+link+"/mix/pan");
			local.send("/"+link+"/mix/on");
			local.send("/"+link+"/eq/on");
			local.send("/"+link+"/dyn/on");
			local.send("/"+link+"/dyn/ratio");
			local.send("/"+link+"/dyn/thr");
			local.send("/"+link+"/dyn/mgain");
			local.send("/"+link+"/gate/thr");
			local.send("/"+link+"/gate/range");
			local.send("/"+link+"/gate/mode");
			local.send("/"+link+"/gate/on");
			local.send("/"+link+"/preamp/hpon");
			local.send("/"+link+"/preamp/invert");
			local.send("/"+link+"/preamp/hpf");
			local.send("/"+link+"/preamp/hpslope");
		if (tar=="main/st" || tar=="main/m" || tar=="main/m" || tar=="bus" || tar=="mtx") {var c = 6 ;} else {c=4;}
		for(var i=1; i <=c; i++) {
			local.send("/"+link+"/eq/"+i+"/f");
			local.send("/"+link+"/eq/"+i+"/g");
			local.send("/"+link+"/eq/"+i+"/q");
			local.send("/"+link+"/eq/"+i+"/type"); }		
		}		
//Selected Channel Reset All
		if (value.name == "clickToResetSelChan"){
		var champs = util.getObjectProperties(selChann);
		for (var n = 0; n < champs.length; n++) {
		var item = selChann[champs[n]][2] ;
		var par = selChann[champs[n]][1];
		if (par == "s") {
			local.values.selectedChannel.getChild(item).set("");}
		else if (par == "b") {
			local.values.selectedChannel.getChild(item).set(0);}  }
			local.values.selectedChannel.colorLabel.set([0,0,0]); 	 
		}	
		

//Selected Channel FIN !! <<<<<===========

// =================== SUBSCRIBE NAMES ========================

 	if (value.name=="clickToSyncNames"){
 	for (var n = 0; n < mixerLinks.length; n++) {
		var addr1 = mixerLinks[n];
		var addr2 = paramLink[i];
		var link = paramLink[i];
		local.send(addr1 + paramLink[0] ); }  }
		
// =================== SUBSCRIBE Faders ========================

 	if (value.name=="clickToSyncFaders"){
 	for (var n = 0; n < mixerLinks.length; n++) {
		var addr1 = mixerLinks[n];
		var addr2 = paramLink[i];
		var link = paramLink[i];
		local.send(addr1 + paramLink[1] ); }  }
		
// =================== SUBSCRIBE Gains ========================

	if (value.name=="syncLocal"){
 	for (var n = 0; n < 32; n++) {
 	if (n<10) {var ch = "00"+n ;} else { ch="0"+n ;}
		local.send("/headamp/"+ch+"/gain" ); }  }
		
	if (value.name=="syncA"){
 	for (var n = 32; n < 80; n++) {
 	var ch = "0"+n ;
		local.send("/headamp/"+ch+"/gain" ); }  }
		
	if (value.name=="syncB"){
 	for (var n = 80; n < 128; n++) {
 	if (n<100) {var ch = "0"+n ;} else { ch=n ;}
		local.send("/headamp/"+ch+"/gain" ); }  }
		
// =================== GET INFOS ========================

	if (value.name=="getInfos"){ 
 		local.send("/info");
		local.send("/status");
		local.send("/showdump");
		local.send("/-show/showfile/show/name")	;
		local.send("/-show/showfile/scene/name/current");
		local.send("/-show/prepos/current");
// you can customize and choose how many and what messages you wann show up in the "Infos-Fiels"
//		local.values.infos.info1.set("text info1");
		var text = message[0];
		local.values.infos.info1.set(text); 
		var text = message[1];
		local.values.infos.info2.set(text);  
}


// =================== SYNC SUBSCRIBE ALL ========================

 	if (value.name=="clickToSyncAll" || value.name=="clickToSyncChannels"){ 
 		
//enable staggered sync
		doSync = true;
	
// set Advices and Alerts
 		var alert = alerts[0];
 		local.values.requestSync.set(alert) ;
 		var alert = alerts[1];
 		local.values.channels.channelInfo.set(alert) ;
 		var alert = alerts[2];
 		local.values.channels.advice.set(alert) ;
	

}	

//---Sending Values to the Console -----------
		
	if (value.name == "clickToSendUpdates"){
		for(var i=1; i <=32; i++) {
		var val = local.values.channels.getChild('Channel'+i).getChild('Name').get();
 		if (i<10){n="0"+i;} else{n=i;}
		local.send("/ch/"+n+"/config/name", val);}
		
		for(var i=1; i <=32; i++) {
		var d = local.values.channels.getChild('Channel'+i).getChild('Fader').get();
		if (d <= -60)  {var f = (d + 90) / 480;}
		else if (d <= -30) {var f = (d + 70) / 160;}
		else if (d <= -10) {var f = (d + 50) / 80;}
		else if (d <= 10) {var f = (d + 30) / 40;}
		if (i<10){n="0"+i;} else{n=i;}
		local.send("/ch/"+n+"/mix/fader", f);}
		
		for(var i=1; i <=16; i++) {
		var d = local.values.channels.getChild('Bus'+i).getChild('Fader').get();
		if (d <= -60)  {var f = (d + 90) / 480;}
		else if (d <= -30) {var f = (d + 70) / 160;}
		else if (d <= -10) {var f = (d + 50) / 80;}
		else if (d <= 10) {var f = (d + 30) / 40;}
		if (i<10){n="0"+i;} else{n=i;}
		local.send("/bus/"+n+"/mix/fader", f);}
		
		for(var i=1; i <=32; i++) {
		var val = local.values.channels.getChild('Channel'+i).getChild('Pan').get();
		val=(val+50)/100 ;
		if (i<10){n="0"+i;} else{n=i;}
		local.send("/ch/"+n+"/mix/pan", val);}
		
		for(var i=1; i <=32; i++) {
		var val = local.values.channels.getChild('Channel'+i).getChild('Mute').get();
		val=1-val ;
		if (i<10){n="0"+i;} else{n=i;}
		local.send("/ch/"+n+"/mix/on", val);}
		
		for(var i=1; i <=16; i++) {
		var val = local.values.channels.getChild('Bus'+i).getChild('Mute').get();
		val=1-val ;
		if (i<10){n="0"+i;} else{n=i;}
		local.send("/bus/"+n+"/mix/on", val);}
		
		for(var i=1; i <=32; i++) {
		var val = local.values.channels.getChild('Channel'+i).getChild('EQ').get();
		if (i<10){n="0"+i;} else{n=i;}
		local.send("/ch/"+n+"/eq/on", val);}
		
		for(var i=1; i <=16; i++) {
		var val = local.values.channels.getChild('Bus'+i).getChild('EQ').get();
		if (i<10){n="0"+i;} else{n=i;}
		local.send("/bus/"+n+"/eq/on", val);}
		
		for(var i=1; i <=32; i++) {
		var val = local.values.channels.getChild('Channel'+i).getChild('LoCut').get();
		if (i<10){n="0"+i;} else{n=i;}
		local.send("/ch/"+n+"/preamp/hpon", val);}
		
		for(var i=1; i <=32; i++) {
		var val = local.values.channels.getChild('Channel'+i).getChild('Dyn').get();
		if (i<10){n="0"+i;} else{n=i;}
		local.send("/ch/"+n+"/dyn/on", val);}
		
		for(var i=1; i <=-16; i++) {
		var val = local.values.channels.getChild('bus'+i).getChild('Dyn').get();
		if (i<10){n="0"+i;} else{n=i;}
		local.send("/bus/"+n+"/dyn/on", val);}
		
		for(var i=1; i <=32; i++) {
		var val = local.values.channels.getChild('Channel'+i).getChild('Gate').get();
		if (i<10){n="0"+i;} else{n=i;}
		local.send("/ch/"+n+"/gate/on", val);}	
		} 		 			 
}

//============================================================
//							OSC EVENTS
//============================================================

function oscEvent(address, args) {

//Infos------->>
//	if (ShowInfos.get()) {
		if (address == "/status") {
		for(var i=0; i <3; i++) {
		var n=i;
		var line = infoName[n].split(" ").join("") ;
		local.values.infos.getChild(line).set(args[i]);} }
		
		if (address== "/info"){ 
		for(var i=0; i <=3; i++) {
		var n=i+3 ; 
		var line = infoName[n].split(" ").join("") ;
		local.values.infos.getChild(line).set(args[i]);}  }	
		
		if (address =="/-show/showfile/show/name"){
		var child = infoName[7].split(" ").join("") ;
		local.values.infos.getChild(child).set(args[0]);}
		
		if (address =="/-show/prepos/current"){
		var numb = args[0];
		if (numb< 10) {numb = "0"+numb ;}
		if (numb< 100) {numb = "0"+numb ;} 
		local.send ("/-show/showfile/scene/"+numb) ;
		local.values.infos.sceneNo.set(numb); }
		
//		if (num< 10) {num = "0"+num ;}
//		if (num< 100) {num = "0"+num ;} 
//		nu = "zed" ;
//		local.values.infos.sceneName.set(nu); 

//============================ VALUES INSERT HEADAMP GAINS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

				
		for (var n = 0; n < 32; n++) {
		if (n<10) {var ch = "00"+n ;} else {ch = "0"+n ;}
		if (address == "/headamp/"+ch+"/gain"){
		var p = n + 1 ;
		var targ = "Preamp"+p ;
		local.values.headamps.local.getChild(targ).set(args[0]); } } 
		
		for (var n = 32; n < 80; n++) {
		var ch = "0"+n ;
		if (address == "/headamp/"+ch+"/gain"){
		var p = n -31 ;
		var targ = "Preamp"+p ;
		local.values.headamps.aes50A.getChild(targ).set(args[0]); } } 
		
		for (var n = 80; n < 128; n++) {
		if (n<100) {var ch = "0"+n ;} else { ch = n;}
		if (address == "/headamp/"+ch+"/gain"){
		var p = n -79 ;
		var targ = "Preamp"+p ;
		local.values.headamps.aes50B.getChild(targ).set(args[0]); } } 		
				
//============================ VALUES INSERT NAMES >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

				
		for (var n = 0; n < mixerNames.length; n++) {
		if (n<32) {var cont = "inChannels" ;}
		if (n>=32 && n<48) {var cont = "auxFxReturn" ;}
		if (n>=48 && n<64) {var cont = "bus" ;}
		if (n>=64) {var cont = "mainMatrixDCA" ;}
		var addr1 = mixerLinks[n];
		if (address == addr1 + paramLink[0]) {
		var child = mixerNames[n].split(" ").join("") ;
		local.values.names.getChild(cont).getChild(child).set(args[0]); } } 		
		
				
//============================ VALUES INSERT FADERS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	
		for (var n = 0; n < mixerNames.length; n++) {
		var link = paramLink[1];
		if (n<32) {var cont = "inChannels" ;}
		if (n>=32 && n<48) {var cont = "auxFxReturn" ;}
		if (n>=48 && n<64) {var cont = "bus" ;}
		if (n>=64) {var cont = "mainMatrixDCA";
		if (n>=72) { link = "fader";}}		
		var addr1 = mixerLinks[n];
		if (address == addr1 + link) {
		var child = mixerNames[n].split(" ").join("") ;
		local.values.faders.getChild(cont).getChild(child).set(args[0]); } } 	

//============================ VALUES INSERT CHANNELS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Names	
		for(var n=0; n <32; n++) {
		var addr1 = mixerLinks[n];
		var child=chanNames[n].split(" ").join("") ;
		if (address == addr1+"config/name") {
		local.values.channels.getChild(child).getChild('Name').set(args[0]); } }
		for(var n=32; n <48; n++) {
		var m =n+16 ;
		var addr1 = mixerLinks[m];
		var child=chanNames[n].split(" ").join("") ;
		if (address == addr1+"config/name") {
		local.values.channels.getChild(child).getChild('Name').set(args[0]); } }
		if (address == "/main/st/config/name") {
		local.values.channels.mainLR.getChild('Name').set(args[0]); }
		
//Colors	
		for(var n=0; n <32; n++) {
		var addr1 = mixerLinks[n];
		var child=chanNames[n].split(" ").join("") ;
		if (address == addr1+"config/color") {
		var i = n+1 ;
		setColor(local.values.channels.getChild('Channel'+i),args[0]);
		setCol(local.values.channels.getChild('Channel'+i),args[0]);} }
		
		for(var n=32; n <48; n++) {
		var m =n+ 16 ;
		var addr1 = mixerLinks[m];
		var child=chanNames[n].split(" ").join("") ;
		if (address == addr1+"config/color") {
		var i = n- 31 ;
		setColor(local.values.channels.getChild('Bus'+i),args[0]);
		setCol(local.values.channels.getChild('Bus'+i),args[0]);} }
		
		if (address == "/main/st/config/color") {
		setColor(local.values.channels.mainLR ,args[0]);
		setCol(local.values.channels.mainLR , args[0]);}
	
// Faders
		for(var n=0; n <32; n++) {
		var addr1 = mixerLinks[n];
		var child=chanNames[n].split(" ").join("") ;
		if (address == addr1+"mix/fader") {
		var f =args[0];
		db = fader_db(f);	
		local.values.channels.getChild(child).getChild('Fader').set(db); } }
		for(var n=32; n <48; n++) {
		var m =n+16 ;
		var addr1 = mixerLinks[m];
		var child=chanNames[n].split(" ").join("") ;
		if (address == addr1+"mix/fader") {
		var f =args[0];
		db = fader_db(f);	
		local.values.channels.getChild(child).getChild('Fader').set(db); } }
		if (address == "/main/st/mix/fader") {
		var f =args[0];
		db = fader_db(f);
		local.values.channels.mainLR.getChild('Fader').set(db); }
//Pan	
		for(var n=0; n <32; n++) {
		var addr1 = mixerLinks[n];
		var child=chanNames[n].split(" ").join("") ;
		if (address == addr1+"mix/pan") {
		var pan = Math.round((args[0]*100-50));
		local.values.channels.getChild(child).getChild('Pan').set(pan); } }
					
//Mute					
		for(var i=1; i <=32; i++) {
		if (i<10){n="0"+i;} else{n=i;}
		if (address == "/ch/"+n+"/mix/on") {
		var on = 1-(args[0]);
		local.values.channels.getChild('Channel'+i).getChild('Mute').set(on); } }
		if (address == "/main/st/mix/on") {
		var on = 1-(args[0]);
		local.values.channels.mainLR.mute.set(1-args[0]);}
		for(var i=1; i <=16; i++) {
		if (i<10){n="0"+i;} else{n=i;}
		if (address == "/bus/"+n+"/mix/on") {
		var on = 1-(args[0]);
		local.values.channels.getChild('Bus'+i).getChild('Mute').set(on); } }		
//EQ		
		for(var i=1; i <=32; i++) {
		if (i<10){n="0"+i;} else{n=i;}
		if (address == "/ch/"+n+"/eq/on") {
		local.values.channels.getChild('Channel'+i).getChild('EQ').set(args[0]); } }
		if (address == "/main/st/eq/on") {
		local.values.channels.mainLR.eq.set(args[0]);}
		for(var i=1; i <=16; i++) {
		if (i<10){n="0"+i;} else{n=i;}
		if (address == "/bus/"+n+"/eq/on") {
		local.values.channels.getChild('Bus'+i).getChild('EQ').set(args[0]); } }		
//LoCut			
		for(var i=1; i <=32; i++) {
		if (i<10){n="0"+i;} else{n=i;}
		if (address == "/ch/"+n+"/preamp/hpon") {
		local.values.channels.getChild('Channel'+i).getChild('LoCut').set(args[0]); } }			
//Dyn				
		for(var i=1; i <=32; i++) {
		if (i<10){n="0"+i;} else{n=i;}
		if (address == "/ch/"+n+"/dyn/on") {
		local.values.channels.getChild('Channel'+i).getChild('Dyn').set(args[0]); } }
		if (address == "/main/st/dyn/on") {
		local.values.channels.mainLR.dyn.set(args[0]);}	
		for(var i=1; i <=16; i++) {
		if (i<10){n="0"+i;} else{n=i;}
		if (address == "/bus/"+n+"/dyn/on") {
		local.values.channels.getChild('Bus'+i).getChild('Dyn').set(args[0]);} }		
//Gate				
		for(var i=1; i <=32; i++) {
		if (i<10){n="0"+i;} else{n=i;}
		if (address == "/ch/"+n+"/gate/on") {
		local.values.channels.getChild('Channel'+i).getChild('Gate').set(args[0]);} }		


//Selected Channel
if (SelChanParams.get()) {		
// set variables :		
		var tar=local.values.selectedChannel.selectTarget.get();
		var no=local.values.selectedChannel.selectNo.get();
		if(no < 10){no = "0"+no ;} else {no=no ;}
		if (tar=="main/st" || tar == "main/m") {var link = tar ;}
		else {link = tar+"/"+no ;}
						
//Selected Channel Name, Fader , Color etc
		if (address == "/"+link+"/config/name") {
		local.values.selectedChannel.label.set(args[0]);}
		if (address == "/"+link+"/config/color") {
		setCol(local.values.getChild('selectedChannel'),args[0]);}
		if (address == "/"+link+"/mix/fader") {
		var f =args[0];
		db = fader_db(f);	
		local.values.selectedChannel.fader.set(db+" db");}
//Pan
		if (address == "/"+link+"/mix/pan") {
		var val = args[0] ;
		pan = pan_txt(val);
		local.values.selectedChannel.pan.set(pan);}
//Radio Buttons
		if (address == "/"+link+"/mix/on") {
		var on = 1-args[0] ;
		local.values.selectedChannel.mute.set(on);}
		if (address == "/"+link+"/eq/on") {
// Dyn
		local.values.selectedChannel.eqOn.set(args[0]);}
		if (address == "/"+link+"/dyn/on") {
		local.values.selectedChannel.dynOn.set(args[0]);}		
		if (address == "/"+link+"/dyn/ratio") {
		var r = args[0];
		var champs = util.getObjectProperties(dynRatio);
		for (var n = 0; n < champs.length; n++) {
		if (r == dynRatio[champs[n]][0]) {t= dynRatio[champs[n]][1] ;} }
		local.values.selectedChannel.dynRatio.set(t);}				
		if (address == "/"+link+"/dyn/thr") {
		var thr = Math.round((args[0]-1)*600)/10;
		local.values.selectedChannel.dynThreshold.set(thr+" db");}		
		if (address == "/"+link+"/dyn/mgain") {
		var g =Math.round(args[0]*240)/10 ;
		local.values.selectedChannel.dynOutGain.set(g+" db");}
// Gate
		if (address == "/"+link+"/gate/on") {
		local.values.selectedChannel.gateOn.set(args[0]);}
		if (address == "/"+link+"/gate/thr") {
		var thr = Math.round((args[0]-1) *800)/10;
		local.values.selectedChannel.gateThreshold.set(thr+" db");}
		
		if (address == "/"+link+"/gate/range") {
		var range = Math.round(args[0] *570)/10+3;
		local.values.selectedChannel.gateRange.set(range+" db");}
		
		if (address == "/"+link+"/gate/mode") {
		var mode = args[0] ;
		for (var n = 0; n < 6; n++) {
		if (args[0] == n) {
		local.values.selectedChannel.gateMode.set(gateMode[n]);} }  }
// Gate		
		if (address == "/"+link+"/gate/on") {
		local.values.selectedChannel.gateOn.set(args[0]);}
		if (address == "/"+link+"/gate/on") {
		local.values.selectedChannel.gateOn.set(args[0]);}
		if (address == "/"+link+"/gate/thr") {
		var thr = Math.round((args[0]-1) *800)/10;
		local.values.selectedChannel.gateThreshold.set(thr+" db");}		
		if (address == "/"+link+"/gate/range") {
		var range = Math.round(args[0] *570)/10+3;
		local.values.selectedChannel.gateRange.set(range+" db");}		
		if (address == "/"+link+"/gate/mode") {
		var mode = args[0] ;
		for (var n = 0; n < 6; n++) {
		if (args[0] == n) {
		local.values.selectedChannel.gateMode.set(gateMode[n]);} }  }
//LoCut
		if (address == "/"+link+"/preamp/hpon") {
		local.values.selectedChannel.loCutOn.set(args[0]);}
		if (address == "/"+link+"/preamp/invert") {	
		local.values.selectedChannel.polInvert.set(args[0]);}		
		if (address == "/"+link+"/preamp/hpf") {
		var f= args[0];
		var champs = util.getObjectProperties(loCutF);
		for (var n = 0; n < champs.length; n++) {
		if (f >= loCutF[champs[n]][0] && f < loCutF[champs[n+1]][0]) { hp= loCutF[champs[n]][1] ;} 
		if (f == 1.0) { hp= 400 ;}}
		local.values.selectedChannel.loCutFreq.set(hp+"  Hz");}	
	
//Selected Channel EQ	
		if (tar=="main/st" || tar=="main/m"  || tar=="mtx" || tar=="bus") {var c = 6 ;} else {c=4;}	
		for(var i=1; i <= c; i++) {
		if (address == "/"+link+"/eq/"+i+"/g") {
		var g = Math.round((args[0]-0.5)*300)/10 ;
		local.values.selectedChannel.getChild('GainEq'+i).set(g+" db");}
		
		if (address == "/"+link+"/eq/"+i+"/f") {		
		var f= args[0]; 		
		var champs = util.getObjectProperties(freqF);
		for (var n = 0; n < champs.length; n++) {
		if (f >= freqF[champs[n]][0] && f < freqF[champs[n+1]][0]) { tx= freqF[champs[n]][1] ;} }
		local.values.selectedChannel.getChild('FreqEq'+i).set(tx+"  Hz");}
		
		if (address == "/"+link+"/eq/"+i+"/q") {
		var l = args[0];
		var champs = util.getObjectProperties(freqQ);
		for (var n = 0; n < champs.length; n++) {
		if (l >= freqQ[champs[n]][0] && l < freqQ[champs[n+1]][0]) { q= freqQ[champs[n]][1] ;} }
		local.values.selectedChannel.getChild('QEq'+i).set(q+"");}
				
		if (address == "/"+link+"/eq/"+i+"/type") {
		var filt = args[0];
		var champs = util.getObjectProperties(eqFilter);		
		for (var n = 0; n < champs.length; n++) {
		if (filt == eqFilter[champs[n]][0]) {txt= eqFilter[champs[n]][1] ;}  }
		local.values.selectedChannel.getChild('typeEq'+i).set(txt);}  } 
		
	}
		
//Selected Channel Special Resets
		if (tar!="ch") {	
		local.values.selectedChannel.loCutOn.set(0);
		local.values.selectedChannel.polInvert.set(0);
		local.values.selectedChannel.loCutFreq.set("");
		local.values.selectedChannel.gateOn.set(0);
		local.values.selectedChannel.gateThreshold.set("");
		local.values.selectedChannel.gateRange.set("");
		local.values.selectedChannel.gateMode.set(""); }
		
		if (tar=="ch" || tar=="fxrtn" || tar=="auxin") {
		for(var i=5; i <= 6; i++) {
		local.values.selectedChannel.getChild('GainEq'+i).set("");
		local.values.selectedChannel.getChild('FreqEq'+i).set("");
		local.values.selectedChannel.getChild('QEq'+i).set("");
		local.values.selectedChannel.getChild('TypeEq'+i).set("");}	 }
	
		if (tar=="fxrtn" || tar=="auxin") {	
		local.values.selectedChannel.dynOn.set(0);
		local.values.selectedChannel.dynThreshold.set("");
		local.values.selectedChannel.dynRatio.set("");
		local.values.selectedChannel.dynOutGain.set("");}
			
//Meters ------------------>>>>		
		if (address == "/meters/4") {
			for(var i=0; i < args.length; i++) {
			var data = args[i];
			var d = 1;
			for (var j = 4*d; j< data.length; j=j+4) {
				var index = parseInt(Math.floor(j/4))-1;
				if (index < meters4.length) {
				var f = bytesToFloat([data[j+0], data[j+1], data[j+2], data[j+3]]);
				f = util.getFloatFromBytes(data[j+0], data[j+1], data[j+2], data[j+3]);
				var db = Math.round (20 * Math.log10(f)*10)/10;
				var n = meters4[index].split(" ").join("");
		local.values.getChild("Meters").getChild(n).set(db); } } } } 
						
}

//--------------FLOAT TO BYTES (Meters) --------------------------

function bytesToFloat(bytes) {
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

///===================  CONVERTING FUNCTIONS ==================
 
function fader_db(f) {
	if (f >= 0.5) {var d=(f * 40)-30;}
		else if(f >=0.25) {var d=(f * 80)-50;}
		else if(f >=0.0625) {var d=(f * 160)-70;}
		else if (f >= 0.0) {var d=(f * 480)-90;}
		d= (Math.round(d*10))/10;
		return d;
}

function pan_txt(pan) {
		var pan = Math.round(args[0]*100-50) ;
		if (pan == 0){pan = "C";}
		else if (pan < 0){pan = pan+"  L";}
		else if (pan > 0){pan = pan+"  R";}
		return pan ;
}

///===================  Helper Function ==================

function setColor(ref, val){
	if(val>=8){//set inverted colors as regular colors
		ref.getChild("ColorInvert").set(true);}
	else{
		ref.getChild("ColorInvert").set(false);}
	if (val == 0){ref.getChild("Color").set("Black");}
		else if(val == 1){ref.getChild("Color").set("Red");}
		else if(val == 2){ref.getChild("Color").set("Green");}
		else if(val == 3){ref.getChild("Color").set("Yellow");}
		else if(val == 4){ref.getChild("Color").set("Blue");}
		else if(val == 5){ref.getChild("Color").set("Magenta");}
		else if(val == 6){ref.getChild("Color").set("Cyan");}
		else if(val == 7){ref.getChild("Color").set("White");}
		else if(val == 8){ref.getChild("Color").set("Black-inv");}
		else if(val == 9){ref.getChild("Color").set("Red-inv");}
		else if(val == 10){ref.getChild("Color").set("Green-inv");}
		else if(val == 11){ref.getChild("Color").set("Yellow-inv");}
		else if(val == 12){ref.getChild("Color").set("Blue-inv");}
		else if(val == 13){ref.getChild("Color").set("Magenta-inv");}
		else if(val == 14){ref.getChild("Color").set("Cyan-inv");}
		else if(val == 15){ref.getChild("Color").set("White-inv");}
}


function setCol(ref, val){
	if(val>=8){//set inverted colors as regular colors
		val=val-8;}
	if (val == 0){ref.getChild("ColorLabel").set([0,0,0]);}
		else if(val == 1){ref.getChild("ColorLabel").set([1,0,0]);}
		else if(val == 2){ref.getChild("ColorLabel").set([0,1,0]);}
		else if(val == 3){ref.getChild("ColorLabel").set([1,1,0]);}
		else if(val == 4){ref.getChild("ColorLabel").set([0,0,1]);}
		else if(val == 5){ref.getChild("ColorLabel").set([1,0,1]);}
		else if(val == 6){ref.getChild("ColorLabel").set([0,1,1]);}
		else if(val == 7){ref.getChild("ColorLabel").set([1,1,1]);}
}

 
//=========================================================
//							 REQUESTS
//=========================================================

function request_names() {
 		for(var i=1; i <10; i++) {
		local.send("/subscribe","/ch/0"+i+"/config/name 50");} 
		for(var i=10; i <=32; i++) {
		local.send("/subscribe","/ch/"+i+"/config/name 50");} 
}

function request_chfader() {
 		for(var i=1; i <32; i++) {
 		if (i<10){n="0"+i;} else{n=i;}
		local.send("/subscribe","/ch/"+n+"/mix/fader 50");} 
		
}

function request_busfader() {
 		for(var i=1; i <16; i++) {
 		if (i<10){n="0"+i;} else{n=i;}
		local.send("/subscribe","/bus/"+n+"/mix/fader 50");} 
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

function request_all() {
 		for(var i=1; i <32; i++) {
 		if (i<10){n="0"+i;} else{n=i;}
		local.send("/subscribe","/ch/"+n+"/config/name 50");} 
		for(var i=1; i <32; i++) {
		local.send("/subscribe","/ch/"+n+"/mix/fader 50");} 
		for(var i=1; i <16; i++) {
		if (i<10){n="0"+i;} else{n=i;}
		local.send("/subscribe","/bus/0"+n+"/mix/fader 50");} 
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

//=========================================================
//					 REGULAR FUCNTIONS
//=========================================================
//  Chan Config =======>>>>>

function config_name(chanType , chanNo, val) {
	if (chanNo < 10) {chanNo = "0"+chanNo; }
	local.send("/"+chanType +"/"+chanNo+"/config/name", val);
}


function config_color(chanType , chanNo, val) {
	if (chanNo < 10) {chanNo = "0"+chanNo; }
	local.send("/"+chanType +"/"+chanNo+"/config/color", val);
}

function config_icon(chanType , chanNo, value) {  
	if (chanNo < 10) {chanNo = "0"+chanNo; } 
	local.send("/"+chanType +"/"+chanNo+"/config/icon", value);
}

function channel_source(chanType ,chanNo, val) {
	if (chanNo < 10) {chanNo = "0"+chanNo; } 
	local.send("/"+chanType +"/"+chanNo+"/config/source", val);
}



//  Channel Actions =======>>>>>

function ch_automix_group(chanNo, val) {
	if (chanNo < 10) {chanNo = "0"+chanNo; } 
	local.send("/ch/"+chanNo+"/automix/group", val);
}

function ch_automix_gain(chanNo, val) {
	if (chanNo < 10) {chanNo = "0"+chanNo; } 
	
	local.send("/ch/"+chanNo+"/automix/weight", val);
}



//  Preamp =======>>>>>

function preamp_gain(type , chanNo, val) {
	var gain = (val+ 12)/72 ;
    chanNo = chanNo-1 ;
    if (type == 3) { chan = chanNo + 80;
    if (chan<100) { chan = "0"+chan ;}
    local.send("/headamp/"+chan, gain);  } 
	if (type == 2) {chan = chanNo + 32; chan = "0"+chan ;
	local.send("/headamp/"+chan, gain); }	
	if (type == 1) {if (chanNo < 10) { chan =  "00"+chanNo;} else {chan = "0"+chanNo; }	
	local.send("/headamp/"+chan, gain); }
}

function preamp_phantom (type , chanNo, val) {
    chanNo = chanNo-1 ;
    if (type == 3) { chan = chanNo + 80;
    if (chan<100) { chan = "0"+chan ;}
    local.send("/headamp/"+chan+"/phantom", val); }    
	if (type == 2) {chan = chanNo + 32; chan = "0"+chan ;
	local.send("/headamp/"+chan+"/phantom", val); }	
	if (type == 1) {if (chanNo < 10) { chan =  "00"+chanNo;} else {chan = "0"+chanNo; }	
	local.send("/headamp/"+chan+"/phantom", val); }
	local.send("/headamp/"+chan+"/phantom", val);
}

function preamp_trim(chanType , chanNo, val) {
	
	if (chanNo < 10) {chanNo = "0"+chanNo; }
	var trim = (val+18)/36 ;
	local.send("/"+chanType +"/"+chanNo+"/preamp/trim", trim);
}

function auxin_trim(chanType , chanNo, val) {
	
	if (chanNo < 10) {chanNo = "0"+chanNo; }
	local.send("/"+chanType +"/"+chanNo+"/preamp/trim", val);
}

function preamp_invert(chanType , chanNo, val) {
	if (chanNo < 10) {chanNo = "0"+chanNo; }
	local.send("/"+chanType +"/"+chanNo+"/preamp/invert", val);
}


//  Gate
function gate_on(chanType , chanNo, val) {
	if (chanNo < 10) {chanNo = "0"+chanNo; }
	local.send("/"+chanType +"/"+chanNo+"/gate/on", val);
}

function gate_mode(chanType , chanNo, val) { 
	if (chanNo < 10) {chanNo = "0"+chanNo; }
	local.send("/"+chanType +"/"+chanNo+"/gate/mode", val);
}

function gate_thr(chanType , chanNo, val) {
	if (chanNo < 10) {chanNo = "0"+chanNo; }
	val=(val+80)/80 ;
	local.send("/"+chanType +"/"+chanNo+"/gate/thr", val);
}

function gate_range(chanType , chanNo, val) {
	if (chanNo < 10) {chanNo = "0"+chanNo; }
	val=(val-3)/57 ;
	local.send("/"+chanType +"/"+chanNo+"/gate/range", val);
}

function gate_attack(chanType , chanNo, val) { 
	if (chanNo < 10) {chanNo = "0"+chanNo; }
	
	local.send("/"+chanType +"/"+chanNo+"/gate/attack", val);
}

function gate_hold(chanType , chanNo, val) { 
	if (chanNo < 10) {chanNo = "0"+chanNo; }
	local.send("/"+chanType +"/"+chanNo+"/gate/hold", val);
}

function gate_release(chanType , chanNo, val) { 
	if (chanNo < 10) {chanNo = "0"+chanNo; }
	local.send("/"+chanType +"/"+chanNo+"/gate/release", val);
}

function gate_keysrc(chanType , chanNo, val) {
	if (chanNo < 10) {chanNo = "0"+chanNo; }
	local.send("/"+chanType +"/"+chanNo+"/gate/keysrc", val);
}

function gate_filter_on(chanType , chanNo, val) { 
	if (chanNo < 10) {chanNo = "0"+chanNo; }
	local.send("/"+chanType +"/"+chanNo+"/gate/filter/on", val);
}

function gate_filter_type(chanType , chanNo, val) { 
	if (chanNo < 10) {chanNo = "0"+chanNo; }
	local.send("/"+chanType +"/"+chanNo+"/gate/filter/type", val);
}

function gate_filter_f(chanType , chanNo, val) { 
	if (chanNo < 10) {chanNo = "0"+chanNo; }
	local.send("/"+chanType +"/"+chanNo+"/gate/filter/f", val);
}

function gate_keysrc(chanType , chanNo, val) {
	if (chanNo < 10) {chanNo = "0"+chanNo; }
	local.send("/"+chanType +"/"+chanNo+"/gate/keysrc", val);
}


//  Compressor

function ch_comp_full(chanType , chanNo, val1, val2, val3, val4, val5, val6, val7, val8, val9, val10, val11, val12, val13 ) { 
	if (chanNo < 10) {chanNo = "0"+chanNo; }
	local.send("/"+chanType +"/"+chanNo+"/dyn/on", val1);
	local.send("/"+chanType +"/"+chanNo+"/dyn/mode", val2);
	local.send("/"+chanType +"/"+chanNo+"/dyn/det", val3);
	local.send("/"+chanType +"/"+chanNo+"/dyn/env", val4);
	val5=(val5+60)/60 ;
	local.send("/"+chanType +"/"+chanNo+"/dyn/thr", val5);
	local.send("/"+chanType +"/"+chanNo+"/dyn/ratio", val6);
	local.send("/"+chanType +"/"+chanNo+"/dyn/knee", val7);
	val8=(val8)/24 ;
	local.send("/"+chanType +"/"+chanNo+"/dyn/mgain", val8);
	val9=(val99)/120 ;
	local.send("/"+chanType +"/"+chanNo+"/dyn/attack", val9);
	local.send("/"+chanType +"/"+chanNo+"/dyn/hold", val10);
	local.send("/"+chanType +"/"+chanNo+"/dyn/release", val11);
	val12=(val12)/100 ;
	local.send("/"+chanType +"/"+chanNo+"/dyn/mix", val12);
	local.send("/"+chanType +"/"+chanNo+"/dyn/auto", val13);
}

function comp_reset(chanType , chanNo, val) { 
	if (chanNo < 10) {chanNo = "0"+chanNo; }
	local.send("/"+chanType +"/"+chanNo+"/dyn/keysrc", val);
	local.send("/"+chanType +"/"+chanNo+"/dyn/on", 0);
	local.send("/"+chanType +"/"+chanNo+"/dyn/mode", 0);
	local.send("/"+chanType +"/"+chanNo+"/dyn/det", 0);
	local.send("/"+chanType +"/"+chanNo+"/dyn/env", 1);
	local.send("/"+chanType +"/"+chanNo+"/dyn/thr", 1.0);
	local.send("/"+chanType +"/"+chanNo+"/dyn/ratio", 0);
	local.send("/"+chanType +"/"+chanNo+"/dyn/knee", 1);
	local.send("/"+chanType +"/"+chanNo+"/dyn/attack", 0.085);
	local.send("/"+chanType +"/"+chanNo+"/dyn/hold", 0.545);
	local.send("/"+chanType +"/"+chanNo+"/dyn/release", 0.51);
	local.send("/"+chanType +"/"+chanNo+"/dyn/mix", 1.0);
	local.send("/"+chanType +"/"+chanNo+"/dyn/auto", 0);
}


function dyn_on(chanType , chanNo, val) { 
	if (chanNo < 10) {chanNo = "0"+chanNo; }
	local.send("/"+chanType +"/"+chanNo+"/dyn/on", val);
}

function dyn_mode(chanType , chanNo, val) { 
	if (chanNo < 10) {chanNo = "0"+chanNo; }
	local.send("/"+chanType +"/"+chanNo+"/dyn/mode", val);
}

function dyn_det(chanType , chanNo, val) { 
	if (chanNo < 10) {chanNo = "0"+chanNo; }
	local.send("/"+chanType +"/"+chanNo+"/dyn/det", val);
}

function dyn_env(chanType , chanNo, val) { 
	if (chanNo < 10) {chanNo = "0"+chanNo; }
	local.send("/"+chanType +"/"+chanNo+"/dyn/env", val);
}

function dyn_thr(chanType , chanNo, val) {
	if (chanNo < 10) {chanNo = "0"+chanNo; }
	val=(val+60)/60 ;
	local.send("/"+chanType +"/"+chanNo+"/dyn/thr", val);
}

function dyn_ratio(chanType , chanNo, val) { 
	if (chanNo < 10) {chanNo = "0"+chanNo; }
	local.send("/"+chanType +"/"+chanNo+"/dyn/ratio", val);
}

function dyn_knee(chanType , chanNo, val) { 
	if (chanNo < 10) {chanNo = "0"+chanNo; }
	local.send("/"+chanType +"/"+chanNo+"/dyn/knee", val);
}

function dyn_mgain(chanType , chanNo, val) {
	if (chanNo < 10) {chanNo = "0"+chanNo; }
	
	local.send("/"+chanType +"/"+chanNo+"/dyn/mgain", val);
}

function dyn_attack(chanType , chanNo, val) {
	if (chanNo < 10) {chanNo = "0"+chanNo; }
	
	local.send("/"+chanType +"/"+chanNo+"/dyn/attack", val);
}

function dyn_hold(chanType , chanNo, val) { 
	if (chanNo < 10) {chanNo = "0"+chanNo; }
	local.send("/"+chanType +"/"+chanNo+"/dyn/hold", val);
}

function dyn_release(chanType , chanNo, val) {
	if (chanNo < 10) {chanNo = "0"+chanNo; }
	local.send("/"+chanType +"/"+chanNo+"/dyn/release", val);
}

function dyn_pos(chanType , chanNo, val) { 
	if (chanNo < 10) {chanNo = "0"+chanNo; }
	local.send("/"+chanType +"/"+chanNo+"/dyn/pos", val);
}

function dyn_keysrc(chanType , chanNo, val) { 
	if (chanNo < 10) {chanNo = "0"+chanNo; }
	local.send("/"+chanType +"/"+chanNo+"/dyn/keysrc", val);
}

function dyn_mix(chanType , chanNo, val) {
	if (chanNo < 10) {chanNo = "0"+chanNo; }	
	local.send("/"+chanType +"/"+chanNo+"/dyn/mix", val);
}

function dyn_auto(chanType , chanNo, val) {
	if (chanNo < 10) {chanNo = "0"+chanNo; }
	local.send("/"+chanType +"/"+chanNo+"/dyn/auto", val);
}

function dyn_filter_on(chanType , chanNo, val) {
	if (chanNo < 10) {chanNo = "0"+chanNo; }
	local.send("/"+chanType +"/"+chanNo+"/dyn/filter/on", val);
}

function dyn_filter_type(chanType , chanNo, val) { 
	if (chanNo < 10) {chanNo = "0"+chanNo; }
	local.send("/"+chanType +"/"+chanNo+"/dyn/filter/type", val);
}

function dyn_filter_f(chanType , chanNo, val) {
	if (chanNo < 10) {chanNo = "0"+chanNo; }
	local.send("/"+chanType +"/"+chanNo+"/dyn/filter/f", val);
}

function comp_keysrc(chanType , chanNo, val) { 
	if (chanNo < 10) {chanNo = "0"+chanNo; }
	local.send("/"+chanType +"/"+chanNo+"/dyn/keysrc", val);
}



//  Insert

function insert_on(chanType , chanNo, val) {
	if (chanNo < 10) {chanNo = "0"+chanNo; }
	local.send("/"+chanType +"/"+chanNo+"/insert/on", val);
}

function insert_pos(chanType , chanNo, val) {
	if (chanNo < 10) {chanNo = "0"+chanNo; }
	local.send("/"+chanType +"/"+chanNo+"/insert/pos", val);
}

function insert_sel(chanType , chanNo, val) {
	if (chanNo < 10) {chanNo = "0"+chanNo; }
	local.send("/"+chanType +"/"+chanNo+"/insert/sel", val);
}


//  Channel

function mix_fader(chanType , chanNo, val) {

	if (chanType  == "dca") {chanNo = chanNo; } else
	{if (chanNo < 10) {chanNo = "0"+chanNo; }}	
	if (chanType  == "dca"){local.send("/"+chanType +"/"+chanNo+"/fader", val);} else	
	{local.send("/"+chanType +"/"+chanNo+"/mix/fader", val); }
}


function mix_on(chanType , chanNo, val) {
	val=1-val ;
	if (chanType  == "dca") {chanNo = chanNo; } else
	{if (chanNo < 10) {chanNo = "0"+chanNo; }}
	if (chanType  == "dca"){local.send("/"+chanType +"/"+chanNo+"/on", val);} else
	{local.send("/"+chanType +"/"+chanNo+"/mix/on", val);}
}


function mix_routing(chanType , chanNo, val1, val2) {
	if (chanNo < 10) {chanNo = "0"+chanNo; }
	local.send("/"+chanType +"/"+chanNo+"/mix/st", val1);
	local.send("/"+chanType +"/"+chanNo+"/mix/mono", val2);
}

function mix_pan(chanType , chanNo, val) {
	val = (val+50)/100  ;
	if (chanNo < 10) {chanNo = "0"+chanNo; }
	local.send("/"+chanType +"/"+chanNo+"/mix/pan", val); 
}


function mix_send_level(chanType , chanNo, mix, val) {
	if (chanNo < 10) {chanNo = "0"+chanNo; }
	if (mix < 10) {mix = "0"+mix; } 
	local.send("/"+chanType +"/"+chanNo+"/mix/"+mix+"/level", val);  
}

function mix_mono_level(chanType , chanNo, val, val2) {
	if (chanNo < 10) {chanNo = "0"+chanNo; }	
	local.send("/"+chanType +"/"+chanNo+"/mix/mlevel", val);
	local.send("/"+chanType +"/"+chanNo+"/mix/mono", val2);
}

function send_pan(chanType , chanNo, mix, val) {
	val = (val+50)/100  ;
	if (chanNo < 10) {chanNo = "0"+chanNo; }
	if (mix < 10) {mix = "0"+mix; } 
	local.send("/"+chanType +"/"+chanNo+"/mix/"+mix+"/pan", val);  
}

function send_type(chanType , chanNo, mix, val) {
	if (chanNo < 10) {chanNo = "0"+chanNo; }
	if (mix < 10) {mix = "0"+mix; } 
	local.send("/"+chanType +"/"+chanNo+"/mix/"+mix+"/type", val);  
}


//  Main-Channel

function lr_fader(chanType , val) { 
	
	local.send("/"+chanType +"/mix/fader", val);
}

function lr_on(chanType , val) {
	val=1-val ;
	local.send("/"+chanType +"/mix/on", val);
}

function lr_pan(chanType ,val) {
val=(val+50)/100 ;
	local.send("/"+chanType +"/mix/pan", val);
}

function lr_eq (val1,chanType , band, val2, val3, val4, val5) {
	val2 = (val2+15)/30 ;
	val4=1-val4 ;
	local.send("/"+chanType +"/eq/on", val1);
	local.send("/"+chanType +"/eq/"+band+"/g", val2);
	local.send("/"+chanType +"/eq/"+band+"/f", val3);
	local.send("/"+chanType +"/eq/"+band+"/q", val4);
	local.send("/"+chanType +"/eq/"+band+"/type", val5);
}

function lr_eq_reset(chanType ) {
	local.send("/"+chanType +"/eq/1/g", 0.5);
	local.send("/"+chanType +"/eq/2/g", 0.5);
	local.send("/"+chanType +"/eq/3/g", 0.5);
	local.send("/"+chanType +"/eq/4/g", 0.5);
	local.send("/"+chanType +"/eq/5/g", 0.5);
	local.send("/"+chanType +"/eq/6/g", 0.5);
	local.send("/"+chanType +"/eq/1/f", 0.2);
	local.send("/"+chanType +"/eq/2/f", 0.4);
	local.send("/"+chanType +"/eq/3/f", 0.5);
	local.send("/"+chanType +"/eq/4/f", 0.8);
	local.send("/"+chanType +"/eq/5/f", 0.85);
	local.send("/"+chanType +"/eq/6/f", 0.9);
}

function lr_eq_on(chanType , val) {
	local.send("/"+chanType +"/eq/on", val);
}

function lr_comp(chanType , val1, val2, val3, val4, val5, val6, val7, val8, val9, val10, val11, val12, val13 ) {
	local.send("/"+chanType +"/dyn/on", val1);
	local.send("/"+chanType +"/dyn/mode", val2);
	local.send("/"+chanType +"/dyn/det", val3);
	local.send("/"+chanType +"/dyn/env", val4);
	val5=(val5+60)/60 ;
	local.send("/"+chanType +"/dyn/thr", val5);
	local.send("/"+chanType +"/dyn/ratio", val6);
	local.send("/"+chanType +"/dyn/knee", val7);
	val8=val8/24 ;
	local.send("/"+chanType +"/dyn/mgain", val8);
	val9=val9/120 ;
	local.send("/"+chanType +"/dyn/attack", val9);
	local.send("/"+chanType +"/dyn/hold", val10);
	local.send("/"+chanType +"/dyn/release", val11);
	val12=val12/100 ;
	local.send("/"+chanType +"/dyn/mix", val12);
	local.send("/"+chanType +"/dyn/auto", val13);
	
}

function lr_comp_reset(chanType ) {
	local.send("/"+chanType +"/dyn/on", 0);
	local.send("/"+chanType +"/dyn/mode", 0);
	local.send("/"+chanType +"/dyn/det", 0);
	local.send("/"+chanType +"/dyn/env", 1);
	local.send("/"+chanType +"/dyn/thr", 1.0);
	local.send("/"+chanType +"/dyn/ratio", 0);
	local.send("/"+chanType +"/dyn/knee", 1);
	local.send("/"+chanType +"/dyn/mgain", 0.0);
	local.send("/"+chanType +"/dyn/attack", 0.085);
	local.send("/"+chanType +"/dyn/hold", 0.545);
	local.send("/"+chanType +"/dyn/release", 0.51);
	local.send("/"+chanType +"/dyn/mix", 1.0);
	local.send("/"+chanType +"/dyn/auto", 0);
	
}

function lr_eq_f(chanType , band, val) { 
	local.send("/"+chanType +"/eq/"+band+"/f", val);
}

function lr_eq_g(chanType , band, val) {
	val = (val+15)/30  ; 
	local.send("/"+chanType +"/eq/"+band+"/g", val);
}

function lr_eq_q(chanType , band, val) {
	val=1-val ;
	local.send("/"+chanType +"/eq/"+band+"/q", val);
}

function lr_eq_type(chanType , band, val) { 
	local.send("/"+chanType +"/eq/"+band+"/type", val);
}



function lr_dyn_filter_on(chanType , val) {	
	local.send("/"+chanType +"/dyn/filter/on", val);
}

function lr_dyn_filter_type(chanType , val) { 	
	local.send("/"+chanType +"/dyn/filter/type", val);
}

function lr_dyn_filter_f(chanType , val) {
	local.send("/"+chanType +"/dyn/filter/f", val);
}

function lr_comp_keysrc(chanType , val) { 
	local.send("/"+chanType +"/dyn/keysrc", val);
}

function lr_config_name(chanType , val) {
	local.send("/"+chanType +"/config/name", val);
}


function lr_config_color(chanType , val) {
	local.send("/"+chanType +"/config/color", val);
}


//  EQ

function full_ch_eq (chanType , chanNo, val, val1, band, val2, val3, val4, val5) {
	if (chanNo < 10) {chanNo = "0"+chanNo; }
	val2 = (val2+15)/30 ;
	val4=1-val4 ;
	local.send("/"+chanType +"/"+chanNo+"/eq/on", val1);
	local.send("/"+chanType +"/"+chanNo+"/eq/"+band+"/g", val2);
	local.send("/"+chanType +"/"+chanNo+"/eq/"+band+"/f", val3);
	local.send("/"+chanType +"/"+chanNo+"/eq/"+band+"/q", val4);
	local.send("/"+chanType +"/"+chanNo+"/eq/"+band+"/type", val5);
}


function ch_eq_reset(chanType , chanNo) {
	if (chanNo < 10) {chanNo = "0"+chanNo; }
	local.send("/"+chanType +"/"+chanNo+"/eq/1/g", 0.5);
	local.send("/"+chanType +"/"+chanNo+"/eq/2/g", 0.5);
	local.send("/"+chanType +"/"+chanNo+"/eq/3/g", 0.5);
	local.send("/"+chanType +"/"+chanNo+"/eq/4/g", 0.5);
	local.send("/"+chanType +"/"+chanNo+"/eq/5/g", 0.5);
	local.send("/"+chanType +"/"+chanNo+"/eq/6/g", 0.5);
	local.send("/"+chanType +"/"+chanNo+"/eq/1/f", 0.2);
	local.send("/"+chanType +"/"+chanNo+"/eq/2/f", 0.4);
	local.send("/"+chanType +"/"+chanNo+"/eq/3/f", 0.5);
	local.send("/"+chanType +"/"+chanNo+"/eq/4/f", 0.8);
	local.send("/"+chanType +"/"+chanNo+"/eq/5/f", 0.85);
	local.send("/"+chanType +"/"+chanNo+"/eq/6/f", 0.9);
}

function eq_on(chanType , chanNo, val) {
	if (chanNo < 10) {chanNo = "0"+chanNo; }
	local.send("/"+chanType +"/"+chanNo+"/eq/on", val);
}

function eq_type(chanType , chanNo, band, val) { 
	if (chanNo < 10) {chanNo = "0"+chanNo; }
	local.send("/"+chanType +"/"+chanNo+"/eq/"+band+"/type", val);
}

function eq_f(chanType , chanNo, band, val) { 
	if (chanNo < 10) {chanNo = "0"+chanNo; }
	local.send("/"+chanType +"/"+chanNo+"/eq/"+band+"/f", val);
}

function eq_g(chanType , chanNo, band, val) { 
	Val = 1-val ;
	if (chanNo < 10) {chanNo = "0"+chanNo; }
	local.send("/"+chanType +"/"+chanNo+"/eq/"+band+"/g", val);
}

function eq_q(chanType , chanNo, band, val) {
	val = 1-val ;  
	if (chanNo < 10) {chanNo = "0"+chanNo; }
	local.send("/"+chanType +"/"+chanNo+"/eq/"+band+"/q", val);
}

// Hi-Pass

function hipass (chanNo, val1, val2, val3) {
	if (chanNo < 10) {chanNo = "0"+chanNo; }
	local.send("/ch/"+chanNo+"/preamp/hpon", val1);
	local.send("/ch/"+chanNo+"/preamp/hpf", val2);
	local.send("/cn/"+chanNo+"/preamp/hpslope", val3);
}

function preamp_hpon(chanType , chanNo, val) {
	if (chanNo < 10) {chanNo = "0"+chanNo; }
	local.send("/"+chanType +"/"+chanNo+"/preamp/hpon", val);
}


function preamp_hpf(chanType , chanNo, val) {
	
	if (chanNo < 10) {chanNo = "0"+chanNo; }
	local.send("/"+chanType +"/"+chanNo+"/preamp/hpf", val);
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

//Divers & Actions

function load (val, no) {
	local.send("/load", val, no);
}

function save (type, no, name, notes) {
	local.send("/save", [type, no, name, notes]);
}

function mute_group (group, val) {
	local.send("/config/mute/"+group+"", val);
}

function solo_level (target, val) { 

	local.send("/config/"+target+"/level", val);

}




