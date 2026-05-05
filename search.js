const searchInput = document.querySelector(".search-box input");
const searchBtn = document.getElementById("searchBtn");
const courses = document.querySelectorAll(".course-card");

function filterCourses() {
    let searchValue = searchInput.value.toLowerCase();

    courses.forEach(course => {
        let title = course.querySelector(".card-title").textContent.toLowerCase();
        let instructor = course.querySelector(".card-instructor span").textContent.toLowerCase();

        if (title.includes(searchValue) || instructor.includes(searchValue)) {
            course.style.display = "block";
        } else {
            course.style.display = "none";
        }
    });
}

searchInput.addEventListener("keyup", filterCourses);

if (searchBtn) {
    searchBtn.addEventListener("click", filterCourses);
}