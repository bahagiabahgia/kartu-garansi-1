function allData(){
            
    table.innerHTML = ``
    //get data from localstorage and store to contaclist array
    //we must to use JSON.parse, because data as string, we need convert to array
    customersList = JSON.parse(localStorage.getItem('listItem')) ?? []

    //looping data and show data in table
    customersList.forEach(function (value, i){
       i++;        
        var table = document.getElementById('table')

        table.innerHTML += `
        <tr>
            <td>${i++}</td>
            <td>${value.tanggal}</td>
            <td style="text-transform: uppercase">${value.nama}</td>
            <td style="text-transform: uppercase">${value.unit}</td>
            <td style="text-transform: uppercase">${value.frame}</td>
            <td style="text-transform: uppercase">${value.lensa}</td>
            <td>
            <a href="javascript:void(0)" id="i" onclick="info(${value.id})">i</a>
            <a href="javascript:void(1)" id="edit" onclick="find(${value.id})">Edit</a>
            <a href="javascript:void(2)" id="hapus" onclick="return confirm('Data akan dihapus!')?remove(${value.id}):'';">Hapus</a>
            <a href="print.html?id=${value.id}" id="print" target="_blank">Print</a>
            </td>
        </tr>`
    })
}


function save(){
    var nama = document.getElementById('nama').value
    var frame = document.getElementById('frame').value
    var lensa = document.getElementById('lensa').value
    if(nama != "" || frame != "" || lensa != "" ){
        //get data from localstorage and store to contaclist array
        //we must to use JSON.parse, because data as string, we need convert to array
        customersList = JSON.parse(localStorage.getItem('listItem')) ?? []

        //get last array to get last id
        //and store it into variable id
        var id
        customersList.length != 0 ? customersList.findLast((item) => id = item.id) : id = 0

            var now = new Date().toLocaleDateString('id-ID', {year:"numeric", month:"numeric", day:"numeric"}) 
            // "Friday, Jul 2, 2021"
            //save
            //get data from form
        
            var item = {
                id             : id + 1, 
                nama           : document.getElementById('nama').value, 
                unit           : document.getElementById('unit').value, 
                frame          : document.getElementById('frame').value, 
                lensa          : document.getElementById('lensa').value,
                rsph           : document.getElementById('rsph').value,
                rcyl           : document.getElementById('rcyl').value,
                raxis          : document.getElementById('raxis').value,
                radd           : document.getElementById('radd').value,
                rmpd           : document.getElementById('rmpd').value,
                lsph           : document.getElementById('lsph').value,
                lcyl           : document.getElementById('lcyl').value,
                laxis          : document.getElementById('laxis').value,
                ladd           : document.getElementById('ladd').value,
                lmpd           : document.getElementById('lmpd').value,
                garansi_lensa  : document.getElementById('garansi_lensa').value,
                garansi_frame  : document.getElementById('garansi_frame').value,
                tanggal        : now
            }
        

            //add item data to array customersList
            customersList.push(item)

        // save array into localstorage
        localStorage.setItem('listItem', JSON.stringify(customersList))

        if(document.getElementById('id').value){
            remove(document.getElementById('id').value)
        }

        //update table list
        allData()

        //remove form data
        document.getElementById('form').reset()
    }else{
        alert("Form Tidak Boleh kosong");
    }
}

function removeAllData(){
    localStorage.clear();
    allData()
}

function find(id){
    customersList = JSON.parse(localStorage.getItem('listItem')) ?? []

    customersList.forEach(function (value){
        if(value.id == id){
            document.getElementById('id').value            = value.id
            document.getElementById('nama').value          = value.nama         
            document.getElementById('unit').value          = value.unit    
            document.getElementById('frame').value         = value.frame        
            document.getElementById('lensa').value         = value.lensa        
            document.getElementById('rsph').value          = value.rsph         
            document.getElementById('rcyl').value          = value.rcyl         
            document.getElementById('raxis').value         = value.raxis        
            document.getElementById('radd').value          = value.radd         
            document.getElementById('rmpd').value          = value.rmpd         
            document.getElementById('lsph').value          = value.lsph         
            document.getElementById('lcyl').value          = value.lcyl         
            document.getElementById('laxis').value         = value.laxis        
            document.getElementById('ladd').value          = value.ladd         
            document.getElementById('lmpd').value          = value.lmpd         
            document.getElementById('garansi_lensa').value = value.garansi_lensa
            document.getElementById('garansi_frame').value = value.garansi_frame
        }
    })
}

