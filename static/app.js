document.addEventListener('DOMContentLoaded', function () {
    fetch('/fetch_excel_data')
        .then(response => response.json())
        .then(data => {
            console.log('Fetched Data:', data);  // Check the structure of the fetched data
            
            const tableBody = document.querySelector('#excelTable tbody');
            tableBody.innerHTML = '';  // Clear existing table rows

            data.forEach(row => {
                const newRow = document.createElement('tr');

                newRow.innerHTML = `
                   <td>${row['SR.NO'] || ''}</td>
                   <td>${row['UNIT/ COMPONENTS'] || ''}</td>
                   <td>${row['LUBRICANTS'] || ''}</td>
                   <td>${row['INTERVAL'] || ''}</td>
                   <td>${row['QTY'] || ''}</td>
                   <td>${row['LAST DONE '] || ''}</td> <!-- Add trailing space in key -->
                   <td>${row['DUE DATE '] || ''}</td> <!-- Add trailing space in key -->
                   <td>${row['DONE DATE '] || ''}</td>
                   <td>${row['APPROVED '] || ''}</td>
                   <td>${row['REJECTED '] || ''}</td>
                `;

                tableBody.appendChild(newRow);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
