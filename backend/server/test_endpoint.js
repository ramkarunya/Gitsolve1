const url = 'http://localhost:3001/api/analyze';
const data = { repoUrl: 'rahulsp19/Test_repo1' };

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
  .then(response => response.json())
  .then(data => {
    console.log("Issues Detected:", data.issues?.length);
    console.log("Metrics:", JSON.stringify(data.metrics, null, 2));
    if(data.issues && data.issues.length === 0) {
        console.log("Raw Response Data:", JSON.stringify(data, null, 2));
    } else {
        console.log(JSON.stringify(data.issues, null, 2));
    }
  })
  .catch((error) => console.error('Error:', error));
