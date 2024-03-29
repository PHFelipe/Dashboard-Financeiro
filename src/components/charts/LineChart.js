import React, { useState } from 'react';
import { FlexibleXYPlot, LineSeries, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, Crosshair } from 'react-vis';
import 'react-vis/dist/style.css';

const LineChart = () => {
  const data = [
    { x: 1, y: 100 },
    { x: 2, y: 150 },
    { x: 3, y: 200 },
    { x: 4, y: 180 },
    { x: 5, y: 220 },
    { x: 6, y: 250 },
    { x: 7, y: 280 },
    { x: 8, y: 300 },
    { x: 9, y: 320 },
    { x: 10, y: 350 },
    { x: 11, y: 380 },
    { x: 12, y: 400 },
    { x: 13, y: 420 },
    { x: 14, y: 450 },
    { x: 15, y: 480 },
    { x: 16, y: 500 },
    { x: 17, y: 520 },
    { x: 18, y: 550 },
    { x: 19, y: 580 },
    { x: 20, y: 600 },
    { x: 21, y: 620 },
    { x: 22, y: 650 },
    { x: 23, y: 680 },
    { x: 24, y: 700 },
    { x: 25, y: 720 },
    { x: 26, y: 750 },
    { x: 27, y: 780 },
    { x: 28, y: 800 },
    { x: 29, y: 820 },
    { x: 30, y: 850 },
  ];

  const [crosshairValues, setCrosshairValues] = useState([]);

  const handleMouseLeave = () => {
    setCrosshairValues([]);
  };

  const handleNearestX = (value, { index }) => {
    setCrosshairValues([data[index]]);
  };

  return (
    <div style={{ marginTop: '15px' }}>
      <FlexibleXYPlot className="line-chart" height={350} onMouseLeave={handleMouseLeave}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis 
          title="Dias" 
          tickTotal={30} 
          tickFormat={(d) => `${d}`}
          position="end"
          style={{
            text: { fill: 'black' }, // Cor do texto
            title: { fill: 'black' } // Cor do título
          }}
          />
        <YAxis 
          title="R$"
          position="end"
          style={{
            text: { fill: 'black' }, // Cor do texto
            title: { fill: 'black' } // Cor do título
          }}
        />
        <LineSeries 
          data={data} 
          onNearestX={handleNearestX} 
          style={{ stroke: '#3c3c3c', strokeWidth: 3 }} 
        />
        <Crosshair values={crosshairValues}>
          <div style={{ background: 'rgba(255, 255, 255, 0.8)', border: '1px solid #aaa', padding: '5px' }}>
            {crosshairValues.map(value => (
              <div key={value.x}>
                <p>{`Dia: ${value.x}`}</p>
                <p>{`R$: ${value.y.toFixed(2)}`}</p>
              </div>
            ))}
          </div>
        </Crosshair>
      </FlexibleXYPlot>
    </div>
  );
};

export default LineChart;
