$('.enter').on('click', function () {
  let content = document.querySelector('#remindContent').value;
  let newNote = document.createElement('li');
  let reminder = document.querySelector('.reminderList');

  newNote.innerHTML = content;
  reminder.append(newNote);

  content = '';
});
