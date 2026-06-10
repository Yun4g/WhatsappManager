import { Group } from "@/Component/GroupsUi";
import { AutomationFormData } from "@/pages/Dashboard/groupDetail";
import axios from "axios";




export const GetGroups = async () => {
    try {
        const res = await axios.get('https://manajer-x4iu.onrender.com/data/whatsapp/groups', {
            withCredentials: true,
        });
        return res.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const SelectGroups = async (groups: Group[]) => {
    const res = await axios.post(
        'https://manajer-x4iu.onrender.com/data/whatsapp/store-groups',
        { groups },
        { withCredentials: true }
    );
    return res.data;
};

export const SavedGroups = async () => {
    try {
        const res = await axios.get('https://manajer-x4iu.onrender.com/data/whatsapp/saved-groups'
            , {
                withCredentials: true,
            });
        return res.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

// /data/whatsapp/groups/:groupId

export const GetGroupById = async (groupId: string) => {
    try {
        const res = await axios.get(`https://manajer-x4iu.onrender.com/data/whatsapp/groups/${groupId}`, {
            withCredentials: true,
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
}


export const GetTriggersAndCategory = async () => {
    try {
        const res = await axios.get(`https://manajer-x4iu.onrender.com/automation/triggers`, {
            withCredentials: true,
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const CreateAutomation = async (data: AutomationFormData) => {
   


    try {
        const res = await axios.post(`https://manajer-x4iu.onrender.com/automation/create`,
            {
                userId: data.userId,
                group_wa_id: data.group_wa_id,
                name: data.name,
                trigger: data.trigger,
                trigger_config: data.trigger_config,
                category: data.category,
                message: data.message
            }, { withCredentials: true, }
        );
        return res.data;
    } catch (error) {
        console.log(error, 'error automation');
        throw error; 
    }
}



export const GetAllAutomation = async (group_wa_id: string) => {


    try {
        const res = await axios.post(`https://manajer-x4iu.onrender.com/automation/all`,
            {
                group_wa_id: group_wa_id
            },
            { withCredentials: true, }
        );
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

interface ScheduleMessageData {
    type: string;
    group_wa_id: string;
    message: string;
    phone: string;
    scheduled_at: string;
}


export const ScheduleMessage = async (data: ScheduleMessageData) => {

    try {
        const res = await axios.post(`https://manajer-x4iu.onrender.com/schedule/message`,
            {
                type: data.type,
                group_wa_id: data.group_wa_id,
                message: data.message,
                phone: data.phone,
                scheduled_at: data.scheduled_at
            },

            { withCredentials: true, }
        );
        return res.data;
    } catch (error) {
        console.log(error);
        // If the server returned a response (e.g., 403 with a message), return that body
        // so callers can surface the meaningful API message to users.
        // Otherwise return a generic error object.
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (error?.response?.data) return error.response.data;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return { success: false, message: error?.message || 'Failed to schedule message' };
    }
}


export const GetScheduleMessage = async (data: string) => {

    try {
        const res = await axios.post(`https://manajer-x4iu.onrender.com/schedule/all `,
            {
                group_wa_id: data,
            },

            { withCredentials: true, }
        );
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const ToggleAutomationButton = async (id: number, isActive: boolean) => {

    try {
        const res = await axios.get(`https://manajer-x4iu.onrender.com/automation/toggle?automationId=${id}&isActive=${isActive}`,
            { withCredentials: true, }
        );
        return res.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}


export const DeleteAutomation = async (automationId: number) => {
    try {
        const res = await axios.delete(`https://manajer-x4iu.onrender.com/automation/remove/?automationId=${automationId}`, {
            withCredentials: true,
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
}
