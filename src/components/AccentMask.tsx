// Renders a monochrome SVG tinted to the current accent colour by using the
// asset as a CSS mask (the underlying orange baked into the file is ignored).
export default function AccentMask({
  src,
  className = "",
  stretch = false,
  color,
}: {
  src: string;
  className?: string;
  stretch?: boolean;
  color?: string;
}) {
  const size = stretch ? "100% 100%" : "contain";
  return (
    <div
      className={`accent-mask ${className}`}
      style={{
        WebkitMaskImage: `url(${src})`,
        maskImage: `url(${src})`,
        WebkitMaskSize: size,
        maskSize: size,
        ...(color ? { backgroundColor: color } : {}),
      }}
    />
  );
}
