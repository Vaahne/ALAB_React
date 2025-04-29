import './common.css';
import data from '../utilities/data.mjs';

export default function HeaderNav(){
    let headerData = data.nav.header.map((el)=>{
        return <li><a>{el}</a></li>;
    });

    return (
        <>
            <ul className="headerUl">
                {headerData}
            </ul>
        </>
    );
}