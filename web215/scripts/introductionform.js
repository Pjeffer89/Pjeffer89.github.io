// Called when form is submitted.
function formSubmit() 
{
    // Variables to hold form data.  Formatted to include headings.
    let personalBackground = "Personal Background: " + document.getElementById('personalBackground').value;
    let professionalBackground = "Professional Background: " + document.getElementById('professionalBackground').value;
    let academicBackground = "Academic Background: " + document.getElementById('academicBackground').value;
    let subjectBackground = "Background in this Subject: " + document.getElementById('subjectBackground').value;
    let computerPlatform = "Primary Computer Platform: " + document.getElementById('computerPlatform').value;
    let courses = "Courses I'm Taking, Why: " + document.getElementById('courses').value;
    let funnyInteresting = "Funny/Interesting item about yourself: " + document.getElementById('funnyInteresting').value;
    let alsoShare = "I'd Also Like To Share: " + document.getElementById('alsoShare').value;
    let outputDetails = [personalBackground, professionalBackground, academicBackground, subjectBackground, computerPlatform, courses, funnyInteresting, alsoShare];
    
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
    for (let i = 0; i < outputDetails.length; i++) 
    {
        let element = document.createElement('li');
        let content = document.createTextNode(outputDetails[i]);
        element.appendChild(content);
        let display = document.getElementById('formOutput');
        display.appendChild(element);
    }
}