interface LogoProps {
  variant?: "default" | "outline";
  size?: number;
}

export default function Logo({ variant = "default", size = 16 }: LogoProps) {
  const isOutline = variant === "outline";
  const scale = size / 16;

  return (
    <div
      className="relative flex-shrink-0"
      style={{ width: size, height: size }}
    >
      {isOutline ? (
        // Large outline version for hero
        <div
          className="relative"
          style={{ width: 155 * scale, height: 155 * scale }}
        >
          {/* Left side */}
          <div
            className="absolute border border-dev-primary"
            style={{
              width: 78 * scale,
              height: 116 * scale,
              left: 0,
              top: 39 * scale,
            }}
          >
            <div
              className="absolute bg-dev-white"
              style={{
                width: 39 * scale,
                height: 39 * scale,
                left: 39 * scale,
                top: 0,
              }}
            />
            <div
              className="absolute bg-dev-white"
              style={{ width: 39 * scale, height: 39 * scale, left: 0, top: 0 }}
            />
            <div
              className="absolute bg-dev-white"
              style={{
                width: 39 * scale,
                height: 39 * scale,
                left: 0,
                top: 39 * scale,
              }}
            />
            <div
              className="absolute bg-dev-white"
              style={{
                width: 39 * scale,
                height: 39 * scale,
                left: 0,
                top: 78 * scale,
              }}
            />
            <div
              className="absolute bg-dev-white"
              style={{
                width: 39 * scale,
                height: 39 * scale,
                left: 39 * scale,
                top: 78 * scale,
              }}
            />
          </div>
          {/* Right side */}
          <div
            className="absolute border border-dev-primary"
            style={{
              width: 78 * scale,
              height: 116 * scale,
              left: 78 * scale,
              top: 0,
            }}
          >
            <div
              className="absolute bg-dev-white"
              style={{ width: 39 * scale, height: 39 * scale, left: 0, top: 0 }}
            />
            <div
              className="absolute bg-dev-white"
              style={{
                width: 39 * scale,
                height: 39 * scale,
                left: 39 * scale,
                top: 78 * scale,
              }}
            />
            <div
              className="absolute bg-dev-white"
              style={{
                width: 39 * scale,
                height: 39 * scale,
                left: 39 * scale,
                top: 39 * scale,
              }}
            />
            <div
              className="absolute bg-dev-white"
              style={{
                width: 39 * scale,
                height: 39 * scale,
                left: 39 * scale,
                top: 0,
              }}
            />
            <div
              className="absolute bg-dev-white"
              style={{
                width: 39 * scale,
                height: 39 * scale,
                left: 0,
                top: 78 * scale,
              }}
            />
          </div>
        </div>
      ) : (
        // Small filled version for header
        <div className="relative w-4 h-4">
          <div
            className="absolute w-1 h-1 bg-dev-white"
            style={{ left: 8, top: 0 }}
          />
          <div
            className="absolute w-1 h-1 bg-dev-white"
            style={{ left: 12, top: 8 }}
          />
          <div
            className="absolute w-1 h-1 bg-dev-white"
            style={{ left: 12, top: 4 }}
          />
          <div
            className="absolute w-1 h-1 bg-dev-white"
            style={{ left: 12, top: 0 }}
          />
          <div
            className="absolute w-1 h-1 bg-dev-white"
            style={{ left: 8, top: 8 }}
          />
          <div
            className="absolute w-1 h-1 bg-dev-white"
            style={{ left: 4, top: 4 }}
          />
          <div
            className="absolute w-1 h-1 bg-dev-white"
            style={{ left: 0, top: 4 }}
          />
          <div
            className="absolute w-1 h-1 bg-dev-white"
            style={{ left: 0, top: 8 }}
          />
          <div
            className="absolute w-1 h-1 bg-dev-white"
            style={{ left: 0, top: 12 }}
          />
          <div
            className="absolute w-1 h-1 bg-dev-white"
            style={{ left: 4, top: 12 }}
          />
        </div>
      )}
    </div>
  );
}
