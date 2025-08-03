document.getElementById('summarize-btn').addEventListener('click', async function() {
    const inputText = document.getElementById('input-text').value;
    const wordCount = document.getElementById('word-count').value || 100;
    const summaryResultElement = document.getElementById('summary-result');

    summaryResultElement.innerText = "جاري التلخيص، برجاء الانتظار...";

    try {
        const response = await fetch('https://api.summarize.io/summarize', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                text: inputText,
                sentences: Math.floor(wordCount / 10) || 10 // Convert word count to sentences for this API
            })
        });

        const data = await response.json();

        if (response.ok) {
            summaryResultElement.innerText = data.summary;
        } else {
            summaryResultElement.innerText = 'حدث خطأ أثناء التلخيص: ' + (data.error || 'خطأ غير معروف');
        }

    } catch (error) {
        summaryResultElement.innerText = 'حدث خطأ: ' + error.message;
    }
});
