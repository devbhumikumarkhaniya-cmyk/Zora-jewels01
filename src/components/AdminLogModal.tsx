import React, { useState, useEffect } from 'react';
import { X, Search, Check, Clock, User, Phone, MapPin, Calendar, Trash2 } from 'lucide-react';
import { SalonAppointment } from '../types';

interface AdminLogModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStatusChange?: () => void;
}

export const AdminLogModal: React.FC<AdminLogModalProps> = ({ isOpen, onClose, onStatusChange }) => {
  const [appointments, setAppointments] = useState<SalonAppointment[]>([]);
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('All');

  const loadAppointments = () => {
    try {
      const stored = localStorage.getItem('elysee_salon_appointments');
      if (stored) {
        setAppointments(JSON.parse(stored));
      } else {
        // Sample starter appointment for demonstration
        const sample: SalonAppointment[] = [
          {
            id: 'APPT-829104',
            name: 'Baroness Evelyn Sterling',
            phone: '+1 (555) 283-9182',
            email: 'evelyn.sterling@mayfair.co.uk',
            date: '2026-10-04',
            time: '02:00 PM',
            service: 'Bespoke Bridal Trousseau Suite',
            salonLocation: 'Place Vendôme, Paris',
            notes: 'Private tasting with master jeweler; Colombian emeralds inquiry',
            createdAt: new Date().toISOString(),
            status: 'Confirmed',
          },
        ];
        setAppointments(sample);
        localStorage.setItem('elysee_salon_appointments', JSON.stringify(sample));
      }
    } catch {}
  };

  useEffect(() => {
    if (isOpen) {
      loadAppointments();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleUpdateStatus = (id: string, newStatus: 'Pending' | 'Confirmed' | 'Completed') => {
    const updated = appointments.map((a) =>
      a.id === id ? { ...a, status: newStatus } : a
    );
    setAppointments(updated);
    try {
      localStorage.setItem('elysee_salon_appointments', JSON.stringify(updated));
    } catch {}
    onStatusChange?.();
  };

  const handleDelete = (id: string) => {
    const updated = appointments.filter((a) => a.id !== id);
    setAppointments(updated);
    try {
      localStorage.setItem('elysee_salon_appointments', JSON.stringify(updated));
    } catch {}
    onStatusChange?.();
  };

  const handleClearAll = () => {
    if (window.confirm('Clear all salon appointment logs?')) {
      setAppointments([]);
      try {
        localStorage.removeItem('elysee_salon_appointments');
      } catch {}
      onStatusChange?.();
    }
  };

  const filtered = appointments.filter((a) => {
    const matchesSearch =
      a.name.toLowerCase().includes(search.toLowerCase()) ||
      a.phone.toLowerCase().includes(search.toLowerCase()) ||
      a.salonLocation.toLowerCase().includes(search.toLowerCase()) ||
      a.service.toLowerCase().includes(search.toLowerCase());

    const matchesStatus = filterStatus === 'All' || a.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      <div className="min-h-full flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="relative bg-[#0A0A0A] border border-[#C9A96E]/40 text-[#F5F1EA] max-w-4xl w-full p-6 sm:p-8 shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-[#C9A96E]/20">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C9A96E]" />
              <h3 className="font-serif text-xl sm:text-2xl font-light text-[#F5F1EA]">
                Zora Jewels Salon Concierge Admin Log
              </h3>
              <span className="text-[10px] text-[#0A0A0A] bg-[#C9A96E] font-bold px-2 py-0.5 rounded-xs">
                {appointments.length} Total Bookings
              </span>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="text-[#F5F1EA]/60 hover:text-[#C9A96E] p-1 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 my-5">
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-[#C9A96E] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search patron, phone, salon..."
                className="w-full bg-[#121212] border border-[#C9A96E]/30 pl-9 pr-3 py-2 text-xs text-[#F5F1EA] placeholder-[#F5F1EA]/40 focus:outline-none focus:border-[#C9A96E]"
              />
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="bg-[#121212] border border-[#C9A96E]/30 px-3 py-2 text-xs text-[#F5F1EA] focus:outline-none cursor-pointer"
              >
                <option value="All">All Statuses</option>
                <option value="Pending">Pending Only</option>
                <option value="Confirmed">Confirmed</option>
                <option value="Completed">Completed</option>
              </select>

              {appointments.length > 0 && (
                <button
                  type="button"
                  onClick={handleClearAll}
                  className="px-3 py-2 text-xs text-red-400 hover:text-red-300 border border-red-500/30 hover:border-red-500 transition-colors cursor-pointer"
                >
                  Clear Log
                </button>
              )}
            </div>
          </div>

          {/* List of Appointments */}
          <div className="max-h-[460px] overflow-y-auto space-y-3 pr-1">
            {filtered.length === 0 ? (
              <div className="text-center py-16 bg-[#121212]/50 border border-[#C9A96E]/15 p-6">
                <p className="font-serif text-base text-[#F5F1EA]/80">No salon appointments recorded</p>
                <p className="text-xs text-[#F5F1EA]/50 font-light mt-1">
                  Bookings made via the "Book Salon" buttons will appear here instantly.
                </p>
              </div>
            ) : (
              filtered.map((appt) => (
                <div
                  key={appt.id}
                  className="bg-[#0E1F1A] border border-[#C9A96E]/20 hover:border-[#C9A96E]/50 rounded-xs p-4 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-xs text-[#C9A96E] font-medium">
                        {appt.id}
                      </span>
                      <span className="font-serif text-sm font-medium text-[#F5F1EA]">
                        {appt.name}
                      </span>
                      <span
                        className={`text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-xs ${
                          appt.status === 'Confirmed'
                            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                            : appt.status === 'Completed'
                            ? 'bg-blue-500/20 text-blue-400 border border-blue-500/40'
                            : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/40'
                        }`}
                      >
                        {appt.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-xs text-[#F5F1EA]/75 font-light">
                      <div className="flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-[#C9A96E]" />
                        <span>{appt.phone}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#C9A96E]" />
                        <span>{appt.date} at {appt.time}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#C9A96E]" />
                        <span>{appt.salonLocation}</span>
                      </div>
                      <div className="text-[#C9A96E]">
                        <span>Interest: {appt.service}</span>
                      </div>
                    </div>

                    {appt.notes && (
                      <p className="text-[11px] text-[#F5F1EA]/60 font-light italic pt-1 border-t border-[#C9A96E]/10">
                        "{appt.notes}"
                      </p>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-[#C9A96E]/15">
                    {appt.status !== 'Confirmed' && (
                      <button
                        type="button"
                        onClick={() => handleUpdateStatus(appt.id, 'Confirmed')}
                        className="px-2.5 py-1.5 bg-[#0B2A22] border border-emerald-500/50 text-emerald-400 text-[10px] font-semibold tracking-wider uppercase hover:bg-emerald-500 hover:text-black transition-colors"
                      >
                        Confirm
                      </button>
                    )}

                    {appt.status !== 'Completed' && (
                      <button
                        type="button"
                        onClick={() => handleUpdateStatus(appt.id, 'Completed')}
                        className="px-2.5 py-1.5 bg-[#121212] border border-[#C9A96E]/40 text-[#C9A96E] text-[10px] font-semibold tracking-wider uppercase hover:bg-[#C9A96E] hover:text-black transition-colors"
                      >
                        Complete
                      </button>
                    )}

                    <button
                      type="button"
                      onClick={() => handleDelete(appt.id)}
                      className="p-1.5 text-[#F5F1EA]/40 hover:text-red-400 transition-colors"
                      title="Delete record"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="mt-6 pt-4 border-t border-[#C9A96E]/15 text-center">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 border border-[#C9A96E]/50 text-[#F5F1EA] text-xs uppercase tracking-widest hover:border-[#C9A96E] hover:text-[#C9A96E] transition-colors"
            >
              Close Console
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
