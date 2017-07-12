
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

// for (let i = 0; i < customers.results.length; i++) {

  let div = document.createElement('div');

  let access = document.querySelector('body');
  let person = (customers.results[0]);

  let template = `
      <div>
          <img src = "${customers.results[0].picture.medium}">
          <p> ${customers.results[0].name.first}</p>
          <p> ${customers.results[0].name.last}</p>
          <p> ${customers.results[0].email}</p>
          <p> ${customers.results[0].location[0]}</p>
          <p> ${customers.results[0].cell}</p>
          <p> ${customers.results[0].id.value} </p>
      </div>
    `

  // people.appendChild('template');
  // .people.innerHTML = person;
  people.innerHTML = template;

// }
// create a template to put variables into the
// populated divs from the function's loop
