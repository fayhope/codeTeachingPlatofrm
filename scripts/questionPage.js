function openOptions() {
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function filterOptions() {
    const searchQuery = document.getElementById('search-input').value.toLowerCase().trim();
    console.log("Search Query:", searchQuery);

    const options = document.querySelectorAll('.checkbox-list li');

    options.forEach(option => {
        const labelElement = option.querySelector('label');
        console.log("Option Label:", labelElement ? labelElement.innerText : "No label"); 

        if (labelElement) {
            const label = labelElement.innerText.toLowerCase();
            if (label.includes(searchQuery)) {
                option.style.display = '';
            } else {
                option.style.display = 'none';
            }
        }
    });
}

function optionSelected() {
    const checkboxes = document.querySelectorAll('.checkbox-list input[type="checkbox"]:checked');
    return checkboxes.length > 0;
}

function startQuiz() {
    if (!optionSelected()) {
        nothingSelected();
    } else {
    }
}

function nothingSelected() {
    console.log("No options selected.");
}

module.exports = {
    openOptions,
    closePopup,
    filterOptions,
    optionSelected,
    startQuiz,
    nothingSelected
};