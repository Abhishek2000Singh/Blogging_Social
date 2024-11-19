import { Sidebar, SinglePost } from "../../components/indexComp"
import "./single.css"

export default function Single() {
    return (
        <div className="single">
            {/* post */}
            <SinglePost />
            <Sidebar />
        </div>
    )
}
