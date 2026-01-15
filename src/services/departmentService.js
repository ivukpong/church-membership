const DEPARTMENTS_KEY = 'church_departments';

const generateDepartmentId = (departments) => {
  const count = departments.length + 1;
  return `JCC-DEPT-${String(count).padStart(3, '0')}`;
};

export const departmentService = {
  getDepartments: () => {
    try {
      const data = localStorage.getItem(DEPARTMENTS_KEY);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Error reading departments from localStorage:', error);
      return [];
    }
  },

  saveDepartment: (departmentName) => {
    try {
      const departments = departmentService.getDepartments();
      const normalized = departmentName.trim();
      
      if (normalized && !departments.some(d => d.name.toLowerCase() === normalized.toLowerCase())) {
        const newDept = {
          id: generateDepartmentId(departments),
          name: normalized,
          createdAt: new Date().toISOString(),
        };
        departments.push(newDept);
        localStorage.setItem(DEPARTMENTS_KEY, JSON.stringify(departments));
        return departments;
      }
      return departments;
    } catch (error) {
      console.error('Error saving department:', error);
      throw error;
    }
  },

  deleteDepartment: (id) => {
    try {
      const departments = departmentService.getDepartments();
      const filtered = departments.filter(d => d.id !== id);
      localStorage.setItem(DEPARTMENTS_KEY, JSON.stringify(filtered));
      return filtered;
    } catch (error) {
      console.error('Error deleting department:', error);
      throw error;
    }
  },

  updateDepartment: (id, newName) => {
    try {
      const departments = departmentService.getDepartments();
      const index = departments.findIndex(d => d.id === id);
      if (index >= 0) {
        departments[index] = { ...departments[index], name: newName.trim() };
        localStorage.setItem(DEPARTMENTS_KEY, JSON.stringify(departments));
      }
      return departments;
    } catch (error) {
      console.error('Error updating department:', error);
      throw error;
    }
  },
};
