import Link from 'next/link';

export default function Logo() {
  return (
    <div className="fixed bottom-8 left-8 z-50">
      <Link href="/" className="flex items-center group">
        <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-colors">
          <span className="text-2xl font-bold text-white">Y</span>
        </div>
        <span className="ml-3 text-white text-lg font-medium hidden md:inline-block">YourBrand</span>
      </Link>
    </div>
  );
}
