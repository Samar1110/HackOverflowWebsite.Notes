// To show stored notes

showNotes();

// When user adds a note, it add to the localStorage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function(error) {
	let addTxt = document.getElementById("addTxt");
	let notes = localStorage.getItem("notes");

	if (notes == null) noteUserObj = [];
	else noteUserObj = JSON.parse(notes);


	noteUserObj.push(addTxt.value);

	localStorage.setItem("notes", JSON.stringify(noteUserObj));

	addTxt.value = "";

	showNotes();
});

// Function to show stored elements from localStorage
function showNotes() {
	let notes = localStorage.getItem("notes");

	if (notes == null) noteUserObj = [];
	else noteUserObj = JSON.parse(notes);

	let html = "";

	noteUserObj.forEach(function(element, index) {
		html += `<div class="noteCard my-2 mx-2 card"
			style="width: 18rem;">
				<div class="card-body">
					<h5 class="card-title">
						Note ${index + 1}
					</h5>
					<p class="card-text">
						${element}
					</p>

				<button id="${index}" onclick=
					"deleteUserNote(this.id)"
					class="btn deleteBtn" style="color:white;background-color:#0088fe">
					Delete Note
				</button>
			</div>
		</div>`;
	});

	let notesElm = document.getElementById("notes");

	if (noteUserObj.length != 0) notesElm.innerHTML = html;
	else
		notesElm.innerHTML = `Nothing to show here!
		Use "Add a Note" section above to add your own notes.`;
}

// Function created to delete your note
function deleteUserNote(index) {
	let notes = localStorage.getItem("notes");

	if (notes == null) noteUserObj = [];
	else noteUserObj = JSON.parse(notes);

	noteUserObj.splice(index, 1);

	localStorage.setItem("notes",
		JSON.stringify(noteUserObj));

	showNotes();
}