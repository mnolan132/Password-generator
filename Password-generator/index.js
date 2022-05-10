let char = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "=", ";", ":", ".", "?", "/"]

let password1 = document.getElementById("password-1")
let password2 = document.getElementById("password-2")
let password3 = document.getElementById("password-3")
let password4 = document.getElementById("password-4")

function genPassword() {
    password1.textContent = " "
    password2.textContent = " "
    password3.textContent = " "
    password4.textContent = " "
    function charSet1() {
         let randomIndex = Math.floor(Math.random() * 80)
    // return char[randomIndex]
    password1.textContent += char[randomIndex]
    }
    charSet1()
    charSet1()
    charSet1()
    charSet1()
    charSet1()
    charSet1()
    charSet1()
    charSet1()
    charSet1()
    charSet1()
    charSet1()
    charSet1()
   function charSet2() {
         let randomIndex = Math.floor(Math.random() * 80)
    // return char[randomIndex]
    password2.textContent += char[randomIndex]
    }
    charSet2()
    charSet2()
    charSet2()
    charSet2()
    charSet2()
    charSet2()
    charSet2()
    charSet2()
    charSet2()
    charSet2()
    charSet2()
    charSet2()
    function charSet3() {
         let randomIndex = Math.floor(Math.random() * 80)
    // return char[randomIndex]
    password3.textContent += char[randomIndex]
    }
    charSet3()
    charSet3()
    charSet3()
    charSet3()
    charSet3()
    charSet3()
    charSet3()
    charSet3()
    charSet3()
    charSet3()
    charSet3()
    charSet3()
    function charSet4() {
         let randomIndex = Math.floor(Math.random() * 80)
    // return char[randomIndex]
    password4.textContent += char[randomIndex]
    }
    charSet4()
    charSet4()
    charSet4()
    charSet4()
    charSet4()
    charSet4()
    charSet4()
    charSet4()
    charSet4()
    charSet4()
    charSet4()
    charSet4() 
}

// password2.textContent = genPassword()[8]
