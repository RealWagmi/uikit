import { Placement } from '@popperjs/core';
import { ReactNode } from 'react';

export interface ITooltipProps {
    content: ReactNode;
    children: ReactNode;
    placement?: Placement;
}
