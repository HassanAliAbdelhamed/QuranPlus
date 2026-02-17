import Quraa from './Quraa';
import AutoCompleteReader from './AutoCompleteReader';
import HomeImg from '../Imgs/homeIconImage.png'


function Mui_DrawerSearch() {
  return (
    <>
          <img src={HomeImg} alt='This Is Home Image' style={{maxWidth:"100%" , height:"400px",marginTop:"-130px"}} />
          <AutoCompleteReader/>
          <Quraa />
    </>

  )
}



export default Mui_DrawerSearch;