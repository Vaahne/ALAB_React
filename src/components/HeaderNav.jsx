import './common.css';
import nav from '../utilities/data.mjs';

export default function HeaderNav(){
    let headerData = nav.header.map((el)=>{
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