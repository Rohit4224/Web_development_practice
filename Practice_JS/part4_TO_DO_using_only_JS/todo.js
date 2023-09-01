let todo = [];
let idx;

//console.log(todo);
while(1)
{
    let rqst = prompt("Enter the request");
    if (rqst == "quit")
    {
        console.log("See you later, Have a good day.!")
        break;
    }
    else if (rqst == "list")
    {
        if (todo.length === 0)
            console.log("Nothing to print, add something");
        console.log("______________________");
        /* for (task of todo)
            console.log(task); */
        for (let i = 0; i < todo.length; i++)
            console.log(i + ` ${todo[i]}`);
    }
    else if (rqst == "delete")
    {
        idx = prompt("Enter the Index number of the element that you want to delete.")
        todo.splice(idx, 1);
        console.log("Your todo is DELETED.");
    }
    else if (rqst == "add")
    {
        idx = prompt("Enter the todo you want to create");
        todo.push(idx);
        console.log("Your todo is ADDED")
    }
    else
        console.log("BAD REQUEST");
}