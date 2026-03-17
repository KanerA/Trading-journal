import { useMutation } from '@tanstack/react-query';
import type { Trade } from '@trading-journal/types';
import api from '../lib/api';

export const useUpdateTrade = () => {
    const { mutateAsync } = useMutation({
        mutationFn: async (trade: Trade) => {
            const { data } = await api.put(`/trade/${trade.id}`, trade);
            return data;
        },
    });
    return (trade: Trade) => mutateAsync(trade);
};
