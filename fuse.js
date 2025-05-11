const fuse = new Fuse([...rumors.true, ...rumors.false], {
    keys: ['text'],
    threshold: 0.4
});

function checkRumor() {
    const input = document.getElementById("rumorInput").value;
    const resultDiv = document.getElementById("result");
    resultDiv.classList.remove('show');

    setTimeout(() => {
        const result = fuse.search(input);
        if (result.length > 0) {
            const matched = result[0].item;
            if (rumors.true.some(r => r.text === matched.text)) {
                resultDiv.innerHTML = `<span style='color: green;'>True News! Trust Score: 100%. <a href="${matched.link}" target="_blank">Read More</a></span>`;
            } else {
                resultDiv.innerHTML = `<span style='color: red;'>Fake News! Trust Score: 0%.</span>`;
            }
        } else {
            resultDiv.innerHTML = "<span style='color: orange;'>No data available for this news.</span>";
        }
        resultDiv.classList.add('show');
    }, 100);
}
