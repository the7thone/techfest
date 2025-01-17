document.getElementById('showQRButton').addEventListener('click', function() {
    // Toggle visibility of QR code section
    const qrCodeSection = document.getElementById('qrCodeSection');
    qrCodeSection.style.display = qrCodeSection.style.display === 'block' ? 'none' : 'block';
});

