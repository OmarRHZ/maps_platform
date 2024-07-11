import { useState, useEffect } from "react";
import { Card, Layout, Statistic, Select, Divider } from "antd";
import MapLeaflet from "../components/map-leaflet"; //eslint-disable-line
import GoogleMapComponent from "../components/map-google";
import dataJson from "../data/dataShapeFiles.json";
import { UserOutlined } from "@ant-design/icons";

const { Option } = Select;

console.log(dataJson);
//transformar el json para que sean items de un menu

const options = Object.entries(dataJson).map(([key, value]) => ({
  value: key,
  label: value.Name,
  description: value.Description,
  lat: value.lat,
  lng: value.lng,
  zoom: value.zoom,
}));

console.log(options);

const items = [
  {
    Name: "CR-001",
    label: "CR-001",
    value: "CR-001",
    Description: "This is a test CR1",
    lat: 8.61662274,
    lng: -83.46836099000001,
    zoom: 18,
    icon: <UserOutlined />,
  },
  {
    Name: "CR-002",
    label: "CR-002",
    value: "CR-002",
    Description: "This is a test CR2",
    lat: 8.622217615,
    lng: -83.475910215,
    zoom: 19,
    icon: <UserOutlined />,
  },
  {
    Name: "CR-004",
    label: "CR-004",
    value: "CR-004",
    Description: "This is a test CR4",
    lat: 8.678973095,
    lng: -83.573310465,
    zoom: 19,
    icon: <UserOutlined />,
  },
  {
    Name: "CR-005",
    label: "CR-005",
    value: "CR-005",
    Description: "This is a test CR5",
    lat: 8.439203415,
    lng: -83.28111845000001,
    zoom: 19,
    icon: <UserOutlined />,
  },
  {
    Name: "CR-006",
    label: "CR-006",
    value: "CR-006",
    Description: "This is a test CR6",
    lat: 8.698791145000001,
    lng: -83.51053506,
    zoom: 19,
    icon: <UserOutlined />,
  },
  {
    Name: "CR-007",
    label: "CR-007",
    value: "CR-007",
    Description: "This is a test CR7",
    lat: 8.71162307,
    lng: -83.565953065,
    zoom: 17,
    icon: <UserOutlined />,
  },
  {
    Name: "CR-008",
    label: "CR-008",
    value: "CR-008",
    Description: "This is a test CR8",
    lat: 8.564713645,
    lng: -83.43366829,
    zoom: 19,
    icon: <UserOutlined />,
  },
];

console.log(items);

const { Content, Sider } = Layout;

const handleMenuClick = (e) => {
  console.log("click", e);
};

const menuProps = {  //eslint-disable-line
  items,
  onClick: handleMenuClick,
};

const MainPage = () => {
  const [shapeFile, setShapeFile] = useState();
  const [description, setDescription] = useState();
  const [lat, setLat] = useState();
  const [lng, setLng] = useState();
  const [zoom, setZoom] = useState();

  const [valueCO2, setValueCO2] = useState(0);
  const [valueKg, setValueKg] = useState(50);

  const onChangeShapeFile = (value) => {
    console.log(`selected ${value}`);
    setShapeFile(value);
    const shapeFileData = options.find((item) => item.value === value);
    console.log(shapeFileData);
    setDescription(shapeFileData.description);
    setLat(shapeFileData.lat);
    setLng(shapeFileData.lng);
    setZoom(shapeFileData.zoom);
  };

  // useEffect(() => {
  //   //find the shapefile in options
  //   const shapeFileData = options.find((item) => item.value === shapeFile);
  //   console.log(shapeFileData);
  //   setDescription(shapeFileData.description);
  //   setLat(shapeFileData.lat);
  //   setLng(shapeFileData.lng);
  //   setZoom(shapeFileData.zoom);
  // }, [shapeFile]);
  useEffect(() => {
    const interval = setInterval(() => {
      setValueCO2((prevValue) => {
        if (prevValue < 1000) {
          return prevValue + 0.1; // Incremento por paso, ajusta este valor según la velocidad que desees
        } else {
          clearInterval(interval);
          return prevValue;
        }
      });
    }, 1000); // Intervalo de tiempo en milisegundos, ajusta según la velocidad que desees

    return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonte
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setValueKg((prevValue) => {
        if (prevValue < 1000) {
          return prevValue + 0.1; // Incremento por paso, ajusta este valor según la velocidad que desees
        } else {
          clearInterval(interval);
          return prevValue;
        }
      });
    }, 1000); // Intervalo de tiempo en milisegundos, ajusta según la velocidad que desees

    return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonte
  }, []);

  return (
    <div className="main-container">
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Sider>
          {/*Listar los CR-00 que hay en un json con un Map */}
          <div className="div-options">
            <Select
              style={{ width: 200 }}
              placeholder="Select a location"
              onChange={onChangeShapeFile}
            >
              {options.map((item) => (
                <Option key={item.value} value={item.value}>
                  {item.label}
                </Option>
              ))}
            </Select>
            <div className="div-descriptions">
              <h1>{shapeFile}</h1>
              <Card className="card-co2">
                <Statistic
                  title="Total CO2:"
                  className="statistic-co2"
                  value={valueCO2}
                  precision={1} // Número de decimales
                  formatter={(value) => `${value.toFixed(1)}`} // Formatear el valor para mostrar un decimal
                  suffix="   CO₂"
                />
                <Divider type="vertical" className="divider-co2" />
                <Statistic
                  title="Total Biomass:"
                  style={{ marginLeft: "0" }}
                  className="statistic-co2"
                  value={valueKg}
                  precision={1} // Número de decimales
                  formatter={(value) => `${value.toFixed(1)}`} // Formatear el valor para mostrar un decimal
                  suffix="g"
                />
              </Card>
              <h3 style={{ marginBottom: "-1vh", textDecoration: "underline" }}>
                About:
              </h3>
              <h3 style={{ fontSize: "14px" }}>{description}</h3>
            </div>
            <div className="div-descriptions">
              <h3 style={{ marginBottom: "-1vh", textDecoration: "underline" }}>
                Trees and shrubs observed in the region:
              </h3>
              <h3 style={{ fontSize: "14px" }}>TODO</h3>
            </div>
            <div className="div-descriptions">
              <h3 style={{ marginBottom: "-1vh", textDecoration: "underline" }}>
                Herbs and other plants observed in the region:
              </h3>
              <h3 style={{ fontSize: "14px" }}>TODO</h3>
            </div>
          </div>
        </Sider>
        <Layout>
          <Content>
            {/* <MapLeaflet /> */}
            <GoogleMapComponent
              geoCode={shapeFile}
              lat={lat}
              lng={lng}
              zoom={zoom}
            ></GoogleMapComponent>
            {/* <iframe className="iframe-map" src="http://localhost:5173/map-google" ></iframe> */}
          </Content>
        </Layout>
      </Layout>
      {/* <iframe className="iframe-map" src="http://localhost:5173/map" ></iframe> */}
    </div>
  );
};
export default MainPage;
