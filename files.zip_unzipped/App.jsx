import React, { useState, useRef, useEffect } from 'react';
import { Download, Copy, RefreshCw, Settings2, Zap } from 'lucide-react';

export default function QRCodeGenerator() {
  const [input, setInput] = useState('https://example.com');
  const [qrCode, setQRCode] = useState(null);
  const [size, setSize] = useState(300);
  const [bgColor, setBgColor] = useState('#ffffff');
  const [fgColor, setFgColor] = useState('#000000');
  const [errorLevel, setErrorLevel] = useState('M');
  const [copied, setCopied] = useState(false);
  const canvasRef = useRef(null);

  // QR Code generation function
  const generateQRCode = async () => {
    if (!input.trim()) {
      alert('Please enter some text or URL');
      return;
    }

    try {
      const qrCanvas = await generateQR(input, {
        width: size,
        height: size,
        colorLight: bgColor,
        colorDark: fgColor,
        correctLevel: errorLevel,
      });
      setQRCode(qrCanvas);
    } catch (err) {
      alert('Error generating QR code: ' + err.message);
    }
  };

  // Generate QR using canvas
  const generateQR = (text, options) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js';
      script.onload = () => {
        const canvas = document.createElement('canvas');
        const container = document.createElement('div');
        container.style.position = 'absolute';
        container.style.visibility = 'hidden';
        document.body.appendChild(container);

        try {
          new QRCode({
            text: text,
            width: options.width,
            height: options.height,
            colorLight: options.colorLight,
            colorDark: options.colorDark,
            correctLevel: QRCode.CorrectLevel[options.correctLevel],
            render: 'canvas',
            container: container,
          });

          const qrCanvas = container.querySelector('canvas');
          const ctx = canvas.getContext('2d');
          canvas.width = qrCanvas.width;
          canvas.height = qrCanvas.height;
          ctx.drawImage(qrCanvas, 0, 0);
          document.body.removeChild(container);
          resolve(canvas.toDataURL('image/png'));
        } catch (error) {
          document.body.removeChild(container);
          reject(error);
        }
      };
      script.onerror = () => reject(new Error('Failed to load QR code library'));
      document.head.appendChild(script);
    });
  };

  // Load QR code on input change (debounced)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (input.trim()) {
        generateQRCode();
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [input, size, bgColor, fgColor, errorLevel]);

  const downloadQRCode = () => {
    if (!qrCode) return;
    const link = document.createElement('a');
    link.href = qrCode;
    link.download = `qrcode-${Date.now()}.png`;
    link.click();
  };

  const copyToClipboard = async () => {
    if (!qrCode) return;
    try {
      const blob = await fetch(qrCode).then((r) => r.blob());
      await navigator.clipboard.write([
        new ClipboardItem({ 'image/png': blob }),
      ]);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      alert('Failed to copy to clipboard');
    }
  };

  const resetSettings = () => {
    setInput('https://example.com');
    setSize(300);
    setBgColor('#ffffff');
    setFgColor('#000000');
    setErrorLevel('M');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-900 to-slate-950 text-white overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Zap className="w-8 h-8 text-yellow-400" />
            <h1 className="text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-red-400">
              QR Code Generator
            </h1>
            <Zap className="w-8 h-8 text-yellow-400" />
          </div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Create beautiful, customizable QR codes instantly. Perfect for marketing, networking, and sharing.
          </p>
        </div>

        {/* Main Container */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Controls Panel */}
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 space-y-6 hover:border-white/20 transition-all duration-300">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <Settings2 className="w-6 h-6 text-purple-400" />
                Settings
              </h2>

              {/* Input Field */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-300">
                  Text or URL
                </label>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Enter URL or text..."
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all"
                />
              </div>

              {/* Size Control */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-semibold text-gray-300">
                    Size
                  </label>
                  <span className="text-sm font-mono bg-purple-500/20 px-3 py-1 rounded-full">
                    {size}px
                  </span>
                </div>
                <input
                  type="range"
                  min="200"
                  max="600"
                  step="50"
                  value={size}
                  onChange={(e) => setSize(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-purple-500"
                />
              </div>

              {/* Color Controls */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-300">
                    Background
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      value={bgColor}
                      onChange={(e) => setBgColor(e.target.value)}
                      className="w-12 h-12 rounded-lg cursor-pointer border border-white/20"
                    />
                    <span className="text-sm font-mono text-gray-400">
                      {bgColor.toUpperCase()}
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-300">
                    Pattern
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      value={fgColor}
                      onChange={(e) => setFgColor(e.target.value)}
                      className="w-12 h-12 rounded-lg cursor-pointer border border-white/20"
                    />
                    <span className="text-sm font-mono text-gray-400">
                      {fgColor.toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Error Correction Level */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-300">
                  Error Correction
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {['L', 'M', 'Q', 'H'].map((level) => (
                    <button
                      key={level}
                      onClick={() => setErrorLevel(level)}
                      className={`py-2 px-3 rounded-lg font-semibold transition-all ${
                        errorLevel === level
                          ? 'bg-purple-500 text-white ring-2 ring-purple-300'
                          : 'bg-white/10 text-gray-300 hover:bg-white/20'
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
                <p className="text-xs text-gray-400 mt-2">
                  L=7% • M=15% • Q=25% • H=30% recovery
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <button
                  onClick={generateQRCode}
                  className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95"
                >
                  Generate
                </button>
                <button
                  onClick={resetSettings}
                  className="px-4 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all flex items-center gap-2"
                >
                  <RefreshCw className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Preview Panel */}
          <div className="flex flex-col items-center justify-center">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 w-full aspect-square flex items-center justify-center relative overflow-hidden group hover:border-white/20 transition-all duration-300">
              {qrCode ? (
                <div className="relative">
                  <img
                    src={qrCode}
                    alt="QR Code"
                    className="w-full max-w-xs h-auto rounded-lg shadow-2xl group-hover:shadow-purple-500/50 transition-shadow duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/0 to-pink-500/10 rounded-lg pointer-events-none"></div>
                </div>
              ) : (
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 mx-auto bg-white/10 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-12 h-12 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-400">Your QR code will appear here</p>
                </div>
              )}
            </div>

            {/* Download & Copy Buttons */}
            {qrCode && (
              <div className="flex gap-3 w-full mt-6">
                <button
                  onClick={downloadQRCode}
                  className="flex-1 flex items-center justify-center gap-2 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-400/50 text-blue-300 font-semibold py-3 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95"
                >
                  <Download className="w-5 h-5" />
                  Download
                </button>
                <button
                  onClick={copyToClipboard}
                  className={`flex-1 flex items-center justify-center gap-2 font-semibold py-3 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 ${
                    copied
                      ? 'bg-green-500/20 border border-green-400/50 text-green-300'
                      : 'bg-teal-500/20 hover:bg-teal-500/30 border border-teal-400/50 text-teal-300'
                  }`}
                >
                  <Copy className="w-5 h-5" />
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400 text-sm">
            Open source QR code generator • Built with React • Host on GitHub Pages
          </p>
        </div>
      </div>
    </div>
  );
}
