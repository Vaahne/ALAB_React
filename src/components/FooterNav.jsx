import './common.css';
import data from '../utilities/data.mjs';

export default function FooterNav(){
    let footerData = data.nav.footer.map((el)=>{
        return <li><a>{el}</a></li>;
    });

    return (
        <>
            <ul className='footerUl'>
                {footerData}
            </ul>
        </>
    );
}