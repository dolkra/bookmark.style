export const getBase64Image = (url: string): Promise<string> => {
  const img = new Image()
  // img.setAttribute("crossOrigin", 'anonymous');
  img.crossOrigin = 'anonymous'
  img.src = url
  return new Promise((resolve, reject) => {
    img.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = img.width
      canvas.height = img.height
      const ctx = canvas.getContext('2d')
      if (ctx) {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
        resolve(canvas.toDataURL())
      } else {
        reject(new Error('Failed to get canvas context'))
      }
    }
    img.onerror = (error) => {
      reject(error)
    }
  })
}
