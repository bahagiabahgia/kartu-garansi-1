function allData(){
            
    table.innerHTML = ``
    //get data from localstorage and store to contaclist array
    //we must to use JSON.parse, because data as string, we need convert to array
    contactList = JSON.parse(localStorage.getItem('listItem')) ?? []

    //looping data and show data in table
    contactList.forEach(function (value, i){
       
        var table = document.getElementById('table')

        table.innerHTML += `
        <tr>
            <td>${value.tanggal}</td>
            <td style="text-transform: uppercase">${value.nama}</td>
            <td style="text-transform: uppercase">${value.unit}</td>
            <td style="text-transform: uppercase">${value.frame}</td>
            <td style="text-transform: uppercase">${value.lensa}</td>
            <td>
            <a href="javascript:void(0)" id="i" onclick="info(${value.id})">i</a>
            <a href="javascript:void(1)" id="edit" onclick="find(${value.id})">Edit</a>
            <a href="javascript:void(2)" id="hapus" onclick="remove(${value.id})">Hapus</a>
            <a href="print.html?id=${value.id}" id="print" target="_blank">Print</a>
            </td>
        </tr>`
    })
}

function save(){
    //get data from localstorage and store to contaclist array
    //we must to use JSON.parse, because data as string, we need convert to array
    contactList = JSON.parse(localStorage.getItem('listItem')) ?? []

    //get last array to get last id
    //and store it into variable id
    var id
    contactList.length != 0 ? contactList.findLast((item) => id = item.id) : id = 0

        var now = new Date().toLocaleDateString('id-ID', {year:"numeric", month:"short", day:"numeric"}) 
        // "Friday, Jul 2, 2021"
        //save
        //get data from form
        var nama = document.getElementById('nama').value
        var frame = document.getElementById('frame').value
        var lensa = document.getElementById('lensa').value
        if(nama != "" || frame != "" || lensa != "" ){
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
        }

        //add item data to array contactlist
        contactList.push(item)

    // save array into localstorage
    localStorage.setItem('listItem', JSON.stringify(contactList))

    if(document.getElementById('id').value){
        remove(document.getElementById('id').value)
    }

    //update table list
    allData()

    //remove form data
    document.getElementById('form').reset()
}

function removeAllData(){
    localStorage.clear();
    allData()
}

function find(id){
    contactList = JSON.parse(localStorage.getItem('listItem')) ?? []

    contactList.forEach(function (value){
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
    contactList = JSON.parse(localStorage.getItem('listItem')) ?? []
    
        contactList = contactList.filter(function(value){ 
            return value.id != id; 
        });
    
        // save array into localstorage
        localStorage.setItem('listItem', JSON.stringify(contactList))
    
        //get data again
        allData()
}

function info(id){
    contactList = JSON.parse(localStorage.getItem('listItem')) ?? []

    contactList.forEach(function (value){
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

            // document.getElementById('id').value            = value.id
            // document.getElementById('nama').value          = value.nama         
            // document.getElementById('unit').value          = value.unit    
            // document.getElementById('frame').value         = value.frame        
            // document.getElementById('lensa').value         = value.lensa        
            // document.getElementById('rsph').value          = value.rsph         
            // document.getElementById('rcyl').value          = value.rcyl         
            // document.getElementById('raxis').value         = value.raxis        
            // document.getElementById('radd').value          = value.radd         
            // document.getElementById('rmpd').value          = value.rmpd         
            // document.getElementById('lsph').value          = value.lsph         
            // document.getElementById('lcyl').value          = value.lcyl         
            // document.getElementById('laxis').value         = value.laxis        
            // document.getElementById('ladd').value          = value.ladd         
            // document.getElementById('lmpd').value          = value.lmpd         
            // document.getElementById('garansi_lensa').value = value.garansi_lensa
            // document.getElementById('garansi_frame').value = value.garansi_frame
        }
    })
}