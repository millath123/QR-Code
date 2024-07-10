import QRCode from 'qrcode'
import { useState } from 'react'

function App() {
  const [url, setUrl] = useState('')
  const [qr, setQr] = useState('')

  const GenerateQRCode = () => {
    if (url === '') {
      setQr('')
      return
    }

    QRCode.toDataURL(url, {
      width: 800,
      margin: 2,
      color: {
        dark: '#335383FF',
        light: '#EEEEEEFF'
      }
    }, (err, url) => {
      if (err) return console.error(err)

      console.log(url)
      setQr(url)
    })
  }

  const handleInputChange = (e) => {
    setUrl(e.target.value)
    if (e.target.value === '') {
      setQr('')
    }
  }

  return (
    <div className="app">
      <h1>QR Generator</h1>
      <input  type="text" placeholder="Enter text" value={url} onChange={handleInputChange} />
      <button onClick={GenerateQRCode}>Generate</button>
      {qr && <>
        <img src={qr} alt="Generated QR Code" />
        <a href={qr} download="qrcode.png">Download</a>
      </>}
    </div>
  )
}

export default App
