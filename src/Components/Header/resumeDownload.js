
 export const handleDownload = () => {
  const pdfUrl = 'https://drive.google.com/uc?export=download&id=1PStZgogg9Lx6RFG8pk62G34vcE2LJSWS'; // Replace with your actual Google Drive link
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'resume.pdf'; // Optional: default file name after download
    link.click();
  };
