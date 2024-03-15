const panels = document.querySelectorAll('.panel'); // Select all panels in a node list

/* ---------------------------------------------------------------------------------- */

panels.forEach( (panel) => 
{ 
    // Loop through each panel and add an event listener to each panel
    panel.addEventListener('click', () => 
    { 
        removeActiveClasses(); // Call the removeActiveClasses function
        panel.classList.add('active'); // Add the active class to the clicked panel
    })
})

/* ---------------------------------------------------------------------------------- */

function removeActiveClasses()
{
    panels.forEach( (panel) => 
    {
        panel.classList.remove('active'); // Remove the active class from all panels
    })
}

/* ---------------------------------------------------------------------------------- */