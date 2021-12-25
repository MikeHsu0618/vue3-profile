// import html2pdf from "html2pdf.js/src";

export function useDownloadPDF() {
  let opt = {
    margin:       0,
    filename:     'test.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 4 },
    jsPDF:        { format: 'a4', orientation: 'portrait' }
  }
  
  const scaleCv = () => document.body.classList.add('scale-cv')
  const removeScale = () => document.body.classList.remove('scale-cv')
  
  const downloadProfile = () => {
    let areaCv = document.getElementById('area-cv');
    
    scaleCv()
    html2pdf(areaCv, opt)
    setTimeout(removeScale, 5000)
  }
  
  return {
    downloadProfile
  }
}