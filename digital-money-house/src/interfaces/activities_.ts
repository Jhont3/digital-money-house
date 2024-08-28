export interface Activity {
    id: number;
    account_id: number;
    type: string;
    description: string;
    origin: string;
    destination: string;
    amount: number;
    dated: string;
}

export interface UserActivityProps {
    itemsPerPage: number;
    showPagination?: boolean;
    allActivities?: Activity[]; 
    sortedTenActivities?: Activity[];
    search?: string;
}
