import React from 'react';

interface QRCodePageProps {
  imageUrl: string; // The URL of the QR code image
}

const QRCodePage: React.FC<QRCodePageProps> = ({ imageUrl }) => {
  return (
    <div className="bg-gray-800 text-gray-200 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-semibold mb-6">QR Code</h1>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <img src={imageUrl} alt="QR Code" className="w-64 h-64" /> {/* Display the image */}
      </div>
      <p className="mt-4 text-sm text-gray-400">
        Scan this QR code with your smartphone.
      </p>
    </div>
  );
};

export default QRCodePage;