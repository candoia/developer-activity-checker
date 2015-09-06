'use strict';	
$('#content').hide();
let json = api.boa.run('dev-activity-checker.boa');
$('#loading').hide();
$('#content').show();
console.log(json.devActivityStats);
//let container = document.getElementById('output');
//container.innerHTML = json.AddedNullCheck["[]"][0];


