import './header.css';

export default function Header() {
    return (
        <div className='header'>
            <div className="headerTitles">
                <span className='headerTitleSm'>React & Node</span>
                <span className='headerTitleLg'>Blog</span>
            </div>

            <img className='headerImg' src="https://images.pexels.com/photos/29066166/pexels-photo-29066166/free-photo-of-venetian-piazza-overlooking-san-giorgio-maggiore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
    )
}
