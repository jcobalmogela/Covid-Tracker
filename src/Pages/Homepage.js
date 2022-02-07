import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Row,Container,Col } from 'react-bootstrap';

//component
import PieChart from '../Component/PieChart';
import Cardss from '../Component/Card'


const Homepage = () => {
    const [covidData,setcovidData] = useState([]);
    const [DataValue,setDataValue] = useState(9);
    const [SelectedData,setSelectedData] = useState(covidData[DataValue]);
    const [Cases,setCases] = useState([1,2,3]);
    const [covidDataSort,setcovidDataSort] = useState([]);

 

    useEffect(()  => {
        axios.get('https://covid-193.p.rapidapi.com/statistics',{
             "method": "GET",
             "headers": {
             "x-rapidapi-host": "covid-193.p.rapidapi.com",
             "x-rapidapi-key": "820d11359bmsh85ea73b2c079b50p139698jsn4dd96e3278b6",
             },
        })
       .then(response => {
          console.log(response.data.response);
          setcovidData(response.data.response);
          setSelectedData(response.data.response[DataValue]);
          setCases(response.data.response[DataValue].cases);
        
        },error => {
            console.log(error);
        });
},[])


   const changeValue = (e) => {
 
    console.log(e);
    setDataValue(parseInt(e.target.value));
  
   
}


console.log(DataValue);
console.log(Cases);


  return <div className="p-2 p-lg-5">
    <Container fluid>
        <Row>
           <Col lg={3}>
                <div className="p-1">
                    <h6 className="p-0 m-0">REGION/COUNTRY</h6>
                    <select onChange={changeValue}    className="form-select">
                        <option defaultValue={SelectedData?.country}>{SelectedData?.country}</option>
                         {covidData.map((data,idx )=> {
                             return(
                                 <option onClick={changeValue}  key={idx} value={idx}>{data?.country}{idx}</option>
                             )
                         })}
                    </select>
                </div>
                 <div className="p-1">
                    <h6 className="p-0 m-0">WHEN</h6>
                    <select className="form-select" aria-label="Disabled select example">
                        <option defaultValue={'TODAY'}>TODAY</option>
                        <option value={'3'}>YESTERDAY</option>
                        <option value={'3'}>LAST WEEK</option>
                        <option value={'3'}>LAST MONTH</option>
                    </select>
                </div>
                <div className="p-1">
                      <PieChart></PieChart>
                </div>
           </Col>
           <Col  lg={9}>
               <div className="p-1">
                       <Row  className='p-0 m-0'>
                          {Object.entries(Cases).map(([key, value]) => (
                               <Col  lg={4} className='p-2'>
                                <Cardss title={key} value={value}></Cardss>
                               </Col>
                            ))}
                       </Row>
               </div>
           </Col>
        </Row>
    </Container>
  </div>;
};

export default Homepage;
