
function random_num(max) {
	return Math.floor(Math.random() * max)
}

function save_file(filename, data) {
    const blob = new Blob([data], {type: 'text/csv'});
    if (window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveBlob(blob, filename);
    }
    else {
        const elem = window.document.createElement('a');
        elem.href = window.URL.createObjectURL(blob);
        elem.download = filename;        
        document.body.appendChild(elem);
        elem.click();        
        document.body.removeChild(elem);
    }
}

function read_file(file) {
	var fr = new FileReader();
	var res;
	fr.onload = () => { res = fr.result }	
	fr.readAsText(file)
	return res
}

function generate_name(str) {
    const constant_sounds = 'qwrtpsdfghjklzxcvbnm'
    const vowel_sounds = 'eyuioa'
    var res = ''
    
    var sum = 0
    for (var i=0; i<str.length; ++i) sum += str.charCodeAt(i)-31
    var res_len = 7 + (sum % 5 - 2)

    sum = 0
    for (var j=0; j<res_len; ++j) {
        for (var i=j; i<str.length; i+=res_len) sum += str.charCodeAt(i)-31
        
        if (j % 2 == 0) 
            res += constant_sounds[sum % constant_sounds.length]
        else 
            res += vowel_sounds[sum % vowel_sounds.length]
    }

    return res
}
