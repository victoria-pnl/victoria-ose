interface BlobsProps {
  variant?: "cream" | "beige";
}

export function BlurBlobs({ variant = "cream" }: BlobsProps) {
  const rose   = "201, 144, 138"; // dusty-rose
  const beige  = "232, 221, 208"; // light-beige
  const brown  = "166, 124, 82";  // mid-brown
  const sage   = "122, 150, 133"; // sage-green

  const base = variant === "cream" ? 0.55 : 0.45;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Grand blob rose — haut gauche */}
      <div className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full"
        style={{ background: `radial-gradient(circle, rgba(${rose},${base}) 0%, transparent 60%)`, filter: "blur(80px)" }} />
      {/* Blob beige chaud — droite centre */}
      <div className="absolute top-0 -right-40 w-[600px] h-[600px] rounded-full"
        style={{ background: `radial-gradient(circle, rgba(${beige},${base + 0.1}) 0%, transparent 60%)`, filter: "blur(70px)" }} />
      {/* Blob brun doux — bas gauche */}
      <div className="absolute -bottom-32 -left-20 w-[500px] h-[500px] rounded-full"
        style={{ background: `radial-gradient(circle, rgba(${brown},${base - 0.15}) 0%, transparent 60%)`, filter: "blur(90px)" }} />
      {/* Blob rose — bas droite */}
      <div className="absolute -bottom-20 -right-20 w-[550px] h-[550px] rounded-full"
        style={{ background: `radial-gradient(circle, rgba(${rose},${base - 0.1}) 0%, transparent 60%)`, filter: "blur(75px)" }} />
      {/* Petit blob sauge — centre */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full"
        style={{ background: `radial-gradient(circle, rgba(${sage},${base - 0.25}) 0%, transparent 55%)`, filter: "blur(100px)" }} />
    </div>
  );
}
