import { X, Phone, MapPin, Calendar, Users, Printer } from 'lucide-react';

export default function MemberCard({ member, onClose }) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Member Profile</h2>
          <div className="flex gap-2">
            <button
              onClick={handlePrint}
              className="p-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors print:hidden"
              title="Print Card"
            >
              <Printer size={20} />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors print:hidden"
              title="Close"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6 space-y-6">
          {/* Photo and Basic Info */}
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
            <div className="flex-shrink-0">
              {member.personalDetails.photo ? (
                <img
                  src={member.personalDetails.photo}
                  alt={`${member.personalDetails.firstName} ${member.personalDetails.lastName}`}
                  className="w-32 h-32 md:w-40 md:h-40 rounded-lg object-cover border-4 border-blue-500"
                />
              ) : (
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-lg bg-gray-200 dark:bg-gray-700 flex items-center justify-center border-4 border-gray-300 dark:border-gray-600">
                  <Users size={48} className="text-gray-400" />
                </div>
              )}
            </div>

            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {member.personalDetails.firstName} {member.personalDetails.middleName}{' '}
                {member.personalDetails.lastName}
              </h3>
              <p className="text-lg font-mono text-blue-600 dark:text-blue-400 mb-3">
                {member.id}
              </p>
              <span
                className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${
                  member.churchDetails.memberType === 'Worker'
                    ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                    : member.churchDetails.memberType === 'Volunteer'
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                    : 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
                }`}
              >
                {member.churchDetails.memberType}
              </span>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 space-y-3">
            <h4 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
              <Phone size={18} className="text-blue-600" />
              Contact Information
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Primary Phone:</span>
                <span className="font-medium text-gray-900 dark:text-white">{member.personalDetails.phone}</span>
              </div>
              {member.personalDetails.phoneSecondary && (
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Secondary Phone:</span>
                  <span className="font-medium text-gray-900 dark:text-white">{member.personalDetails.phoneSecondary}</span>
                </div>
              )}
              {member.personalDetails.emergencyContact && (
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Emergency Contact:</span>
                  <span className="font-medium text-gray-900 dark:text-white">{member.personalDetails.emergencyContact}</span>
                </div>
              )}
            </div>
          </div>

          {/* Address */}
          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 space-y-3">
            <h4 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
              <MapPin size={18} className="text-blue-600" />
              Address
            </h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {member.personalDetails.houseNumber} {member.personalDetails.streetName}
              {member.personalDetails.busStop && `, ${member.personalDetails.busStop}`}
              <br />
              {member.personalDetails.city}, {member.personalDetails.state}
            </p>
          </div>

          {/* Personal Details */}
          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 space-y-3">
            <h4 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
              <Calendar size={18} className="text-blue-600" />
              Personal Details
            </h4>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <span className="text-gray-600 dark:text-gray-400 block">Date of Birth:</span>
                <span className="font-medium text-gray-900 dark:text-white">{member.personalDetails.dateOfBirth}</span>
              </div>
              <div>
                <span className="text-gray-600 dark:text-gray-400 block">Marital Status:</span>
                <span className="font-medium text-gray-900 dark:text-white">{member.personalDetails.maritalStatus}</span>
              </div>
            </div>
          </div>

          {/* Departments */}
          {member.churchDetails.departments?.length > 0 && (
            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 space-y-3">
              <h4 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                <Users size={18} className="text-blue-600" />
                Departments & Roles
              </h4>
              <div className="space-y-2">
                {member.churchDetails.departments.map((dept, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center text-sm bg-white dark:bg-gray-800 p-3 rounded-lg"
                  >
                    <div>
                      <span className="font-medium text-gray-900 dark:text-white">{dept.name}</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">({dept.id})</span>
                    </div>
                    <span
                      className={`px-2 py-1 rounded text-xs font-semibold ${
                        dept.role === 'HoD'
                          ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                          : dept.role === 'Assistant HoD'
                          ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                          : 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
                      }`}
                    >
                      {dept.role}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Footer - Member Since */}
          <div className="text-center text-sm text-gray-500 dark:text-gray-400 pt-4 border-t border-gray-200 dark:border-gray-700">
            Member since {new Date(member.createdAt).toLocaleDateString()}
          </div>
        </div>
      </div>

      {/* Print Styles */}
      <style jsx>{`
        @media print {
          body * {
            visibility: hidden;
          }
          .fixed, .fixed * {
            visibility: visible;
          }
          .fixed {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            background: white;
          }
        }
      `}</style>
    </div>
  );
}
