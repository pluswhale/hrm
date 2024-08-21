import { FC, ReactElement } from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

type Props = {
    position: 'left' | 'right' | 'alternate' | 'alternate-reverse' | undefined;
    items: { label: string; value: string }[];
};

export const TimelineItemBase: FC<Props> = ({ position, items }): ReactElement => {
    return (
        <Timeline position={position}>
            {items &&
                items.map((timelineItem, index: number) => {
                    return (
                        <TimelineItem key={index}>
                            <TimelineOppositeContent sx={{ fontSize: '16px' }} color="text.secondary">
                                {timelineItem.value}
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ fontSize: '16px' }}>{timelineItem.label}</TimelineContent>
                        </TimelineItem>
                    );
                })}
        </Timeline>
    );
};

