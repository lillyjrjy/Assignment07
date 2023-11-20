// CREATE AN ARRAY OF EMPLOYEES
let empl = [[123456, 'Person0', 1232, "asd@email.com", "Sales"],
        [123457, 'Person1', 1233, "asd@email.com", "Sales"],
        [123458, 'Person2', 1234, "asd@email.com", "Sales"],
        [123459, 'Person3', 1235, "asd@email.com", "Sales"],
        [123450, 'Person4', 1236, "asd@email.com", "Sales"]]

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
let storage = localStorage.getItem('emp') || ''
if(storage>0){
    empl = JSON.parse(localStorage.getItem('emp'))
}


// GET DOM ELEMENTS
let form = document.getElementById('addForm')
let table = document.getElementById('empTable')
let tab = document.getElementsByTagName('tbody')
let output = document.getElementById('empCount')

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
buildGrid()

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()
    // GET THE VALUES FROM THE TEXT BOXES
    let newId = document.getElementById('id').value
    let newName = document.getElementById('name').value
    let newExt = document.getElementById('extension').value
    let newEmail = document.getElementById('email').value
    let newDep = document.getElementById('department').value

    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    let arr = []
    arr.push(newId)
    arr.push(newName)
    arr.push(newExt)
    arr.push(newEmail)
    arr.push(newDep)
    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    empl.push(arr)
    // BUILD THE GRID
    buildGrid()
    // RESET THE FORM
    form.reset()
    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById('id').focus()
});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    // CONFIRM THE DELETE
    if(e.target.classList.contains('delete')){
        if (confirm('Are you sure you want to delete this employee?')){
            // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
            // REMOVE EMPLOYEE FROM ARRAY
            
            empl.splice(e.target.parentNode.parentNode.rowIndex-1,1)
            // BUILD THE GRID
            buildGrid()
        }
    }   

});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    while(table.rows.length>1){
        table.deleteRow(1)
    }
    localStorage.removeItem('emp')  
    

    // REBUILD THE TBODY FROM SCRATCH
    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    for(let em of empl){

        // REBUILDING THE ROW STRUCTURE
        let r = document.createElement('tr')

        let cellID = document.createElement('td')
        let cellName = document.createElement('td')
        let cellExt = document.createElement('td')
        let cellEm = document.createElement('td')
        let cellDep = document.createElement('td')
        let celldel = document.createElement('td')

        cellID.innerHTML = em[0]
        cellName.innerHTML = em[1]
        cellExt.innerHTML = em[2]
        cellEm.innerHTML = em[3]
        cellDep.innerHTML=em[4]
        
        let deleteBtn = document.createElement('button')
        deleteBtn.className  ='btn btn-danger btn-sm float-end delete'
        let textDel = document.createTextNode('X')
        deleteBtn.appendChild(textDel)
        celldel.appendChild(deleteBtn)

        r.appendChild(cellID)
        r.appendChild(cellName)
        r.appendChild(cellExt)
        r.appendChild(cellEm)
        r.appendChild(cellDep)
        r.appendChild(celldel)

         // BIND THE TBODY TO THE EMPLOYEE TABLE
        table.appendChild(r)


    }
    

    // UPDATE EMPLOYEE COUNT
    output.innerHTML = empl.length
    // STORE THE ARRAY IN STORAGE
   
    localStorage.setItem('emp', JSON.stringify(empl))
    
}