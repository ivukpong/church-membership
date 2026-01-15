const STORAGE_KEY = 'church_members';

const generateMemberId = (members, memberType) => {
  // Filter members by type to get correct count
  const typePrefix = memberType === 'Worker' ? 'WRK' : 
                     memberType === 'Volunteer' ? 'VOL' : 'MBR';
  const sameTypeMembers = members.filter(m => {
    const prefix = m.id.split('-')[1];
    return prefix === typePrefix;
  });
  const count = sameTypeMembers.length + 1;
  return `JCC-${typePrefix}-${String(count).padStart(3, '0')}`;
};

export const storageService = {
  getMembers: () => {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return [];
    }
  },

  saveMember: (member) => {
    try {
      const members = storageService.getMembers();
      const existingIndex = members.findIndex(m => m.id === member.id);
      
      if (existingIndex >= 0) {
        members[existingIndex] = { ...member, updatedAt: new Date().toISOString() };
      } else {
        const memberId = generateMemberId(members, member.churchDetails.memberType);
        members.push({
          ...member,
          id: memberId,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        });
      }
      
      localStorage.setItem(STORAGE_KEY, JSON.stringify(members));
      return members;
    } catch (error) {
      console.error('Error saving to localStorage:', error);
      throw error;
    }
  },

  deleteMember: (id) => {
    try {
      const members = storageService.getMembers();
      const filtered = members.filter(m => m.id !== id);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
      return filtered;
    } catch (error) {
      console.error('Error deleting from localStorage:', error);
      throw error;
    }
  },

  getMemberById: (id) => {
    const members = storageService.getMembers();
    return members.find(m => m.id === id);
  },
};
