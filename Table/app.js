const formElement = document.querySelector('form')
const nameInput = document.querySelector('#name')
const mathInput = document.querySelector('#math')
const lectureInput = document.querySelector('#lecture')
const engInput = document.querySelector('#eng')
const container = document.querySelector('tbody')
const searchInput = document.querySelector('#search')
const searchButton = document.querySelector('button.search')
const sortButton = document.querySelector('.sort')
const sortInput = document.querySelector('#sort')

var students = []
function Student(name, math, lec, eng, average) {
    this.name = name
    this.lec = lec
    this.math = math
    this.eng = eng
    this.average = average
}
formElement.onsubmit = function () {
    const average = ((Number(mathInput.value) + Number(lectureInput.value) + Number(engInput.value)) / 3).toFixed(1)
    const std = new Student(nameInput.value, mathInput.value, lectureInput.value, engInput.value, average)
    students.push(std)
    render(students)
}
searchButton.onclick = function () {
    const student = searchInput.value.toLowerCase()
    search(student)
}
sortButton.onclick = function () {
    sort(sortInput.value)
}
function render(students) {
    let row = document.createElement('tr')
    let html = ''
    for (student of students) {
        html += `<tr>
            <td class="name">${student.name}</td>
            <td class="math">${student.math}</td>
            <td class="lecture">${student.lec}</td>
            <td class="eng">${student.eng}</td>
            </tr>
        `
    }
    container.innerHTML = html
}
function search(student) {
    if (student) {
        let stds =
            students.filter((value, index) => {
                let name = value.name.toLowerCase()
                return name.includes(student)
            })
        render(stds)
    }
    else render(students)
}
function sort(mood) {
    let stds = [...students]
    if (mood == 0)
        stds.sort(function (std1, std2) {
            if (std1.average > std2.average) return 1
            else return -1
        })
    else
        stds.sort(function (std1, std2) {
            if (std1.average < std2.average) return 1
            else return -1
        })
    console.log(stds)
    render(stds)
}