document.getElementById("check-username").addEventListener("click", function() {
    const username = document.getElementById("username").value;
    const usernameResult = document.getElementById("username-result");
    const existingUsers = JSON.parse(localStorage.getItem("users")) || ["user1", "admin", "guest"];
    
    if (existingUsers.includes(username)) {
        usernameResult.textContent = "이미 사용 중인 아이디입니다.";
        usernameResult.style.color = "red";
    } else {
        usernameResult.textContent = "사용 가능한 아이디입니다.";
        usernameResult.style.color = "green";
    }
});

document.getElementById("password").addEventListener("input", function() {
    const password = document.getElementById("password").value;
    const passwordHint = document.getElementById("password-hint");
    const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/;
    
    if (!regex.test(password)) {
        passwordHint.textContent = "비밀번호는 최소 8자, 숫자와 특수문자를 포함해야 합니다.";
        passwordHint.style.color = "red";
    } else {
        passwordHint.textContent = "사용 가능한 비밀번호입니다.";
        passwordHint.style.color = "green";
    }
});

document.getElementById("confirm-password").addEventListener("input", function() {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const passwordMatch = document.getElementById("password-match");
    
    if (password !== confirmPassword) {
        passwordMatch.textContent = "비밀번호가 일치하지 않습니다.";
        passwordMatch.style.color = "red";
    } else {
        passwordMatch.textContent = "비밀번호가 일치합니다.";
        passwordMatch.style.color = "green";
    }
});

document.getElementById("register").addEventListener("click", function() {
    const username = document.getElementById("username").value;
    let users = JSON.parse(localStorage.getItem("users")) || ["user1", "admin", "guest"];
    
    if (!users.includes(username)) {
        users.push(username);
        localStorage.setItem("users", JSON.stringify(users));
        alert("회원가입이 완료되었습니다.");
    } else {
        alert("이미 사용 중인 아이디입니다.");
    }
});