let input = prompt("Please enter todos");
const allTasks = [];

if (input === "quit") {
  console.log("Ok! You quit!");

}
  while (input !== null && input !== "quit") {

    if (input === "new") {
      let task = prompt("What will you add to the list");
      allTasks.push(task);
      console.log(`${task} added to your list`);
    
    } else if (input === "list") {
        console.log('***************');
        for (const task of allTasks) {
      console.log(`${allTasks.indexOf(task)}: ${task} `);
        }
        console.log('*****************');    
    } else if (input === "delete") {

      let task = prompt("Please enter what you want to delete");
      let el = allTasks.indexOf(task);
      allTasks.splice(el,1);
      console.log(`${task} deleted from your list`);
    }
    input = prompt("Please enter todos")
  
}
