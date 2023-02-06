import React from "react";
import "./styles.css";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from "recharts";

const dados = [
  { item: "Proativo", nota: 10 },
  { item: "Criativo", nota: 7 },
  { item: "Resiliente", nota: 2 },
  { item: "Responsável", nota: 2 },
  { item: "Comunicativo", nota: 5 }
];

export default function Grafico() {
  return (
    <RadarChart cy={250} width={700} height={400} data={dados} >
      <PolarGrid />
      <PolarAngleAxis dataKey="item" fontSize={20} />
      <Radar name="FeedbackStats" dataKey="nota" stroke="#0000ee" fill="#015fe1" fillOpacity={0.8} />
    </RadarChart>
  )
};
