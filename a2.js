/*********************************************************************************
*  WEB700 – Assignment 2
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Emmanuel Attah Student ID: 126016237 Date: 2/2/2024
*
********************************************************************************/
const dataModule = require('./modules/collegeData');

dataModule.initialize()
  .then((initSuccessMsg) => {
    console.log(initSuccessMsg);

    // Testing functions
    dataModule.getAllStudents()
      .then((students) => console.log( students))
      .catch((err) => console.error("Error getting all students:", err));

    dataModule.getCourses()
      .then((courses) => console.log( courses))
      .catch((err) => console.error("Error getting courses:", err));

    dataModule.getTAs()
      .then((TAs) => console.log( TAs))
      .catch((err) => console.error("Error getting TAs:", err));
  })
  .catch((initErrorMsg) => console.error("Initialization error:", initErrorMsg));

