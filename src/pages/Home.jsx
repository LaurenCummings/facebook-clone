import '../css/Home.css';
import Topbar from '../components/Topbar';
import Leftbar from '../components/Leftbar';
import Feed from '../components/Feed';
import Rightbar from '../components/Rightbar';

function Home() {
    return (
        <div>
            <Topbar />
            <div className="homeContainer">
                <Leftbar />   
                <Feed />
                <Rightbar />
            </div>
            
        </div>
    )
}

export default Home;