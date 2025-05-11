// Sample data for true and false rumors with links to real articles
const rumors = {
    true: [
        {
            text: "India wins Asia Cup 2023",
            link: "https://www.indiatoday.in/sports/cricket/story/india-vs-sri-lanka-asia-cup-2023-final-rohit-sharma-2nd-title-captain-ms-dhoni-azharuddin-2436908-2023-09-17"
        },
        {
            text: "India's first solar mission launched",
            link: "https://www.indiatoday.in/india/story/aditya-l-1-india-solar-mission-isro-launch-wishes-congratulations-2430037-2023-09-02"
        },
        {
            text: "PM Modi launches PM Vishwakarma scheme",
            link: "https://www.thehindu.com/news/national/pm-launches-vishwakarma-scheme-on-vishwakarma-jayanti/article67305153.ece"
        }
    ],
    false: [
        {
            text: "Free government laptops for all citizens",
            link: null // Fake news, no real link
        },
        {
            text: "India banned all social media",
            link: null // Fake news, no real link
        },
        {
            text: "Adityanath Yogi providing free laptops",
            link: null // Fake news, no real link
        }
    ]
};

// Function to check the rumor and display the trust score
function checkRumor() {
    const input = document.getElementById("rumorInput").value;
    const resultDiv = document.getElementById("result");

    resultDiv.classList.remove('show'); // Hide the result first

    setTimeout(() => {
        let found = false;

        // Check if the rumor is true
        rumors.true.forEach(rumor => {
            if (rumor.text.toLowerCase() === input.toLowerCase()) {
                found = true;
                resultDiv.innerHTML = `<span style='color: green;'>True News! Trust Score: 100%. <a href="${rumor.link}" target="_blank">Read More</a></span>`;
            }
        });

        // Check if the rumor is false
        if (!found) {
            rumors.false.forEach(rumor => {
                if (rumor.text.toLowerCase() === input.toLowerCase()) {
                    found = true;
                    resultDiv.innerHTML = `<span style='color: red;'>Fake News! Trust Score: 0%.</span>`;
                }
            });
        }

        // If no match found
        if (!found) {
            resultDiv.innerHTML = "<span style='color: orange;'>No data available for this news.</span>";
        }

        resultDiv.classList.add('show'); // Show the result with animation
    }, 100); // Delay to allow for hiding animation
}
