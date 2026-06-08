export default function BackgroundGlow() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
       {/* Top Left Drift Blob */}
       <div className="absolute top-10 left-10 w-72 h-72 md:w-[500px] md:h-[500px] bg-blue-500/10 rounded-full blur-[100px] md:blur-[150px] -translate-x-1/2 -translate-y-1/2 animate-pulse-slow" />
       
       {/* Bottom Right Drift Blob */}
       <div className="absolute bottom-10 right-10 w-72 h-72 md:w-[500px] md:h-[500px] bg-purple-500/5 rounded-full blur-[100px] md:blur-[150px] translate-x-1/2 translate-y-1/2 animate-pulse-slow" style={{ animationDelay: '3s' }} />
    </div>
  );
}