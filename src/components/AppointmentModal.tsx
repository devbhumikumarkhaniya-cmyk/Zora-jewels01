import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, Check, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';
import { SalonAppointment } from '../types';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAppointmentBooked: (appointment: SalonAppointment) => void;
  initialService?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  onAppointmentBooked,
  initialService = 'Fine Jewelry Private Viewing',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('14:00');
  const [service, setService] = useState(initialService);
  const [salonLocation, setSalonLocation] = useState('Rajkot Flagship (Palace Rd)');
  const [notes, setNotes] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [confirmedAppt, setConfirmedAppt] = useState<SalonAppointment | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !date) return;

    const newAppt: SalonAppointment = {
      id: `APPT-${Date.now().toString().slice(-6)}`,
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim(),
      date,
      time,
      service,
      salonLocation,
      notes: notes.trim(),
      createdAt: new Date().toISOString(),
      status: 'Pending',
    };

    // Save to localStorage
    try {
      const existing = localStorage.getItem('elysee_salon_appointments');
      const list = existing ? JSON.parse(existing) : [];
      list.unshift(newAppt);
      localStorage.setItem('elysee_salon_appointments', JSON.stringify(list));
    } catch {}

    setConfirmedAppt(newAppt);
    setIsSuccess(true);
    onAppointmentBooked(newAppt);
  };

  const handleWhatsAppConfirm = () => {
    if (!confirmedAppt) return;
    const text = encodeURIComponent(
      `Hello J.P Jewellers! I have reserved a salon viewing.\n` +
      `Appointment ID: ${confirmedAppt.id}\n` +
      `Name: ${confirmedAppt.name}\n` +
      `Salon: ${confirmedAppt.salonLocation}\n` +
      `Date & Time: ${confirmedAppt.date} at ${confirmedAppt.time}\n` +
      `Service: ${confirmedAppt.service}`
    );
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${text}`, '_blank');
  };

  const handleClose = () => {
    setIsSuccess(false);
    setConfirmedAppt(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={handleClose}
      />

      <div className="min-h-full flex items-center justify-center p-4 sm:p-6">
        <div className="relative bg-[#0A0A0A] border border-[#C9A96E]/40 text-[#F5F1EA] max-w-xl w-full p-6 sm:p-8 shadow-2xl">
          <button
            type="button"
            onClick={handleClose}
            className="absolute top-4 right-4 text-[#F5F1EA]/60 hover:text-[#C9A96E] p-1 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {isSuccess && confirmedAppt ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#0B2A22] border-2 border-[#C9A96E] flex items-center justify-center text-[#C9A96E] animate-bounce-in">
                <Check className="w-7 h-7" />
              </div>

              <span className="text-[10px] tracking-[0.3em] uppercase text-[#C9A96E] font-semibold block">
                Appointment Registered
              </span>
              <h3 className="font-serif text-2xl font-light text-[#F5F1EA]">
                Bespoke Viewing Confirmed
              </h3>
              
              <div className="bg-[#0E1F1A] border border-[#C9A96E]/30 p-4 rounded-xs text-left text-xs space-y-2 max-w-md mx-auto">
                <div className="flex justify-between border-b border-[#C9A96E]/15 pb-1.5">
                  <span className="text-[#F5F1EA]/60">Booking Reference:</span>
                  <span className="text-[#C9A96E] font-medium font-mono">{confirmedAppt.id}</span>
                </div>
                <div className="flex justify-between border-b border-[#C9A96E]/15 pb-1.5">
                  <span className="text-[#F5F1EA]/60">Patron:</span>
                  <span className="text-[#F5F1EA] font-medium">{confirmedAppt.name}</span>
                </div>
                <div className="flex justify-between border-b border-[#C9A96E]/15 pb-1.5">
                  <span className="text-[#F5F1EA]/60">Salon:</span>
                  <span className="text-[#F5F1EA]">{confirmedAppt.salonLocation}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#F5F1EA]/60">Schedule:</span>
                  <span className="text-[#C9A96E]">{confirmedAppt.date} at {confirmedAppt.time}</span>
                </div>
              </div>

              <p className="text-xs text-[#F5F1EA]/70 font-light max-w-sm mx-auto leading-relaxed">
                A Senior Concierge has reserved your private suite with champagne hospitality. You may also sync directly with our atelier on WhatsApp.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2 max-w-md mx-auto">
                <button
                  type="button"
                  onClick={handleWhatsAppConfirm}
                  className="flex-1 py-3 bg-[#0B2A22] border border-[#25D366] text-[#25D366] text-xs font-semibold tracking-wider uppercase hover:bg-[#25D366] hover:text-[#0A0A0A] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Sync on WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={handleClose}
                  className="flex-1 py-3 bg-[#C9A96E] text-[#0A0A0A] text-xs font-semibold tracking-wider uppercase hover:bg-[#DFCA9B] transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="text-center mb-6">
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#C9A96E] font-semibold">
                  Private Client Services
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#F5F1EA] mt-1">
                  Book Salon Viewing & Consultation
                </h3>
                <div className="flex items-center justify-center gap-3 my-2">
                  <span className="w-8 h-[1px] bg-[#C9A96E]/40" />
                  <span className="text-xs text-[#C9A96E]">◇</span>
                  <span className="w-8 h-[1px] bg-[#C9A96E]/40" />
                </div>
                <p className="text-xs text-[#F5F1EA]/70 font-light">
                  Reserve private viewing at Palace Road Rajkot Flagship, or request private virtual video consultation.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[#C9A96E] uppercase tracking-wider mb-1 text-[10px]">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Ramesh Patel"
                      className="w-full bg-[#121212] border border-[#C9A96E]/30 px-3 py-2 text-[#F5F1EA] focus:outline-none focus:border-[#C9A96E]"
                    />
                  </div>

                  <div>
                    <label className="block text-[#C9A96E] uppercase tracking-wider mb-1 text-[10px]">
                      Mobile / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 93285 91000"
                      className="w-full bg-[#121212] border border-[#C9A96E]/30 px-3 py-2 text-[#F5F1EA] focus:outline-none focus:border-[#C9A96E]"
                    />
                  </div>
                </div>

                {/* Email & Service */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[#C9A96E] uppercase tracking-wider mb-1 text-[10px]">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="patron@domain.com"
                      className="w-full bg-[#121212] border border-[#C9A96E]/30 px-3 py-2 text-[#F5F1EA] focus:outline-none focus:border-[#C9A96E]"
                    />
                  </div>

                  <div>
                    <label className="block text-[#C9A96E] uppercase tracking-wider mb-1 text-[10px]">
                      Collection / Service Interest
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full bg-[#121212] border border-[#C9A96E]/30 px-3 py-2 text-[#F5F1EA] focus:outline-none"
                    >
                      <option value="Fine Jewelry Private Viewing">Fine Jewelry Private Viewing</option>
                      <option value="Diamond Solitaires & Rivière Bands">Diamond Solitaires & Rivière Bands</option>
                      <option value="Bespoke Bridal Trousseau Suite">Bespoke Bridal Trousseau Suite</option>
                      <option value="Fine Leather Accessories">Fine Leather Accessories</option>
                      <option value="Haute Couture Evening Ensembles">Haute Couture Evening Ensembles</option>
                      <option value="Archival Vault Restoration Consultation">Archival Vault Restoration</option>
                    </select>
                  </div>
                </div>

                {/* Salon Location */}
                <div>
                  <label className="block text-[#C9A96E] uppercase tracking-wider mb-1 text-[10px]">
                    Salon Location
                  </label>
                  <select
                    value={salonLocation}
                    onChange={(e) => setSalonLocation(e.target.value)}
                    className="w-full bg-[#121212] border border-[#C9A96E]/30 px-3 py-2 text-[#F5F1EA] focus:outline-none"
                  >
                    <option value="Rajkot Flagship (Palace Rd)">Rajkot Flagship (Palace Rd, opp. Ashapura Temple)</option>
                    <option value="Palace Road Boutique, Rajkot">Palace Road Boutique, Rajkot</option>
                    <option value="Prahlad Plot Private Suite, Rajkot">Prahlad Plot Private Suite, Rajkot</option>
                    <option value="Private Virtual Viewing (Video Call)">Private Virtual Viewing & Consultation</option>
                  </select>
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[#C9A96E] uppercase tracking-wider mb-1 text-[10px]">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full bg-[#121212] border border-[#C9A96E]/30 px-3 py-2 text-[#F5F1EA] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[#C9A96E] uppercase tracking-wider mb-1 text-[10px]">
                      Preferred Time Slot
                    </label>
                    <select
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full bg-[#121212] border border-[#C9A96E]/30 px-3 py-2 text-[#F5F1EA] focus:outline-none"
                    >
                      <option value="11:00 AM">11:00 AM - Morning Salon</option>
                      <option value="02:00 PM">02:00 PM - Afternoon Salon</option>
                      <option value="04:30 PM">04:30 PM - Tea & Gems</option>
                      <option value="07:00 PM">07:00 PM - Evening Soirée</option>
                    </select>
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-[#C9A96E] uppercase tracking-wider mb-1 text-[10px]">
                    Bespoke Requests / Gemstone Preference
                  </label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Specific carat sizes, Colombian emerald requests, anniversary date..."
                    className="w-full bg-[#121212] border border-[#C9A96E]/30 px-3 py-2 text-[#F5F1EA] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#C9A96E] text-[#0A0A0A] font-semibold tracking-[0.2em] uppercase hover:bg-[#DFCA9B] transition-colors mt-2 cursor-pointer shadow-lg"
                >
                  Confirm Salon Reservation
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
