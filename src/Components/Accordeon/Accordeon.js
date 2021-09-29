import {useState, useRef, useEffect} from 'react';
import Chevron from './chevron.svg';
import './Accordeon.css';

export default function Accordeon() {

    const [toggle, setToggle] = useState(false);
    const [heightEl, setHeightEl] = useState();

    const toggleState = () => {
        setToggle(!toggle);
    };

    const refHeight = useRef();

    useEffect(() => {

        setHeightEl(`${refHeight.current.scrollHeight}px`);

    }, []);




    return (
        <div className="accordeon">

           <div onClick={toggleState} className="accordeon-visible">
               <h2>Lorem ipsum dolor sit amet consectetur.</h2>
               <img src={Chevron} alt="chevron down" className={toggle ? 'rotate' : 'rotate-none'} />
           </div>

            <div ref={refHeight} className={toggle ? 'accordeon-toggle animated' : 'accordeon-toggle'}  style={{height : toggle ? `${heightEl}` : "0px"}}>
                <p aria-hidden={toggle ? 'true' :'false'}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptatum esse minima ea quidem itaque nihil aut nostrum libero mollitia earum, assumenda error aspernatur nobis architecto suscipit voluptas sunt eveniet?
                </p>
            </div>

        </div>
    );
};
