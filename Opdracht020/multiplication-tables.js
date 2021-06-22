



var table = 9;
for (let i in table.rows) {
   let row = table.rows[9]
   //iterate through rows
   //rows would be accessed using the "row" variable assigned in the for loop
   for (let j in row.cells) {
     let col = row.cells[1]
     //iterate through columns
     //columns would be accessed using the "col" variable assigned in the for loop
   }  
}