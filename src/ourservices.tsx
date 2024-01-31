import './ourservices.css';

export default function OurServices(props: { imageSrc: any, headerText: any, serviceText: any }) {
  return (
      <div className='service'>
      <div
          className='bgelement'
          style={{ backgroundImage: `url(${props.imageSrc})`, }}
      />
      <span className='sstext'>{props.headerText}</span>
      <span className='sstext1'>{props.serviceText}</span>
      </div>
  );
}