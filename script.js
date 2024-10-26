document.getElementById('searchButton').addEventListener('click', function() {
    const inputNumber = document.getElementById('searchInput').value;
    const resultDiv = document.getElementById('result');

    // Fetch the CSV file
    fetch('data.csv')
        .then(response => response.text())
        .then(data => {
            const rows = data.split('\n');
            let found = false;
            resultDiv.innerHTML = ''; // Clear previous results

            for (let i = 1; i < rows.length; i++) { // Start from 1 to skip headers
                const columns = rows[i].split(',');
                // Check if input number matches Contact or Customer name
                if (columns[1].toLowerCase() === inputNumber.toLowerCase() || columns[3] === inputNumber) {
                    found = true;
                    resultDiv.innerHTML += `
                        <p><strong>CN:</strong> ${columns[0]}</p>
                        <p><strong>Customer:</strong> ${columns[1]}</p>
                        <p><strong>Address:</strong> ${columns[2]}</p>
                        <p><strong>Contact:</strong> ${columns[3]}</p>
                        <p><strong>COD:</strong> ${columns[4]}</p>
                    `;
                }
            }
            if (!found) {
                resultDiv.innerHTML = '<p>No results found.</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching the CSV file:', error);
        });
});