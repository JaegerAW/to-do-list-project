let myProjects = JSON.parse(localStorage.getItem('projects')) || [
    {   
        id: 0,
        name: "Go to supermarket",
        due: "12/2/25",
        tasks: [
                    {
                        name: "Buy apples",
                        priority: "high"
                    },
                    {
                        name: "Buy Eggs",
                        priority: "medium"
                    }
                ]
    },
    {
        id: 1,
        name: "Clean the house",
        due: "13/2/25",
        tasks: [
                    {
                        id: 0,
                        name: "Sweep and mop the floor",
                        priority: "high"
                    },
                    {
                        id: 1,
                        name: "Do laundry",
                        priority: "high"
                    }
                ]
    }
];

export { myProjects };

//COBA! const storedProjects = localStorage.setItem('projects', JSON.stringify(myProjects));

//localStorage.setItem('projects', JSON.stringify(myProjects));

/*

myProjects.push(1);
localStorage.setItem('projects', JSON.stringify(myProjects));
myProjects.pop();
localStorage.setItem('projects', JSON.stringify(myProjects));
//dont set item here, as project will always get updated when refreshed;
*/

//when i delete from local storage, renderMain doesnt show updated version as it renders myProjects.
//add project function should be here. get the dom for the form to add project here too
