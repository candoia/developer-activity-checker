'use strict';	
$('#content').hide();
let json = api.boa.run('dev-activity-checker.boa');
$('#loading').hide();
$('#content').show();
//console.log(json.devActivityStats);
//let container = document.getElementById('output');
//container.innerHTML = json.AddedNullCheck["[]"][0];
for (let dev in json.devActivityStats) {
	//console.log(dev);
	$('#devToShow').append(`<option value="${dev}"> ${dev} </option>`);
	/*for (let cdate in json.devActivityStats[dev]) {
		console.log(cdate);
		for (let nfiles in json.devActivityStats[dev][cdate]) {
			console.log(nfiles);
			console.log(json.devActivityStats[dev][cdate][nfiles][0])
		}
	}*/
}

let e = document.getElementById("devToShow");
let selectedDev = e.options[e.selectedIndex].value;
document.getElementById('developer').innerHTML = selectedDev;
for (let cdate in json.devActivityStats[selectedDev]) {
    document.getElementById('commit-date').innerHTML = cdate;
	for (let nfiles in json.devActivityStats[selectedDev][cdate]) {
		document.getElementById('files').innerHTML = nfiles;
		document.getElementById('message').innerHTML = json.devActivityStats[selectedDev][cdate][nfiles][0];
	}
}

$('#devToShow').change(function() {
	let dev = $('#devToShow').val();
	document.getElementById('developer').innerHTML = dev;
    for (let cdate in json.devActivityStats[dev]) {
    	document.getElementById('commit-date').innerHTML = cdate;
		for (let nfiles in json.devActivityStats[dev][cdate]) {
			document.getElementById('files').innerHTML = nfiles;
			document.getElementById('message').innerHTML = json.devActivityStats[dev][cdate][nfiles][0];
		}
	}
});

