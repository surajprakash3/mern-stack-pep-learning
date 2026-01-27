function addtask() {
    let date = document.getElementById('date').value;
    let task = document.getElementById('task').value;
    let level = document.getElementById('choose').value;

    if (date === "" || task === "") {
        alert("Please fill all fields");
        return;
    }

    // create table row
    let tr = document.createElement("tr");

    tr.innerHTML = `
        <td>${date}</td>
        <td>${task}</td>
        <td>${level}</td>
        <td><button onclick="taskdone(this)">Done</button></td>
    `;

    // add row to active table
    document.getElementById("atask").appendChild(tr);

    // clear task input
    document.getElementById("task").value = "";
}

function taskdone(btn) {
    // get row
    let row = btn.parentElement.parentElement;

    // remove action column
    row.removeChild(row.lastElementChild);

    // move row to completed table
    document.getElementById("adone").appendChild(row);
}
