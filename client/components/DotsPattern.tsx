interface DotsPatternProps {
  rows?: number;
  cols?: number;
  className?: string;
}

export default function DotsPattern({ rows = 5, cols = 5, className = "" }: DotsPatternProps) {
  const dotSpacing = rows === 5 ? (cols === 5 ? 20 : cols === 4 ? 25 : 16.75) : 25;
  const width = (cols - 1) * dotSpacing + 4;
  const height = (rows - 1) * (rows === 5 ? 20 : 16) + 4;

  return (
    <div className={`flex flex-col justify-between ${className}`} style={{ width, height, gap: rows === 5 ? 16 : 12 }}>
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <svg
          key={rowIndex}
          className="flex justify-between items-start self-stretch"
          width={width}
          height="4"
          viewBox={`0 0 ${width} 4`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {Array.from({ length: cols }).map((_, colIndex) => (
            <circle
              key={colIndex}
              cx={2 + colIndex * dotSpacing}
              cy="2"
              r="2"
              fill="#ABB2BF"
            />
          ))}
        </svg>
      ))}
    </div>
  );
}
