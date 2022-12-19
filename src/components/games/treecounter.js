import { useRive, useStateMachineInput } from "rive-react";
import './treecounter.scss'
import { useState } from "react";

function Counter() {

    const initialheight = 0;
    const STATE_MACHINE_NAME = 'State Machine 1';
    const INTERVAL = 30;
    let isForward = true;

    const [height, setHeight] = useState(initialheight)

    const { rive, RiveComponent } = useRive({
        src: 'tree-counter.riv',
        autoplay: true,
        stateMachines: 'State Machine 1'

    })

    const treeHeight = useStateMachineInput(rive, STATE_MACHINE_NAME, 'input');

    function handleHeight(input) {
        if (input === 'd') {
            setHeight(height - 1);
            treeHeight.value = height;

        }
        else {
            setHeight(height + 1);
            treeHeight.value = height;
        }

    }

    function autoGrow() {

        var myInterval = setInterval(() => {
            if (treeHeight.value < 100) {
                treeHeight.value = treeHeight.value + 1;
                console.log(treeHeight.value)
                setHeight(treeHeight.value)

            }
            else {

                setHeight(100);
                clearInterval(myInterval);
                return;
            }

        }
            , INTERVAL);


    }

    function autoShrink() {
        let myInterval = setInterval(() => {
            if (treeHeight.value > 0) {
                treeHeight.value = treeHeight.value - 1;
                console.log(treeHeight.value)
                setHeight(treeHeight.value)

            }
            else {

                setHeight(0);
                clearInterval(myInterval);
                return;
            }

        }
            , INTERVAL);

    }

    function autoplay() {
        if (height < 100) {
            autoGrow();
        }
        else {
            autoShrink();
        }
    }





    return (<div className="container">
        <div className="animation" onClick={autoplay}>

            <RiveComponent />

        </div>

        <div className="content">
            <div className="texts">
                <h1 className="header">REACTIVE COUNTER</h1>

                <h2 className="sub-header">This is a counter to simulate a reactive website, have fun!</h2>

                <h className="height" >{height}</h>
                <p className="par"> <span className="protip">Protip </span>: click on the tree to animate its growth</p>
            </div>

            <div className="actions">

                {/* <button className="autoShrink" >Shrink</button> */}

                <button className="btnd" onClick={() => { handleHeight('d') }}>-</button>
                <button className="btni" onMouseDown={() => { handleHeight('i') }} >+</button>


                {/* <button className="autoGrow" >Auto Grow</button> */}
            </div>


        </div>

    </div>)
}

export default Counter;