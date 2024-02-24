const buttons = document.getElementsByClassName("btn");
const screen = document.getElementsByClassName("calculator-screen")[0]; 

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
        if (buttons[i].innerText === "AC") {
            screen.value = ""; 
        } else if (buttons[i].innerText === "=") {
            try {
                screen.value = eval(screen.value); 
            } catch (error) {
                screen.value = "Error"; 
            }
        } else {
            screen.value += buttons[i].innerText; 
        }
    });
}
