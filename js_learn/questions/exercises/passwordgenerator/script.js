// this is a password generator
class Password {
    password2() {
        let password1 = "";
        const a = Math.ceil(Math.random() * 6);
        for (let i = 0; i < a; i++) {
            password1 += String.fromCharCode(97 + Math.floor(Math.random() * 26));
        }

        let b = Math.ceil(Math.random() * 6);
        if (a + b >= 8) {
            b = 1;
        }
        for (let i = 0; i < b; i++ ) {
            password1 += String.fromCharCode(65 + Math.floor(Math.random() * 26));
        }

        let c = Math.ceil(Math.random() * 6);
        if (a + b + c >= 8) {
            c = 1;
        }
        for (let i = 0; i < c; i++) {
            password1 += String.fromCharCode(33 + Math.floor(Math.random() * 15));
        }

        console.log(a, b, c);
        console.log(password1);
    }
}

const pass = new Password();
pass.password2();