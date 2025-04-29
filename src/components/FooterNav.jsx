import './common.css';
import nav from '../utilities/data.mjs';

export default function FooterNav(){
    let footerData = nav.footer.map((el)=>{
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