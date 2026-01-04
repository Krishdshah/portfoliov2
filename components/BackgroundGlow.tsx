export default function BackgroundGlow() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
       {/* Top Left Blob */}
       <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-brand-accent/20 rounded-full blur-[80px] md:blur-[128px] -translate-x-1/2 -translate-y-1/2" />
       
       {/* Bottom Right Blob */}
       <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-purple-500/10 rounded-full blur-[80px] md:blur-[128px] translate-x-1/2 translate-y-1/2" />
    </div>
  );
}