function remove(id){
    customersList = JSON.parse(localStorage.getItem('listItem')) ?? []
    
        customersList = customersList.filter(function(value){ 
            return value.id != id; 
        });
    
        // save array into localstorage
        localStorage.setItem('listItem', JSON.stringify(customersList))
    
        //get data again
        allData()
}

function info(id){
    customersList = JSON.parse(localStorage.getItem('listItem')) ?? []

    customersList.forEach(function (value){
        if(value.id == id){

alert(`Nama   : ${value.nama}
Unit   : ${value.nama}
Frame  : ${value.nama}
Lensa  : ${value.nama}
|    sph    |   cyl     |   axis    |   add   |   mpd     |
R   ${value.rsph}     ${value.rcyl}     ${value.raxis}     ${value.radd}     ${value.rmpd}
L   ${value.lsph}     ${value.lcyl}     ${value.laxis}     ${value.ladd}     ${value.lmpd}
Garansi Lensa : ${value.garansi_lensa}  
Garansi Frame : ${value.garansi_frame}  
`)

        }
    })
}

(function() {
	'use strict';

var TableFilter = (function() {
 var Arr = Array.prototype;
		var input;
  
		function onInputEvent(e) {
			input = e.target;
			var table1 = document.getElementsByClassName(input.getAttribute('data-table'));
			Arr.forEach.call(table1, function(table) {
				Arr.forEach.call(table.tBodies, function(tbody) {
					Arr.forEach.call(tbody.rows, filter);
				});
			});
		}

		function filter(row) {
			var text = row.textContent.toLowerCase();
       //console.log(text);
      var val = input.value.toLowerCase();
      //console.log(val);
			row.style.display = text.indexOf(val) === -1 ? 'none' : 'table-row';
		}

		return {
			init: function() {
				var inputs = document.getElementsByClassName('table-filter');
				Arr.forEach.call(inputs, function(input) {
					input.oninput = onInputEvent;
				});
			}
		};
 
	})();

  /*console.log(document.readyState);
	document.addEventListener('readystatechange', function() {
		if (document.readyState === 'complete') {
      console.log(document.readyState);
			TableFilter.init();
		}
	}); */
  
 TableFilter.init(); 
})();

cPrev = -1; // global var saves the previous c, used to
            // determine if the same column is clicked again

function sortBy(c) {
    rows = document.getElementById("customers").rows.length; // num of rows
    columns = document.getElementById("customers").rows[0].cells.length; // num of columns
    arrTable = [...Array(rows)].map(e => Array(columns)); // create an empty 2d array

    for (ro=0; ro<rows; ro++) { // cycle through rows
        for (co=0; co<columns; co++) { // cycle through columns
            // assign the value in each row-column to a 2d array by row-column
            arrTable[ro][co] = document.getElementById("customers").rows[ro].cells[co].innerHTML;
        }
    }

    th = arrTable.shift(); // remove the header row from the array, and save it
    
    if (c !== cPrev) { // different column is clicked, so sort by the new column
        arrTable.sort(
            function (a, b) {
                if (a[c] === b[c]) {
                    return 0;
                } else {
                    return (a[c] < b[c]) ? -1 : 1;
                }
            }
        );
    } else { // if the same column is clicked then reverse the array
        arrTable.reverse();
    }
    
    cPrev = c; // save in previous c

    arrTable.unshift(th); // put the header back in to the array

    // cycle through rows-columns placing values from the array back into the html table
    for (ro=0; ro<rows; ro++) {
        for (co=0; co<columns; co++) {
            document.getElementById("customers").rows[ro].cells[co].innerHTML = arrTable[ro][co];
        }
    }
}

