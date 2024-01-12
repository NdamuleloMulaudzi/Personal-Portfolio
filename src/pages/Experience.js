import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { School, Work } from '@material-ui/icons'

function Experience() {
    return (
        <div className="experience">
            <VerticalTimeline lineColor="#3e497a">
                <VerticalTimelineElement className='vertical-timeline-element--education'
                    date='2014-2019'
                    iconStyle={{ backgroundColor: "#3e497a", color: '#fff' }}
                    icon={<School />}>
                    <h3 className='vertical-timeline-element-title'>
                        Flavius Mareka High School, Atteridgeville
                    </h3>
                    <p>
                        Admission to Bachelor's Degree Certificate
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className='vertical-timeline-element--education'
                    date='2021-2022'
                    iconStyle={{ backgroundColor: "#e9d35b", color: '#fff' }}
                    icon={<School />}>
                    <h3 className='vertical-timeline-element-title'>
                        University of Pretoria, Pretoria
                    </h3>
                    <p>
                        BSc Physical Science(incompleted)
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className='vertical-timeline-element--education'
                    date='2022 November 28'
                    iconStyle={{ backgroundColor: "#3e497a", color: '#fff' }}
                    icon={<School />}>
                    <h3 className='vertical-timeline-element-title'>
                        freecodeCamp
                    </h3>
                    <p>
                        Responsive Web Design
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className='vertical-timeline-element--education'
                    date='2023'
                    iconStyle={{ backgroundColor: "#e9d35b", color: '#fff' }}
                    icon={<School />}>
                    <h3 className='vertical-timeline-element-title'>
                        Scrimba
                    </h3>
                    <p>
                        JavaScript, ReactJs
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className='vertical-timeline-element-work'
                    date='2023-2024'
                    iconStyle={{ backgroundColor: "#3e497a", color: '#fff' }}
                    icon={<Work />}>
                    <h3 className='vertical-timeline-element-title'>
                        Freelancing
                    </h3>
                    <p>
                        Coded using HTML, CSS and JavaScript to develop features for both mobile and
                        desktop platforms
                        Designed and updated layouts to meet usability and performance requirement
                        Produced websites compatible with multiple browsers.

                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

export default Experience