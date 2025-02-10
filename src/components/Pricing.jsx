import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const PricingCard = ({ title, price, users, devices, warranty, note }) => (
  <motion.div 
    className="relative flex flex-col justify-between p-8 bg-white border rounded shadow-sm transition-shadow hover:shadow-lg"
    whileHover={{ scale: 1.05 }}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="text-center">
      <div className="text-lg font-semibold uppercase">{title}</div>
      <div className="flex items-center justify-center mt-2 text-5xl font-bold">
        {price}K<span className="text-gray-700 text-lg">/ Bln</span>
      </div>
      <div className="mt-2 space-y-3 text-gray-700">
        <div>{users} USERS</div>
        <div>{devices} DEVICE</div>
        <div>{warranty}</div>
      </div>
    </div>
    <a
      href="https://api.whatsapp.com/send/?phone=6282112439632&text=Hai,%20Saya%20ingin%20membeli%20netflix"
      className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 text-white bg-green-500 rounded hover:bg-green-400"
    >
      <FaWhatsapp />
      PESAN SEKARANG
    </a>
    <p className="mt-6 text-xs text-gray-600 text-center">
      {note}
    </p>
  </motion.div>
);

const Pricing = () => {
  const plans = [
    { title: 'AKUN US SHARED', price: 20, users: 1, devices: 1, warranty: 'NO GARANSI', note: 'NOTE: Harus gunakan VPN.' },
    { title: 'AKUN ID SHARED', price: 22, users: 1, devices: 1, warranty: 'NO GARANSI', note: 'NOTE: Tanpa VPN.' },
    { title: 'AKUN ID SHARED', price: 27, users: 1, devices: 1, warranty: 'GARANSI 1 BULAN', note: 'NOTE: Tidak boleh ubah email/password.' },
    { title: 'AKUN ID PRIVATE', price: 50, users: 4, devices: 4, warranty: 'NO GARANSI', note: 'NOTE: Harus gunakan VPN.' },
    { title: 'AKUN ID PRIVATE', price: 65, users: 4, devices: 4, warranty: 'NO GARANSI', note: 'NOTE: Tanpa VPN.' },
    { title: 'AKUN ID PRIVATE', price: 100, users: 4, devices: 4, warranty: 'GARANSI 1 BULAN', note: 'NOTE: Tidak boleh ubah email/password.' },
  ];

  return (
    <div className="px-4 py-20 mx-auto max-w-screen-lg" id="pricing">
      <h2 className="text-3xl font-bold text-center mb-10">PAKET HARGA</h2>
      <p className="text-lg text-center mb-10">Dapatkan harga spesial untuk bulan ini.</p>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
