import React from "react";

interface Props {
  className?: string;
}

export const Section1: React.FC<Props> = ({ className }) => (
  <svg viewBox="0 0 692 360" className={className}>
    {/* 指数增长曲线 */}
    <path
      d="M 100,260 Q 200,250 300,200 T 500,90 600,30"
      fill="none"
      stroke="#FFFFFF"
      strokeWidth="3"
      strokeDasharray="1000"
      style={{ animation: "growPath 3s ease-out forwards" }}
    />

    {/* 普通增长直线 */}
    <line
      x1="100"
      y1="260"
      x2="600"
      y2="200"
      stroke="#808080"
      strokeWidth="2"
      strokeDasharray="1000"
      style={{ animation: "growPath 3s ease-out forwards" }}
    />

    {/* 时间刻度 */}
    <g style={{ animation: "fadeIn 2s ease-out 1s forwards" }} opacity="0">
      <text
        x="100"
        y="290"
        fill="#FFFFFF"
        fontFamily="YSHaoShenTi"
        fontSize="14"
      >
        0
      </text>
      <text
        x="600"
        y="290"
        fill="#FFFFFF"
        fontFamily="YSHaoShenTi"
        fontSize="14"
      >
        1年
      </text>
    </g>

    {/* 增长标记 */}
    <g style={{ animation: "fadeIn 2s ease-out 2s forwards" }} opacity="0">
      <text
        x="620"
        y="200"
        fill="#808080"
        fontFamily="YSHaoShenTi"
        fontSize="14"
      >
        1倍
      </text>
      <text
        x="620"
        y="30"
        fill="#FFFFFF"
        fontFamily="YSHaoShenTi"
        fontSize="14"
      >
        10倍
      </text>
    </g>

    {/* 垂直参考线 */}
    <g
      stroke="#808080"
      strokeWidth="1"
      strokeDasharray="4,4"
      style={{ animation: "fadeIn 2s ease-out 1.5s forwards" }}
      opacity="0"
    >
      <line x1="100" y1="30" x2="100" y2="260" />
      <line x1="600" y1="30" x2="600" y2="260" />
    </g>
  </svg>
);
export const Section2: React.FC<Props> = ({ className }) => (
  <svg viewBox="0 0 800 600" className={className}>
    {/* 三个工具圆形布局 */}
    <g transform="translate(400,300)">
      <circle
        cx="-200"
        cy="0"
        r="100"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="2"
      />
      <text
        x="-200"
        y="0"
        fill="#FFFFFF"
        fontFamily="YSHaoShenTi"
        fontSize="24"
        textAnchor="middle"
      >
        Harvest
        <tspan x="-200" y="30" fontSize="16">
          收藏助手
        </tspan>
      </text>

      <circle
        cx="0"
        cy="-173"
        r="100"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="2"
      />
      <text
        x="0"
        y="-173"
        fill="#FFFFFF"
        fontFamily="YSHaoShenTi"
        fontSize="24"
        textAnchor="middle"
      >
        Shining
        <tspan x="0" y="-143" fontSize="16">
          文字可视化
        </tspan>
      </text>

      <circle
        cx="200"
        cy="0"
        r="100"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="2"
      />
      <text
        x="200"
        y="0"
        fill="#FFFFFF"
        fontFamily="YSHaoShenTi"
        fontSize="24"
        textAnchor="middle"
      >
        Notion Nice
        <tspan x="200" y="30" fontSize="16">
          一键排版
        </tspan>
      </text>

      {/* 连接线 */}
      <path
        d="M-173,0 L173,0 M-100,-173 L100,-173 M0,-100 L0,100"
        stroke="#808080"
        strokeWidth="1"
        opacity="0.5"
      />

      {/* 中心放大效果 */}
      <circle cx="0" cy="0" r="50" fill="#FFFFFF" opacity="0.1" />
      <text
        x="0"
        y="10"
        fill="#FFFFFF"
        fontFamily="YSHaoShenTi"
        fontSize="40"
        textAnchor="middle"
      >
        10X
      </text>
    </g>

    {/* 标题 */}
    <text
      x="400"
      y="550"
      fill="#FFFFFF"
      fontFamily="YSHaoShenTi"
      fontSize="32"
      textAnchor="middle"
    >
      独创三大效率工具
    </text>

    {/* 副标题 */}
    <text
      x="400"
      y="580"
      fill="#808080"
      fontFamily="YSHaoShenTi"
      fontSize="20"
      textAnchor="middle"
    >
      提升10倍生产力
    </text>
  </svg>
);
