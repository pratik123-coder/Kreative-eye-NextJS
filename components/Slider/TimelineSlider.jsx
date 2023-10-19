import { Icon } from '@iconify/react';

import Slider from 'react-slick';
import Div from '../Div';
import Timeline from '../Timeline';

export default function TimelineSlider() {
  const timelineData = [
    [
      {
        year: '2023',
        name: 'Smruti Mohanty',
        position: 'IP-Best photographer',
        type: 'IEM MUN 2023',
      },
      {
        year: '2023',
        name: 'Ashutosh Rath',
        position: 'IP-Special Mention Photographer',
        type: 'Jadhapur University MUN 2023',
      },
    ],
    [
      {
        year: '2023',
        name: 'Vishal Kumar Sahoo',
        position: 'Best Photographer',
        type: 'Lok Sabha LitSpree IIT Bhubaneswar',
      },
      {
        year: '2023',
        name: 'Shubham Mahapatra',
        position: 'Photographer In Chief',
        type: 'KIIT International School MUN',
      },
    ],

  ];

  /** Slider Settings **/
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
    >
      <Icon icon="bi:arrow-left" />
    </div>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-next slick-arrow' +
        (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
    >
      <Icon icon="bi:arrow-right" />
    </div>
  );
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    arrows: false,
    responsive: [
      {
        breakpoint: 470,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings} className="cs-arrow_style3">
      {timelineData.map((item, index) => (
        <Div key={index}>
          <Timeline columnData={item} />
        </Div>
      ))}
    </Slider>
  );
}
