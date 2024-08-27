
function calcAge() {

    const YEAR = 31536000000;

    const today = new Date();
    console.log('today:', today)
    const birthday = new Date(document.getElementById('dateInput').value);
    console.log('birthday:', birthday)
    if (birthday > today || birthday===null) {
        alert('you cant do that!')
        
    } else {
        const ageInYears = (today - birthday) / YEAR
        console.log('ageInYears:', ageInYears)
        const ageInMonths = ageInYears * 12
        console.log('ageInMonths:', ageInMonths)
        const ageInDays = ageInYears * 365
        console.log('ageInDays:', ageInDays)
        const ageInHours = ageInDays * 24
        console.log('ageInHours:', ageInHours)
        const ageInMinutes = ageInHours * 60
        console.log('ageInMinutes:', ageInMinutes)
        
        document.getElementById('age').innerHTML = ageInYears.toFixed(1);
        document.getElementById('monthsAge').innerHTML =ageInMonths.toFixed(1);
        document.getElementById('daysAge').innerHTML =ageInDays.toFixed(1);
        document.getElementById('hoursAge').innerHTML =ageInHours.toFixed(1);
        document.getElementById('minutesAge').innerHTML =ageInMinutes.toFixed(2);
        document.getElementById('output').style.display = 'block';
    }

}