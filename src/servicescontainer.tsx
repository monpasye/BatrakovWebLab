import Service from "./ourservices.tsx";
import './servicescontainer.css';

export default function OurSs() {
    return (
        <div className="ssc">
            <Service imageSrc={'src/assets/images/zoom.svg'} headerText={'Search doctor'} serviceText={'Choose your doctor from thousands of specialist, general, and trusted hospitals'}  />
            <Service imageSrc={'src/assets/images/canaid.svg'} headerText={'Online pharmacy'} serviceText={'Buy your medicines with our mobile application with a simple delivery system'}  />
            <Service imageSrc={'src/assets/images/listt.svg'} headerText={'Consultation'} serviceText={'Free consultation with our trusted doctors and get the best recomendations'}  />
            <Service imageSrc={'src/assets/images/listhealth.svg'} headerText={'Details info'} serviceText={'Free consultation with our trusted doctors and get the best recomendations'}  />
            <Service imageSrc={'src/assets/images/aid.svg'} headerText={'Emergency care'} serviceText={'You can get 24/7 urgent care for yourself or your children and your lovely family'}  />
            <Service imageSrc={'src/assets/images/list.svg'} headerText={'Tracking'} serviceText={'Track and save your medical history and health data'}  />
        </div>
    );
}