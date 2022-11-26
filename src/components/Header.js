import {MdFolder} from 'react-icons/md';

export const Header = ()=>{

    return(
        <div className="header">
            <div className="header-container">
                <div className="header-inner">
                    <div className="header-img">
                        <div className="header-img-container"><MdFolder/></div>
                        <div className="header-text">Nolita</div>
                    </div>
                </div>
            </div>

        </div>
    );
}