import React from "react";
import "./index.css";
import ChartComponent from "./components/Chart";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Switch from "@mui/material/Switch";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import LinearProgress from "@mui/material/LinearProgress";
import GaugeChart from 'react-gauge-chart';
import AirIcon from '@mui/icons-material/Air';
import ThermostatOutlinedIcon from '@mui/icons-material/ThermostatOutlined';
import ThunderstormOutlinedIcon from '@mui/icons-material/ThunderstormOutlined';
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';

const Weather = () => {
  return (
    <div>
      <Container style={{ marginTop: 20 }}>
        <Row className="colum_1">
          <Col xs="12" sm="12" md="4" lg="3" className="col_1">
            <Row className="menu" style={{ padding: 20 }}>
              <Col xs="4" sm="4" md="4" lg="4">
                <AddBoxIcon sx={{ color: "#fff" }} fontSize="large" />
              </Col>
              <Col xs="4" sm="4" md="4" lg="4"><MoreHorizIcon className="leftMoreHoriz"/></Col>
              <Col xs="4" sm="4" md="4" lg="4">
                <Row className="degreeSwitch">
                  °C
                  <Switch className="switch"/>
                  °F
                </Row>
              </Col>
            </Row>
            <Row className="subMenu">
              <Col xs="8" sm="8" md="8">
                <Row className="cityName">
                <Col xs="2" sm="2" md="2"><NearMeOutlinedIcon sx={{ color: "#fff" }} fontSize="small" /></Col> 
                <Col xs="10" sm="10" md="10">New York,USA</Col>
                </Row>
              </Col>
              <Col xs="4" sm="4" md="4">
                <Row className="cityName">
                  <WbSunnyOutlinedIcon sx={{ color: "#fff" }} fontSize="large" />
                  07:19
                </Row>
              </Col>
            </Row>
            <Row className="subMenu">
              <Col xs="8" sm="8" md="8">
                <Row className="cityName">Today 28 Sept</Row>
              </Col>
              <Col xs="4" sm="4" md="4">
                <Row className="cityName">
                  <WbSunnyOutlinedIcon sx={{ color: "#fff" }} fontSize="large" />
                  19:32
                </Row>
              </Col>
            </Row>
            <Row className="degreeValue">
              <Col>
                <ArrowBackIosIcon />
              </Col>
              <Col className="degreeValue">27°</Col>
              <Col>
                <ArrowForwardIosIcon />
              </Col>
            </Row>
            <Row className="degreeValue">
              <Col></Col>
              <Col className="climateName">
                <WbSunnyOutlinedIcon />
                Sunny
              </Col>
              <Col></Col>
            </Row>
            <Row>
              <Col xs="12" sm="12" md="12" lg="12" >
              <img
                  className="img_1"
                  src="https://cf.geekdo-images.com/c-JWxrNnVbVDhP-rVAi7UA__opengraph/img/kvb4pzuHx5Kv1jF60ArDMvD2Y2A=/fit-in/1200x630/filters:strip_icc()/pic3739072.jpg"
                  alt="ProfileImage"
                />
              </Col>
            </Row>
          </Col>
          <Col
            xs="12"
            sm="12"
            md="8"
            lg="9"
            style={{ backgroundColor: "#E4F1FF" }}
            className="col_2"
          >
            <Row className="header">
              <Col xs="10" sm="10" md="10">
                <Row className="welcomeHeader">Welcome back Isabella!</Row>
                <Row className="welcomeSubHeader">
                  Check out today's weather information
                </Row>
              </Col>
              <Col xs="1" sm="1" md="1">
                <MoreHorizIcon />
              </Col>
              <Col xs="1" sm="1" md="1">
                <img
                  className="profileImage"
                  src="https://upload.wikimedia.org/wikipedia/commons/5/5c/For_profile.jpg"
                  alt="ProfileImage"
                />
              </Col>
            </Row>
            <Row className="chart">
              <Row className="chartHeader">
                <Col xs="12" sm="12" md="12" lg="6">
                  <Row className="chartHeaderText">Upcoming hours</Row>
                </Col>
                <Col xs="6" sm="6" md="6" lg="3" className="rainPrecipition rainPrecipitionInput" >
                  <FormControl sx={{ m: 1, width: 180 }} size={"small"} className="rainPrecipitionInput">
                    <InputLabel id="demo-multiple-name-label" className="rainPrecipitionInput">Rain Precipitation</InputLabel>
                    <Select
                      labelId="demo-multiple-name-label"
                      id="demo-multiple-name"
                    ></Select>
                  </FormControl>
                </Col>
                <Col xs="6" sm="6" md="6" lg="3" className="rainPrecipitionBtn">
                  <Button variant="outlined" endIcon={<ArrowForwardIosIcon />} className="rainPrecipitionBtn">
                    Next Days
                  </Button>
                </Col>
                <Row>
                <ChartComponent className="chart"/>
              </Row>
              </Row>
              
            </Row>
            <Row className="chart">
              <Row>
                <Col xs="12" sm="12" md="12">
                  <Row>more details of today's weather</Row>
                </Col>
              </Row>

                {/* 2 Row two Starts */}
              <Row>
                      {/* 3 card Start */}
                <Col xs="12" sm="6" md="6" lg="4">
                  <Row className="weatherCard weatherCardHeightProp">
                    <Row style={{padding:5}}>
                      <Col>Humidity</Col>
                      <Col >
                        <ArrowForwardIosIcon className="weatherIcon" />
                      </Col>
                    </Row>
                    <Row style={{padding:5}}>
                      <Col className="humidityText">
                        <span style={{fontSize:20,fontWeight:'bold'}} >82%</span> bad
                      </Col>
                    </Row>
                    <Row style={{padding:5}}>
                      <Col xs="4" sm="4" md="4" lg="4" className="progressBar" >
                        Good
                        <LinearProgress variant="determinate" value={100} className="humidityProgress" />
                      </Col>
                      <Col xs="4" sm="4" md="4" lg="4" className="progressBar">
                        Normal
                        <LinearProgress variant="determinate" value={100} className="humidityProgress"/>
                      </Col>
                      <Col xs="4" sm="4" md="4" lg="4" className="progressBar">
                        Bad
                        <LinearProgress variant="determinate" value={30} className="humidityProgress"/>
                      </Col>
                    </Row>
                  </Row>
                </Col>
                      {/* 3 card End */}

                      {/* 2 card Start */}
                <Col xs="12" sm="6" md="6" lg="4">
                  <Row className="weatherCard weatherCardHeightProp">
                    <Row style={{padding:5}}>
                      <Col>Humidity</Col>
                      <Col>
                        <AirIcon className="weatherIcon"/>
                      </Col>
                    </Row>
                    <Row>
                    <GaugeChart id="gauge-chart1" 
                      nrOfLevels={5} 
                      percent={0.40} 
                      colors={['#5C9CE5','#5C9CE5','#c0c0c0','#c0c0c0','#c0c0c0']}
                      textColor={'#000'}
                      needleColor="#5C9CE5" 
                      needleBaseColor="#5C9CE5"
                      formatTextValue={(value)=> value+' Km/h'}
                    />
                    </Row>
                  </Row>
                </Col>
                      {/* 2 card End */}

                      {/* 3 card Start */}
                <Col xs="12" sm="6" md="6" lg="4">
                  <Row className="weatherCard weatherCardHeightProp">
                    <Row style={{padding:5}}>
                      <Col>Precipitation</Col>
                      <Col>
                        <ArrowForwardIosIcon className="weatherIcon"/>
                      </Col>
                    </Row>
                    <Row style={{padding:5}}>
                      <Col className="humidityText">
                        <span style={{fontSize:20,fontWeight:'bold'}} >1.4</span> cm
                      </Col>
                    </Row>
                    <Row style={{padding:5}}>
                      <Col xs="1" sm="1" md="1" lg="1" className="PrecipitationProgressBar" >
                        0
                        <LinearProgress variant="determinate" value={100} className="PrecipitationHumidityProgress" />
                      </Col>
                      <Col xs="1" sm="1" md="1" lg="1" className="PrecipitationProgressBar">
                        10
                        <LinearProgress variant="determinate" value={50} className="PrecipitationHumidityProgress"/>
                      </Col>
                      <Col xs="1" sm="1" md="1" lg="1" className="PrecipitationProgressBar">
                        20
                        <LinearProgress variant="determinate" value={0} className="PrecipitationHumidityProgress"/>
                      </Col>

                      <Col xs="1" sm="1" md="1" lg="1" className="PrecipitationProgressBar" >
                        30
                        <LinearProgress variant="determinate" value={0} className="PrecipitationHumidityProgress" />
                      </Col>
                      <Col xs="1" sm="1" md="1" lg="1" className="PrecipitationProgressBar">
                        40
                        <LinearProgress variant="determinate" value={0} className="PrecipitationHumidityProgress"/>
                      </Col>
                      <Col xs="1" sm="1" md="1" lg="1" className="PrecipitationProgressBar">
                        50
                        <LinearProgress variant="determinate" value={0} className="PrecipitationHumidityProgress"/>
                      </Col>

                      <Col xs="1" sm="1" md="1" lg="1" className="PrecipitationProgressBar" >
                        60
                        <LinearProgress variant="determinate" value={0} className="PrecipitationHumidityProgress" />
                      </Col>
                      <Col xs="1" sm="1" md="1" lg="1" className="PrecipitationProgressBar">
                        70
                        <LinearProgress variant="determinate" value={0} className="PrecipitationHumidityProgress"/>
                      </Col>
                      <Col xs="1" sm="1" md="1" lg="1" className="PrecipitationProgressBar">
                        80
                        <LinearProgress variant="determinate" value={0} className="PrecipitationHumidityProgress"/>
                      </Col>
                                     
                    </Row>
                  </Row>
                </Col>
                      {/* 3 card End */}
              </Row>
                {/* 2 Row two Ends */}

                {/* 3 Row two Starts */}
              <Row>
                      {/* 1 card Start */}
                <Col xs="12" sm="6" md="6" lg="4">
                  <Row className="weatherCard weatherCardHeightProp">
                    <Row style={{padding:5}}>
                      <Col>UV index</Col>
                      <Col >
                        <WbSunnyOutlinedIcon className="weatherIcon" />
                      </Col>
                    </Row>
                    <Row style={{padding:5}}>
                      <Col className="humidityText">
                        <span style={{fontSize:20,fontWeight:'bold'}} >4</span> medium
                      </Col>
                    </Row>
                    <Row style={{padding:5}}>
                      <Col xs="2" sm="2" md="2" lg="2" className="uvProgressBar" >
                        0-2
                        <LinearProgress variant="determinate" value={100} className="uvProgress" />
                      </Col>
                      <Col xs="2" sm="2" md="2" lg="2" className="uvProgressBar">
                        3-5
                        <LinearProgress variant="determinate" value={60} className="uvProgress"/>
                      </Col>
                      <Col xs="2" sm="2" md="2" lg="2" className="uvProgressBar">
                        6-7
                        <LinearProgress variant="determinate" value={0} className="uvProgress"/>
                      </Col>
                      <Col xs="2" sm="2" md="2" lg="2" className="uvProgressBar">
                        8-10
                        <LinearProgress variant="determinate" value={0} className="uvProgress"/>
                      </Col>
                      <Col xs="2" sm="2" md="2" lg="2" className="uvProgressBar">
                        11+
                        <LinearProgress variant="determinate" value={0} className="uvProgress"/>
                      </Col>
                    </Row>
                  </Row>
                </Col>
                      {/* 1 card End */}

                      {/* 2 card Start */}
                <Col xs="12" sm="6" md="6" lg="4">
                  <Row className="weatherCard weatherCardHeightProp">
                    <Row style={{padding:5}}>
                      <Col>Feel like</Col>
                      <Col>
                        <ThermostatOutlinedIcon className="weatherIcon"/>
                      </Col>
                    </Row>
                    <Row style={{padding:5}}>
                      <Col className="humidityText">
                        <span style={{fontSize:20,fontWeight:'bold'}} >30°</span>
                      </Col>
                    </Row>
                    <Row>
                    <Col xs="4" sm="4" md="4" lg="4" className="feelLikeValue degreeHeader1" >
                        0°
                      </Col>
                      <Col xs="4" sm="4" md="4" lg="4" className="feelLikeValue" >
                        25°
                      </Col><Col xs="4" sm="4" md="4" lg="4" className="feelLikeValue degreeHeader3" >
                        50°
                      </Col>
                    </Row>
                    <Row>
                    <LinearProgress variant="determinate" value={60} className="uvProgress" />
                    </Row>
                  </Row>
                </Col>
                      {/* 2 card End */}

                      {/* 3 card Start */}
                <Col xs="12" sm="6" md="6" lg="4">
                  <Row className="weatherCard weatherCardHeightProp">
                    <Row style={{padding:5}}>
                      <Col xs="8" sm="8" md="8" lg="8">Chance of rain</Col>
                      <Col xs="4" sm="4" md="4" lg="4">
                        <ThunderstormOutlinedIcon className="weatherIcon"/>
                      </Col>
                    </Row>
                    <Row style={{padding:5}}>
                      <Col className="humidityText">
                        <span style={{fontSize:20,fontWeight:'bold'}} >42%</span>
                      </Col>
                    </Row>
                    <Row>
                    <Col xs="2" sm="2" md="2" lg="2" className="ChancePercent" >
                        0°
                      </Col>
                      <Col xs="2" sm="2" md="2" lg="2" className="ChancePercent" >
                        25°
                      </Col>
                      <Col xs="2" sm="2" md="2" lg="2" className="ChancePercent" >
                        50°
                      </Col>
                      <Col xs="2" sm="2" md="2" lg="2" className="ChancePercent" >
                        75°
                      </Col>
                      <Col xs="2" sm="2" md="2" lg="2" className="ChancePercent">
                        100°
                      </Col>
                    </Row>
                    <Row>
                    <LinearProgress variant="determinate" value={42} className="uvProgress" />
                    </Row>
                  </Row>
                </Col>
                      {/* 3 card End */}
              </Row>
                {/* 3 Row two Ends */}
              
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Weather;
