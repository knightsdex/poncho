document.getElementById('copyButton').addEventListener('click', function() {
    const textToCopy = '0x44469Fb338d52Ca02c88ce54Cb8aac935fc5B558';
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