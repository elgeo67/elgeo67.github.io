document.getElementById('summarize-btn').addEventListener('click', function() {
    const inputText = document.getElementById('input-text').value;
    const wordCount = document.getElementById('word-count').value || 100;
    const summaryResultElement = document.getElementById('summary-result');

    summaryResultElement.innerText = "جاري التلخيص...";

    try {
        const sentences = inputText.split(/[.!?،؛]/).filter(s => s.trim().length > 0);
        const result = summarize(sentences, {
            count: Math.floor(wordCount / 15) || 5, // A simple way to control length
            lang: 'ar'
        });
        
        summaryResultElement.innerText = result.join('. ');

    } catch (error) {
        summaryResultElement.innerText = 'حدث خطأ أثناء التلخيص.';
        console.error(error);
    }
});
