import { useMutation, useQueryClient } from '@tanstack/react-query';
import { appealsApi } from '.';
import { useNavigate } from 'react-router';

export const useCreateAppeal = () => {
    const navigate = useNavigate();
    const qc = useQueryClient();
    return useMutation({
        mutationFn: (body: any) => appealsApi.createAppeal(body),
        onSuccess: () => {
            qc.invalidateQueries({ queryKey: ['fetchAllAppeals'] });
            navigate('/appeals');
        },
    });
};

export const useUpdateAppeal = () => {
    const navigate = useNavigate();
    const qc = useQueryClient();
    return useMutation({
        mutationFn: (body: any) => appealsApi.updateAppeal(body),
        onSuccess: () => {
            qc.invalidateQueries({ queryKey: ['fetchAllAppeals'] });
            navigate('/appeals');
        },
    });
};

export const useDeleteAppeal = () => {
    const navigate = useNavigate();
    const qc = useQueryClient();
    return useMutation({
        mutationFn: (appealId: string) => appealsApi.deleteAppealById(appealId),
        onSuccess: () => {
            qc.invalidateQueries({ queryKey: ['fetchAllAppeals'] });
            navigate('/Appeals');
        },
    });
};

export const useSetAppealStatus = () => {
    const navigate = useNavigate();
    const qc = useQueryClient();
    return useMutation({
        mutationFn: (body: { appealId: string; status: boolean }) => {
            const { appealId, ...rest } = body;
            return appealsApi.setAppealStatusById(appealId, rest);
        },
        onSuccess: () => {
            qc.invalidateQueries({ queryKey: ['fetchAllAppeals'] });
            navigate('/appeals');
        },
    });
};

export const useBindCandidateToAppeal = () => {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: (body: { appealId: string; candidateIds: number[] }) => {
            const { appealId, ...rest } = body;
            return appealsApi.bindCandidatesToAppeal(appealId, rest);
        },
        onSuccess: () => {
            qc.invalidateQueries({ queryKey: ['fetchAppealById'] });
        },
    });
};

export const useMoveCandidateInStage = () => {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: (body: { appealId: string; candidateId: number; fromStageId: number; toStageId: number }) => {
            const { appealId, candidateId, ...rest } = body;
            return appealsApi.moveCandidateInStages(appealId, candidateId, rest);
        },
        onSuccess: () => {
            qc.invalidateQueries({ queryKey: ['fetchAppealById'] });
        },
    });
};

