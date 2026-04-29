const SplashScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex h-screen w-screen flex-col items-center justify-center bg-[#F9F3EA]">
      {/* Animasi Spinner */}
      <div className="relative flex items-center justify-center">
        <div className="absolute h-24 w-24 animate-spin rounded-full border-4 border-[#FFA552] border-t-transparent"></div>
        
        {/* Icon Paw di tengah Spinner */}
        <div className="animate-pulse text-[#FFA552]">
          <svg aria-hidden="true" viewBox="0 0 64 64" className="h-10 w-10" fill="currentColor">
             <path d="M25.53 35.93c-5.23 4.1-8.73 9.03-7.3 13.37 1.88 5.66 10.23 5.34 13.77 1.75 3.54 3.59 11.89 3.91 13.77-1.75 1.43-4.34-2.07-9.27-7.3-13.37-3.03-2.38-7.6-2.38-10.94 0Z" />
             <path d="M18.22 24.36c2.88 0 5.21-3.22 5.21-7.2s-2.33-7.2-5.21-7.2-5.21 3.22-5.21 7.2 2.33 7.2 5.21 7.2Z" />
             <path d="M30.1 18.16c2.88 0 5.21-3.22 5.21-7.2s-2.33-7.2-5.21-7.2-5.21 3.22-5.21 7.2 2.33 7.2 5.21 7.2Z" />
             <path d="M45.78 24.36c2.88 0 5.21-3.22 5.21-7.2s-2.33-7.2-5.21-7.2-5.21 3.22-5.21 7.2 2.33 7.2 5.21 7.2Z" />
             <path d="M54.71 36.07c2.56 0 4.64-2.86 4.64-6.39s-2.08-6.39-4.64-6.39-4.64 2.86-4.64 6.39 2.08 6.39 4.64 6.39Z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;