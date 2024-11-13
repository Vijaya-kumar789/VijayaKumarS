
 export const handleDownload = () => {
  const pdfUrl = 'https://docs.google.com/document/d/1pKc1sflLIeGxukl4PISrk6Q34t85biyqcP8ort-Tbk8/export?format=pdf'; // Replace with your actual Google Drive link
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'resume.pdf'; // Optional: default file name after download
    link.click();
  };
 