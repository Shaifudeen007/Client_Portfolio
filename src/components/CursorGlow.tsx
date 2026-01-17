import { useMousePosition } from '@/hooks/useMousePosition';

const CursorGlow = () => {
  const { x, y } = useMousePosition();

  return (
    <>
      <div
        className="cursor-glow-primary"
        style={{
          left: x,
          top: y,
        }}
      />
      <div
        className="cursor-glow-secondary"
        style={{
          left: x,
          top: y,
        }}
      />
    </>
  );
};

export default CursorGlow;
