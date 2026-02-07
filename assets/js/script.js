document.getElementById('copyButton').addEventListener('click', function() {
    const textToCopy = '0x3d2db2bedb736e1f01da133750de4849423a5836';
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