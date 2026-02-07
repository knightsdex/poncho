document.getElementById('copyButton').addEventListener('click', function() {
    const textToCopy = '0x3C2CD47B5fbC49ECa3039846f4cCe2b69F75dA70';
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