/*
Takes the inputs from register form and checks the conditional. Creates a div and p element each time a name is submitted.
*/


function submitScript() {

  let firstName = document.getElementById('firstName').value;
  let lastName = document.getElementById('lastName').value;
  let age = document.getElementById('age').value;
  let newDiv = document.createElement("div");
  let newP = document.createElement("p");
  let jCounter = document.getElementById('jCounter').innerHTML;
  let iCounter = document.getElementById('iCounter').innerHTML;
  let sCounter = document.getElementById('sCounter').innerHTML;

  // check in number is within one of the 3 leagues
  if (age < 4 || age > 15 || isNaN(age) == true) {

    window.alert("Please check your inputs. Name must be characters only and not numbers. Age must be a number between 4-15.");

  } else if (age >= 4 && age <= 7) {

    parseFirst = parseInt(firstName);
    parseLast = parseInt(lastName);

    // check if input in first name and last name is a character or number
    if (parseFirst.toString() == "NaN" && parseLast.toString() == "NaN") {

      //create div with unique id name
      document.getElementById('jDiv').append(newDiv);
      document.getElementById('jDiv').lastChild.setAttribute("id", "divJ" + jCounter);

      //create p and display with input fields
      document.getElementById('divJ' + jCounter).append(newP);
      let newFirst = document.createTextNode(firstName + " ");
      newP.append(newFirst);

      document.getElementById('divJ' + jCounter).append(newP);
      let newLast = document.createTextNode(lastName + " ");
      newP.append(newLast);

      document.getElementById('divJ' + jCounter).append(newP);
      let newAge = document.createTextNode(age);
      newP.append(newAge);

      jCounter++;
      document.getElementById('jCounter').innerHTML = jCounter;

    } else {

      window.alert("Please check your inputs. Name must be characters only and not numbers. Age must be a number between 4-15.");

    }

  } else if (age >= 8 && age <= 11) {

    parseFirst = parseInt(firstName);
    parseLast = parseInt(lastName);

    if (parseFirst.toString() == "NaN" && parseLast.toString() == "NaN") {

      document.getElementById('iDiv').append(newDiv);
      document.getElementById('iDiv').lastChild.setAttribute("id", "divI" + iCounter);

      document.getElementById('divI' + iCounter).append(newP);
      let newFirst = document.createTextNode(firstName + " ");
      newP.append(newFirst);

      document.getElementById('divI' + iCounter).append(newP);
      let newLast = document.createTextNode(lastName + " ");
      newP.append(newLast);

      document.getElementById('divI' + iCounter).append(newP);
      let newAge = document.createTextNode(age);
      newP.append(newAge);

      iCounter++;
      document.getElementById('iCounter').innerHTML = iCounter;

    } else {

      window.alert("Please check your inputs. Name must be characters only and not numbers. Age must be a number between 4-15.");

    }

  } else {

    parseFirst = parseInt(firstName);
    parseLast = parseInt(lastName);

    if (parseFirst.toString() == "NaN" && parseLast.toString() == "NaN") {

      document.getElementById('sDiv').append(newDiv);
      document.getElementById('sDiv').lastChild.setAttribute("id", "divS" + sCounter);

      document.getElementById('divS' + sCounter).append(newP);
      let newFirst = document.createTextNode(firstName + " ");
      newP.append(newFirst);

      document.getElementById('divS' + sCounter).append(newP);
      let newLast = document.createTextNode(lastName + " ");
      newP.append(newLast);

      document.getElementById('divS' + sCounter).append(newP);
      let newAge = document.createTextNode(age);
      newP.append(newAge);

      sCounter++;
      document.getElementById('sCounter').innerHTML = sCounter;

    } else {

      window.alert("Please check your inputs. Name must be characters only and not numbers. Age must be a number between 4-15.");

    }

  }
}
