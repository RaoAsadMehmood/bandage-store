import { useState, useEffect, useRef } from 'react';

interface StatItem {
  value: number;
  label: string;
  suffix: string;
  displayValue: number;
}

interface AnimatedNumberProps {
  endValue: number;
  label: string;
  suffix: string;
  startAnimation: boolean;
}

const stats: StatItem[] = [
  { value: 15000, label: 'Happy Customers', suffix: ' K', displayValue: 15 },
  { value: 150000, label: 'Monthly Visitors', suffix: ' K', displayValue: 150 },
  { value: 15, label: 'Countries Worldwide', suffix: '', displayValue: 15 },
  { value: 100, label: 'Top partners', suffix: '+', displayValue: 100 }
];

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ 
  endValue, 
  label, 
  suffix, 
  startAnimation 
}) => {
  const [count, setCount] = useState<number>(0);
  const duration = 3000;
  const framesPerSecond = 60;
  const totalFrames = (duration / 1000) * framesPerSecond;
  
  useEffect(() => {
    if (!startAnimation) return;
    
    let currentFrame = 0;
    const increment = endValue / totalFrames;
    
    const timer = setInterval(() => {
      currentFrame++;
      if (currentFrame <= totalFrames) {
        setCount(Math.min(Math.floor(increment * currentFrame), endValue));
      } else {
        clearInterval(timer);
      }
    }, duration / totalFrames);

    return () => clearInterval(timer);
  }, [endValue, startAnimation, totalFrames]);

  return (
    <div className="flex flex-col items-center justify-center text-center transform transition-all duration-500 ease-out">
      <p className="text-3xl md:text-4xl lg:text-[54px] text-[#252B42] font-bold">
        {count}{suffix}
      </p>
      <span className="text-sm md:text-base text-[#737373] font-bold mt-2">
        {label}
      </span>
    </div>
  );
};

const AnimatedStats: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      threshold: 0.2,
      rootMargin: '50px'
    };

    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      observerOptions
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full px-4 md:px-8 lg:px-[195.5px]">
      <div className="w-full py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <AnimatedNumber
            key={index}
            endValue={stat.displayValue}
            label={stat.label}
            suffix={stat.suffix}
            startAnimation={isVisible}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedStats;