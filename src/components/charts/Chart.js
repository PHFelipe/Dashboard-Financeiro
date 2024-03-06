import "../../../node_modules/react-vis/dist/style.css";
import { XYPlot, LineSeries, XAxis, YAxis, VerticalGridLines, HorizontalGridLines } from "react-vis";

const Chart = () => {
    // Gera uma série de dados dinamicamente
    const generateData = () => {
      let data = [];
      for (let i = 0; i < 10; i++) { // Gera 10 pontos de dados
        data.push({ x: i, y: Math.floor(Math.random() * 10) }); // Y varia de 0 a 9 aleatoriamente
      }
      return data;
    };
  
    const data = generateData();
  
    return (
      <div className= {{ marginTop: "15px"}}>
      <XYPlot height={300} width={300}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis title="X Axis" />
        <YAxis title="Y Axis" />
        <LineSeries data={data} style={{ stroke: 'violet', strokeWidth: 3 }} />
      </XYPlot>
      </div>
    );
  };
  
  export default Chart;