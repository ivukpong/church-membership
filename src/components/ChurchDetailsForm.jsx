import DepartmentInput from './DepartmentInput';

export default function ChurchDetailsForm({ watch, setValue, errors, availableDepartments }) {
  const isWorker = watch('churchDetails.isWorker');
  const departments = watch('churchDetails.departments') || [];

  const handleDepartmentsChange = (newDepartments) => {
    setValue('churchDetails.departments', newDepartments, { shouldValidate: true });
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-3">
        Church Details
      </h2>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          Worker / Volunteer
        </label>
        <div className="flex gap-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              value="true"
              checked={isWorker === true}
              onChange={() => setValue('churchDetails.isWorker', true)}
              className="w-4 h-4 text-primary-600 focus:ring-primary-500"
            />
            <span className="text-gray-700 dark:text-gray-300">Yes</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              value="false"
              checked={isWorker === false}
              onChange={() => setValue('churchDetails.isWorker', false)}
              className="w-4 h-4 text-primary-600 focus:ring-primary-500"
            />
            <span className="text-gray-700 dark:text-gray-300">No</span>
          </label>
        </div>
      </div>

      {isWorker && (
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            Departments
          </label>
          <DepartmentInput
            memberDepartments={departments}
            availableDepartments={availableDepartments}
            onChange={handleDepartmentsChange}
          />
          {errors.churchDetails?.departments && (
            <p className="mt-2 text-sm text-red-500">
              {errors.churchDetails.departments.message}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
