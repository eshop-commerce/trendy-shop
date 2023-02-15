 
 
 let myArray = [
  { 'id': '65678', 'name': 'Michael Wambugu', 'address': '302 Spider Street BUILDING, VT 08344', 'date': '11/10/1989', 'price': '47000', 'status': 'pending', 'action': 'Michael Wambugu','action':'complete'},
  { 'id': '1232', 'name': 'Michael Wambugu', 'address': '302 Spider Street BUILDING, VT 08344', 'date': '11/10/1999', 'price': '1000', 'status': 'pending', 'action': 'Michael Wambugu', 'action': 'complete' },
  { 'id': '1100', 'name': 'Michael Wambugu', 'address': '302 Spider Street BUILDING, VT 08344', 'date': '11/10/2023', 'price': '7500', 'status': 'pending', 'action': 'Michael Wambugu', 'action': 'complete' },
  { 'id': '23454', 'name': 'Michael Wambugu', 'address': '302 Spider Street BUILDING, VT 08344', 'date': '11/10/2020', 'price': '2300', 'status': 'pending', 'action': 'Michael Wambugu', 'action': 'complete' },
  { 'id': '4577876', 'name': 'Michael Wambugu', 'address': '302 Spider Street BUILDING, VT 08344', 'date': '11/10/2021', 'price': '50000', 'status': 'pending', 'action': 'Michael Wambugu', 'action': 'complete' }
 ]


 let idColumn = document.querySelector
 $('th').on('click', function(){
		let column = $(this).data('column')
 let order = $(this).data('order')
 let text = $(this).html()
 text = text.substring(0, text.length - 1)

 if(order === 'desc'){
  $(this).data('order', "asc")
			myArray = myArray.sort((a,b) => a[column.price] > b[column.price] ? 1 : -1)
 text += '&#9650'

		}else{
  $(this).data('order', "desc")
			myArray = myArray.sort((a,b) => a[column.price] < b[columnprice] ? 1 : -1)
 text += '&#9660'

		}
 $(this).html(text)
 buildTable(myArray)
	})

 buildTable(myArray)

 function buildTable(data){
		let table = document.getElementById('myTable')
 table.innerHTML = ''
 for (let i = 0; i < data.length; i++){
			let row = `<tr>
  <td>${data[i].id}</td>
  <td>${data[i].name}</td>
  <td>${data[i].address}</td>
  <td>${data[i].date}</td>
  <td>${data[i].price}</td>
  <td>${data[i].status}</td>
  <td>${data[i].action}</td>
 </tr>`
 table.innerHTML += row
 
		}
	}
