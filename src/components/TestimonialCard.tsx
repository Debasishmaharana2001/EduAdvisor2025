
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  avatarSrc?: string;
  college?: string;
}

const TestimonialCard = ({ name, role, content, avatarSrc, college }: TestimonialProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const initials = name.split(' ').map(n => n[0]).join('');

  return (
    <Card 
      className={`overflow-hidden transition-all duration-300 border border-gray-100 ${
        isHovered ? 'shadow-lg -translate-y-1' : 'shadow-sm'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="relative">
            <svg 
              className="absolute -top-3 -left-3 h-8 w-8 text-consulting-blue/20" 
              fill="currentColor" 
              viewBox="0 0 32 32"
            >
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <p className="text-base relative z-10">{content}</p>
          </div>
          <div className="flex items-center gap-4">
            <Avatar className="h-10 w-10">
              {avatarSrc && <AvatarImage src={avatarSrc} alt={name} />}
              <AvatarFallback className="bg-consulting-blue text-white">{initials}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">{name}</p>
              <p className="text-xs text-muted-foreground">{role}</p>
              {college && <p className="text-xs text-consulting-blue">{college}</p>}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
