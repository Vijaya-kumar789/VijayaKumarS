export const handleDownload = () => {
  const pdfDownloadUrl = 'https://drive.google.com/uc?export=download&id=1GvkURN6odfnjEoMo5x-6WheNbfN3AKXh'; 
  const pdfViewUrl = 'https://drive.google.com/file/d/1GvkURN6odfnjEoMo5x-6WheNbfN3AKXh/view'; 

  
  window.open(pdfViewUrl, '_blank');

  
  const link = document.createElement('a');
  link.href = pdfDownloadUrl;
  link.download = 'resume.pdf'; 
  document.body.appendChild(link); 
  link.click();
  document.body.removeChild(link); 
};
