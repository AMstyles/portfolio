import { useRive, useStateMachineInput } from "rive-react";
import './treecounter.scss'
import { useState } from "react";

function Counter() {

    const initialheight = 0;
    const STATE_MACHINE_NAME = 'State Machine 1';

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



    return (<div className="container">
        <div className="animation" >

            <RiveComponent />

        </div>
        <div className="content">
            <div className="texts">
                <h1>REACTIVE COUNTER</h1>
                <h4>This is a counter to simulate a reactive website, have fun!</h4>
                <p className="par">Use the bottons to change the age of the tree</p>
                <h1>{height}</h1>


            </div>



            <div className="actions">

                <button className="autoShrink" >Shrink</button>

                <button className="btnd" onClick={() => { handleHeight('d') }}>-</button>
                <button className="btni" onMouseDown={() => { handleHeight('i') }} >+</button>

                <button className="autoGrow" >Auto Grow</button>
            </div>


        </div>

    </div>)
}

export default Counter;