import { Instance } from '../api-config';

export const appealsApi = {
    createAppeal: (body: any) => Instance.post(`appeals`, body),
    updateAppeal: (body: any) => {
        const { appealId, ...rest } = body;
        return Instance.put(`appeals/${appealId}`, rest);
    },
    getAllAppeals: (isActive = true, name?: string) =>
        Instance.get(`appeals?isActive=${isActive}${name ? `&name=${name}` : ''}`),
    getAppealById: (appealId: string) => Instance.get(`appeals/${appealId}`),
    deleteAppealById: (appealId: string) => Instance.delete(`appeals/${appealId}`),
    setAppealStatusById: (appealId: string, body: { status: boolean }) =>
        Instance.patch(`appeals/${appealId}/set-status`, body),
    bindCandidatesToAppeal: (appealId: string, body: { candidateIds: number[] }) =>
        Instance.patch(`appeals/${appealId}/bind-candidates`, body),

    moveCandidateInStages: (appealId: string, candidateId: number, body: { fromStageId: number; toStageId: number }) =>
        Instance.patch(`appeals/${appealId}/candidates/${candidateId}/move`, body),
    getConversionByAppealId: (appealId: string) => Instance.get(`appeals/${appealId}/stage-conversions`),
};

