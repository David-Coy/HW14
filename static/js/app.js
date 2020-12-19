 // from data.js
let tableData = data;

// YOUR CODE HERE!
//
// Select the filter button
let button = d3.select('#filter-btn');
let button_clear = d3.selectAll('#filter-btn_2');
console.log(tableData)
// Create event handler
button.on('click', runEnter);
button_clear.on('click', runClear);


// Function to be used when using filter button

function runEnter() {
    //Select the HTML input element and get the raw HTML node
    let datetime_inputElement = d3.select("#datetime")
    let city_inputElement = d3.select("#city")
    let state_inputElement = d3.select("#state")
    let country_inputElement = d3.select("#country")
    let shape_inputElement = d3.select("#shape")
    

    let datetime_inputValue = datetime_inputElement.property("value")
    let city_inputValue = city_inputElement.property("value")
    // if(city_inputValue === ''){
    //   let city_inputValue = city_inputElement.property("value")
    // }
    // else{
    //   let city_inputValue = city_inputElement.property("value")
    // };
      
    let state_inputValue = state_inputElement.property("value")
    let country_inputValue = country_inputElement.property("value")
    let shape_inputValue = shape_inputElement.property("value")

    //Use the form input to filter the data by date
    // (item.city.match('[a-zA-Z]tlanta')),
    let newData = tableData.filter(item => item.datetime === datetime_inputValue && 
      (item.city === city_inputValue ) &&
      item.state === state_inputValue &&
      item.country === country_inputValue &&
      item.shape === shape_inputValue
      );

    // This is used to clear the table before hand  
    // let rows = d3.select("#ufo-table", 'table-striped').selectAll('td');
    // rows.remove()// removes all entries   
    runClear()
    let myList = d3.select("#ufo-table", 'table-striped');

    let idklol = newData.map(item =>{
      //console.log(item.city) 
      myList.append('td').text(item.datetime)
      myList.append('td').text(item.city)
      myList.append('td').text(item.state)
      myList.append('td').text(item.country)
      myList.append('td').text(item.shape)
      myList.append('td').text('-')
      myList.append('td').text('-')
      myList.append('tr')// create another row
    })


};

function runClear(){
    //let myList = d3.select("#ufo-table", 'table-striped');
    //myList.clear();
    let rows = d3.select("#ufo-table", 'table-striped').selectAll('td');
    rows.remove()// removes all entries
};