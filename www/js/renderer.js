let times = -1;

function HttpRequest(method, url, username, password, xhr) {
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log(xhr.responseText);
            if (xhr.responseText == "1") {
                window.open('main.html', '_self')


            } else {
                document.getElementById('response').innerHTML = "Username or Password are set wrong";
                console.log("error");
            }
        }
    }
    xhr.open(method, url, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send('username=' + username + '&password=' + password);
    xhr.onload = function() {
        console.log("connected to " + url);
    }
}

function send_data(what) {
    const xhr = new XMLHttpRequest();
    let method = 'POST';
    if (what == false) {
        let url = 'https://localhost:83/server/login.php'; //url of the php server(must be https:// (secure) in order to make the connection using cordova app)
        let password = document.getElementById('password').value;
        let username = document.getElementById('username').value;
        HttpRequest(method, url, username, password, xhr);
    }
    if (what == true) {
        let url = 'https://localhost:83/server/unlock.php'; //url of the php server(must be https:// (secure) in order to make the connection using cordova app)

        times++;
        if (times % 2 == 0) {
            unlock(method, url, xhr, true);
        } else {
            unlock(method, url, xhr, false);
        }
    }
}

function unlock(method, url, xhr, unlock_state) {
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log(xhr.responseText);
        }
    }
    xhr.open(method, url, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send('unlock_state=' + unlock_state)
    xhr.onload = function() {
        console.log("connected to " + url);
    }
}
