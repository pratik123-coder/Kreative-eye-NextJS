import parse from 'html-react-parser';
import Div from '../Div';
import Link from 'next/link';

export default function CaseStudy({ title, bgUrl, variant, href }) {
  return (
    <Div className={variant ? `cs-case_study ${variant}` : `cs-case_study`}>
      <Div className="cs-case_study_bg">
        <Div className="cs-accent_bg" />
        <Div className="cs-bg" style={{ backgroundImage: `url(${bgUrl})` }} />
      </Div>
      <h2 className="cs-case_study_title">
        <Link href={href}>{parse(title)}</Link>
      </h2>
    </Div>
  );
}
