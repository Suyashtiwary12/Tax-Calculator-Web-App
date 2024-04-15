document.addEventListener("DOMContentLoaded", () => {
    const grossIncome = document.getElementById("floatingGross");
    const extraIncome = document.getElementById("floatingExtra");
    const deductions = document.getElementById("floatingDeductions");
    const ageGrp = document.getElementById("ageField")
    const options = document.querySelectorAll('.opt');
    const form = document.getElementById("form");
    const button = document.getElementById("floatingAge");
    const answer = document.getElementById("answer-horizontal");
    const answerBox = document.getElementById("answer-box");
    const close = document.getElementById("close-button");
    const main = document.getElementById("main-container");
    const warnGross=document.getElementById("warn-gross");
    const warnExtra=document.getElementById("warn-extra");
    const warnAge=document.getElementById("warn-age");
    const warnDeduction=document.getElementById("warn-deduction");
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });

    let grossIncomeValue = 0;
    let grossExtraValue = 0;
    let DeductionValue = 0;
    let netIncome = 0;
    let selectedOption = '';

    options.forEach(option => {
        option.addEventListener('click', () => {

            selectedOption = option.textContent.trim();
            ageGrp.innerHTML = selectedOption;

        });
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        grossIncomeValue = parseFloat(grossIncome.value);
        grossExtraValue = parseFloat(extraIncome.value);
        DeductionValue = parseFloat(deductions.value);
        netIncome = grossIncomeValue + grossExtraValue - DeductionValue;

        if (isNaN(grossIncomeValue)) {
            grossIncome.style.borderColor="red";
            warnGross.classList.remove('d-none')
            
            
        } else {
            grossIncome.style.borderColor="";
            
        }

        if (isNaN(grossExtraValue)) {
            extraIncome.style.borderColor="red";
            warnExtra.classList.remove('d-none')
        } else {
            extraIncome.style.borderColor="";
        }
        if (!selectedOption) {
            button.style.borderColor="red";
            warnAge.classList.remove('d-none')
        } else {
            button.style.borderColor="";
        }

        if (isNaN(DeductionValue)) {
            deductions.style.borderColor="red";
            warnDeduction.classList.remove('d-none')
        } else {
            deductions.style.borderColor="";
        }

        if (netIncome >= 800000) {
            if (selectedOption === "less than 40") {

                let taxDeduction = 0.3 * (netIncome - 800000);
                let ans=netIncome-taxDeduction;
                answer.innerHTML = ans;
            } else if (selectedOption === "greater than and equal to 40 but less than 60") {

                let taxDeduction = 0.4 * (netIncome - 800000);
                let ans=netIncome-taxDeduction;
                answer.innerHTML = ans;
                answer.innerHTML = ans;
            } else if (selectedOption === "greater than equal to 60"){
                
                let taxDeduction = 0.1 * (netIncome - 800000);
                let ans=netIncome-taxDeduction;
                answer.innerHTML = ans;
                answer.innerHTML = ans;
            }
            main.style.display = "none"
            answerBox.classList.remove('d-none');

        }
        close.addEventListener("click", () => {
            main.style.display = "block";
            answerBox.classList.toggle('d-none')
        });
    });
});
