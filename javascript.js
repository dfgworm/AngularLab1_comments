commentList = document.getElementById("commentList")
commentForm = document.getElementById("commentForm")

function commentSubmit() {
	clearErrors()
	let email = commentForm.querySelector("[name = email]").value
	let textBody = commentForm.querySelector("[name = textBody]").value
	
	if (validateComment(email, textBody)) {
		let rateElements = commentForm.querySelectorAll("[name = rate]")
		let rate = "3"
		for (var i=0; i < rateElements.length; i++) {
			if (rateElements[i].checked) {
				rate = rateElements[i].value
				break
			}
		}
		commentList.innerHTML = commentList.innerHTML + constructComment(email, textBody, rate)
		commentForm.reset()
	}
	else {
		
	}
}

function clearErrors() {
	let elements = commentForm.querySelectorAll(".error")
	for (var i=0; i < elements.length; i++) {
		elements[i].innerText = ""
	}
}

function validateComment(email, text) {
	let emailValid = validateEmail(email)
	if (!emailValid) {
		commentForm.querySelector("[name = emailError]").innerText = "Invalid email!"
	}
	let textValid = text.length >= 3 && text.length <= 100
	if (!textValid) {
		commentForm.querySelector("[name = textError]").innerText = "Text must be between 3 and 100 symbols"
	}
	return emailValid && textValid
}

var emailRegexp = /^[^@]+@[^@]+\.[^@.]+$/
function validateEmail(email) {
	return emailRegexp.test(email)
}

function constructComment(email, text, rate) {
	var date = new Date()
	return "<li>E-mail: " + email + "<br>" + text + "<br>Rated: " + rate + "<br>" +
		date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear() +
		"<br>" + date.getHours()+":"+date.getMinutes()+":"+date.getSeconds() +
		"</li><br><br>"
}
