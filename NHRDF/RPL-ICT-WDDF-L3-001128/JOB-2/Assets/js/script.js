// function updateDateTime() {
//     const now = new Date();

//     const options = {
//         year: 'numeric',
//         month: 'long',
//         day: 'numeric',
//         hour: '2-digit',
//         minute: '2-digit',
//         second: '2-digit',
//         hour12: true,
//         timeZone: 'Asia/Dhaka' // Set timezone to Bangladesh
//     };

//     const formattedDate = now.toLocaleString('en-BD', options);

//     document.getElementById('datetime').textContent = formattedDate;
// }

// // Update the date and time immediately
// updateDateTime();
// // Update the date and time every second
// setInterval(updateDateTime, 1000);

const updateDate = () => {
    const now = new Date()
    document.getElementById('datetime').textContent = now.toLocaleString();
}

setInterval(updateDate, 1000)