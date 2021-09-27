function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  function createNewEducation() {
      // creating a DIV element.
      var txtNewInputBox = document.createElement('div');

      // adding a new input box of the element.
      txtNewInputBox.innerHTML = "<input class='input1' type='text' placeholder='Institution'> <br> <input class='input1' type='text' placeholder='Subject'> <br> <input class='input1' type='text' placeholder='Score'> <br> <br>";

      // putting it where it is supposed to appear.
      document.getElementById("newElementId").appendChild(txtNewInputBox);
  }

  function createNewExperience() {
      // creating a DIV element.
      var txtNewInputBox2 = document.createElement('div');

      // adding a new input box of the element.
      txtNewInputBox2.innerHTML = "<input class='input1' type='text' placeholder='Company Name'> <br> <input class='input1' type='text' placeholder='Position'> <br> <input class='input1' type='text' placeholder='Duration'> <br> <br>";

      // putting it where it is supposed to appear.
      document.getElementById("newElementId2").appendChild(txtNewInputBox2);
  }
 