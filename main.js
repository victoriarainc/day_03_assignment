
// =============== TOOLS ===================
// - use template literals to create divs and
//     nest data from the variable 'customers'
// - 'customers' is a variable set equal to a
//     single object that has a value of an
//     array (which is full of more objects)
// - use a for loop or .forEach to populate
//     each
// - OR create one row that wraps in CSS ***

// ============== VIEWER =====================
// console.log(customers.results[1])

// ================= TEMPLATE ==================

// create a section to run the template inside

let people = document.querySelector('section');

for (let i = 0; i < customers.results.length; i++) {

  let div = document.createElement('div');

  let access = document.querySelector('body');
  let person = (customers.results[i]);

  let template = `
          <div>
          <img src = "${customers.results[i].picture.large}">
          <ul>
          <li> ${customers.results[i].name.first} ${customers.results[i].name.last}</li>
          <li> ${customers.results[i].email}</li>
          <li> ${customers.results[i].location.street}</li>
          <li> ${customers.results[i].location.city} ,   ${customers.results[i].location.state} ${customers.results[i].location.postcode}</li>
          <li> ${customers.results[i].cell}</li>
          <li> ${customers.results[i].id.value}</li>
          </div>
    `


  people.innerHTML += template;
}
// create a template to put variables into the
// populated divs from the function's loop
