import { supabase } from '../lib/supabase';

const generateMemberId = async (memberType) => {
  // Get count of members with this type prefix using efficient count query
  const typePrefix = memberType === 'Worker' ? 'WRK' : 
                     memberType === 'Volunteer' ? 'VOL' : 'MBR';
  
  const { count, error } = await supabase
    .from('members')
    .select('id', { count: 'exact', head: true })
    .like('id', `JCC-${typePrefix}-%`);
  
  if (error) {
    console.error('Error counting members:', error);
    return `JCC-${typePrefix}-001`;
  }
  
  const nextCount = (count || 0) + 1;
  return `JCC-${typePrefix}-${String(nextCount).padStart(3, '0')}`;
};

export const storageService = {
  getMembers: async () => {
    try {
      const { data, error } = await supabase
        .from('members')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      
      // Transform database format to app format
      return data?.map(member => ({
        id: member.id,
        personalDetails: member.personal_details,
        churchDetails: member.church_details,
        createdAt: member.created_at,
        updatedAt: member.updated_at,
      })) || [];
    } catch (error) {
      console.error('Error reading from Supabase:', error);
      return [];
    }
  },

  saveMember: async (member) => {
    try {
      if (member.id) {
        // Update existing member - direct update without pre-fetch
        const { error } = await supabase
          .from('members')
          .update({
            personal_details: member.personalDetails,
            church_details: member.churchDetails,
            updated_at: new Date().toISOString(),
          })
          .eq('id', member.id);
        
        if (error) throw error;
      } else {
        // Create new member with generated ID - optimized count query
        const memberId = await generateMemberId(member.churchDetails.memberType);
        const { error } = await supabase
          .from('members')
          .insert({
            id: memberId,
            personal_details: member.personalDetails,
            church_details: member.churchDetails,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          });
        
        if (error) throw error;
      }
      
      // Return null to indicate success without refetching
      return null;
    } catch (error) {
      console.error('Error saving to Supabase:', error);
      throw error;
    }
  },

  deleteMember: async (id) => {
    try {
      const { error } = await supabase
        .from('members')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
      return null;
    } catch (error) {
      console.error('Error deleting from Supabase:', error);
      throw error;
    }
  },

  getMemberById: async (id) => {
    const members = await storageService.getMembers();
    return members.find(m => m.id === id);
  },
};
