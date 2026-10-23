
let notes = JSON.parse(localStorage.getItem("notes")) || [];

function addNote() {
    let title = document.getElementById("title").value.trim();
    let content = document.getElementById("content").value.trim();
    let message = document.getElementById("message");

    if (title === "" || content === "") {
        message.textContent = "Please enter a title and note.";
        return;
    }

    let note = {
        id: Date.now(),
        title: title,
        content: content
    };

    notes.push(note);

    saveNotes();

    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
    message.textContent = "Note saved successfully!";

    displayNotes();
}

function displayNotes() {
    let notesList = document.getElementById("notesList");

    notesList.innerHTML = "";

    if (notes.length === 0) {
        notesList.textContent = "No notes yet. Create your first note!";
        return;
    }

    notes.forEach(function(note) {
        let noteDiv = document.createElement("div");
        noteDiv.className = "note";

        let heading = document.createElement("h3");
        heading.textContent = note.title;

        let paragraph = document.createElement("p");
        paragraph.textContent = note.content;

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-btn";

        deleteButton.onclick = function() {
            deleteNote(note.id);
        };

        noteDiv.appendChild(heading);
        noteDiv.appendChild(paragraph);
        noteDiv.appendChild(deleteButton);

        notesList.appendChild(noteDiv);
    });
}

function deleteNote(id) {
    notes = notes.filter(function(note) {
        return note.id !== id;
    });

    saveNotes();
    displayNotes();
}

function saveNotes() {
    localStorage.setItem("notes", JSON.stringify(notes));
}

displayNotes();
