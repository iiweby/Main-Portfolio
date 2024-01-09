const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

const toggleMenu = () => {
	btn.classList.toggle("open");
	nav.classList.toggle("hidden");
	nav.classList.toggle("flex");
};

btn.addEventListener("click", () => {
	toggleMenu();
});

// Add event listeners to each link inside the mobile menu to close the menu
const mobileMenuLinks = document.querySelectorAll("#menu a");
mobileMenuLinks.forEach((link) => {
	link.addEventListener("click", () => {
		if (nav.classList.contains("flex")) {
			toggleMenu();
		}
	});
});

const closeModal = () => {
	const modal = document.getElementById("myModal");
	modal.classList.add("hidden");
};

// Add event listener to the "Close" button inside the success message
const successCloseButton = document.getElementById("closeModal2");
successCloseButton.addEventListener("click", () => {
	closeModal(); // Close the entire modal when the "Close" button inside the success message is clicked
});

// Add event listener to the document body to close the menu when clicking outside
document.body.addEventListener("click", (event) => {
	if (
		!nav.contains(event.target) &&
		event.target !== btn &&
		nav.classList.contains("flex")
	) {
		toggleMenu();
	}
});

// Contact Me Pop Up

document.addEventListener("DOMContentLoaded", function () {
	const openModalButton = document.getElementById("openModal");
	const closeModalButton = document.getElementById("closeModal");
	const modal = document.getElementById("myModal");
	const contactMeAnchor = document.getElementById("contactMe");
	const heroContactAnchor = document.getElementById("heroContact");

	openModalButton.addEventListener("click", () => {
		modal.classList.remove("hidden");
	});

	closeModalButton.addEventListener("click", function () {
		modal.classList.add("hidden");
	});

	heroContactAnchor.addEventListener("click", function (event) {
		event.preventDefault(); // Prevent default anchor behavior
		modal.classList.remove("hidden");
	});

	contactMeAnchor.addEventListener("click", function (event) {
		event.preventDefault(); // Prevent default anchor behavior
		modal.classList.remove("hidden");
	});

	// Close the modal if the user clicks outside of it
	window.addEventListener("click", function (event) {
		if (event.target === modal) {
			modal.classList.add("hidden");
		}
	});
});

window.addEventListener("scroll", function () {
	const navbar = document.querySelector(".navbar");
	if (window.scrollY > 0) {
		navbar.classList.remove("bg-transparent");
		navbar.classList.add("bg-blue-500");
	} else {
		navbar.classList.add("bg-transparent");
		navbar.classList.remove("bg-blue-500");
	}
});

document
	.getElementById("aboutMeLink")
	.addEventListener("click", function (event) {
		event.preventDefault();
		document
			.getElementById("aboutMe")
			.scrollIntoView({ behavior: "smooth", block: "center" });
	});
document
	.getElementById("projectLink")
	.addEventListener("click", function (event) {
		event.preventDefault();
		document
			.getElementById("projects")
			.scrollIntoView({ behavior: "smooth", block: "center" });
	});

document
	.getElementById("resumeLink")
	.addEventListener("click", function (event) {
		event.preventDefault();
		document
			.getElementById("resume")
			.scrollIntoView({ behavior: "smooth", block: "center" });
	});
