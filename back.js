document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const searchValue = document.getElementById('searchInput').value.toLowerCase();
    fetch('data.csv') // Yeh aapki CSV file ka path hai
        .then(response => response.text())
        .then(data => {
            const rows = data.split('\n');
            let resultHtml = '';
            rows.forEach(row => {
                const cols = row.split(',');
                const name = cols[1].toLowerCase();
                const phone = cols[2];

                if (name.includes(searchValue) || phone.includes(searchValue)) {
                    resultHtml += `<p>Tracking Number: ${cols[0]} | Name: ${cols[1]} | Phone: ${cols[2]} | Address: ${cols[3]} | Price: ${cols[4]}</p>`;
                }
            });

            document.getElementById('result').innerHTML = resultHtml || 'No results found.';
        });
});
