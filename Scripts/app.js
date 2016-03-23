// Custom JS scripts
/*  app.js  created by Devon Daviau for
 devondaviau-comp1073-assignment01.azurewebsites.net */
(function(){
    "use strict";
    console.log("App Started . . .");

    //These variables store form data
    var firstName = document.getElementById("first_name");
    var lastName = document.getElementById("last_name");
    var email = document.getElementById("email");
    var message = document.getElementById("message");
    // submitButton variable to target form submit button
    var submitButton = document.getElementById("submitButton");

    /* This function takes the values from the contact form and
     output them to the console when the submit button is clicked */
    submitButton.addEventListener("click", function(){
        console.log("First Name: " + firstName.value);
        console.log("Last Name: " + lastName.value);
        console.log("Email: " + email.value);
        console.log("Message: " + message.value);
    });

    //// Function for inserting bio information.
    //function insertBio(){
    //    console.log("Inside insertBio function.");
    //    var bioContent;
    //    bioContent = document.getElementById("bio");
    //    bioContent.innerHTML = "<p>I was born in beautiful Barrie, Ontario, and left at a young age to explore the U.S. of A. In my fifteen years there, I lived in Oregon,  North Carolina, and the U.P. of Michigan. Since 2000, I have been back in Ontario.</p><p>I have held many jobs in my life, starting with the distinguished trade of horse-stall cleaner when I was 15. There have been construction jobs, food-service jobs, retail, and administrative jobs. I have finally found what I consider to be a career path that will truly interest and challenge me: WEB DEVELOPMENT.</p><p>I really enjoy that development for the world-wide web can be both technical and creative at the same time. I truly enjoy solving problems, and that is what development is all about. There is also team work and independent work. Web development is a flexible career path that requires a flexible participant. For someone who is curious and enjoys learning like I do, this is ideal.</p>";
    //}
    //
    //function insertProjectOne(){
    //    console.log("Inside insertProjectOne function.");
    //    var projectOneContent;
    //    projectOneContent = document.getElementById("project-1");
    //    projectOneContent.innerHTML = "Retro Brylcreem Website";
    //}
    //
    //function insertProjectTwo(){
    //    console.log("Inside insertProjectTwo function.");
    //    var projectTwoContent;
    //    projectTwoContent = document.getElementById("project-2");
    //    projectTwoContent.innerHTML = "Personas and Use-Cases";
    //}
    //
    //function insertProjectThree(){
    //    console.log("Inside insertProjectThree function.");
    //    var projectThreeContent;
    //    projectThreeContent = document.getElementById("project-3");
    //    projectThreeContent.innerHTML = "Clash of Cthulhu";
    //}
    //
    //// Call replaceFirstParagraph function defined above.
    //insertBio();
    //
    //// Call insertProjectOne function defined above.
    //insertProjectOne();
    //
    //// Call insertProjectTwo function defined above.
    //insertProjectTwo();
    //
    //// Call insertProjectThree function defined above.
    //insertProjectThree();

})();