
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
