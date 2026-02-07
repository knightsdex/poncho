document.getElementById('copyButton').addEventListener('click', function() {
    const textToCopy = '0xComingSoon';
    navigator.clipboard.writeText(textToCopy).then(function() {
        const copyMessage = document.getElementById('copyMessage');
        copyMessage.style.display = 'inline';
        setTimeout(function() {
            copyMessage.style.display = 'none';
        }, 2000);
    }, function(err) {
        console.error('Could not copy text: ', err);
    });
});