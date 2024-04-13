// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

let submit_button = document.getElementById("submit-button")
submit_button.addEventListener("click", replace_content)

let contact_page = document.getElementById("contact-page")

function replace_content(){
    contact_page.innerHTML = "<p style='font-size: 24px'>Thank you for your message</p>"
}