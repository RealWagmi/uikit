function CustomBar({ x, y, width, height, fill }: { x: number; y: number; width: number; height: number; fill: string }) {
    return (
        <g>
            <rect x={x} y={y} fill={fill} width={width} height={height} rx="2" />
        </g>
    );
};

export default CustomBar;