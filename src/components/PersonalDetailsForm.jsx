export default function PersonalDetailsForm({ register, errors }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-3">
        Personal Details
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            {...register('personalDetails.firstName')}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 ${
              errors.personalDetails?.firstName
                ? 'border-red-500'
                : 'border-gray-300 dark:border-gray-600'
            }`}
          />
          {errors.personalDetails?.firstName && (
            <p className="mt-1 text-sm text-red-500">
              {errors.personalDetails.firstName.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Middle Name
          </label>
          <input
            type="text"
            {...register('personalDetails.middleName')}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            {...register('personalDetails.lastName')}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 ${
              errors.personalDetails?.lastName
                ? 'border-red-500'
                : 'border-gray-300 dark:border-gray-600'
            }`}
          />
          {errors.personalDetails?.lastName && (
            <p className="mt-1 text-sm text-red-500">
              {errors.personalDetails.lastName.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            {...register('personalDetails.phone')}
            placeholder="08012345678 or +2348012345678"
            maxLength={14}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 ${
              errors.personalDetails?.phone
                ? 'border-red-500'
                : 'border-gray-300 dark:border-gray-600'
            }`}
          />
          {errors.personalDetails?.phone && (
            <p className="mt-1 text-sm text-red-500">
              {errors.personalDetails.phone.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Marital Status <span className="text-red-500">*</span>
          </label>
          <select
            {...register('personalDetails.maritalStatus')}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 ${
              errors.personalDetails?.maritalStatus
                ? 'border-red-500'
                : 'border-gray-300 dark:border-gray-600'
            }`}
          >
            <option value="">Select status</option>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Divorced">Divorced</option>
            <option value="Widowed">Widowed</option>
          </select>
          {errors.personalDetails?.maritalStatus && (
            <p className="mt-1 text-sm text-red-500">
              {errors.personalDetails.maritalStatus.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Date of Birth <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            {...register('personalDetails.dateOfBirth')}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 ${
              errors.personalDetails?.dateOfBirth
                ? 'border-red-500'
                : 'border-gray-300 dark:border-gray-600'
            }`}
          />
          {errors.personalDetails?.dateOfBirth && (
            <p className="mt-1 text-sm text-red-500">
              {errors.personalDetails.dateOfBirth.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Address
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1">
              House Number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              {...register('personalDetails.houseNumber')}
              placeholder="e.g., 12A"
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 ${
                errors.personalDetails?.houseNumber
                  ? 'border-red-500'
                  : 'border-gray-300 dark:border-gray-600'
              }`}
            />
            {errors.personalDetails?.houseNumber && (
              <p className="mt-1 text-sm text-red-500">
                {errors.personalDetails.houseNumber.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1">
              Street Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              {...register('personalDetails.streetName')}
              placeholder="e.g., Allen Avenue"
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 ${
                errors.personalDetails?.streetName
                  ? 'border-red-500'
                  : 'border-gray-300 dark:border-gray-600'
              }`}
            />
            {errors.personalDetails?.streetName && (
              <p className="mt-1 text-sm text-red-500">
                {errors.personalDetails.streetName.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1">
              Bus Stop
            </label>
            <input
              type="text"
              {...register('personalDetails.busStop')}
              placeholder="e.g., Ikeja Under Bridge"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700"
            />
          </div>

          <div>
            <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1">
              City <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              {...register('personalDetails.city')}
              placeholder="e.g., Lagos"
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 ${
                errors.personalDetails?.city
                  ? 'border-red-500'
                  : 'border-gray-300 dark:border-gray-600'
              }`}
            />
            {errors.personalDetails?.city && (
              <p className="mt-1 text-sm text-red-500">
                {errors.personalDetails.city.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1">
              State <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              {...register('personalDetails.state')}
              placeholder="e.g., Lagos"
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 ${
                errors.personalDetails?.state
                  ? 'border-red-500'
                  : 'border-gray-300 dark:border-gray-600'
              }`}
            />
            {errors.personalDetails?.state && (
              <p className="mt-1 text-sm text-red-500">
                {errors.personalDetails.state.message}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
