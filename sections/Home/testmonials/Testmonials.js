//react icons
import { AiFillStar } from 'react-icons/ai';
//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination } from "swiper";
SwiperCore.use([Autoplay,Pagination]);
import 'swiper/css';

//components
import SectionHeading from '../../../components/SectionHeading';
//styled components
import { TestContainer } from "./Testmonials.styled"
import { StyledContainer, Title, Paragraph, Icon, Flex } from "../../../components/layout/Layout.styled"
//data
import Data from './Data';

const Testmonials = () => {
    return (
        <TestContainer className='space'>
            <StyledContainer>
                <SectionHeading title="what our customers say."/>
                <Swiper
                    spaceBetween={30}
                    slidesPerView={2}
                    autoplay={{"delay": 2500, "disableOnInteraction": false }}
                    pagination={{ "clickable": true }}
                    breakpoints={{
                        "350": {
                            "slidesPerView": 1,
                            "spaceBetween": 20
                        },
                        "640": {
                            "slidesPerView": 1,
                            "spaceBetween": 20
                        },
                        "768": {
                            "slidesPerView": 2,
                            "spaceBetween": 20
                        },
                        "1024": {
                            "slidesPerView":2,
                            "spaceBetween": 30
                        }
                    }}
                >
                    {Data.map(d => (
                        <SwiperSlide className="singleswiper" key={d.id} > 
                            <Paragraph Weight="700">{d.rate} <AiFillStar className="golden" /></Paragraph>
                            <Paragraph>{d.desc}</Paragraph>
                            <Flex m="40px 0 0 0">
                                <Flex Justify="space-evenly" Align="center">
                                    <img />
                                    <div>
                                        <Title>{d.person}</Title>
                                        <Paragraph>{ d.job }</Paragraph>
                                    </div>
                                </Flex>
                                <Icon style={{color:` ${d.color}`}}>{ d.companylogo }</Icon>
                            </Flex>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </StyledContainer>
        </TestContainer>
    )
}

export default Testmonials