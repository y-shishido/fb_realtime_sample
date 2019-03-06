function saveMessage(name, message) {
    return firebase.database().ref('messages').push({
        name: name,
        message: message
    }).catch(function(error) {
        console.error('Error writing new message to Firebase Database', error);
    });
}

window.addEventListener('load', function() {
    let commentsRef = firebase.database().ref('messages');
    commentsRef.on('child_added', function(snapshot) {
        let table = document.getElementById("messageTable");
        let row = table.insertRow(-1);
        let data = snapshot.val();
        let name = data.name;
        let message = data.message;
        row.innerHTML = '<td>' + name + '</td>' + '<td>' + message + '</td>';
    })
});
