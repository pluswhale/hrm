export type SurveyCardProps = {
    id: number;
    title: string;
    navigationUrl: string;
    deadlineFrom: string | Date | undefined;
    deadlineTo: string | Date | undefined;
    totalParticipants: number;
    completedParticipants: number;
    status: string;
};

