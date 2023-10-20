import parse from 'html-react-parser';
import Button from '../Button';
import Div from '../Div';
import VerticalLinks from '../VerticalLinks';
import TypeAnimation from "../TypeAnimation";

export default function Hero({
  title,
  subtitle,
  btnText,

  scrollDownId,
  socialLinksHeading,
  heroSocialLinks,
  bgImageUrl,
}) {
  return (
    <Div
      className=" text-center cs-hero cs-style1 cs-bg cs-fixed_bg cs-shape_wrap_1"
      style={{ backgroundImage: `url(${bgImageUrl})` }}
    >
      <Div className="cs-shape_1" />
      <Div className="cs-shape_1" />
      <Div className="cs-shape_1" />
      <Div className="container">
        <Div>
          <Div className="cs-hero_subtitle">{subtitle}</Div>
        </Div>
        <Div className="cs-hero_text">
          <h1 className="cs-hero_title">{parse(title)}</h1>
          <Div className="cs-hero_info d-flex align-items-center justify-content-center">
            <TypeAnimation sequence={'hello', 'world'}/>

          </Div>
        </Div>
      </Div>
      <VerticalLinks data={heroSocialLinks} title={socialLinksHeading} />
    </Div>
  );
}
