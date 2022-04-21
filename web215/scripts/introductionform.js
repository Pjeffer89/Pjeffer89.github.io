// Called when form is submitted.
function formSubmit() 
{
    // Variables to hold textarea form data.  Formatted to include headings.
    var firstName = "First Name: " + document.getElementById('firstName').value;
    var lastName = "Last Name: " + document.getElementById('lastName').value;
    var personalBackground = "Personal Background: " + document.getElementById('personalBackground').value;
    var professionalBackground = "Professional Background: " + document.getElementById('professionalBackground').value;
    var academicBackground = "Academic Background: " + document.getElementById('academicBackground').value;
    var subjectBackground = "Background in this Subject: " + document.getElementById('subjectBackground').value;
    var computerPlatform = "Primary Computer Platform: " + document.getElementById('computerPlatform').value;
    var courses = "Courses I'm Taking, Why: " + document.getElementById('courses').value;
    var funnyInteresting = "Funny/Interesting item about yourself: " + document.getElementById('funnyInteresting').value;
    var alsoShare = "I'd Also Like To Share: " + document.getElementById('alsoShare').value;
    var graduationYear = document.querySelector('input[name="graduationYear"]:checked');
    
    // To pass to introOutput().
    var outputDetails = [firstName, lastName, personalBackground, professionalBackground, academicBackground, subjectBackground, computerPlatform, courses, funnyInteresting, alsoShare, outputLanguages, graduationYear];

    // Checkboxes
    var codeLanguages = document.querySelectorAll('input[name="codeLanguages"]:checked');
    var languages = [];
    codeLanguages.forEach((checkbox) => {languages.push(checkbox.value)});
    var outputLanguages = ("Code Languages: " + languages);

    // Radio
    var graduation = ('Graduating: ' + graduationYear.value);
    
    // Call function to display form data.
    introOutput(outputDetails);
}

// Called by formSubmit().
function introOutput(outputDetails) 
{
    // Clear between each form submission.
    clearDiv = document.querySelectorAll('li');
    clearDiv.forEach((li) => li.remove());
    // Iterate through form variables, creating and appending elements for each.
    for (var i = 0; i < outputDetails.length; i++) 
    {
        var element = document.createElement('li');
        var content = document.createTextNode(outputDetails[i]);
        element.appendChild(content);
        var display = document.getElementById('formOutput');
        display.appendChild(element);
    }
}