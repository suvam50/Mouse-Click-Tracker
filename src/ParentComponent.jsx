import MouseTracker from "./MouseTracker";
import { useEffect, useState } from 'react'
function ParentComponent(){
const [showComponent,setShowComponent]=useState(true);

const toggleComponent=()=>{
    setShowComponent((prev)=>!prev);
};

return (
    <div>
        <button onClick={toggleComponent}>
            {showComponent?'unmount Tracker':'Mount Tracker'}
        </button>
        {showComponent && <MouseTracker/>}
    </div>
)


}
export default ParentComponent;