import './app.css';
import Main from './main'
import Head from './head';
import Body from './body';
import Body2 from './body2';
function Home() {
  return (
     <div className='tombox'>
        <Main/>
        <div className='dundbox'>
        <Head/>
           <div className='jijigbox'>
               <Body/>
               <Body2/>
              </div>
            </div>
        </div>
        
  );
}

export default Home;
