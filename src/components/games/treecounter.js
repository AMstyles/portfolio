
import { useRive, useStateMachineInput } from "rive-react";
import './treecounter.scss'

function Counter() {
    const { rive, RiveComponent } = useRive({
        src: 'sign_up_now.riv',
        autoplay: true,
        stateMachines: 'State Machine 1'

    })

    return (<div className="container">
        <div className="animation">

        </div>
        <div className="content">
            <Te

        </div>

    </div>)
}

export default Counter;