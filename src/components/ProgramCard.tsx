import { useState, ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

export interface ProgramProps {
  title: string;
  description: string;
  icon: ReactNode;
  bgColor?: string;
  link: string;
}

const ProgramCard = ({ title, description, icon, bgColor = 'bg-blue-50', link }: ProgramProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="animated-card overflow-hidden border-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`${bgColor} p-6 transition-all duration-300 ${isHovered ? 'scale-105' : 'scale-100'}`}>
        {icon}
      </div>
      <CardHeader className="pt-4">
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter>
        <Button asChild variant="ghost" className="p-0 hover:bg-transparent hover:text-consulting-blue">
          <Link to={link} className="flex items-center text-consulting-blue font-medium">
            Learn more
            <ArrowRight className={`ml-2 h-4 w-4 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProgramCard;